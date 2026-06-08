import FeedbackForm from './FeedbackForm'

export const metadata = {
  title: 'Share Feedback · Expenny',
  description: 'Help us improve Expenny by sharing your thoughts.',
}

export default function FeedbackPage() {
  return (
    <div className="info-page">
      <div className="info-page-header">
        <h2>Share Feedback</h2>
        <p>Your feedback helps us improve Expenny. Tell us what&apos;s working, what isn&apos;t, or what you&apos;d like to see next.</p>
      </div>
      <FeedbackForm />
    </div>
  )
}
