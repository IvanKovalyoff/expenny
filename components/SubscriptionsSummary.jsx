import { useAuth } from "@/context/AuthContext"
import { calculateSubscriptionMetrics } from "@/utils";

export default function SubscritionsSummary() { 
  const { userData } = useAuth()
  const summary = calculateSubscriptionMetrics(userData.subscriptions);

  const emojis = ['🔥', '✅', '⭐️', '⚡️', '🎉', '✨', '🏆', '🌼', '🌱', '🐛', '🐙', '🪼']

  return (
    <section>
      <h2>Subscription Analytics</h2>
      <div className="analitycs-card">
        {Object.keys(summary).map((metric, metricIdx) => { 
          return (
            <div key={metricIdx} className="analitycs-item">
              <p>{emojis[metricIdx]} {metric.replaceAll('_', ' ')}</p>
              <h4>{summary[metric]}</h4>
            </div>
          )
        })}
      </div>
    </section>
  )
}