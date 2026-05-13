'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import CandidateCard from '@/components/voting/CandidateCard'

export default function VotingPage() {
  const [token, setToken] = useState('')
  const [selected, setSelected] = useState('')

  async function submitVote() {
    const res = await fetch('/api/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token,
        candidateId: selected
      })
    })

    const data = await res.json()

    if (!res.ok) {
      toast.error(data.error)
      return
    }

    toast.success(data.message)
  }

  return (
    <main className='min-h-screen bg-black text-white p-8'>
      <h1 className='text-5xl font-black text-center mb-10'>
        Voting Ketua OSIS
      </h1>

      <input
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder='Masukkan token'
        className='w-full p-4 rounded-2xl bg-white/10 border border-white/20'
      />

      <div className='grid md:grid-cols-3 gap-6 mt-10'>
        <CandidateCard
          number={1}
          name='Ahmad Rizki'
          selected={selected === '1'}
          onSelect={() => setSelected('1')}
        />

        <CandidateCard
          number={2}
          name='Nanda Putra'
          selected={selected === '2'}
          onSelect={() => setSelected('2')}
        />

        <CandidateCard
          number={3}
          name='Salsa Putri'
          selected={selected === '3'}
          onSelect={() => setSelected('3')}
        />
      </div>

      <button
        onClick={submitVote}
        className='w-full py-5 mt-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-pink-500'
      >
        Submit Voting
      </button>
    </main>
  )
}