"use client"

import React from 'react';

export default function AllFarmersListPage() {
  return (
    <div className="bg-background text-on-background antialiased" style={{fontFamily: "'Inter', sans-serif", backgroundColor: '#f9f9ff'}}>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-[280px] border-r bg-white border-slate-200 shadow-sm flex flex-col p-4 space-y-2 z-50">
        <div className="px-4 py-6">
          <h1 className="text-xl font-black text-emerald-900 tracking-tight">AgriMarket</h1>
          <p className="text-xs font-label-sm text-slate-500 uppercase tracking-widest mt-1">Admin Dashboard</p>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="font-label-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="group">group</span>
            <span className="font-label-md">Users</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-800 font-semibold transition-all duration-200 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="agriculture" style={{fontVariationSettings: "'FILL' 1"}}>agriculture</span>
            <span className="font-label-md">Farmers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span className="font-label-md">Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span className="font-label-md">Orders</span>
          </a>
        </nav>
        <div className="pt-4 border-t border-slate-100 space-y-1">
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="help">help</span>
            <span className="font-label-md">Support</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="font-label-md">Settings</span>
          </a>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 right-0 left-[280px] h-16 border-b bg-white/80 backdrop-blur-md border-slate-200 z-40">
        <div className="flex items-center justify-between px-8 w-full h-full">
          <div className="flex items-center flex-1">
            <div className="relative w-full max-w-md group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" data-icon="search">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 transition-all outline-none" placeholder="Search farmers, farms, or locations..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-500 hover:text-emerald-700 transition-colors">
                <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
              </button>
              <button className="p-2 text-slate-500 hover:text-emerald-700 transition-colors">
                <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
              </button>
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right">
                <p className="text-xs font-bold text-slate-900 leading-tight">Admin Console</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">System Admin</p>
              </div>
              <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" data-alt="professional male admin profile picture in a soft lit office setting with modern aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeE5AgN-idmLG-49IgteXk-J-8C3u32ZrR6dEKquPDpJk81tvuIWrQaGVqUXYBqCqq7tfIUgj8mq7zWK3c_mQlZTRrLdvfOJHyPNiCZBORboeNYn2FJ5q52nRzYwaTBt4Kp7m-FRCBCLOx3Ac4WVe9O5dM6HVCnWMV0HNX5KfX21lE5dJktqRvPRkxcvC0NBUxES2GcWmH0OzDBahtoD1UlA1JexhytBE6LJVsLUxc2mHBUm_2TGlBKv7PxHHU7J3LTJ5nRQ6K7Jk" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-[280px] pt-16 min-h-screen">
        <div className="p-margin max-w-container-max mx-auto">
          {/* Breadcrumbs & Actions */}
          <div className="flex items-center justify-between mb-lg">
            <div>
              <nav className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                <span>Admin</span>
                <span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
                <span className="text-emerald-700 font-medium">Farmers</span>
              </nav>
              <h2 className="font-h1 text-h1 text-slate-900">Farmers Management</h2>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-label-md shadow-sm hover:bg-slate-50 transition-all">
                <span className="material-symbols-outlined text-[20px]" data-icon="file_download">file_download</span>
                Export CSV
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-label-md shadow-sm hover:opacity-90 transition-all active:scale-95">
                <span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                Add New Farmer
              </button>
            </div>
          </div>

          {/* Stats Overview - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-lg">
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <span className="material-symbols-outlined text-emerald-700" data-icon="groups">groups</span>
                </div>
                <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px] font-bold">
                  <span className="material-symbols-outlined text-[12px]" data-icon="trending_up">trending_up</span> 12%
                </span>
              </div>
              <div className="mt-4">
                <p className="text-slate-500 font-label-sm uppercase tracking-wider">Total Farmers</p>
                <p className="text-h2 font-h2 text-slate-900">2,842</p>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <span className="material-symbols-outlined text-blue-700" data-icon="verified">verified</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-slate-500 font-label-sm uppercase tracking-wider">Verified</p>
                <p className="text-h2 font-h2 text-slate-900">2,410</p>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-amber-50 rounded-lg">
                  <span className="material-symbols-outlined text-amber-700" data-icon="pending_actions">pending_actions</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-slate-500 font-label-sm uppercase tracking-wider">Pending</p>
                <p className="text-h2 font-h2 text-slate-900">384</p>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-rose-50 rounded-lg">
                  <span className="material-symbols-outlined text-rose-700" data-icon="error">error</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-slate-500 font-label-sm uppercase tracking-wider">Rejected</p>
                <p className="text-h2 font-h2 text-slate-900">48</p>
              </div>
            </div>
          </div>

          {/* Filters Section */}
          <div className="bg-white border border-outline-variant rounded-t-xl p-md flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 font-label-md hover:bg-slate-100 transition-all">
                <span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
                Filters
              </button>
              <div className="h-6 w-px bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Status:</span>
                <select className="text-xs border-none bg-emerald-50 text-emerald-800 rounded-full py-1 pl-2 pr-8 font-bold focus:ring-0">
                  <option>All Status</option>
                  <option>Verified</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </select>
              </div>
            </div>
            <div className="text-sm text-slate-500">
              Showing <span className="font-bold text-slate-900">1-10</span> of 2,842 farmers
            </div>
          </div>

          {/* Farmers Table */}
          <div className="bg-white border-x border-b border-outline-variant rounded-b-xl shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-y border-slate-200">
                <tr>
                  <th className="px-lg py-3 text-[12px] font-bold text-slate-500 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <input className="rounded text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                      Farmer Name
                    </div>
                  </th>
                  <th className="px-lg py-3 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Farm Name</th>
                  <th className="px-lg py-3 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Location</th>
                  <th className="px-lg py-3 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Verification Status</th>
                  <th className="px-lg py-3 text-[12px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <input className="rounded text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                      <img className="w-10 h-10 rounded-full object-cover" data-alt="portrait of a weather-beaten farmer in a straw hat with a warm smile and blue overalls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4hi2YESVSVme-HXrhvnlpYBrGSAAdZHBeh5M8YAuOmcX2j2OXvURYdisYlMAjN3cMLcQmnzEfDKNLd-Jr6azJElB2_4PYCxj3P8QvqrTSPX7sbw_vwNmtDJftSEtMUPBm-blq0K5_euGZHDslB2bltI5DoU-ezNbrPRouBLU6TA2rzLJtBsOp5GG74aRWco5KYv-4vzvAHEbnSNMQJd-3xVda_mAHuGNqJc2xZFrPAJLdi4UUvWPrIks5NKwNfUhilFpJfRRlTu0" />
                      <div>
                        <p className="font-label-md text-slate-900">Benjamin Cooper</p>
                        <p className="text-xs text-slate-500">ben.cooper@farmmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <p className="text-body-sm text-slate-700">Green Valley Orchards</p>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1 text-body-sm text-slate-600">
                      <span className="material-symbols-outlined text-[16px] text-slate-400" data-icon="location_on">location_on</span>
                      Oregon, USA
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Verified
                    </span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-700 font-bold text-xs hover:bg-emerald-50 transition-colors">
                      View Profile
                    </button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <input className="rounded text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                      <img className="w-10 h-10 rounded-full object-cover" data-alt="close-up of a middle aged female farmer looking into the distance with a field in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiwwQ0j31EP6f-vg_lcpInWlHtHpUO3Y_OEzpxZjTix7Th5IW1LKlROGBgvT1JrtDzsdZVxm6XPEWhCsS75-8owOJjPMdeCEtpEubi-Kd68qnin7-AU8UnjmJJFhRczIMUW5rEarIvqLLObeq8ayvWcAbVaDVR2NZ8rYSjESEO7u4Y73vvdFh4VkEhFOF0RJ_NE-K39ONsdWSoaIZJhYA9jBY2gNxuZ7Qdd4inHT-LyYV53FHNgWvoyNzvE7ata4EhZJTUA98K8j4" />
                      <div>
                        <p className="font-label-md text-slate-900">Elena Rodriguez</p>
                        <p className="text-xs text-slate-500">elena.r@agriflow.co</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <p className="text-body-sm text-slate-700">Sun-Drenched Plains</p>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1 text-body-sm text-slate-600">
                      <span className="material-symbols-outlined text-[16px] text-slate-400" data-icon="location_on">location_on</span>
                      Valencia, Spain
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/50 text-amber-700 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                      Pending
                    </span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-700 font-bold text-xs hover:bg-emerald-50 transition-colors">
                      View Profile
                    </button>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <input className="rounded text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <span className="material-symbols-outlined" data-icon="person">person</span>
                      </div>
                      <div>
                        <p className="font-label-md text-slate-900">Marcus Thorne</p>
                        <p className="text-xs text-slate-500">m.thorne@skyfarms.io</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <p className="text-body-sm text-slate-700">Highland Cattle Co.</p>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1 text-body-sm text-slate-600">
                      <span className="material-symbols-outlined text-[16px] text-slate-400" data-icon="location_on">location_on</span>
                      Scotland, UK
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Verified
                    </span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-700 font-bold text-xs hover:bg-emerald-50 transition-colors">
                      View Profile
                    </button>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <input className="rounded text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                      <img className="w-10 h-10 rounded-full object-cover" data-alt="young male farmer in a modern greenhouse using a tablet to monitor plants with natural sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE2ru1If37WKusu5tUeVzjcMDyj3VG3MY5Z74TQxFo2pSaG0JHn4YZ-wb_37YQ1IzgxyuTRNm-xbJCChVyesME7FYNVSm0wJPgB6iLTogYIxSHdquSkL798-_ba-waZb0nZYjSxMuPjiu2ruh4PqLoJPhOWo4b0q37ZMaw7TMDqOSMf52AgoZZK6OyxTGvAEia_k6Y-r58FnwMi16wcVVGc6rOGfxbjaJW0HF3EKA6W9IeQdVctfka42jVYls4tmvjxU-mNFTTKNQ" />
                      <div>
                        <p className="font-label-md text-slate-900">Li Wei</p>
                        <p className="text-xs text-slate-500">liwei@technogrow.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <p className="text-body-sm text-slate-700">Digital Hydroponics</p>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1 text-body-sm text-slate-600">
                      <span className="material-symbols-outlined text-[16px] text-slate-400" data-icon="location_on">location_on</span>
                      Suzhou, China
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/50 text-rose-700 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                      Rejected
                    </span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-700 font-bold text-xs hover:bg-emerald-50 transition-colors">
                      View Profile
                    </button>
                  </td>
                </tr>
                {/* Row 5 */}
                <tr className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <input className="rounded text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                      <img className="w-10 h-10 rounded-full object-cover" data-alt="a confident african woman farmer standing in a field of sunflowers during sunset with a beautiful golden sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6arzbFWnpa5muTQ42JJSF2S-lijfJaacqNls-QsgyrBaUu2WHfJrGeNZnuf-HOdEIUqnEeREVmM-7oSNbNuHZd-W78YSlOlK6krUalz5ah5ZGh_fDjJ6NSJgWzDzTPaOKW_hJE8rDoNwMUHlznw5UVUm43FBPpdOiE4LTAPXIFCay87zE3kLTV_wNtvnD-M-62g7XDl5V639wta9P9Rf-x1dsvAQBtbjrZi216xB5up2F4ySGch1utsf1BMpbQgKKbW__8LexYIo" />
                      <div>
                        <p className="font-label-md text-slate-900">Amara Okafor</p>
                        <p className="text-xs text-slate-500">amara.o@harvestlink.org</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <p className="text-body-sm text-slate-700">Sunrise Harvests</p>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1 text-body-sm text-slate-600">
                      <span className="material-symbols-outlined text-[16px] text-slate-400" data-icon="location_on">location_on</span>
                      Enugu, Nigeria
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Verified
                    </span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-700 font-bold text-xs hover:bg-emerald-50 transition-colors">
                      View Profile
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pagination */}
            <div className="px-lg py-4 flex items-center justify-between bg-slate-50/30">
              <button className="flex items-center gap-1 text-slate-500 hover:text-emerald-700 transition-colors disabled:opacity-50" disabled>
                <span className="material-symbols-outlined text-[20px]" data-icon="chevron_left">chevron_left</span>
                Previous
              </button>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white font-bold text-xs">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded text-slate-600 hover:bg-slate-100 font-bold text-xs">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded text-slate-600 hover:bg-slate-100 font-bold text-xs">3</button>
                <span className="px-1 text-slate-400">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded text-slate-600 hover:bg-slate-100 font-bold text-xs">284</button>
              </div>
              <button className="flex items-center gap-1 text-slate-500 hover:text-emerald-700 transition-colors">
                Next
                <span className="material-symbols-outlined text-[20px]" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
