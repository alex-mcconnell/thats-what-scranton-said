import { useEffect, useState } from 'react'

const useOnScreen = (ref, rootMargin = '0px') => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const localRef = ref
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin
      }
    )
    if (localRef.current) {
      observer.observe(localRef.current)
    }
    return () => {
      observer.unobserve(localRef.current)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return isIntersecting
}

export default useOnScreen
