"use client"

import React from 'react';

export default function AddressesPage() {
  return (
    <>
      {/* TopAppBar Shell */}
      <header className="bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-6 py-3 h-16">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#1B6D24]" data-icon="agriculture">agriculture</span>
            <img alt="KIZ FARM" className="h-8 w-auto" data-alt="minimalist professional logo for a modern agriculture technology brand featuring clean lines and organic shapes" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 dark:text-zinc-400 hover:opacity-80 transition-opacity active:scale-95 duration-150">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-lg">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col gap-2 mb-xl">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Saved Addresses</h1>
            <p className="font-body-md text-body-md text-secondary">Manage your delivery locations for fresh farm produce deliveries.</p>
          </div>

          {/* Address Grid/List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-xl">
            {/* Primary Address Card */}
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 relative group transition-all duration-200 hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)]">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1B6D24]" data-icon="home" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                  <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-full">Home</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-outline hover:text-primary transition-colors active:scale-95 duration-150">
                    <span className="material-symbols-outlined" data-icon="edit">edit</span>
                  </button>
                  <button className="p-2 text-outline hover:text-error transition-colors active:scale-95 duration-150">
                    <span className="material-symbols-outlined" data-icon="delete">delete</span>
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-md text-headline-md text-[#1B6D24]">Jonathan Aris</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  452 Organic Meadows, Greenhouse District<br />
                  Nairobi, 00100, Kenya
                </p>
                <p className="font-label-sm text-label-sm text-secondary mt-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]" data-icon="call">call</span>
                  +254 701 234 567
                </p>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 relative group transition-all duration-200 hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)]">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-outline" data-icon="business">business</span>
                  <span className="font-label-sm text-label-sm text-outline px-2 py-0.5 border border-outline-variant rounded-full">Work</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-outline hover:text-primary transition-colors active:scale-95 duration-150">
                    <span className="material-symbols-outlined" data-icon="edit">edit</span>
                  </button>
                  <button className="p-2 text-outline hover:text-error transition-colors active:scale-95 duration-150">
                    <span className="material-symbols-outlined" data-icon="delete">delete</span>
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-md text-headline-md text-on-surface">Jonathan Aris</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  AgriTech Hub, 3rd Floor, Silicon Savannah<br />
                  Westlands, Nairobi, Kenya
                </p>
                <p className="font-label-sm text-label-sm text-secondary mt-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]" data-icon="call">call</span>
                  +254 788 990 011
                </p>
              </div>
            </div>

            {/* Farm Address Card (Asymmetric detail) */}
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 relative group transition-all duration-200 hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] md:col-span-2">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-32 rounded-lg bg-surface-container-low overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover bg-center" data-alt="minimalist topographical map showing green vegetation zones and rural roads with soft green and grey tones" data-location="Nairobi" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAU60kn3aHJ_r57rhaEToAekX44tlCUyaXWIwuPrehdKhG0dzyOj_1IgKKrZX-bk7XypgGVt7Fg7mOjj0PDCSBVxduZyBWLdd1WvRgtQlQFjq1nSW_cIJZDm9-fEQ04oiqdWanpefN95B3pZo1Xp_IQ9e8lxu_J7mz4XG-hbncY0UNKwf4q1oFZIWHVg5UfpYlUVpt2rBM3O6Tnh0kWdb4vuq4Css60PyDzdUoWyx1qYvXxzwEb-Wn4cVTOybHiABkIr_MNKCzrp9M')" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1B6D24] text-4xl" data-icon="location_on" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-outline" data-icon="agriculture">agriculture</span>
                      <span className="font-label-sm text-label-sm text-outline px-2 py-0.5 border border-outline-variant rounded-full">Farm Site</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-outline hover:text-primary transition-colors active:scale-95 duration-150">
                        <span className="material-symbols-outlined" data-icon="edit">edit</span>
                      </button>
                      <button className="p-2 text-outline hover:text-error transition-colors active:scale-95 duration-150">
                        <span className="material-symbols-outlined" data-icon="delete">delete</span>
                      </button>
                    </div>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">KIZ Main Field A</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Gate 4, Kiambu Rural Road 12, Highlands Region</p>
                  <p className="font-label-sm text-label-sm text-secondary mt-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]" data-icon="call">call</span>
                    +254 722 000 111
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-col items-center gap-4">
            <button className="w-full md:w-auto min-w-[320px] h-12 px-8 bg-[#1B6D24] text-white rounded-lg font-label-sm text-label-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-transform active:scale-95 hover:bg-primary duration-200 shadow-md">
              <span className="material-symbols-outlined" data-icon="add_location">add_location</span>
              Add New Address
            </button>
            <p className="font-label-xs text-label-xs text-outline italic">Maximum 5 addresses per account</p>
          </div>
        </div>
      </main>

      {/* BottomNavBar Shell */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-white dark:bg-zinc-950 h-20 pb-safe border-t border-gray-100 dark:border-zinc-800 shadow-[0_-10px_30px_rgba(27,109,36,0.05)] md:hidden">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] dark:text-green-500 p-2 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="person" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Profile</span>
        </a>
      </nav>

      {/* FAB for quick addition (Responsive variant) */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-[#1B6D24] text-white rounded-full flex items-center justify-center shadow-lg md:hidden active:scale-90 transition-transform">
        <span className="material-symbols-outlined" data-icon="add">add</span>
      </button>
    </>
  );
}
