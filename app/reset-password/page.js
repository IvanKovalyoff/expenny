import Loader from '@/components/Loader'
import { Suspense } from 'react'
import ResetPasswordContent from './ResetPasswordContent'

export default function ResetPasswordPage() {
    return (
        <Suspense fallback={<Loader />}>
            <ResetPasswordContent />
        </Suspense>
    )
}
