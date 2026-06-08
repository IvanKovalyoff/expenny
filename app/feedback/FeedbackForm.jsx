'use client'

import { useForm, ValidationError } from '@formspree/react'
import { useState } from 'react'
import GoBack from '@/components/GoBack'

const categories = [
  { value: 'bug', label: 'Bug Report' },
  { value: 'feature', label: 'Feature Request' },
  { value: 'general', label: 'General Feedback' },
  { value: 'other', label: 'Other' },
]

function FormInstance({ onReset }) {
  const [state, handleSubmit] = useForm('maqznzwe')

  if (state.succeeded) {
    return (
      <div className="card info-success">
        <i className="fa-regular fa-circle-check"></i>
        <div>
          <h3>Thanks for the feedback!</h3>
          <p>We&apos;ve received your message and will review it shortly. Your input genuinely shapes how Expenny evolves.</p>
          <div className="info-success-actions">
            <button className="card-button-secondary" onClick={onReset}>
              <h5>Send another</h5>
            </button>
            <GoBack />
          </div>
        </div>
      </div>
    )
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" required />
          <ValidationError field="name" errors={state.errors} />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="your@email.com" required />
          <ValidationError field="email" errors={state.errors} />
        </label>
        <label className="fat-column">
          Category
          <select name="category" defaultValue="general">
            {categories.map(c => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </label>
        <label className="fat-column">
          Message
          <textarea
            name="message"
            placeholder="Describe your feedback, bug, or feature idea in as much detail as you like..."
            rows={6}
            required
          />
          <ValidationError field="message" errors={state.errors} />
        </label>
        <div className="fat-column form-submit-btns">
          <p>We read every submission.</p>
          <div className="action-buttons">
            <GoBack />
            <button type="submit" disabled={state.submitting}>
              <h5>{state.submitting ? 'Sending...' : 'Send Feedback'}</h5>
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default function FeedbackForm() {
  const [key, setKey] = useState(0)
  return <FormInstance key={key} onReset={() => setKey(k => k + 1)} />
}
