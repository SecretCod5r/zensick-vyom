"use client"

import { useState, useEffect, useCallback, type ReactNode } from "react"
import { motion, AnimatePresence, LayoutGroup, type PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"
import { Grid3X3, Layers, LayoutList, Target, BarChart3, TrendingUp, Zap, ChevronLeft, ChevronRight } from "lucide-react"

export type LayoutMode = "stack" | "grid" | "list"

export interface CardData {
  id: string
  title: string
  description: string
  icon?: ReactNode
  color?: string
}

export interface MorphingCardStackProps {
  cards?: CardData[]
  className?: string
  defaultLayout?: LayoutMode
  onCardClick?: (card: CardData) => void
}

const layoutIcons = {
  stack: Layers,
  grid: Grid3X3,
  list: LayoutList,
}

const SWIPE_THRESHOLD = 50

// Default ZENSICK-themed cards
const defaultCards: CardData[] = [
  {
    id: "1",
    title: "ROAS Tracking",
    description: "Real-time return on ad spend monitoring across all channels",
    icon: <Target className="w-5 h-5" />,
  },
  {
    id: "2",
    title: "Attribution Modeling",
    description: "Multi-touch attribution that shows the real customer journey",
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    id: "3",
    title: "Scaling Engine",
    description: "Data-driven budget allocation that maximizes revenue",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    id: "4",
    title: "Creative Testing",
    description: "Rapid iteration frameworks that find winning ads fast",
    icon: <Zap className="w-5 h-5" />,
  },
]

export function MorphingCardStack({
  cards = defaultCards,
  className,
  defaultLayout = "stack",
  onCardClick,
}: MorphingCardStackProps) {
  const [layout, setLayout] = useState<LayoutMode>(defaultLayout)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length)
  }, [cards.length])

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }, [cards.length])

  // Keyboard navigation for desktop
  useEffect(() => {
    if (layout !== "stack") return
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        goToNext()
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        goToPrev()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [layout, goToNext, goToPrev])

  if (!cards || cards.length === 0) {
    return null
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info
    const swipe = Math.abs(offset.x) * velocity.x

    if (offset.x < -SWIPE_THRESHOLD || swipe < -1000) {
      goToNext()
    } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
      goToPrev()
    }
    setIsDragging(false)
  }

  const getStackOrder = () => {
    const reordered: (CardData & { stackPosition: number })[] = []
    for (let i = 0; i < cards.length; i++) {
      const index = (activeIndex + i) % cards.length
      reordered.push({ ...cards[index], stackPosition: i })
    }
    return reordered.reverse()
  }

  const getLayoutStyles = (stackPosition: number) => {
    switch (layout) {
      case "stack":
        return {
          top: stackPosition * 8,
          left: stackPosition * 8,
          zIndex: cards.length - stackPosition,
          rotate: (stackPosition - 1) * 2,
        }
      case "grid":
        return {
          top: 0,
          left: 0,
          zIndex: 1,
          rotate: 0,
        }
      case "list":
        return {
          top: 0,
          left: 0,
          zIndex: 1,
          rotate: 0,
        }
    }
  }

  const containerStyles = {
    stack: "relative h-64 w-64",
    grid: "grid grid-cols-2 gap-3",
    list: "flex flex-col gap-3",
  }

  const displayCards = layout === "stack" ? getStackOrder() : cards.map((c, i) => ({ ...c, stackPosition: i }))

  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      {/* Layout Toggle */}
      <div className="flex items-center gap-1 rounded-lg bg-secondary p-1">
        {(Object.keys(layoutIcons) as LayoutMode[]).map((mode) => {
          const Icon = layoutIcons[mode]
          return (
            <button
              key={mode}
              onClick={() => setLayout(mode)}
              className={cn(
                "rounded-md p-2 transition-all",
                layout === mode
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary",
              )}
              aria-label={`Switch to ${mode} layout`}
            >
              <Icon className="h-4 w-4" />
            </button>
          )
        })}
      </div>

      {/* Cards Container with Desktop Navigation Arrows */}
      <div className="relative">
        {/* Left Arrow - Desktop Only */}
        {layout === "stack" && cards.length > 1 && (
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 border border-border transition-colors"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
        )}

        {/* Right Arrow - Desktop Only */}
        {layout === "stack" && cards.length > 1 && (
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 border border-border transition-colors"
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        )}

        <div className={cn(containerStyles[layout], "min-w-[256px]")}>
        <LayoutGroup>
          <AnimatePresence mode="popLayout">
            {displayCards.map((card) => {
              const styles = getLayoutStyles(card.stackPosition)
              const isExpanded = expandedCard === card.id
              const isTopCard = layout === "stack" && card.stackPosition === 0

              return (
                <motion.div
                  key={card.id}
                  layoutId={card.id}
                  initial={false}
                  animate={{
                    ...styles,
                    scale: isExpanded ? 1.05 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 1,
                  }}
                  drag={layout === "stack" && isTopCard ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                  onClick={() => {
                    if (isDragging) return
                    setExpandedCard(isExpanded ? null : card.id)
                    onCardClick?.(card)
                  }}
                  className={cn(
                    "cursor-pointer rounded-xl border border-border bg-card p-4",
                    "hover:border-primary/50 transition-colors",
                    layout === "stack" && "absolute w-56 h-48",
                    layout === "stack" && isTopCard && "cursor-grab active:cursor-grabbing",
                    layout === "grid" && "w-full aspect-square",
                    layout === "list" && "w-full",
                    isExpanded && "ring-2 ring-primary",
                  )}
                  style={{
                    backgroundColor: card.color || undefined,
                  }}
                >
                  <div className="flex flex-col h-full">
                    {card.icon && (
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {card.icon}
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-foreground mb-1">{card.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {isTopCard && (
                    <p className="absolute bottom-2 left-0 right-0 text-center text-xs text-muted-foreground">
                      <span className="md:hidden">Swipe to navigate</span>
                      <span className="hidden md:inline">Use arrows or ← → keys</span>
                    </p>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </LayoutGroup>
        </div>
      </div>

      {layout === "stack" && cards.length > 1 && (
        <div className="flex items-center gap-1.5">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === activeIndex ? "w-4 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default MorphingCardStack
