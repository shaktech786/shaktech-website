import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  service?: string;
  budget?: string;
  timeline?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // For now, log the contact form submission
    // In production, this would save to database or send email
    console.log('Contact form submission:', {
      ...data,
      timestamp: new Date().toISOString()
    });

    // If database is available, save to database
    // try {
    //   const { PrismaClient } = await import('@prisma/client');
    //   const prisma = new PrismaClient();
    //   
    //   await prisma.contact.create({
    //     data: {
    //       name: data.name,
    //       email: data.email,
    //       company: data.company,
    //       message: data.message,
    //       service: data.service,
    //       budget: data.budget,
    //       timeline: data.timeline,
    //     },
    //   });
    //   
    //   await prisma.$disconnect();
    // } catch (dbError) {
    //   console.error('Database error:', dbError);
    //   // Continue even if database fails
    // }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We\'ll get back to you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}