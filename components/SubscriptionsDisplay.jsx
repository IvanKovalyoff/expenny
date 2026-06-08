import { useAuth } from "@/context/AuthContext";
import { getDaysUntilNextCharge } from "@/utils";

export default function SubscritionsDisplay({ handleShowInput, handleEditSubscription, isFormOpen }) {
  const { handleDeleteSubscription, userData } = useAuth();

  if (!userData?.subscriptions) { 
    return null;
  }

  return (
    <section>
      <h2>Your Subscriptions</h2>
      <div className="card-container">
        {userData.subscriptions.map((sub, subIdx) => { 
          const { name, category, cost, currency, billingFrequency, startDate, notes, status } = sub;

          return (
            <div key={subIdx} className="card subscription-card">
              <div>
                <h3>{name}</h3>
                <div className={'status ' + (status === 'Active' ? 'card-button-primary' : 'card-button-secondary')}>
                  <small>{status}</small>
                </div>
              </div>

              <p><i>{category}</i></p>

              <div className="sub-cost">
                <h2>{cost}</h2>
                <p>{currency}</p>
              </div>
              <small>per {billingFrequency}</small>

              <div className="sub-renewal">
                <div>
                  <p>Started</p>
                  <h4>{startDate}</h4>
                </div>
                <div>
                  <p>Due</p>
                  <h4>{getDaysUntilNextCharge(startDate, billingFrequency)}</h4>
                </div>
              </div>
              <div className="white-line" />
              <p>{notes}</p>
              <div className="subscription-actions">
                <button onClick={() => { 
                  handleEditSubscription(subIdx)
                }} className="button-card">
                  <i className="fa-regular fa-pen-to-square"></i>
                  Edit
                </button>
                <button onClick={() => { 
                  handleDeleteSubscription(subIdx)
                }} className="button-card">
                  <i className="fa-solid fa-trash-can-arrow-up"></i>
                  Delete
                </button>
              </div>
            </div>
          )
        })}
        {!isFormOpen && (
          <button onClick={handleShowInput} className="button-card add-subscription">
            <i className="fa-solid fa-plus"></i>
            <h3>Add new subscription</h3>
          </button>
        )}
      </div>
    </section>
  )
}