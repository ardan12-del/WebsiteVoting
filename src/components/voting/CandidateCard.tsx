'use client'

import { motion } from 'framer-motion'

interface Props {
  name: string
  number: number
  selected: boolean
  onSelect: () => void
}

export default function CandidateCard({
  name,
  number,
  selected,
  onSelect
}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`glass p-6 rounded-3xl border ${
        selected ? 'border-cyan-400' : 'border-white/10'
      }`}
    >
      <div className='h-48 rounded-2xl bg-gradient-to-br from-cyan-500 to-pink-500' />

      <h2 className='text-2xl font-bold mt-5'>
        Paslon {number}
      </h2>

      <p className='mt-2 text-gray-300'>{name}</p>

      <button
        onClick={onSelect}
        className='mt-5 w-full py-3 rounded-xl bg-cyan-500'
      >
        Pilih
      </button>
    </motion.div>
  )
}