'use client'

import { useEffect, useState } from 'react'

export function useRealtimeVotes() {
  const [votes, setVotes] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVotes((v) => v + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return votes
}