"use client"

import React from 'react';

export default function UserListPage() {
  return (
    <div className="bg-background text-on-background antialiased" style={{fontFamily: "'Inter', sans-serif", minHeight: 'max(884px, 100dvh)'}}>
      {/* NavigationDrawer Shell */}
      <aside className="fixed left-0 top-0 h-full w-[280px] border-r border-outline-variant bg-surface-container-lowest flex flex-col py-6 px-4 gap-2 z-50">
        <div className="mb-8 px-4">
          <h1 className="text-xl font-black tracking-tight text-primary-container">
            <img alt="KizFarm Logo" className="h-12 w-auto mb-2" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
            <span className="text-xl font-black tracking-tight text-primary-container">KizFarm</span>
          </h1>
        </div>
        <nav className="flex flex-col gap-1">
          <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span>Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-emerald-700 font-semibold bg-emerald-50/50 rounded-lg transition-transform scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="group" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
            <span>Users</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
            <span>Farmers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span>Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span>Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
            <span>Drivers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="payments">payments</span>
            <span>Payments</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="assessment">assessment</span>
            <span>Reports</span>
          </a>
          <div className="mt-auto pt-6 border-t border-outline-variant flex flex-col gap-1">
            <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
              <span>Notifications</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
              <span>Settings</span>
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="ml-[280px] min-h-screen">
        {/* TopAppBar */}
        <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center h-16 px-8">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200">
              <span className="material-symbols-outlined text-primary" data-icon="menu">menu</span>
            </button>
            <h2 className="text-lg font-bold text-emerald-900">All Users</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <input className="pl-10 pr-4 py-2 rounded-full border border-outline-variant bg-surface-container-low text-sm focus:outline-none focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all w-64" placeholder="Global search..." type="text" />
              <span className="material-symbols-outlined absolute left-3 top-2 text-gray-400 text-lg" data-icon="search">search</span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 relative">
              <span className="material-symbols-outlined text-primary" data-icon="notifications">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center text-white text-xs font-bold overflow-hidden">
              <img alt="User Profile" data-alt="professional portrait of an administrative manager in a corporate office setting with soft focus background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB379_dzaod3sdhGTXuNTO28tOe6_3WieoDmjl-VqkfqixJJxb-P88JKPt2JLeKBE320y4WDgfh-MUsuhzIEQVEGIhoc9XeTipNyAj2tG6_9tHUC7c-m6za5d1CMWy3L6WEx5g87tJI9Ip8yp7B-dsePgRnkewUSuWpkQ6hiUcxvMXlNHKoYN9gLF3DM6NMgGDL4nmo3UMx8jH4wYhJJWgho8PoKaIXjgCNRC2gqxwIBwYcxVvqMHTFBmow67HoDLLIjvDoxMxpjJU" />
            </div>
          </div>
        </header>

        {/* Page Canvas */}
        <section className="p-8 max-w-[1440px] mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex mb-6 text-sm text-gray-500 font-medium">
            <a className="hover:text-primary" href="#">Admin Dashboard</a>
            <span className="mx-2">/</span>
            <span className="text-primary-container font-semibold">User Management</span>
          </nav>

          {/* Top Filter Bar */}
          <div className="bg-white border border-outline-variant rounded-xl p-4 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <input className="pl-10 pr-4 py-2 rounded-lg border border-outline-variant text-sm focus:ring-2 focus:ring-primary-container/10 focus:border-primary-container outline-none w-80" placeholder="Search by name or email..." type="text" />
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-sm" data-icon="search">search</span>
              </div>
              <select className="pl-3 pr-8 py-2 rounded-lg border border-outline-variant text-sm text-gray-600 focus:ring-2 focus:ring-primary-container/10 focus:border-primary-container outline-none bg-white">
                <option>Status: All</option>
                <option>Active</option>
                <option>Suspended</option>
                <option>Pending</option>
              </select>
              <select className="pl-3 pr-8 py-2 rounded-lg border border-outline-variant text-sm text-gray-600 focus:ring-2 focus:ring-primary-container/10 focus:border-primary-container outline-none bg-white">
                <option>Role: All Users</option>
                <option>Admin</option>
                <option>Farmer</option>
                <option>Customer</option>
                <option>Driver</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 border border-outline-variant rounded-lg hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined text-lg" data-icon="filter_list">filter_list</span>
                More Filters
              </button>
            </div>
            <button className="bg-primary-container text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary transition-all flex items-center gap-2 shadow-sm active:scale-95">
              <span className="material-symbols-outlined text-lg" data-icon="person_add">person_add</span>
              Invite New User
            </button>
          </div>

          {/* Users Table Card */}
          <div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between bg-gray-50/30">
              <h3 className="font-h3 text-on-surface text-lg">Total Users <span className="ml-2 text-sm font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">1,248</span></h3>
              <div className="flex gap-2">
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                  <span className="material-symbols-outlined" data-icon="download">download</span>
                </button>
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                  <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-gray-500 border-b border-outline-variant">
                      <div className="flex items-center gap-2">
                        <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                        User Profile
                      </div>
                    </th>
                    <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-gray-500 border-b border-outline-variant">Email Address</th>
                    <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-gray-500 border-b border-outline-variant">Phone Number</th>
                    <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-gray-500 border-b border-outline-variant">Status</th>
                    <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-gray-500 border-b border-outline-variant">Join Date</th>
                    <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-gray-500 border-b border-outline-variant text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {/* Row 1: Active */}
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <img alt="User Avatar" data-alt="headshot of a smiling young man in a casual denim shirt against a neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6PfgRwOOcUXjkl6ha2xEjzEF9vF9r_LMiigR0DhDtBMH-pJxegz5jZFr6m01Ufw_ctLni1JqAWCMJqdlC6qoklJKgY7WGFI9MD8gSOgfkRG_u0Beq-TLTCkKK2eE0mkVoeHd4KTYPL2k6IHuIpWT-8vnL_UX8HQy3Ear4ZuVnPtYHFUJqQ2Q07mtI3zrpKa7zkUokjmW6_Xs96KkEc_ndwi4XjPEOKBlrLs7WrJqyvRoj7K5a50Pi_tTkC8_vTHXlkOC6vWC3mXQ" />
                        </div>
                        <div>
                          <div className="text-body-md font-semibold text-on-surface">Marcus Thorne</div>
                          <div className="text-xs text-gray-500">Tier 1 Farmer</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">m.thorne@example.com</td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">+1 (555) 012-3456</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Active</span>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">Oct 24, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 text-xs font-semibold text-primary hover:bg-emerald-50 rounded-md transition-colors border border-transparent hover:border-emerald-100">View Details</button>
                        <button className="px-3 py-1.5 text-xs font-semibold text-error hover:bg-red-50 rounded-md transition-colors">Suspend</button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2: Pending */}
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <img alt="User Avatar" data-alt="portrait of a young woman with a friendly smile, outdoor lighting, blurred greenery in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAudR0TX1wCfB0WTMUXDuOZvASoTKcEygEIw5Ljxu30rd_PdZRVmHNrlaz19nCFS59bY35Z-GAkGm5PB4PO0l-KR2qCmDN00XxTPl4YlzEIBOwBC7XRc0QY3-qAbJwMBBaAOrrAA93mo9WbY5sSSjRGV2bo8lVVE_YlAQfrs5o95cTbZvg7sTSIjbrfbcBoKGt1s75RTs1pg2hwbZOxHmIdDvI8kMLqpjoGDU4RSJqOd5rZAfKzqV4R3-6xOboRxFdIl7Lu0xoez1A" />
                        </div>
                        <div>
                          <div className="text-body-md font-semibold text-on-surface">Elena Rodriguez</div>
                          <div className="text-xs text-gray-500">Retail Customer</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">elena.r@kizfarm.net</td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">+1 (555) 987-6543</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Pending</span>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">Nov 02, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 text-xs font-semibold text-primary hover:bg-emerald-50 rounded-md transition-colors">View Details</button>
                        <button className="px-3 py-1.5 text-xs font-semibold text-error hover:bg-red-50 rounded-md transition-colors">Suspend</button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 3: Suspended */}
                  <tr className="hover:bg-gray-50/80 transition-colors bg-red-50/10">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <img alt="User Avatar" data-alt="medium shot of a middle aged man with a beard looking directly into the camera, professional lighting, indoor office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9efodBEehg1OGBPayxfJXdpyVHu_ggaKZ8h9YfkQlkWPVdPzlkEB97oECiyCms4qPuvtRYWz_7YGDvnfFSfvthK_qrjkiwGsEbjwzzaesX7cPCgs2UjkTIVMigpqlfo6V6qtSz89zqHmgQcsLcODU5MtwMFVkudqM1PvdACvexKnkmMTpgfGI4ziammjWaWiEMZ5kOwYR46_Mf_EIv2p7q5yyggWvalCeacQkdjbnRrgXA_OspmF0ekEIs4Tols1XsiSJ9onB7_I" />
                        </div>
                        <div>
                          <div className="text-body-md font-semibold text-on-surface">Silas Vane</div>
                          <div className="text-xs text-gray-500">Logistics Driver</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">sv@trucklogistics.com</td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">+1 (555) 443-2211</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Suspended</span>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">Sep 15, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 text-xs font-semibold text-primary hover:bg-emerald-50 rounded-md transition-colors">View Details</button>
                        <button className="px-3 py-1.5 text-xs font-semibold text-white bg-error rounded-md transition-all shadow-sm">Lift Ban</button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 4: Active */}
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <img alt="User Avatar" data-alt="close up profile of a young woman with bright expression, natural light, urban background with warm tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxK7yYwOGKuGn6KVWdZt0AuP_Gpmk2wm3UfNDpszwd6vcj3DNfDOWfQw2ISGNPLBc3NLuFlvamsFHGvkVjBRry12KHWf7k7niidvqJDTZ0ZEQETNHGc-x96yQSL4BgNrrTEXVOJ76jZFoTwLsr47DssOSKWZWsLzxKIT-yCiWyy5xh5IlFLGiHgD54rzkACK4DXia3virpeEyAsKAa1Pj44UJ6thpbXkDOkrstosNCXw4y_fisg6l9vSWxhwGPZB81RBfYaq1k5ig" />
                        </div>
                        <div>
                          <div className="text-body-md font-semibold text-on-surface">Sarah Chen</div>
                          <div className="text-xs text-gray-500">Global Admin</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">sarah.chen@kizfarm.com</td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">+1 (555) 777-8899</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Active</span>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">Jun 12, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 text-xs font-semibold text-primary hover:bg-emerald-50 rounded-md transition-colors">View Details</button>
                        <button className="px-3 py-1.5 text-xs font-semibold text-error hover:bg-red-50 rounded-md transition-colors">Suspend</button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 5: Active */}
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <img alt="User Avatar" data-alt="portrait of a man with sunglasses and casual jacket standing in a city park at dusk, cinematic warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAalYhUgkdT7YDdEZyWEcyWe_F6mQS1Tn0hura1KFqdHulWWsCf9n-qKmxNs-BTcIfLz5bZZ8IVRj65-db__1DwDOgAXQYUB0L5_4SMLdL82hCbOn0v6YindF3TsEqH9OThXvu5OrFDJzRqSGD9hIKvIZukk5m9yKEcqVB21yQNDcQs84VhkLSqYmbhc01Z4jZB5h4DzGhaqu2YcXZD3D8NgTwvtoMaS0krxg1Kpyr427iWEp9uaweu2qakmYiwz4cusCtZDssGqDI" />
                        </div>
                        <div>
                          <div className="text-body-md font-semibold text-on-surface">David Okafor</div>
                          <div className="text-xs text-gray-500">Tier 2 Farmer</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">d.okafor@agrihub.org</td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">+1 (555) 662-1144</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Active</span>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">Dec 01, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 text-xs font-semibold text-primary hover:bg-emerald-50 rounded-md transition-colors">View Details</button>
                        <button className="px-3 py-1.5 text-xs font-semibold text-error hover:bg-red-50 rounded-md transition-colors">Suspend</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination Footer */}
            <div className="px-6 py-4 bg-white border-t border-outline-variant flex items-center justify-between">
              <span className="text-body-sm text-gray-500">Showing 1 to 5 of 1,248 users</span>
              <div className="flex gap-1">
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-gray-50 text-gray-400 cursor-not-allowed">
                  <span className="material-symbols-outlined text-base" data-icon="chevron_left">chevron_left</span>
                </button>
                <button className="px-3 py-1 bg-primary text-white rounded font-medium text-sm">1</button>
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-gray-50 text-gray-600 text-sm">2</button>
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-gray-50 text-gray-600 text-sm">3</button>
                <span className="px-3 py-1 text-gray-400">...</span>
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-gray-50 text-gray-600 text-sm">250</button>
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-gray-50 text-gray-600">
                  <span className="material-symbols-outlined text-base" data-icon="chevron_right">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Analytics Quick View (Bento Style) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <span className="material-symbols-outlined text-2xl" data-icon="person_outline">person_outline</span>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">New Registrations</div>
                <div className="text-xl font-bold text-on-surface">+124 <span className="text-xs font-normal text-emerald-500 ml-1">↑ 8%</span></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined text-2xl" data-icon="verified_user">verified_user</span>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Verification Rate</div>
                <div className="text-xl font-bold text-on-surface">94.2% <span className="text-xs font-normal text-emerald-500 ml-1">↑ 2%</span></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <span className="material-symbols-outlined text-2xl" data-icon="timer">timer</span>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Avg Session</div>
                <div className="text-xl font-bold text-on-surface">12m 4s <span className="text-xs font-normal text-red-500 ml-1">↓ 1%</span></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                <span className="material-symbols-outlined text-2xl" data-icon="block">block</span>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Reports/Bans</div>
                <div className="text-xl font-bold text-on-surface">12 <span className="text-xs font-normal text-gray-400 ml-1">---</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
