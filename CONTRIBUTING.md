# Contributing to Baby KAI Games

Thank you for your interest in contributing to Baby KAI Games! This project aims to create a safe, educational, and fun environment for babies and toddlers to learn through AI-powered games.

## 🎯 Project Goals

- Create age-appropriate educational content for children 1-6 years old
- Provide a safe, ad-free environment for young learners
- Use AI to personalize learning experiences
- Maintain high accessibility standards
- Support parents with progress tracking and insights

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git
- PayPal Developer Account (for payment testing)
- OpenAI API Key (optional, for AI features)

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/marcloydmirador/babyKAIgames.git
   cd babyKAIgames
   ```

2. **Run the setup script**
   ```bash
   ./setup.sh
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🎮 Development Guidelines

### Code Standards

- **TypeScript**: Use TypeScript for all new code
- **React Hooks**: Prefer functional components with hooks
- **Accessibility**: Ensure all interactive elements are keyboard accessible
- **Responsive Design**: Test on mobile, tablet, and desktop
- **Performance**: Optimize for slow devices and connections

### Child Safety Standards

- **Content**: All content must be appropriate for ages 1-6
- **Privacy**: Minimal data collection, no tracking
- **Safety**: No external links or unsafe content
- **Accessibility**: Large touch targets, high contrast, simple navigation

### Game Development

When creating new games:

1. **Age Appropriate**: Design for specific age ranges
2. **Progressive Difficulty**: Start easy, gradually increase challenge
3. **Positive Reinforcement**: Celebrate successes, no negative feedback
4. **Short Sessions**: Games should be completable in 2-5 minutes
5. **Visual Feedback**: Use colors, animations, and sounds
6. **Touch Friendly**: Large buttons, simple gestures

### AI Integration

- Use AI to adapt difficulty based on performance
- Provide encouraging, supportive feedback
- Personalize content without storing personal data
- Ensure AI responses are always child-appropriate

## 🎨 Design System

### Colors
- **Primary**: Orange/yellow gradient (warm, energetic)
- **Secondary**: Blue (calm, trustworthy)
- **Baby Colors**: Soft pastels for backgrounds
- **High Contrast**: Ensure readability for young eyes

### Typography
- **Headings**: Bubblegum Sans (playful)
- **Body**: Comic Neue (readable, friendly)
- **Large Text**: Minimum 18px for body text

### Animations
- **Smooth**: Use easing functions for natural movement
- **Purposeful**: Animations should guide attention
- **Performance**: Optimize for older devices
- **Accessibility**: Respect prefers-reduced-motion

## 🧪 Testing

### Manual Testing Checklist

- [ ] Test on Chrome, Safari, Firefox
- [ ] Test on iOS and Android devices
- [ ] Test with touch and mouse input
- [ ] Test with screen readers
- [ ] Test payment flows (PayPal sandbox)
- [ ] Test offline functionality

### Automated Testing

```bash
npm run test          # Run unit tests
npm run test:watch    # Run tests in watch mode
npm run lint          # Check code style
npm run type-check    # TypeScript validation
```

## 📱 Platform Support

### Primary Platforms
- **iPads**: Optimized for touch interaction
- **Android Tablets**: Responsive design
- **Desktop**: Full feature support
- **Mobile Phones**: Basic functionality

### Browser Support
- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+

## 💳 PayPal Integration

### Development
- Use PayPal sandbox for testing
- Test subscription creation and cancellation
- Verify webhook handling
- Test error scenarios

### Production
- Merchant account: marcloyd.mirador@live.com
- Verify SSL certificates
- Test with real payments (small amounts)
- Monitor transaction logs

## 🔄 Deployment

### Staging
- Automatic deployment from `develop` branch
- Full testing environment
- PayPal sandbox integration

### Production
- Manual deployment from `main` branch
- Production PayPal account
- Performance monitoring
- Error tracking

## 📊 Analytics & Privacy

### What We Track
- Game completion rates (anonymous)
- Performance metrics
- Error logs
- Feature usage

### What We Don't Track
- Personal information
- Browsing behavior outside app
- Location data
- Device identifiers

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Device and Browser**: iOS Safari, Android Chrome, etc.
2. **Steps to Reproduce**: Clear, numbered steps
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Screenshots/Videos**: If applicable
6. **Console Errors**: Any JavaScript errors

## 💡 Feature Requests

When suggesting features:

1. **User Story**: Who is this for and why?
2. **Age Appropriateness**: What age range?
3. **Educational Value**: What does it teach?
4. **Implementation**: Technical considerations
5. **Alternatives**: Other ways to solve the problem

## 🤝 Pull Request Process

1. **Create Feature Branch**: `git checkout -b feature/amazing-game`
2. **Follow Conventions**: Use conventional commits
3. **Add Tests**: Cover new functionality
4. **Update Documentation**: README, comments, etc.
5. **Request Review**: Tag relevant maintainers

### Commit Messages

Use conventional commits:
```
feat: add memory card game for toddlers
fix: resolve touch input on iOS Safari
docs: update game development guidelines
style: improve color contrast for accessibility
```

## 📚 Resources

### Child Development
- [Zero to Three](https://zerotothree.org/)
- [Common Sense Media](https://commonsensemedia.org/)
- [AAP Screen Time Guidelines](https://pediatrics.aappublications.org/)

### Web Accessibility
- [WCAG Guidelines](https://www.w3.org/WAG/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://a11yproject.com/)

### React/Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [React Accessibility](https://reactjs.org/docs/accessibility.html)
- [Framer Motion](https://framer.com/motion/)

## 📞 Contact

- **Lead Developer**: Marc Loyd Mirador
- **Email**: marcloyd.mirador@live.com
- **PayPal**: marcloyd.mirador@live.com
- **GitHub**: [@marcloydmirador](https://github.com/marcloydmirador)

## 📄 License

By contributing to Baby KAI Games, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for helping create a better learning experience for little ones!** 🌟👶🎮
