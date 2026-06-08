import { AuthProvider } from "../context/AuthContext.jsx";
import Link from "next/link";
import Head from "./Head.js";
import GoTo from "../components/GoTo.jsx";
import "./globals.css";
import "./fanta.css";

export const metadata = {
  title: "Expenny ⋅ The Subscription Tracker",
  description: "Track your subscription analytics!",
};

export default function RootLayout({ children }) {
  const header = (
    <header>
      <div>
        <Link href={'/'}>
          <h1 className="text-gradient">Expenny</h1>
        </Link>
        <p>The Subscriptions Tracker</p>
      </div>
      <GoTo />
    </header>
  )

  const footer = (
    <footer>
      <div className="hard-line" />
      <div className="footer-content">
        <div>
          <div>
            <h4>Expenny</h4>
            <p>|</p>
            <button disabled>Install App</button>
          </div>
          <p className="copyright">© Copyright 2026, Ivan Kovalyov.<br />All rights reserved.</p>
        </div>
        <div>
          <p>Facing issues? <Link href={'/help'}>Get help</Link></p>
          <p>Suggestions for improvement? <Link href={'/feedback'}>Share feedback</Link></p>
          <div>
            <Link href={'/privacy'}>Privacy Policy</Link>
            <Link href={'/tos'}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body>
          {header}
          <div className="full-line" />
          <main>
            {children}
          </main>
          { footer }
        </body>
      </AuthProvider>
    </html>
  );
}
