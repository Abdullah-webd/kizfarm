"use client"

import React from 'react';

export default function AddNewTutorPage() {
  return (
    <div className="bg-background text-on-surface" style={{fontFamily: "'Inter', sans-serif", minHeight: 'max(884px, 100dvh)'}}>
      {/* TopNavBar */}
      <nav className="flex justify-between items-center w-full px-4 md:px-8 h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 text-slate-600">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <img alt="KizFarm logo" className="h-8 w-auto" data-alt="A clean and professional corporate logo for an agricultural brand called KIZ FARM. The logo features minimalist organic leaf motifs integrated with modern sans-serif typography in a deep forest green color palette. The aesthetic is grounded and trustworthy, symbolizing sustainable farming practices and technological innovation in the agricultural sector, set against a transparent background." src="https://lh3.googleusercontent.com/aida/ADBb0ugzYC4-jqxSvxpO-z71bb0GLSnz_-daStJIDb_rNawDmL25axyIiZy8Cqf1UcXvoLZLDeXjPhmjvdKjTxAlrjvjl3HXCUWXUj5nkd-CNJRdE5q0cUnyPeJSBDqfwKp2LBqoAXSOr9rxTHYeYdNtnu7qp_P10cfeet2EPbyN482EHqLb_yukw7jI8RArrUC1lZTB-VHlTnuP22hg4JuRelxxtVa1Qgw4ltrQRNHgV0L1G3laFJ7TF4ZomEhxJ1EQNPEyGr6vd4TvKw" />
          <span className="hidden md:block font-h2 text-primary">AgriMarket Admin</span>
        </div>
        <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined p-2 text-slate-500 hover:text-green-800 cursor-pointer">notifications</span>
          <span className="material-symbols-outlined p-2 text-slate-500 hover:text-green-800 cursor-pointer">help</span>
          <div className="h-8 w-8 rounded-full bg-secondary-container overflow-hidden border border-outline-variant">
            <img alt="Admin User Profile" data-alt="A professional headshot of a middle-aged male administrator with a friendly and competent expression. He is wearing a clean, crisp business casual attire in a professional office environment with soft, natural morning light. The image style is polished and high-end, maintaining a cohesive corporate look with subtle green accents in the background to match the AgriMarket brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9vlmOBo8C5n5AUXObeznNV1giaGdYiFd-kEaf4KJtgKDCnsmHsH1X9w0OSn7WoI2a6q-OGTMHCXEiR4VySZX3Y7gCpur065Vr6qoMij-OvNio2D3gz0XrPFVAJAPM7dDh91o54d686JELQOg8Klf4D7aDhkcwHF6cCFzjHlSnLe_fYx-y-OLqPkjb9d8aj5fERMJvY8MqfV6NGE-SlIRKaU8gHL2v8e8AeN4WzMrpD8q6wBJQSpZz6ui0Q7JuOGofmYZFYnUQWZs" />
          </div>
        </div>
      </nav>

      <main className="max-w-container-max mx-auto p-4 md:p-margin flex flex-col md:flex-row gap-gutter">
        {/* Sidebar Navigation (Desktop) */}
        <aside className="hidden md:flex flex-col w-[280px] space-y-2">
          <div className="p-4 mb-4">
            <h2 className="font-h3 text-primary">AgriMarket</h2>
            <p className="font-label-sm text-slate-500">Admin Management</p>
          </div>
          <a className="flex items-center gap-md p-md rounded-lg text-slate-600 hover:bg-slate-50 transition-all" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-md p-md rounded-lg text-green-800 bg-green-50 border-r-4 border-green-800 font-semibold" href="#">
            <span className="material-symbols-outlined">school</span>
            <span className="font-label-md">Tutors</span>
          </a>
          <a className="flex items-center gap-md p-md rounded-lg text-slate-600 hover:bg-slate-50 transition-all" href="#">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="font-label-md">Orders</span>
          </a>
          <a className="flex items-center gap-md p-md rounded-lg text-slate-600 hover:bg-slate-50 transition-all" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-label-md">Inventory</span>
          </a>
          <a className="flex items-center gap-md p-md rounded-lg text-slate-600 hover:bg-slate-50 transition-all" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md">Settings</span>
          </a>
        </aside>

        {/* Content Area */}
        <section className="flex-1">
          {/* Breadcrumbs */}
          <nav className="mb-lg flex items-center gap-xs font-label-sm text-slate-500">
            <span>Admin</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span>Tutors</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-primary font-bold">Add New Tutor</span>
          </nav>

          <div className="mb-lg">
            <h1 className="font-h1 text-on-surface">Add New Tutor</h1>
            <p className="font-body-sm text-slate-500">Create a new professional profile for the agricultural training program.</p>
          </div>

          {/* Bento Grid Layout for Form */}
          <form className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left Column: Profile & Contact */}
            <div className="lg:col-span-4 space-y-gutter">
              {/* Profile Photo Card */}
              <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col items-center text-center">
                <div className="relative group cursor-pointer">
                  <div className="h-32 w-32 rounded-full bg-slate-100 flex items-center justify-center border-2 border-dashed border-outline overflow-hidden">
                    <span className="material-symbols-outlined text-slate-400 text-4xl">add_a_photo</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100">edit</span>
                  </div>
                </div>
                <h3 className="mt-md font-label-md text-on-surface">Profile Photo</h3>
                <p className="text-xs text-slate-400 mt-xs">Upload a high-resolution JPG or PNG. Max 5MB.</p>
                <button className="mt-md text-primary font-label-sm border border-primary px-4 py-2 rounded-lg hover:bg-green-50 transition-all" type="button">Select Image</button>
              </div>

              {/* Contact Info Card */}
              <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm space-y-md">
                <h3 className="font-label-md text-on-surface border-b border-slate-100 pb-sm">Contact Information</h3>
                <div className="space-y-base">
                  <label className="font-label-sm text-slate-600">WhatsApp Number</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">chat</span>
                    <input className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="+234 ..." type="text" />
                  </div>
                </div>
                <div className="space-y-base">
                  <label className="font-label-sm text-slate-600">Email Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">mail</span>
                    <input className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="tutor@agrimarket.com" type="email" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Personal Details */}
            <div className="lg:col-span-8 space-y-gutter">
              <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                  {/* Full Name */}
                  <div className="md:col-span-2 space-y-base">
                    <label className="font-label-sm text-slate-600">Full Name</label>
                    <input className="w-full px-4 py-2 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="e.g. Dr. Samuel Okafor" type="text" />
                  </div>
                  {/* Specialization */}
                  <div className="space-y-base">
                    <label className="font-label-sm text-slate-600">Specialization</label>
                    <select className="w-full px-4 py-2 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none bg-white">
                      <option value="">Select Field</option>
                      <option value="crop">Crop Science</option>
                      <option value="soil">Soil Management</option>
                      <option value="pest">Pest Control</option>
                      <option value="irrigation">Irrigation Technology</option>
                      <option value="finance">Agro-Finance</option>
                    </select>
                  </div>
                  {/* Experience */}
                  <div className="space-y-base">
                    <label className="font-label-sm text-slate-600">Years of Experience</label>
                    <input className="w-full px-4 py-2 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" min="0" placeholder="5" type="number" />
                  </div>
                  {/* Bio */}
                  <div className="md:col-span-2 space-y-base">
                    <label className="font-label-sm text-slate-600">Biography</label>
                    <textarea className="w-full px-4 py-2 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Describe the tutor's background, education, and notable achievements in the agricultural sector..." rows={6}></textarea>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-md pt-md">
                <button className="px-xl py-md font-label-md text-slate-600 hover:text-slate-900 bg-white border border-outline-variant rounded-lg shadow-sm transition-all hover:bg-slate-50 active:scale-95" type="button">Cancel</button>
                <button className="px-xl py-md font-label-md text-white bg-primary-container hover:bg-primary rounded-lg shadow-md transition-all active:scale-95 flex items-center gap-sm" type="submit">
                  <span className="material-symbols-outlined">save</span>
                  Save Tutor Profile
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 flex items-center justify-around z-40 px-4">
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-green-800">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>school</span>
          <span className="text-[10px] font-bold">Tutors</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="text-[10px] font-medium">Orders</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </button>
      </nav>

      {/* Floating Action Button for Mobile */}
      <button className="md:hidden fixed bottom-20 right-6 h-14 w-14 bg-primary-container text-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform z-50">
        <span className="material-symbols-outlined text-3xl">check</span>
      </button>

      <div className="h-20 md:hidden"></div>
    </div>
  );
}
