import { NextRequest, NextResponse } from 'next/server'
import { core, orders } from '@paypal/checkout-server-sdk'

const environment = process.env.NODE_ENV === 'production' 
  ? new core.LiveEnvironment(
      process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
      process.env.PAYPAL_CLIENT_SECRET!
    )
  : new core.SandboxEnvironment(
      process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
      process.env.PAYPAL_CLIENT_SECRET!
    )

const client = new core.PayPalHttpClient(environment)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { plan, userEmail } = body

    // Create subscription
    const subscriptionRequest = new orders.OrdersCreateRequest()
    subscriptionRequest.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: 'USD',
          value: plan === 'yearly' ? '79.99' : '9.99'
        },
        description: `Baby KAI Games Premium - ${plan} subscription`,
        payee: {
          email_address: 'marcloyd.mirador@live.com'
        }
      }]
    })

    const order = await client.execute(subscriptionRequest)

    return NextResponse.json({
      success: true,
      orderId: order.result.id,
      approvalUrl: order.result.links.find((link: any) => link.rel === 'approve')?.href
    })

  } catch (error) {
    console.error('PayPal subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to create subscription' },
      { status: 500 }
    )
  }
}
