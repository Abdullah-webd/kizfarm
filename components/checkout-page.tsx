"use client"

import React from 'react';

export default function CheckoutPage() {
  return (
    <>
      {/* Header / TopAppBar */}
      <header className="bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center px-6 h-16 w-full max-w-[1440px] mx-auto sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img alt="KIZ FARM Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-gray-500">lock</span>
          <span className="font-label-sm text-label-sm text-gray-500 uppercase tracking-widest">Secure Checkout</span>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-margin mt-lg">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-gutter">
          {/* Left Column: Checkout Flow */}
          <div className="lg:col-span-8 space-y-lg">
            {/* Steps Indicator */}
            <nav className="flex items-center justify-between w-full max-w-2xl mx-auto mb-lg">
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center font-bold">1</div>
                <span className="font-label-sm text-label-sm text-primary">Address</span>
              </div>
              <div className="h-[2px] flex-1 bg-primary-container/20 mx-4">
                <div className="h-full bg-primary-container w-1/2"></div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-primary-container text-primary-container flex items-center justify-center font-bold">2</div>
                <span className="font-label-sm text-label-sm text-primary-container font-semibold">Payment</span>
              </div>
              <div className="h-[2px] flex-1 bg-gray-200 mx-4"></div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center font-bold">3</div>
                <span className="font-label-sm text-label-sm text-gray-400">Review</span>
              </div>
            </nav>

            {/* Section: Address Selection */}
            <section className="bg-white rounded-xl border border-[#E5E7EB] p-md">
              <div className="flex justify-between items-center mb-md">
                <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                  Shipping Address
                </h2>
                <button className="text-primary font-label-sm text-label-sm hover:underline">+ Add New</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
                {/* Address Card 1 */}
                <label className="relative flex p-md border-2 border-primary-container bg-primary/5 rounded-xl cursor-pointer">
                  <input defaultChecked className="absolute top-4 right-4 text-primary focus:ring-primary h-4 w-4" name="address" type="radio" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                      <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Home Address</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">42 Agronomy Lane, Greenfield Estates</p>
                    <p className="font-body-md text-body-md text-on-surface-variant">Nairobi, Kenya 00100</p>
                    <p className="mt-2 font-label-xs text-label-xs text-gray-500">+254 712 345 678</p>
                  </div>
                </label>
                {/* Address Card 2 */}
                <label className="relative flex p-md border border-[#E5E7EB] hover:border-primary/30 rounded-xl cursor-pointer transition-all">
                  <input className="absolute top-4 right-4 text-primary focus:ring-primary h-4 w-4" name="address" type="radio" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-secondary">business</span>
                      <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Office Address</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">Tech Hub Plaza, 4th Floor, Kilimani</p>
                    <p className="font-body-md text-body-md text-on-surface-variant">Nairobi, Kenya 00200</p>
                    <p className="mt-2 font-label-xs text-label-xs text-gray-500">+254 798 765 432</p>
                  </div>
                </label>
              </div>
            </section>

            {/* Section: Payment Method */}
            <section className="bg-white rounded-xl border border-[#E5E7EB] p-md">
              <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 mb-md">
                <span className="material-symbols-outlined text-primary">payments</span>
                Payment Method
              </h2>
              <div className="space-y-base">
                {/* Option: Card */}
                <div className="border border-[#E5E7EB] rounded-xl p-md">
                  <div className="flex items-center justify-between mb-md">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary">credit_card</span>
                      <span className="font-body-md text-body-md font-semibold">Credit / Debit Card</span>
                    </div>
                    <div className="flex gap-2">
                      <img alt="Visa" className="h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-RsglwsNPJXX73IDwIdQ3HHRuxBh_1XbfDe37VlY-hYlEIQ-bqUL3dPkwdRKIljsqZm9DRrSfojmLcoHNeMj-QCiPeagPjjVewcLjw0X0xsoPzIycqSJp3awK3PohQeShlQSa7KydGKlnsLoDsDiB6U3LLo5e0RzeIZ2UXJLZ2yPKLu-J1ZrI0CsViyXLZcd52FqFAiBhY_wy9VjGt_apM-1wgbIS67XOUw9mfDF5w_NSEifFkvRswqOHHVa1AcaPHF-BJs8K5H4" />
                      <img alt="Mastercard" className="h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkuSVgKnfSjdSUQhzCb_xOF05-EKPt81CZU4qgCxV845GnamHkdNdRtu78LF9bOBto2glzTPFzCD4zFGr8QbAJw90ZkoNbC3RvUx8O2oZYMMqc4bb_eiQ5C5J5mNBIoOAiQYbmm58z1LUOcYWJN5kWkAa7Z6B02TxxPSgLSOrLC3efCgfhfIsXOaA6mRl0CejF9c4fLOtz8Pt1u0-xoU26cLq3R8b63-GGozQ6uIquPzzUPa5BnpPwktl_9RIixJnikNIBHqcCVro" />
                    </div>
                  </div>
                  <div className="space-y-md">
                    <div className="grid grid-cols-1 gap-base">
                      <label className="block font-label-xs text-label-xs text-gray-500 uppercase">Card Number</label>
                      <div className="relative">
                        <input className="w-full h-12 border-[#D1D5DB] border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-md font-body-md" placeholder="xxxx xxxx xxxx xxxx" type="text" />
                        <span className="absolute right-4 top-3 material-symbols-outlined text-gray-400">lock</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-md">
                      <div className="space-y-base">
                        <label className="block font-label-xs text-label-xs text-gray-500 uppercase">Expiry Date</label>
                        <input className="w-full h-12 border-[#D1D5DB] border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-md font-body-md" placeholder="MM/YY" type="text" />
                      </div>
                      <div className="space-y-base">
                        <label className="block font-label-xs text-label-xs text-gray-500 uppercase">CVV</label>
                        <input className="w-full h-12 border-[#D1D5DB] border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-md font-body-md" placeholder="***" type="password" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Option: Bank Transfer */}
                <div className="border border-[#E5E7EB] rounded-xl p-md flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-gray-500">account_balance</span>
                    <span className="font-body-md text-body-md font-semibold text-gray-500">Direct Bank Transfer</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-300">radio_button_unchecked</span>
                </div>
                {/* Option: M-Pesa */}
                <div className="border border-[#E5E7EB] rounded-xl p-md flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-gray-500">smartphone</span>
                    <span className="font-body-md text-body-md font-semibold text-gray-500">M-Pesa Mobile Money</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-300">radio_button_unchecked</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4">
            <aside className="sticky top-24 space-y-md">
              <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
                <div className="p-md border-b border-[#E5E7EB] bg-gray-50">
                  <h3 className="font-headline-md text-headline-md text-on-surface">Order Summary</h3>
                </div>
                {/* Mini Product List */}
                <div className="p-md space-y-md">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                      <img className="w-full h-full object-cover" data-alt="Close up of fresh organic bright green kale leaves with water droplets and vibrant texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMdG6CQYMJuGcGM8xjuBUZYI39hwXD1-SWLMCeKI4TBmmEUkPaSphhNZQDBLQRPjVTB0zOW9KkknyKsw7_IlVMfYS1AAsrJ7wQRJGI0RVTMUoqQ6r3ESFV5S1gZfMXIGGxilT1JR8C9ZF12etkBlwIudo6cQAIbj6r4fADivJlBt5jQNbrYQ08UDAw4tDXqi4iZkZzEPRahpIQpLeFjdS3ylQU8p_aotpWr_iRWij5zEyQQOdjnw93QrZurpx9K6coEWkFyW_Ar4g" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-label-sm text-label-sm font-bold text-on-surface">Organic Lacinato Kale</h4>
                      <p className="font-label-xs text-label-xs text-gray-500">Qty: 2 Bunches</p>
                      <p className="font-body-md text-body-md font-semibold text-primary mt-1">$12.50</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                      <img className="w-full h-full object-cover" data-alt="Artisanal glass jar of pure golden honey sitting on a rustic wooden table with honeycomb" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwRI4p1ysyO4zoWAfRw-Ft8xN3lfslGZQk3hVRVjNmlNm5X3HXaacbTfZ1BAoTMCNGw6CDXuPHBbd19PXt0gL3L8S1GpzVEQyx6B1A3NrEXf4FPxQhTtCL51D_B5h18ez6uIcV48wRjIcMAzTqYu5q97dHXzRMo79Hw870lupSSMf3FRThzUQTs61ILxHdvz1GngyHFRX6uaEua1sG6of8S6G9AlHHs57XN79rD1oPeNZz8B21UDntOjqH09--ntCnaC6UGMVFuoI" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-label-sm text-label-sm font-bold text-on-surface">Wildflower Raw Honey</h4>
                      <p className="font-label-xs text-label-xs text-gray-500">Qty: 1 Jar (500g)</p>
                      <p className="font-body-md text-body-md font-semibold text-primary mt-1">$18.00</p>
                    </div>
                  </div>
                </div>
                {/* Price Calculations */}
                <div className="p-md space-y-base border-t border-[#E5E7EB]">
                  <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>$30.50</span>
                  </div>
                  <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                    <span>Shipping (Express)</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                    <span>Est. Taxes</span>
                    <span>$2.45</span>
                  </div>
                  <div className="flex justify-between font-headline-md text-headline-md text-on-surface pt-md border-t border-[#E5E7EB]">
                    <span>Total</span>
                    <span>$37.95</span>
                  </div>
                </div>
                <div className="p-md">
                  <button className="w-full h-12 bg-primary text-white font-label-sm text-label-sm font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 active:scale-95 duration-150 shadow-lg shadow-primary/20 hover:bg-primary-container">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    Place Order Securely
                  </button>
                  <p className="text-center font-label-xs text-label-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-xs">shield</span>
                    AES-256 Encrypted Connection
                  </p>
                </div>
              </div>
              {/* Map/Delivery Status Card */}
              <div className="bg-primary/5 rounded-xl border border-primary/10 p-md flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">bolt</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm font-bold text-primary">Farm-to-Door Delivery</p>
                  <p className="font-label-xs text-label-xs text-primary/70">Estimated: Tomorrow by 10:00 AM</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Bottom Navigation (Mobile Only Shell) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-2 bg-white/80 backdrop-blur-md border-t border-gray-200">
        <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-xs text-label-xs">Home</span>
        </div>
        <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1">
          <span className="material-symbols-outlined">storefront</span>
          <span className="font-label-xs text-label-xs">Market</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#1B6D24] bg-green-50 dark:bg-green-900/20 rounded-xl px-4 py-1">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
          <span className="font-label-xs text-label-xs">Orders</span>
        </div>
        <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-xs text-label-xs">Profile</span>
        </div>
      </nav>

      {/* Separation Padding for Bottom Nav */}
      <div className="h-24 md:hidden"></div>
    </>
  );
}
