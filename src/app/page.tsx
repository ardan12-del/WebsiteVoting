import Link from 'next/link'

export default function HomePage() {
  return (
    <main className='min-h-screen bg-black text-white flex flex-col items-center justify-center'>
      <h1 className='text-6xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text'>
        E-Voting Ketua OSIS
      </h1>

      <p className='mt-5 text-gray-300'>
        Modern Futuristic Realtime Voting System
      </p>

      <div className='flex gap-4 mt-10'>
        <Link
          href='/voting'
          className='px-8 py-4 rounded-2xl bg-cyan-500'
        >
          Mulai Voting
        </Link>

        <Link
          href='/live'
          className='px-8 py-4 rounded-2xl border border-white/20'
        >
          Live Count
        </Link>
      </div>
    </main>
  )
}