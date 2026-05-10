"use client"

import React from 'react';

export default function BuyerMessagesPage() {
  return (
    <div className="bg-surface text-on-surface" style={{fontFamily: "'Inter', sans-serif", backgroundColor: '#ffffff'}}>
      {/* Navigation Drawer (SideNav) */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col py-4 gap-2 z-50">
        <div className="text-2xl font-black text-[#1B6D24] p-6">KIZ FARM</div>
        <nav className="flex-1 space-y-1 px-4">
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            Dashboard
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            Products
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            Orders
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined" data-icon="payments">payments</span>
            Earnings
          </a>
          <a className="flex items-center gap-3 px-4 py-3 bg-green-50 text-[#1B6D24] font-semibold border-r-4 border-[#1B6D24] transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined" data-icon="chat" style={{fontVariationSettings: "'FILL' 1"}}>chat</span>
            Chat
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined" data-icon="person">person</span>
            Profile
          </a>
        </nav>
      </aside>

      {/* Top App Bar */}
      <header className="fixed top-0 right-0 left-64 h-16 bg-white/90 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 z-40">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-gray-500 cursor-pointer" data-icon="menu">menu</span>
          <h1 className="text-xl font-black tracking-tighter text-[#1B6D24] font-['Inter']">KIZ FARM</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <span className="material-symbols-outlined text-gray-500 cursor-pointer" data-icon="notifications">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
          </div>
          <img alt="Farmer Portrait" className="w-8 h-8 rounded-full object-cover border border-gray-200" data-alt="Close-up portrait of a professional modern farmer with a warm smile, outdoor sunlit agricultural setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB80vlTA6MIRH8JkDJuzSMZo-7nlLZe1l5SYEr_hmbWsoZk-EYtJyxz_y4jLHcjWLfn12hQSgJiwwnqWovb6xmJ-kBBV6jDiPFxF2ZDW2yZP3sDv_rCN4h6ghS4ic0PRmDmJFCNh031ucA4goc_HwDjtkyEdgoEnJsUw9cUh-N7AcGnBJpDFfwFkA5gskIR0d50iecR6wrti9X-8e5NZZzrCrNk4QO0xST6vsUCST0jID-rIdjYK8BeMsxAlxqxhRTaI5akvW1LY0w" />
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-16 h-screen flex flex-col bg-white overflow-hidden">
        <div className="flex h-full">
          {/* Inbox List Panel */}
          <div className="w-full md:w-96 border-r border-gray-100 flex flex-col h-full bg-white">
            {/* Search & Filter Section */}
            <div className="p-6 space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">Messages</h2>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" data-icon="search">search</span>
                <input className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400" placeholder="Search conversations..." type="text" />
              </div>
            </div>

            {/* Chat Tabs */}
            <div className="flex px-6 border-b border-gray-50">
              <button className="pb-3 text-label-sm font-label-sm text-[#1B6D24] border-b-2 border-[#1B6D24] px-2">All Chats</button>
              <button className="pb-3 text-label-sm font-label-sm text-gray-400 hover:text-gray-600 px-4">Unread (3)</button>
              <button className="pb-3 text-label-sm font-label-sm text-gray-400 hover:text-gray-600 px-4">Buyers</button>
            </div>

            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto" style={{scrollbarWidth: 'thin', scrollbarColor: '#e5e7eb transparent'}}>
              {/* Chat Item: Active */}
              <div className="flex items-start gap-4 p-6 bg-green-50/30 border-l-4 border-[#1B6D24] cursor-pointer hover:bg-green-50 transition-colors">
                <div className="relative shrink-0">
                  <img alt="Buyer Profile" className="w-12 h-12 rounded-full object-cover" data-alt="Professional female buyer portrait, neutral background, modern business casual attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABI7sRIsBaobbsIv78PCT9WSOjqpsGT9HfJIH8qmKtWcUVCUAn7Q54skIARE1b9d-xWW6C4ytp2Y2jxdI-hE9f-cwGNsC9Iyh4GNZvN03yTeTCma3UbzFWYHcWme3THKb8f9T3iWkJS0xqO7uCh3okZ6nxN9B6u3FHEVgHt2H8yih2Z3dsNfmLTk7lEmce5fPzs9208M5NFl55GPEEFQwbDHKD5nIRsYO2X5_fwXzF_U8bjYlAMpy6SvH6HT1gB-h88y6-oETzzKU" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-label-sm text-label-sm text-on-surface truncate">Sarah Jenkins</h3>
                    <span className="text-[10px] font-medium text-gray-400 uppercase">2m ago</span>
                  </div>
                  <p className="text-body-md text-gray-600 line-clamp-1">Is the organic kale still available for bulk order this Friday?</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="bg-[#1B6D24] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">1</span>
                    <span className="text-[10px] text-gray-400 italic">Verified Buyer</span>
                  </div>
                </div>
              </div>

              {/* Chat Item 2 */}
              <div className="flex items-start gap-4 p-6 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="relative shrink-0">
                  <img alt="Buyer Profile" className="w-12 h-12 rounded-full object-cover" data-alt="Friendly male chef portrait, professional kitchen background, soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgIp5AUzvuPIEnXihreWDXyMkwzifGQUwroWjzb9uxTKIlJf6cHdE8CyN2RPCeN3fdNeZgAdoxJ0thuxPnb5_MvUEDxJI1M9_GR0yBfWMAhaBbKvS8rVoT1D52o7x7RKWiNA00z6dvIdjbH2h6aTjCXR3p0ba1ne95L7mpi-hzzY72IMoLtpT76mADXVQW9zwYInNM3k4TkJFL6xzk6xxHZy5DiYE-lHBkn2C04E9zXvh9A9q2-QY7UDBfO1pvrNixY1FF8wEqh1M" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-label-sm text-label-sm text-on-surface truncate">Marcus Chen</h3>
                    <span className="text-[10px] font-medium text-gray-400 uppercase">1h ago</span>
                  </div>
                  <p className="text-body-md text-gray-500 line-clamp-1">Thanks! The tomatoes arrived in perfect condition. Sending payment now.</p>
                </div>
              </div>

              {/* Chat Item 3 */}
              <div className="flex items-start gap-4 p-6 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="relative shrink-0">
                  <img alt="Buyer Profile" className="w-12 h-12 rounded-full object-cover" data-alt="Young entrepreneur woman portrait, bright studio lighting, confident look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOgUo8nOOz1x6WZpQtZyNjYeH0BXtjyPIpDR5BA4Sj-Kyjo6hRmUW4gHC-hT_m9SEy_-SgSLbRAExuihW_-LqSlLYpRt2hsWRftsUb8BEPY7TYl_Y02yWbnVeNO7hIyVn8jX5cX3LoBiZGm3M7EANMJhX69XBOxoIZW56IDzqUgEIx4n0QnV6Sr_k47D4DH1geZs0eECJCZtaMfOzRwx1V-9bQo2u0dQLR_wh5WFag8C4-p8aO7EHlgNk_AOULE5E9Dg9d9AomqDM" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-label-sm text-label-sm text-on-surface truncate">WholeFoods Co-op</h3>
                    <span className="text-[10px] font-medium text-gray-400 uppercase">3h ago</span>
                  </div>
                  <p className="text-body-md text-gray-500 line-clamp-1 font-semibold">Sent a voice message</p>
                </div>
              </div>

              {/* Chat Item 4 */}
              <div className="flex items-start gap-4 p-6 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="relative shrink-0">
                  <img alt="Buyer Profile" className="w-12 h-12 rounded-full object-cover" data-alt="Male logistics manager portrait, warehouse office setting, focused expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQh7Gh_Y_GUr7p5CBBFJThcLQGqplJL_RPFPHfB4-ah8kXHNZ1rQq8U9IVwx1Qqz4VNoOE5n2B98KDFi-bWyT4pANv6VR97rVJEwq3mbxZRP76Z1GTmvhGVcqrqOAzZPK97KAiw5AcqGaQUKWw5tYmXa9k0dZJhweDAoh46ZeZ_Irll3z-N5FNADO_TmK16mojyjknFOcFGOLdazIEtxMpQl-uaIwGLP5GlIlfOjLF-NuBCn84JuR0UU2QOcH646Sxwlbftb6MOY4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-label-sm text-label-sm text-on-surface truncate">David Wilson</h3>
                    <span className="text-[10px] font-medium text-gray-400 uppercase">Yesterday</span>
                  </div>
                  <p className="text-body-md text-gray-500 line-clamp-1">Can we schedule the pickup for 6 AM instead?</p>
                </div>
              </div>

              {/* Chat Item 5 */}
              <div className="flex items-start gap-4 p-6 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors opacity-80">
                <div className="shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-gray-400" data-icon="store">store</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-label-sm text-label-sm text-on-surface truncate">Green Valley Grocers</h3>
                    <span className="text-[10px] font-medium text-gray-400 uppercase">Mon</span>
                  </div>
                  <p className="text-body-md text-gray-500 line-clamp-1">Review your updated contract for Q4.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Viewport (Right Side - Empty State) */}
          <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-gray-50 p-12 text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
              <span className="material-symbols-outlined text-4xl text-[#1B6D24]" data-icon="forum">forum</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Select a Conversation</h3>
            <p className="text-body-md text-gray-500 max-w-sm">Connect with your buyers to finalize orders, coordinate logistics, and build lasting agricultural partnerships.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-[#1B6D24] transition-all group">
                <span className="material-symbols-outlined text-[#1B6D24] mb-2" data-icon="verified">verified</span>
                <p className="font-label-sm text-label-sm text-on-surface">Verified Buyers</p>
                <p className="text-label-xs text-gray-400">Direct trust-based sales</p>
              </div>
              <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-[#1B6D24] transition-all group">
                <span className="material-symbols-outlined text-[#1B6D24] mb-2" data-icon="pending_actions">pending_actions</span>
                <p className="font-label-sm text-label-sm text-on-surface">Active Quotes</p>
                <p className="text-label-xs text-gray-400">Pending pricing requests</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
