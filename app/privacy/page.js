import GoBack from '@/components/GoBack'

export const metadata = {
  title: 'Privacy Policy · Expenny',
  description: 'How Expenny collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="info-page">
      <div className="info-page-header">
        <h2>Privacy Policy</h2>
        <p>Last updated: June 5, 2026</p>
      </div>

      <p className="info-intro">
        Expenny (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding that information.
      </p>

      <section className="info-section">
        <h3>1. Information We Collect</h3>
        <p><strong>Account information.</strong> When you create an account, we collect your email address and a securely hashed version of your password. We never store passwords in plain text.</p>
        <p><strong>Subscription data.</strong> We store the entries you create in Expenny — service names, costs, billing cycles, renewal dates, and notes — so we can display and calculate them for you.</p>
        <p><strong>Usage data.</strong> We may collect anonymous usage events (page views, feature interactions) to understand how the product is used and where we can improve it. This data cannot be linked back to individual users.</p>
      </section>

      <section className="info-section">
        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>To provide, operate, and maintain the Expenny service</li>
          <li>To send account-related emails (password resets, security alerts)</li>
          <li>To calculate and display your subscription analytics</li>
          <li>To understand usage patterns and improve the product</li>
          <li>To respond to support requests you initiate</li>
        </ul>
        <p>We do not use your data for advertising, and we do not sell your personal information to any third party.</p>
      </section>

      <section className="info-section">
        <h3>3. Data Storage &amp; Security</h3>
        <p>Your data is stored using Firebase (Google Cloud), which provides industry-standard encryption at rest (AES-256) and in transit (TLS 1.2+). Firebase is SOC 2 Type II certified and GDPR-compliant.</p>
        <p>Access to your subscription data is enforced by Firebase security rules — only you can read or write your own data. Our team does not access individual user data except to investigate reported security issues.</p>
      </section>

      <section className="info-section">
        <h3>4. Third-Party Services</h3>
        <p>Expenny relies on the following third-party services to function:</p>
        <ul>
          <li><strong>Firebase (Google):</strong> Authentication and database storage. Subject to Google&apos;s Privacy Policy.</li>
          <li><strong>Formspree:</strong> When you submit feedback via the feedback form, your name, email address, and message are sent to and stored by Formspree, Inc. Subject to Formspree&apos;s Privacy Policy.</li>
          <li><strong>Google Fonts:</strong> Font delivery via CDN. May log IP addresses per Google&apos;s standard practices.</li>
          <li><strong>Font Awesome:</strong> Icon delivery via CDN. Subject to Fonticons, Inc. Privacy Policy.</li>
        </ul>
        <p>We are not responsible for the privacy practices of these services. We encourage you to review their policies directly.</p>
      </section>

      <section className="info-section">
        <h3>5. Cookies &amp; Local Storage</h3>
        <p>Expenny stores Firebase Authentication tokens in your browser&apos;s local storage to keep you logged in between sessions. We do not use tracking cookies, advertising cookies, or any third-party analytics cookies.</p>
      </section>

      <section className="info-section">
        <h3>6. Your Rights</h3>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li><strong>Access</strong> the personal data we hold about you</li>
          <li><strong>Correct</strong> inaccurate or incomplete data</li>
          <li><strong>Delete</strong> your account and all associated data</li>
          <li><strong>Export</strong> your subscription data in a portable format</li>
          <li><strong>Object</strong> to or restrict certain processing of your data</li>
        </ul>
        <p>To exercise any of these rights, email us at <a href="mailto:support@expenny.app">support@expenny.app</a>. We will respond within 30 days.</p>
      </section>

      <section className="info-section">
        <h3>7. Data Retention</h3>
        <p>We retain your data for as long as your account is active. If you request account deletion, all personal data associated with your account will be permanently removed within 30 days. Aggregate, anonymized analytics may be retained indefinitely.</p>
      </section>

      <section className="info-section">
        <h3>8. Children&apos;s Privacy</h3>
        <p>Expenny is not directed at children under 13. We do not knowingly collect personal information from anyone under 13. If you believe a child has provided us with their information, please contact us and we will delete it promptly.</p>
      </section>

      <section className="info-section">
        <h3>9. Changes to This Policy</h3>
        <p>We may update this policy from time to time. If we make significant changes, we will notify you by email or by displaying a notice in the app. The &quot;last updated&quot; date at the top of this page always reflects the most recent revision.</p>
      </section>

      <section className="info-section">
        <h3>10. Contact</h3>
        <p>If you have questions about this Privacy Policy or how we handle your data, contact us at:</p>
        <address>
          Expenny<br />
          <a href="mailto:support@expenny.app">support@expenny.app</a>
        </address>
      </section>

      <GoBack />
    </div>
  )
}
