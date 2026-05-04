"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Link, Zap, LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: LucideIcon;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [containerSize, setContainerSize] = useState(420);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Responsive sizing for desktop
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setContainerSize(520);
      } else if (width >= 1024) {
        setContainerSize(480);
      } else if (width >= 768) {
        setContainerSize(420);
      } else {
        setContainerSize(320);
      }
    };
    
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval>;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    // Dynamic radius based on container size
    const radius = (containerSize / 2) - 30;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-primary border-primary";
      case "in-progress":
        return "text-primary bg-primary/20 border-primary";
      case "pending":
        return "text-muted-foreground bg-muted border-muted-foreground/50";
      default:
        return "text-muted-foreground bg-muted border-muted-foreground/50";
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] flex items-center justify-center select-none"
    >
      <div 
        className="relative transition-all duration-500"
        style={{ width: containerSize, height: containerSize }}
      >
        <div
          ref={orbitRef}
          className="absolute inset-0 rounded-full border border-primary/20 transition-all duration-1000"
        >
          <div className="absolute inset-8 rounded-full border border-primary/10 transition-all duration-1000" />
          <div className="absolute inset-16 rounded-full border border-primary/5 transition-all duration-1000" />
        </div>

        {/* Center Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary/20 backdrop-blur-lg border border-primary/40 flex items-center justify-center shadow-lg shadow-primary/20 transition-all duration-500">
            <Zap className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
          </div>
        </div>

        {timelineData.map((item, index) => {
          const position = calculateNodePosition(index, timelineData.length);
          const isExpanded = expandedItems[item.id];
          const isRelated = isRelatedToActive(item.id);
          const isPulsing = pulseEffect[item.id];
          const Icon = item.icon;

          const nodeStyle = {
            transform: `translate(${position.x}px, ${position.y}px)`,
            zIndex: isExpanded ? 200 : position.zIndex,
            opacity: isExpanded ? 1 : position.opacity,
          };

          return (
            <div
              key={item.id}
              ref={(el) => (nodeRefs.current[item.id] = el)}
              className="absolute transition-all duration-700 cursor-pointer group"
              style={{
                ...nodeStyle,
                top: "50%",
                left: "50%",
                marginLeft: "-28px",
                marginTop: "-28px",
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(item.id);
              }}
              onMouseEnter={() => {
                setHoveredItem(item.id);
                setAutoRotate(false);
              }}
              onMouseLeave={() => {
                setHoveredItem(null);
                if (!activeNodeId) {
                  setAutoRotate(true);
                }
              }}
            >
              {/* Pulse Effect */}
              {isPulsing && (
                <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              )}

              {/* Node Circle */}
              <div
                className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full backdrop-blur-lg flex items-center justify-center transition-all duration-300 ${
                  isExpanded
                    ? "bg-primary border-2 border-primary scale-125"
                    : isRelated
                    ? "bg-primary/30 border-2 border-primary scale-110"
                    : hoveredItem === item.id
                    ? "bg-primary/40 border-2 border-primary scale-115"
                    : "bg-muted/80 border border-primary/30 hover:bg-primary/20 hover:border-primary/50"
                }`}
              >
                <Icon
                  className={`w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 ${
                    isExpanded ? "text-primary-foreground" : "text-primary"
                  }`}
                />
              </div>

              {/* Title Below Node */}
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className={`text-xs md:text-sm font-medium transition-colors duration-300 ${
                  isExpanded || hoveredItem === item.id ? "text-primary" : "text-muted-foreground"
                }`}>
                  {item.title}
                </span>
              </div>

              {/* Hover Preview for Desktop - Quick Info */}
              {hoveredItem === item.id && !isExpanded && (
                <div className="hidden md:block absolute left-16 top-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-lg border border-primary/30 rounded-lg p-3 shadow-lg shadow-primary/10 w-48 z-[250]">
                  <p className="text-xs text-muted-foreground mb-1">{item.category}</p>
                  <p className="text-sm font-medium text-foreground mb-2">{item.title}</p>
                  <p className="text-[10px] text-muted-foreground">Click for details</p>
                </div>
              )}

              {/* Expanded Card */}
              {isExpanded && (
                <Card className="absolute left-20 top-1/2 -translate-y-1/2 w-72 bg-card/95 backdrop-blur-lg border-primary/30 shadow-xl shadow-primary/10">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-end">
                      <span className="text-xs text-muted-foreground">
                        {item.date}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-display">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.content}
                    </p>


                    {item.relatedIds.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <Link className="w-4 h-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            Connected Nodes
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.relatedIds.map((relatedId) => {
                            const relatedItem = timelineData.find(
                              (i) => i.id === relatedId
                            );
                            return (
                              <Button
                                key={relatedId}
                                variant="outline"
                                size="sm"
                                className="text-xs h-7 border-primary/30 hover:bg-primary/20"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleItem(relatedId);
                                }}
                              >
                                {relatedItem?.title}
                                <ArrowRight className="w-3 h-3 ml-1" />
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export type { TimelineItem };
