"use client"

import React from 'react';

export default function AssignDriverPage() {
  return (
    <div className="bg-background text-on-background" style={{fontFamily: "'Inter', sans-serif"}}>
      {/* SideNavBar Shell */}
      <aside className="flex flex-col w-[280px] h-screen fixed left-0 top-0 z-40 pt-6 px-4 bg-white border-r border-gray-200">
        <div className="mb-10 px-4">
          <img alt="KizFarm Logo" className="h-12 w-auto mb-2" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          <p className="text-xs text-slate-500 font-medium">KizFarm Admin</p>
        </div>
        <nav className="space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 font-['Inter'] text-sm font-medium leading-tight" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span>Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 font-['Inter'] text-sm font-medium leading-tight" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span>Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-green-800 bg-green-50 border-r-4 border-green-800 font-semibold font-['Inter'] text-sm leading-tight" href="#">
            <span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
            <span>Logistics</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 font-['Inter'] text-sm font-medium leading-tight" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span>Inventory</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 font-['Inter'] text-sm font-medium leading-tight" href="#">
            <span className="material-symbols-outlined" data-icon="groups">groups</span>
            <span>Sellers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 font-['Inter'] text-sm font-medium leading-tight" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span>Settings</span>
          </a>
        </nav>
        <div className="mt-auto mb-6 px-4">
          <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30">
            <p className="text-xs font-bold text-primary mb-1">System Status</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs text-on-surface-variant">Fleet operational</span>
            </div>
          </div>
        </div>
      </aside>

      {/* TopNavBar Shell */}
      <header className="flex justify-between items-center w-[calc(100%-280px)] ml-[280px] px-8 h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md focus-within:ring-2 focus-within:ring-green-800 rounded-lg">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-icon="search">search</span>
            <input className="w-full bg-slate-50 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-0" placeholder="Search orders, drivers or farmers..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-slate-500 hover:text-green-800 cursor-pointer" data-icon="notifications">notifications</span>
          <span className="material-symbols-outlined text-slate-500 hover:text-green-800 cursor-pointer" data-icon="help">help</span>
          <div className="flex items-center gap-3 border-l pl-6 border-slate-200 ml-2">
            <div className="text-right">
              <p className="text-xs font-bold text-on-surface">Alex Rivera</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Logistics Lead</p>
            </div>
            <img alt="Admin User Profile" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="professional portrait of a logistics manager in a modern office setting, clean lighting, high-end professional look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJFtWd0qwPUZAvNZBttsa2soQFzGQpFyfB-B20MFuQ2cGq93sUBGtot_h8K7z2Sskdh1x14j12Kmu8yVlwmqjVJJUQnm6ntUr9MXaZyHGfYeWjNlliPU9pStFxzIfUVh_ruDcPxKbDvra9OvaWPoGeLqDZnsZdbWXhHpJPSv8zJz6qYSi462VKh2fqoijRycrGnTgGpMMQlTtt5mlkC7UVO8N5A89AgPTzjoCQ4DTmeK3LmpouBMmVmvZqkBs8Zrdrw6UtLvuiSzE" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-[280px] p-margin">
        <div className="mb-xl flex items-center justify-between">
          <div>
            <nav className="flex gap-2 text-label-sm text-outline mb-2">
              <span>Logistics</span>
              <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
              <span className="text-primary font-bold">Assign Driver</span>
            </nav>
            <h1 className="font-h1 text-h1 text-on-surface">Assign Driver to Order #ORD-8829</h1>
          </div>
          <button className="bg-white border border-outline-variant text-on-surface px-md py-sm rounded-lg font-label-md flex items-center gap-2 hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-sm" data-icon="close">close</span>
            Cancel Assignment
          </button>
        </div>

        <div className="grid grid-cols-12 gap-gutter">
          {/* Left Side: Order Details */}
          <div className="col-span-12 lg:col-span-4 space-y-gutter">
            <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between mb-md">
                <h2 className="font-h3 text-h3 text-on-surface">Order Summary</h2>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-full uppercase tracking-widest border border-amber-200">Pending Driver</span>
              </div>
              <div className="space-y-md">
                <div className="flex items-start gap-4 p-md bg-surface-container-lowest rounded-lg border border-outline-variant/20">
                  <div className="w-10 h-10 rounded bg-primary-fixed/20 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
                  </div>
                  <div>
                    <p className="text-label-sm text-outline">Cargo</p>
                    <p className="text-body-md font-semibold text-on-surface">2.4 Tons of Organic Arabica Coffee</p>
                  </div>
                </div>
                <div className="relative py-2 px-4 border-l-2 border-dashed border-primary-fixed ml-5 space-y-8">
                  <div className="relative">
                    <span className="absolute -left-[27px] top-0 w-3 h-3 bg-primary rounded-full border-2 border-white shadow-sm"></span>
                    <p className="text-label-sm text-outline">Pickup Point</p>
                    <p className="text-body-sm font-semibold text-on-surface">Green Valley Estate, Narok</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[27px] top-0 w-3 h-3 bg-tertiary rounded-full border-2 border-white shadow-sm"></span>
                    <p className="text-label-sm text-outline">Destination</p>
                    <p className="text-body-sm font-semibold text-on-surface">Central Port Terminal B, Mombasa</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-sm pt-4 border-t border-outline-variant/30">
                  <div>
                    <p className="text-label-sm text-outline">Est. Distance</p>
                    <p className="text-body-md font-bold text-on-surface">542 km</p>
                  </div>
                  <div>
                    <p className="text-label-sm text-outline">Pickup Deadline</p>
                    <p className="text-body-md font-bold text-on-surface">Today, 04:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(0,0,0,0.05)] overflow-hidden h-[340px] relative group">
              <img alt="Logistics Map View" className="w-full h-full object-cover" data-alt="top-down satellite map view of rural and urban roads with digital logistics path markers in bright green" data-location="Kenya" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzZVZXpZN6Iylq_V0aJh3e6MFzcOl7ytCW-va1T39SNgROd9V-9pJVKViYsum8z7nNHKdPI0IJIaWVKpsElGSi2BkYnHp21AHnHzzMXyCZxjjHsLq6UFxYZsBLyXaWEglFu6ezCDv1FvpYtvI59aWLxhlUIz34TkNvbyYPn0tijo78M09Fepd5OLSPrZ2TWhOfUdfZ1twVp8YiC9wh0QuCzLXf9a23VL7Zy7mhd6QhYuggbrDXiy5rn00b1jBkDqXL9sRARklToOI" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-white/40">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-on-surface">Route Optimized</span>
                  <span className="text-xs text-primary font-bold">View full map</span>
                </div>
              </div>
              {/* Map Pin Overlays */}
              <div className="absolute top-1/4 left-1/3 p-1 bg-primary rounded-full shadow-lg border-2 border-white"></div>
              <div className="absolute bottom-1/3 right-1/4 p-1 bg-tertiary rounded-full shadow-lg border-2 border-white"></div>
            </div>
          </div>

          {/* Right Side: Driver Selection */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(0,0,0,0.05)] flex flex-col h-full">
              <div className="p-lg border-b border-outline-variant/30 flex items-center justify-between">
                <div>
                  <h2 className="font-h3 text-h3 text-on-surface">Available Drivers Nearby</h2>
                  <p className="text-body-sm text-outline">Showing 14 verified drivers within 20km of pickup</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg border border-outline-variant/30 text-label-sm text-on-surface">
                    <span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
                    Filter
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg border border-outline-variant/30 text-label-sm text-on-surface">
                    <span className="material-symbols-outlined text-sm" data-icon="sort">sort</span>
                    Nearest
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-lg space-y-md">
                {/* Driver Card (Active/Selected) */}
                <div className="relative group cursor-pointer p-lg rounded-xl border-2 border-primary bg-green-50/30 transition-all">
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-sm" data-icon="check">check</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <img alt="Driver Profile" className="w-16 h-16 rounded-full object-cover" data-alt="close up of a professional heavy truck driver smiling, wearing a simple polo shirt, outdoors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfMNIdgbxYEQpBQY85ykr67bLwq-ac7MuCopydC0WY-24jK2uMwLZUDZWHG49Ywizyr5p_dhiWzUImMS6ZpT9pkuWZ-GYR_HOAOB0vgBhWjS25XYT5R_SlfwIA3OciIZ0AwFGuTUKeQUb_NEcdwFPSH1ZTDrDWuHlN3dRDo5jdfvgW3lzwYrLwIvZ3b4kjb9cP2Yw3zIonBzbt3RPpKIv9mv_Ic12X7_7STj0NWHEH6AV08V4r8MjLpOyOd3G7sTKAqHv9jhBsr_s" />
                      <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-h3 text-body-md font-bold text-on-surface">David M. Kamau</h3>
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]" data-icon="verified" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                          PLATINUM DRIVER
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-label-sm text-outline">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-amber-500" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="text-on-surface font-bold">4.9</span> (120+ trips)
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm" data-icon="distance">distance</span>
                          4.2 km away
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm" data-icon="local_shipping">local_shipping</span>
                          Heavy Duty (10T)
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-label-sm text-outline mb-1">Est. Completion</p>
                      <p className="text-body-md font-bold text-on-surface">8.5 hrs</p>
                    </div>
                  </div>
                </div>

                {/* Driver Card */}
                <div className="group cursor-pointer p-lg rounded-xl border border-[#EAECF0] hover:border-primary/50 hover:bg-slate-50 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <img alt="Driver Profile" className="w-16 h-16 rounded-full object-cover" data-alt="portrait of a middle-aged male delivery driver, professional appearance, neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIbLVFS3TtVrP875P50NmppxMjE5lCzmHiZvjtIPqR5drbi6-FtDfRqpCkW7G5WIc-duf3KlHYD9BKgtDl-5E5lDLC8sIdRCkci0DqvomIlDUORXNgxehlP_hTG4hVwaUlRZ-bRqh_-yvKQagyjLohuM_k7e8HEWB3mFtP31colEfXwvB0IAh1RjxniH2Ms6QvJXZSwTh9HK6V7X-REamlFB2YB9j6hqv-fFi8AxvLjFfH9J6X9yTz2C2L9QEQGGZDoQcoizE_4Zg" />
                      <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-h3 text-body-md font-bold text-on-surface">Samuel Otieno</h3>
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">STANDARD</span>
                      </div>
                      <div className="flex items-center gap-4 text-label-sm text-outline">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-amber-500" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="text-on-surface font-bold">4.7</span> (85 trips)
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm" data-icon="distance">distance</span>
                          6.8 km away
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm" data-icon="local_shipping">local_shipping</span>
                          Medium Truck (5T)
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-label-sm text-outline mb-1">Est. Completion</p>
                      <p className="text-body-md font-bold text-on-surface">9.2 hrs</p>
                    </div>
                  </div>
                </div>

                {/* Driver Card */}
                <div className="group cursor-pointer p-lg rounded-xl border border-[#EAECF0] hover:border-primary/50 hover:bg-slate-50 transition-all opacity-80">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <img alt="Driver Profile" className="w-16 h-16 rounded-full object-cover" data-alt="professional male worker portrait, smiling warmly, studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmIAoC2ymmeWuoVlVBTgsgZvjlXUQHHyKW8BiyT-j5s9peHZbPgYjzBkdgK_L4B0Phg93m0Uq0lmOQ-O2Gu5NIozLnlIMA52rVqpAtLfPlaNmw9CprhvV1p4cyJ1g_RM8DcrjBqXmG4Ns0mlVTqCTfMhiVkwmgO36W5Us2h6GRaVGmfojecJxrPH36oEnXhTaTcfhz3cxEYbRDBH8D0IbejMcImr88zwYiZBPHK8a2IlAnvtLg7sUdeSEej2tIn_-uDvYmJt3zcKA" />
                      <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-amber-400 border-2 border-white"></span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-h3 text-body-md font-bold text-on-surface">Ibrahim Njenga</h3>
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">STANDARD</span>
                      </div>
                      <div className="flex items-center gap-4 text-label-sm text-outline">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-amber-500" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="text-on-surface font-bold">4.8</span> (42 trips)
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm" data-icon="distance">distance</span>
                          12.1 km away
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm" data-icon="local_shipping">local_shipping</span>
                          Heavy Duty (15T)
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-label-sm text-amber-600 font-bold mb-1">On current job</p>
                      <p className="text-body-md font-bold text-on-surface">Available in 45m</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-lg border-t border-outline-variant/30 bg-surface-container-lowest rounded-b-xl flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <p className="text-label-sm text-outline">Total Trip Cost (Est.)</p>
                  <p className="text-h3 font-h3 text-primary">KSh 42,500</p>
                </div>
                <button className="bg-primary hover:bg-primary-container text-white px-xl py-md rounded-lg font-label-md flex items-center gap-3 transition-transform scale-95 active:scale-90 shadow-lg shadow-primary/20">
                  Confirm and Assign Driver
                  <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Metric Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mt-xl">
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-sm">
            <p className="text-label-sm text-outline mb-sm">Driver Efficiency</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-on-surface">94.2%</h3>
              <span className="flex items-center text-xs text-green-600 font-bold">
                <span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                2.1%
              </span>
            </div>
          </div>
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-sm">
            <p className="text-label-sm text-outline mb-sm">Avg. Response Time</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-on-surface">12 min</h3>
              <span className="flex items-center text-xs text-green-600 font-bold">
                <span className="material-symbols-outlined text-xs" data-icon="trending_down">trending_down</span>
                4 min
              </span>
            </div>
          </div>
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-sm">
            <p className="text-label-sm text-outline mb-sm">Fleet Occupancy</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-on-surface">88%</h3>
              <span className="flex items-center text-xs text-amber-600 font-bold">
                High Demand
              </span>
            </div>
          </div>
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-sm">
            <p className="text-label-sm text-outline mb-sm">Fuel Surcharge Index</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-on-surface">1.04</h3>
              <span className="flex items-center text-xs text-slate-500 font-bold">
                Stable
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
