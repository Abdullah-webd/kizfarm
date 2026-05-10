"use client"

import React from 'react';

export default function DriverManagementPage() {
  return (
    <div className="text-on-background" style={{fontFamily: "'Inter', sans-serif", backgroundColor: '#f9f9ff'}}>
      {/* SideNavBar Shell */}
      <aside className="flex flex-col w-[280px] h-screen fixed left-0 top-0 z-40 pt-6 px-4 bg-white border-r border-gray-200">
        <div className="mb-8 px-2">
          <div className="flex items-center gap-2 mb-1">
            <img alt="KizFarm Logo" className="h-8 w-auto" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
            <h1 className="text-xl font-bold tracking-tight text-green-900">KizFarm</h1>
          </div>
          <p className="text-[12px] text-slate-500 font-medium">Admin Management</p>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg font-['Inter'] text-sm font-medium hover:bg-slate-50 hover:text-green-800 transition-all duration-200 scale-95 active:scale-90" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            Dashboard
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg font-['Inter'] text-sm font-medium hover:bg-slate-50 hover:text-green-800 transition-all duration-200 scale-95 active:scale-90" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            Orders
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-green-800 bg-green-50 border-r-4 border-green-800 rounded-lg font-['Inter'] text-sm font-semibold transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="local_shipping" style={{fontVariationSettings: "'FILL' 1"}}>local_shipping</span>
            Logistics
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg font-['Inter'] text-sm font-medium hover:bg-slate-50 hover:text-green-800 transition-all duration-200 scale-95 active:scale-90" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            Inventory
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg font-['Inter'] text-sm font-medium hover:bg-slate-50 hover:text-green-800 transition-all duration-200 scale-95 active:scale-90" href="#">
            <span className="material-symbols-outlined" data-icon="groups">groups</span>
            Sellers
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg font-['Inter'] text-sm font-medium hover:bg-slate-50 hover:text-green-800 transition-all duration-200 scale-95 active:scale-90" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            Settings
          </a>
        </nav>
        <div className="border-t border-gray-100 pt-4 pb-6 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
              <img alt="Admin User Profile" className="w-full h-full object-cover" data-alt="professional portrait of a logistics manager in a modern office setting, soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBier9OyjwbA-zmBJnsbQRfOjndApAeK7YNxguOO6uOBDd437aTzQKqhQlCzhhJD_RdSj2WB6twQQ1H4oJ8QfGWqYuWlfQcW7vfe82axtZHVEHAZxLMKssqkjPH210YsdJsqkmosnDh42302AFnIqKTZTykP4TuvfXryFiEmOXMOWw0iOCmWHKhNMiG9MEuniDeoSeYvOsIPhZieASCSHoy9ThwfKOR-7X2cqU9VVgOfkIRMUAjHmqsF8BFqoCiZZKJJd3dfWE7xwE" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Admin User</p>
              <p className="text-xs text-slate-500">Fleet Operations</p>
            </div>
          </div>
        </div>
      </aside>

      {/* TopNavBar Shell */}
      <header className="flex justify-between items-center w-[calc(100%-280px)] ml-[280px] px-8 h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" data-icon="search">search</span>
            <input className="w-full bg-slate-50 border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-green-800 focus:border-green-800 outline-none transition-all" placeholder="Search drivers, routes, or vehicles..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-slate-500 hover:text-green-800 transition-colors relative">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="text-slate-500 hover:text-green-800 transition-colors">
            <span className="material-symbols-outlined" data-icon="help">help</span>
          </button>
          <div className="h-6 w-[1px] bg-gray-200"></div>
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-sm font-medium text-slate-700">KizFarm HQ</span>
            <span className="material-symbols-outlined text-slate-400" data-icon="keyboard_arrow_down">keyboard_arrow_down</span>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-[280px] p-margin min-h-[calc(100vh-64px)]">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6 text-slate-500">
          <span className="text-label-sm font-label-sm">Logistics</span>
          <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
          <span className="text-label-sm font-label-sm text-green-800">Drivers List</span>
        </div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-gutter">
          <div>
            <h2 className="text-h1 font-h1 text-slate-900">Delivery Fleet</h2>
            <p className="text-body-md font-body-md text-slate-500 mt-1">Manage and assign tasks to available drivers at KizFarm.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-outline rounded-lg text-primary font-label-md hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
              Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md shadow-sm hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined" data-icon="person_add">person_add</span>
              Onboard Driver
            </button>
          </div>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-gutter">
          <div className="bg-white border border-gray-200 rounded-xl p-lg" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
            <p className="text-label-sm font-label-sm text-slate-500 mb-2">Total Drivers</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-slate-900">42</h3>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+4 this month</span>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-lg" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
            <p className="text-label-sm font-label-sm text-slate-500 mb-2">Active Now</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-slate-900">28</h3>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img className="w-full h-full object-cover" data-alt="driver avatar placeholder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnxkbT5JFrEwMnbf2liCSD9KczzEG97wmqNG7Si15gvQ1qtcoktMoc_7h4pbPNygkiDxjFD7iH7bnEWXbMusoKaFCHCCNR4T8FVOy8sW7NERZveSZuiFnBrsA8yYH1N1smohWXSF_lOaO3rqJ8dwML9YQSxzMaDI5Lkecp6iyeuJHhWy3_g545BqkyT8nFjo2mLy6n4_Qw5r3M4_0sFlOqM489iDSiLkp5a0eeFE_BT0ehajlPHAmsctZ-WLKxe_qwdod5wmpccko" /></div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img className="w-full h-full object-cover" data-alt="driver avatar placeholder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASOoDWFKfcizoTvuitNZFpb4ihXE-pER247hunyiBLYKT9dlPX5EcbxcpPi4ud0s--_DIjfILXfXnR1PWAromRQV3aWvETzBhNN_ZyyON6uEIWkxlEWc65cVa7thmule6K9eYAB7VUFCycFRJLRQAWJX7GB-N7qyyUf7ffqxCWyOmI_oc8rCCetyY2mo9xlvPBjEK0HqXktOpEkyPcD3qHBoXujMWfevMdZ_YxI46Q0Y7rMwha53Ao8RfwRceLs28mzqK2UvTRF3g" /></div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] text-white">+12</div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-lg" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
            <p className="text-label-sm font-label-sm text-slate-500 mb-2">Efficiency Rate</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-slate-900">94%</h3>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">↑ 2%</span>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-lg" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
            <p className="text-label-sm font-label-sm text-slate-500 mb-2">Deliveries Today</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-slate-900">156</h3>
              <span className="material-symbols-outlined text-slate-300" data-icon="trending_up">trending_up</span>
            </div>
          </div>
        </div>

        {/* Drivers Table Card */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
          <div className="px-lg py-md border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h3 className="text-label-md font-label-md text-slate-900">Available Drivers</h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-50 text-green-800 text-xs font-semibold rounded-full border border-green-100">All: 42</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-full border border-slate-200">Bikes: 12</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-full border border-slate-200">Vans: 30</span>
              </div>
            </div>
            <button className="text-slate-400 hover:text-slate-600 transition-colors">
              <span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider">Driver Name</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider">Phone</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider">Vehicle Type</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider">Current Location</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Driver 1 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                        <img alt="Driver Avatar" className="w-full h-full object-cover" data-alt="portrait of a male delivery driver in a green polo shirt, smiling at the camera, clean studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkHPcLzba_jfvwN5dz2Z6sRWqH-UBDf8Ln29FmAPxg7GUCF7pXasxIjKT9dTsx_5-MF2W6Ui82_-3BcsN2vXq9NuFFuivG2LZQnm25DGSVoNtvmOC1S-BqNOqkEicVZugg7oXi0uVBtRY3AORjJNU7h_ktDCQt0mXJJ_eFJ7L3ZJ2vZBfp3ueudTdQOurf8yumBUVdJ2GL5v9hdeaY-48IR-UQaEUxT2pEQbHCIwDJBfHvoJC9XCHULnDVVh_4ntYfx_6p839vMnY" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Samuel Mwangi</p>
                        <p className="text-xs text-slate-500">ID: #KIZ-0082</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4 text-numeric font-numeric text-slate-600">+254 712 345 678</td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="material-symbols-outlined text-lg" data-icon="local_shipping">local_shipping</span>
                      <span className="text-sm">Transit Van</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="material-symbols-outlined text-sm text-red-400" data-icon="location_on">location_on</span>
                      <span className="text-sm">Central Market, Nairobi</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-800/10 text-green-800">Active</span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-4 py-1.5 bg-green-50 text-green-800 text-sm font-semibold rounded-lg hover:bg-green-100 transition-colors border border-green-200">Assign Delivery</button>
                  </td>
                </tr>
                {/* Driver 2 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                        <img alt="Driver Avatar" className="w-full h-full object-cover" data-alt="smiling female delivery courier with a sunhat and green uniform, outdoor bright daylight setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHwTq9Vpj_WEVPds6SEMg0oEV4yLFM80bJpYHnCMJZUbfbh5VK_CQIj9RPh7aq7p5GVpp7jxGwEts8JUFqKXGJbLzIDg6aoRsYFtIBB9gbobc4AJj0pLMYvmY4jXof1JEdWlW0_wm-Qg6FOU6U52ioniUqiHvWy_KurhIw7rSZOiUTIQB7vGey4qWAmeqzVmsRCMXowkOELdB9BRqcSmD5zSrpJRv04dipwPKYQ_Z9gj39AveuuuwznOQl3FgRXwPCQBSvDw41ePE" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Anita Otieno</p>
                        <p className="text-xs text-slate-500">ID: #KIZ-0091</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4 text-numeric font-numeric text-slate-600">+254 723 456 789</td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="material-symbols-outlined text-lg" data-icon="moped">moped</span>
                      <span className="text-sm">Electric Bike</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="material-symbols-outlined text-sm text-red-400" data-icon="location_on">location_on</span>
                      <span className="text-sm">Westlands Area</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500/10 text-orange-600">Busy</span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-4 py-1.5 bg-slate-100 text-slate-400 text-sm font-semibold rounded-lg cursor-not-allowed border border-slate-200" disabled>On Route</button>
                  </td>
                </tr>
                {/* Driver 3 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                        <img alt="Driver Avatar" className="w-full h-full object-cover" data-alt="middle-aged male driver in professional attire, leaning against a clean white delivery van, morning soft light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDNbiXlbTJGnPKyclMONt9O4Le9kZAbW1bSfH2napX2Pcq_4Mgp2zY3H4cWhHtn5gXz-Rr3HLAdW3d8pvG6R4uXaxIDEnSDre50ykctslxAExmIJksfqTcET_MBa72-roTerjYReCchn-IqJKBUP1rJVCIqJ7JHaENze-46_haHkaBp2DKEzWsWkAHEYPtAI6NOOm-e_bpsVMfznakTjbxZ0xvDzlXASUtkw-xrt2pq1N1ELCRk-_5iOy-ZpNUQmjWNtQ56n2lQRY" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">David Kamau</p>
                        <p className="text-xs text-slate-500">ID: #KIZ-0104</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4 text-numeric font-numeric text-slate-600">+254 734 567 890</td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="material-symbols-outlined text-lg" data-icon="local_shipping">local_shipping</span>
                      <span className="text-sm">Box Truck</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="material-symbols-outlined text-sm text-red-400" data-icon="location_on">location_on</span>
                      <span className="text-sm">KIZ FARM Depot B</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-800/10 text-green-800">Active</span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-4 py-1.5 bg-green-50 text-green-800 text-sm font-semibold rounded-lg hover:bg-green-100 transition-colors border border-green-200">Assign Delivery</button>
                  </td>
                </tr>
                {/* Driver 4 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                        <img alt="Driver Avatar" className="w-full h-full object-cover" data-alt="portrait of a young energetic male driver with a cap, outdoor urban delivery setting, sharp focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ__HGVYFhtJzi0hUxzOraoYiEKAo2DODAcQzQcVTEHRV3VDhHV9_Uwqbmpk_D7EbI0FhxmWkUiy7N6jl2D7kGpaipgtbrKQiQpBbBJ3MWrB7-yT-dK1MbMRWb0M4isJdNTVofWyukFBPbi9KyrnNNaq1aQc3IJxeYQoCNswds3UUmtTPohXDHEKp37ry9OfAjyQl_ohbgPdOmLPLvxAeJmmvx5ATA0CZpI7lkRFYc8N42GwZ9_8bHyUnv0rXr9L0HLbpeGqo1MG4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">James Njenga</p>
                        <p className="text-xs text-slate-500">ID: #KIZ-0112</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4 text-numeric font-numeric text-slate-600">+254 745 678 901</td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="material-symbols-outlined text-lg" data-icon="moped">moped</span>
                      <span className="text-sm">Electric Bike</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <span className="material-symbols-outlined text-sm" data-icon="location_off">location_off</span>
                      <span className="text-sm">Offline</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-400/10 text-slate-500">Offline</span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-4 py-1.5 bg-slate-100 text-slate-400 text-sm font-semibold rounded-lg cursor-not-allowed border border-slate-200" disabled>Unavailable</button>
                  </td>
                </tr>
                {/* Driver 5 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                        <img alt="Driver Avatar" className="w-full h-full object-cover" data-alt="close-up of a female driver with a headscarf, bright and friendly expression, professional logistics background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClrsuHL7GHUlrJamwBIv8ZQ1FatXR-WRc4ry-BCxlC9frZu3_zvmiGYI3ooppdjYSD-kq11cDZtnk5dF1hiHl9XkRowIFdkDpZX_QeSZThUda6A6kzdwiu5sFsCFojbA51q3zqkmBrnLvZ_tReYvVpeRdaiaJgDE_QJ4wLdSn3WHocJyWSWOl1BBwknF9L4ghpkxGmdavvT7AmPgVXo69yNa4XJqQDegi04d0WSud_Pl1P0gqv7KWaOHAe_oPVw5g8w0xSPEw9PSk" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Beatrice Wanjiru</p>
                        <p className="text-xs text-slate-500">ID: #KIZ-0125</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4 text-numeric font-numeric text-slate-600">+254 756 789 012</td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="material-symbols-outlined text-lg" data-icon="local_shipping">local_shipping</span>
                      <span className="text-sm">Refrigerated Van</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="material-symbols-outlined text-sm text-red-400" data-icon="location_on">location_on</span>
                      <span className="text-sm">Riverside Industrial Park</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-800/10 text-green-800">Active</span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-4 py-1.5 bg-green-50 text-green-800 text-sm font-semibold rounded-lg hover:bg-green-100 transition-colors border border-green-200">Assign Delivery</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Pagination Shell */}
          <div className="px-lg py-4 bg-slate-50/30 flex items-center justify-between border-t border-gray-100">
            <span className="text-sm text-slate-500">Showing 1 to 5 of 42 drivers</span>
            <div className="flex items-center gap-2">
              <button className="p-1 rounded border border-gray-200 text-slate-400 hover:bg-white transition-colors cursor-not-allowed" disabled>
                <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
              </button>
              <button className="w-8 h-8 rounded bg-primary text-on-primary text-xs font-bold">1</button>
              <button className="w-8 h-8 rounded text-slate-600 text-xs font-semibold hover:bg-slate-100">2</button>
              <button className="w-8 h-8 rounded text-slate-600 text-xs font-semibold hover:bg-slate-100">3</button>
              <span className="text-slate-400 px-1">...</span>
              <button className="w-8 h-8 rounded text-slate-600 text-xs font-semibold hover:bg-slate-100">8</button>
              <button className="p-1 rounded border border-gray-200 text-slate-400 hover:bg-white transition-colors">
                <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Insights */}
        <div className="mt-gutter grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl p-lg" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
            <h3 className="text-label-md font-label-md text-slate-900 mb-4">Fleet Map Overview</h3>
            <div className="relative rounded-lg overflow-hidden h-[300px] bg-slate-100 border border-gray-100">
              <img className="w-full h-full object-cover opacity-80" data-alt="minimalist city map illustration with stylized green route lines and moving circular location markers for delivery tracking" data-location="Nairobi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo24yhMNgoe8otXXe0ihwacLGFPWj-zrY_g2iMgoNadbfbd8p232Kljb0aFnOcMYdP0e7oTx60gOyFccUwPWcCPTdxhOATWhbddJ6HwhMFQg5h-06kSxS6K8bb-ota1YTsDX-1ses_Uwqo8w_itI9SAtJHB2hYxsIjBCYvIassG4ervkTquqxtkmqeFQM6CNQRduupe6AZ5nzBlQ60wOdQBh_GyfLFC2CjPMK47jF8Q1-Ykj0KRIymfflDdOQdS4yzJqK5wuoCOwA" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex gap-3">
                <div className="bg-white px-3 py-2 rounded-lg shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-semibold text-slate-700">28 Online</span>
                </div>
                <div className="bg-white px-3 py-2 rounded-lg shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span className="text-xs font-semibold text-slate-700">14 On Trip</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary text-on-primary rounded-xl p-lg shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <h3 className="text-h3 font-h3 mb-2">Need bulk assignment?</h3>
              <p className="text-sm opacity-80 mb-6">Our intelligent route optimizer can automatically batch orders for your top-performing drivers.</p>
            </div>
            <button className="relative z-10 bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm w-fit hover:bg-green-50 transition-colors">Launch Optimizer</button>
            {/* Decorative background elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute top-10 -right-5 w-20 h-20 bg-white/5 rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
