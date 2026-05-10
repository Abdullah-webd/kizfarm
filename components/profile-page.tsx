"use client"

import React from 'react';

export default function ProfilePage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 shadow-none flex justify-between items-center w-full px-6 py-3 h-16 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img alt="KIZ FARM Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 dark:text-zinc-400 hover:opacity-80 transition-opacity active:scale-95 duration-150">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
            <img className="w-full h-full object-cover" data-alt="professional headshot of a smiling farm manager in natural outdoor lighting with soft green background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2JT5EBI9r488gdA45KluUg1RAiDim0rPPR6OJn8mb3ruL6ydhuJmYY817nGysp9H8P4PKE5oSD4y91ycmMWj3u-whGorBw6WejBIplzSr7C5-tx7TZ-ULcMe6l0aBoEIhsx_KCjcf1CGCuLs6quLkeACMFDkaIsmFWtl2hYsfrNE2gqlimtN4aoeEDquQ4h2YYuwcXVQHzmV0DtrFH4hbTyNJzI2VUO7mab3yrtLGSPAYc-OWRbIOVtqJiz8uXX1Lyz5Bdyu48nE" />
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-margin py-xl md:py-xl">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="mb-lg border-b border-gray-100 pb-md">
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Edit Profile</h1>
            <p className="font-body-md text-body-md text-secondary">Manage your personal information and farm identity.</p>
          </div>

          {/* Profile Form Content */}
          <form className="space-y-xl">
            {/* Profile Image Upload */}
            <section className="flex flex-col md:flex-row items-center gap-md p-md bg-surface-container-low rounded-xl border border-gray-100">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm">
                  <img className="w-full h-full object-cover" data-alt="Close up of a person smiling, farm setting, natural warm lighting, high quality portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtfslUBiRZGg66PfwLA8EaerHamr7hfVETKkUrBUCOoLo0T6-9F3RF8rJHo_afDxgmIdAnnVSsDIlirlfGqevO8NA9wjqRZrXYH7tgvOq4X0uCaD02CeIRLWxEQnhFzFiOHpAZXG8MJMuYYLQ0uu44jHzhX66hn8drZDNr_7VKaX2CPLR-wf78RPgfjJaYE_hnimDWtYEq6UrWGU1Zb-_LsnqDbLVqJhF6YpaBxPHa6QOPj_glFBIQLKBPAwOHu6LO6hbZ99_W7nE" />
                </div>
                <label className="absolute inset-0 flex items-center justify-center bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" htmlFor="avatar-upload">
                  <span className="material-symbols-outlined" data-icon="photo_camera">photo_camera</span>
                </label>
                <input accept="image/*" className="hidden" id="avatar-upload" type="file" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-label-sm text-label-sm text-on-surface mb-xs">Profile Picture</h3>
                <p className="font-body-md text-label-xs text-secondary mb-md">JPG, GIF or PNG. Max size of 2MB.</p>
                <div className="flex gap-sm justify-center md:justify-start">
                  <button className="px-md py-2 border border-primary text-primary rounded-lg font-label-sm hover:bg-primary/5 transition-colors" type="button">Upload New</button>
                  <button className="px-md py-2 text-error font-label-sm hover:underline" type="button">Remove</button>
                </div>
              </div>
            </section>

            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              {/* Full Name */}
              <div className="flex flex-col gap-xs md:col-span-2">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="full-name">Full Name</label>
                <div className="relative">
                  <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none" id="full-name" type="text" defaultValue="Marcus Chen" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant material-symbols-outlined" data-icon="person">person</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="email">Email Address</label>
                <div className="relative">
                  <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none" id="email" type="email" defaultValue="m.chen@kizfarm.ag" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant material-symbols-outlined" data-icon="mail">mail</span>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="phone">Phone Number</label>
                <div className="relative">
                  <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none" id="phone" type="tel" defaultValue="+1 (555) 012-3456" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant material-symbols-outlined" data-icon="call">call</span>
                </div>
              </div>

              {/* Farm Role */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="role">Farm Role</label>
                <select className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none appearance-none" id="role">
                  <option>Farm Owner</option>
                  <option>Operations Manager</option>
                  <option>Agronomist</option>
                  <option>Technician</option>
                </select>
              </div>

              {/* Region */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="region">Primary Region</label>
                <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none" id="region" type="text" defaultValue="Central Valley, CA" />
              </div>
            </div>

            {/* Bio / Notes */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-sm text-label-sm text-on-surface" htmlFor="bio">Professional Bio</label>
              <textarea className="w-full p-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none resize-none" id="bio" rows={4} defaultValue="Managing sustainable almond cultivation and soil health optimization for over 15 years."></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row items-center gap-md pt-lg border-t border-gray-100">
              <button className="w-full md:w-auto h-12 px-xl bg-[#1B6D24] text-white rounded-lg font-label-sm hover:opacity-90 active:scale-95 transition-all shadow-sm" type="submit">
                Save Changes
              </button>
              <button className="w-full md:w-auto h-12 px-xl border border-outline text-secondary rounded-lg font-label-sm hover:bg-surface-container transition-all" type="button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-white dark:bg-zinc-950 h-20 pb-safe border-t border-gray-100 dark:border-zinc-800 shadow-[0_-10px_30px_rgba(27,109,36,0.05)]">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] dark:text-green-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="person" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Profile</span>
        </a>
      </nav>
    </>
  );
}
