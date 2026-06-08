import GoBack from '@/components/GoBack'

export const metadata = {
  title: 'Terms of Service · Expenny',
  description: 'The terms and conditions for using Expenny.',
}

export default function TosPage() {
  return (
    <div className="info-page">
      <div className="info-page-header">
        <h2>Terms of Service</h2>
        <p>Last updated: June 5, 2026</p>
      </div>

      <p className="info-intro">
        Please read these Terms of Service carefully before using Expenny. By creating an account or using the service, you agree to be bound by these terms. If you do not agree, do not use the service.
      </p>

      <section className="info-section">
        <h3>1. Acceptance of Terms</h3>
        <p>These Terms of Service (&quot;Terms&quot;) govern your access to and use of Expenny (&quot;Service&quot;), operated by Ivan Kovalyov (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using the Service, you confirm that you are at least 13 years of age and agree to these Terms in full.</p>
      </section>

      <section className="info-section">
        <h3>2. Your Account</h3>
        <p>You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You agree to:</p>
        <ul>
          <li>Provide accurate and complete information when registering</li>
          <li>Keep your password secure and not share it with others</li>
          <li>Notify us immediately of any unauthorized account access at <a href="mailto:support@expenny.app">support@expenny.app</a></li>
          <li>Not create accounts for automation, scraping, or abusive purposes</li>
        </ul>
        <p>We reserve the right to suspend or terminate accounts that violate these Terms or are found to be engaged in abusive behavior.</p>
      </section>

      <section className="info-section">
        <h3>3. Use of the Service</h3>
        <p>Expenny is a personal subscription tracking tool. You may use it to track and analyze your own subscription spending. You agree not to:</p>
        <ul>
          <li>Use the Service for any unlawful purpose or in violation of any applicable law</li>
          <li>Attempt to gain unauthorized access to other users&apos; data or our systems</li>
          <li>Reverse-engineer, decompile, or disassemble any part of the Service</li>
          <li>Use automated tools to scrape, crawl, or overload the Service</li>
          <li>Upload or transmit malicious code, viruses, or harmful content</li>
          <li>Resell, sublicense, or otherwise commercialize access to the Service</li>
        </ul>
      </section>

      <section className="info-section">
        <h3>4. Intellectual Property</h3>
        <p>The Expenny name, logo, interface design, and source code are the intellectual property of Ivan Kovalyov. Nothing in these Terms grants you a license to copy, reproduce, or distribute any part of the Service without explicit written permission.</p>
        <p>Your subscription data remains entirely your own. You retain full ownership of any content you enter into Expenny.</p>
      </section>

      <section className="info-section">
        <h3>5. Availability &amp; Changes</h3>
        <p>We strive to keep Expenny available at all times, but we do not guarantee uninterrupted or error-free access. We may temporarily suspend the Service for maintenance, updates, or circumstances outside our control without prior notice.</p>
        <p>We reserve the right to modify, add, or remove features at any time. We will make reasonable efforts to communicate significant changes that affect how you use the Service.</p>
      </section>

      <section className="info-section">
        <h3>6. Disclaimer of Warranties</h3>
        <p>The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranty of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Service will be error-free, uninterrupted, or free of harmful components.</p>
        <p>Expenny provides subscription cost estimates for informational purposes only. We are not responsible for any financial decisions made based on data displayed in the app.</p>
      </section>

      <section className="info-section">
        <h3>7. Limitation of Liability</h3>
        <p>To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Service — including loss of data, loss of profits, or business interruption.</p>
        <p>Our total liability for any claim arising out of or relating to these Terms or the Service shall not exceed the total amount you paid us in the 12 months preceding the claim. For a free service, this amount is $0.</p>
      </section>

      <section className="info-section">
        <h3>8. Termination</h3>
        <p>You may stop using the Service at any time. To delete your account and all associated data, email us at <a href="mailto:support@expenny.app">support@expenny.app</a> with the subject <strong>Account Deletion Request</strong>.</p>
        <p>We may suspend or terminate your access immediately, without prior notice, if you violate these Terms or engage in conduct we determine to be harmful to the Service or its users.</p>
      </section>

      <section className="info-section">
        <h3>9. Governing Law</h3>
        <p>These Terms are governed by and construed in accordance with applicable law. Any disputes arising from these Terms or your use of the Service will be resolved through good-faith negotiation before any other remedy is pursued.</p>
      </section>

      <section className="info-section">
        <h3>10. Changes to These Terms</h3>
        <p>We may update these Terms from time to time. Continued use of the Service after updated Terms are posted constitutes your acceptance of the changes. We will provide reasonable notice of material changes via email or in-app notification. The &quot;last updated&quot; date above always reflects the most recent revision.</p>
      </section>

      <section className="info-section">
        <h3>11. Contact</h3>
        <p>Questions about these Terms? Reach us at:</p>
        <address>
          Expenny<br />
          <a href="mailto:support@expenny.app">support@expenny.app</a>
        </address>
      </section>

      <GoBack />
    </div>
  )
}
