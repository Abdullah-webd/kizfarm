"use client"

import React from 'react';

export default function MarketplacePage() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen pb-24 md:pb-0">
      {/* TopAppBar */}
      <header className="bg-white dark:bg-slate-950 docked full-width top-0 border-b border-gray-200 dark:border-gray-800 flat no shadows sticky z-50">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4">
            <img alt="KIZ FARM Official Logo" className="h-8 object-contain w-12" data-alt="KIZ FARM Official Logo featuring a stylized 'K' and brand name in green and red" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
            <h1 className="text-xl font-extrabold tracking-tight text-[#1B6D24] font-['Inter'] antialiased">KIZ FARM</h1>
          </div>
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full focus:outline-none focus:border-primary-container font-label-sm" placeholder="Search fresh produce, livestock..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors p-2 rounded-full active:scale-95 duration-150">notifications</button>
            <div className="hidden md:flex gap-6 items-center ml-4">
              <span className="font-['Inter'] antialiased text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors px-3 py-1 cursor-pointer">Home</span>
              <span className="font-['Inter'] antialiased text-sm font-semibold text-[#1B6D24] px-3 py-1 bg-green-50 rounded-lg">Market</span>
              <span className="font-['Inter'] antialiased text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors px-3 py-1 cursor-pointer">Orders</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-gutter py-md">
        {/* Marketplace Title & Search (Mobile) */}
        <div className="md:hidden mb-6">
          <div className="relative w-full mb-4">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:border-primary-container shadow-sm" placeholder="Search market..." type="text" />
          </div>
          <h2 className="font-headline-md text-on-surface">Agro Marketplace</h2>
        </div>

        {/* Filters & Sorting Row */}
        <div className="flex flex-col gap-6 mb-lg">
          <div className="flex items-center justify-between overflow-x-auto hide-scrollbar gap-3 py-2">
            <div className="flex gap-2">
              <button className="px-6 py-2 rounded-full bg-primary-container text-white font-label-sm whitespace-nowrap">All Products</button>
              <button className="px-6 py-2 rounded-full bg-white border border-outline-variant text-on-surface-variant font-label-sm hover:border-primary-container transition-colors whitespace-nowrap">Vegetables</button>
              <button className="px-6 py-2 rounded-full bg-white border border-outline-variant text-on-surface-variant font-label-sm hover:border-primary-container transition-colors whitespace-nowrap">Fruits</button>
              <button className="px-6 py-2 rounded-full bg-white border border-outline-variant text-on-surface-variant font-label-sm hover:border-primary-container transition-colors whitespace-nowrap">Grains</button>
              <button className="px-6 py-2 rounded-full bg-white border border-outline-variant text-on-surface-variant font-label-sm hover:border-primary-container transition-colors whitespace-nowrap">Livestock</button>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg bg-white cursor-pointer">
                <span className="material-symbols-outlined text-sm">sort</span>
                <span className="font-label-sm text-on-surface-variant">Sort: Recommended</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
              <button className="p-2 border border-outline-variant rounded-lg bg-white flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface-variant">tune</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
          {/* Card 1 */}
          <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img alt="Fresh Tomatoes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="vibrant red organic vine tomatoes in a rustic wooden crate with soft natural morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyodx3GTC-bInwIgc-qZLadXqdfF4A7QaldYXYUf8HN9UkF4GSs926PvT-WkxA7ci01ugtI87PDjge8nLiChs0HDFblEVeoP0c3tSS0OjpzY07OZSYxwwqV06RlXpUouU4nMjo9IGDXcgKZzqgWsnivi5SGycj_0nojYJQamuilCBCqkocXsliHe0Ag6Iop7xhh_ScVK_ifh7VFjfwMlsmWo_sHpskE-1kCczZ3QKtrbM6-_eibgudI9nAWmTSxiSVT7nGeKxvdL0" />
              <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">In Stock</div>
            </div>
            <div className="p-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-lg text-on-surface">Fresh Roma Tomatoes</h3>
                <span className="font-headline-md text-primary">₦4,500</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant mb-4">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span className="font-label-sm text-xs">Jos, Plateau State</span>
              </div>
              <button className="w-full py-3 border border-primary-container text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-200">View Details</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img alt="Yam Tubers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="clean large yam tubers stacked neatly in a marketplace setting with warm earthy tones and high detail texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZlZkz0q1bgJZ0dvs_rmzmep_cnq-l_qsZOEFFfzIL0cedlA2GJf6ylFROX2o37Ah3xTKQnzmSopJNxMubkeIGNTK5LzgSQfnKQE1ANC8LsfL-9EBgUFWaxtNc8dFmXNIEqirr6JDJEYCakfVC9L_TyjmAk5IileUM-KUoIQqok0KOB2eGdOLPxnIYs9kt2JeGOZUlzB1mMChntKbG1bpxkCOfKR9FpR4eMc8skSSClU8DU1DO6qA-o4TYf3ca76M-LxenYqgcmc8" />
              <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">Premium</div>
            </div>
            <div className="p-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-lg text-on-surface">New Season Yam</h3>
                <span className="font-headline-md text-primary">₦12,000</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant mb-4">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span className="font-label-sm text-xs">Benue State</span>
              </div>
              <button className="w-full py-3 border border-primary-container text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-200">View Details</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img alt="White Onions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="mound of fresh white onions with crisp papery skins and vibrant green shoots on a neutral surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhvlhDvedyzfQ6Cxv6Ra9tTrQrLmjz5QKAgu97uUskTMMyKU_AihCNU5jj5qha2_gr74TX-Yd7-XwRTioxVOU9jAkbbFYS11Yc1NHJCARTSjUjPKvvTc6nXHJKY4Yws_p8nt5sEFHcKYKvjXH0338QXB6svitkfS2DaRNn-z7h1ed6qVpU0PDpqIAwOhsWlOdXyw6cVFIBwLhJY8mGPmV1QzgBT1wExBdRS0YBjpjVzx5KEaMbO3suwVDf6Jiuma1ycIJSh8B0ClQ" />
            </div>
            <div className="p-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-lg text-on-surface">Large White Onions</h3>
                <span className="font-headline-md text-primary">₦3,200</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant mb-4">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span className="font-label-sm text-xs">Kano State</span>
              </div>
              <button className="w-full py-3 border border-primary-container text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-200">View Details</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img alt="Honey" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="clear golden organic honey in a glass jar with wooden dipper, sunlit background showing honeycomb texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5NhNsWlUsJqBW3OeF3x-3-5iJUf52R-KiNpSpBL75Ku04vKuGxe6470jXzYkXua5Y_pySjW-wHMwW-Gtn0S02U51vAqZtrKY-mmCBNgq4qxJ9Rs4a4b8I_DVwN3flnkgyWf_mgaMco3OQiAvTR4miEcvSRXc5eRhAVN_6xt15jWU0Tahz4pXD5bP4FziPtsIcp3jk8TOiwVUU4RR0Zen7AYiXdQnhKZwN1KQkMdyPMUh2WUiVpEnmYvx8Ui4NUaUVFkckJh2L7_M" />
              <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-orange-600 uppercase tracking-wider">Natural</div>
            </div>
            <div className="p-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-lg text-on-surface">Pure Wild Honey</h3>
                <span className="font-headline-md text-primary">₦6,000</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant mb-4">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span className="font-label-sm text-xs">Ibadan, Oyo</span>
              </div>
              <button className="w-full py-3 border border-primary-container text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-200">View Details</button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img alt="Goats" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="healthy brown goats grazing in a lush green pasture under bright daylight, realistic livestock photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMS0R-_4P96_l_rsJjJ63hqNB6BRhApD5P-x_VPqbIm5M5KUQdlA10OAJBTKodUJSJXTdcMmET27tEZYKGw6LxQFb4q8C1hLFszUOu1QssaMRzNSePypSNB97XrLCItM68rJGeghCdS5mG5P8cICfmuUnBIr_GgpzIw3GWbkoWPrINsBaDMADys-FQYEr8Jxx7fdSaPEsivG6Vf7SnxVgA78xuqQDv6TBznHYCObVD1F89TkfEzB90H_ZSoCH_23Ng2M__Qb6IHtg" />
            </div>
            <div className="p-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-lg text-on-surface">Nigerian Dwarf Goat</h3>
                <span className="font-headline-md text-primary">₦45,000</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant mb-4">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span className="font-label-sm text-xs">Sokoto State</span>
              </div>
              <button className="w-full py-3 border border-primary-container text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-200">View Details</button>
            </div>
          </div>

          {/* Card 6 */}
          <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img alt="Rice bag" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="large woven sack of premium long-grain white rice being poured, high contrast lighting showing individual grains" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlh-TOvdOXNT3Nxp--grnWyS8nUzdhEU9xUKWXzwVkxHZjd9exT9lZorjrtJHgXNs3LpiLnz6-eycXrg13tnY2VaXOhlT3nnMPHLfc1URXanPkC09GpdZ_8cvsHUmJFPFQ0_q5TT2hytCC5gJbYtSXkJjY0aarWPmKhXNEQzvoOJUr37WNwfnR5jbWSrHoS37gu8YdEdlvMg8eqiNmz2hg918W48NNuQog5CjiwQ8poyO9wr9aznC_P1vvRu5vw6Jn05kOD_KTCF0" />
            </div>
            <div className="p-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-lg text-on-surface">Long Grain Rice (50kg)</h3>
                <span className="font-headline-md text-primary">₦78,000</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant mb-4">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span className="font-label-sm text-xs">Abakaliki, Ebonyi</span>
              </div>
              <button className="w-full py-3 border border-primary-container text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-200">View Details</button>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-2 bg-white/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1 hover:text-[#1B6D24] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] bg-green-50 dark:bg-green-900/20 rounded-xl px-4 py-1 active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">storefront</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1 hover:text-[#1B6D24] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1 hover:text-[#1B6D24] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Profile</span>
        </a>
      </nav>

      {/* Floating Action Button */}
      <button className="fixed right-6 bottom-24 md:bottom-12 bg-primary text-white p-4 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
        <span className="material-symbols-outlined">add_shopping_cart</span>
        <span className="hidden md:block font-label-sm">Sell Produce</span>
      </button>
    </div>
  );
}
