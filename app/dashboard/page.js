'use client'

import Loader from "@/components/Loader";
import LogIn from "@/components/LogIn";
import SubscriptionForm from "@/components/SubscriptionForm";
import SubscriptionsDisplay from "@/components/SubscriptionsDisplay";
import SubscriptionsSummary from "@/components/SubscriptionsSummary";
import { useAuth } from "@/context/AuthContext";
import { Suspense, useState } from "react";

const blankSubscription = {
    name: '',
    category: 'Web Services',
    cost: '',
    currency: 'USD',
    billingFrequency: 'Monthly',
    nextBillingDate: '',
    paymentMethod: 'Credit Card',
    startDate: '',
    renewalType: '',
    notes: '',
    status: 'Active',
}

export default function DashboardPage() {

    const [isAddEntry, setIsAddEntry] = useState(false)
    const [formData, setFormData] = useState(blankSubscription)

    const { handleDeleteSubscription, userData, currentUser, loading } = useAuth()
    const isAuthenticated = !!currentUser

    function handleChangeInput(e) {
        const newData = {
            ...formData,
            [e.target.name]: e.target.value,
        }
        setFormData(newData)
    }

    function handleEditSubscription(index) {
        if (!userData?.subscriptions) return
        const data = userData.subscriptions.find((val, valIndex) => {
            return valIndex === index
        })
        setFormData(data)
        handleDeleteSubscription(index)
        setIsAddEntry(true)
    }

    function handleResetForm() {
        setFormData(blankSubscription)
    }

    function handleToggleInput() {
        setIsAddEntry(!isAddEntry)
    }

    if (loading) {
        return <Loader />
    }

    if (!isAuthenticated) {
        return (
            <Suspense fallback={<Loader />}>
                <LogIn />
            </Suspense>
        )
    }

    if (!userData) {
        return null
    }

    return (
        <>
            <SubscriptionsSummary />
            <SubscriptionsDisplay handleEditSubscription={handleEditSubscription} handleShowInput={handleToggleInput} isFormOpen={isAddEntry} />
            {isAddEntry && (
                <SubscriptionForm handleResetForm={handleResetForm} onClose={handleToggleInput} formData={formData} handleChangeInput={handleChangeInput} />
            )}
        </>
    );
}
