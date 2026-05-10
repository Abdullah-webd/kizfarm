"use client"

import React from 'react';

export default function MyOrdersPage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 shadow-none sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 py-3 h-16 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3">
            <div className="h-8 rounded-lg overflow-hidden flex-shrink-0 w-10">
              <img alt="KIZ FARM Official Logo" className="w-full h-full object-contain" data-alt="Minimalist agricultural logo with a stylized green leaf and modern geometric structure, professional branding" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
            </div>
            <h1 className="font-inter antialiased text-sm font-medium font-extrabold tracking-tight text-[#1B6D24] dark:text-green-500 text-xl">KIZ FARM</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 dark:text-zinc-400 hover:opacity-80 transition-opacity active:scale-95 duration-150">
              <span className="material-symbols-outlined" data-icon="search">search</span>
            </button>
            <button className="text-gray-500 dark:text-zinc-400 hover:opacity-80 transition-opacity active:scale-95 duration-150">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-8">
        {/* Section Header */}
        <div className="mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Track Your Order</h2>
          <p className="text-secondary font-body-md max-w-2xl">Monitor your recent agricultural purchases, delivery statuses, and transaction history in real-time.</p>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-sm mb-md overflow-x-auto pb-2">
          <button className="bg-primary-container text-on-primary px-6 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap">All Orders</button>
          <button className="bg-white border border-outline-variant text-secondary px-6 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap hover:bg-surface-container transition-colors">Processing</button>
          <button className="bg-white border border-outline-variant text-secondary px-6 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap hover:bg-surface-container transition-colors">Shipped</button>
          <button className="bg-white border border-outline-variant text-secondary px-6 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap hover:bg-surface-container transition-colors">Delivered</button>
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Order Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-md flex flex-col gap-md transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] group">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label-xs text-label-xs text-secondary mb-1">ORDER ID</p>
                <h3 className="font-headline-md text-headline-md text-on-surface">#KF-88219</h3>
              </div>
              <span className="bg-[#1B6D24] text-white px-3 py-1 rounded-full font-label-xs text-label-xs uppercase tracking-wider">Shipped</span>
            </div>
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-surface-variant flex-shrink-0">
                <img alt="Fresh Tomatoes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close-up of vibrant red vine-ripened tomatoes in a rustic wooden crate, natural sunlight, earthy textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABBrOKdEfukzXoSoGBYOgUZ2IznuVkCnknO38-raOa_o7BZlwliIodDGEFRzWvZKVqWXnKb7lFa_-kx_B7jUKJaGqT3y8OtdrF1uZ7ZEGrZB58cfVxM51ZNFXumUidM_fgZMv_W7r-6zYsniVCjCMegAwzvJVjHV5tb_zMY-y3y9p6zQv3SI-QOE8K6zqKStABc8aBLlnWnU9di-EVxXv_FcG3ob_cYHrRVrsKU5lHBU30YYfBtt4FIZL_leHeYni1kaZK1vR6yow" />
              </div>
              <div className="flex-1">
                <p className="font-label-sm text-label-sm text-on-surface">Organic Roma Tomatoes</p>
                <p className="font-body-md text-secondary text-sm">Oct 24, 2023</p>
              </div>
            </div>
            <div className="pt-md border-t border-gray-100 flex justify-between items-center">
              <p className="font-headline-md text-headline-md text-[#1B6D24]">₦12,500.00</p>
              <button className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:underline">
                Details <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Order Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-md flex flex-col gap-md transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] group">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label-xs text-label-xs text-secondary mb-1">ORDER ID</p>
                <h3 className="font-headline-md text-headline-md text-on-surface">#KF-88104</h3>
              </div>
              <span className="bg-tertiary-container text-on-tertiary-fixed px-3 py-1 rounded-full font-label-xs text-label-xs uppercase tracking-wider">Processing</span>
            </div>
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-surface-variant flex-shrink-0">
                <img alt="Fertilizer Sacks" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Sacks of premium organic fertilizer stacked in a clean, modern agricultural warehouse with soft overhead lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfmUW1e7F8DTpZy3_7G8EL_1y8mglS5RzfwqZANomocyDdVwhni8w-9EQPupV4tnYD_8jNn-oWzoRfA5n8kJNWtA6vTXWvSFS-homWaYKnAYoz9tJNt2tmJ_80LFSzWHP9HpcfVHpSzOVZ8HGYr0oVT602WVTljlkiH8OO9LNx-z8Yf8PJGvyjg52ZYNxN4ImMaUFrHPvCqrURsJ7WE306IPbgRoo1oe1bDaGg_oxR4Yoj_H-VPSo5cuGv6q-bOftiHtfbQremhCE" />
              </div>
              <div className="flex-1">
                <p className="font-label-sm text-label-sm text-on-surface">NPK 15-15-15 (50kg)</p>
                <p className="font-body-md text-secondary text-sm">Oct 22, 2023</p>
              </div>
            </div>
            <div className="pt-md border-t border-gray-100 flex justify-between items-center">
              <p className="font-headline-md text-headline-md text-[#1B6D24]">₦45,200.00</p>
              <button className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:underline">
                Details <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Order Card 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-md flex flex-col gap-md transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] group">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label-xs text-label-xs text-secondary mb-1">ORDER ID</p>
                <h3 className="font-headline-md text-headline-md text-on-surface">#KF-87992</h3>
              </div>
              <span className="bg-surface-container-highest text-secondary px-3 py-1 rounded-full font-label-xs text-label-xs uppercase tracking-wider">Delivered</span>
            </div>
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-surface-variant flex-shrink-0">
                <img alt="Seedlings" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Tray of young green vegetable seedlings in a nursery with soft morning mist and diffused sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_D39EERRsZO-E4UzvIqfdUrwybnPONC-y8p0M25Vn0oiHfPOcT2j5ytfupVQ__dAaeMTRSKxPxhvfVq5iq7pwVB3GEELZGriYvYLxLCORsKbQgTSW-1WUaYObzrKi7aQMh4aUU2D-mpD7wl6Doe0UX0kl_cJsMwKGWAB_YdPDUGRmUc4jXVYr8rOuUPYAoiQcArxvQrmmyfryen0nLfYSl5f7cIAMQnRot8L2ZMlyHAtG4PLmI1pkElmycaQA0Gb9a2ODmm0SfpM" />
              </div>
              <div className="flex-1">
                <p className="font-label-sm text-label-sm text-on-surface">Hybrid Corn Seeds x5</p>
                <p className="font-body-md text-secondary text-sm">Oct 18, 2023</p>
              </div>
            </div>
            <div className="pt-md border-t border-gray-100 flex justify-between items-center">
              <p className="font-headline-md text-headline-md text-[#1B6D24]">₦8,750.00</p>
              <button className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:underline">
                Details <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Order Card 4 */}
          <div className="bg-white border border-gray-200 rounded-xl p-md flex flex-col gap-md transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] group">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label-xs text-label-xs text-secondary mb-1">ORDER ID</p>
                <h3 className="font-headline-md text-headline-md text-on-surface">#KF-87850</h3>
              </div>
              <span className="bg-surface-container-highest text-secondary px-3 py-1 rounded-full font-label-xs text-label-xs uppercase tracking-wider">Delivered</span>
            </div>
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-surface-variant flex-shrink-0">
                <img alt="Irrigation Tools" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close-up of high-precision drip irrigation nozzles on dark fertile soil, macro photography focusing on water droplets" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXCi_Ela7C-7oH7jjRHJegbYhgTnd2vE6XX8zhIbF8OnLFd2vwIZd2D0A2o4-BLaGqG-HbKo_FwrbIhiZl3s2D3ehf9IYAol0mFgSvUPDCsJvBRXcu2V4eRpmlz8V83gsUmsyoCf9awb0jxdR8kW4s2sgLcVEQPK4TxeNT_eglnxycwqRbBjSp55CJ9SKBmyVFDD4NxpTINDIsAHgnle-tyI__v2V-Z2bKBEwujpsSHMYmDmhSAWkgxVkBosLrnk5_4-G6HLomR44" />
              </div>
              <div className="flex-1">
                <p className="font-label-sm text-label-sm text-on-surface">Drip Irrigation Kit</p>
                <p className="font-body-md text-secondary text-sm">Oct 15, 2023</p>
              </div>
            </div>
            <div className="pt-md border-t border-gray-100 flex justify-between items-center">
              <p className="font-headline-md text-headline-md text-[#1B6D24]">₦125,000.00</p>
              <button className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:underline">
                Details <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Empty State / Add Placeholder */}
          <div className="border-2 border-dashed border-outline-variant rounded-xl p-md flex flex-col items-center justify-center text-center gap-sm bg-surface-container-low/50">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
            </div>
            <div>
              <h4 className="font-label-sm text-label-sm text-on-surface">Start a new order</h4>
              <p className="text-secondary text-xs mt-1">Browse our latest farm produce</p>
            </div>
            <button className="mt-xs border border-primary text-primary px-4 py-1.5 rounded-lg font-label-xs text-label-xs hover:bg-primary hover:text-white transition-colors">Go to Market</button>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-white dark:bg-zinc-950 h-20 pb-safe border-t border-gray-100 dark:border-zinc-800 shadow-[0_-10px_30px_rgba(27,109,36,0.05)] md:hidden">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] dark:text-green-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="shopping_bag" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Profile</span>
        </a>
      </nav>
    </>
  );
}
