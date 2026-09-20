'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Star, Gamepad2, Brain, Gift } from 'lucide-react'
import GameSelector from '../components/GameSelector'
import AICompanion from '../components/AICompanion'
import PremiumModal from '../components/PremiumModal'
import ShapeMatchGame from '../components/games/ShapeMatchGame'
import ColorSplashGame from '../components/games/ColorSplashGame'

export default function Home() {
  const [showPremium, setShowPremium] = useState(false)
  const [currentGame, setCurrentGame] = useState<string | null>(null)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    // Load user preferences
    const savedName = localStorage.getItem('babykai-username')
    if (savedName) setUserName(savedName)
  }, [])

  const handleGameSelect = (gameId: string) => {
    setCurrentGame(gameId)
  }

  const handlePremiumClick = () => {
    setShowPremium(true)
  }

  const renderGame = () => {
    switch (currentGame) {
      case 'shape-match':
        return <ShapeMatchGame onComplete={() => setCurrentGame(null)} />
      case 'color-splash':
        return <ColorSplashGame onComplete={() => setCurrentGame(null)} />
      case 'story-time':
        return (
          <div className="baby-card max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bubbly colorful-text mb-6">AI Story Time 📚</h3>
            <div className="text-6xl mb-4">📖</div>
            <p className="text-xl text-primary-700 mb-6">
              Interactive storytelling is coming soon! Our AI will create personalized stories for your little one.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentGame(null)}
              className="game-button"
            >
              ← Back to Games
            </motion.button>
          </div>
        )
      case 'music-maker':
        return (
          <div className="baby-card max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bubbly colorful-text mb-6">Music Maker 🎵</h3>
            <div className="text-6xl mb-4">🎹</div>
            <p className="text-xl text-primary-700 mb-6">
              Create beautiful melodies! This premium feature is coming soon.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentGame(null)}
              className="game-button"
            >
              ← Back to Games
            </motion.button>
          </div>
        )
      case 'number-fun':
        return (
          <div className="baby-card max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bubbly colorful-text mb-6">Number Fun 🔢</h3>
            <div className="text-6xl mb-4">🔢</div>
            <p className="text-xl text-primary-700 mb-6">
              Count and learn with our AI friend! This game is being developed.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentGame(null)}
              className="game-button"
            >
              ← Back to Games
            </motion.button>
          </div>
        )
      case 'memory-cards':
        return (
          <div className="baby-card max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bubbly colorful-text mb-6">Memory Cards 🧠</h3>
            <div className="text-6xl mb-4">🃏</div>
            <p className="text-xl text-primary-700 mb-6">
              Test your memory with adaptive difficulty! Premium feature coming soon.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentGame(null)}
              className="game-button"
            >
              ← Back to Games
            </motion.button>
          </div>
        )
      default:
        return (
          <div className="baby-card max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bubbly colorful-text mb-6">Game Not Found 😅</h3>
            <div className="text-6xl mb-4">❓</div>
            <p className="text-xl text-primary-700 mb-6">
              Oops! This game is still being developed.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentGame(null)}
              className="game-button"
            >
              ← Back to Games
            </motion.button>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-baby-blue via-baby-pink to-baby-yellow relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-6xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          🌈
        </motion.div>
        <motion.div
          className="absolute top-32 right-20 text-5xl"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20 text-4xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          🎈
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-32 text-5xl"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, -15, 15, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          🦋
        </motion.div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bubbly colorful-text mb-4 flex items-center justify-center gap-4">
            <Brain className="w-16 h-16 text-primary-500" />
            Baby KAI Games
            <Sparkles className="w-16 h-16 text-secondary-500" />
          </h1>
          <p className="text-2xl text-primary-700 font-comic">
            AI-Powered Learning Adventures for Little Ones! 🎮✨
          </p>
          {userName && (
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-xl text-secondary-600 mt-2"
            >
              Welcome back, {userName}! 👋
            </motion.p>
          )}
        </motion.div>

        {/* Premium Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePremiumClick}
          className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2"
        >
          <Gift className="w-5 h-5" />
          Go Premium!
        </motion.button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pb-6">
        {!currentGame ? (
          <GameSelector onGameSelect={handleGameSelect} />
        ) : (
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentGame(null)}
              className="mb-6 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-bold"
            >
              ← Back to Games
            </motion.button>
          </div>
        )}

        {/* Game content - render actual games based on currentGame */}
        {currentGame && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {renderGame()}
          </motion.div>
        )}
      </main>

      {/* AI Companion */}
      <AICompanion />

      {/* Premium Modal */}
      {showPremium && (
        <PremiumModal 
          isOpen={showPremium} 
          onClose={() => setShowPremium(false)}
          userEmail="marcloyd.mirador@live.com"
        />
      )}
    </div>
  )
}
