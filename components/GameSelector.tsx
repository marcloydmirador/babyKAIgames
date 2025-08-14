'use client'

import { motion } from 'framer-motion'
import { Gamepad2, Puzzle, Music, Book, Palette, Calculator } from 'lucide-react'

interface Game {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  ageRange: string
  isPremium: boolean
  emoji: string
}

const games: Game[] = [
  {
    id: 'shape-match',
    title: 'Shape Matching',
    description: 'Learn shapes and colors with AI guidance',
    icon: <Puzzle className="w-8 h-8" />,
    ageRange: '1-3 years',
    isPremium: false,
    emoji: '🔸'
  },
  {
    id: 'music-maker',
    title: 'Music Maker',
    description: 'Create melodies and learn rhythms',
    icon: <Music className="w-8 h-8" />,
    ageRange: '2-4 years',
    isPremium: true,
    emoji: '🎵'
  },
  {
    id: 'story-time',
    title: 'AI Story Time',
    description: 'Interactive stories that adapt to your child',
    icon: <Book className="w-8 h-8" />,
    ageRange: '2-5 years',
    isPremium: false,
    emoji: '📚'
  },
  {
    id: 'color-splash',
    title: 'Color Splash',
    description: 'Digital painting with smart color suggestions',
    icon: <Palette className="w-8 h-8" />,
    ageRange: '2-4 years',
    isPremium: true,
    emoji: '🎨'
  },
  {
    id: 'number-fun',
    title: 'Number Fun',
    description: 'Count and learn with friendly AI characters',
    icon: <Calculator className="w-8 h-8" />,
    ageRange: '3-5 years',
    isPremium: false,
    emoji: '🔢'
  },
  {
    id: 'memory-cards',
    title: 'Memory Cards',
    description: 'AI-powered memory games that adapt difficulty',
    icon: <Gamepad2 className="w-8 h-8" />,
    ageRange: '3-6 years',
    isPremium: true,
    emoji: '🧠'
  }
]

interface GameSelectorProps {
  onGameSelect: (gameId: string) => void
}

export default function GameSelector({ onGameSelect }: GameSelectorProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bubbly text-center mb-8 colorful-text"
      >
        Choose Your Adventure! 🎮
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: [0, 1, -1, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            className="baby-card cursor-pointer group"
            onClick={() => onGameSelect(game.id)}
          >
            {/* Premium Badge */}
            {game.isPremium && (
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                ✨ Premium
              </div>
            )}

            {/* Game Icon */}
            <div className="text-center mb-4">
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mb-3 group-hover:shadow-lg transition-shadow"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <div className="text-primary-600">
                  {game.icon}
                </div>
              </motion.div>
              <div className="text-4xl mb-2">{game.emoji}</div>
            </div>

            {/* Game Info */}
            <div className="text-center">
              <h3 className="text-2xl font-bubbly text-primary-700 mb-2">
                {game.title}
              </h3>
              <p className="text-primary-600 mb-3 text-sm">
                {game.description}
              </p>
              <div className="inline-block bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-xs font-semibold">
                Ages {game.ageRange}
              </div>
            </div>

            {/* Play Button */}
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="w-full game-button text-lg">
                {game.isPremium ? '🔐 Play Premium' : '🎮 Play Now'}
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 baby-card text-center"
      >
        <h3 className="text-2xl font-bubbly text-primary-700 mb-4">
          🤖 Powered by AI Magic
        </h3>
        <p className="text-primary-600 text-lg leading-relaxed">
          Each game adapts to your child's learning pace and preferences. 
          Our AI companion provides gentle guidance and celebrates every achievement! 
          <span className="inline-block ml-2">🌟</span>
        </p>
      </motion.div>
    </div>
  )
}
