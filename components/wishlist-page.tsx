"use client"

import React from 'react';

export default function WishlistPage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 fixed top-0 z-50 w-full">
        <div className="flex justify-between items-center w-full px-6 py-3 h-16 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3">
            <img alt="KIZ FARM Logo" className="h-8 w-auto" data-alt="Official KIZ FARM logo featuring a large green 'K' with a red swoosh and the text 'KIZ FARM KIZ EMPIREX'" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
            <span className="font-inter antialiased text-sm font-medium text-green-800 dark:text-green-500 uppercase tracking-widest md:hidden">KIZ FARM</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <a className="text-gray-500 dark:text-zinc-400 hover:opacity-80 transition-opacity font-label-sm text-label-sm" href="#">Home</a>
              <a className="text-[#1B6D24] dark:text-green-500 hover:opacity-80 transition-opacity font-label-sm text-label-sm" href="#">Market</a>
              <a className="text-gray-500 dark:text-zinc-400 hover:opacity-80 transition-opacity font-label-sm text-label-sm" href="#">Orders</a>
              <a className="text-gray-500 dark:text-zinc-400 hover:opacity-80 transition-opacity font-label-sm text-label-sm" href="#">Profile</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="active:scale-95 duration-150 p-2 text-gray-500 dark:text-zinc-400">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border border-outline-variant">
              <img alt="User Profile" className="h-full w-full object-cover" data-alt="Close-up portrait of a smiling farmer in a hat with warm natural lighting and soft blurred field background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVgZfWM1fDAu6cIcpa_q2lgxAKPRu0XR2k_GmAPLmgc7cxVsBTnI2WNvzIAfjG9v5oITKSWzt4-T5bQbuGzzjsNiTJNUnc2ZrPNue1gDociX1PUJv3UR2SOoglAcX1pzedy1nZ4p6lG3Tc49OBHxeMxJitnpY7bhsikkt1PnPwajsI0g0_yptrCcs8PggCwPK1pt_5rAHM0ftnrziWuLVqjVbCTj-VVGsGowbYIcweI85IKpkiEBO3-j5n8GEicn3GuvM-wb4JtRQ" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-24 pb-32 px-margin max-w-[1440px] mx-auto w-full">
        {/* Page Header */}
        <div className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <nav className="flex items-center gap-2 text-outline text-label-xs font-label-xs mb-2">
              <a className="hover:text-primary transition-colors" href="#">Market</a>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span>Wishlist</span>
            </nav>
            <h1 className="font-headline-lg text-headline-lg text-on-surface">My Wishlist</h1>
            <p className="text-secondary mt-1 font-body-md text-body-md">You have 6 items saved for later</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 h-[48px] rounded-lg border border-[#1B6D24] text-[#1B6D24] font-label-sm text-label-sm flex items-center gap-2 hover:bg-[#1B6D24]/5 transition-colors active:scale-95 duration-150">
              <span className="material-symbols-outlined" data-icon="share">share</span>
              Share List
            </button>
            <button className="px-6 h-[48px] rounded-lg bg-[#1B6D24] text-white font-label-sm text-label-sm flex items-center gap-2 hover:opacity-90 transition-opacity shadow-[0_10px_30px_rgba(27,109,36,0.15)] active:scale-95 duration-150">
              <span className="material-symbols-outlined" data-icon="shopping_cart_checkout">shopping_cart_checkout</span>
              Add All to Cart
            </button>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden group hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all duration-300">
            <div className="relative h-56 overflow-hidden">
              <img alt="Fresh Tomatoes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High-resolution close-up of vine-ripened red tomatoes with water droplets in soft morning sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFxa0OE5plWA-yEf1ixKEF4ljdgVuhMQ6EZXAa-2kOs2GGKC8BhDP9DaecEmgobI7S11xl-WiDRUH4MFgAlRqTz2n34OtuRAqB7H1ItFexM5vicHqTvCwgdY4kjAgpLYJviXVziKC5PwRB57-I2on_yCGAOH7Oe11n2eWJ8ayOlEKuDdPfSNnN8xkWPG1wRCmwOhIyawmfNOKVm-YRCtuHAsw-i2eolH7_1JCnEJvVihw0nkcPPE85_eMfjHbvrmkPQJCuK67cww4" />
              <button className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm text-error flex items-center justify-center hover:bg-error hover:text-white transition-all active:scale-90">
                <span className="material-symbols-outlined" data-icon="delete">delete</span>
              </button>
              <div className="absolute bottom-3 left-3">
                <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-label-xs font-label-xs">In Stock</span>
              </div>
            </div>
            <div className="p-md">
              <h3 className="font-headline-md text-body-lg text-on-surface mb-1">Organic Plum Tomatoes</h3>
              <p className="text-secondary text-label-sm font-label-sm mb-4">Sold by Green Valley Farms</p>
              <div className="flex items-center justify-between">
                <span className="font-headline-md text-primary">₦4,500 <span className="text-label-xs font-label-xs text-outline">/ Basket</span></span>
                <button className="h-10 px-4 bg-[#1B6D24] text-white rounded-lg flex items-center gap-2 text-label-xs font-label-xs hover:opacity-90 active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden group hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all duration-300">
            <div className="relative h-56 overflow-hidden">
              <img alt="Sweet Potatoes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Pile of earth-dusted sweet potatoes on a rustic wooden background with professional kitchen lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEROX8NU_37Nu2vwLq3vz1JZMcKK4wp_01EI6-lJkbmX4VECHcK3nba9iZF3eA2gQNoXo5bukzNO60jEts_UqBJx8tImjdJASUTbtvwHnL6L85zouq3T5v_-D0AWvc2w0ODvncQ-Xh5ytG_TTEBQGv0pg7tj6ZbuSLaC5pbQcSYslbtetm7PleiuxWhxUoNm3bkCX0b6a6xaKTXk9tXM-DyLCOPS99Du8_n8TJc5A8JrPpJblO3PL9BdWtyal1B6jpG7Sy9UxLKeY" />
              <button className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm text-error flex items-center justify-center hover:bg-error hover:text-white transition-all active:scale-90">
                <span className="material-symbols-outlined" data-icon="delete">delete</span>
              </button>
              <div className="absolute bottom-3 left-3">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-label-xs font-label-xs">Limited Stock</span>
              </div>
            </div>
            <div className="p-md">
              <h3 className="font-headline-md text-body-lg text-on-surface mb-1">Red Sweet Potatoes</h3>
              <p className="text-secondary text-label-sm font-label-sm mb-4">Sold by AgriTech Hub</p>
              <div className="flex items-center justify-between">
                <span className="font-headline-md text-primary">₦2,200 <span className="text-label-xs font-label-xs text-outline">/ 5kg</span></span>
                <button className="h-10 px-4 bg-[#1B6D24] text-white rounded-lg flex items-center gap-2 text-label-xs font-label-xs hover:opacity-90 active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden group hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all duration-300">
            <div className="relative h-56 overflow-hidden">
              <img alt="Fresh Ginger" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close-up of harvested ginger roots with soil texture detail and clean minimalist studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIOfnkcPi8F9VzElQELMNfdAEehkJVtDU9yLjljzoJ3HV2NspazifR9n8eL1LSIpyQuInrxTAXV0FCo2GqyZzMaopQfbqY6P6-yN61mfGZzbxgz1HDT3EGbg8tAuBCdIBrmJiNFVyv1JvigljiGoqH9U3DeixyI-KS7olq2bHIEhrYdXaA1GTJIl39W3xLn932GwWE6sKGF4GcUeJ-5aL32Lf_J9ntBJfZqMgu329FxCmwFwaP-Vg-M7Z2lymZe92Zy5bththIliM" />
              <button className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm text-error flex items-center justify-center hover:bg-error hover:text-white transition-all active:scale-90">
                <span className="material-symbols-outlined" data-icon="delete">delete</span>
              </button>
            </div>
            <div className="p-md">
              <h3 className="font-headline-md text-body-lg text-on-surface mb-1">Premium Dry Ginger</h3>
              <p className="text-secondary text-label-sm font-label-sm mb-4">Sold by Northern Fields</p>
              <div className="flex items-center justify-between">
                <span className="font-headline-md text-primary">₦8,700 <span className="text-label-xs font-label-xs text-outline">/ Sack</span></span>
                <button className="h-10 px-4 bg-[#1B6D24] text-white rounded-lg flex items-center gap-2 text-label-xs font-label-xs hover:opacity-90 active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden group hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all duration-300">
            <div className="relative h-56 overflow-hidden">
              <img alt="Carrots" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Bundle of vibrant orange carrots with green stems on a dark wooden table with natural dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyy1bFgdXxjc9afDl5qBAZe63XmzxbxQfP-8wAM4MyMWnd6oIBX7DXNVlr7uh5eSrGGNPf_em3zdRoXpQOWuxHniin0b1sJ23pSINGvLoHmFVhNN221W1luAFTA7vEKUdHkoRRjPsaDuP3I49XBKKbjgGojhKWWw00kT0BypAGRicnRwf5VfSr7xaBykbxi2cL343BmHjKlnzzKiQ-U0Q6MxirJFw90EXcEx-5sTI58sj26CFOrqhp1wI0UvcsIXg5lIbZog8xOYo" />
              <button className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm text-error flex items-center justify-center hover:bg-error hover:text-white transition-all active:scale-90">
                <span className="material-symbols-outlined" data-icon="delete">delete</span>
              </button>
            </div>
            <div className="p-md">
              <h3 className="font-headline-md text-body-lg text-on-surface mb-1">Fresh Farm Carrots</h3>
              <p className="text-secondary text-label-sm font-label-sm mb-4">Sold by Plateau Harvest</p>
              <div className="flex items-center justify-between">
                <span className="font-headline-md text-primary">₦1,500 <span className="text-label-xs font-label-xs text-outline">/ Bundle</span></span>
                <button className="h-10 px-4 bg-[#1B6D24] text-white rounded-lg flex items-center gap-2 text-label-xs font-label-xs hover:opacity-90 active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden group hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all duration-300">
            <div className="relative h-56 overflow-hidden">
              <img alt="White Onions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Top view of large white onions in a woven basket under bright daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCByEa25xy5imBiqaw5LXxnrbO9kTU873mO0tBkyfalnmb8DI1KLKv9NQZ07UAp1IyLDOoRpFZJwet1yUVLgKgzVEm0OmNvrbyXb8a0tGc0AKTxQNFAA27MBNC30X5LGILQC0lvyWBO0uS7-OnIAv3iLy1Cy63epNLL3nbFongWQndZ-icU6dIaeEQgFB325-BHDAoJVtPGQbAVu7gSR1eWnLKvkAhICWHpaVbo5b1igymnWtmsU_Xi0DAvr0tH1whg8CPnkPrgS6Y" />
              <button className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm text-error flex items-center justify-center hover:bg-error hover:text-white transition-all active:scale-90">
                <span className="material-symbols-outlined" data-icon="delete">delete</span>
              </button>
              <div className="absolute top-3 left-3">
                <span className="bg-error-container text-on-error-container px-3 py-1 rounded-full text-label-xs font-label-xs">Price Dropped</span>
              </div>
            </div>
            <div className="p-md">
              <h3 className="font-headline-md text-body-lg text-on-surface mb-1">Jumbo White Onions</h3>
              <p className="text-secondary text-label-sm font-label-sm mb-4">Sold by Zaria Organics</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-headline-md text-primary">₦3,800</span>
                  <span className="text-label-xs font-label-xs text-outline line-through ml-1">₦4,200</span>
                </div>
                <button className="h-10 px-4 bg-[#1B6D24] text-white rounded-lg flex items-center gap-2 text-label-xs font-label-xs hover:opacity-90 active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden group hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all duration-300 opacity-75">
            <div className="relative h-56 overflow-hidden">
              <img alt="Yams" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" data-alt="Large brown yams stacked in a warehouse with soft industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7yZiXKQkP0divBsbYjcsTLXOhZE51ylkT1q54drgYlEsHEbjPEI9hM5mWJfUApvn-RfgmB8CS_07wtrtEyIzn7sqBie1m7kXNpyZjwoOxzCQThHaHYgeZa0w8BPGzjErwnUCo40uapE6VMMyUfph3kFR7K6j3fc2pXN2kAq89YraOQr-DFgVXbykxDHz39w7bgiOggMyfzgEaAyc7q6YqL64G_aAr11XUnGKY9XaEu-o5suloqQSrjWWVSRPL8IZmpHfg28xXxnE" />
              <button className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm text-error flex items-center justify-center hover:bg-error hover:text-white transition-all active:scale-90">
                <span className="material-symbols-outlined" data-icon="delete">delete</span>
              </button>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="bg-white text-on-surface px-4 py-2 rounded-lg text-label-sm font-label-sm font-bold">Out of Stock</span>
              </div>
            </div>
            <div className="p-md">
              <h3 className="font-headline-md text-body-lg text-on-surface mb-1">Old Abuja Yams</h3>
              <p className="text-secondary text-label-sm font-label-sm mb-4">Sold by Benue Roots</p>
              <div className="flex items-center justify-between">
                <span className="font-headline-md text-outline">₦12,000 <span className="text-label-xs font-label-xs">/ Set of 3</span></span>
                <button className="h-10 px-4 bg-gray-200 text-gray-500 rounded-lg flex items-center gap-2 text-label-xs font-label-xs cursor-not-allowed" disabled>
                  <span className="material-symbols-outlined text-sm" data-icon="notifications">notifications</span>
                  Alert
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Mobile only) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-white dark:bg-zinc-950 h-20 pb-safe md:hidden border-t border-gray-100 dark:border-zinc-800 shadow-[0_-10px_30px_rgba(27,109,36,0.05)]">
        <button className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-[#1B6D24] dark:text-green-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Market</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200">
          <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Orders</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200">
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider mt-1">Profile</span>
        </button>
      </nav>
    </>
  );
}
