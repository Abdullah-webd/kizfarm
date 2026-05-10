"use client"

import React from 'react';

export default function EscrowManagementPage() {
  return (
    <div className="font-body-md text-on-surface" style={{backgroundColor: '#f9f9ff', fontFamily: "'Inter', sans-serif"}}>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-[280px] z-50 bg-white border-r border-gray-100 shadow-[1px_0_3px_0_rgba(0,0,0,0.05)] flex flex-col py-6 px-4">
        <div className="mb-10 px-2 flex flex-col gap-2">
          <img alt="KizFarm Logo" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          <div>
            <h1 className="text-xl font-black tracking-tight text-[#1B6D24]">KizFarm</h1>
            <p className="text-xs text-gray-500 font-medium">Admin Console</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24] transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-green-50 text-[#1B6D24] border-r-4 border-[#1B6D24] transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>payments</span>
            <span className="font-label-md">Financials</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24] transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-label-md">Inventory</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24] transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">agriculture</span>
            <span className="font-label-md">Livestock</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24] transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-label-md">Reports</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24] transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md">Settings</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 border-t border-gray-100 space-y-1">
          <button className="w-full mb-4 bg-primary text-white py-3 px-4 rounded-lg font-label-md flex items-center justify-center gap-2 hover:bg-[#155a1d] transition-all shadow-sm">
            <span className="material-symbols-outlined text-sm">add</span>
            New Transaction
          </button>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors" href="#">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-md">Support</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors" href="#">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-md">Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-[280px] min-h-screen">
        {/* TopNavBar */}
        <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm flex justify-between items-center h-16 px-8">
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 w-96">
            <span className="material-symbols-outlined text-gray-400 mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full" placeholder="Search escrow transactions..." type="text" />
          </div>
          <div className="flex items-center gap-8">
            <nav className="flex gap-6">
              <a className="text-gray-500 hover:text-gray-900 font-label-md" href="#">Overview</a>
              <a className="text-[#1B6D24] font-bold border-b-2 border-[#1B6D24] pb-4 font-label-md" href="#">History</a>
              <a className="text-gray-500 hover:text-gray-900 font-label-md" href="#">Analytics</a>
            </nav>
            <div className="flex items-center gap-4 border-l border-gray-100 pl-8">
              <button className="text-gray-400 hover:text-[#1B6D24] relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
              </button>
              <button className="text-gray-400 hover:text-[#1B6D24]">
                <span className="material-symbols-outlined">chat_bubble</span>
              </button>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="font-label-md text-on-surface">Admin Profile</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Super Admin</p>
                </div>
                <img alt="Admin User Avatar" className="w-10 h-10 rounded-full border-2 border-gray-100 object-cover" data-alt="professional headshot of a middle-aged man with short hair and a clean-shaven face, warm lighting, neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2TBtebUj2AYJuzjNz4OEDl7Fchp2772S1w1-oSewYNfuWneyPda9DHG8x6i2Tn1uzIqkj9Qa-XoLXFgsugLH6tTJwKv357BN9reFceo6nBzQiRQlNeoFwfNMlRixQQdU1g2y8-roeggfxiqW3P9oaFsKPOBityyPdjAdNhTL4M2jXr-Ktkd8RpcyCuYJajvzW-D-Z5lZ-xjCSR7Z4zh2upv6KSxcPYkUK_5N9iO0YmW_wvqRMR9iiuIttl1gANh9rzSajGgOCpt0" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 max-w-[1440px] mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center gap-2 text-gray-400 font-label-sm">
            <a className="hover:text-primary" href="#">Financials</a>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-gray-600">Escrow Management</span>
          </nav>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-h2 text-on-surface">Escrow Management</h2>
              <p className="text-body-sm text-gray-500">Monitor and override secure payment holds across the marketplace.</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:bg-gray-50 transition-all">
                <span className="material-symbols-outlined">filter_list</span>
                Filters
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:bg-gray-50 transition-all">
                <span className="material-symbols-outlined">download</span>
                Export CSV
              </button>
            </div>
          </div>

          {/* Bento Metric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-8">
            <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-[#1B6D24]">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-primary">
                  <span className="material-symbols-outlined text-xs mr-1">trending_up</span>
                  12%
                </span>
              </div>
              <div>
                <p className="text-gray-500 font-label-sm">Total in Escrow</p>
                <h3 className="text-h2 text-primary mt-1">$482,904.50</h3>
                <p className="text-[10px] text-gray-400 mt-2 font-numeric">LAST UPDATED: 2 MINS AGO</p>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined">pending_actions</span>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                  24 Orders
                </span>
              </div>
              <div>
                <p className="text-gray-500 font-label-sm">Pending Payouts</p>
                <h3 className="text-h2 text-blue-700 mt-1">$124,050.00</h3>
                <p className="text-[10px] text-gray-400 mt-2 font-numeric">REQUIRES MANUAL REVIEW: 3</p>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-sm flex flex-col justify-between col-span-1 md:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-500 font-label-sm">Escrow Volume (7 Days)</p>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Released</span>
                  <div className="w-2 h-2 rounded-full bg-gray-200 mt-1.5 ml-2"></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Held</span>
                </div>
              </div>
              <div className="h-24 flex items-end justify-between gap-1">
                <div className="w-full bg-gray-100 rounded-t-sm relative group h-12">
                  <div className="absolute bottom-0 w-full bg-primary/20 rounded-t-sm h-[40%]"></div>
                </div>
                <div className="w-full bg-gray-100 rounded-t-sm relative group h-16">
                  <div className="absolute bottom-0 w-full bg-primary/40 rounded-t-sm h-[60%]"></div>
                </div>
                <div className="w-full bg-gray-100 rounded-t-sm relative group h-20">
                  <div className="absolute bottom-0 w-full bg-primary/60 rounded-t-sm h-[50%]"></div>
                </div>
                <div className="w-full bg-gray-100 rounded-t-sm relative group h-14">
                  <div className="absolute bottom-0 w-full bg-primary/30 rounded-t-sm h-[70%]"></div>
                </div>
                <div className="w-full bg-gray-100 rounded-t-sm relative group h-24">
                  <div className="absolute bottom-0 w-full bg-primary/80 rounded-t-sm h-[90%]"></div>
                </div>
                <div className="w-full bg-gray-100 rounded-t-sm relative group h-18">
                  <div className="absolute bottom-0 w-full bg-primary/50 rounded-t-sm h-[65%]"></div>
                </div>
                <div className="w-full bg-gray-100 rounded-t-sm relative group h-22">
                  <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[85%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Escrow Transactions Table */}
          <div className="bg-white rounded-xl border border-[#EAECF0] shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="font-h3 text-on-surface">Recent Escrow Transactions</h3>
              <div className="flex items-center gap-4">
                <span className="text-body-sm text-gray-500">Showing 1-10 of 154</span>
                <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                  <button className="p-2 hover:bg-gray-100 border-r border-gray-200 text-gray-400">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="p-2 hover:bg-gray-100 text-gray-400">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/80 border-b border-gray-100">
                    <th className="px-6 py-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider">Buyer</th>
                    <th className="px-6 py-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider">Farmer / Vendor</th>
                    <th className="px-6 py-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {/* Row 1 */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-numeric font-medium text-primary">#ORD-2024-8841</span>
                      <p className="text-[10px] text-gray-400">Oct 24, 2023 · 14:20</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-8 h-8 rounded-full" data-alt="close-up portrait of a young man with glasses smiling in a sunlit outdoor urban environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQjP3Db8dN5wTMcOQhWVN2ZTHD71sZlitX8lnmO5PZz-r2faMdJj9ZoYVPxkFFFBR88-o29IK0aD4jb4J2QT-7tefZTwJtzM820NRQwiYK_MPFNgROxYGIRLZPODOFjVocdpv7UmKB8i7yew5O_favmkXgfWzahzoxH0vcjyZC9DBPZ4FXWFiRZJJ-fo236zCRK1eMeKrUQySkEFka5at5q0SOEdoaRhLXnsKBgCaw83GUZh0EHK2VEUj921Sl7U4zFT3NbFJkniY" />
                        <div>
                          <p className="font-label-md text-on-surface">Alex Thompson</p>
                          <p className="text-[10px] text-gray-400">Premium Buyer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#1B6D24]">
                          <span className="material-symbols-outlined text-sm">home_work</span>
                        </div>
                        <div>
                          <p className="font-label-md text-on-surface">Green Valley Co-op</p>
                          <p className="text-[10px] text-gray-400">Verified Seller</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-numeric font-bold text-on-surface">$12,450.00</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 ring-1 ring-amber-100">
                        HELD BY ESCROW
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="bg-[#1B6D24] text-white px-3 py-1.5 rounded-lg text-xs font-label-md hover:bg-[#155a1d] transition-all shadow-sm">
                        Release Payment
                      </button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-numeric font-medium text-primary">#ORD-2024-8842</span>
                      <p className="text-[10px] text-gray-400">Oct 24, 2023 · 15:45</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-8 h-8 rounded-full" data-alt="vibrant portrait of a woman with long wavy hair laughing, natural lighting, blurred greenery in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqmyooba745Fqnls9I77oCfUDr_KQWpEApFEvPJw50y25CKqATk4wzbse3WviUb77Q3VufrBOTyhGEZjNf7lIobgvIAxHNypSxTfkJcSKNrHdPNUyV25CM-z5Rvh2RvTYVDWebl7XVdy2q7aE_Oug9tt3n6WOllUUNBqOj1kvMiNfxPqZw3fYl8z6uFSaZrZGlxnVP5bLUPvW1vy7AQlGrQ3w2EwnGOQN98PRq6wZ-m8zFWTBA5nC5CIon_n8ZHjjFt52PYUfUkCc" />
                        <div>
                          <p className="font-label-md text-on-surface">Sarah Jenkins</p>
                          <p className="text-[10px] text-gray-400">Wholesale Client</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#1B6D24]">
                          <span className="material-symbols-outlined text-sm">agriculture</span>
                        </div>
                        <div>
                          <p className="font-label-md text-on-surface">Sunrise Orchards</p>
                          <p className="text-[10px] text-gray-400">Certified Organic</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-numeric font-bold text-on-surface">$5,200.00</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                        RELEASE PENDING
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="bg-[#1B6D24] text-white px-3 py-1.5 rounded-lg text-xs font-label-md hover:bg-[#155a1d] transition-all shadow-sm">
                        Release Payment
                      </button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-numeric font-medium text-primary">#ORD-2024-8845</span>
                      <p className="text-[10px] text-gray-400">Oct 23, 2023 · 09:12</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-8 h-8 rounded-full" data-alt="headshot of a man with a short beard and friendly expression, soft office lighting, clean professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlGHhWu4gXRPWrywNtWFOx-W9HkvKxxMPBo2tY-ImZ-2ShtxLCrxVWC5AI1jlL62OiKvciLp6iIJra_drfwcNC5_jx_u5KTQXjTlKGB4OmQPjPlWnRwQMGWK0vwl0WS0B9P1RiSbscWS0rZHh1H0s7nbcPj6ZST6-_hAxUu0I1V_dAcOcLm9mPpQ-QRHkZwXABzrDiAR2lni3tQJiTh5fyusL_oE1iBHbX99Ch69NPK1Ulo-m9ir8ynIttokXZ6aKzZTMmPujiCfg" />
                        <div>
                          <p className="font-label-md text-on-surface">Marcus Weber</p>
                          <p className="text-[10px] text-gray-400">Standard Buyer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#1B6D24]">
                          <span className="material-symbols-outlined text-sm">water_drop</span>
                        </div>
                        <div>
                          <p className="font-label-md text-on-surface">HydroPure Systems</p>
                          <p className="text-[10px] text-gray-400">Tech Provider</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-numeric font-bold text-on-surface">$22,100.00</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 ring-1 ring-amber-100">
                        HELD BY ESCROW
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="bg-[#1B6D24] text-white px-3 py-1.5 rounded-lg text-xs font-label-md hover:bg-[#155a1d] transition-all shadow-sm">
                        Release Payment
                      </button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-numeric font-medium text-primary">#ORD-2024-8848</span>
                      <p className="text-[10px] text-gray-400">Oct 23, 2023 · 11:30</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-8 h-8 rounded-full" data-alt="professional portrait of a confident woman in a black blazer smiling, clean studio background with soft overhead light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVx1jCJJVOIAyhD5iDRsEFImrzN-0T9dr93j-xiK6GPYtmxitTul02di_ZF-Ue2mwpLGtIwXCqEqaxGhc9p0-LXWjDOgh78NpBZ0i3mRujsCKMAN8S3hjAZALKy6Yr87MZE4U-ch4mjTupUtEUeTJhalNxdRNenmt75Rmp9gZXgtN7_XrgM1SA2snvRTne2DtIT3L3BHRDtDxkp2p-3bOqXyZSLxCeDcW9MJeYNptBPJaKxPMUd2eTPtCuB8bm0UEeperou3sqHwg" />
                        <div>
                          <p className="font-label-md text-on-surface">Linda Zhang</p>
                          <p className="text-[10px] text-gray-400">Enterprise Buyer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#1B6D24]">
                          <span className="material-symbols-outlined text-sm">token</span>
                        </div>
                        <div>
                          <p className="font-label-md text-on-surface">FertileGround LLC</p>
                          <p className="text-[10px] text-gray-400">Logistics Partner</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-numeric font-bold text-on-surface">$850.75</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-50 text-red-700 ring-1 ring-red-100">
                        DISPUTED
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <button className="bg-white border border-gray-200 text-red-600 px-3 py-1.5 rounded-lg text-xs font-label-md hover:bg-red-50 transition-all">
                        View Dispute
                      </button>
                      <button className="bg-[#1B6D24] text-white px-3 py-1.5 rounded-lg text-xs font-label-md hover:bg-[#155a1d] transition-all shadow-sm">
                        Release Payment
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-gray-50/30 flex items-center justify-between border-t border-gray-100">
              <p className="text-body-sm text-gray-500 italic">Showing results for current billing cycle ending Oct 31, 2024</p>
              <nav className="flex gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white font-label-sm">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-200 text-gray-600 font-label-sm hover:bg-gray-50">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-200 text-gray-600 font-label-sm hover:bg-gray-50">3</button>
                <span className="px-2 self-center text-gray-400">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-200 text-gray-600 font-label-sm hover:bg-gray-50">16</button>
              </nav>
            </div>
          </div>

          {/* Dashboard Alerts / Notifications */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-amber-50 border border-amber-100 p-lg rounded-xl flex gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex shrink-0 items-center justify-center text-amber-700">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div>
                <h4 className="font-label-md text-amber-900">High-Value Transaction Alert</h4>
                <p className="text-body-sm text-amber-800 mt-1">Order #ORD-2024-8902 is currently held for an amount exceeding $50,000. Verification of identity required before release.</p>
                <button className="mt-3 text-amber-900 font-label-sm underline decoration-amber-300 underline-offset-4 hover:decoration-amber-900">Start Verification</button>
              </div>
            </div>
            <div className="bg-green-50 border border-green-100 p-lg rounded-xl flex gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex shrink-0 items-center justify-center text-[#1B6D24]">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <h4 className="font-label-md text-green-900">Escrow Security Active</h4>
                <p className="text-body-sm text-green-800 mt-1">All escrowed funds are backed by our 100% Marketplace Guarantee. Security protocols updated 4 hours ago.</p>
                <button className="mt-3 text-green-900 font-label-sm underline decoration-green-300 underline-offset-4 hover:decoration-green-900">View Audit Logs</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
