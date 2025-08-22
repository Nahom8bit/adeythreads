import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build')

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Please fill in all required fields' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Send email to support only if Resend API key is configured
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'dummy-key-for-build') {
      try {
        await resend.emails.send({
          from: 'Adey Threads Contact Form <noreply@adeythreads.com>',
          to: ['support@adeythreads.com'],
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #8B4513, #D2691E); padding: 40px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 28px; font-weight: bold;">New Contact Form Submission</h1>
              </div>
              
              <div style="padding: 40px; background: white;">
                <h2 style="color: #8B4513; margin-bottom: 20px;">Contact Details</h2>
                
                <div style="margin-bottom: 20px;">
                  <strong style="color: #333;">Name:</strong>
                  <p style="color: #666; margin: 5px 0;">${name}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                  <strong style="color: #333;">Email:</strong>
                  <p style="color: #666; margin: 5px 0;">${email}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                  <strong style="color: #333;">Message:</strong>
                  <p style="color: #666; margin: 5px 0; line-height: 1.6;">${message}</p>
                </div>
                
                <div style="background: #f8f8f8; padding: 15px; border-radius: 8px; margin-top: 30px;">
                  <p style="color: #666; font-size: 14px; margin: 0;">
                    <strong>Submitted:</strong> ${new Date().toLocaleString()}
                  </p>
                </div>
              </div>
              
              <div style="background: #1a1a1a; padding: 20px; text-align: center; color: white;">
                <p style="margin: 0; font-size: 14px;">
                  © ${new Date().getFullYear()} Adey Threads. All rights reserved.
                </p>
              </div>
            </div>
          `,
        })

        // Send confirmation email to user
        await resend.emails.send({
          from: 'Adey Threads <noreply@adeythreads.com>',
          to: [email],
          subject: 'Thank you for contacting Adey Threads',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #8B4513, #D2691E); padding: 40px; text-align: center; color: white;">
                <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Thank You</h1>
                <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">We've received your message</p>
              </div>
              
              <div style="padding: 40px; background: white;">
                <h2 style="color: #8B4513; margin-bottom: 20px;">Hello ${name},</h2>
                
                <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
                  Thank you for reaching out to Adey Threads. We've received your message and will get back to you within 24-48 hours.
                </p>
                
                <p style="color: #333; line-height: 1.6; margin-bottom: 30px;">
                  In the meantime, feel free to follow us on social media for the latest updates and cultural content.
                </p>
                
                <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                  <h3 style="color: #8B4513; margin: 0 0 15px 0;">Your Message:</h3>
                  <p style="color: #333; line-height: 1.6; margin: 0; font-style: italic;">"${message}"</p>
                </div>
                
                <p style="color: #666; font-size: 14px; margin-bottom: 0;">
                  Best regards,<br>
                  The Adey Threads Team
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
        console.error('Failed to send contact emails:', emailError)
        return NextResponse.json(
          { message: 'Failed to send email. Please try again later.' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}