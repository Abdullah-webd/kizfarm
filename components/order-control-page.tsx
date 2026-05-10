"use client"

import React from 'react';

export default function OrderControlPage() {
  return (
    <div className="bg-background text-on-surface" style={{fontFamily: "'Inter', sans-serif"}}>
      {/* Sidebar Navigation */}
      <aside className="flex flex-col w-[280px] h-screen fixed left-0 top-0 z-40 pt-6 px-4 bg-white border-r border-gray-200">
        <div className="flex items-center px-4 mb-8">
          <div className="w-10 h-10 flex items-center justify-center mr-3">
            <img alt="KizFarm Logo" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-green-900">KizFarm</h1>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Admin Management</p>
          </div>
        </div>
        <nav className="space-y-1">
          <a className="flex items-center px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200" href="#">
            <span className="material-symbols-outlined mr-3" data-icon="dashboard">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </a>
          <a className="flex items-center px-4 py-3 rounded-lg text-green-800 bg-green-50 border-r-4 border-green-800 font-semibold" href="#">
            <span className="material-symbols-outlined mr-3" data-icon="shopping_cart" style={{fontVariationSettings: "'FILL' 1"}}>shopping_cart</span>
            <span className="font-label-md text-label-md">Orders</span>
          </a>
          <a className="flex items-center px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200" href="#">
            <span className="material-symbols-outlined mr-3" data-icon="local_shipping">local_shipping</span>
            <span className="font-label-md text-label-md">Logistics</span>
          </a>
          <a className="flex items-center px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200" href="#">
            <span className="material-symbols-outlined mr-3" data-icon="inventory_2">inventory_2</span>
            <span className="font-label-md text-label-md">Inventory</span>
          </a>
          <a className="flex items-center px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200" href="#">
            <span className="material-symbols-outlined mr-3" data-icon="groups">groups</span>
            <span className="font-label-md text-label-md">Sellers</span>
          </a>
          <div className="pt-4 mt-4 border-t border-slate-100">
            <a className="flex items-center px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200" href="#">
              <span className="material-symbols-outlined mr-3" data-icon="settings">settings</span>
              <span className="font-label-md text-label-md">Settings</span>
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="ml-[280px] w-[calc(100%-280px)] min-h-screen">
        {/* Top Navigation Bar */}
        <header className="flex justify-between items-center px-8 h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="flex items-center gap-4">
            <nav className="flex items-center space-x-2 text-slate-500 font-label-md text-label-sm">
              <a className="hover:text-green-800" href="#">Orders</a>
              <span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span>
              <span className="text-green-800 font-bold">ORD-8829-XPL</span>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-green-800" data-icon="notifications">notifications</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
            </div>
            <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-green-800" data-icon="help">help</span>
            <div className="flex items-center space-x-3 cursor-pointer pl-4 border-l border-slate-200 ml-2">
              <div className="text-right">
                <p className="text-xs font-bold text-on-surface">Alex Rivera</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Logistics Lead</p>
              </div>
              <img alt="Admin User Profile" className="w-8 h-8 rounded-full object-cover" data-alt="professional portrait of a middle-aged male executive in a clean office setting, soft natural lighting, high-end business aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3UGXU__Q7696WdyTMt6kUSb_A_UeqCUEkWaVXHpnKYNCdt6jQiocTx0OIQ2dIXYRzYhbrIZ_3RElPgk_snT15NtPJ33633UyKI4UnAlJyUkTlCzuLYE6nh5vtXQ6IPGJL3t2Yep44EFhkbILJOTzmcJBkQ9OPwNvBjgw8fczwY0fovufINYk3WV4EPpTadxcUiJdIddJSfpv2g7yaiwbkmxsJnsdlEJz1i_gMRlq-pTmua-VhFYs5rA-kGggx-2UrAceVjQA-HUo" />
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="p-8 space-y-gutter">
          {/* Header Actions */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-h2 text-h2 text-on-surface">Order ORD-8829-XPL</h2>
              <p className="text-slate-500 font-body-sm mt-1">Placed on Oct 24, 2023 at 09:42 AM</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-error text-error font-label-md rounded-lg hover:bg-error/5 transition-colors flex items-center">
                <span className="material-symbols-outlined mr-2 text-[20px]" data-icon="cancel">cancel</span>
                Cancel Order
              </button>
              <button className="px-4 py-2 border border-outline text-on-surface-variant font-label-md rounded-lg hover:bg-slate-50 transition-colors flex items-center">
                <span className="material-symbols-outlined mr-2 text-[20px]" data-icon="support_agent">support_agent</span>
                Contact Support
              </button>
              <div className="relative group">
                <button className="px-4 py-2 bg-primary text-on-primary font-label-md rounded-lg flex items-center shadow-sm">
                  Update Status: Shipped
                  <span className="material-symbols-outlined ml-2 text-[20px]" data-icon="expand_more">expand_more</span>
                </button>
                {/* Hidden dropdown for UI demonstration */}
                <div className="hidden absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-xl rounded-xl z-50 overflow-hidden">
                  <a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" href="#">Processing</a>
                  <a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" href="#">Packed</a>
                  <a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" href="#">Shipped</a>
                  <a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" href="#">Delivered</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-gutter">
            {/* Section 1: Order Summary Card (Span 8) */}
            <div className="col-span-8 space-y-gutter">
              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-gutter">
                <div className="bg-white p-lg border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                  <p className="text-slate-500 font-label-sm uppercase mb-1">Total Amount</p>
                  <h3 className="font-h1 text-h1 text-green-900">$1,248.50</h3>
                  <div className="mt-2 flex items-center">
                    <span className="bg-green-100 text-green-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Paid</span>
                  </div>
                </div>
                <div className="bg-white p-lg border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                  <p className="text-slate-500 font-label-sm uppercase mb-1">Items</p>
                  <h3 className="font-h1 text-h1 text-on-surface">3 Products</h3>
                  <p className="text-slate-400 text-sm mt-2">Total weight: 450kg</p>
                </div>
                <div className="bg-white p-lg border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                  <p className="text-slate-500 font-label-sm uppercase mb-1">Delivery Estimate</p>
                  <h3 className="font-h1 text-h1 text-on-surface">Oct 28</h3>
                  <p className="text-slate-400 text-sm mt-2">Via FastTrack Agri</p>
                </div>
              </div>

              {/* Section 3: Product Details */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                  <h4 className="font-h3 text-h3">Order Contents</h4>
                  <span className="text-slate-400 text-sm">3 Items Total</span>
                </div>
                <div className="divide-y divide-gray-100">
                  {/* Product 1 */}
                  <div className="p-6 flex items-center gap-6 group hover:bg-slate-50 transition-colors">
                    <img alt="Organic Potatoes" className="w-20 h-20 rounded-lg object-cover border border-gray-200" data-alt="close-up of earthy organic russet potatoes in a wooden crate, warm natural morning light, rustic agricultural setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnxCJ7VS6A-K5Sm3PCvLqGEfFE_5AL1XCN8ZzuH7TIc7dihhoHKhw9h2IfF8DuNWbfYRPnv12yTf3hSQROlM3BOI8R4cPc8BdjtlMkwa0OWLfgnL-B7vybZSqBIbiQrQ7FUUhSUH_o5oiXkU6nw8N66yOSUu8KERxq4fNwyMH0013SQkGiYSxElzJagNS_h9AbjdPmyHSYzOX3pWHtdjN1HLCIXeMg0XzYrI_mCftSzdUtm8JJ3sk2uhC-HYTgjSFwuM_zAMdrA0A" />
                    <div className="flex-1">
                      <h5 className="font-label-md text-body-md text-on-surface">Premium Russet Potatoes</h5>
                      <p className="text-slate-500 text-sm">Category: Root Vegetables</p>
                      <p className="text-slate-400 text-xs mt-1">SKU: VG-POT-001</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-on-surface">$0.85 / kg</p>
                      <p className="text-slate-500 text-sm">x 200kg</p>
                      <p className="font-bold text-green-800 mt-1">$170.00</p>
                    </div>
                  </div>
                  {/* Product 2 */}
                  <div className="p-6 flex items-center gap-6 group hover:bg-slate-50 transition-colors">
                    <img alt="Grade A Large Eggs" className="w-20 h-20 rounded-lg object-cover border border-gray-200" data-alt="macro shot of fresh brown farm eggs in a cardboard carton, shallow depth of field, soft diffused window light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIgOjaMQztBNey7RI2jPC31kW5NpnKtUpArnIJ5gmPG3UeICJHFHTayZxroxqYdd3swLSNunwa78U3PwmUoDGESKQ95SDJON3dtb18nHOGnIzqYgfMjGKY1EiieJO8PYz7ddXCqiWKqdHDmFd46M0xvquFvBVcVImStb4iEpQpmfTNo6s7oh1qnsxmri3uuw6DNNWX4TfCB5FauJEfvgAVRcP3cT4ADWTkHFysR-PWXiG3sB-ZMTgruAdeI0dzO0w_ZsnS_nTvWDU" />
                    <div className="flex-1">
                      <h5 className="font-label-md text-body-md text-on-surface">Grade A Large Brown Eggs</h5>
                      <p className="text-slate-500 text-sm">Category: Dairy &amp; Poultry</p>
                      <p className="text-slate-400 text-xs mt-1">SKU: DY-EGG-042</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-on-surface">$4.50 / dozen</p>
                      <p className="text-slate-500 text-sm">x 50 doz</p>
                      <p className="font-bold text-green-800 mt-1">$225.00</p>
                    </div>
                  </div>
                  {/* Product 3 */}
                  <div className="p-6 flex items-center gap-6 group hover:bg-slate-50 transition-colors">
                    <img alt="High Protein Wheat" className="w-20 h-20 rounded-lg object-cover border border-gray-200" data-alt="golden wheat grains held in hands, sun-drenched harvest scene, rich yellow tones and sharp detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9pBrDI3avKNARqhN2uilauIUrygr6prCWEJKkmhidliDSAzIICb3eB8mOgJ998L2eAscdTXIE-YswvSqLlZQ_ZojCrwEqwcQOv-J7vBRk7KQD23XCN5wJ8aGjsjCjAIfooJ1L-fHgdooyq_tlY2E_J9LOueuud61hw9ksIk4_e08sEXIAktdbrPYiPDp2WQK_tu9EUzTxL6OmvWYWoYyQSzOcVuWqgR2WZNLRD7jbP66AGcWQvi4jEuTe2PyCFDU50FfoC3QTKDo" />
                    <div className="flex-1">
                      <h5 className="font-label-md text-body-md text-on-surface">Whole Grain Hard Red Wheat</h5>
                      <p className="text-slate-500 text-sm">Category: Grains</p>
                      <p className="text-slate-400 text-xs mt-1">SKU: GR-WHT-982</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-on-surface">$4.25 / kg</p>
                      <p className="text-slate-500 text-sm">x 200kg</p>
                      <p className="font-bold text-green-800 mt-1">$850.00</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 flex flex-col items-end space-y-2">
                  <div className="flex justify-between w-48 text-slate-500 text-sm">
                    <span>Subtotal:</span>
                    <span>$1,245.00</span>
                  </div>
                  <div className="flex justify-between w-48 text-slate-500 text-sm">
                    <span>Shipping:</span>
                    <span>$3.50</span>
                  </div>
                  <div className="flex justify-between w-48 font-bold text-on-surface text-lg pt-2 border-t border-slate-200">
                    <span>Total:</span>
                    <span className="text-green-800">$1,248.50</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 & 4: Sidebar Details (Span 4) */}
            <div className="col-span-4 space-y-gutter">
              {/* Section 2: Buyer & Farmer Info */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h4 className="font-label-sm uppercase tracking-wider text-slate-500">Stakeholder Information</h4>
                </div>
                <div className="p-6 space-y-6">
                  {/* Buyer */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-tertiary" data-icon="person">person</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase">Buyer</p>
                      <h5 className="font-bold text-on-surface">Whole Foods Coop Inc.</h5>
                      <p className="text-sm text-slate-500">contact@wholefoodscoop.com</p>
                      <p className="text-sm text-slate-500">+1 (555) 012-3456</p>
                    </div>
                  </div>
                  {/* Farmer */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary" data-icon="agriculture">agriculture</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase">Producer</p>
                      <h5 className="font-bold text-on-surface">Green Valley Farms</h5>
                      <p className="text-sm text-slate-500">orders@greenvalley.agri</p>
                      <p className="text-sm text-slate-500">ID: GV-9921-X</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Delivery Details */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h4 className="font-label-sm uppercase tracking-wider text-slate-500">Delivery &amp; Address</h4>
                </div>
                <div className="p-0">
                  <div className="h-32 bg-slate-200 relative">
                    <img alt="Map view showing delivery location in suburban Kansas City, satellite view with street overlays" className="w-full h-full object-cover" data-location="Kansas City" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqnR7PrFA4JwCIJltaEQhSTi7Hb6zoIjisZaxZslW-qyB846HppDsGn_7MbxwUkoE-JPwKxxAsepHe-FZ89G2DsgIATDd_rkRDtcakQBLet6HdL43n9RodyBuY8Iikzqb0HKMRSZXg4GracBTnV7Q_Brgw5uBCjy6PXu23OR-qFY00mH6azJ5F837qFHXl9I0E6HYOzuZfk-Px9YaMfBRTArwGe20vI3v1PD4I6-rdLBOcysYCYnSYvcfWxsBBlAzSCBRsuvpGVs0" />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <div className="bg-white p-1 rounded-full shadow-lg">
                        <span className="material-symbols-outlined text-error" data-icon="location_on" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="material-symbols-outlined text-slate-400 mt-1" data-icon="home">home</span>
                      <div>
                        <h5 className="font-bold text-on-surface">Central Distribution Hub</h5>
                        <p className="text-sm text-slate-500">842 Industrial Way, Suite 102</p>
                        <p className="text-sm text-slate-500">Kansas City, MO 64106</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400" data-icon="local_shipping">local_shipping</span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">Priority Freight</p>
                        <p className="text-xs text-slate-500">Tracking: #AG-7766-9912</p>
                      </div>
                      <button className="text-primary text-xs font-bold hover:underline">Track Live</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Timeline Tracking UI */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h4 className="font-label-sm uppercase tracking-wider text-slate-500">Order Timeline</h4>
                </div>
                <div className="p-6 space-y-6">
                  <div className="relative pl-8">
                    {/* Vertical Line */}
                    <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-slate-100"></div>
                    {/* Step 1 (Completed) */}
                    <div className="relative mb-8">
                      <div className="absolute -left-8 w-7 h-7 bg-green-800 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-[14px]" data-icon="check">check</span>
                      </div>
                      <h5 className="text-sm font-bold text-on-surface">Order Placed</h5>
                      <p className="text-xs text-slate-400">Oct 24, 2023 · 09:42 AM</p>
                    </div>
                    {/* Step 2 (Completed) */}
                    <div className="relative mb-8">
                      <div className="absolute -left-8 w-7 h-7 bg-green-800 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-[14px]" data-icon="check">check</span>
                      </div>
                      <h5 className="text-sm font-bold text-on-surface">Payment Verified</h5>
                      <p className="text-xs text-slate-400">Oct 24, 2023 · 10:15 AM</p>
                    </div>
                    {/* Step 3 (Current) */}
                    <div className="relative mb-8">
                      <div className="absolute -left-8 w-7 h-7 bg-primary-container rounded-full border-4 border-white shadow-sm flex items-center justify-center animate-pulse">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <h5 className="text-sm font-bold text-green-800">Shipped from Farm</h5>
                      <p className="text-xs text-slate-400">Oct 26, 2023 · 02:30 PM</p>
                      <p className="text-[11px] bg-green-50 text-green-800 inline-block px-2 py-0.5 rounded mt-1">On Schedule</p>
                    </div>
                    {/* Step 4 (Future) */}
                    <div className="relative">
                      <div className="absolute -left-8 w-7 h-7 bg-slate-100 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
                      </div>
                      <h5 className="text-sm font-bold text-slate-400">Out for Delivery</h5>
                      <p className="text-xs text-slate-300">Estimated Oct 28</p>
                    </div>
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
