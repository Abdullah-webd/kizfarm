"use client"

import React from 'react';

export default function ShoppingCartPage() {
  return (
    <>
      {/* TopAppBar Section */}
      <header className="bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3">
            <img alt="KIZ FARM" className="h-10 object-contain w-auto" data-alt="high-quality minimalist logo for a modern agriculture company featuring a stylized green leaf and modern clean typography" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
            <h1 className="text-xl font-extrabold tracking-tight text-[#1B6D24]">KIZ FARM</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-gray-500 hover:bg-gray-50 p-2 rounded-full transition-colors" data-icon="notifications">notifications</button>
            <div className="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center text-white font-bold text-xs">KF</div>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-lg lg:grid lg:grid-cols-12 lg:gap-gutter">
        {/* Cart Items Section */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-md">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">My Cart</h2>
            <span className="text-label-sm font-label-sm text-secondary bg-secondary-container px-3 py-1 rounded-full">3 Items</span>
          </div>

          {/* Product Card 1 */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-md mb-md flex flex-col sm:flex-row gap-md items-start sm:items-center hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-shadow">
            <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
              <img className="w-full h-full object-cover" data-alt="close-up of fresh organic white potatoes in a rustic wooden crate with soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe68eC7scU1nxbda0XvvyJkDfCuPS6HCvbxIa77LatQfQ0o9yjP3HPzd6FxJpczvLV0YsnKz0kKlhR-MRI-dw2Nz0i_0_HuegD7KOQnr9l9QhbcSJ5JJSNve44fu18nM6SkGw2j5aesa_hf0vb2tHOW8Zx9x9-w0fakJPhiEpWS8F1p5OKnnjbdTO_y3ejXJDI5cZwsjsTIAYQG-bqiGhGAT5B8H3-bj2rYRqISC8YTA1J-GlEq9lqdrCieJGG3hSUq1FX0U3PWTU" />
            </div>
            <div className="flex-grow flex flex-col gap-1">
              <h3 className="font-headline-md text-body-lg text-on-surface">Premium Irish Potatoes</h3>
              <p className="text-label-sm font-label-sm text-secondary">Weight: 50kg</p>
              <p className="font-bold text-[#1B6D24] mt-2">₦ 45,000</p>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center border border-outline-variant rounded-lg">
                <button className="p-2 text-primary hover:bg-green-50 transition-colors"><span className="material-symbols-outlined">remove</span></button>
                <span className="px-4 font-bold">1</span>
                <button className="p-2 text-primary hover:bg-green-50 transition-colors"><span className="material-symbols-outlined">add</span></button>
              </div>
              <button className="material-symbols-outlined text-error hover:bg-error-container/20 p-2 rounded-full transition-colors" data-icon="delete">delete</button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-md mb-md flex flex-col sm:flex-row gap-md items-start sm:items-center hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-shadow">
            <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
              <img className="w-full h-full object-cover" data-alt="burlap sack filled with high-quality golden brown rice grains with dramatic side lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHI0qSvlPbEe2rYWWTLQxUomD4Ib6fDAi6NBQ9LxoHuM4mnDlYFmjzp_VKprLrxyaCxdr18m9f-KJ-zU7qHyjaDkD7rBxET56MwC3w-s7D4vbvshUUfO0W_229egG1j_6A8gez-3EF748cvhFZuKBH01Qk6XfFSTyTjLE5LOpRfbUp0TMkWDNTWGmhwGeH4c1pYdixjMl7kMc7hluto5-OsjjdHG_TOjQKj42MrNRYFSRP2kq4GI3EyLCx9hG6fQ4vLMReqlXnD9Y" />
            </div>
            <div className="flex-grow flex flex-col gap-1">
              <h3 className="font-headline-md text-body-lg text-on-surface">Long Grain Parboiled Rice</h3>
              <p className="text-label-sm font-label-sm text-secondary">Weight: 50kg</p>
              <p className="font-bold text-[#1B6D24] mt-2">₦ 78,000</p>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center border border-outline-variant rounded-lg">
                <button className="p-2 text-primary hover:bg-green-50 transition-colors"><span className="material-symbols-outlined">remove</span></button>
                <span className="px-4 font-bold">2</span>
                <button className="p-2 text-primary hover:bg-green-50 transition-colors"><span className="material-symbols-outlined">add</span></button>
              </div>
              <button className="material-symbols-outlined text-error hover:bg-error-container/20 p-2 rounded-full transition-colors" data-icon="delete">delete</button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-md mb-md flex flex-col sm:flex-row gap-md items-start sm:items-center hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-shadow">
            <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
              <img className="w-full h-full object-cover" data-alt="large golden yellow honey beans spilling out of a ceramic bowl on a dark stone surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn2qlQgWpvYhUdb_OuBTL3CLvBdoYB0pMwN6WenhCCox6EispQVp1Jo4H3EHJtgy3dk6Hz-rmK0aBZGJrfeiTHZh3CF1Q7s128789Rw9Fj0wRvgGgXZrNlnNLatg5aq2OOEwYjshHWELbsyQEhScyhzFQ6xmrxBIuxP-mvXGVbaLoclh49VrpQrjxZEoVrOvfJuvqtTTIVpZK7CgT8kJQxTKCzvuYBNp-AOy15sXNDEWm8Ui7bFnoqOFSW6o1sB9dGpj4Z3-jM3Co" />
            </div>
            <div className="flex-grow flex flex-col gap-1">
              <h3 className="font-headline-md text-body-lg text-on-surface">Premium Honey Beans</h3>
              <p className="text-label-sm font-label-sm text-secondary">Weight: 50kg</p>
              <p className="font-bold text-[#1B6D24] mt-2">₦ 52,500</p>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center border border-outline-variant rounded-lg">
                <button className="p-2 text-primary hover:bg-green-50 transition-colors"><span className="material-symbols-outlined">remove</span></button>
                <span className="px-4 font-bold">1</span>
                <button className="p-2 text-primary hover:bg-green-50 transition-colors"><span className="material-symbols-outlined">add</span></button>
              </div>
              <button className="material-symbols-outlined text-error hover:bg-error-container/20 p-2 rounded-full transition-colors" data-icon="delete">delete</button>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <aside className="lg:col-span-4 mt-lg lg:mt-0">
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-md sticky top-24">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Order Summary</h3>
            <div className="space-y-4 mb-lg">
              <div className="flex justify-between text-body-md text-secondary">
                <span>Subtotal</span>
                <span className="text-on-surface">₦ 253,500</span>
              </div>
              <div className="flex justify-between text-body-md text-secondary">
                <span>Delivery Fee</span>
                <span className="text-on-surface">₦ 5,000</span>
              </div>
              <div className="flex justify-between text-body-md text-secondary">
                <span>Service Charge</span>
                <span className="text-on-surface">₦ 1,200</span>
              </div>
              <div className="pt-4 border-t border-outline-variant flex justify-between">
                <span className="font-bold text-lg text-on-surface">Total</span>
                <span className="font-bold text-lg text-[#1B6D24]">₦ 259,700</span>
              </div>
            </div>
            <div className="mb-lg">
              <div className="relative">
                <input className="w-full bg-white border border-[#D1D5DB] rounded-lg h-12 px-4 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all" placeholder="Promo code" type="text" />
                <button className="absolute right-2 top-2 h-8 px-4 bg-secondary-container text-on-secondary-container rounded-md font-label-sm text-label-sm hover:bg-secondary transition-colors">Apply</button>
              </div>
            </div>
            <button className="w-full h-[48px] bg-[#1B6D24] text-white rounded-lg font-bold text-body-md flex items-center justify-center gap-2 hover:bg-primary transition-all active:scale-[0.98]">
              Proceed to Checkout
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <div className="mt-md flex items-center gap-2 justify-center text-label-sm font-label-sm text-secondary">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              Secure Checkout by KIZ FARM
            </div>
          </div>

          {/* Ad/Promo Card */}
          <div className="mt-md rounded-xl overflow-hidden relative group aspect-[4/3]">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="expansive lush green farm fields under a clear blue sky at dawn representing agricultural growth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv2VPSDn50fNV0CQH3fxFuRoTtaYnfd2mkqgXX9k8RDayE5sgRjSOI5RQns130QHVzCWzcAnUaxyIw6xizGr54Wrx0sVJUhqijT_336ZTKrZ1tXjqDsj1sXS3l5przkBD2k5JbfRDVjRwhOm6__M0QTRvtGf9jXYfGqFVWftFBkDKeaGnahFHBXNcp2nj9egCYLG57tXjwb6q3nDyDiLz22nKAxOI3Ela0CzpZTEyA-dq-Q5QqVo49UjgOcIqrfOKMjzVzKut9Jqg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white font-bold text-lg">Direct From Source</h4>
              <p className="text-white/80 text-sm">Save 10% more on bulk purchases over 500kg</p>
            </div>
          </div>
        </aside>
      </main>

      <div className="h-20 lg:hidden"></div>

      {/* BottomNavBar Section */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-2 bg-white/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none md:hidden">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1 hover:text-[#1B6D24] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] bg-green-50 dark:bg-green-900/20 rounded-xl px-4 py-1 hover:text-[#1B6D24] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Cart</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1 hover:text-[#1B6D24] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1 hover:text-[#1B6D24] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Profile</span>
        </a>
      </nav>
    </>
  );
}
