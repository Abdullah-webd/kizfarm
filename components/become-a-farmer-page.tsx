"use client"

import React from 'react';

export default function BecomeAFarmerPage() {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 px-4 h-16 w-full flex items-center justify-between">
        <div className="flex items-center gap-base">
          <img alt="KIZ FARM logo" className="h-8 w-auto object-contain" data-alt="minimalist professional logo for an agricultural technology company with modern typography and leaf motifs in deep green" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          <span className="text-lg font-black tracking-tighter text-[#1B6D24] uppercase font-headline-md">KIZ FARM</span>
        </div>
        <a className="text-primary font-label-sm hover:underline decoration-2 underline-offset-4" href="#">Sign In</a>
      </header>

      <main className="flex-grow flex items-center justify-center py-xl px-gutter">
        <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          {/* Branding/Value Prop Section */}
          <div className="hidden lg:flex flex-col space-y-md">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img alt="Farm Landscape" className="absolute inset-0 w-full h-full object-cover" data-alt="dramatic aerial view of rolling green hills and geometric crop fields during morning mist with golden sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkJ5di6_z4mMdCMAfGHKgBtk46NAv2eT2HLqypI8tR38DzEi8XqG313rBSFnV_fSCH16S9-Jpm3blcnU5LCBy34wO7ghQlazGIrwNBeo67Gtu-QeGs63ROeKiiwwBe8Ch2RMwHkSksli_J9el7puGpRctGrUCnl_3hVELEGBKMK7lVPZMIIVpnmLLyJfMM1d0BnmadMcEsfXAUNyEK3GG_qFOy6kqhPCmb7Br4bWpd01M1Qze67YibCj-haI2F8_nJKVGo44OpQes" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-margin">
                <span className="text-white/80 font-label-sm uppercase tracking-widest mb-xs">Join the movement</span>
                <h1 className="text-white font-headline-xl mb-base">Empowering Digital Agronomy</h1>
                <p className="text-white/90 font-body-lg max-w-md">Connect your farm to the future of high-precision software and sustainable growth.</p>
              </div>
            </div>
          </div>

          {/* Registration Form Canvas */}
          <div className="bg-white p-margin rounded-xl border border-zinc-200 shadow-sm">
            <div className="mb-lg">
              <h2 className="text-on-surface font-headline-lg mb-xs">Create Farmer Account</h2>
              <p className="text-secondary font-body-md">Join the KIZ FARM ecosystem and start managing your production with precision.</p>
            </div>
            <form className="space-y-md">
              {/* Name & Farm Name Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="text-on-surface font-label-sm" htmlFor="full_name">Full name</label>
                  <input className="h-12 px-4 rounded-lg border border-zinc-300 bg-white font-body-md text-on-surface form-input-focus transition-all" id="full_name" placeholder="Enter your full name" type="text" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="text-on-surface font-label-sm" htmlFor="farm_name">Farm name</label>
                  <input className="h-12 px-4 rounded-lg border border-zinc-300 bg-white font-body-md text-on-surface form-input-focus transition-all" id="farm_name" placeholder="Official farm name" type="text" />
                </div>
              </div>

              {/* Email/Phone */}
              <div className="flex flex-col gap-xs">
                <label className="text-on-surface font-label-sm" htmlFor="contact">Email/Phone</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" data-icon="mail">mail</span>
                  <input className="w-full h-12 pl-12 pr-4 rounded-lg border border-zinc-300 bg-white font-body-md text-on-surface form-input-focus transition-all" id="contact" placeholder="email@example.com or phone number" type="text" />
                </div>
              </div>

              {/* Location & Farm Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="text-on-surface font-label-sm" htmlFor="location">Farm location</label>
                  <div className="relative">
                    <select className="w-full h-12 px-4 rounded-lg border border-zinc-300 bg-white font-body-md text-on-surface appearance-none form-input-focus transition-all" id="location">
                      <option disabled value="" selected>Select location</option>
                      <option value="central_valley">Central Valley</option>
                      <option value="highlands">Northern Highlands</option>
                      <option value="coastal_plains">Coastal Plains</option>
                      <option value="river_basin">River Basin</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" data-icon="expand_more">expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="text-on-surface font-label-sm" htmlFor="farm_type">Farm type</label>
                  <div className="relative">
                    <select className="w-full h-12 px-4 rounded-lg border border-zinc-300 bg-white font-body-md text-on-surface appearance-none form-input-focus transition-all" id="farm_type">
                      <option disabled value="" selected>Select type</option>
                      <option value="crops">Crops</option>
                      <option value="livestock">Livestock</option>
                      <option value="mixed">Mixed Farming</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" data-icon="agriculture">agriculture</span>
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-xs">
                <label className="text-on-surface font-label-sm" htmlFor="password">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" data-icon="lock">lock</span>
                  <input className="w-full h-12 pl-12 pr-4 rounded-lg border border-zinc-300 bg-white font-body-md text-on-surface form-input-focus transition-all" id="password" placeholder="Minimum 8 characters" type="password" />
                </div>
              </div>

              {/* CTA Section */}
              <div className="pt-base flex flex-col gap-md">
                <button className="w-full h-12 bg-[#1B6D24] hover:bg-primary-container text-white font-headline-md rounded-lg shadow-sm active:scale-[0.98] transition-all duration-150" type="submit">
                  Join KIZ FARM
                </button>
                <p className="text-center text-secondary font-label-sm">
                  By joining, you agree to our{' '}
                  <a className="text-[#1B6D24] font-semibold hover:underline" href="#">Terms of Service</a>
                  {' '}and{' '}
                  <a className="text-[#1B6D24] font-semibold hover:underline" href="#">Privacy Policy</a>
                </p>
              </div>
            </form>

            {/* Support/Quick Links */}
            <div className="mt-lg pt-lg border-t border-zinc-100 flex items-center justify-between">
              <div className="flex items-center gap-xs text-zinc-500">
                <span className="material-symbols-outlined text-[18px]" data-icon="help_outline">help_outline</span>
                <span className="font-label-sm">Need assistance?</span>
              </div>
              <a className="text-[#1B6D24] font-label-sm font-semibold flex items-center gap-xs" href="#">
                Contact Support
                <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-lg px-gutter border-t border-zinc-200 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-md text-secondary">
          <p className="font-label-sm">© 2024 KIZ FARM DIGITAL AGRONOMY. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-lg font-label-sm">
            <a className="hover:text-primary transition-colors" href="#">Twitter</a>
            <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
            <a className="hover:text-primary transition-colors" href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
