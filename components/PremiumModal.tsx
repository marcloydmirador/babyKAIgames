'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, Crown, Zap, Shield, Heart } from 'lucide-react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'

interface PremiumModalProps {
  isOpen: boolean
  onClose: () => void
  userEmail: string
}

const premiumFeatures = [
  {
    icon: <Crown className="w-6 h-6" />,
    title: 'Unlimited Games',
    description: 'Access to all premium games and activities',
    emoji: '🎮'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Advanced AI Tutor',
    description: 'Personalized learning paths with detailed progress tracking',
    emoji: '🤖'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Ad-Free Experience',
    description: 'Completely safe and distraction-free environment',
    emoji: '🛡️'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Parent Dashboard',
    description: 'Detailed insights into your child\'s learning progress',
    emoji: '📊'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Exclusive Content',
    description: 'New games and activities added monthly',
    emoji: '✨'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Offline Mode',
    description: 'Play select games without internet connection',
    emoji: '📱'
  }
]

export default function PremiumModal({ isOpen, onClose, userEmail }: PremiumModalProps) {
  const [{ isPending }] = usePayPalScriptReducer()
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly')

  const plans = {
    monthly: {
      price: '$9.99',
      period: 'month',
      savings: '',
      value: '9.99'
    },
    yearly: {
      price: '$79.99',
      period: 'year',
      savings: 'Save 33%',
      value: '79.99'
    }
  }

  const handlePaymentSuccess = (details?: any) => {
    console.log('Payment successful:', details)
    // Handle successful payment - both real and simulated
    if (details) {
      alert('Welcome to Baby KAI Games Premium! 🎉\nPayment processed successfully!')
    } else {
      alert('Welcome to Baby KAI Games Premium! 🎉\n(Demo mode - no actual payment processed)')
    }
    // Here you would typically:
    // 1. Update user's premium status in your database
    // 2. Store subscription details
    // 3. Enable premium features
    onClose()
  }

  const handlePaymentError = (err: any) => {
    console.error('Payment error:', err)
    alert('Payment failed. Please try again.')
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-6 rounded-t-3xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl mb-4"
              >
                👑
              </motion.div>
              <h2 className="text-4xl font-bubbly mb-2">
                Unlock Premium Magic!
              </h2>
              <p className="text-xl opacity-90">
                Give your little one the ultimate learning experience
              </p>
            </div>
          </div>

          <div className="p-6">
            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {premiumFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl border border-primary-200"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bubbly text-lg text-primary-700 mb-1 flex items-center gap-2">
                      {feature.title}
                      <span>{feature.emoji}</span>
                    </h3>
                    <p className="text-primary-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pricing Plans */}
            <div className="mb-8">
              <h3 className="text-2xl font-bubbly text-center mb-6 text-primary-700">
                Choose Your Plan 💎
              </h3>
              
              <div className="flex gap-4 justify-center mb-6">
                {Object.entries(plans).map(([key, plan]) => (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPlan(key as 'monthly' | 'yearly')}
                    className={`relative p-6 rounded-2xl border-2 transition-all ${
                      selectedPlan === key
                        ? 'border-primary-500 bg-primary-50 shadow-lg'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    {key === 'yearly' && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        BEST VALUE! 🌟
                      </div>
                    )}
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-700">
                        {plan.price}
                      </div>
                      <div className="text-sm text-primary-600">
                        per {plan.period}
                      </div>
                      {plan.savings && (
                        <div className="text-green-600 font-semibold text-sm mt-1">
                          {plan.savings}
                        </div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* PayPal Payment */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-xl font-bubbly text-center mb-4 text-primary-700">
                Complete Your Purchase 🎯
              </h4>
              
              <div className="text-center mb-4">
                <p className="text-primary-600">
                  Account: <strong>{userEmail}</strong>
                </p>
                <p className="text-primary-600">
                  Plan: <strong>{plans[selectedPlan].price}/{plans[selectedPlan].period}</strong>
                </p>
              </div>

              {/* Check if PayPal is properly configured */}
              {(() => {
                const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
                const hasValidPayPal = clientId && 
                  clientId.trim() !== '' && 
                  !clientId.includes('demo_') && 
                  !clientId.includes('replace_with')
                
                if (!hasValidPayPal) {
                  return (
                    /* Demo Mode - Show placeholder */
                    <div className="text-center py-8 bg-yellow-50 border border-yellow-200 rounded-xl">
                      <div className="text-4xl mb-4">🔧</div>
                      <h5 className="font-bubbly text-lg text-yellow-700 mb-2">
                        Demo Mode
                      </h5>
                      <p className="text-yellow-600 text-sm mb-4">
                        PayPal integration will be available once you configure your API keys.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlePaymentSuccess}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-bold"
                      >
                        🎮 Simulate Premium Access
                      </motion.button>
                      <p className="text-xs text-yellow-500 mt-2">
                        This is for testing purposes only
                      </p>
                    </div>
                  )
                } else if (isPending) {
                  return (
                    <div className="text-center py-8">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block text-4xl"
                      >
                        ⭐
                      </motion.div>
                      <p className="text-primary-600 mt-2">Loading payment options...</p>
                    </div>
                  )
                } else {
                  return (
                    <PayPalButtons
                      style={{
                        layout: "vertical",
                        color: "gold",
                        shape: "rect",
                        label: "paypal"
                      }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          intent: "CAPTURE",
                          purchase_units: [{
                            amount: {
                              value: plans[selectedPlan].value,
                              currency_code: "USD"
                            },
                            description: `Baby KAI Games Premium - ${selectedPlan} subscription`
                          }]
                        })
                      }}
                      onApprove={(data, actions) => {
                        return actions.order!.capture().then(handlePaymentSuccess)
                      }}
                      onError={handlePaymentError}
                      onCancel={() => {
                        console.log('Payment cancelled')
                      }}
                    />
                  )
                }
              })()}

              <div className="text-center mt-4">
                <p className="text-xs text-gray-500">
                  💳 Secure payment powered by PayPal<br/>
                  Cancel anytime • No hidden fees • 7-day free trial
                </p>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center p-4 bg-green-50 rounded-2xl border border-green-200"
            >
              <div className="text-2xl mb-2">🛡️</div>
              <h4 className="font-bubbly text-green-700 mb-1">
                30-Day Money Back Guarantee
              </h4>
              <p className="text-green-600 text-sm">
                If you're not completely satisfied, we'll refund every penny!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
