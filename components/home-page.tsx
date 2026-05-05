'use client';

export default function HomePage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FFFFFF] py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">
          <div className="z-10 order-2 md:order-1">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-[#a2f4b5] text-[#002108] rounded-full">
              Farm to Table Delivery
            </span>
            <h1 className="text-display-xl font-bold text-on-background mb-6 max-w-xl text-5xl leading-tight">
              Fresh Produce Delivered Safely From Farm to Home
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed text-lg">
              Connecting farmers and buyers with fast delivery and reliable tracking. Experience the taste of precision-grown agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#1B6D24] text-white font-bold text-sm rounded-xl hover:brightness-110 transition-all active:scale-95 soil-shadow">
                Shop Products
              </button>
              <button className="px-8 py-4 border-2 border-[#1B6D24] text-[#1B6D24] font-bold text-sm rounded-xl hover:bg-[#a2f4b5]/20 transition-all active:scale-95">
                Become a Farmer
              </button>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#1B6D24]/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1">
              <img
                alt="Fresh vegetables in a basket"
                className="w-full h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqnL0LI9lEm3Z8y6c39xYOuNsKMm98c3zSduhiDfpQjv7soxdm42bDvCy0pJ_StXswHWjQuWFiGy4qVI2JPdU6N8-7DbcjfQgJ2R-vtWv1QC7cu-ULI09spxyeleFHZRq5C0scGs5pYOQlB5ZKTUIrA5UAgI5ZUUioaMrZIiWzJC3yS5ql946BON9XV7IuqEW-1vVUrn0DDMgWyaiKoIEgobuPqmuInDFEo-cqC4xm3B6ltJA_Z2D-L9iRmpK-Tv7kPURENm7Ynh8"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl soil-shadow max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-[#1B6D24]">verified</span>
                <span className="font-bold text-sm text-on-surface">100% Organic</span>
              </div>
              <p className="text-xs text-on-surface-variant">Directly sourced from certified local family farms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-headline-lg font-bold text-on-surface mb-2 text-3xl">Featured Harvests</h2>
              <p className="text-body-md text-on-surface-variant">Picked at peak ripeness and ready for your kitchen.</p>
            </div>
            <a className="text-[#1B6D24] font-bold flex items-center gap-2 hover:underline" href="#">
              View All Products <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Card 1 */}
            <div className="group border border-slate-100 rounded-xl overflow-hidden hover:border-[#1B6D24] transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  alt="Fresh Tomatoes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3vRzD_et4mgd8BnWK2wjxTFSr8tB6M7SEnMhrD7Y9KYG8NkXQ-PIoh4U_jBxQc9od6mNoksEgFGD3hMwKXH83X6So-C6NRmU92hyF7B90T3L6U_G1VdXxbaikAS6PO_KlYMIbTCWyvfy0wd1xOUMQbap9jcomPeqveOKj-oeItUjbkIBpJQgkVZhkCYVpVGKK-oCQEUESW8zeomyjkWK3JWOs7opH3Pa9TBXsJ2GLcgc5p3LBbLxvDl1o7QrniybRXe9o6C93g30"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-on-surface">Organic Vine Tomatoes</h3>
                  <span className="text-[#1B6D24] font-bold">$4.50</span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <span className="material-symbols-outlined text-orange-400 text-sm">star</span>
                  <span className="text-xs font-bold text-on-surface-variant">4.9 (120 reviews)</span>
                </div>
                <button className="w-full py-2 rounded-lg bg-slate-50 text-[#1B6D24] font-bold text-sm hover:bg-[#1B6D24] hover:text-white transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group border border-slate-100 rounded-xl overflow-hidden hover:border-[#1B6D24] transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  alt="Fresh Kale"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChIlwlMSu9bzsHxbHxd3kqIZXt75T60UAkeYq31O2f51Ou9pG13r1uPjcWs_VEbHRcu-jBdx0zXCgiG0vkNvQKwnLrCtumjwuwLIavs5UzCGpYQ5ixz6BvIb_ic5ZWPE8jukbCMwysv22ELEbQmiTjTluZgNFgXgkYF6uoGH2MgyF67nVXiJxNtNuaqeFLGGi0caZxju5kkICL2dHHZ7rQNeJVdit5CsY0gyHKDfpkbS5t34WaR8Fq1fYX6PNr83qLK5JYetWMmpk"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-on-surface">High-Density Kale</h3>
                  <span className="text-[#1B6D24] font-bold">$3.20</span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <span className="material-symbols-outlined text-orange-400 text-sm">star</span>
                  <span className="text-xs font-bold text-on-surface-variant">4.8 (85 reviews)</span>
                </div>
                <button className="w-full py-2 rounded-lg bg-slate-50 text-[#1B6D24] font-bold text-sm hover:bg-[#1B6D24] hover:text-white transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group border border-slate-100 rounded-xl overflow-hidden hover:border-[#1B6D24] transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  alt="Organic Carrots"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDElqyxFo_P9kB6NpsJVwZpZx-dlHPsEX8oH8YRl2lZUBbLa044sLW_DcUpsHVBguaE5QD1avJATsRXIt96VYX3RfuhQHogJoKqWqRiTqo9zXgaRf4WutU_vpgxUBRW9fRiyRt9bjcwlr-PRPGu8oEE8vHVB3D6Y27kbqHQEiwSOZs6L5wW0VE-Lh0lli497HJhS_ZLCFn9l9zhfolmgFakUXjykNZ0Rd_VBFkMksV2Ts4Sh9xEPSKAOuIHzJlb1FSmKcA0SC4-7ek"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-on-surface">Sweet Heritage Carrots</h3>
                  <span className="text-[#1B6D24] font-bold">$2.80</span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <span className="material-symbols-outlined text-orange-400 text-sm">star</span>
                  <span className="text-xs font-bold text-on-surface-variant">5.0 (42 reviews)</span>
                </div>
                <button className="w-full py-2 rounded-lg bg-slate-50 text-[#1B6D24] font-bold text-sm hover:bg-[#1B6D24] hover:text-white transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="group border border-slate-100 rounded-xl overflow-hidden hover:border-[#1B6D24] transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  alt="Fresh Bell Peppers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDodvBO3rLtVfjJz5JoKFZvR70QQztoMKVYulsoVwxqDX9rtlN_FlGE6ViBfryEIA1atrqv8cfM8tA7lg6KxzBi9upX5BW0_fks9R_yaSuLS51hT4veDSEKs-QFLRU5YQ3oDDzO0K7wR4zD1wJQ3_ZlPS3xhWVbXv2HO1IajIraS4XthUfRJw6gkphLTjl1Ki1BUMZIKJQFd-xk1397oksRLs8aJdcrm3VQLR-GgQOxDnCv3wJl1IdomSvktNR3ISGuWfkfN3wwfhg"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-on-surface">Mixed Bell Peppers</h3>
                  <span className="text-[#1B6D24] font-bold">$5.10</span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <span className="material-symbols-outlined text-orange-400 text-sm">star</span>
                  <span className="text-xs font-bold text-on-surface-variant">4.7 (96 reviews)</span>
                </div>
                <button className="w-full py-2 rounded-lg bg-slate-50 text-[#1B6D24] font-bold text-sm hover:bg-[#1B6D24] hover:text-white transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Farmer Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-[#1B6D24] rounded-[2rem] overflow-hidden flex flex-col lg:flex-row items-stretch">
            <div className="p-6 md:p-20 flex-1 flex flex-col justify-center text-white">
              <h2 className="text-5xl font-bold mb-6 leading-tight">Empower Your Farm with Global Technology.</h2>
              <p className="text-lg text-white/80 mb-10">
                Join over 5,000 farmers who use KIZ FARM to reach direct buyers, optimize their harvest schedules, and ensure fair pricing for their hard work.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#a2f4b5]">monitoring</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Advanced Analytics</h4>
                    <p className="text-sm opacity-80">Track soil health and crop progress in real-time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#a2f4b5]">payments</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Fast Payments</h4>
                    <p className="text-sm opacity-80">Get paid instantly upon delivery confirmation.</p>
                  </div>
                </div>
              </div>
              <button className="w-fit px-10 py-5 bg-white text-[#1B6D24] font-black text-lg rounded-xl hover:bg-slate-100 transition-all active:scale-95">
                Apply to Become a Farmer
              </button>
            </div>
            <div className="hidden lg:block lg:w-1/3 min-h-[600px] relative">
              <img
                alt="Professional Farmer"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD60xlDNOf-3oMdQ6goJaeitBYChf3-ze5byUTyHN3nKaX5sKI2QtYuRHjlPyySTIQEChDhEd0b-MP7KnprgX2IEtZwJAvEes9Rdmj7w-rH4ycnoL6dmA2kksvZHZPNQSIrKeuh81AZX9ya48Tc0WXDFzZPMAJ5FikpSl-Mg01l7wZKjNIj_RHTyY4aFyzavTUok1jmn-uGZTNMk18r5I6ikoI397L2I8-Z6r-_O1U4k9eR1j5EaZBmUX87Snk1HBXmvLD2KCQSu2w"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B6D24] to-transparent opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-slate-50 rounded-2xl">
              <p className="text-5xl font-bold text-[#1B6D24] mb-2">12M+</p>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Kilos Delivered</p>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-2xl">
              <p className="text-5xl font-bold text-[#1B6D24] mb-2">500+</p>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Active Farms</p>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-2xl">
              <p className="text-5xl font-bold text-[#1B6D24] mb-2">24h</p>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Delivery Promise</p>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-2xl">
              <p className="text-5xl font-bold text-[#1B6D24] mb-2">99.9%</p>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Quality Rating</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
