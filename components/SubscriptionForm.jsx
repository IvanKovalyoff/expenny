'use client'

import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';

export default function SubscriptionForm({ onSubmit, onClose, formData, handleChangeInput, handleResetForm }) { 
  const { handleAddSubscription } = useAuth();

  function handleFormSubmit(evt) { 
    evt.preventDefault();
    handleAddSubscription(formData);
    handleResetForm();
    onClose();
  }

  return (
    <section>
      <h2>Add a new subscription</h2>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">
          <span>Subscription Name</span>
          <input value={formData.name} onChange={handleChangeInput} type="text" name="name" placeholder="e. g. Netflix, Spotify, AWS Hosting" required />
        </label>

        <label htmlFor="">
          <span>Category</span>
          <select name="category" value={formData.category} onChange={handleChangeInput}>
            {['Entertainment', 'Music', 'Software', 'Web Services', 'Health & Fitness', 'Other'].map((cat, catIdx) => { 
              return (
                <option key={catIdx}>
                  { cat }
                </option>
              )
            })}
          </select>
        </label>

        <label htmlFor="">
          <span>Cost</span>
          <input value={formData.cost} onChange={handleChangeInput} type="number" name="cost" step='0.01' placeholder="e. g. 12.00" required />
        </label>

        <label htmlFor="">
          <span>Currency</span>
          <select name="currency" value={formData.currency} onChange={handleChangeInput}>
            {['USD', 'EUR', 'GBP', 'UAH', 'ZL', 'Other'].map((cur, curIdx) => {
              return (
                <option key={curIdx}>
                  { cur }
                </option>
              )
            })}
          </select>
        </label>

        <label htmlFor="">
          <span>Billing Frequency</span>
          <select name="billingFrequency" value={formData.billingFrequency} onChange={handleChangeInput}>
            {['Monthly', 'Yearly', 'Quarterly', 'One-time'].map((bfq, bfqIdx) => { 
              return (
                <option key={bfqIdx}>
                  { bfq }
                </option>
              )
            })}
          </select>
        </label>

        <label htmlFor="">
          <span>Payment Method</span>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChangeInput}>
            {['Credit Card', 'Debit Card', 'Paypal', 'Bank Transfer', 'Other'].map((pay, payIdx) => { 
              return (
                <option key={payIdx}>
                  { pay }
                </option>
              )
            })}
          </select>
        </label>

        <label htmlFor="">
          <span>Subscription Start Date</span>
          <input value={formData.startDate} onChange={handleChangeInput} type="date" name="startDate" required />
        </label>

        <label htmlFor="">
          <span>Status</span>
          <select name="status" value={formData.status} onChange={handleChangeInput}>
            {['Active', 'Trial', 'Paused', 'Cancelled'].map((stat, statIdx) => {
              return (
                <option key={statIdx}>
                  { stat }
                </option>
              )
            })}
          </select>
        </label>

        <label className="fat-column">
          <span>Notes</span>
          <textarea value={formData.notes} onChange={handleChangeInput} name="notes" placeholder="e.g. Shared with family, Includes cloud storage"></textarea>
        </label>

        <div className="fat-column form-submit-btns">
          <button onClick={onClose}>Cancel</button>
          <button type="submit">
            Add Subscription
          </button>
        </div>
      </form>
    </section>
  )
}