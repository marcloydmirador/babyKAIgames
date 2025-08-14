# Baby KAI Games - AI-Powered Learning for Little Ones 🎮🤖

An interactive educational gaming platform designed specifically for babies and toddlers, powered by artificial intelligence to create personalized learning experiences.

## 🌟 Features

- **AI-Powered Learning**: Adaptive games that adjust to your child's learning pace
- **Interactive Games**: Shape matching, music creation, story time, and more
- **AI Companion**: Virtual assistant that provides encouragement and guidance
- **Premium Content**: Advanced features with PayPal integration
- **Child-Safe Design**: Colorful, engaging interface designed for tiny fingers
- **Voice Interaction**: Text-to-speech for enhanced accessibility
- **Progress Tracking**: Monitor your child's learning journey

## 🎯 Game Categories

### Free Games
- **Shape Matching** (Ages 1-3): Learn shapes and colors with AI guidance
- **AI Story Time** (Ages 2-5): Interactive stories that adapt to your child
- **Number Fun** (Ages 3-5): Count and learn with friendly AI characters

### Premium Games
- **Music Maker** (Ages 2-4): Create melodies and learn rhythms
- **Color Splash** (Ages 2-4): Digital painting with smart color suggestions
- **Memory Cards** (Ages 3-6): AI-powered memory games with adaptive difficulty

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PayPal Developer Account
- OpenAI API Key (optional, for enhanced AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/marcloydmirador/babyKAIgames.git
   cd babyKAIgames
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your API keys:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id_here
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💳 PayPal Integration

The app is configured to use PayPal for premium subscriptions. The account `marcloyd.mirador@live.com` is set as the primary merchant account.

### Setting up PayPal:
1. Create a PayPal Developer account
2. Create a new application in the PayPal Developer Dashboard
3. Use the Client ID in your environment variables
4. Configure webhooks for subscription management

## 🎨 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom baby-friendly themes
- **Animations**: Framer Motion for smooth, engaging interactions
- **Payments**: PayPal React SDK
- **AI**: OpenAI API for intelligent features
- **Audio**: Howler.js for sound effects and music
- **Speech**: Web Speech API for text-to-speech

## 🎮 Game Development

Each game is designed with:
- **Age-appropriate difficulty**: Automatically adjusts based on performance
- **Visual feedback**: Bright colors, animations, and encouraging messages
- **Audio cues**: Sound effects and voice guidance
- **Touch-friendly**: Large buttons and simple gestures
- **Progress tracking**: AI monitors learning progress

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets (optimized for touch)
- Smartphones
- Interactive displays

## 🔒 Safety & Privacy

- **Child-safe content**: All content is carefully curated for young audiences
- **No tracking**: Minimal data collection, focused on learning progress
- **Secure payments**: PayPal integration for safe transactions
- **Ad-free premium**: Premium version removes all advertisements

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy automatically

### Docker
```bash
docker build -t baby-kai-games .
docker run -p 3000:3000 baby-kai-games
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Guidelines
- Follow React/Next.js best practices
- Ensure accessibility for young children
- Test on multiple devices and screen sizes
- Maintain child-friendly content standards

## 📧 Contact

**Developer**: Marc Loyd Mirador  
**Email**: marcloyd.mirador@live.com  
**PayPal**: marcloyd.mirador@live.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for providing AI capabilities
- PayPal for secure payment processing
- The React and Next.js communities
- All the parents and children who inspire this project

---

**Made with ❤️ for little learners everywhere** 🌟👶🎨
