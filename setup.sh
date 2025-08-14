#!/bin/bash

# Baby KAI Games - Development Setup Script
echo "🎮 Setting up Baby KAI Games development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt "18" ]; then
    echo "❌ Node.js version must be 18 or higher. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create environment file if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "🔧 Creating .env.local file..."
    cp .env.example .env.local
    echo "⚠️  Please edit .env.local with your actual API keys"
fi

# Build the project
echo "🏗️  Building the project..."
npm run build

echo "🎉 Setup complete!"
echo ""
echo "🚀 To start the development server:"
echo "   npm run dev"
echo ""
echo "🌐 Then open http://localhost:3000 in your browser"
echo ""
echo "📝 Don't forget to:"
echo "   1. Edit .env.local with your PayPal and OpenAI API keys"
echo "   2. Set up your PayPal Developer account"
echo "   3. Configure PayPal with marcloyd.mirador@live.com"
echo ""
echo "💡 For help, see README.md or contact marcloyd.mirador@live.com"
