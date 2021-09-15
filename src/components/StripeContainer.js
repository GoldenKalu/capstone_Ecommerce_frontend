import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadstripe } from "@stripe/react-stripe-js"

const PUBLIC_KEY ="pk_test_51JYzMjLTAOH9KAabKnmhUVEUS4Jsp2OiIXp2lxBoJCcTgg4OrQQjwU3qrpjAnmoOcPCCxVu1HLYeqo5pFgRb5Izi00IwzQc0Op"

 const stripeTestPromise = loadstripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <Payment />

        
            
        </Elements>
    )
}
