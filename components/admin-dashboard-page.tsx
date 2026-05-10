"use client"

import React from 'react';

export default function AdminDashboardPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface" style={{fontFamily: "'Inter', sans-serif", minHeight: 'max(884px, 100dvh)'}}>
      {/* NavigationDrawer */}
      <aside className="fixed left-0 top-0 h-full w-[280px] border-r border-gray-200 bg-white shadow-none flex flex-col py-6 px-4 gap-2 z-50 overflow-y-auto">
        <div className="flex items-center gap-3 px-4 mb-8">
          <img alt="KizFarm Logo" className="w-10 h-10 object-contain" data-alt="KizFarm brand logo" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          <h1 className="text-xl font-black tracking-tight text-emerald-900">KizFarm</h1>
        </div>
        <nav className="flex flex-col gap-1">
          <a className="flex items-center gap-3 px-4 py-3 text-emerald-700 font-semibold bg-emerald-50/50 rounded-lg scale-100 active:scale-[0.98] transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="font-inter text-sm antialiased">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="group">group</span>
            <span className="font-inter text-sm antialiased">Users</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
            <span className="font-inter text-sm antialiased">Farmers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span className="font-inter text-sm antialiased">Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span className="font-inter text-sm antialiased">Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
            <span className="font-inter text-sm antialiased">Drivers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="payments">payments</span>
            <span className="font-inter text-sm antialiased">Payments</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="assessment">assessment</span>
            <span className="font-inter text-sm antialiased">Reports</span>
          </a>
          <div className="mt-auto flex flex-col gap-1">
            <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
              <span className="font-inter text-sm antialiased">Notifications</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
              <span className="font-inter text-sm antialiased">Settings</span>
            </a>
          </div>
        </nav>
      </aside>

      {/* TopAppBar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm flex justify-between items-center h-16 px-8 ml-[280px] w-[calc(100%-280px)]">
        <div className="flex items-center gap-4">
          <button className="hover:bg-gray-100 rounded-full p-2 transition-all duration-200 text-emerald-800 lg:hidden">
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
          <h2 className="text-lg font-bold text-emerald-900">Dashboard Overview</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <button className="hover:bg-gray-100 rounded-full p-2 transition-all duration-200 text-gray-500">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-white"></span>
            </button>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
            <div className="text-right hidden sm:block">
              <p className="font-label-md text-on-surface leading-none mb-1">Admin User</p>
              <p className="font-label-sm text-secondary leading-none">Super Administrator</p>
            </div>
            <img alt="Admin Profile" className="w-9 h-9 rounded-full object-cover border border-emerald-100" data-alt="professional portrait of a corporate administrator in business attire, clean studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZC_LRaKvUzhFoj2SsEaEabfvJYppbkwRYYcSNz-1ab3fLWw39UTK-0f0rHEDQu94zZ7u4oDLeYxdtgzpDvikM5NiNmnaY6qLPgDZkI5mHIFKgVlKEMcURH4jQ71XVSD65ZI71db6-IRgfdKIxCakWyAIdguTpVQRigEhG4VNC2AGrMPyD_MaP_tDao5lAs6vTbGN5aqRVDYoyfFarSpWnPymFe9eijJEQy5yenpXZUlMS95KUsKHlTw6qQypQ3yk3XR4rHPgb_Q4" />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-[280px] p-margin min-h-screen">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-gutter text-secondary font-label-sm">
          <span>Home</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-bold">Dashboard</span>
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter mb-gutter">
          {/* Stat Card 1 */}
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.05)] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-sm">
              <div className="p-sm bg-emerald-50 text-emerald-700 rounded-lg">
                <span className="material-symbols-outlined" data-icon="group">group</span>
              </div>
              <span className="flex items-center gap-1 font-label-sm text-primary px-2 py-1 bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                12%
              </span>
            </div>
            <h4 className="font-label-md text-secondary uppercase tracking-wider mb-xs">Total Users</h4>
            <div className="flex items-baseline gap-2">
              <span className="font-h1 text-on-surface">12.5k</span>
              <span className="font-body-sm text-secondary">from last month</span>
            </div>
          </div>
          {/* Stat Card 2 */}
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.05)] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-sm">
              <div className="p-sm bg-blue-50 text-blue-700 rounded-lg">
                <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
              </div>
              <span className="flex items-center gap-1 font-label-sm text-primary px-2 py-1 bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                8.5%
              </span>
            </div>
            <h4 className="font-label-md text-secondary uppercase tracking-wider mb-xs">Total Farmers</h4>
            <div className="flex items-baseline gap-2">
              <span className="font-h1 text-on-surface">4.2k</span>
              <span className="font-body-sm text-secondary">from last month</span>
            </div>
          </div>
          {/* Stat Card 3 */}
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.05)] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-sm">
              <div className="p-sm bg-orange-50 text-orange-700 rounded-lg">
                <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
              </div>
              <span className="flex items-center gap-1 font-label-sm text-primary px-2 py-1 bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                15%
              </span>
            </div>
            <h4 className="font-label-md text-secondary uppercase tracking-wider mb-xs">Total Orders</h4>
            <div className="flex items-baseline gap-2">
              <span className="font-h1 text-on-surface">8.9k</span>
              <span className="font-body-sm text-secondary">from last month</span>
            </div>
          </div>
          {/* Stat Card 4 */}
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.05)] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-sm">
              <div className="p-sm bg-emerald-700 text-white rounded-lg">
                <span className="material-symbols-outlined" data-icon="payments">payments</span>
              </div>
              <span className="flex items-center gap-1 font-label-sm text-primary px-2 py-1 bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                24%
              </span>
            </div>
            <h4 className="font-label-md text-secondary uppercase tracking-wider mb-xs">Total Revenue</h4>
            <div className="flex items-baseline gap-2">
              <span className="font-h1 text-on-surface">₦45.2M</span>
              <span className="font-body-sm text-secondary">from last month</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-gutter">
          {/* Analytics Chart Area */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.05)] overflow-hidden">
            <div className="px-lg py-md border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="font-h3 text-on-surface">Revenue &amp; Order Volume</h3>
                <p className="font-body-sm text-secondary">Tracking monthly growth performance</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-label-sm bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">1M</button>
                <button className="px-3 py-1.5 text-label-sm bg-primary text-white rounded-lg">6M</button>
                <button className="px-3 py-1.5 text-label-sm bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">1Y</button>
              </div>
            </div>
            <div className="p-lg">
              <div className="relative h-[300px] w-full flex items-end justify-between px-4 pb-8 border-b border-l border-gray-100">
                {/* Simulated Chart Bars */}
                <div className="flex flex-col items-center gap-2 group w-1/12">
                  <div className="w-full bg-emerald-100 h-24 rounded-t-sm group-hover:bg-emerald-200 transition-all"></div>
                  <div className="w-full bg-emerald-700 h-16 rounded-t-sm group-hover:bg-emerald-800 transition-all"></div>
                  <span className="absolute -bottom-8 font-label-sm text-secondary">Jan</span>
                </div>
                <div className="flex flex-col items-center gap-2 group w-1/12">
                  <div className="w-full bg-emerald-100 h-32 rounded-t-sm group-hover:bg-emerald-200 transition-all"></div>
                  <div className="w-full bg-emerald-700 h-20 rounded-t-sm group-hover:bg-emerald-800 transition-all"></div>
                  <span className="absolute -bottom-8 font-label-sm text-secondary">Feb</span>
                </div>
                <div className="flex flex-col items-center gap-2 group w-1/12">
                  <div className="w-full bg-emerald-100 h-28 rounded-t-sm group-hover:bg-emerald-200 transition-all"></div>
                  <div className="w-full bg-emerald-700 h-24 rounded-t-sm group-hover:bg-emerald-800 transition-all"></div>
                  <span className="absolute -bottom-8 font-label-sm text-secondary">Mar</span>
                </div>
                <div className="flex flex-col items-center gap-2 group w-1/12">
                  <div className="w-full bg-emerald-100 h-40 rounded-t-sm group-hover:bg-emerald-200 transition-all"></div>
                  <div className="w-full bg-emerald-700 h-32 rounded-t-sm group-hover:bg-emerald-800 transition-all"></div>
                  <span className="absolute -bottom-8 font-label-sm text-secondary">Apr</span>
                </div>
                <div className="flex flex-col items-center gap-2 group w-1/12">
                  <div className="w-full bg-emerald-100 h-48 rounded-t-sm group-hover:bg-emerald-200 transition-all"></div>
                  <div className="w-full bg-emerald-700 h-36 rounded-t-sm group-hover:bg-emerald-800 transition-all"></div>
                  <span className="absolute -bottom-8 font-label-sm text-secondary">May</span>
                </div>
                <div className="flex flex-col items-center gap-2 group w-1/12">
                  <div className="w-full bg-emerald-100 h-56 rounded-t-sm group-hover:bg-emerald-200 transition-all"></div>
                  <div className="w-full bg-emerald-700 h-44 rounded-t-sm group-hover:bg-emerald-800 transition-all"></div>
                  <span className="absolute -bottom-8 font-label-sm text-secondary">Jun</span>
                </div>
              </div>
              <div className="mt-xl flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-700 rounded-full"></span>
                  <span className="font-label-sm text-secondary">Revenue (M)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-100 rounded-full"></span>
                  <span className="font-label-sm text-secondary">Orders (k)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-white rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.05)] overflow-hidden">
            <div className="px-lg py-md border-b border-gray-100">
              <h3 className="font-h3 text-on-surface">System Activity</h3>
              <p className="font-body-sm text-secondary">Real-time admin events</p>
            </div>
            <div className="p-lg flex flex-col gap-6">
              <div className="flex gap-4 relative before:content-[''] before:absolute before:left-[11px] before:top-6 before:h-full before:w-[1px] before:bg-gray-100 last:before:hidden">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center z-10 shrink-0">
                  <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>circle</span>
                </div>
                <div>
                  <p className="font-label-md text-on-surface">New Farmer Onboarded</p>
                  <p className="font-body-sm text-secondary mb-1">Adebayo Farms Ltd. joined the platform</p>
                  <span className="font-label-sm text-gray-400">2 mins ago</span>
                </div>
              </div>
              <div className="flex gap-4 relative before:content-[''] before:absolute before:left-[11px] before:top-6 before:h-full before:w-[1px] before:bg-gray-100 last:before:hidden">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center z-10 shrink-0">
                  <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>circle</span>
                </div>
                <div>
                  <p className="font-label-md text-on-surface">Bulk Inventory Update</p>
                  <p className="font-body-sm text-secondary mb-1">Products in 'Grain' category updated</p>
                  <span className="font-label-sm text-gray-400">45 mins ago</span>
                </div>
              </div>
              <div className="flex gap-4 relative before:content-[''] before:absolute before:left-[11px] before:top-6 before:h-full before:w-[1px] before:bg-gray-100 last:before:hidden">
                <div className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center z-10 shrink-0">
                  <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>circle</span>
                </div>
                <div>
                  <p className="font-label-md text-on-surface">Payment Dispute Flagged</p>
                  <p className="font-body-sm text-secondary mb-1">Order #8829 pending review</p>
                  <span className="font-label-sm text-gray-400">2 hours ago</span>
                </div>
              </div>
              <button className="w-full py-2 text-label-sm text-primary font-bold hover:bg-emerald-50 rounded-lg transition-colors border border-dashed border-primary/20">
                View All Activity
              </button>
            </div>
          </div>
        </div>

        {/* Latest Orders Table */}
        <div className="bg-white rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.05)] overflow-hidden">
          <div className="px-lg py-md border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="font-h3 text-on-surface">Recent Orders</h3>
              <p className="font-body-sm text-secondary">Latest 5 transactions across the network</p>
            </div>
            <button className="flex items-center gap-2 text-label-sm text-primary font-bold px-4 py-2 hover:bg-emerald-50 rounded-lg transition-colors">
              Export CSV <span className="material-symbols-outlined text-[18px]">download</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-lg py-md font-label-sm text-secondary uppercase">Order ID</th>
                  <th className="px-lg py-md font-label-sm text-secondary uppercase">Farmer</th>
                  <th className="px-lg py-md font-label-sm text-secondary uppercase">Status</th>
                  <th className="px-lg py-md font-label-sm text-secondary uppercase">Items</th>
                  <th className="px-lg py-md font-label-sm text-secondary uppercase text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-lg py-md font-numeric text-on-surface font-medium">#ORD-9902</td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-[12px]">SO</div>
                      <span className="font-label-md text-on-surface">Samuel Okafor</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[12px] font-bold">Completed</span>
                  </td>
                  <td className="px-lg py-md font-body-sm text-secondary">12x Organic Yam</td>
                  <td className="px-lg py-md font-numeric text-right font-bold text-on-surface">₦45,000.00</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-lg py-md font-numeric text-on-surface font-medium">#ORD-9901</td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-[12px]">FA</div>
                      <span className="font-label-md text-on-surface">Fatima Aminu</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[12px] font-bold">Processing</span>
                  </td>
                  <td className="px-lg py-md font-body-sm text-secondary">5x Basket Tomatoes</td>
                  <td className="px-lg py-md font-numeric text-right font-bold text-on-surface">₦12,500.00</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-lg py-md font-numeric text-on-surface font-medium">#ORD-9899</td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold text-[12px]">JE</div>
                      <span className="font-label-md text-on-surface">John Edeh</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[12px] font-bold">Completed</span>
                  </td>
                  <td className="px-lg py-md font-body-sm text-secondary">20kg Brown Rice</td>
                  <td className="px-lg py-md font-numeric text-right font-bold text-on-surface">₦82,000.00</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-lg py-md font-numeric text-on-surface font-medium">#ORD-9898</td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-[12px]">CA</div>
                      <span className="font-label-md text-on-surface">Chidi Azikiwe</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="px-2.5 py-0.5 rounded-full bg-error-container text-error text-[12px] font-bold">Cancelled</span>
                  </td>
                  <td className="px-lg py-md font-body-sm text-secondary">2x Palm Oil (5L)</td>
                  <td className="px-lg py-md font-numeric text-right font-bold text-on-surface">₦15,000.00</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-lg py-md font-numeric text-on-surface font-medium">#ORD-9897</td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-[12px]">BA</div>
                      <span className="font-label-md text-on-surface">Bello Agro-Vets</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[12px] font-bold">Completed</span>
                  </td>
                  <td className="px-lg py-md font-body-sm text-secondary">Mixed Grains Batch</td>
                  <td className="px-lg py-md font-numeric text-right font-bold text-on-surface">₦155,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-lg py-md border-t border-gray-100 flex items-center justify-between">
            <p className="font-label-sm text-secondary">Showing 5 of 8,900+ orders</p>
            <div className="flex gap-2">
              <button className="p-1.5 border border-gray-200 rounded hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <button className="p-1.5 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* FAB for quick actions */}
      <button className="fixed bottom-margin right-margin bg-primary-container text-on-primary-container w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group">
        <span className="material-symbols-outlined text-[32px] group-hover:rotate-90 transition-transform">add</span>
      </button>
    </div>
  );
}
