"use client"

import React from 'react';

export default function ChatDetailPage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 h-16 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button className="p-2 -ml-2 text-gray-500 hover:bg-gray-50 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="relative">
            <img alt="Farmer Profile Image" className="w-10 h-10 rounded-full object-cover border border-gray-100" data-alt="Close-up portrait of a friendly middle-aged farmer with a warm smile wearing a denim shirt in a sunlit field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnU0b86tW1fsVIJcsxIAUTx_AhLX09jzZYItDy-B1iFYYtaRYz1zQSyWL26x5wLz40kluYp0v9DYALVEG4TgZereimfbuQBMQZ-8etNQG-Nz6YKJPs780-96V87VWpn9AhYSMjMLyFElzAuDHu5DV_qngtG16jQuOFE4oSwoRz05--wHU3eswCbaLWYZHGpjIgo559Lkjjtk_IijgwBvmbDGynDdzH8S2F2LTdYVZYaF-5zO2eZBlElgsz_RTeKPQrQdV501i0toQ" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-md text-[16px] text-on-surface leading-tight">Samuel Okon</span>
            <span className="text-label-xs text-[#1B6D24] font-medium">Online</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center mr-4">
            <img alt="KIZ FARM logo" className="h-6" data-alt="KIZ FARM professional minimalist agricultural logo with clean typography and a sprout icon in brand green" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtf4lslROReKnP3d88rTQKeqI4ivQ35Wm1_s44bq2j8A_lO8CaERdC7_UzyDkCHj8tAueXRQ3MToRv_2Z7BWJe9SYRaioy_nfpRGvaLvQpB0QMmUHI5piK6gD--v2Nl8Kc3o6L-TDHLwS9Mv4gHUob_YUn1tLRhU44tCiPsTI5iTrlS-rZ4gSqLfvlrbbwYou8uqOsaTQId4y6Q316BEKKYjb0dY08ZZUjZpbPCwcc7AMJ-3eXIttHqQTVqXIFAxNKVGx1Bsph2zs" />
          </div>
          <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined" data-icon="info">info</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-16 pb-24 min-h-screen max-w-3xl mx-auto px-4 flex flex-col">
        {/* Warning Banner */}
        <div className="mt-4 mb-6 p-4 bg-tertiary-fixed rounded-xl border border-tertiary/10 flex items-start gap-3">
          <span className="material-symbols-outlined text-tertiary mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
          <p className="text-label-sm text-on-tertiary-fixed-variant leading-relaxed">
            Keep all transactions inside KIZ FARM for your safety
          </p>
        </div>

        {/* Chat History */}
        <div className="flex-1 space-y-6 flex flex-col">
          <div className="flex flex-col items-center my-4">
            <span className="px-3 py-1 bg-surface-container text-on-secondary-container text-label-xs rounded-full">Today</span>
          </div>

          {/* Farmer Message */}
          <div className="flex flex-col items-start max-w-[85%]">
            <div className="bg-surface-container text-on-surface p-4 rounded-2xl rounded-tl-none border border-gray-100">
              <p className="text-body-md">Hello! I just harvested a fresh batch of organic tomatoes this morning. They are perfectly ripe and ready for delivery.</p>
            </div>
            <span className="text-label-xs text-gray-400 mt-2 ml-1">09:12 AM</span>
          </div>

          {/* Farmer Image Attachment */}
          <div className="flex flex-col items-start max-w-[85%]">
            <div className="bg-surface-container p-2 rounded-2xl rounded-tl-none border border-gray-100 overflow-hidden">
              <img alt="Fresh red tomatoes" className="rounded-xl w-full max-w-sm object-cover aspect-square md:aspect-video hover:scale-[1.02] transition-transform duration-300" data-alt="Crate overflowing with vibrant, shiny red organic vine tomatoes with green stems, captured in natural bright daylight on a farm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9dxoVIeYL6IC-NExtr-m-oSfReoHhrAY-SctU12pnXm_1eAhPlYWHgHpRO1_HeX2RPbpnDi_eUXAzYXACaKYtd0sEoqXDQ-Rv3LzZsbwQWlOUJhoUlxzy1KT_guwmU6JQhF-A92_JVtSAdmmmkd2mc25VpmS3Bk14ybHK1Gcf9ZGW_mOiTUfLmUVgz8SRtpOQ6XMoQ8Ro9UX3MPAS6RHtJPwpcpViZCFcoIU3DA_DUvo4g-EkaGdVz3nC7VPhR9-oWf0YFtIVIXA" />
              <div className="p-2">
                <p className="text-body-md text-on-surface">Here is the current quality of the harvest.</p>
              </div>
            </div>
            <span className="text-label-xs text-gray-400 mt-2 ml-1">09:13 AM</span>
          </div>

          {/* User Message */}
          <div className="flex flex-col items-end self-end max-w-[85%]">
            <div className="bg-primary-container text-on-primary-container p-4 rounded-2xl rounded-tr-none shadow-sm">
              <p className="text-body-md">Those look excellent, Samuel! I'd like to order 5kg for my restaurant. Can you deliver by tomorrow afternoon?</p>
            </div>
            <div className="flex items-center gap-1 mt-2 mr-1">
              <span className="text-label-xs text-gray-400">09:15 AM</span>
              <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
            </div>
          </div>

          {/* Farmer Message */}
          <div className="flex flex-col items-start max-w-[85%]">
            <div className="bg-surface-container text-on-surface p-4 rounded-2xl rounded-tl-none border border-gray-100">
              <p className="text-body-md">Yes, I can definitely manage that. I'll include them in my morning delivery route. The total will be processed through the app.</p>
            </div>
            <span className="text-label-xs text-gray-400 mt-2 ml-1">09:17 AM</span>
          </div>
        </div>
      </main>

      {/* Bottom Message Input Shell */}
      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 p-4 z-50">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <button className="flex items-center justify-center w-10 h-10 text-gray-500 hover:bg-gray-50 rounded-full active:scale-90 transition-all">
            <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
          </button>
          <button className="flex items-center justify-center w-10 h-10 text-gray-500 hover:bg-gray-50 rounded-full active:scale-90 transition-all">
            <span className="material-symbols-outlined" data-icon="image">image</span>
          </button>
          <div className="flex-1 relative">
            <input className="w-full bg-surface-container-low border-none rounded-full px-6 py-3 text-body-md focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none" placeholder="Type your message..." type="text" />
          </div>
          <button className="bg-[#1B6D24] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg shadow-primary/20 active:scale-95 transition-all">
            <span className="material-symbols-outlined" data-icon="send" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 bg-surface-bright"></div>
      <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-tertiary/5 blur-[120px] -z-10 pointer-events-none"></div>
    </>
  );
}
