"use client"

import React from 'react';

export default function NotificationPage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 flex justify-between items-center px-6 py-3 h-16">
        <div className="flex items-center gap-3">
          <img alt="KIZ FARM Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:opacity-80 transition-opacity active:scale-95 duration-150 text-[#1B6D24]">
            <span className="material-symbols-outlined" data-icon="notifications" style={{ fontVariationSettings: "'FILL' 1" }}>notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
            <img className="w-full h-full object-cover" data-alt="portrait of a professional farm manager wearing a neutral colored shirt in bright natural daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQURTiqM3TE8Xh2AotYv-WPeDRM68KlBuY7PImbaOUj0HRVYPx62EOOohlGIh4RI57p19ITrHU5psmrt7S3OHtEz5pAe_VWoL1MvAH-bgmATfNOdk8cmdk_M82_FZLKQLBRGo0T6AGp_cvEJTYodRLc19BaAln-srjTTfZp97tz2rMrgpHjhMplQx20lgrcUL1AJ5BP2PWsdTsG9IYjyhcHfgYAuIRUnHmMtm3Q0b2Ix8S4VTOMnnP1YpQ4mpijUR6PxUuXDs_PqM" />
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto pt-24 px-margin md:px-lg">
        {/* Hero Section */}
        <section className="mb-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
            <div>
              <h1 className="font-headline-lg text-primary mb-xs">Notifications</h1>
              <p className="font-body-md text-secondary">Stay updated with your farm operations and orders.</p>
            </div>
            <div className="flex gap-base">
              <button className="px-md h-12 border border-outline text-primary font-label-sm rounded-lg hover:bg-surface-container transition-colors">Mark all as read</button>
              <button className="px-md h-12 border border-outline text-primary font-label-sm rounded-lg hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-[20px] align-middle" data-icon="filter_list">filter_list</span>
                Filters
              </button>
            </div>
          </div>
        </section>

        {/* Notification Feed */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-base">
            {/* Date Header */}
            <div className="py-base">
              <h2 className="font-label-sm text-secondary uppercase tracking-widest">Today</h2>
            </div>

            {/* Notification Item: Order Update (Unread) */}
            <div className="unread-tint border border-gray-100 rounded-xl p-md flex gap-md items-start transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-md text-[18px] text-primary">Order Out for Delivery</h3>
                  <span className="font-label-xs text-outline">2m ago</span>
                </div>
                <p className="font-body-md text-secondary mt-xs">Your order #KF-8821 containing 50kg of Organic Fertilizer is out for delivery with our logistics partner.</p>
                <div className="mt-sm flex items-center gap-xs">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-label-xs text-primary">Unread</span>
                </div>
              </div>
            </div>

            {/* Notification Item: Payment Success (Unread) */}
            <div className="unread-tint border border-gray-100 rounded-xl p-md flex gap-md items-start transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-md text-[18px] text-primary">Payment Successful</h3>
                  <span className="font-label-xs text-outline">45m ago</span>
                </div>
                <p className="font-body-md text-secondary mt-xs">Payment of $1,240.00 for your seasonal seed subscription has been processed successfully.</p>
                <div className="mt-sm flex items-center gap-xs">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-label-xs text-primary">Unread</span>
                </div>
              </div>
            </div>

            {/* Date Header */}
            <div className="py-base mt-md">
              <h2 className="font-label-sm text-secondary uppercase tracking-widest">Yesterday</h2>
            </div>

            {/* Notification Item: Message */}
            <div className="bg-white border border-gray-100 rounded-xl p-md flex gap-md items-start transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-secondary">
                <span className="material-symbols-outlined" data-icon="chat">chat</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-md text-[18px] text-on-surface">Message from Agronomist</h3>
                  <span className="font-label-xs text-outline">Yesterday, 4:20 PM</span>
                </div>
                <p className="font-body-md text-secondary mt-xs">"Based on the recent soil test from Plot B, I recommend increasing the nitrogen levels by 15% before the next rain cycle."</p>
                <div className="mt-sm">
                  <button className="text-primary font-label-sm hover:underline">Reply Now</button>
                </div>
              </div>
            </div>

            {/* Notification Item: Order Update */}
            <div className="bg-white border border-gray-100 rounded-xl p-md flex gap-md items-start transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-secondary">
                <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-md text-[18px] text-on-surface">Order Received</h3>
                  <span className="font-label-xs text-outline">Yesterday, 10:15 AM</span>
                </div>
                <p className="font-body-md text-secondary mt-xs">Your order #KF-8819 for Wheat Seeds has been confirmed and is being prepared for dispatch.</p>
              </div>
            </div>
          </div>

          {/* Sidebar / Stats */}
          <div className="lg:col-span-4 space-y-gutter">
            {/* Promo / Summary Card */}
            <div className="bg-primary p-md rounded-xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-headline-md text-[20px] mb-xs">Farm Insights</h4>
                <p className="font-body-md opacity-90 mb-md">You have 2 pending tasks requiring immediate attention.</p>
                <button className="w-full h-12 bg-white text-primary font-label-sm rounded-lg hover:bg-opacity-90 transition-all">View Dashboard</button>
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <span className="material-symbols-outlined text-[120px]" data-icon="analytics">analytics</span>
              </div>
            </div>

            {/* Quick Filters Card */}
            <div className="border border-gray-200 rounded-xl p-md">
              <h4 className="font-label-sm text-secondary uppercase tracking-widest mb-md">Notification Settings</h4>
              <div className="space-y-sm">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="font-body-md text-on-surface">Order Updates</span>
                  <input checked defaultChecked className="rounded text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="font-body-md text-on-surface">Payment Alerts</span>
                  <input checked defaultChecked className="rounded text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="font-body-md text-on-surface">Direct Messages</span>
                  <input checked defaultChecked className="rounded text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="font-body-md text-on-surface">Market Trends</span>
                  <input className="rounded text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                </label>
              </div>
              <hr className="my-md border-gray-100" />
              <button className="w-full text-center text-primary font-label-sm hover:underline">Manage preferences</button>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-white h-20 pb-safe border-t border-gray-100 shadow-[0_-10px_30px_rgba(27,109,36,0.05)] md:hidden">
        <a className="flex flex-col items-center justify-center text-gray-400 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="person" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Profile</span>
        </a>
      </nav>
    </>
  );
}
