"use client"

import React from 'react';

export default function AllProductsListPage() {
  return (
    <div className="bg-background text-on-background antialiased overflow-x-hidden" style={{fontFamily: "'Inter', sans-serif"}}>
      {/* SideNavBar Shell */}
      <aside className="fixed left-0 top-0 h-full w-[280px] border-r border-slate-200 bg-white shadow-sm z-50">
        <div className="flex flex-col h-full p-4 space-y-2">
          <div className="px-4 py-6 mb-4">
            <h1 className="text-xl font-black text-emerald-900 tracking-tight">AgriMarket</h1>
            <p className="font-inter text-sm antialiased text-slate-500">Admin Dashboard</p>
          </div>
          <nav className="flex-1 space-y-1">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
              <span className="font-inter text-sm antialiased">Dashboard</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="group">group</span>
              <span className="font-inter text-sm antialiased">Users</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
              <span className="font-inter text-sm antialiased">Farmers</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-800 font-semibold transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
              <span className="font-inter text-sm antialiased">Products</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
              <span className="font-inter text-sm antialiased">Orders</span>
            </a>
          </nav>
          <div className="pt-4 border-t border-slate-100 space-y-1">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="help">help</span>
              <span className="font-inter text-sm antialiased">Support</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
              <span className="font-inter text-sm antialiased">Settings</span>
            </a>
          </div>
        </div>
      </aside>

      {/* TopNavBar Shell */}
      <header className="fixed top-0 right-0 left-[280px] h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md z-40">
        <div className="flex items-center justify-between px-8 w-full h-full">
          <div className="flex items-center gap-6 flex-1">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" data-icon="search">search</span>
              <input className="w-full bg-slate-100 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="Search marketplace listings..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:text-emerald-700 transition-colors">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <button className="p-2 text-slate-500 hover:text-emerald-700 transition-colors">
              <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-label-sm text-slate-900">Admin User</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Super Admin</p>
              </div>
              <img alt="User Profile Avatar" className="w-10 h-10 rounded-full border border-slate-200 object-cover" data-alt="Close-up portrait of a professional man in a clean office setting, soft natural lighting, high-end photography style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzVy7xVwbuX3Xngvs__vYTSXLs-SCdkaDQg4xh8KrmfqAK86rp0P-KH7dB3gW-M3JtyBHNtrtohuq4URHsSowb4sHCxr-E1AT1TrKdFRnhddotdkc5ehiJL8flcYrP5ZoJqDVQfDCp-iDkIp3PKEBg44h-OZJflL1n2gkTFo6CTb4qL6c5kSgLVxjKMBaXqeU2VJWh284NZJwZxyoYPU1_PlCYRPTaI-9sn-dCQwEgdg3ZUUlPUAzBtKzYPa9V4NBCIUWx5_-ClFw" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pl-[280px] pt-16 min-h-screen">
        <div className="p-margin max-w-container-max mx-auto">
          {/* Breadcrumbs & Header Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <nav className="flex items-center gap-2 mb-2">
                <span className="text-slate-400 font-label-sm">Marketplace</span>
                <span className="material-symbols-outlined text-slate-300 text-sm" data-icon="chevron_right">chevron_right</span>
                <span className="text-emerald-800 font-label-sm">All Products</span>
              </nav>
              <h2 className="font-h1 text-on-background">Inventory Management</h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant text-primary rounded-lg font-label-md hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-lg" data-icon="file_download">file_download</span>
                Export CSV
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-label-md hover:bg-emerald-900 shadow-sm transition-all active:scale-95">
                <span className="material-symbols-outlined text-lg" data-icon="add">add</span>
                New Product
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-8">
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-label-sm">Total Listings</span>
                <span className="p-1.5 bg-emerald-50 text-emerald-700 rounded-lg material-symbols-outlined text-lg" data-icon="inventory_2">inventory_2</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-h2 text-slate-900">1,284</span>
                <span className="text-emerald-600 text-xs font-label-sm mb-1">+12%</span>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-label-sm">Pending Review</span>
                <span className="p-1.5 bg-amber-50 text-amber-700 rounded-lg material-symbols-outlined text-lg" data-icon="pending_actions">pending_actions</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-h2 text-slate-900">42</span>
                <span className="text-amber-600 text-xs font-label-sm mb-1">Requires Action</span>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-label-sm">Approved Today</span>
                <span className="p-1.5 bg-blue-50 text-blue-700 rounded-lg material-symbols-outlined text-lg" data-icon="verified">verified</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-h2 text-slate-900">156</span>
                <span className="text-blue-600 text-xs font-label-sm mb-1">High Activity</span>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-label-sm">Flagged Products</span>
                <span className="p-1.5 bg-red-50 text-red-700 rounded-lg material-symbols-outlined text-lg" data-icon="flag">flag</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-h2 text-slate-900">8</span>
                <span className="text-red-600 text-xs font-label-sm mb-1">High Risk</span>
              </div>
            </div>
          </div>

          {/* Table Controls */}
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden">
            <div className="p-4 border-b border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 text-slate-600 font-label-md bg-slate-100 rounded-md">All Products</button>
                <button className="px-3 py-1.5 text-slate-500 font-label-md hover:bg-slate-50 rounded-md transition-colors">Pending</button>
                <button className="px-3 py-1.5 text-slate-500 font-label-md hover:bg-slate-50 rounded-md transition-colors">Archived</button>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" data-icon="filter_list">filter_list</span>
                  <select className="pl-9 pr-8 py-1.5 border border-outline-variant rounded-lg text-sm bg-white focus:ring-emerald-500 appearance-none">
                    <option>Status: All</option>
                    <option>Status: Approved</option>
                    <option>Status: Pending</option>
                    <option>Status: Flagged</option>
                  </select>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant rounded-lg text-sm hover:bg-slate-50 transition-colors">
                  Bulk Actions
                  <span className="material-symbols-outlined text-sm" data-icon="expand_more">expand_more</span>
                </button>
              </div>
            </div>

            {/* Product Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50">
                  <tr>
                    <th className="px-6 py-4 w-10">
                      <input className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                    </th>
                    <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Product Info</th>
                    <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Farmer</th>
                    <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* Row 1 */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <input className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                          <img alt="Fresh Organic Tomatoes" className="w-full h-full object-cover" data-alt="Vibrant red organic vine tomatoes with green stalks, glistening with morning dew, high detail, studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe-GO8wXnj6gdvHZi-3pd069Zc6tjVQZD7NpE9h82VpUMekUe8BA3bCSwFkNHmOM2Q0GzzRVaHAnp2D8nVNJYVaYEr0Xyk4hqZo9Gx_0tclawaD1hsWI8GwyEREx10VY2YTg05WXOeZgkA0SejYw3PxB9GBCpbYnb5SFNpUoMlD2hG-viTmIOn-FuJTFZjMV4pV0WuTEA_Ei8VCbXHgQSATmOCD8wxwXIv-6gChGoJi3-9DV7lcR2K_SzwqjrhcdGok0Mqq1z9CeY" />
                        </div>
                        <div>
                          <p className="font-label-md text-slate-900">Organic Vine Tomatoes</p>
                          <p className="text-xs text-slate-500">ID: PRD-0421-TM</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400 text-sm" data-icon="location_on">location_on</span>
                        <div>
                          <p className="font-body-sm text-slate-700">Green Valley Farms</p>
                          <p className="text-[10px] text-slate-500">John Doe • Tier 1</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">Vegetables</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-numeric font-medium text-slate-900">$4.50 / kg</p>
                      <p className="text-[10px] text-slate-400">Stock: 450 kg</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                        Approved
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <input className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                          <img alt="Fresh Local Honey" className="w-full h-full object-cover" data-alt="Golden artisanal honey in a classic glass jar with a wooden honey dipper, soft morning light, rustic wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZPlF1r2ZkcnlaJMH5Jv45NRukjZ8ovVcMzYEgM4dwxiXpzZgV81u-0KReEWwBIItvA1p3JLdQhIRmepvvZ1rYEX7AiUIx_S1hxbPGHho4Wl_xvBOVFLk_MmqNAa0cmS-e-giX2laN5LSrepeVEkgOHqIkGvXqsyCBTk1HlCN4OiflNa3kzytbCLU7SOrlcnOgxgMYMY55kTDr_VVas8t0ErQZKExP5AzSowqwmUZlM044Ab42rPgKRyBEJzCrdHe865zvCwAyGc" />
                        </div>
                        <div>
                          <p className="font-label-md text-slate-900">Wildflower Honey (300g)</p>
                          <p className="text-xs text-slate-500">ID: PRD-1102-HN</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400 text-sm" data-icon="location_on">location_on</span>
                        <div>
                          <p className="font-body-sm text-slate-700">Mountain Apiary</p>
                          <p className="text-[10px] text-slate-500">Sarah Mill • New Vendor</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">Pantry</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-numeric font-medium text-slate-900">$12.00 / unit</p>
                      <p className="text-[10px] text-slate-400">Stock: 25 units</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                        Pending Review
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <input className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                          <img alt="Strawberries" className="w-full h-full object-cover" data-alt="Bowl of ripe vibrant red strawberries with green leaves, macro shot, bright summery lighting, crisp focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCT65V8k2snhr_SMjVSkZ4wh01wFn-hKf2PRMM3GRU-GLJl_f8upULOKo9ImIP12OJKujUlWt4nbUCJSuwyXPc-fGJuy59nZ_Gv1PrZh2FGeGTj7f2uO6lQuyC_6nwKCQy4utxesFFgKzIbMoBdkTBRmQMmau6ven7kR96BOFBLjCrA_SojbgAJLbalSCQauqyqbf2YYD6h8Et6i7ONG8eXhLQc6-muDWQlfmaCQKchFRsWnLkQghqk_BiD1kjD3Bf8k4_5ZSmVto" />
                        </div>
                        <div>
                          <p className="font-label-md text-slate-900">Summer Strawberries</p>
                          <p className="text-xs text-slate-500">ID: PRD-0925-SB</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400 text-sm" data-icon="location_on">location_on</span>
                        <div>
                          <p className="font-body-sm text-slate-700">Sunny Orchards</p>
                          <p className="text-[10px] text-slate-500">Mike Ross • Tier 2</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">Fruits</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-numeric font-medium text-slate-900">$6.75 / box</p>
                      <p className="text-[10px] text-slate-400">Stock: Out of stock</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                        Flagged
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <input className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                          <img alt="Fresh Kale" className="w-full h-full object-cover" data-alt="Bundle of dark green curly kale, farm fresh, textured leaves, natural daylight, soft bokeh background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASwF9sjURmlxsTpndB_bCep_k2o2c7ENYs7SQvtWiNcHTrIx_SugNbc2V0o_Kc8fggE_ZoLkvGJnmJixhtRJCwvzlSZ6544uDosXm4B6mrGE3vwhZSUgn_qlSxNHkRyBJj7r-c2ejXnJr3NdaWzWAMvic_Zh2Caggt-7uC844RnEjrcUk6gpW_uRgL3p0zhl-1gzquwqnKXZ53supCTQekfwU0ZXe4swClBjfaRavnqELbFUWmWH3H1N9skXY02PcT1UFHIld6bRg" />
                        </div>
                        <div>
                          <p className="font-label-md text-slate-900">Organic Curly Kale</p>
                          <p className="text-xs text-slate-500">ID: PRD-3321-KL</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400 text-sm" data-icon="location_on">location_on</span>
                        <div>
                          <p className="font-body-sm text-slate-700">Green Valley Farms</p>
                          <p className="text-[10px] text-slate-500">John Doe • Tier 1</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">Vegetables</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-numeric font-medium text-slate-900">$3.20 / bunch</p>
                      <p className="text-[10px] text-slate-400">Stock: 120 bunches</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                        Approved
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-outline-variant flex items-center justify-between bg-slate-50/30">
              <p className="text-sm text-slate-500">Showing <span className="font-medium text-slate-900">1</span> to <span className="font-medium text-slate-900">10</span> of <span className="font-medium text-slate-900">1,284</span> results</p>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-outline-variant rounded-lg text-slate-400 hover:bg-white hover:text-slate-700 disabled:opacity-50 transition-colors" disabled>
                  <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-lg text-sm font-medium">1</button>
                <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-white rounded-lg text-sm font-medium transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-white rounded-lg text-sm font-medium transition-colors">3</button>
                <span className="text-slate-400 mx-1">...</span>
                <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-white rounded-lg text-sm font-medium transition-colors">129</button>
                <button className="p-2 border border-outline-variant rounded-lg text-slate-400 hover:bg-white hover:text-slate-700 transition-colors">
                  <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
