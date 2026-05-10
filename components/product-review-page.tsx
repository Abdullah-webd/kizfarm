"use client"

import React from 'react';

export default function ProductReviewPage() {
  return (
    <div className="bg-background text-on-background antialiased" style={{fontFamily: "'Inter', sans-serif"}}>
      {/* SideNavBar Shell */}
      <aside className="fixed left-0 top-0 h-full w-[280px] border-r bg-white border-slate-200 shadow-sm z-50">
        <div className="flex flex-col h-full p-4 space-y-2">
          <div className="flex items-center gap-3 px-4 py-6">
            <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>agriculture</span>
            </div>
            <div>
              <h1 className="text-xl font-black text-emerald-900 tracking-tight">AgriMarket</h1>
              <p className="text-[10px] uppercase tracking-widest text-secondary font-bold opacity-70">Admin Dashboard</p>
            </div>
          </div>
          <nav className="flex-1 space-y-1">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-inter text-sm antialiased">Dashboard</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">group</span>
              <span className="font-inter text-sm antialiased">Users</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">agriculture</span>
              <span className="font-inter text-sm antialiased">Farmers</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-800 font-semibold transition-all duration-200" href="#">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>inventory_2</span>
              <span className="font-inter text-sm antialiased">Products</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="font-inter text-sm antialiased">Orders</span>
            </a>
          </nav>
          <div className="pt-4 border-t border-slate-100 space-y-1">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">help</span>
              <span className="font-inter text-sm antialiased">Support</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-inter text-sm antialiased">Settings</span>
            </a>
          </div>
        </div>
      </aside>

      {/* TopNavBar Shell */}
      <header className="fixed top-0 right-0 left-[280px] h-16 border-b z-40 bg-white/80 backdrop-blur-md border-slate-200">
        <div className="flex items-center justify-between px-8 w-full h-full">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-96">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all" placeholder="Search products, farmers, or listings..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-slate-500 hover:text-emerald-700 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-6 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">Admin Console</p>
                <p className="text-[10px] text-slate-500">System Administrator</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-100">
                <img className="w-full h-full object-cover" data-alt="professional portrait of a system administrator with a friendly expression in a modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxoOY_rafvkbS_e8kbyRmDp-bJPkQfS6YukkAV6G_JBw2JjstQtdf9nz0tGwO3bCssT2noOmPLDqIsX8zwspSRfWTDj_Tr2Im35Z3rei15sfe3FmPjDXaP4MYNTS4m9wVMyaLKJS6FM_xplRb313HttCCoO6G_qmNQEaDGg6eLF9Qbkmg1tZeEidkjP2huxkaX_G21rQ67-4aL3PZtSbV1esRTNv4YBfezF3-UAt5_M9CEjr3zXhMTUpbXs5zN5cLgFJVMywlQ1lQ" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-[280px] pt-16 min-h-screen">
        <div className="p-8 max-w-[1440px] mx-auto space-y-8">
          {/* Breadcrumbs & Header Actions */}
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400 font-label-sm text-label-sm">
                <span>Inventory</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span>Product Review</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-emerald-800">PRD-8821</span>
              </div>
              <h2 className="font-h1 text-h1 text-on-background">Review Listing: Organic Honeycrisp Apples</h2>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-600 font-label-md text-label-md bg-white hover:bg-slate-50 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-error">flag</span>
                Flag for Review
              </button>
              <button className="px-5 py-2.5 rounded-lg border border-error bg-white text-error font-label-md text-label-md hover:bg-error/5 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">delete_outline</span>
                Remove Product
              </button>
              <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-label-md text-label-md shadow-sm hover:opacity-90 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Approve Product
              </button>
            </div>
          </div>

          {/* Bento Grid Layout for Review Content */}
          <div className="grid grid-cols-12 gap-gutter">
            {/* Main Product Image & Visuals (Span 8) */}
            <div className="col-span-8 space-y-gutter">
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="relative aspect-video w-full bg-slate-50">
                  <img className="w-full h-full object-cover" data-alt="high-quality close-up of vibrant red honeycrisp apples in a wooden crate with soft morning sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdkh-GGF2cmx5A7hIF76RtRhT-WJUS3MVLJVOpx9sacZZEHpgsfB3BfHKdZneImDutI_h6mOU1AjY9c7NEW751AE7nmO-W4Ff7XJTfR2-LzYHVe6eBSiJbF97omYWNi14gwKRlmHtoFLBpAiq3bcIwIt54f--VXiYL_DxWtgGq_rczJPaSHpbx5DP6Ur-6ijw-KX77aZSPa9GXR_9_ucK9V_7dDQQpkhLnW4i25UJ1X7t2TJOJuqMAlSKXOawrwF736Cx7HNKprPU" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">Pending Approval</span>
                    <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">Grade A+</span>
                  </div>
                </div>
                <div className="p-lg grid grid-cols-4 gap-4">
                  <div className="aspect-square rounded-lg border-2 border-primary-container overflow-hidden">
                    <img className="w-full h-full object-cover" data-alt="close-up detail of organic apple skin showing natural texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClJZCbp5dt7sr3Ru9ql-STIFTqFNtDlaEuvokjIKkrVBemrB0ZfnTcQRu1rBZVM7GIcKNuz582ZAuBsfS2BOV0IXmLbEph4RDevC-GbefcbO0JjUhIfm8dQzWbCngeS0z7CBfvs_BVp62pd5ywbKwd30zLJ3_FHo-D9J_vEaq686wbMPG370G3gYrR5oFtMZnqnVdrFSiIEjiGwI5Jf5kHaGt6JljgrMkWlIoisYIDtHDJDwW7QQIypvq73KjkVSCJRZzKMdwyeFo" />
                  </div>
                  <div className="aspect-square rounded-lg border border-slate-100 overflow-hidden hover:border-primary-container cursor-pointer transition-colors">
                    <img className="w-full h-full object-cover" data-alt="a crate of fresh red apples in an orchard setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1LleQsjaAcKJlC71HkaRINn7J-CDsJ8o3F7IfdaOd97SJMDqG1NrWptGebTZ2RYA6mNQRwqjfE4W927dK2mCRwzpOUbwHlLe2iCMUyXxMeYXYn6mAUQGoVkOCxA84AhafWgmBDbF8pDVCGAL3JfKeCn-OAXauKZ8uL2he04_v0CaO6Ugv6W0lx_uz1zo9MuV42cNS2Z5YIFslXjOglZTAfrdSgGcrBr7b7qaQ5EXEqDH-kPbJ_yLE3TtfeUFcpiOKIz7jZyYvDO0" />
                  </div>
                  <div className="aspect-square rounded-lg border border-slate-100 overflow-hidden hover:border-primary-container cursor-pointer transition-colors">
                    <img className="w-full h-full object-cover" data-alt="overhead view of freshly harvested apples arranged neatly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrC7Be6d8byh_Ivr8VWw-QgKxqfyUZgsQUsAvxEXXyLE4fW3toue4kpHGqu0gWgd_yiYyhaoxgH-PGDE946g70p_Px7LGZAIuIXxBQnkMpFcfkXE0JNxdysNpUuTH5HD3Zdt_FEiF5TGsAREMml39N_uJKo9AuAF6RHoAp9W0tdyxNCn2tcgeMbZAZdh00_lwaKHQgBm5Qi4sg4Mr4LtVmDnPiM0a-3o8_vY3ngAibsaV8lC7pOJFSnoQFgC0ZwbnL86oH503lcIY" />
                  </div>
                  <div className="aspect-square rounded-lg bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-slate-400 group hover:bg-slate-100 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                    <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">View All (12)</span>
                  </div>
                </div>
              </div>

              {/* Description & Specification Details */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-lg">
                <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                  <h3 className="font-h3 text-h3 text-on-background flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">description</span>
                    Product Description
                  </h3>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Last Updated: Oct 24, 2023</span>
                </div>
                <div className="space-y-4">
                  <p className="font-body-md text-body-md text-slate-600 leading-relaxed">
                    Our Honeycrisp apples are grown in the mineral-rich soil of the Columbia River Basin. These apples are characterized by their exceptionally crisp texture and a perfect balance of sweet and tart flavors. Harvested at peak ripeness, they undergo a rigorous quality check to ensure they meet "Grade A" standards for both direct retail and wholesale distribution.
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-4">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">eco</span>
                        </div>
                        <div>
                          <p className="text-label-sm font-label-sm text-slate-400 uppercase tracking-tighter">Agricultural Category</p>
                          <p className="text-body-md font-body-md font-semibold">Pome Fruits / Organic</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">scale</span>
                        </div>
                        <div>
                          <p className="text-label-sm font-label-sm text-slate-400 uppercase tracking-tighter">Inventory Stock</p>
                          <p className="text-body-md font-body-md font-semibold">4,500 lbs (Bulk)</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">payments</span>
                        </div>
                        <div>
                          <p className="text-label-sm font-label-sm text-slate-400 uppercase tracking-tighter">Price Point</p>
                          <p className="text-body-md font-body-md font-semibold">$2.45 / lb (Wholesale)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">verified_user</span>
                        </div>
                        <div>
                          <p className="text-label-sm font-label-sm text-slate-400 uppercase tracking-tighter">Certification</p>
                          <p className="text-body-md font-body-md font-semibold">USDA Organic Certified</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Panel (Span 4) */}
            <div className="col-span-4 space-y-gutter">
              {/* Farmer Information Card */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="p-lg bg-slate-50 border-b border-slate-100 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">agriculture</span>
                  <h3 className="font-h3 text-h3 text-on-background">Farmer Profile</h3>
                </div>
                <div className="p-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden ring-4 ring-emerald-50">
                      <img className="w-full h-full object-cover" data-alt="portrait of an experienced farmer in a sun hat with a weathered kind face in front of a green field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOas17qkDrYThhHFJmg3w--w0A9DZF9pIL3W_4usIXYFcCQIBGa0s12n7dst428L_erzkupqBqzs4qc2PfAE7nI8p2gT1kMJ9bByq8Kqa4esR6jvLeyzRlXWHKZ-kh2EQp_OAXLpzUpNP807Ler2rfmHRrxfwUbn9hDE-vkKfNoGx0ZhxP40WWYpqEOyECblcHSd04JV7mHVqA9-_UKCnOBKm_Aq1JhaNpKOaNUAtHwh7K0meDIJE0wKCslGo50WeUeQphOnoK8vc" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-background text-body-md">Silas Thorne</h4>
                      <p className="text-body-sm text-slate-500">Green Valley Orchards</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-[14px] text-amber-500" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="text-xs font-bold text-slate-700">4.9</span>
                        <span className="text-[10px] text-slate-400 font-medium">(128 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-slate-50">
                      <span className="text-body-sm text-slate-500">Location</span>
                      <span className="text-body-sm font-semibold text-on-background">Yakima, WA</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-50">
                      <span className="text-body-sm text-slate-500">Total Listings</span>
                      <span className="text-body-sm font-semibold text-on-background">14 Active</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-50">
                      <span className="text-body-sm text-slate-500">Member Since</span>
                      <span className="text-body-sm font-semibold text-on-background">Mar 2021</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-body-sm text-slate-500">KYC Status</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Verified</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-2.5 rounded-lg border border-slate-200 text-primary font-label-md text-label-md hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">person_search</span>
                    View Full Farmer History
                  </button>
                </div>
              </div>

              {/* Risk Analysis / Compliance Card */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-lg">
                <h3 className="font-h3 text-h3 text-on-background mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-600">security</span>
                  Vet Analysis
                </h3>
                <div className="space-y-4">
                  <div className="p-3 bg-slate-50 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">AI Image Scan</p>
                      <p className="text-xs font-semibold text-slate-700">98% Authentic Match</p>
                    </div>
                    <span className="material-symbols-outlined text-emerald-600 text-sm">verified</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Price Anomaly</p>
                      <p className="text-xs font-semibold text-slate-700">Within Market Range</p>
                    </div>
                    <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Cert Expiry</p>
                      <p className="text-xs font-semibold text-slate-700">Expires in 45 Days</p>
                    </div>
                    <span className="material-symbols-outlined text-amber-600 text-sm">warning</span>
                  </div>
                </div>
              </div>

              {/* Admin Notes Section */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-lg">
                <h3 className="font-label-md text-label-md text-slate-900 mb-3">Internal Admin Notes</h3>
                <textarea className="w-full min-h-[100px] border border-slate-200 rounded-lg p-3 text-body-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" placeholder="Add a private note about this listing..."></textarea>
                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg border-l-4 border-slate-300">
                    <p className="text-[11px] font-bold text-slate-400">Oct 25, 14:20 - Admin (Sarah K.)</p>
                    <p className="text-xs text-slate-600 italic">Farmer submitted updated USDA certificate via email. Needs attachment to record.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Audit Trail Table */}
          <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-lg border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-h3 text-h3 text-on-background">Listing Lifecycle History</h3>
              <button className="text-primary text-label-md font-label-md flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">history</span>
                Full Audit Log
              </button>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-400 uppercase tracking-widest">Event</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-400 uppercase tracking-widest">User / Actor</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-400 uppercase tracking-widest">Status Change</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-400 uppercase tracking-widest text-right">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-[#F9FAFB] transition-colors">
                  <td className="px-lg py-4 text-body-sm font-semibold text-slate-700">Listing Submission</td>
                  <td className="px-lg py-4 text-body-sm text-slate-500">Silas Thorne (Farmer)</td>
                  <td className="px-lg py-4">
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">New Entry</span>
                  </td>
                  <td className="px-lg py-4 text-body-sm text-slate-400 text-right font-numeric">Oct 24, 2023 - 09:12 AM</td>
                </tr>
                <tr className="hover:bg-[#F9FAFB] transition-colors">
                  <td className="px-lg py-4 text-body-sm font-semibold text-slate-700">Automated Compliance Check</td>
                  <td className="px-lg py-4 text-body-sm text-slate-500">System AI (Validator v2)</td>
                  <td className="px-lg py-4">
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Passed</span>
                  </td>
                  <td className="px-lg py-4 text-body-sm text-slate-400 text-right font-numeric">Oct 24, 2023 - 09:13 AM</td>
                </tr>
                <tr className="hover:bg-[#F9FAFB] transition-colors">
                  <td className="px-lg py-4 text-body-sm font-semibold text-slate-700">Image Verification</td>
                  <td className="px-lg py-4 text-body-sm text-slate-500">System AI (Validator v2)</td>
                  <td className="px-lg py-4">
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Verified</span>
                  </td>
                  <td className="px-lg py-4 text-body-sm text-slate-400 text-right font-numeric">Oct 24, 2023 - 09:15 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
