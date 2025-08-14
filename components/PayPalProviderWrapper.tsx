'use client'

import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { ReactNode } from 'react'

interface PayPalProviderWrapperProps {
  children: ReactNode
}

export default function PayPalProviderWrapper({ children }: PayPalProviderWrapperProps) {
  // Check if we have a valid PayPal client ID
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const hasValidClientId = clientId && 
    clientId.trim() !== '' && 
    !clientId.includes('demo_') && 
    !clientId.includes('replace_with')

  // If no valid PayPal client ID, render without PayPal provider
  if (!hasValidClientId) {
    console.log('PayPal not configured - running in demo mode')
    return <>{children}</>
  }

  // PayPal configuration for valid client ID
  const paypalOptions = {
    clientId: clientId,
    currency: "USD",
    intent: "capture",
  }

  return (
    <PayPalScriptProvider options={paypalOptions}>
      {children}
    </PayPalScriptProvider>
  )
}
