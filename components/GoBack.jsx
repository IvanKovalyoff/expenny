'use client'

import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'

export default function GoBack() {
  const { currentUser } = useAuth()
  const router = useRouter()

  return (
    <button onClick={() => router.push(currentUser ? '/dashboard' : '/')}>
      <h5>← Go Back</h5>
    </button>
  )
}
