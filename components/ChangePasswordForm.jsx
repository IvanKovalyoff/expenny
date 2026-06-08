'use client'

import { useAuth } from '@/context/AuthContext'
import { useState } from 'react'

export default function ChangePasswordForm({ onClose, resetMode = false, oobCode = null }) {
    const { resetPassword, confirmReset } = useAuth()

    const [email, setEmail] = useState('')
    const [formData, setFormData] = useState({ newPassword: '', confirmPassword: '' })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    async function handleResetSubmit(e) {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await resetPassword(email)
            setSuccess(true)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    async function handleConfirmSubmit(e) {
        e.preventDefault()
        setError('')

        if (formData.newPassword !== formData.confirmPassword) {
            setError('Passwords do not match.')
            return
        }
        if (formData.newPassword.length < 6) {
            setError('Password must be at least 6 characters.')
            return
        }

        setLoading(true)
        try {
            await confirmReset(oobCode, formData.newPassword)
            setSuccess(true)
        } catch (err) {
            if (err.code === 'auth/invalid-action-code') {
                setError('This reset link has expired or already been used.')
            } else {
                setError(err.message)
            }
        } finally {
            setLoading(false)
        }
    }

    if (resetMode) {
        return (
            <div className="login">
                <h2>Reset Password</h2>
                {success ? (
                    <>
                        <p>Check your email for a reset link.</p>
                        <div className="full-line" />
                        <button onClick={onClose}>Back to login</button>
                    </>
                ) : (
                    <>
                        {error && <p style={{ color: 'red' }}>❗{error}</p>}
                        <form onSubmit={handleResetSubmit} style={{ display: 'contents' }}>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Reset Email'}</button>
                        </form>
                        <div className="full-line" />
                        <div>
                            <p>Remembered your password?</p>
                            <button onClick={onClose}>Back to login</button>
                        </div>
                    </>
                )}
            </div>
        )
    }

    return (
        <div className="login">
            <h2>Set New Password</h2>
            {success ? (
                <>
                    <p>Password updated. You can now log in.</p>
                    <div className="full-line" />
                    <a href="/dashboard">Go to login</a>
                </>
            ) : (
                <>
                    {error && <p style={{ color: 'red' }}>❗{error}</p>}
                    <form onSubmit={handleConfirmSubmit} style={{ display: 'contents' }}>
                        <input type="password" name="newPassword" placeholder="New password" value={formData.newPassword} onChange={handleChange} required />
                        <input type="password" name="confirmPassword" placeholder="Confirm new password" value={formData.confirmPassword} onChange={handleChange} required />
                        <button type="submit" disabled={loading}>{loading ? 'Updating...' : 'Update Password'}</button>
                    </form>
                </>
            )}
        </div>
    )
}
