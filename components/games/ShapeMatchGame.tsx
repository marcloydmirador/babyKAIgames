'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

const shapes = [
  { id: 'circle', name: 'Circle', emoji: '🔵', color: 'bg-blue-400' },
  { id: 'square', name: 'Square', emoji: '🟨', color: 'bg-yellow-400' },
  { id: 'triangle', name: 'Triangle', emoji: '🔺', color: 'bg-red-400' },
  { id: 'star', name: 'Star', emoji: '⭐', color: 'bg-purple-400' },
]

interface ShapeMatchGameProps {
  onComplete?: () => void
}

export default function ShapeMatchGame({ onComplete }: ShapeMatchGameProps) {
  const [currentShape, setCurrentShape] = useState(shapes[0])
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)

  useEffect(() => {
    if (score >= 10) {
      setGameComplete(true)
      setShowCelebration(true)
      triggerConfetti()
      if (onComplete) onComplete()
    }
  }, [score, onComplete])

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const handleShapeClick = (shape: typeof shapes[0]) => {
    setAttempts(prev => prev + 1)
    
    if (shape.id === currentShape.id) {
      setScore(prev => prev + 1)
      triggerConfetti()
      
      // Move to next shape
      setTimeout(() => {
        const nextIndex = Math.floor(Math.random() * shapes.length)
        setCurrentShape(shapes[nextIndex])
      }, 1000)
    }
  }

  const resetGame = () => {
    setScore(0)
    setAttempts(0)
    setGameComplete(false)
    setShowCelebration(false)
    setCurrentShape(shapes[0])
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bubbly colorful-text mb-4">
          Shape Matching Fun! 🔸
        </h2>
        <div className="flex justify-center gap-8 text-xl">
          <div className="bg-green-100 px-4 py-2 rounded-full">
            Score: <span className="font-bold text-green-600">{score}</span>
          </div>
          <div className="bg-blue-100 px-4 py-2 rounded-full">
            Tries: <span className="font-bold text-blue-600">{attempts}</span>
          </div>
        </div>
      </motion.div>

      {!gameComplete ? (
        <>
          {/* Current Shape to Find */}
          <motion.div
            key={currentShape.id}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
            className="text-center mb-12"
          >
            <p className="text-2xl font-comic mb-4 text-primary-700">
              Find the <strong>{currentShape.name}</strong>!
            </p>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-8xl"
            >
              {currentShape.emoji}
            </motion.div>
          </motion.div>

          {/* Shape Options */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {shapes.map((shape, index) => (
              <motion.button
                key={shape.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleShapeClick(shape)}
                className={`${shape.color} baby-card aspect-square flex flex-col items-center justify-center p-6 cursor-pointer group`}
              >
                <motion.div
                  className="text-6xl mb-2"
                  animate={{ 
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  {shape.emoji}
                </motion.div>
                <p className="text-white font-bubbly text-lg">
                  {shape.name}
                </p>
              </motion.button>
            ))}
          </div>
        </>
      ) : (
        /* Game Complete Screen */
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <AnimatePresence>
            {showCelebration && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="mb-8"
              >
                <div className="text-8xl mb-4">🎉</div>
                <h3 className="text-4xl font-bubbly colorful-text mb-4">
                  Amazing Job!
                </h3>
                <p className="text-2xl text-primary-700">
                  You're a shape-matching superstar! ⭐
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 baby-card max-w-md mx-auto">
            <h4 className="text-2xl font-bubbly text-primary-700 mb-4">
              Final Score
            </h4>
            <div className="text-6xl font-bold text-primary-600 mb-2">
              {score}/10
            </div>
            <div className="text-primary-600 mb-6">
              Completed in {attempts} tries!
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetGame}
              className="game-button w-full"
            >
              🎮 Play Again!
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* AI Encouragement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center"
      >
        <div className="bg-primary-50 border border-primary-200 rounded-2xl p-4 max-w-md mx-auto">
          <p className="text-primary-700 font-comic">
            🤖 Great job learning shapes! Keep practicing and you'll become a shape expert! 
          </p>
        </div>
      </motion.div>
    </div>
  )
}
