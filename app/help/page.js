import Link from 'next/link'
import GoBack from '@/components/GoBack'

export const metadata = {
  title: 'Get Help · Expenny',
  description: 'Find answers to common questions about Expenny.',
}

export default function HelpPage() {
  return (
    <div className="info-page">
      <div className="info-page-header">
        <h2>Help Center</h2>
        <p>Find answers to common questions about using Expenny.</p>
      </div>

      <section className="info-section">
        <h3>Getting Started</h3>
        <details>
          <summary>How do I create an account?</summary>
          <p>Click <strong>Sign Up</strong> on the home page, enter your email address, and choose a secure password. You&apos;ll be logged in immediately — no email verification required.</p>
        </details>
        <details>
          <summary>How do I add a subscription?</summary>
          <p>After logging in, go to your Dashboard and click <strong>Add Subscription</strong>. Fill in the service name, cost, billing cycle, and renewal date, then save. Your subscription appears in the tracker right away.</p>
        </details>
        <details>
          <summary>What currencies are supported?</summary>
          <p>Expenny currently uses USD as the base currency for all calculations. Multi-currency support is on our roadmap for a future release.</p>
        </details>
      </section>

      <section className="info-section">
        <h3>Managing Subscriptions</h3>
        <details>
          <summary>How do I edit or delete a subscription?</summary>
          <p>Hover over any subscription card on your Dashboard to reveal the <strong>Edit</strong> and <strong>Delete</strong> buttons. Click Edit to update details, or Delete to permanently remove it. Deleted subscriptions cannot be recovered.</p>
        </details>
        <details>
          <summary>How is my monthly total calculated?</summary>
          <p>Expenny normalizes all your subscriptions to a monthly cost. Annual plans are divided by 12, weekly plans are multiplied by ~4.33 (52 ÷ 12), and monthly plans are used as-is. The total in your analytics reflects the combined monthly equivalent.</p>
        </details>
        <details>
          <summary>Can I track free trials?</summary>
          <p>Yes. When adding a subscription, set the status to <strong>Trial</strong>. This helps you track when trials convert to paid plans.</p>
        </details>
        <details>
          <summary>Is there a limit on how many subscriptions I can track?</summary>
          <p>You can track up to 30 subscriptions per account. This covers a typical personal subscription load with room to spare.</p>
        </details>
      </section>

      <section className="info-section">
        <h3>Account &amp; Security</h3>
        <details>
          <summary>How do I reset my password?</summary>
          <p>On the login form, click <strong>Forgot password?</strong> and enter your email address. You&apos;ll receive a reset link within a few minutes. Check your spam folder if it doesn&apos;t arrive. The link expires after 1 hour.</p>
        </details>
        <details>
          <summary>How do I change my password?</summary>
          <p>Use the forgot password flow from the login page — it sends a reset link that lets you set a new password. In-app password change from the Dashboard is coming in a future update.</p>
        </details>
        <details>
          <summary>How do I delete my account?</summary>
          <p>Account deletion is not yet available in the app UI. Email us at <a href="mailto:support@expenny.app">support@expenny.app</a> with the subject <strong>Account Deletion Request</strong> and we&apos;ll process it within 5 business days. All data will be permanently removed.</p>
        </details>
        <details>
          <summary>Is my data secure?</summary>
          <p>All data is stored in Firebase, which uses AES-256 encryption at rest and TLS in transit. Your subscription data is private — only you can access it through Firebase security rules. We do not sell or share your personal information. See our <Link href="/privacy">Privacy Policy</Link> for full details.</p>
        </details>
      </section>

      <section className="info-section">
        <h3>Still need help?</h3>
        <div className="card">
          <p>Can&apos;t find what you&apos;re looking for? We&apos;re here to help.</p>
          <br />
          <p>Email us at <a href="mailto:support@expenny.app">support@expenny.app</a> and we&apos;ll get back to you within 1–2 business days.</p>
          <p>You can also <Link href="/feedback">share feedback</Link> or suggest a new feature.</p>
        </div>
      </section>

      <GoBack />
    </div>
  )
}
