'use client'

import { useRealtimeVotes } from '@/hooks/useRealtimeVotes'

export default function LivePage() {
  const votes = useRealtimeVotes()

  return (
    <main className='min-h-screen bg-black text-white flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-black mb-10'>
        Live Count
      </h1>

      <div className='glass rounded-3xl p-10 text-center'>
        <div className='text-7xl font-black text-cyan-400'>
          {votes}
        </div>

        <p className='mt-4 text-gray-300'>
          Total suara realtime
        </p>
      </div>
    </main>
  )
}