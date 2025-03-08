import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { recaptchaToken } = await req.json();

    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, message: 'No reCAPTCHA token provided' },
        { status: 400 },
      );
    }

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY || ''}&response=${recaptchaToken}`,
      {
        method: 'POST',
      },
    );

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: data['error-codes'] },
        { status: 400 },
      );
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 },
    );
  }
}
