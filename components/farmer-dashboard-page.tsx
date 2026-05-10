"use client"

import React from 'react';

export default function FarmerDashboardPage() {
  return (
    <div className="bg-background text-on-background font-body-md">
      {/* TopAppBar Shell */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-16 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors active:scale-95 duration-150">
            <span className="material-symbols-outlined text-[#1B6D24]">menu</span>
          </button>
          <div className="flex items-center gap-2">
            <img alt="KIZ FARM logo" className="w-8 h-8 rounded-lg" data-alt="Kiz Farm official logo featuring a green letter K with a red swoosh and text 'KIZ FARM' in grey and green" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
            <span className="text-lg font-black tracking-tighter text-[#1B6D24] uppercase">KIZ FARM</span>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex gap-6 mr-6">
            <a className="text-[#1B6D24] font-bold font-sans text-sm tracking-wide" href="#">Dashboard</a>
            <a className="text-zinc-600 dark:text-zinc-400 font-sans text-sm font-medium tracking-wide hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors" href="#">Products</a>
            <a className="text-zinc-600 dark:text-zinc-400 font-sans text-sm font-medium tracking-wide hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors" href="#">Orders</a>
          </div>
          <button className="p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors active:scale-95 duration-150">
            <span className="material-symbols-outlined text-[#1B6D24]">notifications</span>
          </button>
          <div className="h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center overflow-hidden">
            <img alt="Profile" className="w-full h-full object-cover" data-alt="professional portrait of a modern agricultural manager in a sunlit office environment, soft focused background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT2HclsEB9Yb66Q53Me0MHLaAf-GAgts5hWC2uXyOU1aFF_AjchObMx8_CtA_JgfKjjNqXSlOz3TTmVjAf_H2ruKu-rpCfLtb0-OfzixXg685X_5wB3lLKP9WBzOAMB7_mGbovKKd05gVSTXfj9HFkl_2-4ZiizOmfCD4fz9_0hpirG_hAQzaULEG0BfXDieQUPbuDDff_aWBMYnY0G5AcvBcqbWUK0wuIxpCKGSSg-_h189frunVi70sHx14WxKnaM4HGFNsC1uQ" />
          </div>
        </div>
      </header>

      <div className="flex min-h-screen">
        {/* NavigationDrawer (Sidebar) */}
        <aside className="hidden md:flex fixed inset-y-0 left-0 w-64 z-[60] flex-col bg-white dark:bg-zinc-950 border-r border-zinc-100 dark:divide-zinc-900 mt-16 shadow-2xl dark:shadow-none">
          <div className="px-6 py-4">
            <span className="text-xl font-bold text-[#1B6D24]">Seller Portal</span>
          </div>
          <nav className="flex-1 space-y-1 px-3">
            <a className="flex items-center gap-3 px-3 py-3 bg-green-50 dark:bg-green-950/30 text-[#1B6D24] font-semibold border-r-4 border-[#1B6D24] transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
              Dashboard
            </a>
            <a className="flex items-center gap-3 px-3 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">inventory_2</span>
              Products
            </a>
            <a className="flex items-center gap-3 px-3 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">shopping_cart</span>
              Orders
            </a>
            <a className="flex items-center gap-3 px-3 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">payments</span>
              Earnings
            </a>
            <a className="flex items-center gap-3 px-3 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">chat</span>
              Chat
            </a>
          </nav>
          <div className="p-4 mt-auto">
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
              <p className="text-label-xs font-label-xs text-primary mb-2">FARM STATUS</p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-label-sm font-label-sm">Operational</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 p-4 md:p-8 space-y-8 max-w-[1440px] mx-auto w-full">
          {/* Page Header & Quick Actions */}
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-headline-lg font-headline-lg text-on-surface">Farm Overview</h1>
              <p className="text-body-md font-body-md text-secondary">Manage your crops, sales, and orders in one place.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 h-[48px] border border-[#1B6D24] text-[#1B6D24] rounded-lg font-label-sm hover:bg-zinc-50 transition-colors active:scale-95 duration-150">
                <span className="material-symbols-outlined">receipt_long</span>
                View Orders
              </button>
              <button className="flex items-center gap-2 px-6 h-[48px] bg-[#1B6D24] text-white rounded-lg font-label-sm hover:opacity-90 transition-colors active:scale-95 duration-150">
                <span className="material-symbols-outlined">add</span>
                Add Product
              </button>
            </div>
          </section>

          {/* Stats Bento Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="bg-white p-6 rounded-xl border border-zinc-200 flex flex-col justify-between group hover:border-primary/20 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-50 rounded-lg text-primary">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-[10px] font-bold">+12.5%</span>
              </div>
              <div>
                <p className="text-label-xs font-label-xs text-secondary mb-1">Total Sales</p>
                <p className="text-headline-md font-headline-md">$24,592.00</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-zinc-200 flex flex-col justify-between group hover:border-primary/20 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-50 rounded-lg text-primary">
                  <span className="material-symbols-outlined">shopping_basket</span>
                </div>
                <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-[10px] font-bold">+8%</span>
              </div>
              <div>
                <p className="text-label-xs font-label-xs text-secondary mb-1">Total Orders</p>
                <p className="text-headline-md font-headline-md">1,284</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-zinc-200 flex flex-col justify-between group hover:border-primary/20 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-50 rounded-lg text-primary">
                  <span className="material-symbols-outlined">potted_plant</span>
                </div>
                <span className="text-zinc-400 bg-zinc-50 px-2 py-1 rounded text-[10px] font-bold">Stable</span>
              </div>
              <div>
                <p className="text-label-xs font-label-xs text-secondary mb-1">Active Products</p>
                <p className="text-headline-md font-headline-md">42</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-zinc-200 flex flex-col justify-between group hover:border-primary/20 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-50 rounded-lg text-primary">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-[10px] font-bold">+18.2%</span>
              </div>
              <div>
                <p className="text-label-xs font-label-xs text-secondary mb-1">Earnings</p>
                <p className="text-headline-md font-headline-md">$18,230.50</p>
              </div>
            </div>
          </section>

          {/* Chart and Weather Widgets */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {/* Sales Chart Mockup */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-zinc-200">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-headline-md font-headline-md">Sales Performance</h3>
                <select className="bg-zinc-50 border-none rounded-lg text-label-xs focus:ring-primary">
                  <option>Last 30 Days</option>
                  <option>Last 6 Months</option>
                </select>
              </div>
              {/* Chart Graphic Representation */}
              <div className="h-[300px] w-full flex items-end justify-between gap-2 pt-4">
                <div className="flex-1 bg-primary/10 h-[40%] rounded-t-sm relative group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$2k</div>
                </div>
                <div className="flex-1 bg-primary/20 h-[60%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary/15 h-[55%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary/30 h-[85%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary/25 h-[70%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary h-[100%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary/40 h-[90%] rounded-t-sm relative group"></div>
              </div>
              <div className="flex justify-between mt-4 text-label-xs text-secondary px-2">
                <span>WK 1</span><span>WK 2</span><span>WK 3</span><span>WK 4</span><span>WK 5</span><span>WK 6</span><span>WK 7</span>
              </div>
            </div>

            {/* Weather Card */}
            <div className="bg-primary text-white p-6 rounded-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -right-10 -top-10 opacity-10">
                <span className="material-symbols-outlined text-[180px]">wb_sunny</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined">location_on</span>
                  <span className="text-label-sm font-label-sm uppercase tracking-widest">Kiz Farm West</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-headline-xl font-headline-xl">28°C</span>
                  <span className="material-symbols-outlined text-4xl">wb_sunny</span>
                </div>
                <p className="text-body-md">Sunny, light breeze</p>
              </div>
              <div className="space-y-3 pt-6 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="text-label-sm">Humidity</span>
                  <span className="font-bold">42%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-label-sm">Soil Moisture</span>
                  <span className="font-bold text-on-primary-container">Optimal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-label-sm">Next Irrigation</span>
                  <span className="font-bold">18:00</span>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Orders Table */}
          <section className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
            <div className="p-6 flex justify-between items-center">
              <h3 className="text-headline-md font-headline-md">Recent Orders</h3>
              <button className="text-[#1B6D24] font-label-sm hover:underline">See all activity</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 border-y border-zinc-100">
                    <th className="px-6 py-4 text-label-xs text-secondary uppercase tracking-wider">Product</th>
                    <th className="px-6 py-4 text-label-xs text-secondary uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-4 text-label-xs text-secondary uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-4 text-label-xs text-secondary uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-label-xs text-secondary uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr className="hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img className="w-10 h-10 rounded-lg object-cover" data-alt="close up of fresh organic potatoes still slightly dusty with soil, rustic agricultural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB311qBSF6EKaUEOIIhCm1rY7QWdhjKVrS9DOTyZV_vc0I9cTaSIfPoWAEHnMCp6YJUXC8DtRrcFtfb_E21_xvjXWTIXpXkxKs-7gLuRS5tLwGpbuFs-t-9ajt6V7Ho5NQmu4oA13kBnOwLOVDASeDoivDcLwEomNZ17iK35j2P0w6BSAwHUCJuOQKZU5l6LPBasyc2IOAcUy8R49eXNCJUzRd4dLFBD7wz0SbRi-5S5ms-B1hd8Rr9vQofrVOy3dsbuqkFiZ379og" alt="Organic Russet Potatoes" />
                      <span className="font-medium text-on-surface">Organic Russet Potatoes</span>
                    </td>
                    <td className="px-6 py-4 text-label-sm text-secondary">#ORD-2849</td>
                    <td className="px-6 py-4 text-label-sm">Sarah Jenkins</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Delivered</span>
                    </td>
                    <td className="px-6 py-4 font-bold text-on-surface">$42.00</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img className="w-10 h-10 rounded-lg object-cover" data-alt="vibrant red ripe tomatoes on the vine in a sun-drenched greenhouse, high-quality agricultural photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8LI2iK4_3I1LD5qc2eF6ViRP4jfr8MwuiwQDgXfYQq6QJrUQKi3e3XanAKA_eyzi5KOXqL6hYz2ca9iO8wVP7sKJbZq3oGYmcpg0kHddYBa8q41pdQVv5O5um7yIWuJD_MuFW-c7PLVy7YV55Lh63Y08iRul-8oImU3T85v8wKpDFHPUaCiy6SmA4--6-Vx2KrCpw79sTEfym1K5k3VAQl3p465yObb3knj0sDe40f3eilNYdOpyNM551dXuh3B5_-ccvuKLqsd8" alt="Vine-Ripened Tomatoes" />
                      <span className="font-medium text-on-surface">Vine-Ripened Tomatoes</span>
                    </td>
                    <td className="px-6 py-4 text-label-sm text-secondary">#ORD-2850</td>
                    <td className="px-6 py-4 text-label-sm">Marcus Chen</td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Processing</span>
                    </td>
                    <td className="px-6 py-4 font-bold text-on-surface">$28.50</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img className="w-10 h-10 rounded-lg object-cover" data-alt="bunches of fresh organic kale with water droplets, deep green colors and textured leaves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiGvs40YDUlE_HghLlhK2WUWEbGkTWZsdJMjCY847W5hCzjmN5hJTMlmwvijb349bOj3GU-5vQfvIiGKugXRwhCbFCZbexnEeX5u9ifsXsT-HrE58GnXhGd05qLTXSDNQmuYaT0GkylbazxWrvitLaOUvR_ngYsTpFYqC5rmMRYjyUuIVEF4aGYXcBqE-58koXC8b1Zyb48O-oDEjKqnt314iUVxaQ9uC1wostzr1ePSEs_RhvSVIfHDiqPQ_HdTU6LbFDWmkDrCk" alt="Curly Kale Bunch" />
                      <span className="font-medium text-on-surface">Curly Kale Bunch</span>
                    </td>
                    <td className="px-6 py-4 text-label-sm text-secondary">#ORD-2851</td>
                    <td className="px-6 py-4 text-label-sm">Local Harvest Co.</td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Shipped</span>
                    </td>
                    <td className="px-6 py-4 font-bold text-on-surface">$156.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>

      {/* BottomNavBar for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 z-50 flex justify-around items-center px-4 pb-safe bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] rounded-t-2xl">
        <a className="flex flex-col items-center justify-center text-[#1B6D24] scale-110 active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>grid_view</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#1B6D24] active:scale-90 transition-transform duration-200" href="#">
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
      {/* Invisible spacer for bottom nav mobile */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
}
