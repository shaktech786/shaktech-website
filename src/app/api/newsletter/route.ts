import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, name, source } = await request.json();

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // For now, log the newsletter subscription
    // In production, this would save to database or email service
    console.log('Newsletter subscription:', {
      email,
      name: name || 'Not provided',
      source: source || 'website',
      timestamp: new Date().toISOString()
    });

    // If database is available, save subscription
    // try {
    //   const { PrismaClient } = await import('@prisma/client');
    //   const prisma = new PrismaClient();
    //   
    //   // Check if already subscribed
    //   const existing = await prisma.newsletter.findUnique({
    //     where: { email }
    //   });
    //   
    //   if (existing) {
    //     if (existing.subscribed) {
    //       return NextResponse.json(
    //         { message: 'You are already subscribed!' },
    //         { status: 200 }
    //       );
    //     } else {
    //       // Resubscribe
    //       await prisma.newsletter.update({
    //         where: { email },
    //         data: { subscribed: true }
    //       });
    //     }
    //   } else {
    //     // New subscription
    //     await prisma.newsletter.create({
    //       data: {
    //         email,
    //         name,
    //         source,
    //         subscribed: true
    //       }
    //     });
    //   }
    //   
    //   await prisma.$disconnect();
    // } catch (dbError) {
    //   console.error('Database error:', dbError);
    //   // Continue even if database fails
    // }

    return NextResponse.json(
      { 
        success: true,
        message: 'Successfully subscribed to newsletter!' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // For now, log the unsubscribe
    console.log('Newsletter unsubscribe:', {
      email,
      timestamp: new Date().toISOString()
    });

    // If database is available, update subscription
    // try {
    //   const { PrismaClient } = await import('@prisma/client');
    //   const prisma = new PrismaClient();
    //   
    //   await prisma.newsletter.update({
    //     where: { email },
    //     data: { subscribed: false }
    //   });
    //   
    //   await prisma.$disconnect();
    // } catch (dbError) {
    //   console.error('Database error:', dbError);
    // }

    return NextResponse.json(
      { 
        success: true,
        message: 'Successfully unsubscribed from newsletter' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    return NextResponse.json(
      { error: 'Failed to unsubscribe from newsletter' },
      { status: 500 }
    );
  }
}