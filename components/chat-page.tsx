"use client"

import React from 'react';

export default function ChatPage() {
  return (
    <>
      {/* TopAppBar */}
      <nav className="bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 flex justify-between items-center w-full px-6 py-3 h-16 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img alt="KIZ FARM Official Logo" className="h-8 w-auto" data-alt="minimalist logo for an agricultural marketplace with stylized green leaf and modern clean typography" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
          <span className="text-xl font-extrabold tracking-tight text-[#1B6D24] dark:text-green-500 font-inter antialiased">KIZ FARM</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 dark:text-zinc-400 hover:opacity-80 transition-opacity active:scale-95 duration-150">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto px-margin lg:px-xl pb-20">
        {/* Header & Search */}
        <section className="py-md lg:py-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-md">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Messages</h1>
            <div className="relative w-full md:max-w-md">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
              <input className="w-full h-12 pl-12 pr-4 bg-white border border-outline-variant rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md text-body-md" placeholder="Search conversations..." type="text" />
            </div>
          </div>

          {/* Categories / Filter Chips */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            <button className="px-6 py-2 bg-primary text-on-primary rounded-full font-label-sm text-label-sm whitespace-nowrap">All Chats</button>
            <button className="px-6 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm whitespace-nowrap">Farmers</button>
            <button className="px-6 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm whitespace-nowrap">Orders</button>
            <button className="px-6 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm whitespace-nowrap">Support</button>
          </div>
        </section>

        {/* Chat List - Bento Style Modern Cards */}
        <section className="grid grid-cols-1 gap-xs">
          {/* Active Conversation */}
          <div className="group bg-white border border-gray-200 p-4 rounded-xl flex items-center gap-4 hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all cursor-pointer">
            <div className="relative">
              <img alt="Farmer Profile" className="w-14 h-14 rounded-full object-cover" data-alt="portrait of a smiling middle-aged male farmer wearing a straw hat and denim overalls standing in a sunlit cornfield" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM9tT733UH954XsxlWuaOdqgpd5VpJfkVkznDjnJHrghlGR8OIrPHLqRba-Rpuv_89_fOfvfZ-euMHV4oXRxwgmzMbLSOfMLCpAXxo4uPdIaYgCudkBLlTH77Y97hwdeUCw7yJ_p42drWj3c5Rouad3wJsDKUzl_380CzWvE53Vn2489Qq_m03U3aQfbkuEL4WnvqpyCO7IX7nnG7RTZTeJotKXIvOgXLKb_W3PCJhfxqPqJ-G82Pyfx8tKmlabNjkxUN41xX99U8" />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-headline-md text-[18px] text-on-surface truncate">Samuel Greenvalley</h3>
                <span className="font-label-xs text-label-xs text-primary">2:45 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-body-md text-body-md text-secondary truncate max-w-[80%] font-semibold">The organic avocados are ready for pickup tomorrow morning...</p>
                <span className="bg-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">2</span>
              </div>
            </div>
          </div>

          {/* Chat Item 2 */}
          <div className="group bg-white border border-gray-200 p-4 rounded-xl flex items-center gap-4 hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all cursor-pointer">
            <div className="relative">
              <img alt="Farmer Profile" className="w-14 h-14 rounded-full object-cover" data-alt="close up portrait of a senior female farmer with weathered hands and a kind smile, rustic farm background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0Zr9IjtvAR7Rsmphd72gvWUOvmuvjS6ngE9LgRuX2bMCKM2YN2QeA5dADaj41OdmgJYNx8l-RHHlz9idpuVf4yj2G0vl2HVNHBM82RepYUWrtKANCRDpWAIuFPrgiJ_5_ohojYDYLRcWadvGm6xFfG3qox-51rx0kpyz4dSm3pFc_qtsm2JJZyhZeRy9eRBtpS5VJ_EXi3qHJywEb29tMj8fIrGp5Q5OBcj_QMieDopznOMcbhH9b_imrbbkuZ2zJphYGLNgszWA" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-headline-md text-[18px] text-on-surface truncate">Maria's Orchard</h3>
                <span className="font-label-xs text-label-xs text-outline">10:15 AM</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-body-md text-body-md text-outline truncate">I've attached the latest soil analysis for the North plot.</p>
              </div>
            </div>
          </div>

          {/* Chat Item 3 */}
          <div className="group bg-white border border-gray-200 p-4 rounded-xl flex items-center gap-4 hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all cursor-pointer">
            <div className="relative">
              <img alt="Farmer Profile" className="w-14 h-14 rounded-full object-cover" data-alt="young man in modern farming tech vest holding a digital tablet in a high-tech hydroponic greenhouse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZOSPB3Ezl9XmYchzs_K33j6tS_I_43naGl_GYnR8G-K49aikoDrwkk9pnXinafhY65ltFu2JaqHty0BRUlJ4neociwL40g_pCmFqsrBgO2P7VssiFgiwTI2GKE00s0Dvz81YMAXZ-ufsZ_Nmr-AsDVOapC_sAjRYx9aVx9GBSIOum3WlYis-ZJ_BAHL04WUAboUmlkkkwEIpqcBKJ3-Ake1AsA3xjK3-mq3dPyn9fis9H4IjA3d3eMW49r7R4hh9nEG4JJcMlp50" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-headline-md text-[18px] text-on-surface truncate">Tech-Farm Logistics</h3>
                <span className="font-label-xs text-label-xs text-outline">Yesterday</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-body-md text-body-md text-outline truncate">The delivery route has been optimized for Thursday.</p>
              </div>
            </div>
          </div>

          {/* Chat Item 4 */}
          <div className="group bg-white border border-gray-200 p-4 rounded-xl flex items-center gap-4 hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all cursor-pointer">
            <div className="relative">
              <img alt="Farmer Profile" className="w-14 h-14 rounded-full object-cover" data-alt="aerial photography of symmetrical vegetable garden rows in vibrant green and deep soil browns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClgW3cYTlte4-x5YWUsGGH1XlDXNXTYHR6V_KlEvxlvt1RgeNlCCabvIrsH8FzW36vfCK2mwEU-p5VW6iMp498YfJEARAL9z0nCxJQUHj83bhROLy1waUQ2xboPUaOM2CjXP0sBeW4wXJcOk4yf9Tnq14od5jL4pzP-Nw3qvIOZD0twa4VoPptdyibKWNshwJ5XtZKIzJXhLUYAM6ogK1Pa5A8m37VUU2ymcq4UQ17GZHNSYbiBDBDYIdsyTwk4_m87rbFqMTATvE" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-headline-md text-[18px] text-on-surface truncate">Harvest Roots Co.</h3>
                <span className="font-label-xs text-label-xs text-outline">Monday</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-body-md text-body-md text-outline truncate font-semibold text-on-surface">Can you confirm the order for 50kg of potatoes?</p>
                <span className="bg-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">1</span>
              </div>
            </div>
          </div>

          {/* Chat Item 5 */}
          <div className="group bg-white border border-gray-200 p-4 rounded-xl flex items-center gap-4 hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all cursor-pointer">
            <div className="relative">
              <img alt="Farmer Profile" className="w-14 h-14 rounded-full object-cover" data-alt="close-up of fresh green leafy vegetables with dew drops in soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU-flT2F0PS9_ScjWSC47w5H3ric28vCMz6na_nBHACQYv-aMteeUUJdE8RgTWWvhh2BQVPAzj4C3-h9YyNLRxqyeH39wKqpv674smcCZzOJgsDxJfpZXs0GU_ZGh_3Sxtaq4YcOX5usKIBOMk7i92lEuNgNZB9xG0KxT1Ph7v3a704SVJAlh505RrMSGNIGTDN2HjyXdNIDOAtFU3gtcprOqIrFvDC8TN3XJcE9t1eT9jVIPb1PrMpYSzeALk5bjixQxjgr_3wyo" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-headline-md text-[18px] text-on-surface truncate">Green Leaf Cooperatives</h3>
                <span className="font-label-xs text-label-xs text-outline">22/10/23</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-body-md text-body-md text-outline truncate">Thank you for the partnership. The seeds have arrived.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-white dark:bg-zinc-950 h-20 pb-safe border-t border-gray-100 dark:border-zinc-800 shadow-[0_-10px_30px_rgba(27,109,36,0.05)]">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] dark:text-green-500 p-2 active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="forum" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Chat</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Profile</span>
        </a>
      </nav>

      {/* Floating Action Button - New Chat */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-[#1B6D24] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 transition-all z-40">
        <span className="material-symbols-outlined" data-icon="add_comment">add_comment</span>
      </button>
    </>
  );
}
