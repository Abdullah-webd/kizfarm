"use client"

import React from 'react';

export default function TrackOrderPage() {
  return (
    <>
      <header className="bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 flex justify-between items-center w-full px-6 py-3 h-16 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img alt="KIZ FARM Logo" className="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
          <span className="font-inter antialiased text-sm font-medium text-xl font-extrabold tracking-tight text-[#1B6D24] dark:text-green-500">KIZ FARM</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-gray-500 hover:opacity-80 transition-opacity active:scale-95 duration-150" data-icon="notifications">notifications</button>
          <button className="material-symbols-outlined text-gray-500 hover:opacity-80 transition-opacity active:scale-95 duration-150" data-icon="menu">menu</button>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-12 lg:py-xl">
        <div className="mb-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-headline-xl text-headline-xl text-primary mb-2">Track Your Harvest</h1>
              <p className="text-secondary font-body-md">Order #KF-92841 • Placed Oct 24, 2023</p>
            </div>
            <div className="bg-surface-container-low border border-gray-200 rounded-xl p-6 flex items-center gap-4 min-w-[300px]">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1B6D24]"></span>
              </div>
              <div>
                <p className="font-label-xs text-label-xs text-secondary uppercase">Live Status</p>
                <p className="font-headline-md text-headline-md text-[#1B6D24]">In Transit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-7 bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="font-headline-md text-headline-md mb-8">Delivery Progress</h2>
            <div className="relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-100"></div>

              <div className="relative flex gap-6 mb-10 items-start">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#1B6D24] text-white">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-md text-[18px] text-[#1B6D24]">Order Placed</h3>
                  <p className="text-secondary text-label-sm">Oct 24, 09:12 AM</p>
                  <p className="mt-1 text-on-surface-variant font-body-md">Your order has been received by the Kiz Farm system.</p>
                </div>
              </div>

              <div className="relative flex gap-6 mb-10 items-start">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#1B6D24] text-white">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-md text-[18px] text-[#1B6D24]">Confirmed by Farmer</h3>
                  <p className="text-secondary text-label-sm">Oct 24, 11:45 AM</p>
                  <p className="mt-1 text-on-surface-variant font-body-md">Green Valley Organics has confirmed your selection for harvest.</p>
                </div>
              </div>

              <div className="relative flex gap-6 mb-10 items-start">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#1B6D24] text-white">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-md text-[18px] text-[#1B6D24]">Packed</h3>
                  <p className="text-secondary text-label-sm">Oct 25, 06:30 AM</p>
                  <p className="mt-1 text-on-surface-variant font-body-md">Produce was harvested and packed in sustainable bio-containers.</p>
                </div>
              </div>

              <div className="relative flex gap-6 mb-10 items-start">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#1B6D24] text-white">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-md text-[18px] text-[#1B6D24]">Picked up by Driver</h3>
                  <p className="text-secondary text-label-sm">Oct 25, 08:15 AM</p>
                  <p className="mt-1 text-on-surface-variant font-body-md">Courier has collected the package from the farm gates.</p>
                </div>
              </div>

              <div className="relative flex gap-6 mb-10 items-start group">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#1B6D24] text-white ring-8 ring-green-50 ring-opacity-100">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-headline-md text-[18px] text-[#1B6D24]">In Transit</h3>
                    <span className="bg-primary-container text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Active</span>
                  </div>
                  <p className="text-secondary text-label-sm">In Progress</p>
                  <p className="mt-1 text-on-surface font-body-md font-medium">Expected delivery today by 4:00 PM.</p>
                </div>
                <div className="absolute left-[19px] top-10 h-10 w-0.5 bg-[#1B6D24]"></div>
              </div>

              <div className="relative flex gap-6 items-start opacity-40">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-500">
                  <span className="material-symbols-outlined text-[20px]">task_alt</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-md text-[18px]">Delivered</h3>
                  <p className="text-secondary text-label-sm">Pending</p>
                  <p className="mt-1 text-on-surface-variant font-body-md">Final delivery signature and photo confirmation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="h-64 w-full bg-slate-100 relative group overflow-hidden">
                <img alt="Live Map" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="aerial view of a modern clean city grid with a green delivery truck moving through a sunlit boulevard isometric style soft colors" data-location="Seattle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD_hdqAmPWkbq0uzhoCZA8N97gUsC1hfENbsm3GpKnmygXUpGyak4c6EdmnaHp7XPrqIEZDTzAjnCIeYlugY_gcgA3TVIIak_4Y0GVdsH2qwhKiq3TXNpLItQ6MY-6WAkdZ5hL_muE1OaYcKM782orIiGcJIUoh_ceu-sWVi5NOjHvMwXS7JJqBuMmoiSIvR0wUaIbs5_TitaPokR3iLIyu7seNaCi-hrZPo934sgSg0mDYwX4BfMtkfz4mV3A610o4fkpv1tH48c" />
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg border border-gray-200 text-label-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Live Location
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-label-xs text-secondary uppercase mb-1">Estimated Arrival</p>
                    <p className="font-headline-md text-headline-md text-primary">15:45 - 16:15</p>
                  </div>
                  <button className="bg-[#1B6D24] text-white px-4 py-2 rounded-lg font-label-sm hover:opacity-90 transition-opacity">View Map</button>
                </div>
                <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-lg border border-gray-100">
                  <img alt="Driver" className="w-12 h-12 rounded-full object-cover border-2 border-white" data-alt="portrait of a friendly middle-aged delivery driver wearing a green polo shirt natural lighting outdoors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRfzrP7v9nuKpdg51yoGz3LfRbd9-jw4-hayHl4h1qyPaPCQ4_nsmbzlxgifB4huWBjGxWkppVwDSv5qFS98aqqJqbINHTr335aIfYpgN0Zx7Hd1EaALKyuiEW66iZ7i3-oMTrRzxcNca-Ux1J0aDP3ajQZut6nWwGt0RwZEQxnXqOgCfHv7WGSdn_TvTlcmEYIH3q37eQO0_gU3Mra-YMaEVQ6PuJighZRr8Ry0VDy6SVehg7CHazuOBNxs7vW_JpFU1AOGx_8e0" />
                  <div>
                    <p className="font-label-sm text-on-surface">Marcus Chen</p>
                    <p className="text-label-xs text-secondary">Verified Logistics Partner</p>
                  </div>
                  <button className="ml-auto material-symbols-outlined text-primary p-2 bg-white rounded-full border border-gray-200" data-icon="call">call</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-headline-md text-[18px] mb-4">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img alt="Kale" className="w-14 h-14 rounded-lg object-cover" data-alt="close up of fresh organic green kale with water droplets white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyFWAv35NNAScD61--7FBl_8Jx-9DqJsdZ8IQ0sj8lQjZfrr2JYJ_rCgZ2ufgnsl7dpmjObKZzsDDS2kMI_qlk-YSYuGeWJqCImmzcpWoFaBC_BFTfmuoyR6wrnxmpTsjDY5f4td44q_2Iy-bKRcvyQfEZDcmlC5LydNggthmFDKIivtZYtf-uwBd_21agVoHMOX2MoSXUPiObmPJ9Xn2o11FlBJNsGCvn2Wrg8LG1Cr6sLLIMF4PJrElzK0JFBOSiwpkt-ZIz8wQ" />
                  <div className="flex-1">
                    <p className="font-label-sm">Organic Curly Kale</p>
                    <p className="text-label-xs text-secondary">2.5 lbs • $12.50</p>
                  </div>
                  <span className="bg-secondary-container text-secondary text-[10px] px-2 py-0.5 rounded-full font-bold">Irrigated</span>
                </div>
                <div className="flex items-center gap-4">
                  <img alt="Carrots" className="w-14 h-14 rounded-lg object-cover" data-alt="basket of freshly harvested heritage carrots vibrant orange and purple with green tops white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdIAsIXX2nGriQ6nw6tK6r1x4sYqdFmDL4qmawF7tB2COCc5BCMcaF4uPENpMtflV-Gw5q7KwKlf0Yxzy20sxgJOUpUeMmFiaMFAmf8cHAzOz9-hHaQzon88KtuSAH9FUFgSgJgzPvSJea5iaKhLVrKZdZfpO8SLVDVI1VOwyBq6bqgyz7-ObtVr-BYNKqdeaQ_dK5PpScILr4OGmUraoTVUrzH6zOJYq_qS8QTVHDDAKJQZ_Tx40UBI404TCAaFtl1twVRW4iNp8" />
                  <div className="flex-1">
                    <p className="font-label-sm">Heirloom Carrots</p>
                    <p className="text-label-xs text-secondary">1.0 lb • $5.00</p>
                  </div>
                  <span className="bg-secondary-container text-secondary text-[10px] px-2 py-0.5 rounded-full font-bold">Harvested</span>
                </div>
                <hr className="border-gray-100" />
                <div className="flex justify-between text-on-surface font-medium">
                  <span>Total (incl. tax)</span>
                  <span>$17.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
