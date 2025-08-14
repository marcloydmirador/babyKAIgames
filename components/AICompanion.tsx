'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Volume2, VolumeX } from 'lucide-react'

interface AICompanionProps {
  className?: string
}

const encouragements = [
  "You're doing amazing! 🌟",
  "Keep exploring! 🚀",
  "What a smart little one! 🧠",
  "Great job! 🎉",
  "You're learning so fast! ⚡",
  "Wonderful work! 💖",
  "You're a star! ⭐",
  "Keep playing and learning! 🎮"
]

const tips = [
  "Try touching different colors! 🌈",
  "Can you count to 3? 123! 🔢",
  "What sound does this make? 🔊",
  "Great pattern recognition! 🧩",
  "You're getting better every day! 📈",
  "Try the shape game next! 🔸",
  "Music helps learning! 🎵",
  "Stories spark imagination! 📚"
]

export default function AICompanion({ className = '' }: AICompanionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentMessage, setCurrentMessage] = useState('')
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speechEnabled, setSpeechEnabled] = useState(true)

  useEffect(() => {
    // Show random encouragement every 30 seconds
    const interval = setInterval(() => {
      if (!isOpen) {
        const messages = Math.random() > 0.5 ? encouragements : tips
        const randomMessage = messages[Math.floor(Math.random() * messages.length)]
        setCurrentMessage(randomMessage)
        
        if (speechEnabled && 'speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(randomMessage.replace(/[🌟🚀🧠🎉⚡💖⭐🎮🌈🔢🔊🧩📈🔸🎵📚]/g, ''))
          utterance.rate = 0.8
          utterance.pitch = 1.2
          window.speechSynthesis.speak(utterance)
        }
      }
    }, 30000)

    return () => clearInterval(interval)
  }, [isOpen, speechEnabled])

  const handleToggle = () => {
    setIsOpen(!isOpen)
    if (!isOpen && !currentMessage) {
      setCurrentMessage("Hi there! I'm KAI, your AI learning buddy! 🤖✨")
    }
  }

  const speakMessage = (message: string) => {
    if ('speechSynthesis' in window && speechEnabled) {
      setIsSpeaking(true)
      const utterance = new SpeechSynthesisUtterance(message.replace(/[🌟🚀🧠🎉⚡💖⭐🎮🌈🔢🔊🧩📈🔸🎵📚🤖✨]/g, ''))
      utterance.rate = 0.8
      utterance.pitch = 1.2
      utterance.onend = () => setIsSpeaking(false)
      window.speechSynthesis.speak(utterance)
    }
  }

  const sendEncouragement = () => {
    const randomMessage = encouragements[Math.floor(Math.random() * encouragements.length)]
    setCurrentMessage(randomMessage)
    speakMessage(randomMessage)
  }

  const sendTip = () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)]
    setCurrentMessage(randomTip)
    speakMessage(randomTip)
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-4 baby-card max-w-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
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
                  className="text-2xl"
                >
                  🤖
                </motion.div>
                <span className="font-bubbly text-lg text-primary-700">KAI</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSpeechEnabled(!speechEnabled)}
                  className="p-1 rounded-full hover:bg-primary-100 transition-colors"
                >
                  {speechEnabled ? (
                    <Volume2 className="w-4 h-4 text-primary-600" />
                  ) : (
                    <VolumeX className="w-4 h-4 text-gray-400" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-primary-100 transition-colors"
                >
                  <X className="w-4 h-4 text-primary-600" />
                </button>
              </div>
            </div>

            {/* Message */}
            {currentMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-primary-50 rounded-2xl border border-primary-200"
              >
                <p className="text-primary-700 text-sm">
                  {currentMessage}
                </p>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={sendEncouragement}
                className="flex-1 bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-3 rounded-full text-xs font-bold"
              >
                🎉 Cheer Me On!
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={sendTip}
                className="flex-1 bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-3 rounded-full text-xs font-bold"
              >
                💡 Give Tip!
              </motion.button>
            </div>

            {/* Speaking Indicator */}
            {isSpeaking && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 flex items-center justify-center gap-2 text-primary-600"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-2 h-2 bg-primary-500 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                  className="w-2 h-2 bg-primary-500 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 bg-primary-500 rounded-full"
                />
                <span className="text-xs ml-2">Speaking...</span>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggle}
        className="relative bg-gradient-to-r from-primary-500 to-secondary-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.div>

        {/* Notification Pulse */}
        {!isOpen && (
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
          >
            <span className="text-xs text-white">🤖</span>
          </motion.div>
        )}
      </motion.button>
    </div>
  )
}
