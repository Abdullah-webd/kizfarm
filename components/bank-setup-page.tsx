"use client"

import React from 'react';

export default function BankSetupPage() {
  return (
    <div className="font-body-md text-on-surface" style={{backgroundColor: '#ffffff'}}>
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col py-4 gap-2 z-50">
        <div className="text-2xl font-black text-[#1B6D24] p-6">KIZ FARM</div>
        <nav className="flex flex-col px-4 gap-1">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            Products
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">shopping_cart</span>
            Orders
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">payments</span>
            Earnings
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">chat</span>
            Chat
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-50 text-[#1B6D24] font-semibold border-r-4 border-[#1B6D24] transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">person</span>
            Profile
          </a>
        </nav>
      </aside>

      <header className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 h-16 ml-64 max-w-[calc(100%-16rem)]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-gray-500 cursor-pointer">menu</span>
          <h1 className="text-sm font-medium font-['Inter'] text-gray-500">Settings / Payout Setup</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-gray-500 cursor-pointer">notifications</span>
          <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
            <img className="w-full h-full object-cover" data-alt="portrait of a professional modern farmer wearing a clean denim shirt against a soft blurred rural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIzw8bU79uSRiOmiBArpR9-HwghGxhSpKIhW46-NAaARZJ-nqBj9nBYndRCNutO0HXJJxQRdrVmtHAjRsT0euMH3d-5j0V9bwo2aUhSboAMNLN6sX5mBC4BoCvPAb2CkNFb_noAF1ULgKYwkgAk8HEIpu1NSKbMGCKKE9PYMoQQFwSLR_sK427cAIEjyGhm5MXHhusXv3_ssHfH2lRb3PWfkQV33x8-45aOV71TqEZtJDKTbad5Ne3w0DAqT3Uv9NyDwnRQnztivI" />
          </div>
        </div>
      </header>

      <main className="ml-64 pt-24 pb-16 px-margin min-h-screen flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <div className="mb-lg text-center">
            <img className="h-12 mx-auto mb-md" data-alt="KIZ FARM logo featuring a minimalist stylized green leaf integrated with modern agricultural grid patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBosjGPduQz5x-k-CjGD2OtzAiCEOrlZe5mBwWt4-eWKlbVXflLEw-H0NWhDWvLqmFXF3V3o3xyVY1creEwks82vU_697qJo18Kq08fEPQtUlUZ5azyTbaAyRkPuxvE02fGUcA9DSSx3zADPA2a2fW2qCOU2Jy6XIy5RWh6aHOpSnsQ1XM0xCV1WnmL5rkklazKPh4UNd91eB4DyJN5gzf1nf0RHl4jorkCtWaCsWhvyA-gCqjzLV95RPzMUkaxbAIfPdSfS-nunW8" />
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Bank Account Setup</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">Configure your payout details to receive payments for your farm products directly to your bank account.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-7 bg-white border border-gray-200 rounded-xl p-md">
              <form className="space-y-md">
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Bank Name</label>
                  <div className="relative">
                    <select className="w-full h-12 px-4 bg-white border border-outline-variant rounded-lg font-body-md text-on-surface focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all appearance-none cursor-pointer">
                      <option disabled value="" selected>Select your bank</option>
                      <option value="agri-bank">Agricultural Development Bank</option>
                      <option value="rural-trust">Rural Trust Bank</option>
                      <option value="national-agri">National Farmers Credit Union</option>
                      <option value="eco-finance">EcoFinance Rural</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <span className="material-symbols-outlined text-on-surface-variant">keyboard_arrow_down</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Account Holder Name</label>
                  <input className="w-full h-12 px-4 bg-white border border-outline-variant rounded-lg font-body-md text-on-surface focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all" placeholder="Legal name as on bank records" type="text" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Account Number</label>
                    <input className="w-full h-12 px-4 bg-white border border-outline-variant rounded-lg font-body-md text-on-surface focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all" placeholder="10-12 digits" type="text" />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Branch Code / Swift</label>
                    <input className="w-full h-12 px-4 bg-white border border-outline-variant rounded-lg font-body-md text-on-surface focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all" placeholder="e.g. AGRI123" type="text" />
                  </div>
                </div>

                <div className="pt-base">
                  <button className="w-full h-12 bg-[#1B6D24] text-white font-label-sm rounded-lg hover:bg-primary-container transition-colors shadow-sm active:scale-[0.98]" type="submit">
                    Save Bank Details
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-md">
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-md">
                <div className="flex items-start gap-md">
                  <div className="w-10 h-10 rounded-full bg-[#1B6D24]/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#1B6D24]" data-weight="fill">verified_user</span>
                  </div>
                  <div>
                    <h3 className="font-label-sm text-label-sm text-on-surface mb-xs">Security &amp; Privacy</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Your data is encrypted using industry-standard AES-256 protocols. KIZ FARM does not store your full account credentials—only the necessary routing information for verified payouts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-outline-variant rounded-xl p-md overflow-hidden group">
                <div className="relative h-40 -mx-md -mt-md mb-md overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="modern irrigation system in a lush green agricultural field under a clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZr8vaz9IUki0I9SKsTYLN96yYsO74_eW1DO3zE67h7cTvTbjfmLaRcHvrgrh0lV8jg1jT0kY2xU5GJ1phwuF_m2iGoG-wYMCW8IE8S41zIsp52qrFoupy1iGFX-tipO_f7Z023Y6IJKaVCYcWZkRdVcSuE9o8rKRk3tiYzVb4XFB-emI1sr1JVdJYaf6Ic2GzDaiP-KnBwHc3qSHF2jplEhSe20-YgzlrV9vssEQ-f69fkTSVC83AjRHMzOk2l2MvTX8t1s8q9aE" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-md">
                    <span className="text-white font-label-sm">Grow your business with Kiz Farm</span>
                  </div>
                </div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs">Need Help?</h4>
                <p className="text-label-xs font-label-xs text-on-surface-variant">Our support team is available 24/7 for financial verification assistance.</p>
                <a className="inline-flex items-center gap-1 mt-md text-[#1B6D24] font-label-sm hover:underline" href="#">
                  Contact Support
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-lg border-t border-outline-variant pt-md flex flex-wrap justify-center gap-md">
            <div className="flex items-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-sm">lock</span>
              <span className="text-label-xs font-label-xs">PCI DSS Compliant</span>
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-sm">shield</span>
              <span className="text-label-xs font-label-xs">SSL Secured Connection</span>
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-sm">payments</span>
              <span className="text-label-xs font-label-xs">Direct Deposit Enabled</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
