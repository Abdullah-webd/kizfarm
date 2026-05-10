"use client"

import React from 'react';

export default function ProductDetailPage() {
  return (
    <div className="bg-background text-on-background font-body-md">
      {/* TopAppBar */}
      <nav className="bg-white dark:bg-slate-950 docked full-width top-0 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center px-6 h-16 w-full max-w-[1440px] mx-auto sticky z-50">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full transition-colors">
            <span className="material-symbols-outlined text-[#1B6D24]">arrow_back</span>
          </button>
          <img alt="KIZ FARM Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6 mr-8">
            <a className="text-gray-500 dark:text-gray-400 font-['Inter'] antialiased text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors px-2 py-1 rounded" href="#">Home</a>
            <a className="text-[#1B6D24] font-semibold font-['Inter'] antialiased text-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors px-2 py-1 rounded" href="#">Market</a>
            <a className="text-gray-500 dark:text-gray-400 font-['Inter'] antialiased text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors px-2 py-1 rounded" href="#">Orders</a>
          </div>
          <button className="p-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors rounded-full relative">
            <span className="material-symbols-outlined text-[#1B6D24]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
            <img alt="User Profile" data-alt="close up headshot of a smiling man with a friendly expression in soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVloDG359znR0oD8OoAHr18zD6gy6q_Y5wYSg2bFmBlknJ5XA_vVBDDxzabbluZap__eEh7S4bIrN-ohYMLsQteToGku6Rrh_EjW4j8F-wyxPw4bQbHLWxUK6-u-hwqvc5WbnooEXY89GEVTwm5VtqJcB2JoEJiHf6YG9rQsb-zqX02o3Ix-g4dclsz3qBQ91YDEX2L6vbgt5JdSMo7IKvZZq7AWmOVR16N_YyfF9xe1l8rixZNCI6O12Hrla-Qog_v7pnfSnUqDc" />
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="max-w-[1440px] mx-auto px-4 md:px-margin py-base md:py-md">
        {/* Breadcrumb (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-2 mb-md text-on-surface-variant font-label-xs">
          <a className="hover:text-primary" href="#">Market</a>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <a className="hover:text-primary" href="#">Vegetables</a>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface">Premium Organic Bell Peppers</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Gallery Section (Bento Layout) */}
          <div className="lg:col-span-7 flex flex-col gap-xs md:gap-base">
            <div className="w-full aspect-[4/3] md:aspect-[16/10] rounded-xl overflow-hidden bg-surface-container-low group">
              <img alt="Fresh Bell Peppers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="extreme close up of vibrant red and yellow bell peppers with water droplets reflecting natural morning sunlight in a farm setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Sx4gBPJtd_xs8QwoPKtpeq9w00HdOmkShgdqcU1ZZqoIRro-H5PMup1_Fpvdc-NHBdgF8m4ucMzE180JMxA9TyzgrV5wSGnXz5B5uYlRrKkdN-5_JELuyqy_KTcKj8XosBgTJwPIBV4WCgszumB8WAKeitN8pFEO25Q4gD_jl3A8AZi2mt4HoVZ0huvZ6CNae87pUhCbioqqQ-kHs3Kwq05eNelUfaGJrRiirtkkF8U7ZpCQ7JOfGeaYS3YmlBHYXOFstKPztSU" />
            </div>
            <div className="grid grid-cols-4 gap-xs md:gap-base">
              <button className="aspect-square rounded-lg overflow-hidden border-2 border-primary">
                <img alt="Bell Pepper Detail" className="w-full h-full object-cover" data-alt="close up of a single ripe red bell pepper sitting on a wooden farm table with earthy textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCniGjYsbjgvFNmPzU5cv2_LSR3aWkEyZqI0XXuz2S_cnQKuFCL3N3-BWhDqSoOC9tFLnkR5s_GwDKn58UN3h4PEasPRVJpDlL68oy3ZMJvFqo3tRrF7CC_vtHXUhGCMPlqg7qhP2pYfFYJgjie1dUlJYNH186cDdcM8ljhxd5-ap8KHu5zV5fgjLVrliCM0xtkoYyjZwRQxBbSf7355JdmZJVwUZmlGrcpTRhz34n7HHQBE5I_TchOZVqWa-Ed9MUzfIrOJeLHh98" />
              </button>
              <button className="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity">
                <img alt="Bell Pepper Detail" className="w-full h-full object-cover" data-alt="top view of a basket filled with harvested green and yellow bell peppers in a sunlit field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKyL2GnDj1EJAHrtRZntOXJ58J2O_9n38DiUY3EIPGRQragcgD4QcT8jNSjUdv-30cvRc_91-GwEmF26bwQ6xwgdDs3rTBbMZ6g8bwUbLRkXuYmwaAKeFUqV8zk6BOomw_E3AepYXzAv_WvBR4bl0MQ38wkBa16fwwSD9DcNv8IBh7C2eMysNFGvqjWMTmDgmIMtJZ8Lii8Y6Y5ZC5xnn5mWYOeqCnILQlIoghrDTK6ev8gA20LP6XCymhl2zfEbXP0FC-IgnFkU8" />
              </button>
              <button className="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity">
                <img alt="Farm Visual" className="w-full h-full object-cover" data-alt="scenic view of a greenhouse interior with rows of healthy pepper plants reaching towards the soft diffused glass light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhbkBT0savqU2Lz2l8b6ObwQNkTY3v6coAkL5FXzzDYN1ZgEdiR_ikjagYhdbEfc8fELglFAFFaa-b1NC9UF47NoxAk8rVsSmZMZhzESppaTFtWo70Uqf8JDwmoe7j65OfsWFIzk7oWvcF7wGQujDjQ6UbpWfvR16J-G5YEY4TqGJ3JFm8EEhwejiAFJzCK-2yqPhm1pUFqXlY3_zremlxm8KvzC9S8RBuPfLzMwJVzTO_0SNJzU2uQN1sfnJkZvASxvpMqmBRMHY" />
              </button>
              <button className="aspect-square rounded-lg overflow-hidden bg-surface-container-highest relative group">
                <img alt="More Images" className="w-full h-full object-cover opacity-40" data-alt="abstract artistic shot of fresh soil and green leaves in an organic farm with high contrast shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Ov1SGLs2vrsSebXnJ7hiymMjSjeencjCT4ZV7Mw2mK_38q60ustOVLCOc3qBcZFXYMoZ6tZCSzVm6JraaXA7WsK7W1fyDazHU9qMIXu0KO3SCrRxLi-b7Iy4nik9PHe1NNTNatCFi5QdhwE1i4svIh_I2wQSPbYHtAhVP0aAoDimYF7aR485aEO-csGbEeT3qvX7PcWMsoG-1rM0DJLTS_BVyb4dExwinCVRko8YCUhYB5s-jc6CLU33iu1vV4RVYZ4wVmGBl6o" />
                <div className="absolute inset-0 flex items-center justify-center font-headline-md text-primary">+4</div>
              </button>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="lg:col-span-5 flex flex-col gap-gutter">
            <div className="flex flex-col gap-base">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-green-100 text-primary-container font-label-xs rounded-full inline-flex items-center gap-1">
                  <span className="w-2 h-2 bg-primary-container rounded-full"></span>
                  Available Now
                </span>
                <div className="flex items-center gap-1 text-tertiary">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-sm">4.9 (128 Reviews)</span>
                </div>
              </div>
              <h2 className="font-headline-lg text-on-surface">Premium Organic Bell Peppers (1kg)</h2>
              <div className="flex items-baseline gap-2">
                <span className="font-headline-xl text-primary">₦3,200</span>
                <span className="text-on-surface-variant line-through font-body-md">₦4,000</span>
              </div>
            </div>

            {/* Farmer Info Card */}
            <div className="p-md bg-white border border-gray-200 rounded-xl flex items-center gap-md">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-100">
                <img alt="Farmer" data-alt="portrait of a weathered but smiling elderly farmer wearing a straw hat in front of a sun-drenched cornfield" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD76iVppN8AM0sCBTpncbDFPAUAOO4NbzJdK-s3K3mbknF2Edhpo0GiHZEeB00opUwN22C2vlXeo-CjaIGkmwHsIAr8IIuUg4jDHNT7u9wSmV4BWvSBRtebC9-bVJPASNmGeiGrRdD6T1IEGHqc4BXqqkNXsuvF6YuXL_8yvjaZEzUYq53f7KfmoyMKKfrMKxFTY0XQMIfTikSPlykpnuTOw9q2pu8YEbeGduve1EXcGnZ1UzZhM3nZSJ06Hrfhe-7R-jB97LDCdzI" />
              </div>
              <div className="flex-1">
                <h4 className="font-headline-md text-on-surface text-[18px]">Ibrahim Musa</h4>
                <p className="text-on-surface-variant font-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  Kiz Farm, Plateau State
                </p>
                <div className="flex gap-2 mt-xs">
                  <span className="text-[10px] bg-surface-container-highest px-2 py-0.5 rounded text-on-surface-variant font-semibold">CERTIFIED ORGANIC</span>
                  <span className="text-[10px] bg-surface-container-highest px-2 py-0.5 rounded text-on-surface-variant font-semibold">5+ YEARS PARTNER</span>
                </div>
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-primary hover:bg-green-50 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-base">
              <h3 className="font-headline-md text-[20px]">Product Description</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Sourced directly from our organic farms in the fertile highlands of Plateau State. Our bell peppers are hand-picked at peak ripeness to ensure maximum flavor and nutritional value.
                <br /><br />
                Grown without synthetic pesticides or fertilizers, these peppers are rich in Vitamin C and antioxidants. Perfect for salads, stir-fries, or stuffing.
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-gutter border-t border-b border-gray-100 py-md">
              <span className="font-headline-md text-[18px]">Quantity</span>
              <div className="flex items-center bg-surface-container-low rounded-xl p-1">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white transition-all text-on-surface">
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <span className="px-gutter font-headline-md text-[18px]">1</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white transition-all text-on-surface">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <span className="text-on-surface-variant font-label-sm">kg (Approx 4-6 pieces)</span>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex gap-gutter mt-base">
              <button className="flex-1 h-[48px] border-2 border-primary text-primary font-label-sm rounded-xl hover:bg-green-50 transition-all flex items-center justify-center gap-2 active:scale-95 duration-150">
                <span className="material-symbols-outlined">chat</span>
                Chat with Farmer
              </button>
              <button className="flex-[1.5] h-[48px] bg-[#1B6D24] text-white font-label-sm rounded-xl hover:opacity-90 shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 duration-150">
                <span className="material-symbols-outlined">shopping_cart</span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-xl border-t border-gray-100 pt-xl pb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-base mb-lg">
            <div>
              <h2 className="font-headline-lg mb-xs">Customer Reviews</h2>
              <div className="flex items-center gap-md">
                <div className="flex text-tertiary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <span className="font-headline-md">4.9 / 5.0</span>
              </div>
            </div>
            <button className="text-primary font-label-sm flex items-center gap-1 hover:underline">
              Write a Review
              <span className="material-symbols-outlined text-[18px]">edit</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Review Card 1 */}
            <div className="p-md bg-white border border-gray-200 rounded-xl hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-shadow">
              <div className="flex items-center gap-base mb-base">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-headline-md text-[14px]">AM</div>
                <div className="flex-1">
                  <h5 className="font-label-sm">Amina Mohammed</h5>
                  <div className="flex text-tertiary scale-75 origin-left">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant font-body-md text-sm">Extremely fresh! You can tell they were picked recently. The colors are so vibrant and they taste amazing in salads.</p>
            </div>
            {/* Review Card 2 */}
            <div className="p-md bg-white border border-gray-200 rounded-xl hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-shadow">
              <div className="flex items-center gap-base mb-base">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-headline-md text-[14px]">CO</div>
                <div className="flex-1">
                  <h5 className="font-label-sm">Chidi Okafor</h5>
                  <div className="flex text-tertiary scale-75 origin-left">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant font-body-md text-sm">Delivery was on time and the packaging kept the peppers crisp. Will definitely be ordering from Farmer Musa again.</p>
            </div>
            {/* Review Card 3 (Hidden on mobile) */}
            <div className="hidden lg:block p-md bg-white border border-gray-200 rounded-xl hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-shadow">
              <div className="flex items-center gap-base mb-base">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-headline-md text-[14px]">SJ</div>
                <div className="flex-1">
                  <h5 className="font-label-sm">Sarah Johnson</h5>
                  <div className="flex text-tertiary scale-75 origin-left">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant font-body-md text-sm">The best bell peppers I've found in the city. Truly organic quality. Highly recommended for home cooks.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Mobile Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-gutter py-md flex gap-base z-[60] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button className="flex-1 h-[48px] border-2 border-primary text-primary font-label-sm rounded-xl flex items-center justify-center gap-1 active:scale-95 duration-150">
          <span className="material-symbols-outlined text-[20px]">chat</span>
          Chat
        </button>
        <button className="flex-[2] h-[48px] bg-[#1B6D24] text-white font-label-sm rounded-xl flex items-center justify-center gap-2 active:scale-95 duration-150 shadow-md">
          <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
          Add to Cart
        </button>
      </div>

      {/* BottomNavBar (Desktop Navigation Mirror) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-2 bg-white/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 md:hidden">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1 hover:text-[#1B6D24] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-['Inter'] text-[12px] font-semibold mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] bg-green-50 dark:bg-green-900/20 rounded-xl px-4 py-1 active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
          <span className="font-['Inter'] text-[12px] font-semibold mt-1">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1 hover:text-[#1B6D24] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="font-['Inter'] text-[12px] font-semibold mt-1">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1 hover:text-[#1B6D24] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Inter'] text-[12px] font-semibold mt-1">Profile</span>
        </a>
      </nav>
    </div>
  );
}
