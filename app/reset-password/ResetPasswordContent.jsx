'use client'

import ChangePasswordForm from '@/components/ChangePasswordForm'
import { useSearchParams } from 'next/navigation'

export default function ResetPasswordContent() {
    const params = useSearchParams()
    const oobCode = params.get('oobCode')

    if (!oobCode) {
        return (
            <div className="login">
                <h2>Invalid Link</h2>
                <p>This reset link is invalid or has expired.</p>
                <div className="full-line" />
                <a href="/dashboard">Back to login</a>
            </div>
        )
    }

    return <ChangePasswordForm oobCode={oobCode} />
}
