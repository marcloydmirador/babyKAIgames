'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const colors = [
  { name: 'Red', hex: '#ef4444', emoji: '🔴' },
  { name: 'Blue', hex: '#3b82f6', emoji: '🔵' },
  { name: 'Green', hex: '#10b981', emoji: '🟢' },
  { name: 'Yellow', hex: '#f59e0b', emoji: '🟡' },
  { name: 'Purple', hex: '#8b5cf6', emoji: '🟣' },
  { name: 'Orange', hex: '#f97316', emoji: '🟠' },
]

interface ColorSplashGameProps {
  onComplete?: () => void
}

export default function ColorSplashGame({ onComplete }: ColorSplashGameProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [canvas, setCanvas] = useState<string[]>([])
  const [isDrawing, setIsDrawing] = useState(false)

  const handleColorSelect = (color: typeof colors[0]) => {
    setSelectedColor(color)
  }

  const handleCanvasClick = () => {
    setCanvas(prev => [...prev, selectedColor.hex])
  }

  const clearCanvas = () => {
    setCanvas([])
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
          Color Splash Art! 🎨
        </h2>
        <p className="text-xl text-primary-700">
          Choose colors and create your masterpiece!
        </p>
      </motion.div>

      {/* Color Palette */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
        {colors.map((color, index) => (
          <motion.button
            key={color.name}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleColorSelect(color)}
            className={`aspect-square rounded-full border-4 transition-all ${
              selectedColor.name === color.name 
                ? 'border-gray-800 scale-110 shadow-lg' 
                : 'border-gray-300'
            }`}
            style={{ backgroundColor: color.hex }}
          >
            <div className="text-2xl">{color.emoji}</div>
          </motion.button>
        ))}
      </div>

      {/* Current Color Display */}
      <motion.div
        key={selectedColor.name}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center mb-6"
      >
        <p className="text-xl text-primary-700 mb-2">
          Selected Color: <strong>{selectedColor.name}</strong>
        </p>
        <div 
          className="inline-block w-16 h-16 rounded-full border-4 border-gray-300"
          style={{ backgroundColor: selectedColor.hex }}
        />
      </motion.div>

      {/* Canvas Area */}
      <div className="baby-card mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bubbly text-primary-700">Your Canvas</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearCanvas}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-full font-bold"
          >
            🗑️ Clear
          </motion.button>
        </div>
        
        <div 
          className="w-full h-64 bg-white border-4 border-dashed border-gray-300 rounded-2xl cursor-pointer relative overflow-hidden"
          onClick={handleCanvasClick}
        >
          {canvas.length === 0 ? (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xl">
              Click to paint! 🖌️
            </div>
          ) : (
            <div className="absolute inset-0 p-4">
              <div className="grid grid-cols-8 gap-1 h-full">
                {Array.from({ length: 64 }, (_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: canvas[index] ? 1 : 0 }}
                    className="aspect-square rounded-full"
                    style={{ 
                      backgroundColor: canvas[index] || 'transparent'
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* AI Encouragement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center"
      >
        <div className="bg-primary-50 border border-primary-200 rounded-2xl p-4 max-w-md mx-auto">
          <p className="text-primary-700 font-comic">
            🤖 What beautiful colors! You're such a creative artist! Keep painting! 🎨
          </p>
        </div>
      </motion.div>
    </div>
  )
}
