'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface CarouselItem {
  id: number
  title: string
  imageUrl: string
}

const items: CarouselItem[] = [
  { id: 1, title: 'Item 1', imageUrl: '/placeholder.svg?height=200&width=300' },
  { id: 2, title: 'Item 2', imageUrl: '/placeholder.svg?height=200&width=300' },
  { id: 3, title: 'Item 3', imageUrl: '/placeholder.svg?height=200&width=300' },
  { id: 4, title: 'Item 4', imageUrl: '/placeholder.svg?height=200&width=300' },
  { id: 5, title: 'Item 5', imageUrl: '/placeholder.svg?height=200&width=300' },
  { id: 6, title: 'Item 6', imageUrl: '/placeholder.svg?height=200&width=300' },
]

const AutoScrollingCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollWidth = carousel.scrollWidth
    const viewportWidth = carousel.offsetWidth

    const animate = async () => {
      await controls.start({
        x: [0, -(scrollWidth - viewportWidth)],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 60,
            ease: 'linear',
          },
        },
      })
    }

    animate()
  }, [controls])

  return (
    <div className="w-full overflow-hidden py-8">
      <motion.div
        ref={carouselRef}
        className="flex"
        animate={controls}
      >
        {items.concat(items).map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-64 mx-2"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AutoScrollingCarousel

