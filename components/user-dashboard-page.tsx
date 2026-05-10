"use client"

import React from 'react';

export default function UserDashboardPage() {
  return (
    <div className="bg-white text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopAppBar */}
      <header className="bg-white dark:bg-slate-950 docked full-width top-0 border-b border-gray-200 dark:border-gray-800 flat no shadows flex justify-between items-center px-6 h-16 w-full max-w-[1440px] mx-auto z-50 sticky">
        <div className="flex items-center gap-4">
          <img className="h-10 w-auto object-contain" data-alt="KIZ FARM Official Logo" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
          <span className="text-xl font-extrabold tracking-tight text-[#1B6D24]">KIZ FARM</span>
        </div>
        <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="Search for seeds, crops, or tools..." type="text" />
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors active:scale-95 duration-150 relative">
            <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <div className="h-10 w-10 rounded-full bg-primary-fixed-dim border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
            <img alt="User Profile" data-alt="Professional headshot of a smiling farmer in high-end agricultural workwear with a blurred farm background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClRVx2BCBsKnGGp8CXV-1n4q531IKCvGDrdERQjVPb2ciqNxWV05GW3oWoOSXaQLRuZ8Y2sD2B9_StGmlQ0-dXYigV_9bXSqkQ_bEF844nD3qdv0QuV_jS-pqvzN-9kj550qsN2o6uSzINLqitRC9V_suOXPFbHrXcU79GRzDTQNLcqMumIUhRvy5NnOmJP9C_-LvXTXK43pse33jNpgYqSpXso_nwxWiNx49cP9YyCCd-i1-k_35ARRyF3kVNdxKgP_qHZScDK8s" />
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 pb-24 md:pb-12">
        {/* Hero Section */}
        <section className="mt-8 mb-lg">
          <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Wide expansive view of lush green farmland at sunrise with golden light hitting the dew-covered crops and rolling hills in the distance" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYmMHFuIklzqMAtHyktGSLfHhwzRS7vO4W7MsWgRcWeVMEIOq5PvpNdwWr_0zhTwMKZTagJJhKmwgH9sAaqDtK_ewSHsYxrEh1KfLNDAmm04jZ_FjDFA5EQ00YgTGyxQwI7_Tseg2XV82zS1MgLQEVYHw0TooR8WHcQ10LdeH62OPT54zfuADe_cddUjjJPLBuDqqFc2TZKRdUWtWlM0m0OoX1tvaFwUv1Fr0CMWG4daxM6mQk-MPwJ0rF5cQXVhkpDcDK-BPYmd8')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-8 md:px-16 text-white">
              <h1 className="font-headline-xl text-white mb-2">Welcome back, Farmer</h1>
              <p className="font-body-lg text-white/90 max-w-md">Your fields are flourishing. Check your latest soil moisture reports and market prices for today.</p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="flex items-center justify-between p-6 bg-white border border-outline-variant rounded-2xl hover:bg-gray-50 transition-all hover:shadow-md group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#1B6D24] group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">storefront</span>
                </div>
                <span className="font-headline-md text-on-surface">Browse Products</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </button>
            <button className="flex items-center justify-between p-6 bg-white border border-outline-variant rounded-2xl hover:bg-gray-50 transition-all hover:shadow-md group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#1B6D24] group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">receipt_long</span>
                </div>
                <span className="font-headline-md text-on-surface">View Orders</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </button>
            <button className="flex items-center justify-between p-6 bg-white border border-outline-variant rounded-2xl hover:bg-gray-50 transition-all hover:shadow-md group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#1B6D24] group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">favorite</span>
                </div>
                <span className="font-headline-md text-on-surface">Wishlist</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-lg">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-headline-lg text-on-surface">Featured Products</h2>
              <p className="text-on-surface-variant font-body-md">Hand-picked fresh produce from verified farms</p>
            </div>
            <button className="text-primary font-semibold flex items-center gap-2 hover:underline">
              View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <div className="group bg-white border border-outline-variant rounded-2xl overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="High-resolution close-up of vine-ripened organic red tomatoes with water droplets in natural bright sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjZT1X33Nsbj5d-McNw7zLemE-y4Cf-b5G0zCCRoCQPhgYW_LfYLiBKU0GJgq7nUyocZTljkaHIfQknK32dt9R5AMr1SbU7-Zg8Hi8yK9ldq2SFst882fV3SDeBnRonpPIQB4gc7JGEjheD-1P9CvSlWTdLNkrCsJXwyRE_quDNT-YwTWAW96aP4U1akzL5svqKmA-QvMQICyOlU8vxA_ocW8bXXcRGVCBditHkRsN1ygBYw6eUDX4vCZW-GW9UqmZ_VLOPwfw2zk" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-label-xs text-primary">In Stock</span>
              </div>
              <div className="p-4">
                <h3 className="font-headline-md mb-1">Organic Tomatoes</h3>
                <p className="text-label-sm text-on-surface-variant mb-3">Fresh Harvest • 1kg</p>
                <div className="flex items-center justify-between">
                  <span className="text-headline-md font-bold text-on-surface">₦2,500</span>
                  <button className="bg-[#1B6D24] text-white p-2 rounded-xl active:scale-95 transition-transform">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Card 2 */}
            <div className="group bg-white border border-outline-variant rounded-2xl overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Golden ripe wheat grains being poured into a wooden bowl under soft warm studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd-AJlt8BmnIxWJi6Kzd0fA-qDtEXZj4ZjxkLRsZ7o6O267sDzrmIAp11fE2AVdF-ck-XovRlpmwc8hZ33vD4Q0qH8Qfx7KMrMnPjHYdVwov4Tf_1fX9YbWc6CpliSxUM5P8wadiMetaQ1FpnCx8l0gYtgUswBUJSOda_KPspihxAakY-Z9pkKshd7cmJEB7MYPMeWUg3wngxnB8L__Y5pxPwLw4yp6lHensvTPNBvjxee-t-voTsZT8C8rTfU6GNyyUlUMtbbExU" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-label-xs text-primary">Limited</span>
              </div>
              <div className="p-4">
                <h3 className="font-headline-md mb-1">Whole Grain Wheat</h3>
                <p className="text-label-sm text-on-surface-variant mb-3">Stone Milled • 5kg</p>
                <div className="flex items-center justify-between">
                  <span className="text-headline-md font-bold text-on-surface">₦12,000</span>
                  <button className="bg-[#1B6D24] text-white p-2 rounded-xl active:scale-95 transition-transform">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Card 3 */}
            <div className="group bg-white border border-outline-variant rounded-2xl overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A assortment of fresh green bell peppers and hot chili peppers in a rustic basket" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4g_Evot1tfswtIXXH9DITgYi1p3NrPoXXOIwACsWwvlrH6eWf3tMRPxQwaaPTFJ3hgVpaEIOU2iWVUiBPx4DGp40jSenQH-Rt4QlelZr54eQOMj-Q3qqVGX8zjsyOOIoS9rzy-xgnmA3RRi5lnJaQGx2eo1gvLIqFnfg5hPV3oeiO7orH4pihw1BEql6zdIlO9Eu6dUOvLSjUUmEFsh_l7HmFM6kA-Dzmxq9SKIPj2_DpVuXSvGv2Kky7HKHbkfmG1JfkpClTXT0" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-label-xs text-primary">In Stock</span>
              </div>
              <div className="p-4">
                <h3 className="font-headline-md mb-1">Assorted Peppers</h3>
                <p className="text-label-sm text-on-surface-variant mb-3">Mix Basket • 2kg</p>
                <div className="flex items-center justify-between">
                  <span className="text-headline-md font-bold text-on-surface">₦4,200</span>
                  <button className="bg-[#1B6D24] text-white p-2 rounded-xl active:scale-95 transition-transform">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Card 4 */}
            <div className="group bg-white border border-outline-variant rounded-2xl overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Close-up of freshly dug organic potatoes with some dark rich soil still attached" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4qXNMe4r22zzGegsUToKt3wjc-hwUuqVhOOMD7NcxQidDNZonnSM4GSPejjDuoAIHUEqHvAj28FYbEztfIzROEJm199vX4DA1xm2nFl_hxZVec1WxBtnnV8SHYZp8PnxQmyj7dCGuxR2KZSdTy20uTHQ5D34zY6Ct0r3RqgYvnJyEPd94MClYrdQ0i56YnsCTmopaLli90F0b8-RdFSZuvbUqvbvcJQYqNR66nd_vOnGMEJ3UJzLEqCWan39NoOlyqImehZQ6Uqw" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-label-xs text-primary">In Stock</span>
              </div>
              <div className="p-4">
                <h3 className="font-headline-md mb-1">Irish Potatoes</h3>
                <p className="text-label-sm text-on-surface-variant mb-3">Bulk Size • 10kg</p>
                <div className="flex items-center justify-between">
                  <span className="text-headline-md font-bold text-on-surface">₦8,500</span>
                  <button className="bg-[#1B6D24] text-white p-2 rounded-xl active:scale-95 transition-transform">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recently Viewed */}
        <section className="mb-lg">
          <h2 className="font-headline-md text-on-surface mb-6">Recently Viewed</h2>
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-2 px-2">
            <div className="min-w-[200px] bg-surface-container-lowest border border-outline-variant rounded-xl p-3 flex gap-3 items-center hover:bg-white transition-colors cursor-pointer">
              <img className="w-16 h-16 rounded-lg object-cover" data-alt="Close-up of golden yellow corn kernels on a cob with morning dew" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5n1y4-ofs4fA-3vPN0Ouv6c1pJc0HHU9N-3bHNEwY8u-a0eL55YPaYUF082Usp4nHyO_Bz9FR9iyMX4tU-ZpgfsoQhiMk8xfcmsf6nlz8RJjL_hr01oqcY48p1urauTG9b1H2L-U5KAC5kEJ6ejb90qELySiPnacLUxxVtU2tG3PvgXyy7GzgdPMHiEWm5AOxLW9kbd1HgTH5T90W9xhsWPrkPHkCcLVenmhnLL8_IR4P8wPVAS2_N6lCarxR6mY5Ut_muxyz3Vs" />
              <div>
                <p className="font-label-sm text-on-surface">Sweet Corn</p>
                <p className="text-primary font-bold">₦1,800</p>
              </div>
            </div>
            <div className="min-w-[200px] bg-surface-container-lowest border border-outline-variant rounded-xl p-3 flex gap-3 items-center hover:bg-white transition-colors cursor-pointer">
              <img className="w-16 h-16 rounded-lg object-cover" data-alt="Basket of fresh green snap peas on a wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvpWT1UV3VFDn_xmMbl8HKJetENcsbCY_MLY_21lFDGjJZMFD_GBbqHA4YpSWp5Cdcv1zstHMcp6R-oOx3s4nSI-iIzG4eaa2b8FUdXDubbNAZ6CpS_9N1F4SFz2QLTeaKhI2Vbx0_f8zv0aWdkw9TO0HWK_wFryO2RUinHQO2fD7OhWN001kQeOsKpodtWNqtdXzuLlr84qgOilpC-C1ZdtY-PF5o5TE8Y-TTH_O4fk4kbhU4Hk_X2m_84q4hmaMTGjFxlLDjBBI" />
              <div>
                <p className="font-label-sm text-on-surface">Green Peas</p>
                <p className="text-primary font-bold">₦2,100</p>
              </div>
            </div>
            <div className="min-w-[200px] bg-surface-container-lowest border border-outline-variant rounded-xl p-3 flex gap-3 items-center hover:bg-white transition-colors cursor-pointer">
              <img className="w-16 h-16 rounded-lg object-cover" data-alt="Freshly harvested carrots with green tops still attached" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCED28OaKvbMEs14pg_N2MJevKVMSxOTltaDBmUzdvNuGZ9lJd4JLkDKddesze193Uu4RCUlNVnatUmZr8bPHsjrr9GZqeDnBVhMQ0Gbw3JWthQSaBNy1urQ9cEWaINTVdd3tGi5IOeqieUwPH1yvuubfOFAe9fTDrFq22TD4g6tnlZ6i1eBIx26W0RMyo4qiaJ2-stx4Rv_ZsEnJCsYuWvZ4j9yCqKG5nODqgvB3hGa7SprGSf24SmeuH1m5NeHnKt0L6p8E1-IUI" />
              <div>
                <p className="font-label-sm text-on-surface">Baby Carrots</p>
                <p className="text-primary font-bold">₦1,200</p>
              </div>
            </div>
            <div className="min-w-[200px] bg-surface-container-lowest border border-outline-variant rounded-xl p-3 flex gap-3 items-center hover:bg-white transition-colors cursor-pointer">
              <img className="w-16 h-16 rounded-lg object-cover" data-alt="Handful of raw brown lentils against a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnk0IBefUkKDa8d0A5K7juIjZJBh7_OSbObYdwX976zSDLVkYWq6oCnad4DCBzBVrhhVXgAhZfOtnbhOl9Bl6XCd2ICe3pGD5YVfiU7ZESOlRrQuE74DQ4xE2Jw9rtmvB4gto8giGkrn_Vpq5MiCDDwbjDwwxhIjGGwEfloN0_A1SgOSdPEtjjLadKH2rLhvlMb1zfsx858PJyI4l2NN3v9M0_ErdrjqE_MHOI1WqRuEF2pzC4sipGkLCKYYUQ2djiX19RS4rjZBA" />
              <div>
                <p className="font-label-sm text-on-surface">Brown Lentils</p>
                <p className="text-primary font-bold">₦3,500</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Categories */}
        <section className="mb-xl">
          <h2 className="font-headline-md text-on-surface mb-6">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category 1: Root Vegetables */}
            <div className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Artistic arrangement of various root vegetables including beets, radishes, and parsnips on a dark textured background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7TRhoXSL9qSnAk6KqNwkkHCDBoVrYnEG99lC9mq6XyJDvONDCDyWphFnuYfLUGsM6pG0Dw-pH7B4A4rLB4vg2S8V7nRGn0SroiOkmV08jEPNuxvwH_Ffog8BvE_zQSjFpeyu8LYW2l4m1wPyBoln7WxwOTDbl0O2Db65KA3oxINMgOGKU96xCb98fI1cPne2BOpZFQ_gXhoLUsXnBff9iB6S9cPPVufcvnHULjIGvpFHFCqHApEwNJVmhVipaIRtnwtfwSJHizZ4" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B6D24]/80 to-transparent flex flex-col justify-end p-8">
                <span className="text-white/80 text-label-xs uppercase tracking-widest mb-1">Category</span>
                <h3 className="text-white font-headline-lg">Root Vegetables</h3>
                <p className="text-white/90 font-body-md mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Explore potatoes, yams, and more →</p>
              </div>
            </div>
            {/* Category 2: Fresh Fruits */}
            <div className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close-up of fresh citrus fruits and tropical varieties cut open revealing vibrant textures and colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQuGxx5WfTLMdLvvjrE4ljW346YJ6Z89ulqvrB2Vt-_WIMTbzdp7ttIxvs1ZIfqNedcxes1kNMhoi0TFYxfX2pDIhC9N_oSfaRoNhhUEwC7nCCyGArniWCfrdKDUA3x5ke2aCTYEjfl_nEDyFFEh34hOqIuWFec5a5WDwFoeUFoJ2qqIGH9wAeVz7ItH_Vq5uUNfQKFxMMJ_9blp0hkzxnk9QzagPzLfLPUMBspNE0FpDQD_DrbU2tW7x2Yiw9nSPUBJXf4vtoM3o" />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary-container/80 to-transparent flex flex-col justify-end p-8">
                <span className="text-white/80 text-label-xs uppercase tracking-widest mb-1">Category</span>
                <h3 className="text-white font-headline-lg">Fresh Fruits</h3>
                <p className="text-white/90 font-body-md mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Discover seasonal sweetness →</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-2 bg-white/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-lg md:hidden">
        <a className="flex flex-col items-center justify-center text-[#1B6D24] bg-green-50 dark:bg-green-900/20 rounded-xl px-4 py-1 active:scale-90 duration-200 transition-all" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1 hover:text-[#1B6D24] active:scale-90 duration-200 transition-all" href="#">
          <span className="material-symbols-outlined">storefront</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1 hover:text-[#1B6D24] active:scale-90 duration-200 transition-all" href="#">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1 hover:text-[#1B6D24] active:scale-90 duration-200 transition-all" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Profile</span>
        </a>
      </nav>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all md:bottom-12">
        <span className="material-symbols-outlined">shopping_cart</span>
      </button>
    </div>
  );
}
