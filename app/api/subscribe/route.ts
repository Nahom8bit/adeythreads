import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build')

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Store email in database (for now, we'll just log it)
    // In production, you'd want to store this in a database
    console.log('New subscription:', email)

    // Send welcome email only if Resend API key is configured
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'dummy-key-for-build') {
      try {
        await resend.emails.send({
          from: 'Adey Threads <noreply@adeythreads.com>',
          to: [email],
          subject: 'Welcome to Adey Threads! 🎉',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #8B4513, #D2691E); padding: 40px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Welcome to Adey Threads</h1>
                <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Premium Habesha Fashion</p>
              </div>
              
              <div style="padding: 40px; background: white;">
                <h2 style="color: #8B4513; margin-bottom: 20px;">Thank you for joining our waitlist!</h2>
                
                <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
                  We're excited to have you as part of our community. You'll be among the first to know when we launch our exclusive collection of premium Habesha fashion.
                </p>
                
                <p style="color: #333; line-height: 1.6; margin-bottom: 30px;">
                  Our team is working hard to bring you the finest quality garments that celebrate our rich cultural heritage and modern craftsmanship.
                </p>
                
                <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                  <h3 style="color: #8B4513; margin: 0 0 15px 0;">What to expect:</h3>
                  <ul style="color: #333; line-height: 1.6; margin: 0; padding-left: 20px;">
                    <li>Exclusive early access to our collection</li>
                    <li>Behind-the-scenes updates on our journey</li>
                    <li>Special launch day offers</li>
                    <li>Cultural stories and inspiration</li>
                  </ul>
                </div>
                
                <p style="color: #666; font-size: 14px; margin-bottom: 0;">
                  Follow us on social media for more updates and cultural content.
                </p>
              </div>
              
              <div style="background: #1a1a1a; padding: 20px; text-align: center; color: white;">
                <p style="margin: 0; font-size: 14px;">
                  © ${new Date().getFullYear()} Adey Threads. All rights reserved.
                </p>
              </div>
            </div>
          `,
        })
      } catch (emailError) {
        console.error('Failed to send welcome email:', emailError)
        // Don't fail the subscription if email sending fails
      }
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to waitlist' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}