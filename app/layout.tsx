import '../styles/globals.css'
import PayPalProviderWrapper from '../components/PayPalProviderWrapper'

export const metadata = {
  title: 'Baby KAI Games - AI-Powered Learning for Little Ones',
  description: 'Interactive educational games powered by AI for babies and toddlers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PayPalProviderWrapper>
          {children}
        </PayPalProviderWrapper>
      </body>
    </html>
  )
}
