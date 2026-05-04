"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface CardData {
  title: string
  description: string
  image: string
  slug: string
}

interface Card {
  id: number
  contentType: number
}

const cardData: Record<number, CardData> = {
  1: {
    title: "AI-Powered Growth",
    description: "Automated revenue optimization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    slug: "ai-powered-growth-strategies",
  },
  2: {
    title: "Smart Analytics",
    description: "Real-time performance insights",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    slug: "smart-analytics-real-time-insights",
  },
  3: {
    title: "Conversion Engine",
    description: "10x your customer acquisition",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
    slug: "conversion-engine-customer-acquisition",
  },
}

const initialCards: Card[] = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 3 },
]

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
]

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
}

const enterAnimation = {
  y: -16,
  scale: 0.9,
}

function CardContent({ contentType }: { contentType: number }) {
  const data = cardData[contentType] || cardData[1]
  const navigate = useNavigate()

  const handleViewClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigate(`/blog/${data.slug}`)
  }

  return (
    <div className="relative h-60 w-full max-w-xs overflow-hidden rounded-2xl border border-primary/20 bg-muted/90 backdrop-blur-sm shadow-lg shadow-primary/10">
      <div className="relative h-28 w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-muted/90 to-transparent" />
      </div>
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-foreground font-display">{data.title}</span>
          <span className="text-sm text-muted-foreground">{data.description}</span>
        </div>
        <button 
          onClick={handleViewClick}
          className="flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:gap-2"
        >
          View
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

function AnimatedCard({
  card,
  index,
  isAnimating,
}: {
  card: Card
  index: number
  isAnimating: boolean
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={card.id}
      className="absolute"
      initial={initialAnim}
      animate={{ y, scale, zIndex }}
      exit={exitAnim}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <CardContent contentType={card.contentType} />
    </motion.div>
  )
}

export default function AnimatedCardStack() {
  const [cards, setCards] = useState<Card[]>(initialCards)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(4)

  const handleAnimate = () => {
    setIsAnimating(true)

    const nextContentType = ((cards[2].contentType % 3) + 1)

    setCards([...cards.slice(1), { id: nextId, contentType: nextContentType }])
    setNextId((prev) => prev + 1)
    setIsAnimating(false)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="relative h-72 w-80">
        <AnimatePresence mode="popLayout">
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard
              key={card.id}
              card={card}
              index={index}
              isAnimating={isAnimating}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-6">
        <button
          onClick={handleAnimate}
          className="rounded-full border border-primary/30 bg-primary/10 px-6 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary/20 hover:border-primary/50"
        >
          View Next
        </button>
      </div>
    </div>
  )
}
