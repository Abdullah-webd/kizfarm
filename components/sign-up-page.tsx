"use client"

import React from 'react';

export default function SignUpPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Visual/Branding */}
      <section className="hidden lg:flex lg:w-1/2 relative bg-primary overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/80 to-transparent"></div>
        <img alt="Lush Farm Field" className="absolute inset-0 w-full h-full object-cover object-center" data-alt="expansive field of vibrant green wheat at sunrise with soft morning mist and golden light illuminating the horizon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-vq4V1SoF5Me8DS98Gl1rndSkH4zewp921U0es9H1lDd8qb6lybCgsYsix16Taitzb_mNPoqN6Ljnss68EW8dPy3UxXHNiCKcFV5h6YSJ_ayE6B9tiIA14-VkH3CpxbuNnwtX3CAfrfaUNBx88wJllgNpftN8u691U9jWj6vVuThcBHkioRAcyXOjSjCxN7NQ8VXDnI0Ef7iixRs0Ndk9kR-kEierTrc-oP2AQ6fLAiabercjECe40_xOFwZGC3AGx-VyIYlIc6M" />
        <div className="relative z-20 flex flex-col justify-between h-full p-xl text-on-tertiary">
          <div>
            <div className="flex items-center gap-base">
              <span className="material-symbols-outlined text-[40px]" data-icon="agriculture">agriculture</span>
              <span className="font-headline-md text-headline-md tracking-tighter">KIZ FARM</span>
            </div>
          </div>
          <div className="max-w-md">
            <h1 className="font-headline-xl text-headline-xl mb-md">Precision starts with a single seed.</h1>
            <p className="font-body-lg text-body-lg opacity-90">Join the next generation of digital agronomy and transform your agricultural data into actionable growth.</p>
          </div>
          <div className="flex gap-lg">
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md">15k+</span>
              <span className="font-label-sm text-label-sm opacity-70">Active Fields</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md">98%</span>
              <span className="font-label-sm text-label-sm opacity-70">Data Accuracy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side: Sign-up Form */}
      <section className="flex-1 flex flex-col items-center justify-center p-base md:p-xl bg-white">
        <div className="w-full max-w-[440px] flex flex-col gap-lg">
          {/* Mobile Header Only */}
          <div className="flex justify-center mb-md mt-base">
            <img alt="KIZ FARM Logo" className="h-16 w-auto object-contain" data-alt="minimalist modern vector logo for a farming company showing a stylized leaf and circuit pattern" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          </div>

          <div className="flex flex-col gap-xs">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Create Account</h2>
            <p className="font-body-md text-body-md text-secondary">Start your 14-day free trial. No credit card required.</p>
          </div>

          <form className="flex flex-col gap-md">
            {/* Full Name Field */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-sm text-label-sm text-on-surface" htmlFor="name">Full Name</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-secondary" data-icon="person">person</span>
                <input className="form-input w-full h-[48px] pl-10 pr-base border border-outline-variant rounded-lg font-body-md text-body-md focus:border-primary focus:ring-0 transition-all outline-none" id="name" placeholder="John Doe" type="text" />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-sm text-label-sm text-on-surface" htmlFor="email">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-secondary" data-icon="mail">mail</span>
                <input className="form-input w-full h-[48px] pl-10 pr-base border border-outline-variant rounded-lg font-body-md text-body-md focus:border-primary focus:ring-0 transition-all outline-none" id="email" placeholder="john@example.com" type="email" />
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-sm text-label-sm text-on-surface" htmlFor="phone">Phone Number</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-secondary" data-icon="phone">phone</span>
                <input className="form-input w-full h-[48px] pl-10 pr-base border border-outline-variant rounded-lg font-body-md text-body-md focus:border-primary focus:ring-0 transition-all outline-none" id="phone" placeholder="+1 (555) 000-0000" type="tel" />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-sm text-label-sm text-on-surface" htmlFor="password">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-secondary" data-icon="lock">lock</span>
                <input className="form-input w-full h-[48px] pl-10 pr-10 border border-outline-variant rounded-lg font-body-md text-body-md focus:border-primary focus:ring-0 transition-all outline-none" id="password" placeholder="••••••••" type="password" />
                <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-secondary cursor-pointer" data-icon="visibility">visibility</span>
              </div>
              <p className="font-label-xs text-label-xs text-secondary">Must be at least 8 characters long.</p>
            </div>

            {/* Terms and Privacy */}
            <div className="flex items-start gap-sm mt-xs">
              <input className="mt-1 h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary" id="terms" type="checkbox" />
              <label className="font-label-xs text-label-xs text-on-surface-variant" htmlFor="terms">
                I agree to the <a className="text-primary font-bold hover:underline" href="#">Terms of Service</a> and <a className="text-primary font-bold hover:underline" href="#">Privacy Policy</a>.
              </label>
            </div>

            {/* Primary Button */}
            <button className="h-[48px] w-full bg-primary-container text-on-tertiary font-label-sm text-label-sm rounded-lg hover:bg-primary transition-all active:scale-95 flex items-center justify-center gap-base mt-base" type="submit">
              <span>Create Account</span>
              <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </form>

          <div className="flex flex-col gap-md items-center mt-base">
            <div className="relative w-full flex items-center justify-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant"></div></div>
              <span className="relative px-sm bg-white font-label-xs text-label-xs text-secondary">OR SIGN UP WITH</span>
            </div>
            <div className="flex gap-md w-full">
              <button className="flex-1 h-[48px] border border-outline-variant rounded-lg flex items-center justify-center gap-base font-label-sm text-label-sm hover:bg-surface transition-all">
                <img alt="Google" className="h-5 w-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEVkmxATRQG623PJErBB6gtO3yp-Y3oh7ef5SRPHm9R1gq9M1npaxYhLLA28JijDIaBDabTfQ6SPpz1QmqZguLWDhe_9d-CbVXwBjV1MwwxHB54KAlyZm_DJ1JBGVYxSrZ5DPpdGkPkhZOziJtiM7nExXzz-OetUXQEvrvak0aUUghc4B6KcWNMvtCMJZalK7JgdHC4FOt-CLLb0uCF2xpTgE58I1gpIoTixO5XuSzDix5U9TU-URvRLNdykOv3gQ8uNi2TE1jYE4" />
                Google
              </button>
              <button className="flex-1 h-[48px] border border-outline-variant rounded-lg flex items-center justify-center gap-base font-label-sm text-label-sm hover:bg-surface transition-all">
                <span className="material-symbols-outlined text-black" data-icon="work">work</span>
                SSO
              </button>
            </div>
            <p className="font-body-md text-body-md text-secondary">
              Already have an account? <a className="text-primary font-bold hover:underline" href="#">Log in</a>
            </p>
          </div>
        </div>

        {/* Subtle Footer Branding */}
        <div className="mt-xl text-center">
          <p className="font-label-xs text-label-xs text-secondary tracking-widest uppercase">Digital Agronomy Ecosystem</p>
        </div>
      </section>
    </div>
  );
}
