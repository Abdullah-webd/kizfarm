"use client"

import React from 'react';

export default function IdentityVerificationPage() {
  return (
    <div className="bg-white font-body-md text-on-surface">
      {/* TopAppBar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-16 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200">
        <div className="flex items-center gap-4">
          <button className="p-2 text-zinc-600 hover:bg-zinc-50 transition-colors active:scale-95 duration-150 rounded-lg">
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
          <div className="flex items-center gap-2">
            <img alt="KIZ FARM logo" className="h-8 w-auto" data-alt="KIZ FARM official logo featuring a large green K with red and green swooshes" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
            <span className="text-lg font-black tracking-tighter text-[#1B6D24] uppercase">KIZ FARM</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-zinc-600 hover:bg-zinc-50 transition-colors active:scale-95 duration-150 rounded-lg relative">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
          </button>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto min-h-[calc(100vh-64px)] p-6 md:p-margin bg-white">
        {/* Verification Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-lg gap-md">
          <div>
            <nav className="flex items-center gap-2 text-zinc-400 mb-2">
              <span className="text-label-sm font-label-sm uppercase">Account</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-label-sm font-label-sm uppercase text-primary">Verification</span>
            </nav>
            <h1 className="text-headline-lg font-headline-lg text-on-surface">Identity Verification</h1>
            <p className="text-body-lg font-body-lg text-zinc-500 max-w-2xl">Complete your profile to unlock full marketplace features and ensure secure transactions within the KIZ FARM ecosystem.</p>
          </div>
          {/* Status Badge */}
          <div className="flex items-center gap-3 px-4 py-2 bg-tertiary-fixed rounded-xl border border-tertiary-container/20">
            <span className="material-symbols-outlined text-tertiary" data-icon="pending">pending</span>
            <div className="flex flex-col">
              <span className="text-label-xs font-label-xs text-on-tertiary-fixed-variant uppercase">Current Status</span>
              <span className="text-label-sm font-label-sm font-bold text-tertiary">Pending verification</span>
            </div>
          </div>
        </div>

        {/* Verification Canvas: Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Form Fields & Uploads (8 cols) */}
          <div className="lg:col-span-8 space-y-md">
            {/* Identification Numbers Card */}
            <section className="bg-white border border-[#E5E7EB] rounded-xl p-md">
              <div className="flex items-center gap-2 mb-md">
                <span className="material-symbols-outlined text-primary" data-icon="fingerprint">fingerprint</span>
                <h2 className="text-headline-md font-headline-md">Identification Numbers</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant uppercase">Bank Verification Number (BVN)</label>
                  <div className="relative">
                    <input className="w-full h-12 bg-white border border-zinc-200 rounded-lg px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="222********" type="password" />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-primary">
                      <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                    </button>
                  </div>
                  <p className="text-label-xs font-label-xs text-zinc-400">Used for financial identity only. Secured by 256-bit encryption.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant uppercase">National Identity Number (NIN)</label>
                  <input className="w-full h-12 bg-white border border-zinc-200 rounded-lg px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Enter 11-digit NIN" type="text" />
                  <p className="text-label-xs font-label-xs text-zinc-400">Your official Nigerian identity record.</p>
                </div>
              </div>
            </section>

            {/* Documents Grid (Bento Style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Government ID Upload */}
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-md flex flex-col group cursor-pointer hover:border-primary transition-colors">
                <div className="flex justify-between items-start mb-md">
                  <div className="p-3 bg-green-50 rounded-xl text-primary">
                    <span className="material-symbols-outlined" data-icon="badge">badge</span>
                  </div>
                  <span className="text-label-xs font-label-xs text-zinc-400 uppercase">Step 02</span>
                </div>
                <h3 className="text-headline-md font-headline-md mb-2">Government ID</h3>
                <p className="text-body-md text-zinc-500 mb-md">Upload a clear photo of your International Passport, Voter's Card, or Driver's License.</p>
                <div className="flex-grow flex flex-col items-center justify-center border-2 border-dashed border-zinc-200 rounded-lg p-lg bg-zinc-50/50 group-hover:bg-green-50/20 transition-all">
                  <span className="material-symbols-outlined text-4xl text-zinc-300 mb-2" data-icon="cloud_upload">cloud_upload</span>
                  <span className="text-label-sm font-label-sm text-zinc-600">Drag file or click to browse</span>
                  <span className="text-label-xs font-label-xs text-zinc-400 mt-1">PNG, JPG up to 10MB</span>
                </div>
              </div>

              {/* Selfie Verification */}
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-md flex flex-col group cursor-pointer hover:border-primary transition-colors">
                <div className="flex justify-between items-start mb-md">
                  <div className="p-3 bg-green-50 rounded-xl text-primary">
                    <span className="material-symbols-outlined" data-icon="face">face</span>
                  </div>
                  <span className="text-label-xs font-label-xs text-zinc-400 uppercase">Step 03</span>
                </div>
                <h3 className="text-headline-md font-headline-md mb-2">Live Selfie</h3>
                <p className="text-body-md text-zinc-500 mb-md">Take a clear photo of yourself looking directly at the camera with neutral lighting.</p>
                <div className="flex-grow flex flex-col items-center justify-center border-2 border-dashed border-zinc-200 rounded-lg p-lg bg-zinc-50/50 group-hover:bg-green-50/20 transition-all">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white shadow-sm">
                    <img alt="Selfie placeholder" className="w-full h-full object-cover grayscale opacity-50" data-alt="close up illustrative silhouette of a person for profile picture placeholder with soft lighting and clean background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSeUxpPyskgRjpA-7ITQfvT5Fysnaa35SMATd0TU3N0wsg97dZsOAR2wSSQSFtKfTZMaI3_CcAC8zWysmcxhMy58zQXBNp_vGmxG55WjHA_4AcXB8ZEJylEFfkeJbr0qQr-yhU_nKVQQ4M6vzNP5HQwURnmIbhjN-RUpCv0BG2K7IugWQfovz7ZvKJE8QGFcy30P3Lxbi4J3h1IK_kSfuFZUQzacvkNDsd303pau684VlfKq62sIrEfuWPwDvuCRscVGwBk2nIOLs" />
                    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" data-icon="photo_camera">photo_camera</span>
                    </div>
                  </div>
                  <span className="text-label-sm font-label-sm text-zinc-600">Open Camera</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-md">
              <button className="bg-[#1B6D24] text-white px-xl h-12 rounded-lg font-label-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/10">
                Submit for Review
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-gutter">
            {/* Security Notice Card */}
            <div className="bg-[#1B6D24] rounded-2xl p-md text-white overflow-hidden relative">
              {/* Decorative Element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-md">
                  <span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
                  <span className="text-label-sm font-label-sm uppercase tracking-widest">Security Protocol</span>
                </div>
                <h3 className="text-headline-md font-headline-md mb-md">Your Data is Encrypted</h3>
                <p className="text-body-md text-white/80 mb-md">We use industry-standard SSL encryption and vault storage for all identification documents. KIZ FARM never shares your personal details with third parties.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-label-sm">
                    <span className="material-symbols-outlined text-[20px]" data-icon="check_circle">check_circle</span>
                    AES-256 Bit Encryption
                  </li>
                  <li className="flex items-center gap-3 text-label-sm">
                    <span className="material-symbols-outlined text-[20px]" data-icon="check_circle">check_circle</span>
                    NDPR Compliant Processing
                  </li>
                  <li className="flex items-center gap-3 text-label-sm">
                    <span className="material-symbols-outlined text-[20px]" data-icon="check_circle">check_circle</span>
                    Secure Cloud Storage
                  </li>
                </ul>
              </div>
            </div>

            {/* Verification Progress */}
            <div className="bg-surface-container-lowest border border-[#E5E7EB] rounded-2xl p-md">
              <h3 className="text-label-sm font-label-sm uppercase text-zinc-400 mb-md">Verification Timeline</h3>
              <div className="space-y-gutter relative">
                {/* Connecting Line */}
                <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-zinc-100"></div>
                {/* Step 1 (Completed) */}
                <div className="relative flex gap-4">
                  <div className="z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-sm" data-icon="check">check</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-sm font-bold">Profile Basics</span>
                    <span className="text-label-xs text-zinc-400">Completed June 12, 2024</span>
                  </div>
                </div>
                {/* Step 2 (Active) */}
                <div className="relative flex gap-4">
                  <div className="z-10 w-8 h-8 rounded-full bg-primary border-4 border-white ring-2 ring-primary flex items-center justify-center text-white">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-sm font-bold text-primary">Identity Check</span>
                    <span className="text-label-xs text-zinc-500">Awaiting your documents</span>
                  </div>
                </div>
                {/* Step 3 (Pending) */}
                <div className="relative flex gap-4 opacity-50">
                  <div className="z-10 w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500">
                    <span className="text-label-xs">3</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-sm font-bold">Address Verification</span>
                    <span className="text-label-xs text-zinc-400">Locked</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Widget */}
            <div className="p-md bg-green-50/50 rounded-2xl border border-green-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary" data-icon="help">help</span>
                <span className="text-label-sm font-bold text-[#1B6D24]">Need Assistance?</span>
              </div>
              <p className="text-label-xs text-zinc-600 mb-md">Having trouble uploading? Our support team is available 24/7 to help you verify your account.</p>
              <button className="text-primary font-bold text-label-sm hover:underline flex items-center gap-1">
                Chat with Support
                <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 z-50 flex justify-around items-center px-4 pb-safe bg-white/95 backdrop-blur-lg border-t border-zinc-200">
        <div className="flex flex-col items-center justify-center text-zinc-400">
          <span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Home</span>
        </div>
        <div className="flex flex-col items-center justify-center text-zinc-400">
          <span className="material-symbols-outlined" data-icon="potted_plant">potted_plant</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Products</span>
        </div>
        <div className="flex flex-col items-center justify-center text-zinc-400">
          <span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Orders</span>
        </div>
        <div className="flex flex-col items-center justify-center text-zinc-400">
          <span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Earnings</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#1B6D24] scale-110">
          <span className="material-symbols-outlined" data-icon="forum">forum</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Chat</span>
        </div>
      </nav>
    </div>
  );
}
