import { useEffect, useRef, useState } from 'react'

export function useHideOnScroll(threshold: number = 0) {
  const [hidden, setHidden] = useState(false)
  const prevScroll = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      if (current > prevScroll.current && current > threshold) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      prevScroll.current = current
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return hidden
}
