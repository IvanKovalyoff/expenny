# Expenny — Subscription Tracker

A full-stack subscription management app built with **Next.js 16 App Router** and **Firebase**. Users sign up, log in, and track all their recurring subscriptions in one place — with real-time analytics showing monthly costs, active count, and upcoming renewals.

## Live Demo

https://expenny.netlify.app

---

## Features

- 🔐 **Authentication** — email/password sign-up, login, and logout via Firebase Auth; password reset by email link
- ➕ **Subscription CRUD** — add, edit, and delete subscriptions with service name, cost, billing cycle, renewal date, and status
- 📊 **Analytics dashboard** — real-time summary cards showing monthly equivalent cost, total active subscriptions, and nearest renewal
- 🔄 **Billing cycle normalisation** — monthly, annual, and weekly plans are all converted to a monthly cost for consistent comparisons
- 🏷️ **Status tracking** — Active, Trial, Paused, and Cancelled states with colour-coded badges
- 📋 **Informational pages** — Help Center (FAQ accordion), Feedback form (Formspree), Privacy Policy, Terms of Service
- 📱 **Responsive** — mobile-first layout that scales to wide desktop screens

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 — App Router, Server Components, Client Components |
| UI Library | React 19 |
| Auth & Database | **Firebase** v11 — Authentication + Firestore |
| Form Handling | **Formspree** — feedback form with field-level validation |
| Animations | **GSAP** — loading spinner animation |
| Icons | Font Awesome 7 (CDN) |
| Styling | Custom CSS + FantaCSS design system |
| Deployment | Netlify |

---

## Key Implementation Details

### Firebase Auth with React Context

All authentication state is managed in a single `AuthContext` that wraps the app. It exposes `currentUser`, `userData`, and auth methods to any component without prop drilling.

```js
const [currentUser, setCurrentUser] = useState(null)

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    setCurrentUser(user)
    if (user) {
      const docSnap = await getDoc(doc(db, 'users', user.uid))
      setUserData(docSnap.data())
    }
    setLoading(false)
  })
  return unsubscribe
}, [])
```

### Monthly cost normalisation

All billing cycles are normalised to a monthly figure so the analytics total is always meaningful, regardless of how each subscription is billed.

```js
function getMonthlyCost(cost, cycle) {
  if (cycle === 'yearly')  return cost / 12
  if (cycle === 'weekly')  return (cost * 52) / 12
  return cost  // monthly
}
```

### Password reset flow

Firebase's `sendPasswordResetEmail` sends a link containing a one-time `oobCode`. The `/reset-password` page reads the code from the URL and calls `confirmPasswordReset` — keeping the entire flow within the app without a custom backend.

```js
await confirmPasswordReset(auth, oobCode, newPassword)
```

### Formspree feedback form

The feedback form uses the `@formspree/react` hook for submission and field-level error handling. A `key` prop on the inner component re-mounts it cleanly for "Send another" without needing a manual reset API.

```jsx
const [state, handleSubmit] = useForm('maqznzwe')
// state.submitting, state.succeeded, state.errors — all managed by the hook
```

---

## Project Structure

```
app/
├── dashboard/page.js         # Protected dashboard — subscriptions + analytics
├── reset-password/           # Password reset (reads oobCode from URL)
├── help/page.js              # Help Center with FAQ accordion
├── feedback/                 # Feedback form (Formspree integration)
├── privacy/page.js           # Privacy Policy
├── tos/page.js               # Terms of Service
├── layout.js                 # Root layout — header, footer, AuthProvider
├── page.js                   # Home — hero section with CTA
├── globals.css               # Layout & page-specific styles
└── fanta.css                 # FantaCSS design system (tokens + base styles)

components/
├── GoTo.jsx                  # Auth-aware header navigation
├── GoBack.jsx                # Smart back button (dashboard or home)
├── Hero.jsx                  # Home page hero section
├── LogIn.jsx                 # Login / sign-up form
├── SubscriptionForm.jsx      # Add / edit subscription form
├── SubscriptionsDisplay.jsx  # Subscription card grid
├── SubscriptionsSummary.jsx  # Analytics summary cards
├── Loader.jsx                # GSAP animated loading spinner
└── ExpenseCard.jsx           # Expense card placeholder

context/
└── AuthContext.jsx           # Firebase auth state + Firestore data + CRUD methods

utils/
└── index.js                  # Billing cycle normalisation helpers
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Create a .env.local file with your Firebase project credentials:
# NEXT_PUBLIC_FIREBASE_API_KEY=...
# NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
# NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
# NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
# NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
# NEXT_PUBLIC_FIREBASE_APP_ID=...

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Course

Built as part of the [Full Stack Course | Build & Deploy 4 Projects and Get Hired](https://www.udemy.com/share/10cLgP3@wi42egVyWvoPbUG_-r25jykx-iPwW2PcKI25YexTR5wvIcG-0pOFSamOlM9qPpd-uA==/) by [James McArthur](https://www.udemy.com/user/james-mcarthur-19/) on Udemy.

---

## Author

**Ivan Kovalov** — Software Developer based in Poland

- GitHub: [github.com/IvanKovalyoff](https://github.com/IvanKovalyoff)
- LinkedIn: [linkedin.com/in/ivan-kovalov-197759348](https://www.linkedin.com/in/ivan-kovalov-197759348)
- Email: [kovalevivan420@gmail.com](mailto:kovalevivan420@gmail.com)
