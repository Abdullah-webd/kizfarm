"use client"

import React from 'react';

export default function RefundManagementPage() {
  return (
    <div className="bg-surface text-on-surface" style={{fontFamily: "'Inter', sans-serif", backgroundColor: '#f9f9ff'}}>
      {/* Left Side Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-[280px] z-50 bg-white border-r border-gray-100 shadow-[1px_0_3px_0_rgba(0,0,0,0.05)] flex flex-col py-6 px-4">
        <div className="mb-10 px-2 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img alt="KizFarm Logo" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
            <div>
              <h1 className="text-xl font-black tracking-tight text-[#1B6D24]">KizFarm</h1>
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Admin Console</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-3 py-2.5 font-['Inter'] text-sm font-medium rounded-lg text-gray-500 hover:text-[#1B6D24] hover:bg-gray-50 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            Dashboard
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 font-['Inter'] text-sm font-medium rounded-lg bg-green-50 text-[#1B6D24] border-r-4 border-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="payments">payments</span>
            Financials
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 font-['Inter'] text-sm font-medium rounded-lg text-gray-500 hover:text-[#1B6D24] hover:bg-gray-50 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            Inventory
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 font-['Inter'] text-sm font-medium rounded-lg text-gray-500 hover:text-[#1B6D24] hover:bg-gray-50 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
            Livestock
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 font-['Inter'] text-sm font-medium rounded-lg text-gray-500 hover:text-[#1B6D24] hover:bg-gray-50 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
            Reports
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 font-['Inter'] text-sm font-medium rounded-lg text-gray-500 hover:text-[#1B6D24] hover:bg-gray-50 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            Settings
          </a>
        </nav>
        <div className="mt-auto border-t border-gray-100 pt-6 space-y-1">
          <a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-[#1B6D24] transition-colors" href="#">
            <span className="material-symbols-outlined" data-icon="help">help</span>
            Support
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-error transition-colors" href="#">
            <span className="material-symbols-outlined" data-icon="logout">logout</span>
            Logout
          </a>
        </div>
      </aside>

      {/* Top Navigation */}
      <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm flex justify-between items-center h-16 px-8 ml-[280px] w-[calc(100%-280px)]">
        <div className="flex items-center gap-6">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-lg" data-icon="search">search</span>
            <input className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-[#1B6D24]/20 w-80" placeholder="Search orders, users..." type="text" />
          </div>
          <nav className="hidden md:flex gap-8">
            <a className="font-['Inter'] text-sm text-gray-500 hover:text-gray-900" href="#">Overview</a>
            <a className="font-['Inter'] text-sm text-[#1B6D24] font-bold border-b-2 border-[#1B6D24] pb-4 mt-4" href="#">History</a>
            <a className="font-['Inter'] text-sm text-gray-500 hover:text-gray-900" href="#">Analytics</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-full transition-all">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <div className="h-8 w-[1px] bg-gray-100"></div>
          <div className="flex items-center gap-3 pl-2">
            <div className="text-right">
              <p className="text-xs font-bold text-on-surface">Admin Profile</p>
              <p className="text-[10px] text-gray-400">System Administrator</p>
            </div>
            <img alt="Admin User Avatar" className="w-10 h-10 rounded-full object-cover border-2 border-primary-container/20" data-alt="professional headshot of a middle-aged male administrator in a light blue shirt with a clean background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWAD0e4dXoRVl7URYQKovg7R-4hdIqIj5C1NvjGeVtxPME4ewC2FuyGjIE5bKkUvK-x0QSEV-xmNZmaNTNowqLmo0udwtiXjCABmUjjvnEgiD-SdQ_Xs7Z6xRSBVMRfv9UgWHP0xnqtUuO3Re2NGfRuT3TNeZ5tf4fGDIFb3euDnUg3_IPqaVyY2VY8sbwCQR9FU1sFgXt7wCYFdVzjLHPpuuBT27URbZthnrAi7m_Unhd1D5LedclBweQr74o4YXHueei424JKRo" />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="ml-[280px] p-8 max-w-[1440px]">
        <div className="flex justify-between items-end mb-8">
          <div>
            <nav className="flex text-label-sm text-gray-400 mb-2 gap-2">
              <span>Financials</span>
              <span>/</span>
              <span className="text-[#1B6D24]">Refund Management</span>
            </nav>
            <h2 className="font-h1 text-h1 text-on-surface">Refund Requests</h2>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant rounded-lg text-label-md text-secondary hover:bg-gray-50 transition-all">
              <span className="material-symbols-outlined text-md" data-icon="filter_list">filter_list</span>
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1B6D24] text-white rounded-lg text-label-md shadow-md hover:opacity-90 transition-all">
              <span className="material-symbols-outlined text-md" data-icon="download">download</span>
              Export Report
            </button>
          </div>
        </div>

        {/* Asymmetric Layout: Table + Highlighted Detail */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* Requests Table (Left) */}
          <div className="col-span-12 lg:col-span-8 space-y-gutter">
            <div className="bg-white rounded-xl border border-gray-100 shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/30 flex justify-between items-center">
                <h3 className="text-label-md font-bold text-on-surface">Pending Approval (12)</h3>
                <span className="text-xs text-gray-400">Showing last 30 days</span>
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 text-label-sm uppercase font-bold text-gray-400">User</th>
                    <th className="px-6 py-4 text-label-sm uppercase font-bold text-gray-400">Order ID</th>
                    <th className="px-6 py-4 text-label-sm uppercase font-bold text-gray-400">Issue Type</th>
                    <th className="px-6 py-4 text-label-sm uppercase font-bold text-gray-400">Request Date</th>
                    <th className="px-6 py-4 text-label-sm uppercase font-bold text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {/* Active/Selected Row */}
                  <tr className="bg-green-50/30 hover:bg-green-50 transition-colors cursor-pointer border-l-4 border-[#1B6D24]">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700">JS</div>
                        <div>
                          <p className="text-body-sm font-semibold">James Sterling</p>
                          <p className="text-[11px] text-gray-400">james.s@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm">#ORD-2024-8812</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-100 text-orange-700">Damaged Goods</span>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm text-gray-500">Oct 24, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-yellow-100 text-yellow-700">Under Review</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-[10px] font-bold text-purple-700">AM</div>
                        <div>
                          <p className="text-body-sm font-semibold">Anna Murphy</p>
                          <p className="text-[11px] text-gray-400">a.murphy@farmnet.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm">#ORD-2024-8790</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-700">Wrong Item</span>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm text-gray-500">Oct 23, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-600">Pending</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-[10px] font-bold text-teal-700">RK</div>
                        <div>
                          <p className="text-body-sm font-semibold">Robert Kincaid</p>
                          <p className="text-[11px] text-gray-400">r.kincaid@outlook.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm">#ORD-2024-8755</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-100 text-red-700">Missing Parts</span>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm text-gray-500">Oct 22, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-600">Pending</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-[10px] font-bold text-pink-700">LW</div>
                        <div>
                          <p className="text-body-sm font-semibold">Linda White</p>
                          <p className="text-[11px] text-gray-400">linda.w@gmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm">#ORD-2024-8720</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-100 text-orange-700">Damaged Goods</span>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm text-gray-500">Oct 21, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-600">Pending</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/30 flex items-center justify-between">
                <p className="text-body-sm text-gray-500">Showing 4 of 12 requests</p>
                <div className="flex gap-2">
                  <button className="p-2 border rounded hover:bg-white text-gray-400"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                  <button className="p-2 border rounded hover:bg-white text-gray-400"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                </div>
              </div>
            </div>

            {/* Stats Cards (Bento style) */}
            <div className="grid grid-cols-3 gap-gutter">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-label-sm text-gray-400 uppercase font-bold mb-1">Total Refunded</p>
                <h4 className="text-h2 text-[#1B6D24]">$12,450.00</h4>
                <div className="mt-2 flex items-center text-xs text-green-600 font-bold">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  <span>+4.2% from last month</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-label-sm text-gray-400 uppercase font-bold mb-1">Average Time</p>
                <h4 className="text-h2 text-on-surface">1.4 Days</h4>
                <div className="mt-2 flex items-center text-xs text-green-600 font-bold">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span>Within 24hr goal</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-label-sm text-gray-400 uppercase font-bold mb-1">Rejection Rate</p>
                <h4 className="text-h2 text-on-surface">3.8%</h4>
                <div className="mt-2 flex items-center text-xs text-gray-400 font-bold">
                  <span className="material-symbols-outlined text-sm">history</span>
                  <span>Consistent trend</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed View (Right) */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-xl border border-gray-100 shadow-lg sticky top-24 overflow-hidden">
              <div className="p-6 bg-[#1B6D24]/5 border-b border-green-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-label-sm text-[#1B6D24] font-black uppercase tracking-widest">Active Investigation</span>
                    <h3 className="text-h3 text-on-surface mt-1">#ORD-2024-8812</h3>
                  </div>
                  <button className="text-gray-400 hover:text-on-surface"><span className="material-symbols-outlined">more_vert</span></button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <img alt="User image" className="w-10 h-10 rounded-full border-2 border-white object-cover" data-alt="close-up portrait of a woman with dark hair against a blurred natural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNwQrbpLCrPQfpJNbUmcEXK0Qu2RbUlZhtugeSsGlyCsu_SW7yIwnkSh1pWkNHFIUrpOVbO4yNiASQNU2VCfkpbRqTQgk_3X5uIfhXRA2NF0PXXJgzUnXsn5q5UaXiuldG46H5QnUSDSSMjB_lF34yq34655da5xuqKEg6fU1gPWYpMAMa_q-p1EkT9Y9xndA8_JynAUjceCd-52IW9jtjd0Jp9cUCPlg5HZbPG0Yik01HxG4M-Uaa6FpanmuIWbW6PS0TO2BjU_o" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">+2</div>
                  </div>
                  <div>
                    <p className="text-body-sm font-bold">James Sterling</p>
                    <p className="text-[11px] text-gray-500">Premium Farmer Member</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <p className="text-label-sm font-bold text-gray-400 uppercase mb-2">Issue Description</p>
                  <p className="text-body-sm text-on-surface leading-relaxed italic">
                    "The organic fertilizer bags arrived with multiple punctures. Approximately 15% of the content was spilled in the delivery truck. We require a partial refund for the lost materials as per our bulk supply agreement."
                  </p>
                </div>
                <div>
                  <p className="text-label-sm font-bold text-gray-400 uppercase mb-3">Evidence Attached (2)</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                      <img alt="Evidence 1" className="w-full h-24 object-cover transform group-hover:scale-105 transition-transform duration-300" data-alt="close-up of torn white plastic bags filled with granular soil fertilizer spilling out onto a wooden pallet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhcWkJDh8tuldaSFdooQTr41nwQGo7KpsZPsyEPyElXTc6Oma1YTbs4bDrQOKtbNTSmISJA-7U2-frUb5yNMrCnO7Jf-f7kAPbEkdtgwz3Kk6OdLBbqyH2egC98-t7p12xNMRqbdBoSDG6nlBQNLcRVZ8KMad3M1kkJ1AtdY7Hj5A9qkiJH8NqNwE9MKJb9ejy-x5aTAA4p67PflZDq6KJww3m4CmpOP4pfbj1sbeVT2dJaY224My5IuVPBUw1J7pV68lBu5LTs3A" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white">zoom_in</span>
                      </div>
                    </div>
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                      <img alt="Evidence 2" className="w-full h-24 object-cover transform group-hover:scale-105 transition-transform duration-300" data-alt="a signed delivery receipt showing handwritten notes about damage in a warehouse environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnTBQghpoayfCz1kL7OMz9NrfGHnUw_yufTYXAOabChQjk2m_8QrzTiWfJ0k68ToQ75aONKYZf7awpq4IJjTj8rN0E3CQXlO2K5fKiBsNfzKqLJwBVuvWZn1Gzj7aC97jqFm5QqgDzTiU1Y8TkiJS0kF6uCSQUbJCkHF60ur4JMSaKLfO9GU4gs95VLuRlb_enGJQn9obk0705dff4iM8N09EhK-hv6EFhQeREs2KScSw2tRDFvKxVYSj2mtydPSCxj_X0i2KFe4k" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white">zoom_in</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex justify-between text-body-sm">
                    <span className="text-gray-500">Order Total</span>
                    <span className="font-numeric font-bold">$1,240.00</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-gray-500">Requested Refund</span>
                    <span className="font-numeric font-bold text-error">$186.00</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-500" data-icon="info">info</span>
                    <p className="text-[11px] text-blue-700 leading-tight">Farmer has a clean history. 0 previous refunds in last 12 months.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <button className="py-3 px-4 bg-[#1B6D24] text-white rounded-lg font-bold text-label-md hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    Approve
                  </button>
                  <button className="py-3 px-4 bg-white border border-error text-error rounded-lg font-bold text-label-md hover:bg-red-50 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">cancel</span>
                    Reject
                  </button>
                </div>
                <button className="w-full py-2.5 text-secondary text-label-md font-medium hover:underline flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-md">chat_bubble</span>
                  Contact Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
