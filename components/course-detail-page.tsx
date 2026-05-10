"use client"

import React from 'react';

export default function CourseDetailPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface antialiased" style={{fontFamily: "'Inter', sans-serif", minHeight: 'max(884px, 100dvh)'}}>
      {/* TopAppBar */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-4 h-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <img alt="KIZ FARM Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ugzYC4-jqxSvxpO-z71bb0GLSnz_-daStJIDb_rNawDmL25axyIiZy8Cqf1UcXvoLZLDeXjPhmjvdKjTxAlrjvjl3HXCUWXUj5nkd-CNJRdE5q0cUnyPeJSBDqfwKp2LBqoAXSOr9rxTHYeYdNtnu7qp_P10cfeet2EPbyN482EHqLb_yukw7jI8RArrUC1lZTB-VHlTnuP22hg4JuRelxxtVa1Qgw4ltrQRNHgV0L1G3laFJ7TF4ZomEhxJ1EQNPEyGr6vd4TvKw" />
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6 items-center">
              <a className="font-inter antialiased text-sm font-medium text-gray-500 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-150 active:scale-95" href="#">Hub</a>
              <a className="font-inter antialiased text-sm font-medium text-green-800 font-bold px-3 py-2 rounded-lg transition-all" href="#">Marketplace</a>
              <a className="font-inter antialiased text-sm font-medium text-gray-500 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-150 active:scale-95" href="#">Profile</a>
            </nav>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
              <img alt="Nigerian farmer profile photo" className="w-full h-full object-cover" data-alt="A professional close-up portrait of a Nigerian man in his late 40s, representing a successful modern farmer. He has a warm, confident expression and is wearing a clean, high-quality linen shirt in a neutral earth tone. The lighting is soft and natural, suggesting an outdoor environment at golden hour. The background is a softly blurred agricultural landscape, maintaining a clean and professional aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB55hNrWxpBViJxAMI1gdC6V6NLL8_avGj0FZDAqRvHCxcPtgvobbtr73udP7c3ervWJm0XprI7bRcN6MgR9BS_OyEoayc6RxhD-fstvH10pWEF2iDPysLhpYVCAe2uPEHOWs_HPgg11HxcI9ExOmHj6TS2z7pLfbPHnul6vQJkFR06mvqLgvr9rmDVAWNng3NCfZ2rXwmfaftYka0_3VSTipTwI0iJEIPt4EIrXJ-vo6ozhlSvtnVgObA3kNCF_bJfnCNsxXHerZY" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-xl py-lg pb-32">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8">
            <div className="rounded-xl overflow-hidden aspect-video relative shadow-sm border border-outline-variant">
              <img alt="Yam Harvest" className="w-full h-full object-cover" data-alt="An expansive, high-resolution hero image showcasing a bountiful harvest of large, healthy yams laid out on organic woven mats in the Nigerian countryside. The sunlight is vibrant and warm, highlighting the earthy textures of the yams and the lush green foliage of the farm in the background. The composition is professional and clean, emphasizing agricultural abundance and success. The color palette is rich with deep greens and warm earth tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdNupJfBiioMUB0RNrsSwJ6ow0edziV1OTW_BCEJScYGtUOt3OUccMBUBXmT90FKW7LG0-9JinOyqK67LRehi40equwJIGEUEUKTRzeD1xCjuCN232EH7tM7W0e4ZpsTZQbLka-g_y2oAO8kr29AVbOaMknnrn5bqX1g01vfoK78LIUHof7VxknveN4uNDXFKOAB87lDnCUKlJAWG9TCkbyPUqRTWfMKem4oKJbceCAMxYqK6W1mpqN5U9H8xKdywFq2TW_uaNc68" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-primary px-3 py-1 rounded-full text-label-sm uppercase tracking-wider mb-2 inline-block">Best Seller</span>
                <h1 className="font-h1 text-h1 text-white">Advanced Yam Cultivation</h1>
              </div>
            </div>

            {/* Course Core Info */}
            <div className="mt-lg flex flex-col md:flex-row md:items-center justify-between gap-md p-lg bg-white rounded-xl border border-outline-variant shadow-sm">
              <div>
                <div className="flex items-center gap-xs mb-sm">
                  <span className="material-symbols-outlined text-yellow-500" data-icon="star" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined text-yellow-500" data-icon="star" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined text-yellow-500" data-icon="star" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined text-yellow-500" data-icon="star" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined text-yellow-500" data-icon="star" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="font-numeric text-numeric text-on-surface-variant ml-sm">(4.9 • 1,240 students)</span>
                </div>
                <div className="flex items-center gap-md">
                  <span className="font-h2 text-h2 text-primary">₦45,000</span>
                  <span className="font-body-md text-body-md text-on-surface-variant line-through">₦65,000</span>
                </div>
              </div>
              <button className="bg-primary-container text-on-primary hover:opacity-90 transition-all font-inter font-bold px-12 py-4 rounded-lg text-body-md shadow-sm active:scale-95">
                Subscribe Now
              </button>
            </div>

            {/* About & Learning */}
            <div className="mt-lg grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm">
                <h3 className="font-h3 text-h3 mb-md text-on-primary-fixed-variant">About this course</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Master the art and science of premium yam production. This comprehensive module covers everything from soil preparation and seed selection to post-harvest management and export quality standards. Designed for commercial success in the Nigerian agricultural landscape.
                </p>
              </div>
              <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm">
                <h3 className="font-h3 text-h3 mb-md text-on-primary-fixed-variant">What you'll learn</h3>
                <ul className="space-y-sm">
                  <li className="flex items-start gap-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    <span className="font-body-sm text-body-sm text-on-surface">Soil pH optimization for tuber growth</span>
                  </li>
                  <li className="flex items-start gap-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    <span className="font-body-sm text-body-sm text-on-surface">Advanced irrigation &amp; mulching techniques</span>
                  </li>
                  <li className="flex items-start gap-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    <span className="font-body-sm text-body-sm text-on-surface">Organic pest &amp; disease control</span>
                  </li>
                  <li className="flex items-start gap-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    <span className="font-body-sm text-body-sm text-on-surface">Commercial scaling and ROI planning</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Meet your coach */}
            <div className="mt-lg bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col md:flex-row gap-lg items-center md:items-start">
              <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 border-4 border-primary-fixed">
                <img alt="Dr. Emeka Okafor" className="w-full h-full object-cover" data-alt="A professional headshot of Dr. Emeka Okafor, a distinguished Nigerian agricultural academic. He is smiling warmly, wearing professional attire that bridges the gap between academia and field expertise. The background is a clean, bright laboratory or study environment. The lighting is sophisticated, creating a sense of authority and trustworthiness. The overall aesthetic is modern and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0QLxEA0ktFwWSCA74j5eL5_iO768a0FG6kD5U44E0FiX5Ne71iLrkJWOLzij6sEWkxWmQfjnDWW_CcgPScxADiRu5_Hi7QPdtOveAolxHHQxG5oVsnN3wN5JTSzdoFlp8pO10aiqRarkzt3wLrgBFqZhXZMEEvkL4KaLKTrGrwFrdRhdpTVN5joZsxopkPgD1EP86MVRmvket7Oqn-u5sw5kksZvRI9-P2ABjZzeQV8zqjF9fA_7MjaCdk8r68tj_6Jws4ECGM3o" />
              </div>
              <div>
                <h3 className="font-h3 text-h3 text-on-surface mb-xs">Meet your Coach</h3>
                <p className="font-label-md text-label-md text-primary mb-md">Dr. Emeka Okafor • Senior Agronomist</p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  With over 20 years of field experience and a PhD in Tuber Crop Management, Dr. Okafor has helped thousands of farmers transition from subsistence to commercial-scale yam production. His methods are celebrated for doubling yields within two seasons.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar: Related Courses */}
          <div className="lg:col-span-4 space-y-md">
            <h3 className="font-h3 text-h3 text-on-surface flex items-center gap-sm">
              <span className="material-symbols-outlined" data-icon="view_agenda">view_agenda</span>
              Related Courses
            </h3>
            {/* Related Card 1 */}
            <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group cursor-pointer">
              <div className="aspect-video rounded-lg overflow-hidden mb-md">
                <img alt="Cassava Processing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="A cinematic, high-detail image of cassava processing in a modern Nigerian facility. The scene shows clean, industrial machinery alongside fresh cassava roots. The lighting is bright and industrial-chic, with a focus on hygiene and modern technology. The focus is on agricultural technology and innovation in Nigeria. The photography is high-contrast and professional, with a clean and professional aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbjIuIdcVF5h2pMX5YIBHrR9salYJ_Zc6moc9eRy7I9uuIoaMBixVUEzhm_z6-t_DteJ40S_aX67iSFpUd7W9UnqIhTolE0RMegzz5Xi_fuZaI6-H0L3cB40vymR6_ncjb9ZPKyjmGmrfGghmRmb8CXFoEpeYiuMNogpUS_C2dgMQA9_Hq_rmFEGnFhATAEGuf3iTwvu-h495ACibpI604bKBOMtMzQedhp2rVFK4Kk_oS8tiO70R6x32JNi2JEdo5iXiM-PV7x-I" />
              </div>
              <h4 className="font-label-md text-label-md text-on-surface mb-xs">Modern Cassava Processing</h4>
              <p className="font-numeric text-numeric text-primary font-bold">₦32,000</p>
            </div>
            {/* Related Card 2 */}
            <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group cursor-pointer">
              <div className="aspect-video rounded-lg overflow-hidden mb-md">
                <img alt="Maize Storage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="A professional agricultural photograph showing advanced grain storage silos in a bright, sunny farm setting. The silos are gleaming silver against a vibrant blue sky. The composition is modern and geometric, emphasizing efficiency and technological advancement in farming. The lighting is crisp and clear, creating a clean, high-end visual style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEXwhn-knONNK1FE22MjoqmYx3pnoVKVqLBFVSyQekscsvh9T2e0br7ZhEI0rTBscZbnwoBjgBYRlIVlBdA0YmF3ffvMOigOa4wy1pdFjs2Oom2zEGAEm8jh41pYWtau7WRI71LoHRxp5DKL3HPZ7PmFhoUCY7b8pwyL2vUvbOwexHyfexrSZ6tTlmTrOd7aT5c2nO1i-uiJx3SI6uiCnUv8U9gHxCGte3dXygoB8tCNfjZrT_CqM4xcKQbw5DuIBd-ppTrCmHpaU" />
              </div>
              <h4 className="font-label-md text-label-md text-on-surface mb-xs">Post-Harvest Grain Management</h4>
              <p className="font-numeric text-numeric text-primary font-bold">₦28,500</p>
            </div>
            {/* Related Card 3 */}
            <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group cursor-pointer">
              <div className="aspect-video rounded-lg overflow-hidden mb-md">
                <img alt="Organic Fertilizers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="A high-key, minimalist digital art style photograph showing rich, dark organic compost being handled by a farmer wearing clean protective gloves. The texture of the soil is highly detailed and vibrant. The scene is illuminated by soft, natural daylight, creating an atmosphere of growth and sustainability. The color palette centers on deep browns and lush greens." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHckjzBGftu6jlH6pA7bZqNuXJvR09Wc8a0p435y_KMZTpw1AG2a4KnSFMcFh4k8c6WQ-5MNumMigZrkmqi8Mcwyf80jUVR4eC226LYwcf2ouyzC0jIU75HZ1mSXXNuo3LiShJVmwTCh5er9Q1sHhSamZdHNI_jihkx1WHtXNB_GTBc1FkWv7SI_o3P3D0CM3NVkiYm5rmEWRoVhp0ZM9LfcAuisZ-hK3V8T1H3fZt4fXIcf4zsF-2F89TLLRG2iu0_tBxbbA8O00" />
              </div>
              <h4 className="font-label-md text-label-md text-on-surface mb-xs">Organic Fertilizer Formulation</h4>
              <p className="font-numeric text-numeric text-primary font-bold">₦15,000</p>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 pb-safe bg-white border-t border-gray-100 shadow-[0_-1px_3px_0_rgba(0,0,0,0.05)] z-50 md:hidden">
        <div className="flex flex-col items-center justify-center text-gray-500 px-4 py-1.5 font-inter text-[11px] font-semibold hover:text-green-700 active:opacity-80 transition-opacity">
          <span className="material-symbols-outlined" data-icon="school">school</span>
          <span>Hub</span>
        </div>
        <div className="flex flex-col items-center justify-center text-green-800 bg-green-50 rounded-lg px-4 py-1.5 font-inter text-[11px] font-semibold active:opacity-80 transition-opacity">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span>Marketplace</span>
        </div>
        <div className="flex flex-col items-center justify-center text-gray-500 px-4 py-1.5 font-inter text-[11px] font-semibold hover:text-green-700 active:opacity-80 transition-opacity">
          <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
          <span>Profile</span>
        </div>
      </nav>
    </div>
  );
}
