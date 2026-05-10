"use client"

import React from 'react';

export default function FarmerPayoutHistoryPage() {
  return (
    <div className="text-on-background" style={{backgroundColor: '#fbf9f8', fontFamily: "'Inter', sans-serif"}}>
      {/* Navigation Drawer */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col py-4 gap-2 z-50">
        <div className="px-6 py-4 mb-4 flex items-center gap-3">
          <img alt="KIZ FARM Logo" className="w-8 h-8 rounded" data-alt="minimalist professional logo for an agricultural brand featuring stylized green leaves in a circular motif" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1vgCzToRMfEFvCXL-IMB9fs60_rd3oVPNvQf99bxBmwO4sT2em5RRteb_fETOQQys9RvmUI-eOXetQPbQ1udSNZ0mo0ZlGVeOqQSreuw3xDUdeJpyBp0be2ooEHXhmb7OEzWJZwKpNbjjjBl42F4PNU5PE4Uf2N_oBxtIe3GF2vVPm6X4rNubHd_w7exw8To15ycC979zEg_jC9dAGPn15yBPMitQM3ImSBj-NBJ5V5e-_jLEMeqotmoIAPNZt74J9w0bb2bnKAA" />
          <span className="text-2xl font-black text-[#1B6D24] tracking-tight">KIZ FARM</span>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-gray-600 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="font-label-sm text-label-sm">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-gray-600 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span className="font-label-sm text-label-sm">Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-gray-600 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span className="font-label-sm text-label-sm">Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all bg-green-50 text-[#1B6D24] font-semibold border-r-4 border-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="payments">payments</span>
            <span className="font-label-sm text-label-sm">Earnings</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-gray-600 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="chat">chat</span>
            <span className="font-label-sm text-label-sm">Chat</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-gray-600 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="person">person</span>
            <span className="font-label-sm text-label-sm">Profile</span>
          </a>
        </nav>
        <div className="px-4 mt-auto border-t border-gray-100 pt-4">
          <div className="bg-surface-container-low p-4 rounded-xl">
            <p className="font-label-xs text-label-xs text-on-surface-variant mb-2">FIELD AGENT</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white font-bold">OA</div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface">Oluwaseun A.</p>
                <p className="text-[10px] text-on-surface-variant">Oyo State Sector</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Top AppBar */}
      <header className="fixed top-0 right-0 left-64 h-16 bg-white/90 backdrop-blur-md border-b border-gray-100 z-40 flex items-center justify-between px-8">
        <h1 className="font-headline-md text-headline-md text-[#1B6D24]">Payout History</h1>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 text-gray-500 transition-colors">
            <span className="material-symbols-outlined" data-icon="search">search</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 text-gray-500 transition-colors relative">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
          </button>
          <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1B6D24] text-white rounded-lg font-medium text-sm transition-all active:scale-95">
            <span className="material-symbols-outlined text-sm" data-icon="download">download</span>
            Export CSV
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-64 pt-16 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          {/* Summary Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Total Earnings */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-9xl text-[#1B6D24]" data-icon="payments">payments</span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Total Earnings</p>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">₦4,250,000</h3>
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
                <span className="font-label-xs text-label-xs">+12.5% from last month</span>
              </div>
            </div>

            {/* Pending Payouts */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-9xl text-tertiary" data-icon="schedule">schedule</span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Pending Payouts</p>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">₦185,000</h3>
              <div className="flex items-center gap-2 text-tertiary">
                <span className="material-symbols-outlined text-sm" data-icon="hourglass_empty">hourglass_empty</span>
                <span className="font-label-xs text-label-xs">Next payout in 3 days</span>
              </div>
            </div>

            {/* Last Payout */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-9xl text-[#1B6D24]" data-icon="check_circle">check_circle</span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Last Payout</p>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">₦450,000</h3>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm" data-icon="event">event</span>
                <span className="font-label-xs text-label-xs">Oct 12, 2023</span>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-xl">
            <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface">Recent Transactions</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Viewing your last 10 payout activities</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Filter</button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Date Range</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low border-b border-gray-100">
                    <th className="px-8 py-4 font-label-xs text-label-xs text-on-surface-variant uppercase">Payout ID</th>
                    <th className="px-8 py-4 font-label-xs text-label-xs text-on-surface-variant uppercase">Date</th>
                    <th className="px-8 py-4 font-label-xs text-label-xs text-on-surface-variant uppercase">Amount (₦)</th>
                    <th className="px-8 py-4 font-label-xs text-label-xs text-on-surface-variant uppercase">Reference</th>
                    <th className="px-8 py-4 font-label-xs text-label-xs text-on-surface-variant uppercase">Status</th>
                    <th className="px-8 py-4 font-label-xs text-label-xs text-on-surface-variant uppercase text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {/* Row 1 */}
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="px-8 py-5 font-label-sm text-label-sm text-on-surface">#PO-23941</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Oct 28, 2023</td>
                    <td className="px-8 py-5 font-headline-md text-body-md text-on-surface font-semibold">₦210,000</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Q4 Maize Harvest - Batch A</td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-[#1B6D24] text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B6D24]"></span>
                        PAID
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-on-surface-variant hover:text-[#1B6D24] transition-colors">
                        <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="px-8 py-5 font-label-sm text-label-sm text-on-surface">#PO-23940</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Oct 24, 2023</td>
                    <td className="px-8 py-5 font-headline-md text-body-md text-on-surface font-semibold">₦185,000</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Soybean Bonus Payment</td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                        PENDING
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-on-surface-variant hover:text-[#1B6D24] transition-colors">
                        <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="px-8 py-5 font-label-sm text-label-sm text-on-surface">#PO-23938</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Oct 15, 2023</td>
                    <td className="px-8 py-5 font-headline-md text-body-md text-on-surface font-semibold">₦450,000</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Bulk Grain Settlement</td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-[#1B6D24] text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B6D24]"></span>
                        PAID
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-on-surface-variant hover:text-[#1B6D24] transition-colors">
                        <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="px-8 py-5 font-label-sm text-label-sm text-on-surface">#PO-23935</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Oct 02, 2023</td>
                    <td className="px-8 py-5 font-headline-md text-body-md text-on-surface font-semibold">₦98,000</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Irrigation Subsidy</td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-[#1B6D24] text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B6D24]"></span>
                        PAID
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-on-surface-variant hover:text-[#1B6D24] transition-colors">
                        <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="px-8 py-5 font-label-sm text-label-sm text-on-surface">#PO-23930</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Sep 28, 2023</td>
                    <td className="px-8 py-5 font-headline-md text-body-md text-on-surface font-semibold">₦1,200,000</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Annual Performance Bonus</td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-[#1B6D24] text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B6D24]"></span>
                        PAID
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-on-surface-variant hover:text-[#1B6D24] transition-colors">
                        <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="px-8 py-4 border-t border-gray-50 flex items-center justify-between bg-surface-container-lowest">
              <p className="font-body-md text-label-xs text-on-surface-variant">Showing 1-5 of 42 results</p>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:text-[#1B6D24] hover:bg-gray-50 transition-all">
                  <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1B6D24] text-white text-xs font-bold">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-xs font-medium">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-xs font-medium">3</button>
                <span className="px-1 text-gray-400">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-xs font-medium">9</button>
                <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:text-[#1B6D24] hover:bg-gray-50 transition-all">
                  <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Visual Insight / Support Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-xl">
            <div className="bg-primary-container rounded-2xl p-8 text-white flex items-center gap-8 relative overflow-hidden">
              <div className="z-10 flex-1">
                <h4 className="font-headline-md text-headline-md mb-2">Automate Your Payouts</h4>
                <p className="font-body-md text-on-primary-container mb-6 opacity-90">Link your bank account to receive automatic daily settlements for every successful sale.</p>
                <button className="px-6 py-3 bg-white text-[#1B6D24] rounded-lg font-bold text-sm shadow-sm hover:bg-gray-50 transition-all active:scale-95">Link Bank Account</button>
              </div>
              <div className="hidden lg:block z-10">
                <img alt="App interface" className="w-48 h-auto drop-shadow-2xl rounded-lg" data-alt="close-up of a high-tech farming management app showing financial charts on a smartphone screen against a soft green background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQeyQmwBWqKo-S8Fkd-nwIoFibSjoAsSqUEWFJhmQzJJqoCflIzi8FnPEC7di3u09nTOki9BTOIqbg8GDghzl-fl4AUEGOM8_w2PIw_S-U6_29XayWnx4TcEOB9yPZkAdg1gmxVEZunng0apnZdHDi9-ioYRLQJNhmV8d4UIoZbOkdtnu8rwwko-sr9RM7Lb57pDiSyvax44qqVjTSJGzKfVde4wDAqtQ8O_bSy4vuBcWmbaP8tPKaEczhPtuYB_GKt-8G5D8qBEs" />
              </div>
              {/* Decorative element */}
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1B6D24]" data-icon="help_center">help_center</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface">Payment Support</h4>
                </div>
                <p className="font-body-md text-on-surface-variant mb-6">Having trouble with a specific payout? Our finance team is available 24/7 to help you resolve any discrepancies.</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" data-alt="professional headshot of a female finance support agent with a friendly expression" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfaTTMjK8kbYqvf_xAScrSuW5Z19CMCyG62Wy9ZBFS8PRCK_GVt8Mex5sSv78SEcAAHJWnNonfPfJwMteBCJGOZl2hkVK7sDAAFmCmIpPUWBUjQjOQIEAldp1ZKAS4OIWsZDBLFBjvZ7Qw1PnzmIkLLomFMWObTcOJWMCaTnkZ5VPNHJb5MoRSLJgoJm8HsTmnD3D2Ijb8HFjzlqhBAOI8zFQGvbFdIbUcWzxqewIMw7PzqQRGGHOQT4dlC03eFNlt7eQ6jedRZa4')"}}></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300" data-alt="professional headshot of a male customer success representative wearing a headset" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGYhpyKID3JqUoCEeUoGmpHr8xlc9p5iCG2ZAjrHOMSyb7qmkEv5tpllDZQPEICrB84v2BtIRD3vVFUtSJPrEFw2Ty8c2-Y1DZqeqGsJThH-m4sCaMODjAI5llqF5KdFhauKBtHoomYsrEEBstGrp2J_gX7QNV0ge3A3nGY8w6Ypdpy9RH1Xia2tD5ORNON_db0P8CZQbcXwIDgXsGcD8-gxsTyRpap6pU8VHQgcv0hD6Yuy_H9Qys9gA8-0yJrBNj4zZOZ4SWZqk')"}}></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#1B6D24] flex items-center justify-center text-[10px] text-white font-bold">+3</div>
                </div>
                <button className="text-[#1B6D24] font-bold text-sm hover:underline">Contact Support Team</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAB for quick action */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#1B6D24] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined" data-icon="add" style={{fontVariationSettings: "'FILL' 0, 'wght' 600"}}>add</span>
      </button>
    </div>
  );
}
