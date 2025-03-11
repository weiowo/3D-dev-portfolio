'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import EarthCanvas from './canvas/Earth';
import SectionWrapper from './wrappers/SectionWrapper';
import { slideIn } from '../utils/motion';
import Button from './button';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const onRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const onSubmit = async (data: FormData) => {
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    const verificationResponse = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recaptchaToken }),
    });
    const verificationResult = await verificationResponse.json();
    if (!verificationResult.success) {
      alert('reCAPTCHA verification failed. Please try again.');
      return;
    }

    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      console.error('EmailJS environment variables are not set');
      alert('Email service is not supported');
      return;
    }

    const emailParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert('Email sent successfully!');
          reset();
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send email. Please try again later.');
        },
      );
  };

  const asyncScriptOnLoad = () => {
    console.log('Google recaptcha loaded just fine');
  };

  return (
    <SectionWrapper idName="contact">
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] shadow-md shadow-[#86868640] border-[2px] border-[#202020] p-4 sm:p-8 rounded-2xl"
        >
          <p className="section-sub-text">Get in touch</p>
          <h3 className="section-head-text">Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="mt-5 flex flex-col gap-4"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Name</span>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                placeholder="What's your name?"
                className="bg-[#cdcdcd] py-2 px-4 placeholder:text-[#838383] text-black rounded-lg outline-none border-none font-medium"
              />
              {errors.name && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your email</span>
              <input
                type="email"
                {...register('email', { required: 'email is required' })}
                placeholder="What's your web address?"
                className="bg-[#cdcdcd] py-2 px-4 placeholder:text-[#838383] text-black rounded-lg outline-none border-none font-medium"
              />
              {errors.email && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.email?.message}
                </span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Message</span>
              <textarea
                rows={7}
                {...register('message', { required: 'Message is required' })}
                placeholder="What you want to say?"
                className="bg-[#cdcdcd] py-2 px-4 placeholder:text-[#838383] text-black rounded-lg outline-none border-none font-medium"
              />
              {errors.message && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.message?.message}
                </span>
              )}
            </label>

            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={onRecaptchaChange}
              asyncScriptOnLoad={asyncScriptOnLoad}
              theme="dark"
            />

            <Button type="submit" className="mt-3">
              Send
              {/* {loading ? 'Sending...' : 'Send'} */}
            </Button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
