"use client"

import React from 'react';

export default function AddProductPage() {
  return (
    <div className="bg-background text-on-surface">
      {/* TopAppBar Shell */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-16 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-none">
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-zinc-600 dark:text-zinc-400 p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors active:scale-95 duration-150">menu</button>
          <div className="flex items-center gap-2">
            <img alt="KIZ FARM logo" className="h-10 w-auto object-contain" data-alt="KIZ FARM corporate logo featuring a large green 'K' with 'KIZ FARM' text in black and a red/green swoosh element" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
            <span className="text-lg font-black tracking-tighter text-[#1B6D24] uppercase">KIZ FARM</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="material-symbols-outlined text-zinc-600 dark:text-zinc-400 p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors active:scale-95 duration-150">notifications</button>
          <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center overflow-hidden border border-zinc-200">
            <img alt="KIZ FARM logo" className="h-10 w-auto object-contain" data-alt="KIZ FARM corporate logo featuring a large green 'K' with 'KIZ FARM' text in black and a red/green swoosh element" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* NavigationDrawer Shell */}
        <aside className="hidden md:flex fixed inset-y-0 left-0 w-64 z-[60] flex-col bg-white dark:bg-zinc-950 rounded-r-lg h-full border-r divide-y divide-zinc-100 dark:divide-zinc-900 shadow-2xl dark:shadow-none mt-16">
          <div className="p-6">
            <h2 className="text-xl font-bold text-[#1B6D24]">Seller Portal</h2>
          </div>
          <nav className="flex-1 py-4">
            <a className="flex items-center gap-4 px-6 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </a>
            <a className="flex items-center gap-4 px-6 py-3 bg-green-50 dark:bg-green-950/30 text-[#1B6D24] font-semibold border-r-4 border-[#1B6D24] transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">inventory_2</span>
              Products
            </a>
            <a className="flex items-center gap-4 px-6 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">shopping_cart</span>
              Orders
            </a>
            <a className="flex items-center gap-4 px-6 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">payments</span>
              Earnings
            </a>
            <a className="flex items-center gap-4 px-6 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">chat</span>
              Chat
            </a>
          </nav>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 md:ml-64 p-6 md:p-12 max-w-[1440px] mx-auto w-full">
          <header className="mb-lg">
            <nav className="flex items-center gap-2 text-zinc-500 mb-4 font-label-sm text-label-sm">
              <span>Inventory</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-[#1B6D24]">Add New Product</span>
            </nav>
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Add New Farm Product</h1>
            <p className="font-body-md text-body-md text-zinc-500 mt-2">List your fresh harvest or agricultural supplies for buyers across the region.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left: Form Fields */}
            <section className="lg:col-span-7 bg-white p-8 rounded-xl border border-zinc-200 shadow-[0px_10px_30px_rgba(27,109,36,0.03)]">
              <form className="space-y-md">
                <div>
                  <label className="block font-label-sm text-label-sm text-zinc-700 mb-2">Product name</label>
                  <input className="w-full h-12 px-4 bg-white border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#1B6D24]/20 focus:border-[#1B6D24] outline-none transition-all placeholder:text-zinc-400 font-body-md text-body-md" placeholder="e.g. Organic Roma Tomatoes" type="text" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div>
                    <label className="block font-label-sm text-label-sm text-zinc-700 mb-2">Price ($)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">$</span>
                      <input className="w-full h-12 pl-8 pr-4 bg-white border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#1B6D24]/20 focus:border-[#1B6D24] outline-none transition-all font-body-md text-body-md" placeholder="0.00" type="number" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-zinc-700 mb-2">Quantity</label>
                    <input className="w-full h-12 px-4 bg-white border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#1B6D24]/20 focus:border-[#1B6D24] outline-none transition-all font-body-md text-body-md" placeholder="e.g. 50 kg" type="text" />
                  </div>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-zinc-700 mb-2">Category</label>
                  <select className="w-full h-12 px-4 bg-white border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#1B6D24]/20 focus:border-[#1B6D24] outline-none transition-all font-body-md text-body-md appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23707a6c%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[right_1rem_center] bg-no-repeat">
                    <option>Vegetables</option>
                    <option>Fruits</option>
                    <option>Grains</option>
                    <option>Dairy &amp; Eggs</option>
                    <option>Livestock</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-zinc-700 mb-2">Description</label>
                  <textarea className="w-full p-4 bg-white border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#1B6D24]/20 focus:border-[#1B6D24] outline-none transition-all font-body-md text-body-md resize-none" placeholder="Describe your product's origin, freshness, and quality..." rows={5}></textarea>
                </div>
                <div className="pt-4">
                  <button className="w-full md:w-auto px-12 h-12 bg-[#1B6D24] hover:bg-[#15531b] text-white font-semibold rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2" type="submit">
                    <span className="material-symbols-outlined">check_circle</span>
                    Submit Product
                  </button>
                </div>
              </form>
            </section>

            {/* Right: Image Upload & Preview */}
            <section className="lg:col-span-5 space-y-gutter">
              <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-[0px_10px_30px_rgba(27,109,36,0.03)]">
                <label className="block font-label-sm text-label-sm text-zinc-700 mb-4">Product Showcase</label>
                <div className="border-2 border-dashed border-zinc-200 rounded-xl p-8 text-center hover:border-[#1B6D24] transition-colors cursor-pointer group">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-4xl text-zinc-400 group-hover:text-[#1B6D24] transition-colors">cloud_upload</span>
                  </div>
                  <p className="font-body-md text-body-md text-zinc-600 mb-2">Drag and drop your farm photos here</p>
                  <p className="font-label-xs text-label-xs text-zinc-400">Supported: JPG, PNG, WEBP (Max 5MB)</p>
                  <button className="mt-6 px-6 h-10 border border-[#1B6D24] text-[#1B6D24] hover:bg-green-50 font-semibold rounded-lg transition-all text-label-sm">Browse Files</button>
                </div>
                {/* Image Preview Grid */}
                <div className="grid grid-cols-2 gap-4 mt-gutter">
                  <div className="aspect-square rounded-lg overflow-hidden border border-zinc-100 group relative">
                    <img alt="Tomato Field" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="vibrant close-up of organic red tomatoes hanging on green vines in a sun-drenched greenhouse with soft bokeh background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSsJkCc4ACELqi-8O_uRc_sih4P1Cp-nZRieBtM80JqxIE5x2shYqgibOoqEHGH-DC9jA37wUk-2MA13-BT1sOr2kY5rxAUfkBuo54TtVWkI90B6e45_mhnJEelnuLPOHbmjErSy9rYGM07TA6nrc5kLOYS1Sc042U17OkkV1v6P3u7q5RL5logYv6Izp96UglUQFxgnwHWH9X6jr9q-suMVZ0FfCbBKFrjbQCsOJUDZztK6lWty6BQyw01ZIqW0Rhvaai-FxM0f0" />
                    <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-error hover:bg-error hover:text-white transition-all shadow-sm">
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  </div>
                  <div className="aspect-square rounded-lg border-2 border-dashed border-zinc-100 flex items-center justify-center text-zinc-300">
                    <span className="material-symbols-outlined">add_a_photo</span>
                  </div>
                </div>
              </div>

              {/* Market Insights Tip */}
              <div className="bg-primary-fixed/30 p-6 rounded-xl border border-primary-fixed-dim/20">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#1B6D24]">lightbulb</span>
                  <div>
                    <h4 className="font-label-sm text-label-sm text-[#1B6D24] mb-1 uppercase tracking-wider">Farmer Tip</h4>
                    <p className="font-body-md text-body-md text-on-primary-fixed-variant leading-relaxed">Products with high-resolution photos of the actual harvest sell 40% faster. Ensure natural lighting and clean surfaces for the best results.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* BottomNavBar Shell (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 z-50 flex justify-around items-center px-4 pb-safe bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
        <a className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#1B6D24] active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] scale-110 active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined">potted_plant</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Products</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#1B6D24] active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#1B6D24] active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined">account_balance_wallet</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Earnings</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#1B6D24] active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined">forum</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Chat</span>
        </a>
      </nav>
    </div>
  );
}
