import { NextResponse } from 'next/server'
import { hashToken } from '@/lib/token'

export async function POST(req: Request) {
  const body = await req.json()

  if (!body.token || !body.candidateId) {
    return NextResponse.json(
      { error: 'Data tidak lengkap' },
      { status: 400 }
    )
  }

  const hashed = hashToken(body.token)

  return NextResponse.json({
    success: true,
    hashed,
    message: 'Voting berhasil'
  })
}