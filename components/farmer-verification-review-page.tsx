"use client"

import React from 'react';

export default function FarmerVerificationReviewPage() {
  return (
    <div className="font-body-md text-on-background" style={{backgroundColor: '#f9f9ff'}}>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-[280px] border-r border-slate-200 bg-white shadow-sm flex flex-col p-4 space-y-2 z-50">
        <div className="mb-8 px-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>agriculture</span>
          </div>
          <div>
            <h1 className="text-xl font-black text-emerald-900 tracking-tight leading-none">AgriMarket</h1>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-1">Admin Dashboard</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-800 font-semibold transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="group" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
            <span className="font-label-md text-label-md">Users</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
            <span className="font-label-md text-label-md">Farmers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span className="font-label-md text-label-md">Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span className="font-label-md text-label-md">Orders</span>
          </a>
        </nav>
        <div className="pt-4 border-t border-slate-100 space-y-1">
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50" href="#">
            <span className="material-symbols-outlined" data-icon="help">help</span>
            <span className="font-label-md text-label-md">Support</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </a>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 right-0 left-[280px] h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md z-40 flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <nav className="flex items-center text-body-sm text-slate-500 gap-2">
            <a className="hover:text-emerald-700" href="#">Users</a>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <a className="hover:text-emerald-700" href="#">Verification Queue</a>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-emerald-800 font-medium">Review: #FRM-92831</span>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-emerald-800" data-icon="notifications">notifications</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
          </div>
          <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
            <div className="text-right">
              <p className="text-label-md font-label-md text-on-background">Admin Console</p>
              <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-tighter">Senior Reviewer</p>
            </div>
            <img className="w-10 h-10 rounded-full border-2 border-emerald-100 object-cover" data-alt="professional portrait of a corporate male administrator in a light grey suit with focused expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyT5HfW2p3vIzggUhN9rjOkJaOJj9vd8j5CYD5GUsdCXuB3Jm9a7LzqKLADn9f1cEQGIzpGvof66HWZxnO0gvUG3c0ePT0gAGdLmEBeX4e2-7ciHXyx6usD2Z6ln_2EDPcyVrqar6Hj4HVTrOomTNYzSC6_6PspVayLRGeHzEO4vO61CclDLVjTKQ_gmLsOlec0WTg-_JDQVcnv2q3k3jLq5PYAhSJIpu2GeG4iGf9FHQaDV_zwvnA7SYPLrm6cyTyNTYq8upB8H0" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-[280px] pt-16 min-h-screen">
        <div className="p-8 max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-h1 text-h1 text-on-background">Farmer Verification Review</h2>
              <p className="text-body-md text-secondary mt-1">Reviewing application for <strong>Adebayo Chidubem</strong> • Submitted 4 hours ago</p>
            </div>
            <div className="flex gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-label-sm text-label-sm flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Identity Match: 98%
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container text-tertiary border border-outline-variant font-label-sm text-label-sm">
                Tier 2 Verification
              </span>
            </div>
          </div>

          {/* Bento Layout Content */}
          <div className="grid grid-cols-12 gap-gutter">
            {/* Left Column: Documents */}
            <div className="col-span-8 space-y-gutter">
              {/* ID Document Card */}
              <div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-slate-50/50">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-700" data-icon="badge">badge</span>
                    <h3 className="font-h3 text-h3">Primary Identity Document</h3>
                  </div>
                  <button className="text-emerald-700 font-label-sm flex items-center gap-1 hover:underline">
                    <span className="material-symbols-outlined text-[18px]">zoom_in</span> Full Screen
                  </button>
                </div>
                <div className="p-6">
                  <div className="aspect-[16/9] w-full bg-slate-100 rounded-lg overflow-hidden border-2 border-dashed border-slate-200 group relative">
                    <img className="w-full h-full object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity" data-alt="high resolution scan of a national identity card with clear text and biometric photo details on a clean surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKt1IQ1J1zbQoZ4qGTNA_S45-ygvf8nWlzjaCuXdA2bEN2XZdjn3JmXo2K-tYm7s2Dtb6h9ufyrGvbwojKIudRbasPYX4a-0MgpDM9wffjdP5AvK-dz7wBRowX6vx9-wLHbvchBdO4QsJFTMcknYGn5e9u9aSn1Ez-yy3Lj8dtJDSNdgFa_SVEKZDLcLQb3f3Au5vjyMFew3I6dW7sol5jKzGkE53vTn_U37fABdqXPt294Ct4Ryvbx6NuYmQ01YOLo5lJVAzLhdU" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg flex justify-between items-center border border-slate-200">
                      <span className="text-label-sm font-label-sm text-slate-600">National ID Card • PNG • 2.4 MB</span>
                      <span className="text-emerald-700 font-label-sm">Verified Clear</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Selfie & Biometrics Card */}
              <div className="grid grid-cols-2 gap-gutter">
                <div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-outline-variant bg-slate-50/50">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-700" data-icon="face">face</span>
                      <h3 className="font-h3 text-h3">Live Liveness Selfie</h3>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col items-center">
                    <div className="w-48 h-48 bg-slate-100 rounded-full overflow-hidden border-4 border-emerald-50 mb-4">
                      <img className="w-full h-full object-cover" data-alt="front-facing portrait of a man with a natural background and soft even lighting for identity verification" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAetWKYJJnW6GnwO5eTMe7odLH_omSc_fcAOnlfPU7Rrfa4a8l8JmeWDBRRObZzQ36XIqcmsaj45p3NZUDu0csnooQMYhnHN0_J7BB0bNj6iP-MQ5gTOUeji-vZEZmHW4VOLcxn1SEPbTorbiY6fOd4BOwJtazxXdq9JJedYREemQbIlNXxtC7VkYSNJWloHvwU4AoQMPeZheS77Oiyi6NvL8Q9z-twsUKrkmvYeIVSN4KtzYrhMZxuPU6YjUwAmqKkPBwxizbkyQI" />
                    </div>
                    <p className="text-label-sm text-slate-500 mb-4">Captured via Mobile App Web-Cam</p>
                    <div className="w-full bg-emerald-50/50 rounded-lg p-3 border border-emerald-100">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs font-semibold text-emerald-800">Face Match Confidence</span>
                        <span className="text-xs font-bold text-emerald-800">94.2%</span>
                      </div>
                      <div className="w-full bg-emerald-200/30 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full" style={{width: '94.2%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-outline-variant bg-slate-50/50">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-700" data-icon="fingerprint">fingerprint</span>
                      <h3 className="font-h3 text-h3">Data Comparison</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400">account_balance</span>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">BVN Status</p>
                          <p className="text-label-md font-semibold text-slate-800">Verified &amp; Active</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-emerald-500" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400">pin</span>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">NIN Retrieval</p>
                          <p className="text-label-md font-semibold text-slate-800">Match Found</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-emerald-500" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-error-container/10 rounded-lg border border-error/10">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-error">warning</span>
                        <div>
                          <p className="text-[10px] font-bold text-error uppercase tracking-wider">Document Expiry</p>
                          <p className="text-label-md font-semibold text-on-error-container">Expires in 12 days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Verification Form */}
            <div className="col-span-4 space-y-gutter">
              {/* Profile Summary */}
              <div className="bg-white border border-outline-variant rounded-xl shadow-sm p-6">
                <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-slate-400 mb-4">Farmer Profile</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase">Full Legal Name</label>
                    <p className="text-body-md font-semibold text-on-background">Adebayo Oluwaseun Chidubem</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 uppercase">Date of Birth</label>
                      <p className="text-body-md font-medium text-on-background">14 May 1982</p>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 uppercase">Gender</label>
                      <p className="text-body-md font-medium text-on-background">Male</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase">Registered Farm Location</label>
                    <p className="text-body-md font-medium text-on-background">Oyo State, Nigeria</p>
                    <div className="mt-2 h-24 rounded-lg bg-slate-100 overflow-hidden border border-slate-200">
                      <img className="w-full h-full object-cover" data-alt="satellite view of organized green agricultural farmland squares with small rural access roads" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlbtKjmwQzRe7wsoj8WDi2XXrz2hZsVbA4-2VQyRzvaOGEKl3Bv4RbB7LqukoR7Duv5_sv715jxBGRgZVxpBAohge7iTSVQBKk39g9egKwUYSfnq2ZkSbnQFAgPLZW7O4p_-uI1slEPjcEG1InEZNVPLfZ1UjNUNeRPwRSc6Fv8D9jggnp59punYLTHO7Z8mIUIDjbDrQA-UbpynxAZgWrqy4bqLAvurjAbuGdvdQWR-RiN9PoqM09H-55d318sqyHCA9wsxPuk80" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Panel */}
              <div className="bg-white border border-outline-variant rounded-xl shadow-sm p-6 sticky top-24">
                <h3 className="font-h3 text-h3 mb-6">Review Decision</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-label-md font-label-md text-secondary mb-2" htmlFor="reviewer-notes">Internal Reviewer Notes</label>
                    <textarea className="w-full rounded-lg border-outline-variant focus:ring-primary focus:border-primary text-body-sm" id="reviewer-notes" placeholder="Add comments about document clarity, inconsistencies, or general observations..." rows={4}></textarea>
                  </div>
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <button className="w-full py-4 bg-primary text-white rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.98]">
                      <span className="material-symbols-outlined">verified</span>
                      Approve Verification
                    </button>
                    <button className="w-full py-3 bg-white border border-error text-error rounded-lg font-label-md text-label-md hover:bg-error/5 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                      <span className="material-symbols-outlined">block</span>
                      Reject Application
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mt-4 p-3 bg-slate-50 rounded-lg">
                    <span className="material-symbols-outlined text-slate-400 text-[20px]">info</span>
                    <p className="text-[11px] text-slate-500 leading-tight">By approving, the farmer will receive a confirmation SMS and gain full access to the marketplace and credit facilities.</p>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="bg-white border border-outline-variant rounded-xl shadow-sm p-6">
                <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-slate-400 mb-4">Verification Checklist</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <input defaultChecked className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                    <span className="text-body-sm text-slate-600">ID text matches form data</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <input defaultChecked className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                    <span className="text-body-sm text-slate-600">Selfie matches ID photo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <input className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                    <span className="text-body-sm text-slate-600">Document shows valid expiry</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <input defaultChecked className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                    <span className="text-body-sm text-slate-600">BVN/NIN API check success</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
