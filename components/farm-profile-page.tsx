"use client"

import React from 'react';

export default function FarmProfilePage() {
  return (
    <div className="bg-surface text-on-surface" style={{backgroundColor: '#fbf9f8', fontFamily: "'Inter', sans-serif"}}>
      {/* NavigationDrawer Shell */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col py-4 gap-2 z-50">
        <div className="text-2xl font-black text-[#1B6D24] p-6">KIZ FARM</div>
        <nav className="flex flex-col px-4 gap-1">
          <a className="flex items-center gap-3 px-4 py-3 font-label-sm text-label-sm transition-all hover:bg-gray-50 text-gray-600" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            Dashboard
          </a>
          <a className="flex items-center gap-3 px-4 py-3 font-label-sm text-label-sm transition-all hover:bg-gray-50 text-gray-600" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            Products
          </a>
          <a className="flex items-center gap-3 px-4 py-3 font-label-sm text-label-sm transition-all hover:bg-gray-50 text-gray-600" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            Orders
          </a>
          <a className="flex items-center gap-3 px-4 py-3 font-label-sm text-label-sm transition-all hover:bg-gray-50 text-gray-600" href="#">
            <span className="material-symbols-outlined" data-icon="payments">payments</span>
            Earnings
          </a>
          <a className="flex items-center gap-3 px-4 py-3 font-label-sm text-label-sm transition-all hover:bg-gray-50 text-gray-600" href="#">
            <span className="material-symbols-outlined" data-icon="chat">chat</span>
            Chat
          </a>
          <a className="flex items-center gap-3 px-4 py-3 font-label-sm text-label-sm transition-all bg-green-50 text-[#1B6D24] font-semibold border-r-4 border-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="person">person</span>
            Profile
          </a>
        </nav>
      </aside>

      {/* TopAppBar Shell */}
      <header className="fixed top-0 right-0 left-64 h-16 bg-white/90 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 z-40">
        <div className="font-['Inter'] text-sm font-medium text-gray-500 uppercase tracking-widest">Farmer Portal</div>
        <div className="flex items-center gap-6">
          <button className="text-gray-500 hover:text-[#1B6D24] transition-colors">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
            <img className="w-full h-full object-cover" data-alt="close-up portrait of a smiling middle-aged organic farmer wearing a sun hat and denim overalls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtVWCcHoGrrMZ_WJ9MZCnhNv3AY1hfuy1oUEjziutTWZnkgSsE4rtvNpFbYC-B_rDSkzDQFb_T91kWRDMUxAHJhyKS9fOTpxPqunNykuJO5ayZpcYPL0JSG_t8dHds_A_J3EjLvELkIlHGmRAr8z_BnD5SjRGr9EE7jhcTtm7ZgetjX1BagtwtixD1k6wp0Jz0dDaWnB7Qn8DeTxDUwAR_ZArBDDqjJqKYuCiY0ZxIGmow8HTsc9JMw9dSAnIX4IklUQ2LK4inbmA" />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-16 min-h-screen">
        <div className="max-w-[1440px] mx-auto p-gutter lg:p-margin">
          {/* Hero Profile Section */}
          <section className="relative mb-lg">
            {/* Cover Image */}
            <div className="h-64 w-full rounded-xl overflow-hidden mb-[-80px] relative">
              <img className="w-full h-full object-cover" data-alt="vast aerial view of rolling green agricultural fields during sunrise with a farmhouse in the distance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATOnD4yYhF_1Nr5AmMv6TyFERy6Dw3quXUtpsExPFSTVn-mImFd-S386ulDEQeGhjD4DXu9yhL08T0xmJmaIcb7dF2dN7_052oPeL5zbaPPfEX6M8iuYBO8ZsRLHx84MXDgLtNGjy_ny6d9CtAQJmchEdUeY3oB2QlswzMAO6xvy8z0Qc70J7xOlUTTZedT7Y1-L2PwRKO7Iu5wfP5HdG5Npcc097YwJy9LqkHanx3XZ84nYZ2naCQjhctNPHGAbpWid5cHyOJA-Y" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Profile Header Card */}
            <div className="relative px-md">
              <div className="bg-white rounded-xl border border-gray-100 p-md flex flex-col md:flex-row items-end md:items-center justify-between gap-md">
                <div className="flex flex-col md:flex-row items-center md:items-end gap-md -mt-16 md:-mt-12">
                  <div className="relative group">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl border-4 border-white overflow-hidden shadow-sm bg-white">
                      <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="close-up portrait of a smiling middle-aged organic farmer wearing a sun hat and denim overalls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ0qrrn7uhoBWqhs0KgRedaLpyQoafSgZ6RV61wLk1UKtnBo2nuYJhTpDIYu56seWRC3r-uoIeleiUWOyTX0Gcxhn3UYkzlTkKc8wHYymaS7a8U7P3TriB3cRG1zTJKDh7NzCSBh0dnD5qsIXgTUVu5i2xQH-zp_tNed7UABBHGDLgo1Eit8y5zLqtrsf_2GyCAKeAV44y_Sv_-OMiFlO7XBwXvsXLMJwCQvY8EPO807VczhVswl_f3Fdy7mOi34z0ti4vVKbEsKo" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-[#1B6D24] text-white p-1 rounded-lg border-2 border-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]" data-icon="verified" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                    </div>
                  </div>
                  <div className="text-center md:text-left pb-2">
                    <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
                      <h1 className="font-headline-lg text-headline-lg text-on-background">Green Valley Estates</h1>
                      <span className="px-2 py-0.5 bg-green-100 text-[#1B6D24] text-label-xs font-label-xs rounded-full uppercase tracking-tighter">Verified Farmer</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2 justify-center md:justify-start">
                      <span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span>
                      Sonoma County, California • Organic Vineyard &amp; Orchard
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button className="flex-1 md:flex-none h-12 px-6 border border-[#1B6D24] text-[#1B6D24] rounded-lg font-label-sm text-label-sm hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
                    Edit Profile
                  </button>
                  <button className="flex-1 md:flex-none h-12 px-6 bg-[#1B6D24] text-white rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-sm" data-icon="store">store</span>
                    View Shop
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Bento Grid Stats & Details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-md items-start">
            {/* Left: Stats & Info */}
            <div className="md:col-span-4 flex flex-col gap-md">
              {/* Key Stats */}
              <div className="bg-white p-md rounded-xl border border-gray-100">
                <h3 className="font-label-sm text-label-sm text-gray-400 uppercase tracking-widest mb-md">Performance Stats</h3>
                <div className="grid grid-cols-2 gap-md">
                  <div className="p-4 bg-surface rounded-lg border border-gray-50">
                    <span className="text-gray-500 font-label-xs text-label-xs block mb-1">Total Sales</span>
                    <div className="font-headline-md text-headline-md text-on-background">$42,850</div>
                    <span className="text-green-600 text-xs font-semibold flex items-center mt-1">
                      <span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                      +12% this mo
                    </span>
                  </div>
                  <div className="p-4 bg-surface rounded-lg border border-gray-50">
                    <span className="text-gray-500 font-label-xs text-label-xs block mb-1">Rating</span>
                    <div className="font-headline-md text-headline-md text-on-background flex items-center gap-1">
                      4.9
                      <span className="material-symbols-outlined text-yellow-500" data-icon="star" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    </div>
                    <span className="text-gray-500 text-xs mt-1">128 reviews</span>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white p-md rounded-xl border border-gray-100 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-label-xs text-label-xs uppercase tracking-widest">Details</span>
                  <span className="text-[#1B6D24] text-xs font-bold">Active since 2018</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-[#1B6D24]">
                    <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Farm Type</div>
                    <div className="text-sm text-gray-500">Commercial Organic</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-[#1B6D24]">
                    <span className="material-symbols-outlined" data-icon="compost">compost</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Focus</div>
                    <div className="text-sm text-gray-500">Soil Regeneration</div>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="p-md pb-xs">
                  <h3 className="font-label-sm text-label-sm text-gray-400 uppercase tracking-widest">Farm Location</h3>
                </div>
                <div className="h-48 w-full bg-surface-container-high relative">
                  <img className="w-full h-full object-cover opacity-60" data-alt="minimalist satellite map view of agricultural land with clearly defined green rectangular fields and small farm roads" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh6PMAWfoL1hAsnu8qUGe2zM1mvu4YdKStPs5tZhI8viOOjnKccskovX2EOmhFXj3UR76jz36aTbEs6obktdLMASC1wBCXIrovSgdJpwUgsvaYm5UzO8uFijxx1AT0CQyKunoctSgWwkU-nVF1dFrkcvopNmY93MFSzMfqRCmW6woRUqJN8xKoa8i7NbDFhl8oslMcBHqc3TmVH4DHwLGrM3Y9KmVzBm2r8mp4GKXd2oYH4Rl0mPJCOVWK5oNLbCAmO3iokV7VE-M" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1B6D24]">
                      <span className="material-symbols-outlined" data-icon="location_on" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                    </div>
                  </div>
                </div>
                <div className="p-md">
                  <p className="text-sm font-medium">1248 Oak Creek Rd, Sonoma, CA</p>
                  <a className="text-[#1B6D24] text-xs font-bold hover:underline mt-1 inline-block" href="#">Get Directions</a>
                </div>
              </div>
            </div>

            {/* Right: About & Activity */}
            <div className="md:col-span-8 flex flex-col gap-md">
              {/* Bio Section */}
              <div className="bg-white p-lg rounded-xl border border-gray-100">
                <h2 className="font-headline-md text-headline-md text-on-background mb-4">About the Farm</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Third-generation farmers dedicated to the art of sustainable viticulture and heirloom stone fruits. Our mission at Green Valley Estates is to bridge the gap between traditional agricultural wisdom and modern precision technology. Every crop we grow is nurtured with soil-first practices, ensuring nutrient density and flavor profiles that are second to none.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-100">USDA Organic</span>
                  <span className="px-4 py-2 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-100">Rainforest Alliance</span>
                  <span className="px-4 py-2 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-100">Non-GMO Project</span>
                  <span className="px-4 py-2 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-100">Fair Trade Certified</span>
                </div>
              </div>

              {/* Crops Grid */}
              <div className="bg-white p-md rounded-xl border border-gray-100">
                <div className="flex items-center justify-between mb-md px-2">
                  <h3 className="font-label-sm text-label-sm text-gray-400 uppercase tracking-widest">Active Crops</h3>
                  <button className="text-[#1B6D24] text-sm font-bold flex items-center gap-1">
                    Manage
                    <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
                  {/* Card 1 */}
                  <div className="group border border-gray-100 rounded-lg overflow-hidden hover:border-[#1B6D24]/20 hover:shadow-lg transition-all">
                    <div className="h-40 overflow-hidden">
                      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="close-up of vibrant purple grapes ripening on a vine with sun shining through the leaves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYiaaIbt2OnnZ7-vaxIEN0g0jaHw0wOmOiY_MbRK0-_eZG8vVrZ-uH6LUip8gTUCSiIoNuMF2bQoNv0xhTImynUbie7yJHkpJj8k4qHv9hARUn8SP9Ca4COc7ju9JDliijdqywbKguvxk9Fhf-kaiZguPfIU9omoibxZQN8fLIWOGT3MnM76-Am1iF38eL8yn_nIT0hg8wXrWk6m87jkU7ZS1GdOBLENB3c0wgZrnUnzZMsOBvlyF_TNFwsklvnmYZa4p2SjXlhg4" />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-on-background">Cabernet Sauvignon</h4>
                        <span className="px-2 py-0.5 bg-green-100 text-[#1B6D24] text-[10px] font-bold rounded uppercase">In Season</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">12.5 Acres • Est. Harvest Sep 15</p>
                      <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                        <div className="bg-[#1B6D24] h-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="group border border-gray-100 rounded-lg overflow-hidden hover:border-[#1B6D24]/20 hover:shadow-lg transition-all">
                    <div className="h-40 overflow-hidden">
                      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="vibrant fresh peaches hanging on a tree branch with green leaves in a sun-drenched orchard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVPHt9NbaqGtAqBLzrPiGEYhpcu3vHZYSPr-hxlOiGuWMIsjWh4eANO7i7WHcuc0J-IcxyaAz0Gv3ehBaKcJuQHqqGdBpxFd9VdRflFOG64aXthFX5mB3CRByVz_3qMErF6LmS3ES2j6vloa1Foyg-M3V5XdReZGho85td6S1annhLUQBOOB1aVfPnG8mRj3dVBBOjTTs5T6z2ASN55J-ajk8GJINOaQp3k5i_Q316U8I9oWJT-3gF3CW7cP0Q9zXBM8UKIJoGYNY" />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-on-background">Yellow Peaches</h4>
                        <span className="px-2 py-0.5 bg-green-100 text-[#1B6D24] text-[10px] font-bold rounded uppercase">In Season</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">5.2 Acres • Est. Harvest Aug 01</p>
                      <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                        <div className="bg-[#1B6D24] h-full w-full"></div>
                      </div>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="group border border-gray-100 rounded-lg overflow-hidden hover:border-[#1B6D24]/20 hover:shadow-lg transition-all">
                    <div className="h-40 overflow-hidden">
                      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="macro view of fresh organic strawberries on the vine in a field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi6X4bcsDXDmiWbUtYh9997sciPjq5THdsnrCDKsgbJgEENZiehPR5n_LBnxmVr-OXChVL0bCHi7gaHu33uEUDkIcP4X145dKDljBDCeqn6aK5S6LuUg6P6bOubH9IBTNKAn-weaQNuxa0uxU7KrvElRQ1TFPZbiTMfNl6U7Q6pcAImd7vaHkRAL81UPAc5lWDHb1cX5UrzmsfHhFGXMqPPSwkA9EalZ0qVhUN9CY7_jGj_1RyenU1BtmQCr91srnelwk-td9LZlU" />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-on-background">Albion Strawberries</h4>
                        <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded uppercase">Irrigating</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">2.0 Acres • Next Cycle Jun 10</p>
                      <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                        <div className="bg-[#1B6D24] h-full w-1/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weather & Notifications (Asymmetric) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="bg-[#1B6D24] text-white p-md rounded-xl shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-green-200 text-xs font-bold uppercase tracking-widest">Local Weather</h4>
                      <p className="text-xl font-bold">Clear Skies • 78°F</p>
                    </div>
                    <span className="material-symbols-outlined text-4xl text-yellow-400" data-icon="sunny">sunny</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-t border-white/10">
                    <span className="text-green-100">Humidity</span>
                    <span>42%</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-t border-white/10">
                    <span className="text-green-100">Wind</span>
                    <span>5 mph NW</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-t border-white/10">
                    <span className="text-green-100">Precipitation</span>
                    <span>0%</span>
                  </div>
                </div>
                <div className="bg-white p-md rounded-xl border border-gray-100">
                  <h4 className="font-label-sm text-label-sm text-gray-400 uppercase tracking-widest mb-4">Recent Alerts</h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                      <div>
                        <p className="text-sm font-semibold">Order #8821 Shipped</p>
                        <p className="text-xs text-gray-400">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                      <div>
                        <p className="text-sm font-semibold">Payment Received</p>
                        <p className="text-xs text-gray-400">Yesterday</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
                      <div>
                        <p className="text-sm font-semibold">Inventory Alert: Grapes</p>
                        <p className="text-xs text-gray-400">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contextual FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#1B6D24] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined" data-icon="add">add</span>
      </button>
    </div>
  );
}
