"use client"

import React from 'react';

export default function LearningHubPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen pb-24" style={{fontFamily: "'Inter', sans-serif"}}>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* TopAppBar Shell */}
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-4 h-16 max-w-7xl mx-auto">
          <div className="flex items-center">
            <img alt="KIZ FARM Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ugzYC4-jqxSvxpO-z71bb0GLSnz_-daStJIDb_rNawDmL25axyIiZy8Cqf1UcXvoLZLDeXjPhmjvdKjTxAlrjvjl3HXCUWXUj5nkd-CNJRdE5q0cUnyPeJSBDqfwKp2LBqoAXSOr9rxTHYeYdNtnu7qp_P10cfeet2EPbyN482EHqLb_yukw7jI8RArrUC1lZTB-VHlTnuP22hg4JuRelxxtVa1Qgw4ltrQRNHgV0L1G3laFJ7TF4ZomEhxJ1EQNPEyGr6vd4TvKw" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              <a className="text-green-800 font-bold font-inter antialiased text-sm font-medium" href="#">Hub</a>
              <a className="text-gray-500 font-inter antialiased text-sm font-medium hover:bg-gray-50 rounded px-2 py-1 transition-all" href="#">Marketplace</a>
              <a className="text-gray-500 font-inter antialiased text-sm font-medium hover:bg-gray-50 rounded px-2 py-1 transition-all" href="#">Profile</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-50 active:scale-95 duration-150 transition-all">
              <span className="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
              <img alt="Nigerian farmer profile photo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVssQeyAsPI4S9p-P4jJwz9q_7ecwcAA6YtkFt7EuSwW-I1hSN1Mwb53D8-RdPAXtjrh8PGHEtuv-e6rrYB5nbfpf3_GZyEXq4OuHxHy3e3z3a91jkTTdbmDSvciF7OSSeZ5p-7deCeVaiVu1pT-hFJJiUEtJkPB1klK7Q8FDaXrudmE5C1vggHY-ZwXNAeInssFpjDsp9hqBxHcc7XVzJ5F5CuMSpSuF3OTfUlt9eavXsprPB4BGjsWLZuJ2HKVl8Hv32hhuFPfo" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-margin pt-sm">
        {/* Section 1: Hero Banner */}
        <section className="mt-lg rounded-xl overflow-hidden relative min-h-[320px] md:min-h-[400px] flex items-center bg-primary-container">
          <div className="absolute inset-0">
            <img className="w-full h-full object-cover opacity-60 mix-blend-overlay" data-alt="A focused Nigerian farmer in a vibrant green maize field, holding a modern smartphone to learn new agricultural techniques. The late afternoon golden hour sunlight illuminates the lush crops and creates a warm, hopeful atmosphere. The photography is high-contrast and professional, with a shallow depth of field that emphasizes the farmer's determination and the lushness of the Nigerian landscape. The overall mood is empowering and technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlk63hc9otTm4zOeu6j9HnWu15gyz0LmDzLH5UjbJhBsFj8cc22hC6PDUSdzT3tveD4CqbiFelfjTqUqiugYsZWP6U5Zfzz9myE4bdKVBWLvJOKdl6-uHRxDceOjbcujs5mAYuDVTgU---frR8b9RYWBgn71FKFJlx8EfM-rqclET0gLLR-svLOp-dMktyA74SKs1FU9JNHwXkYtK-g0-vV80nYBx8CZiNQgBun5yL1x8kFvIoOEA0bJ79PNLmm5s-L7e69_ojfak" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/90 via-primary-container/40 to-transparent"></div>
          </div>
          <div className="relative z-10 px-8 md:px-16 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">New Learning Hub</span>
            <h2 className="font-h1 text-h1 text-on-primary mb-4">Master Your Harvest</h2>
            <p className="font-body-md text-body-md text-on-primary/90 mb-8 max-w-md">Access expert-led courses designed for the modern Nigerian farmer. Increase yield, manage livestock, and scale your agribusiness with precision.</p>
            <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors shadow-lg active:scale-95">Start Learning Now</button>
          </div>
        </section>

        {/* Section 2: Search & Category Chips */}
        <section className="mt-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative flex-1 max-w-xl">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
              <input className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Search for courses, crops or techniques..." type="text" />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2 md:pb-0">
              <button className="whitespace-nowrap px-6 py-2 bg-primary text-on-primary rounded-full font-label-sm text-label-sm">All Topics</button>
              <button className="whitespace-nowrap px-6 py-2 bg-white border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary rounded-full font-label-sm text-label-sm transition-colors">Crop Science</button>
              <button className="whitespace-nowrap px-6 py-2 bg-white border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary rounded-full font-label-sm text-label-sm transition-colors">Livestock</button>
              <button className="whitespace-nowrap px-6 py-2 bg-white border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary rounded-full font-label-sm text-label-sm transition-colors">Soil Health</button>
              <button className="whitespace-nowrap px-6 py-2 bg-white border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary rounded-full font-label-sm text-label-sm transition-colors">Business</button>
            </div>
          </div>
        </section>

        {/* Section 3: Expert Coaches */}
        <section className="mt-xl">
          <div className="flex items-center justify-between mb-lg">
            <h3 className="font-h2 text-h2 text-on-surface">Expert Coaches</h3>
            <a className="text-primary font-label-md text-label-md hover:underline" href="#">View all experts</a>
          </div>
          <div className="flex gap-gutter overflow-x-auto hide-scrollbar pb-6 snap-x">
            {/* Coach 1 */}
            <div className="flex-shrink-0 w-64 bg-white p-lg rounded-xl border border-outline-variant shadow-sm snap-start hover:shadow-md transition-all group">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img className="w-full h-full object-cover rounded-full" data-alt="A professional portrait of a female Nigerian agricultural expert, Dr. Amara Oke. She is wearing a clean white lab coat over professional attire, with a warm and confident smile. The background is a brightly lit, modern research laboratory with hints of hydroponic plants. The lighting is clean and high-key, conveying authority, expertise, and trust in a light-mode corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCT4B0ZroSDkRljSh4aBjUQxYH-2_ykx35vG8nkgmUA_M72TxOf-cLZokAwhWZ_xE7VUVWNfL9Xsc_SF4ZfZUH2QjSCH-WvwT0Psgb9uY5RgN6gjyvhpZDx51FsE_hlliKmyfIWP6w1mo5FHObuVU0oQkP7SxsB5ZN0ol4tnyBV7umInc6IE1mu6CfQmdUQzI36VjgYSEGBbw9_KEPY8WQwSJ1FP-7DxKilDEz34x3180gAI1ZV7D34q6h99bLvMmP6_SRt5a9QTI" />
                <div className="absolute bottom-1 right-1 bg-primary text-on-primary w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="material-symbols-outlined text-[14px]" data-icon="verified" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                </div>
              </div>
              <div className="text-center">
                <p className="font-h3 text-h3 text-on-surface mb-1">Dr. Amara Oke</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-4">Crop Genetics Specialist</p>
                <div className="flex justify-center items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="font-numeric text-numeric">4.9 (124 reviews)</span>
                </div>
              </div>
            </div>
            {/* Coach 2 */}
            <div className="flex-shrink-0 w-64 bg-white p-lg rounded-xl border border-outline-variant shadow-sm snap-start hover:shadow-md transition-all group">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img className="w-full h-full object-cover rounded-full" data-alt="A portrait of a male Nigerian agricultural consultant, Ibrahim Yusuf, standing in a sun-drenched cattle ranch. He is wearing a durable khaki shirt and a focused expression. The background features healthy cattle grazing in the distance under a vast Nigerian sky. The image is crisp, with high-quality natural lighting that emphasizes his hands-on experience and deep connection to the land." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHzFmSFLRlwbiGdo6hIZ_2q2nR6sbsnhMWY8HHqJvMkysyIKslbxDF3xqRU5mchQJ94gxFcayGsl1uGK96fGIW9PVYdP7YxqqOddbkk26zyRIJJDA7uqpkmJffP2QdBBnTRCHyhV2YUYpoyP8r-Nzgc7Iii4BocUo9RQ-UZUmIdfqXzDqarLra_cVZkUM5u86iwEYQheKKVWfvoIvgma_JdiU5toKQfqkJqRIAgPu6ok-12eAco-tzDSMo96ZmkMSroGRuGnwIoU0" />
                <div className="absolute bottom-1 right-1 bg-primary text-on-primary w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="material-symbols-outlined text-[14px]" data-icon="verified" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                </div>
              </div>
              <div className="text-center">
                <p className="font-h3 text-h3 text-on-surface mb-1">Ibrahim Yusuf</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-4">Livestock Management</p>
                <div className="flex justify-center items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="font-numeric text-numeric">4.8 (89 reviews)</span>
                </div>
              </div>
            </div>
            {/* Coach 3 */}
            <div className="flex-shrink-0 w-64 bg-white p-lg rounded-xl border border-outline-variant shadow-sm snap-start hover:shadow-md transition-all group">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img className="w-full h-full object-cover rounded-full" data-alt="A smiling female Nigerian agribusiness mentor, Funmi Adelaja, in a modern office environment. She is dressed in vibrant, professional African attire that blends tradition with business. The office is bright and clean with large windows. The aesthetic is corporate yet approachable, focusing on financial growth and professional success in the agricultural sector." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHlxUwjAmSW4fop9iDfWgyRfgAZSEb1d0S96op8d_daH0hGlPcrHoBwyJVFR0ppC7Pmrh6LnM2xZcJBidl2SzP4y7h8RLBHYueprsxdLOp9GAPiBVQbINm5k-Gonw2TSHfsxQI48m-nMJrRjOX-2-IYgJQ71ZFwp9otltWo1ZuKfcSVsqHtcUVr8_RMwtL8MlImFmuNzL0Gy0BKysdsWQHLPUNjii9yCD96f64LsHJ5PTy4_c3KMqTDkqLlmrdxrk1v6A6nojxkD4" />
                <div className="absolute bottom-1 right-1 bg-primary text-on-primary w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="material-symbols-outlined text-[14px]" data-icon="verified" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                </div>
              </div>
              <div className="text-center">
                <p className="font-h3 text-h3 text-on-surface mb-1">Funmi Adelaja</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-4">Agribusiness Strategy</p>
                <div className="flex justify-center items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="font-numeric text-numeric">5.0 (56 reviews)</span>
                </div>
              </div>
            </div>
            {/* Coach 4 */}
            <div className="flex-shrink-0 w-64 bg-white p-lg rounded-xl border border-outline-variant shadow-sm snap-start hover:shadow-md transition-all group">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img className="w-full h-full object-cover rounded-full" data-alt="A portrait of a male Nigerian agronomist, Kola Benson, examining a soil sample in a field. He is wearing outdoor gear and a hat. The image captures him in action, looking intently at the earth. The background is a soft blur of a cultivated vegetable farm during the morning mist. The lighting is soft and natural, emphasizing precision and the scientific aspect of farming." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwc_LV_fY4y14Nq6GQhXMNOBgxoq64AbKVY6naelJ42NodbniemfpHjvmKXKcopDdVoK2wOnPL0hV4ZSnYwfCBi3Ur9Ukv2aptuethgBCW2nwaF5YjaUf3oiiRCojp1Xh83gqpJRJ8q0AauGQtb06XGddIcG8Tuw2hwD1EOUJ7sg0MSFSDr9GQxz729bUbP6IQjLwFUklez4FntBJb_yGdbJwM-J31vZSHV7H89XJs65It00riS-Y2uN1WCh4IHie0gVwJGKpQSDY" />
                <div className="absolute bottom-1 right-1 bg-primary text-on-primary w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="material-symbols-outlined text-[14px]" data-icon="verified" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                </div>
              </div>
              <div className="text-center">
                <p className="font-h3 text-h3 text-on-surface mb-1">Kola Benson</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-4">Soil &amp; Irrigation</p>
                <div className="flex justify-center items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="font-numeric text-numeric">4.7 (210 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Featured Courses Grid */}
        <section className="mt-xl">
          <div className="flex items-center justify-between mb-lg">
            <h3 className="font-h2 text-h2 text-on-surface">Featured Courses</h3>
            <div className="flex gap-2">
              <button className="p-2 border border-outline-variant rounded-full hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
              </button>
              <button className="p-2 border border-outline-variant rounded-full hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Course Card 1 */}
            <div className="bg-white rounded-xl border border-outline-variant overflow-hidden hover:shadow-lg transition-all group">
              <div className="relative h-48">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A high-quality image of healthy cassava tubers being harvested in a sunlit field in Southern Nigeria. The soil is rich and dark, and the plants are vibrant green. The focus is sharp on the harvest, showcasing abundance and successful cultivation techniques. The lighting is bright and natural, using a clean light-mode aesthetic that communicates agricultural success and operational excellence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFWu0dRb_WQLScjmw9-0IKhOzwQ9pLLK_zRYwxUkhO8d2w17mVZT5-g0SOCsidqG7kw74KZ7Az-OVPIj17k1GaaXPcYl4y71jAhCAHav4gUup3-nIeaOIUmop503AI7ldaiYIup7paFcfhCWNilnSg8hOLLPxqLXgjkYOWOIJEMQRiiKmKO7mpyjYP3Qa_AnHm73vHw9hsN2uHBA_hexp_FIMrDV78NjE0rpHpd7w41u49UgAye6B9OEl2ib8TRTt8tLftmnxbtKY" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-primary font-label-sm text-label-sm">Crop Science</div>
              </div>
              <div className="p-lg">
                <h4 className="font-h3 text-h3 text-on-surface mb-2 line-clamp-1">Cassava Value Chain Mastery</h4>
                <div className="flex items-center gap-4 text-on-surface-variant font-numeric text-numeric mb-6">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]" data-icon="schedule">schedule</span>
                    8 Weeks
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]" data-icon="menu_book">menu_book</span>
                    12 Modules
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-h2 text-h2 text-primary">₦15,000</span>
                  <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-label-sm hover:opacity-90 active:scale-95 transition-all">Subscribe</button>
                </div>
              </div>
            </div>
            {/* Course Card 2 */}
            <div className="bg-white rounded-xl border border-outline-variant overflow-hidden hover:shadow-lg transition-all group">
              <div className="relative h-48">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A wide-angle landscape shot of a modern poultry farm in Nigeria. Thousands of healthy white chickens are seen in a clean, well-ventilated barn. The lighting is even and bright, highlighting the organized and hygienic environment. This image conveys the scale and professional standard of modern livestock management in the agricultural sector." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_Z6yca16IBMMtlH-2jXzf5427gTOOAk92MAofJuntS6PlN3yGNfcOIeNeSBT_hDl8TulrbvEeU5EuWfIpjc1K7pQhe8PqwGw0uAFqtZKACFp_8BoU0z-4cYlRyG56LEylBwiA1IK5_IdTTQDREOMGgphC0SXYg_eF7z7936_TUFbHefi0B-63gv5_t9efwZMd2ypWJuqZtlyzWGR9iDgzSkpTrElZmOr01GfqL9k09Ikid2R3q68pyFxA0Rn4QHg7U5iMZJb4Khw" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-primary font-label-sm text-label-sm">Livestock</div>
              </div>
              <div className="p-lg">
                <h4 className="font-h3 text-h3 text-on-surface mb-2 line-clamp-1">Modern Poultry Systems</h4>
                <div className="flex items-center gap-4 text-on-surface-variant font-numeric text-numeric mb-6">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]" data-icon="schedule">schedule</span>
                    6 Weeks
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]" data-icon="menu_book">menu_book</span>
                    10 Modules
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-h2 text-h2 text-primary">₦12,500</span>
                  <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-label-sm hover:opacity-90 active:scale-95 transition-all">Subscribe</button>
                </div>
              </div>
            </div>
            {/* Course Card 3 */}
            <div className="bg-white rounded-xl border border-outline-variant overflow-hidden hover:shadow-lg transition-all group">
              <div className="relative h-48">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An organized outdoor vegetable market scene in Nigeria, showing crates of fresh, colorful peppers and tomatoes. The focus is on the quality of the produce and the market readiness. The lighting is bright mid-day sun, creating high-contrast shadows and vibrant colors. The mood is commercial and bustling, representing the business and market side of agriculture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeAgf-0cWizFVnuuCdgw5FSDmzWPJCzJdKJ8hJsh9nABFWgFE_IJARO2stEjY_rBWUW61HqFv5gmLAH5i7bolKrtQf8lJj6dRM-jtPFtAfVu_RQgitCyZzoIDiB0OFgwtDAucIwcwXgotD6c5RzcD7cKG8hrXXAoVr1nhxj1ynoT0-HL_4VDsxuHYYyoqgnDvW3YwtOmdlQSRZdh8-lTfpxpSLH-gsd7KcB8Z_LnhzFvlWrnsCPRnN6atLqFT1EyQWhWb6sJcKKXo" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-primary font-label-sm text-label-sm">Business</div>
              </div>
              <div className="p-lg">
                <h4 className="font-h3 text-h3 text-on-surface mb-2 line-clamp-1">Agro-Export Fundamentals</h4>
                <div className="flex items-center gap-4 text-on-surface-variant font-numeric text-numeric mb-6">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]" data-icon="schedule">schedule</span>
                    10 Weeks
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]" data-icon="menu_book">menu_book</span>
                    15 Modules
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-h2 text-h2 text-primary">₦25,000</span>
                  <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-label-sm hover:opacity-90 active:scale-95 transition-all">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar Shell */}
      <nav className="fixed bottom-0 left-0 w-full bg-white flex justify-around items-center px-4 py-2 pb-safe border-t border-gray-100 shadow-[0_-1px_3px_0_rgba(0,0,0,0.05)] z-50 md:hidden">
        <a className="flex flex-col items-center justify-center text-green-800 bg-green-50 rounded-lg px-4 py-1.5 active:opacity-80 transition-opacity" href="#">
          <span className="material-symbols-outlined" data-icon="school">school</span>
          <span className="font-inter text-[11px] font-semibold">Hub</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-500 px-4 py-1.5 hover:text-green-700 active:opacity-80 transition-opacity" href="#">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[11px] font-semibold">Marketplace</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-500 px-4 py-1.5 hover:text-green-700 active:opacity-80 transition-opacity" href="#">
          <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
          <span className="font-inter text-[11px] font-semibold">Profile</span>
        </a>
      </nav>
    </div>
  );
}
