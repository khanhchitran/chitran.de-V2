'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgress() {
  const [completion, setCompletion] = useState(0)

  useEffect(() => {
    function updateScrollCompletion() {
      const currentProgress = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
      }
    }

    window.addEventListener('scroll', updateScrollCompletion)

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-pink-200 dark:bg-pink-800 z-50">
      <div
        className="h-full bg-pink-500 dark:bg-pink-300 transition-all duration-100 ease-out"
        style={{ width: `${completion}%` }}
      />
    </div>
  )
}

