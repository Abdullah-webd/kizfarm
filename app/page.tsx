"use client"
import { useState } from 'react';
import HomePage from '@/components/home-page';
import AboutPage from '@/components/about-page';
import ContactPage from '@/components/contact-page';
import LoginPage from '@/components/login-page';
import OtpPage from '@/components/otp-page';

function AgriCatalogPage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="flex justify-between items-center w-full h-14 px-4 sticky top-0 z-50 bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-green-800 dark:text-green-400 active:scale-95 transition-transform duration-150 cursor-pointer" data-icon="menu">menu</span>
          <div className="flex items-center gap-2">
            <img alt="KIZ FARM" className="h-8 w-auto object-contain" src="/logo.jpeg" />
            <span className="text-lg font-extrabold tracking-tighter text-green-900 dark:text-white uppercase font-headline-md">AgriCatalog</span>
          </div>
        </div>
        <span className="material-symbols-outlined text-green-800 dark:text-green-400 active:scale-95 transition-transform duration-150 cursor-pointer" data-icon="search">search</span>
      </header>

      <main className="max-w-[1440px] mx-auto px-4 pt-6 pb-24">
        {/* Search Bar Section */}
        <div className="mb-gutter">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-outline" data-icon="search">search</span>
            <input className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-surface-tint focus:border-surface-tint outline-none transition-all font-body-md text-on-surface" placeholder="Search fresh produce..." type="text" />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-gutter overflow-x-auto no-scrollbar flex gap-sm pb-2">
          <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-label-sm whitespace-nowrap active:scale-95 transition-all" style={{ backgroundColor: "#1B6D24" }}>All</button>
          <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-sm whitespace-nowrap hover:bg-surface-variant active:scale-95 transition-all">Vegetables</button>
          <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-sm whitespace-nowrap hover:bg-surface-variant active:scale-95 transition-all">Fruits</button>
          <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-sm whitespace-nowrap hover:bg-surface-variant active:scale-95 transition-all">Grains</button>
          <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-sm whitespace-nowrap hover:bg-surface-variant active:scale-95 transition-all">Organic</button>
        </div>

        {/* Hero Section - Promo */}
        <div className="mb-gutter rounded-3xl overflow-hidden relative h-48 bg-primary-container group">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="panoramic high-resolution shot of a lush green farm field with rolling hills at sunrise, warm golden light filtering through morning mist" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAli1kYWSnpG83UMrNnZniqwYdWt7PlW3cKWqPeN7jBwGul0Qs0eWwNs73Dou0IrFtRM_7nmFdEqskBMUtLQ-rmUE9DTvNnNxKxMGSFnUKdCUG8Sbjn1uakwHoqRozT41QPHJ9A5592hQuDvZQUNwG_QAu0XzgRysYkpoCRD0Gbp9sffUHFtd4V7q1wHYWVvvCI8MC_l5S2FbpT7s0-v-J3cGgOaCcOXFAZZFAM_HastjvfYUtqSFq0dHQBVK3xWPH_32RsWhhF_I')" }} ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8">
            <span className="text-on-primary-container bg-primary-fixed/20 backdrop-blur-sm self-start px-3 py-1 rounded-full text-label-xs mb-2">Harvest Season</span>
            <h2 className="text-white font-headline-lg mb-2">Fresh from the Soil</h2>
            <p className="text-white/80 font-body-md max-w-xs">Directly sourced premium organic crops delivered to your doorstep.</p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-gutter md:grid-cols-4">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all flex flex-col">
            <div className="relative aspect-square overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="close-up of vibrant red organic vine tomatoes with dew drops, natural greenhouse lighting, professional food photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq2HoapuHa4T55a5-Mnwh7QH7RgDthHQrR3eJeFh5jmvniNl3i5hYjrqM4nc5vqXkfSwUK3ubz9yHGvdmL6-PfGV7LqTCafK4c2ptSfpdFaVleOo3CuR0PciS7_3k-l4NAsQBjuBavZMTQI_NOtRsNtuaXi-Nog4tUp2uJMKhx7EbvRfHp9zZ6_rLMiiBOhdbdiQlSwzMAKVZiHdm0a39PNoPqgqze2tFmlWDgCrqQfT2CJhqLZ_b-DymIYeNlQbm_7I-2Yp8DaDU" />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-tertiary-container" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-label-xs text-on-surface">4.8</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-headline-md text-[16px] mb-1 text-on-surface">Organic Tomatoes</h3>
              <p className="text-on-secondary-container font-label-xs mb-3">500g Pack</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-primary font-bold text-lg">₦4,500</span>
                <button className="bg-surface-tint text-white p-2 rounded-xl active:scale-90 transition-transform duration-100 flex items-center justify-center" style={{ backgroundColor: "#1B6D24" }}>
                  <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all flex flex-col">
            <div className="relative aspect-square overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="fresh curly kale leaves in a rustic wooden crate, natural outdoor lighting, documentary style agricultural photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1dHTcxVKiE8xhmeIltbvb931r6G1MHN5iAGh56kL3UA8VoqR7Pc4g9U6x580O_G9UjIgQbrVvkfoNIU5al3iIc43J8jgxwlYucg0ejXcLPJjTW7QoomSaEog0SSz6LhiOhIlrdONngrFfVU4T2O15ohYPVtwDzR7DYOg1xg8XDcxcLqiSLRo3m48aNRR55qbeYcIxmex2YDKGaqXhF2tA3byB5EUyWVee7hPhakvSYpdSZlYFe9C7d3ZP0xtkOENry-vrLI4h6bo" />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-tertiary-container" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-label-xs text-on-surface">4.9</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-headline-md text-[16px] mb-1 text-on-surface">Fresh Kale</h3>
              <p className="text-on-secondary-container font-label-xs mb-3">Large Bunch</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-primary font-bold text-lg">₦3,200</span>
                <button className="bg-surface-tint text-white p-2 rounded-xl active:scale-90 transition-transform duration-100 flex items-center justify-center" style={{ backgroundColor: "#1B6D24" }}>
                  <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all flex flex-col">
            <div className="relative aspect-square overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="bundle of earthy carrots with green tops still attached on a burlap sack, cinematic low-angle lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxNIDW92th9kvzxQ8yL4lud1rEwJq1WM7oiK7BPrD68SFghw93TGJw9spvZWyHcvoOaLKExac8rs0dIYiXMpOvArqeUPENQkgREfHaggsqfhnRuOrI_5EMq__w9FIsTx9gTsA_vPi0J_7Sd4wzTUTCwc3RLda3mHnflaEd_ZZu-YYNdmFZk2xmCHH1S5X9o0kVM0TZWM02MXj8H1T6-JOyTbkkWw0l7bd3MPY97pTKs7yF4NxNmwjeGBBKjAIWgMvSiEw_COvXBj8" />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-tertiary-container" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-label-xs text-on-surface">4.7</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-headline-md text-[16px] mb-1 text-on-surface">Heirloom Carrots</h3>
              <p className="text-on-secondary-container font-label-xs mb-3">1kg Bag</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-primary font-bold text-lg">₦2,900</span>
                <button className="bg-surface-tint text-white p-2 rounded-xl active:scale-90 transition-transform duration-100 flex items-center justify-center" style={{ backgroundColor: "#1B6D24" }}>
                  <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] transition-all flex flex-col">
            <div className="relative aspect-square overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="assorted bell peppers in yellow, red, and green colors arranged neatly on a dark farm table, soft daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3kedeudZawkVMD4H5tlmWU9LMoE2VZEQQzxzwxl_7bk1jPOFBlFM3BRtl4unC6Zx8RRbAOUDA4b2kk7S2DVAMyUUAImeIsV6S69NR4I6EmkwNUXyPwhGbgS7mOAuq_Yf-4KAb2PkVqoFgLdOs-ATH-QuKHcSKvB1IwtYz0qdg3TQz0NkD1BarZpkAg_DMZm8ZtzdYSmoijei1TQrlQ3M1JjgrIknEVQg9s4qVv9HTOWm0LIjjRmYjgZ8r8wJVzJOGiUpOdNK-i1Y" />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-tertiary-container" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-label-xs text-on-surface">4.9</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-headline-md text-[16px] mb-1 text-on-surface">Bell Peppers</h3>
              <p className="text-on-secondary-container font-label-xs mb-3">Mixed Pack (3pcs)</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-primary font-bold text-lg">₦5,100</span>
                <button className="bg-surface-tint text-white p-2 rounded-xl active:scale-90 transition-transform duration-100 flex items-center justify-center" style={{ backgroundColor: "#1B6D24" }}>
                  <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Banner - Bento Style */}
        <div className="mt-gutter grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="bg-tertiary-container rounded-3xl p-gutter flex items-center gap-gutter border border-tertiary/10">
            <div className="flex-1">
              <h4 className="text-on-tertiary font-headline-md mb-2">Sustainable Grains</h4>
              <p className="text-on-tertiary/80 text-sm mb-4">Discover our new collection of locally farmed wheat and barley.</p>
              <button className="text-tertiary-fixed bg-on-tertiary-fixed px-4 py-2 rounded-xl text-label-sm">Explore Collection</button>
            </div>
            <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg rotate-3">
              <img className="w-full h-full object-cover" data-alt="close-up of golden wheat stalks blowing in the wind against a clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2AgkuIKT56bK-lk5E7AuwRI5zkvZrjDijgJc8a3B8WxlYJrd5KeLgdfiWSGsv6pCql3WmhmdNML8oU9DYShgcvSRRPVXhpVQYaoezKx6veJxWOTlMF6XzZ_yEPpYImgG-YlOu9u7Ymp8uDDAg9QP7pttzYtDBq7NEKhN7gWYkKOtLNHZWhjTYqttoXC1QNL8nM4ARFbqr8UnxG8gDkOHUGfI9yFixul55ChSJTtnbXYSp6um30INNcDIcPeh-WENE5LdbkQv6Bms" />
            </div>
          </div>

          <div className="bg-secondary-container rounded-3xl p-gutter flex items-center gap-gutter border border-outline-variant">
            <div className="flex-1">
              <h4 className="text-on-secondary-container font-headline-md mb-2">Soil-to-Door</h4>
              <p className="text-on-secondary-container/80 text-sm mb-4">Track your order from the moment it's harvested until delivery.</p>
              <button className="text-on-secondary-fixed bg-secondary-fixed-dim px-4 py-2 rounded-xl text-label-sm">Track Now</button>
            </div>
            <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg -rotate-3">
              <img className="w-full h-full object-cover" data-alt="farmers hands holding rich dark soil with a small sprout growing, symbolizing growth and fertility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYZQnXzTX-kY32I_9nmnLXwW1F6zBASOlSHqs-G1OQdEczaK-4pYLtocy-qRaKGzHkx00J3DJ3HRDTBztX4EqxIo08sG8r5NvkjQmjN2RzmfMElMHHVIRUfGw8PDcP85PY4OaD08ds-91VV5zbokyU8tYhAgrCDy_mFpK2LJa9IHjch6O55ARR0y_NVWkcZTIuRm9mTZZfdI-0Pc9HhO8Ds0XOOh1-aD8boe6MflHq2V8WYmuPVZajmOLTWueZDZUa4DI60NMDmac" />
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 right-0 w-full flex justify-around items-center h-16 px-2 pb-safe z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-t border-gray-100 dark:border-zinc-800">
        <a className="flex flex-col items-center justify-center bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-xl px-3 py-1.5 transition-transform duration-100 active:scale-90" href="#">
          <span className="material-symbols-outlined" data-icon="storefront" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
          <span className="font-['Inter'] text-[10px] font-medium">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 px-3 py-1.5 hover:text-green-700 dark:hover:text-green-400 transition-transform duration-100 active:scale-90" href="#">
          <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
          <span className="font-['Inter'] text-[10px] font-medium">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 px-3 py-1.5 hover:text-green-700 dark:hover:text-green-400 transition-transform duration-100 active:scale-90" href="#">
          <span className="material-symbols-outlined" data-icon="potted_plant">potted_plant</span>
          <span className="font-['Inter'] text-[10px] font-medium">My Crops</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 px-3 py-1.5 hover:text-green-700 dark:hover:text-green-400 transition-transform duration-100 active:scale-90" href="#">
          <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
          <span className="font-['Inter'] text-[10px] font-medium">Profile</span>
        </a>
      </nav>

      {/* FAB */}
      <div className="fixed bottom-20 right-6 z-40">
        <button className="w-14 h-14 rounded-2xl bg-surface-tint text-white shadow-xl flex items-center justify-center active:scale-90 transition-all" style={{ backgroundColor: "#1B6D24" }}>
          <span className="material-symbols-outlined text-3xl" data-icon="shopping_cart">shopping_cart</span>
          <span className="absolute -top-1 -right-1 bg-error text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">3</span>
        </button>
      </div>
    </>
  );
}

function SignUpPage() {
  return (
    <body className="bg-background text-on-background min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Visual/Branding */}
      <section className="hidden lg:flex lg:w-1/2 relative bg-primary overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/80 to-transparent"></div>
        <img alt="Lush Farm Field" className="absolute inset-0 w-full h-full object-cover object-center" data-alt="expansive field of vibrant green wheat at sunrise with soft morning mist and golden light illuminating the horizon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-vq4V1SoF5Me8DS98Gl1rndSkH4zewp921U0es9H1lDd8qb6lybCgsYsix16Taitzb_mNPoqN6Ljnss68EW8dPy3UxXHNiCKcFV5h6YSJ_ayE6B9tiIA14-VkH3CpxbuNnwtX3CAfrfaUNBx88wJllgNpftN8u691U9jWj6vVuThcBHkioRAcyXOjSjCxN7NQ8VXDnI0Ef7iixRs0Ndk9kR-kEierTrc-oP2AQ6fLAiabercjECe40_xOFwZGC3AGx-VyIYlIc6M" />
        <div className="relative z-20 flex flex-col justify-between h-full p-xl text-on-tertiary">
          <div>
            <div className="flex items-center gap-base">
              <span className="material-symbols-outlined text-[40px]" data-icon="agriculture">agriculture</span>
              <span className="font-headline-md text-headline-md tracking-tighter">KIZ FARM</span>
            </div>
          </div>
          <div className="max-w-md">
            <h1 className="font-headline-xl text-headline-xl mb-md">Precision starts with a single seed.</h1>
            <p className="font-body-lg text-body-lg opacity-90">Join the next generation of digital agronomy and transform your agricultural data into actionable growth.</p>
          </div>
          <div className="flex gap-lg">
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md">15k+</span>
              <span className="font-label-sm text-label-sm opacity-70">Active Fields</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md">98%</span>
              <span className="font-label-sm text-label-sm opacity-70">Data Accuracy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side: Sign-up Form */}
      <section className="flex-1 flex flex-col items-center justify-center p-base md:p-xl bg-white">
        <div className="w-full max-w-[440px] flex flex-col gap-lg">
          {/* Mobile Header Only */}
          <div className="flex justify-center mb-md mt-base">
            <img alt="KIZ FARM Logo" className="h-16 w-auto object-contain" data-alt="minimalist modern vector logo for a farming company showing a stylized leaf and circuit pattern" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          </div>

          <div className="flex flex-col gap-xs">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Create Account</h2>
            <p className="font-body-md text-body-md text-secondary">Start your 14-day free trial. No credit card required.</p>
          </div>

          <form className="flex flex-col gap-md">
            {/* Full Name Field */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-sm text-label-sm text-on-surface" htmlFor="name">Full Name</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-secondary" data-icon="person">person</span>
                <input className="form-input w-full h-[48px] pl-10 pr-base border border-outline-variant rounded-lg font-body-md text-body-md focus:border-primary focus:ring-0 transition-all outline-none" id="name" placeholder="John Doe" type="text" />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-sm text-label-sm text-on-surface" htmlFor="email">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-secondary" data-icon="mail">mail</span>
                <input className="form-input w-full h-[48px] pl-10 pr-base border border-outline-variant rounded-lg font-body-md text-body-md focus:border-primary focus:ring-0 transition-all outline-none" id="email" placeholder="john@example.com" type="email" />
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-sm text-label-sm text-on-surface" htmlFor="phone">Phone Number</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-secondary" data-icon="phone">phone</span>
                <input className="form-input w-full h-[48px] pl-10 pr-base border border-outline-variant rounded-lg font-body-md text-body-md focus:border-primary focus:ring-0 transition-all outline-none" id="phone" placeholder="+1 (555) 000-0000" type="tel" />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-sm text-label-sm text-on-surface" htmlFor="password">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-secondary" data-icon="lock">lock</span>
                <input className="form-input w-full h-[48px] pl-10 pr-10 border border-outline-variant rounded-lg font-body-md text-body-md focus:border-primary focus:ring-0 transition-all outline-none" id="password" placeholder="••••••••" type="password" />
                <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-secondary cursor-pointer" data-icon="visibility">visibility</span>
              </div>
              <p className="font-label-xs text-label-xs text-secondary">Must be at least 8 characters long.</p>
            </div>

            {/* Terms and Privacy */}
            <div className="flex items-start gap-sm mt-xs">
              <input className="mt-1 h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary" id="terms" type="checkbox" />
              <label className="font-label-xs text-label-xs text-on-surface-variant" htmlFor="terms">
                I agree to the <a className="text-primary font-bold hover:underline" href="#">Terms of Service</a> and <a className="text-primary font-bold hover:underline" href="#">Privacy Policy</a>.
              </label>
            </div>

            {/* Primary Button */}
            <button className="h-[48px] w-full bg-primary-container text-on-tertiary font-label-sm text-label-sm rounded-lg hover:bg-primary transition-all active:scale-95 flex items-center justify-center gap-base mt-base" type="submit">
              <span>Create Account</span>
              <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </form>

          <div className="flex flex-col gap-md items-center mt-base">
            <div className="relative w-full flex items-center justify-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant"></div></div>
              <span className="relative px-sm bg-white font-label-xs text-label-xs text-secondary">OR SIGN UP WITH</span>
            </div>
            <div className="flex gap-md w-full">
              <button className="flex-1 h-[48px] border border-outline-variant rounded-lg flex items-center justify-center gap-base font-label-sm text-label-sm hover:bg-surface transition-all">
                <img alt="Google" className="h-5 w-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEVkmxATRQG623PJErBB6gtO3yp-Y3oh7ef5SRPHm9R1gq9M1npaxYhLLA28JijDIaBDabTfQ6SPpz1QmqZguLWDhe_9d-CbVXwBjV1MwwxHB54KAlyZm_DJ1JBGVYxSrZ5DPpdGkPkhZOziJtiM7nExXzz-OetUXQEvrvak0aUUghc4B6KcWNMvtCMJZalK7JgdHC4FOt-CLLb0uCF2xpTgE58I1gpIoTixO5XuSzDix5U9TU-URvRLNdykOv3gQ8uNi2TE1jYE4" />
                Google
              </button>
              <button className="flex-1 h-[48px] border border-outline-variant rounded-lg flex items-center justify-center gap-base font-label-sm text-label-sm hover:bg-surface transition-all">
                <span className="material-symbols-outlined text-black" data-icon="work">work</span>
                SSO
              </button>
            </div>
            <p className="font-body-md text-body-md text-secondary">
              Already have an account? <a className="text-primary font-bold hover:underline" href="#">Log in</a>
            </p>
          </div>
        </div>

        {/* Subtle Footer Branding */}
        <div className="mt-xl text-center">
          <p className="font-label-xs text-label-xs text-secondary tracking-widest uppercase">Digital Agronomy Ecosystem</p>
        </div>
      </section>
    </body>
  );
}

function AddNewCoursePage() {
  return (
    <div className="font-body-md text-on-surface" style={{fontFamily: "'Inter', sans-serif", backgroundColor: '#f9f9ff', minHeight: 'max(884px, 100dvh)'}}>
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center w-full px-md md:px-8 h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="flex items-center gap-md">
          <button className="md:hidden p-base">
            <span className="material-symbols-outlined text-green-800">menu</span>
          </button>
          <img alt="KizFarm logo" className="h-8 w-auto" data-alt="The official KizFarm logo, representing agricultural excellence and innovation." src="https://lh3.googleusercontent.com/aida/ADBb0ugzYC4-jqxSvxpO-z71bb0GLSnz_-daStJIDb_rNawDmL25axyIiZy8Cqf1UcXvoLZLDeXjPhmjvdKjTxAlrjvjl3HXCUWXUj5nkd-CNJRdE5q0cUnyPeJSBDqfwKp2LBqoAXSOr9rxTHYeYdNtnu7qp_P10cfeet2EPbyN482EHqLb_yukw7jI8RArrUC1lZTB-VHlTnuP22hg4JuRelxxtVa1Qgw4ltrQRNHgV0L1G3laFJ7TF4ZomEhxJ1EQNPEyGr6vd4TvKw" />
        </div>
        <div className="flex items-center gap-md">
          <span className="material-symbols-outlined text-slate-500 hover:text-green-800 cursor-pointer">notifications</span>
          <span className="material-symbols-outlined text-slate-500 hover:text-green-800 cursor-pointer">account_circle</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-md md:p-margin">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex mb-lg">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a className="text-label-sm font-label-sm text-slate-500 hover:text-green-800 inline-flex items-center" href="#">
                <span className="material-symbols-outlined text-[16px] mr-1">dashboard</span>
                Dashboard
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                <a className="ml-1 text-label-sm font-label-sm text-slate-500 hover:text-green-800" href="#">Courses</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                <span className="ml-1 text-label-sm font-label-sm text-green-800 font-semibold">Add New Course</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-xl">
          <h1 className="font-h1 text-h1 text-on-surface mb-xs">Create New Course</h1>
          <p className="font-body-sm text-body-sm text-slate-600">Enter the details below to publish a new agricultural training module.</p>
        </div>

        <form className="space-y-lg">
          {/* Course Banner Upload Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-lg shadow-sm">
            <label className="block font-label-md text-label-md text-on-surface mb-md">Course Banner</label>
            <div className="relative group cursor-pointer border-2 border-dashed border-gray-200 rounded-lg overflow-hidden transition-all hover:border-primary-container">
              <img className="w-full h-48 object-cover opacity-60 group-hover:opacity-80 transition-opacity" data-alt="A vibrant wide-angle shot of a flourishing Nigerian cassava and maize farm during the golden hour. The sunlight casts a warm, rich glow over the lush green crops, highlighting the textures of the leaves and the fertile dark soil. The background shows a clear sky with soft clouds, creating an atmosphere of productivity, growth, and professional agricultural success." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDirfGRkqwrlNSAL2rJYl6j2K73q4TsiIzF9UOw8WWtnynvfx6w6qNaI8_XtCmqv3qENpmpNwdIerUXX-D1kQ9wd2g0MuTIOo8EHQBYzkGfPHTUPNkDbE68E4SHpxwUt-oFwZ83vhoS1Q89etpB30f56gjAUGTu1TXJOtPFEMNU7XB0w3xVmwDMrfXY6To1u6JDeLthxj2AgXoIGumf9b0dwAu3Ta8Jr2vS3zJxrEOYOcC2oZWSJEOHIVvQdxn4K8I2Tg-DCY7Vndw" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5">
                <span className="material-symbols-outlined text-primary text-4xl mb-sm" data-weight="fill">cloud_upload</span>
                <p className="font-label-md text-label-md text-primary">Upload Banner Image</p>
                <p className="font-body-sm text-body-sm text-slate-500 mt-xs">PNG, JPG up to 10MB</p>
              </div>
            </div>
          </div>

          {/* Basic Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {/* Course Title */}
            <div className="bg-white border border-gray-200 rounded-xl p-lg shadow-sm col-span-1 md:col-span-2">
              <label className="block font-label-md text-label-md text-on-surface mb-sm" htmlFor="course-title">Course Title</label>
              <input className="w-full px-md py-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-body-md transition-all" id="course-title" placeholder="e.g. Sustainable Cassava Farming Techniques" type="text" />
            </div>

            {/* Category */}
            <div className="bg-white border border-gray-200 rounded-xl p-lg shadow-sm">
              <label className="block font-label-md text-label-md text-on-surface mb-sm" htmlFor="category">Category</label>
              <div className="relative">
                <select className="w-full appearance-none px-md py-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-body-md bg-white transition-all" id="category">
                  <option value="">Select Category</option>
                  <option value="crop-science">Crop Science</option>
                  <option value="livestock">Livestock Management</option>
                  <option value="agribiz">Agribusiness &amp; Finance</option>
                  <option value="tech">Agri-Tech &amp; Mechanization</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400 pointer-events-none">expand_more</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white border border-gray-200 rounded-xl p-lg shadow-sm">
              <label className="block font-label-md text-label-md text-on-surface mb-sm" htmlFor="price">Price (₦)</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 font-bold text-slate-500">₦</span>
                <input className="w-full pl-8 pr-md py-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-body-md transition-all" id="price" placeholder="0.00" type="number" />
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-gray-200 rounded-xl p-lg shadow-sm col-span-1 md:col-span-2">
              <label className="block font-label-md text-label-md text-on-surface mb-sm" htmlFor="description">Description</label>
              <textarea className="w-full px-md py-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-body-md transition-all" id="description" placeholder="Detailed overview of the course content and learning objectives..." rows={4}></textarea>
            </div>

            {/* Assign Tutor */}
            <div className="bg-white border border-gray-200 rounded-xl p-lg shadow-sm col-span-1 md:col-span-2">
              <label className="block font-label-md text-label-md text-on-surface mb-sm" htmlFor="tutor">Assign Tutor</label>
              <div className="relative">
                <select className="w-full appearance-none px-md py-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-body-md bg-white transition-all" id="tutor">
                  <option value="">Select an Expert</option>
                  <option value="dr-adeyemi">Dr. Adeyemi Olatunji - Soil Specialist</option>
                  <option value="mrs-chioma">Mrs. Chioma Eze - Poultry Expert</option>
                  <option value="eng-musa">Engr. Musa Bello - Irrigation Systems</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400 pointer-events-none">person_search</span>
              </div>
              <p className="font-body-sm text-body-sm text-slate-500 mt-sm italic flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">info</span>
                Tutors will be notified via email once assigned.
              </p>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col md:flex-row gap-md pt-lg pb-xl">
            <button className="flex-1 px-lg py-sm border border-gray-300 text-primary-container font-label-md rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-sm" type="button">
              Save as Draft
            </button>
            <button className="flex-1 px-lg py-sm bg-primary-container text-on-primary-container font-label-md rounded-lg shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-sm" type="submit">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              Publish Course
            </button>
          </div>
        </form>
      </main>

      {/* Mobile Bottom Navigation Shell */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex items-center justify-around z-40">
        <div className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium">Dashboard</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-green-800 font-bold">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
          <span className="text-[10px]">Add New</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">inventory_2</span>
          <span className="text-[10px] font-medium">Courses</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </div>
      </nav>
    </div>
  );
}

function LearningHubAdminPage() {
  return (
    <div className="bg-background text-on-background" style={{fontFamily: "'Inter', sans-serif", minHeight: 'max(884px, 100dvh)'}}>
      <style>{`.soft-shadow { box-shadow: 0 1px 3px rgba(0,0,0,0.05); }`}</style>

      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full px-lg h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="flex items-center gap-sm">
          <img alt="KIZ FARM logo" className="h-8 w-auto" src="https://lh3.googleusercontent.com/aida/ADBb0ugzYC4-jqxSvxpO-z71bb0GLSnz_-daStJIDb_rNawDmL25axyIiZy8Cqf1UcXvoLZLDeXjPhmjvdKjTxAlrjvjl3HXCUWXUj5nkd-CNJRdE5q0cUnyPeJSBDqfwKp2LBqoAXSOr9rxTHYeYdNtnu7qp_P10cfeet2EPbyN482EHqLb_yukw7jI8RArrUC1lZTB-VHlTnuP22hg4JuRelxxtVa1Qgw4ltrQRNHgV0L1G3laFJ7TF4ZomEhxJ1EQNPEyGr6vd4TvKw" />
          <span className="font-h2 text-h3 text-primary tracking-tight">KizFarm</span>
        </div>
        <div className="flex items-center gap-md">
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="notifications">notifications</span>
          <div className="w-8 h-8 rounded-full bg-secondary-fixed overflow-hidden">
            <img className="w-full h-full object-cover" data-alt="A professional headshot of a female administrator with a warm smile, set against a soft, clean studio background. The lighting is bright and airy, reflecting a modern light-mode SaaS aesthetic. The color palette is neutral with soft green undertones to match the agricultural tech brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuWz5ZiQpQ5fW_JwNWPV4XtJjzMI_zz2wI_vr4HXkkYeEaB53SZMNpczNcbG5_zNLouqDVhNkKSaKtjN_gKUfzCV9kIysIFMUu8I_Dj2i05xkKV-L_eVV8Ng4LWaE1ObEezdZf5KObKLwI3J3RRYQqMxFvymMf1XG9Bao2WGOcwS1cBMNU2Xr8EtkKfBDDY6PphkQksDhYkz2qYtaxD-GQ309D-e1lr7RzhVVbpQHEevIDaDjyrQ9I71mQAx33RaYzuXLU0GBK2eA" />
          </div>
        </div>
      </header>

      <main className="p-lg max-w-container-max mx-auto pb-24">
        {/* Dashboard Header */}
        <div className="mb-xl">
          <h1 className="font-h1 text-h1 text-on-surface">Learning Hub</h1>
          <p className="font-body-sm text-on-surface-variant">Welcome back, Admin. Here is your overview for today.</p>
        </div>

        {/* Bento Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
          {/* Total Courses */}
          <div className="bg-white p-lg rounded-xl border border-outline-variant soft-shadow flex flex-col justify-between h-40 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container" data-icon="school">school</span>
              </div>
              <span className="text-primary text-label-sm bg-primary/10 px-sm py-xs rounded-full">+12%</span>
            </div>
            <div>
              <p className="font-label-md text-on-surface-variant">Total Courses</p>
              <p className="font-h1 text-h1 text-on-surface">148</p>
            </div>
          </div>

          {/* Active Tutors */}
          <div className="bg-white p-lg rounded-xl border border-outline-variant soft-shadow flex flex-col justify-between h-40 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary" data-icon="groups">groups</span>
              </div>
              <span className="text-tertiary text-label-sm bg-tertiary-fixed px-sm py-xs rounded-full">Active</span>
            </div>
            <div>
              <p className="font-label-md text-on-surface-variant">Active Tutors</p>
              <p className="font-h1 text-h1 text-on-surface">32</p>
            </div>
          </div>

          {/* Total Subscriptions */}
          <div className="bg-white p-lg rounded-xl border border-outline-variant soft-shadow flex flex-col justify-between h-40 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary" data-icon="subscriptions">subscriptions</span>
              </div>
              <span className="text-error text-label-sm bg-error-container px-sm py-xs rounded-full">High Demand</span>
            </div>
            <div>
              <p className="font-label-md text-on-surface-variant">Total Subscriptions</p>
              <p className="font-h1 text-h1 text-on-surface">1,204</p>
            </div>
          </div>
        </div>

        {/* Main Content Area: Recent Subscriptions */}
        <div className="bg-white rounded-xl border border-outline-variant soft-shadow overflow-hidden">
          <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center">
            <h3 className="font-h3 text-h3 text-on-surface">Recent Subscriptions</h3>
            <button className="text-primary font-label-md flex items-center gap-xs">
              View All <span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low">
                <tr>
                  <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase tracking-wider">User</th>
                  <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase tracking-wider">Course</th>
                  <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase tracking-wider text-right">Amount</th>
                  <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase tracking-wider text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {/* Row 1 */}
                <tr className="hover:bg-surface transition-colors">
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-md">
                      <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold text-xs">OA</div>
                      <div className="font-label-md text-on-surface">Oluwaseun A.</div>
                    </div>
                  </td>
                  <td className="px-lg py-md font-body-sm text-on-secondary-container">Hydroponics Masterclass</td>
                  <td className="px-lg py-md font-numeric text-on-surface text-right">₦15,000</td>
                  <td className="px-lg py-md text-center">
                    <span className="px-sm py-xs bg-primary/10 text-primary text-label-sm rounded-full">Success</span>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-surface transition-colors">
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-md">
                      <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary font-bold text-xs">EM</div>
                      <div className="font-label-md text-on-surface">Emeka M.</div>
                    </div>
                  </td>
                  <td className="px-lg py-md font-body-sm text-on-secondary-container">Poultry Management 101</td>
                  <td className="px-lg py-md font-numeric text-on-surface text-right">₦12,500</td>
                  <td className="px-lg py-md text-center">
                    <span className="px-sm py-xs bg-primary/10 text-primary text-label-sm rounded-full">Success</span>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-surface transition-colors">
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-md">
                      <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary font-bold text-xs">CI</div>
                      <div className="font-label-md text-on-surface">Chioma I.</div>
                    </div>
                  </td>
                  <td className="px-lg py-md font-body-sm text-on-secondary-container">Irrigation Tech Pro</td>
                  <td className="px-lg py-md font-numeric text-on-surface text-right">₦25,000</td>
                  <td className="px-lg py-md text-center">
                    <span className="px-sm py-xs bg-error-container text-error text-label-sm rounded-full">Pending</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md h-16 flex justify-around items-center px-md border-t border-outline-variant z-40">
        <button className="flex flex-col items-center justify-center gap-1 text-primary-container font-semibold">
          <span className="material-symbols-outlined" data-icon="dashboard" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
          <span className="text-[10px]">Dashboard</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined" data-icon="school">school</span>
          <span className="text-[10px]">Courses</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined" data-icon="groups">groups</span>
          <span className="text-[10px]">Tutors</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
          <span className="text-[10px]">Settings</span>
        </button>
      </nav>
    </div>
  );
}

function AddNewTutorPage() {
  return (
    <div className="bg-background text-on-surface" style={{fontFamily: "'Inter', sans-serif", minHeight: 'max(884px, 100dvh)'}}>
      {/* TopNavBar */}
      <nav className="flex justify-between items-center w-full px-4 md:px-8 h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 text-slate-600">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <img alt="KizFarm logo" className="h-8 w-auto" data-alt="A clean and professional corporate logo for an agricultural brand called KIZ FARM. The logo features minimalist organic leaf motifs integrated with modern sans-serif typography in a deep forest green color palette. The aesthetic is grounded and trustworthy, symbolizing sustainable farming practices and technological innovation in the agricultural sector, set against a transparent background." src="https://lh3.googleusercontent.com/aida/ADBb0ugzYC4-jqxSvxpO-z71bb0GLSnz_-daStJIDb_rNawDmL25axyIiZy8Cqf1UcXvoLZLDeXjPhmjvdKjTxAlrjvjl3HXCUWXUj5nkd-CNJRdE5q0cUnyPeJSBDqfwKp2LBqoAXSOr9rxTHYeYdNtnu7qp_P10cfeet2EPbyN482EHqLb_yukw7jI8RArrUC1lZTB-VHlTnuP22hg4JuRelxxtVa1Qgw4ltrQRNHgV0L1G3laFJ7TF4ZomEhxJ1EQNPEyGr6vd4TvKw" />
          <span className="hidden md:block font-h2 text-primary">AgriMarket Admin</span>
        </div>
        <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined p-2 text-slate-500 hover:text-green-800 cursor-pointer">notifications</span>
          <span className="material-symbols-outlined p-2 text-slate-500 hover:text-green-800 cursor-pointer">help</span>
          <div className="h-8 w-8 rounded-full bg-secondary-container overflow-hidden border border-outline-variant">
            <img alt="Admin User Profile" data-alt="A professional headshot of a middle-aged male administrator with a friendly and competent expression. He is wearing a clean, crisp business casual attire in a professional office environment with soft, natural morning light. The image style is polished and high-end, maintaining a cohesive corporate look with subtle green accents in the background to match the AgriMarket brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9vlmOBo8C5n5AUXObeznNV1giaGdYiFd-kEaf4KJtgKDCnsmHsH1X9w0OSn7WoI2a6q-OGTMHCXEiR4VySZX3Y7gCpur065Vr6qoMij-OvNio2D3gz0XrPFVAJAPM7dDh91o54d686JELQOg8Klf4D7aDhkcwHF6cCFzjHlSnLe_fYx-y-OLqPkjb9d8aj5fERMJvY8MqfV6NGE-SlIRKaU8gHL2v8e8AeN4WzMrpD8q6wBJQSpZz6ui0Q7JuOGofmYZFYnUQWZs" />
          </div>
        </div>
      </nav>

      <main className="max-w-container-max mx-auto p-4 md:p-margin flex flex-col md:flex-row gap-gutter">
        {/* Sidebar Navigation (Desktop) */}
        <aside className="hidden md:flex flex-col w-[280px] space-y-2">
          <div className="p-4 mb-4">
            <h2 className="font-h3 text-primary">AgriMarket</h2>
            <p className="font-label-sm text-slate-500">Admin Management</p>
          </div>
          <a className="flex items-center gap-md p-md rounded-lg text-slate-600 hover:bg-slate-50 transition-all" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-md p-md rounded-lg text-green-800 bg-green-50 border-r-4 border-green-800 font-semibold" href="#">
            <span className="material-symbols-outlined">school</span>
            <span className="font-label-md">Tutors</span>
          </a>
          <a className="flex items-center gap-md p-md rounded-lg text-slate-600 hover:bg-slate-50 transition-all" href="#">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="font-label-md">Orders</span>
          </a>
          <a className="flex items-center gap-md p-md rounded-lg text-slate-600 hover:bg-slate-50 transition-all" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-label-md">Inventory</span>
          </a>
          <a className="flex items-center gap-md p-md rounded-lg text-slate-600 hover:bg-slate-50 transition-all" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md">Settings</span>
          </a>
        </aside>

        {/* Content Area */}
        <section className="flex-1">
          {/* Breadcrumbs */}
          <nav className="mb-lg flex items-center gap-xs font-label-sm text-slate-500">
            <span>Admin</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span>Tutors</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-primary font-bold">Add New Tutor</span>
          </nav>

          <div className="mb-lg">
            <h1 className="font-h1 text-on-surface">Add New Tutor</h1>
            <p className="font-body-sm text-slate-500">Create a new professional profile for the agricultural training program.</p>
          </div>

          {/* Bento Grid Layout for Form */}
          <form className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left Column: Profile & Contact */}
            <div className="lg:col-span-4 space-y-gutter">
              {/* Profile Photo Card */}
              <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col items-center text-center">
                <div className="relative group cursor-pointer">
                  <div className="h-32 w-32 rounded-full bg-slate-100 flex items-center justify-center border-2 border-dashed border-outline overflow-hidden">
                    <span className="material-symbols-outlined text-slate-400 text-4xl">add_a_photo</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100">edit</span>
                  </div>
                </div>
                <h3 className="mt-md font-label-md text-on-surface">Profile Photo</h3>
                <p className="text-xs text-slate-400 mt-xs">Upload a high-resolution JPG or PNG. Max 5MB.</p>
                <button className="mt-md text-primary font-label-sm border border-primary px-4 py-2 rounded-lg hover:bg-green-50 transition-all" type="button">Select Image</button>
              </div>

              {/* Contact Info Card */}
              <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm space-y-md">
                <h3 className="font-label-md text-on-surface border-b border-slate-100 pb-sm">Contact Information</h3>
                <div className="space-y-base">
                  <label className="font-label-sm text-slate-600">WhatsApp Number</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">chat</span>
                    <input className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="+234 ..." type="text" />
                  </div>
                </div>
                <div className="space-y-base">
                  <label className="font-label-sm text-slate-600">Email Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">mail</span>
                    <input className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="tutor@agrimarket.com" type="email" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Personal Details */}
            <div className="lg:col-span-8 space-y-gutter">
              <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                  {/* Full Name */}
                  <div className="md:col-span-2 space-y-base">
                    <label className="font-label-sm text-slate-600">Full Name</label>
                    <input className="w-full px-4 py-2 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="e.g. Dr. Samuel Okafor" type="text" />
                  </div>
                  {/* Specialization */}
                  <div className="space-y-base">
                    <label className="font-label-sm text-slate-600">Specialization</label>
                    <select className="w-full px-4 py-2 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none bg-white">
                      <option value="">Select Field</option>
                      <option value="crop">Crop Science</option>
                      <option value="soil">Soil Management</option>
                      <option value="pest">Pest Control</option>
                      <option value="irrigation">Irrigation Technology</option>
                      <option value="finance">Agro-Finance</option>
                    </select>
                  </div>
                  {/* Experience */}
                  <div className="space-y-base">
                    <label className="font-label-sm text-slate-600">Years of Experience</label>
                    <input className="w-full px-4 py-2 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" min="0" placeholder="5" type="number" />
                  </div>
                  {/* Bio */}
                  <div className="md:col-span-2 space-y-base">
                    <label className="font-label-sm text-slate-600">Biography</label>
                    <textarea className="w-full px-4 py-2 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Describe the tutor's background, education, and notable achievements in the agricultural sector..." rows={6}></textarea>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-md pt-md">
                <button className="px-xl py-md font-label-md text-slate-600 hover:text-slate-900 bg-white border border-outline-variant rounded-lg shadow-sm transition-all hover:bg-slate-50 active:scale-95" type="button">Cancel</button>
                <button className="px-xl py-md font-label-md text-white bg-primary-container hover:bg-primary rounded-lg shadow-md transition-all active:scale-95 flex items-center gap-sm" type="submit">
                  <span className="material-symbols-outlined">save</span>
                  Save Tutor Profile
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 flex items-center justify-around z-40 px-4">
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-green-800">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>school</span>
          <span className="text-[10px] font-bold">Tutors</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="text-[10px] font-medium">Orders</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </button>
      </nav>

      {/* Floating Action Button for Mobile */}
      <button className="md:hidden fixed bottom-20 right-6 h-14 w-14 bg-primary-container text-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform z-50">
        <span className="material-symbols-outlined text-3xl">check</span>
      </button>

      <div className="h-20 md:hidden"></div>
    </div>
  );
}

function AllSubscriptionsPage() {
  return (
    <div className="bg-background font-body-md text-on-background" style={{fontFamily: "'Inter', sans-serif", minHeight: 'max(884px, 100dvh)'}}>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* TopNavBar */}
      <nav className="flex justify-between items-center w-[calc(100%-280px)] ml-[280px] px-8 h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm hidden md:flex">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md focus-within:ring-2 focus-within:ring-green-800 rounded-lg">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg text-body-sm focus:ring-0" placeholder="Search subscriptions..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-slate-500 hover:text-green-800 cursor-pointer">notifications</span>
          <span className="material-symbols-outlined text-slate-500 hover:text-green-800 cursor-pointer">help</span>
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <img alt="Admin User Profile" className="w-8 h-8 rounded-full border border-gray-200" data-alt="A professional headshot of a senior agricultural manager with a friendly expression. He is wearing a clean white shirt against a soft-focus background of a modern greenhouse facility. The lighting is natural and bright, conveying a sense of competence, authority, and agricultural innovation consistent with a high-end SaaS platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcH14DB_js6iMsSyd3zDyDSabdAEUZVbkzh46YeuIq2YMiQShzEGWp92Y07Hmb9EoE2al1KDI_ucYN817kJ7zV8mtn6NDCDu8hNHMDKJLcpx0TZ_-IBMUtg0vU0bDM_RkhPAWNlaerwjda56mgnhiUd57d1THqOak_88r4hAn6OXCCluwCxT2krq6gTeUbXa9yMHyS8iwEv6uYVNSo6TFSyn0sYQDsDMuJ0Mi4bC4CSv6ZjI8fkfV80wAaisMPLUlsebedt-oU7WA" />
            <span className="text-label-md font-bold text-green-800">AgriMarket Admin</span>
          </div>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside className="flex flex-col w-[280px] h-screen fixed left-0 top-0 z-40 pt-6 px-4 bg-white border-r border-gray-200 hidden md:flex">
        <div className="flex items-center gap-3 px-4 mb-10">
          <img alt="AgriMarket Admin Logo" className="h-10 w-10 object-contain" data-alt="The official Kiz Farm logo featuring a stylized green leaf integrated with a modern circuit board pattern, symbolizing the intersection of agriculture and technology. The logo uses a deep forest green color scheme and is presented on a clean, white minimalist background. The design is sharp, professional, and reflects high-tech farming solutions." src="https://lh3.googleusercontent.com/aida/ADBb0ugzYC4-jqxSvxpO-z71bb0GLSnz_-daStJIDb_rNawDmL25axyIiZy8Cqf1UcXvoLZLDeXjPhmjvdKjTxAlrjvjl3HXCUWXUj5nkd-CNJRdE5q0cUnyPeJSBDqfwKp2LBqoAXSOr9rxTHYeYdNtnu7qp_P10cfeet2EPbyN482EHqLb_yukw7jI8RArrUC1lZTB-VHlTnuP22hg4JuRelxxtVa1Qgw4ltrQRNHgV0L1G3laFJ7TF4ZomEhxJ1EQNPEyGr6vd4TvKw" />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-green-900 leading-tight">KizFarm</h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Admin Management</p>
          </div>
        </div>
        <nav className="space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 rounded-lg group" href="#">
            <span className="material-symbols-outlined group-active:scale-90 transition-transform">dashboard</span>
            <span className="font-['Inter'] text-sm font-medium leading-tight">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-green-800 bg-green-50 border-r-4 border-green-800 font-semibold rounded-l-lg group" href="#">
            <span className="material-symbols-outlined group-active:scale-90 transition-transform" style={{fontVariationSettings: "'FILL' 1"}}>shopping_cart</span>
            <span className="font-['Inter'] text-sm font-medium leading-tight">Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 rounded-lg group" href="#">
            <span className="material-symbols-outlined group-active:scale-90 transition-transform">local_shipping</span>
            <span className="font-['Inter'] text-sm font-medium leading-tight">Logistics</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 rounded-lg group" href="#">
            <span className="material-symbols-outlined group-active:scale-90 transition-transform">inventory_2</span>
            <span className="font-['Inter'] text-sm font-medium leading-tight">Inventory</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 rounded-lg group" href="#">
            <span className="material-symbols-outlined group-active:scale-90 transition-transform">groups</span>
            <span className="font-['Inter'] text-sm font-medium leading-tight">Sellers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 rounded-lg group mt-auto" href="#">
            <span className="material-symbols-outlined group-active:scale-90 transition-transform">settings</span>
            <span className="font-['Inter'] text-sm font-medium leading-tight">Settings</span>
          </a>
        </nav>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-6 h-16 bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img alt="Kiz Farm Logo" className="h-8 w-8" data-alt="A professional Kiz Farm logo with forest green accents and high-tech agricultural symbolism, set against a clean white background for maximum visibility and brand clarity." src="https://lh3.googleusercontent.com/aida/ADBb0ugzYC4-jqxSvxpO-z71bb0GLSnz_-daStJIDb_rNawDmL25axyIiZy8Cqf1UcXvoLZLDeXjPhmjvdKjTxAlrjvjl3HXCUWXUj5nkd-CNJRdE5q0cUnyPeJSBDqfwKp2LBqoAXSOr9rxTHYeYdNtnu7qp_P10cfeet2EPbyN482EHqLb_yukw7jI8RArrUC1lZTB-VHlTnuP22hg4JuRelxxtVa1Qgw4ltrQRNHgV0L1G3laFJ7TF4ZomEhxJ1EQNPEyGr6vd4TvKw" />
          <span className="text-h3 font-h3 text-primary">KizFarm</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Main Content Canvas */}
      <main className="md:ml-[280px] p-6 md:p-margin bg-background min-h-screen pb-24 md:pb-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-6">
          <a className="text-label-sm text-slate-400 hover:text-primary" href="#">Admin</a>
          <span className="material-symbols-outlined text-[16px] text-slate-400">chevron_right</span>
          <span className="text-label-sm text-primary font-bold">Subscriptions</span>
        </nav>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-h1 font-h1 text-on-surface mb-2">All Subscriptions</h2>
            <p className="text-body-sm text-secondary">Manage and monitor student course enrollments and subscription lifecycles.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant text-primary rounded-lg text-label-md font-bold hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-[20px]">download</span>
              Export CSV
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-lg text-label-md font-bold hover:opacity-90 shadow-sm transition-all">
              <span className="material-symbols-outlined text-[20px]">add</span>
              New Subscription
            </button>
          </div>
        </div>

        {/* Filter & Search Bento Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-8">
          <div className="md:col-span-2 bg-white p-lg rounded-xl border border-gray-100 shadow-sm">
            <label className="text-label-sm text-slate-500 uppercase tracking-wider mb-2 block">Search Subscribers</label>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">search</span>
              <input className="w-full pl-10 pr-4 py-3 bg-slate-50 border-gray-100 rounded-lg text-body-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Name, Course Title or Tutor..." type="text" />
            </div>
          </div>
          <div className="bg-white p-lg rounded-xl border border-gray-100 shadow-sm">
            <label className="text-label-sm text-slate-500 uppercase tracking-wider mb-2 block">Status Filter</label>
            <select className="w-full py-3 px-4 bg-slate-50 border-gray-100 rounded-lg text-body-sm focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>All Statuses</option>
              <option>Active</option>
              <option>Expired</option>
              <option>Pending</option>
            </select>
          </div>
          <div className="bg-white p-lg rounded-xl border border-gray-100 shadow-sm">
            <label className="text-label-sm text-slate-500 uppercase tracking-wider mb-2 block">Date Range</label>
            <div className="flex items-center gap-2 py-3 px-4 bg-slate-50 border-gray-100 rounded-lg text-body-sm cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined text-slate-400">calendar_today</span>
              <span className="text-on-surface">Last 30 Days</span>
            </div>
          </div>
        </div>

        {/* Data Table Container */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-label-sm font-bold text-slate-500 uppercase tracking-wider">User Name</th>
                  <th className="px-6 py-4 text-label-sm font-bold text-slate-500 uppercase tracking-wider">Course Title</th>
                  <th className="px-6 py-4 text-label-sm font-bold text-slate-500 uppercase tracking-wider">Tutor Assigned</th>
                  <th className="px-6 py-4 text-label-sm font-bold text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-label-sm font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-label-sm font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">JD</div>
                      <div>
                        <div className="text-body-sm font-bold text-on-surface">John Doe</div>
                        <div className="text-[12px] text-slate-500">john.doe@agri.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-body-sm font-medium text-on-surface">Hydroponic Masterclass</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <img alt="Tutor" className="w-6 h-6 rounded-full" data-alt="A portrait of an expert agricultural tutor in their 40s, with a warm and approachable look, wearing a green polo shirt. The background shows a modern hydroponic farm with vibrant green plants and precise lighting, suggesting expertise in advanced farming techniques. Professional and trustworthy visual style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBntjoxnNEJwNclzUqJsiyz6KbLYtbsreIY4J-Qtx6pbco8cBTmzpmxOHVUq49-gRMfF8DzQezjrIXRhGWkIfcLOsSGdp_KN98-iRcYEc42FV5IPj6UxjOInN7BONIys_ErXOiDWBVl8prW5Du7Jncg8N_6vfHCPwdQlS6c80g22P2SgWQfIHjtiteXkr71O4KDX6ZUlaa-VQBtLv1Gh3swtgW1_uqUpp8S2KN__GKgljJScmKuFF1V-MJsCe0aTAu5cJirBb4LT7A" />
                      <span className="text-body-sm text-secondary">Dr. Sarah Miller</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-numeric text-slate-600">Oct 24, 2023</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-green-100 text-green-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mr-2"></span>
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-primary transition-all">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">AS</div>
                      <div>
                        <div className="text-body-sm font-bold text-on-surface">Alice Smith</div>
                        <div className="text-[12px] text-slate-500">alice.s@farmnet.io</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-body-sm font-medium text-on-surface">Precision Soil Analytics</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <img alt="Tutor" className="w-6 h-6 rounded-full" data-alt="A close-up portrait of a professional female agricultural analyst with a confident expression. She is in a well-lit laboratory environment with clean, modern equipment in the background. The aesthetic is bright and clinical, emphasizing scientific precision and reliability in modern farming education." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCesey78PbkIPGOQ4YJ7AeJ-y9FPCjolUCaL2-mazkya2yga8SiocRVpNCWnmgUO2ssUjZhPIyciBo7Up2J-pYHDEHJ5x3RuVBXWFwrBGugm-53Vmx44eAgrBY15ncnKb6wnaDaJ2uQTZP2YlcnLhVCJO3H-oVN3vd9gC0eEq1HgT6Fuwuz3Af4gV-mhtSRhdC-qzY2CWxfaKh9yV58cH10MtsM3_--53Jx39zIGqK_N9G-Qd_vRBoe6Q6rkEo7q163fMaWh4xgwJc" />
                      <span className="text-body-sm text-secondary">Prof. Robert Chen</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-numeric text-slate-600">Sept 12, 2023</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-red-100 text-red-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>
                      Expired
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-primary transition-all">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold">MK</div>
                      <div>
                        <div className="text-body-sm font-bold text-on-surface">Michael King</div>
                        <div className="text-[12px] text-slate-500">m.king@greenhouse.org</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-body-sm font-medium text-on-surface">Vertical Farming 101</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <img alt="Tutor" className="w-6 h-6 rounded-full" data-alt="A portrait of a young, innovative agricultural entrepreneur with a creative and energetic look. The background is a vibrant indoor vertical farm with rows of glowing LEDs and lush greens. The photo style is modern, high-contrast, and dynamic, reflecting the future of sustainable food production." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYPMQoZV82rJnDS_l6sB1mwE5LL1gL9PAXbz3Udx7T2QfbqbQPaGyUBFWptEywSVVC5Z878ARerqvnLG-TCwbjUxIfsJ8HOb7Kjp4DWJZr5xh-T2V0oIYfUfgqZVkzgiOVbiNlo6Y6HCG0vNbvjAe1gkgxFkMK60IQufZXXgI81gmUawBW6lhEd8lVqwk2CYMv4U8fXHSfperZs3fn6I1J-mO3KOzUwBMmcOTJmQXPrSfsZmFp9PX7-jR-NWnEyFjW5Dicpegc-JI" />
                      <span className="text-body-sm text-secondary">Elena Rodriguez</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-numeric text-slate-600">Oct 05, 2023</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-green-100 text-green-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mr-2"></span>
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-primary transition-all">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 font-bold">LW</div>
                      <div>
                        <div className="text-body-sm font-bold text-on-surface">Linda White</div>
                        <div className="text-[12px] text-slate-500">linda.w@agri.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-body-sm font-medium text-on-surface">Drip Irrigation Design</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <img alt="Tutor" className="w-6 h-6 rounded-full" data-alt="A portrait of an experienced field engineer with a rugged but professional demeanor. He is standing in an open field with irrigation systems visible in the background under a clear, warm sunset light. The image captures a sense of practical wisdom and field-tested expertise in agriculture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpaDCngf_XkokyzGCaGI98h9zz-W5qG4Emlf3w5-oGFN4oQWp_TMKcS6Dh-6TtpTisG11DvwQtK5X-QLY6OwqHsbV_VBNREpQ8mI6WodQVqh1psa3_VOjKCSFjNbuSRhQj_lB9TOb-sXw0K4NUkEfP4hwA3qjWEJ1zxJxUrLXsgjlT72QpzXNZL-gMa6t9zBKP7Fjp3R9RmNychheqCLCuuF49W4dazD0nO8aJUabu-5jMsM8K3nxwaRonXExn4tqrik37sE-v1Fk" />
                      <span className="text-body-sm text-secondary">Marcus Aurelio</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-numeric text-slate-600">Aug 28, 2023</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-red-100 text-red-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>
                      Expired
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-primary transition-all">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-slate-50 border-t border-gray-100 flex items-center justify-between">
            <span className="text-label-sm text-slate-500">Showing 1 to 4 of 48 entries</span>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-slate-400 hover:border-primary hover:text-primary transition-all disabled:opacity-50" disabled>
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-label-sm font-bold">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-slate-600 hover:border-primary hover:text-primary text-label-sm">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-slate-600 hover:border-primary hover:text-primary text-label-sm">3</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-slate-400 hover:border-primary hover:text-primary transition-all">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50">
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined text-[24px]">dashboard</span>
          <span className="text-[10px] font-bold">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined text-[24px]" style={{fontVariationSettings: "'FILL' 1"}}>shopping_cart</span>
          <span className="text-[10px] font-bold">Orders</span>
        </div>
        <div className="relative -top-8">
          <button className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center border-4 border-white">
            <span className="material-symbols-outlined text-[28px]">add</span>
          </button>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined text-[24px]">inventory_2</span>
          <span className="text-[10px] font-bold">Stock</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined text-[24px]">account_circle</span>
          <span className="text-[10px] font-bold">Profile</span>
        </div>
      </nav>
    </div>
  );
}

function LearningHubPage() {
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

function CoachProfilePage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface" style={{fontFamily: "'Inter', sans-serif", minHeight: 'max(884px, 100dvh)'}}>
      {/* TopAppBar */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="flex justify-between items-center w-full px-4 h-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <img alt="KIZ FARM Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ugzYC4-jqxSvxpO-z71bb0GLSnz_-daStJIDb_rNawDmL25axyIiZy8Cqf1UcXvoLZLDeXjPhmjvdKjTxAlrjvjl3HXCUWXUj5nkd-CNJRdE5q0cUnyPeJSBDqfwKp2LBqoAXSOr9rxTHYeYdNtnu7qp_P10cfeet2EPbyN482EHqLb_yukw7jI8RArrUC1lZTB-VHlTnuP22hg4JuRelxxtVa1Qgw4ltrQRNHgV0L1G3laFJ7TF4ZomEhxJ1EQNPEyGr6vd4TvKw" />
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <a className="text-green-800 font-bold font-inter text-sm antialiased" href="#">Hub</a>
              <a className="text-gray-500 font-inter text-sm antialiased hover:bg-gray-50 transition-all duration-150 rounded px-2 py-1" href="#">Marketplace</a>
              <a className="text-gray-500 font-inter text-sm antialiased hover:bg-gray-50 transition-all duration-150 rounded px-2 py-1" href="#">Profile</a>
            </nav>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
              <img alt="Nigerian farmer profile photo" className="w-full h-full object-cover" data-alt="A professional portrait of a Nigerian agricultural professional with a confident smile. The background is a blurred high-tech greenhouse environment with lush green plants. The lighting is warm and natural, suggesting an outdoor yet professional atmosphere. The image uses a clean, high-resolution aesthetic suitable for a modern SaaS platform profile photo." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgmoorqKfVCkEuuINhoItTlGeOUIqIBFnkLmD1SFaIX4xdGIFbvLk0wATShiY1vKiVFqQFAAglrACqVmmR-rylKXzUDMfYlobr8L78nJCiJ_Ckwas3OmnLY_6PlwGi6yqfja8gTzLRghd-okl2RN7tpuqrwFAEL2awKmX3-ZK4jgndLRCFQAczat9i65wbhCIFDIfwVRvPFtY8OyTfwcGSAhy9GAzpD384PM1MFh8SVPazESJmzGPuC973Gmbfv2dqmY9SLN8nJNY" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-xl md:py-margin mb-24">
        {/* Profile Header Section: Bento-ish Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Coach Identity Card */}
          <div className="lg:col-span-8 bg-white border border-outline-variant rounded-xl p-lg shadow-sm flex flex-col md:flex-row gap-lg items-center md:items-start">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden shrink-0 shadow-md">
              <img alt="Coach Adebayo profile" className="w-full h-full object-cover" data-alt="A close-up high-quality photograph of a Nigerian agricultural expert in his early 40s standing in a thriving poultry farm. He is wearing a clean, branded forest green polo shirt and holding a digital tablet. The background shows rows of modern, sustainable poultry housing under a clear blue sky. The lighting is bright and optimistic, emphasizing a data-driven farming approach." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChKR1OHjY1hmF5bDriIscdRRrvtfDuTmGjENhvpazQDY84TgkEeYDHfa_6tY_QjKMQQYA6BZZ2R7-Z2HVYuP1rXrMToZMGmUHNPHlUypg2yvXs_wJlGKPLuVjcWPfXx9gD51OMdJfeV_weks97gS1-fle2zc_doKiwkQtx4Im1ys6Xn-f7Hej-nlLDIXw1sE03HPSeTmvgoBEEoz3Exxld0x6nU-p2Dgd9TsOqloIRie7iQrKrge7s6qCF_eCHZgZ59SS-i0RlHSE" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-md">
                <div>
                  <h2 className="font-h1 text-h1 text-on-surface">Dr. Adebayo Okoro</h2>
                  <p className="font-body-md text-primary font-semibold">Specialization: Sustainable Poultry Systems</p>
                </div>
                <div className="bg-secondary-container px-md py-sm rounded-full flex items-center gap-xs">
                  <span className="material-symbols-outlined text-on-secondary-container text-sm" data-icon="workspace_premium">workspace_premium</span>
                  <span className="font-label-sm text-on-secondary-container">12+ Years Experience</span>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant leading-relaxed mb-lg">
                Leading expert in tropical poultry management and sustainable feedstock development. Dr. Okoro has helped over 500 Nigerian farms scale their production by 40% using precision agriculture and biosecurity protocols.
              </p>
              <div className="flex flex-wrap gap-sm justify-center md:justify-start">
                <span className="bg-surface-container-high text-on-tertiary-fixed-variant px-md py-xs rounded-full font-label-sm border border-outline-variant">Broiler Optimization</span>
                <span className="bg-surface-container-high text-on-tertiary-fixed-variant px-md py-xs rounded-full font-label-sm border border-outline-variant">Feed Formulation</span>
                <span className="bg-surface-container-high text-on-tertiary-fixed-variant px-md py-xs rounded-full font-label-sm border border-outline-variant">Vaccination Protocols</span>
              </div>
            </div>
          </div>

          {/* Quick Stats Card */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-gutter">
            <div className="bg-primary-container text-on-primary border border-primary-container rounded-xl p-lg shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-4xl opacity-80" data-icon="groups">groups</span>
                <span className="font-label-sm bg-white/20 px-sm py-xs rounded">Top Rated</span>
              </div>
              <div>
                <h3 className="font-h2 text-h2 text-white">4.9/5.0</h3>
                <p className="font-body-sm text-on-primary-container">Average Student Rating</p>
              </div>
            </div>
            <div className="bg-white border border-outline-variant rounded-xl p-lg shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-primary text-4xl" data-icon="videocam">videocam</span>
                <span className="text-primary font-bold">Live</span>
              </div>
              <div>
                <h3 className="font-h2 text-h2 text-on-surface">Daily</h3>
                <p className="font-body-sm text-on-surface-variant">Consultation Availability</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Consultation Services Section */}
          <section className="lg:col-span-7">
            <div className="flex items-center justify-between mb-lg">
              <h2 className="font-h2 text-h2">Consultation Services</h2>
              <span className="text-primary font-semibold flex items-center gap-1 cursor-pointer">
                View All <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </span>
            </div>
            <div className="space-y-md">
              {/* Service Row 1 */}
              <div className="group bg-white border border-outline-variant hover:border-primary p-md rounded-xl transition-all duration-300 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" data-icon="chat">chat</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-on-surface">1-on-1 Q&amp;A Session</h4>
                    <p className="font-body-sm text-on-surface-variant">30 Minutes Video Call</p>
                  </div>
                </div>
                <div className="flex items-center gap-lg">
                  <div className="text-right">
                    <p className="font-h3 text-h3 text-on-surface">₦15,000</p>
                    <p className="font-label-sm text-primary">Limited Slots</p>
                  </div>
                  <button className="bg-primary-container text-on-primary px-lg py-sm rounded-lg font-label-md hover:opacity-90 transition-all active:scale-95">Book Now</button>
                </div>
              </div>
              {/* Service Row 2 */}
              <div className="group bg-white border border-outline-variant hover:border-primary p-md rounded-xl transition-all duration-300 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-on-surface">Farm Audit &amp; Analysis</h4>
                    <p className="font-body-sm text-on-surface-variant">60 Minutes In-depth Review</p>
                  </div>
                </div>
                <div className="flex items-center gap-lg">
                  <div className="text-right">
                    <p className="font-h3 text-h3 text-on-surface">₦35,000</p>
                    <p className="font-label-sm text-secondary">Best Value</p>
                  </div>
                  <button className="bg-primary-container text-on-primary px-lg py-sm rounded-lg font-label-md hover:opacity-90 transition-all active:scale-95">Book Now</button>
                </div>
              </div>
              {/* Service Row 3 */}
              <div className="group bg-white border border-outline-variant hover:border-primary p-md rounded-xl transition-all duration-300 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" data-icon="engineering">engineering</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-on-surface">Biosecurity Implementation</h4>
                    <p className="font-body-sm text-on-surface-variant">2 Sessions + PDF Roadmap</p>
                  </div>
                </div>
                <div className="flex items-center gap-lg">
                  <div className="text-right">
                    <p className="font-h3 text-h3 text-on-surface">₦65,000</p>
                    <p className="font-label-sm text-on-surface-variant">Intensive</p>
                  </div>
                  <button className="bg-primary-container text-on-primary px-lg py-sm rounded-lg font-label-md hover:opacity-90 transition-all active:scale-95">Book Now</button>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Courses Section */}
          <section className="lg:col-span-5">
            <div className="flex items-center justify-between mb-lg">
              <h2 className="font-h2 text-h2">Recent Courses</h2>
              <button className="text-primary font-semibold text-label-md">Subscribe to All</button>
            </div>
            <div className="space-y-gutter">
              {/* Course Card 1 */}
              <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm group">
                <div className="h-40 w-full relative">
                  <img alt="Poultry Mastery Course" className="w-full h-full object-cover" data-alt="An expansive bird's eye view of a clean, modern Nigerian poultry farm at sunrise. The architecture is sleek and sustainable, with solar panels on roofs and perfectly manicured pathways. The atmosphere is professional, clean, and technologically advanced, mirroring a high-end corporate agricultural facility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI73RrUg2O_uAk3lLbQGVVLYR9aSADGSDL8AXUgSDYvEYMasEJFzp4nN3ClPDNCaEV_td5IshRhLZ9kne7sfLAFQus-_k7C9bDtPrELleT4tTJveW6eiGSCzKVILpp7UiEM9RFUTVnuY-zLHGqsqspHnvn5TAe9C5AATesOA8WFFnuaWAPHrvErFviwa2rMVcy76YG4fO51eOOVkTgjlq0VHqRHhP62jqo-_65YhFA4ZIr8O8Ilw2iioPs4cN-HG0_BHrtgk8JzGw" />
                  <div className="absolute top-sm right-sm bg-white/90 backdrop-blur px-sm py-xs rounded font-label-sm text-primary">8 Lessons</div>
                </div>
                <div className="p-md">
                  <h4 className="font-h3 text-on-surface group-hover:text-primary transition-colors">Sustainable Poultry Mastery</h4>
                  <p className="font-body-sm text-on-surface-variant mt-xs">Complete guide to bio-circular poultry farming.</p>
                  <div className="mt-md flex items-center justify-between">
                    <div className="flex items-center gap-xs">
                      <span className="material-symbols-outlined text-sm text-on-surface-variant" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="font-numeric text-on-surface">4.8</span>
                      <span className="font-label-sm text-on-surface-variant">(124)</span>
                    </div>
                    <span className="font-h3 text-primary">₦25,000</span>
                  </div>
                </div>
              </div>
              {/* Course Card 2 */}
              <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm group">
                <div className="h-40 w-full relative">
                  <img alt="Feed Formulation Course" className="w-full h-full object-cover" data-alt="A detailed, macro photograph of high-quality organic chicken feed grains being held in dark-skinned hands. The background is a clean, well-lit agricultural laboratory. The scene conveys scientific precision, nutritional expertise, and high production standards within the modern Nigerian agricultural sector." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAkM4Pm6TGv1LFmggIaYEdIkswo7X9FkEFc6Kw-9o1nkkzT3Em9DmZT4lDD_r4X-qkSnOhz4r0VDLeio1iVztojAo6ZsSMlfwDb7C-PWsPBdnWdEcSX7aE7ZZ0lRLSy_5q9ba3On4yNmheeD2_GUy-H0Wu2rR50IdSjg1lH_UDXaCIdvjeBkEAac-ual39jPCItqcjDQqOYLsyiCRlNFFl9Q1FTVc1nwUwWrFj0nJ2KVW9VV6g6beAh0cbcrJr2WENXVqevibyH9k" />
                  <div className="absolute top-sm right-sm bg-white/90 backdrop-blur px-sm py-xs rounded font-label-sm text-primary">5 Lessons</div>
                </div>
                <div className="p-md">
                  <h4 className="font-h3 text-on-surface group-hover:text-primary transition-colors">Alternative Feed Formulation</h4>
                  <p className="font-body-sm text-on-surface-variant mt-xs">Reducing costs with local ingredients.</p>
                  <div className="mt-md flex items-center justify-between">
                    <div className="flex items-center gap-xs">
                      <span className="material-symbols-outlined text-sm text-on-surface-variant" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="font-numeric text-on-surface">5.0</span>
                      <span className="font-label-sm text-on-surface-variant">(86)</span>
                    </div>
                    <span className="font-h3 text-primary">₦18,500</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 pb-safe bg-white border-t border-gray-100 shadow-[0_-1px_3px_0_rgba(0,0,0,0.05)] z-50">
        <a className="flex flex-col items-center justify-center text-gray-500 px-4 py-1.5 hover:text-green-700 active:opacity-80 transition-all" href="#">
          <span className="material-symbols-outlined" data-icon="school">school</span>
          <span className="font-inter text-[11px] font-semibold">Hub</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-500 px-4 py-1.5 hover:text-green-700 active:opacity-80 transition-all" href="#">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[11px] font-semibold">Marketplace</span>
        </a>
        <a className="flex flex-col items-center justify-center text-green-800 bg-green-50 rounded-lg px-4 py-1.5 active:opacity-80 transition-all" href="#">
          <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
          <span className="font-inter text-[11px] font-semibold">Profile</span>
        </a>
      </nav>
    </div>
  );
}

function AccessContactPage() {
  return (
    <div className="bg-white text-on-surface antialiased" style={{fontFamily: "'Inter', sans-serif", minHeight: 'max(884px, 100dvh)'}}>
      {/* TopAppBar */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-4 h-16 max-w-7xl mx-auto">
          <div className="flex items-center">
            <img alt="KIZ FARM Official Logo" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ugzYC4-jqxSvxpO-z71bb0GLSnz_-daStJIDb_rNawDmL25axyIiZy8Cqf1UcXvoLZLDeXjPhmjvdKjTxAlrjvjl3HXCUWXUj5nkd-CNJRdE5q0cUnyPeJSBDqfwKp2LBqoAXSOr9rxTHYeYdNtnu7qp_P10cfeet2EPbyN482EHqLb_yukw7jI8RArrUC1lZTB-VHlTnuP22hg4JuRelxxtVa1Qgw4ltrQRNHgV0L1G3laFJ7TF4ZomEhxJ1EQNPEyGr6vd4TvKw" />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6 items-center">
              <a className="font-inter antialiased text-sm font-medium text-gray-500 hover:text-green-800 duration-150" href="#">Hub</a>
              <a className="font-inter antialiased text-sm font-medium text-gray-500 hover:text-green-800 duration-150" href="#">Marketplace</a>
              <a className="font-inter antialiased text-sm font-medium text-green-800 font-bold" href="#">Profile</a>
            </div>
            <img alt="Nigerian farmer profile photo" className="w-8 h-8 rounded-full border border-gray-200 object-cover" data-alt="A professional close-up portrait of a Nigerian agricultural expert in a modern office setting. He is wearing a clean, professional button-down shirt and has a warm, confident expression. The lighting is bright and natural, reflecting a clean SaaS brand aesthetic with soft shadows and high-key tones. The background is a blurred office interior with hints of green foliage." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCtLuPLknfTb22NHzPcQYkRunGVkxkXZKXtzeg5klOJVQrMcrSfjDEZyL_PprDGOmL_UQmXkGQa527MLbdbV7M15QpRLptkv4L7n-l04P_RiaNtipMZ8yFw1eWJVrU4fgn5-5rC0a6AqZEfExzrMt0n6iscUr8GeTfRpxYKdXDSpc8drwNBF4ip_NlX1eDTBMXIcFIe-Dv25RmupP51rCNPoxQKdtkvWUDSoniTg9VbgJZnBbI4PtDhZAyTNzJX86L8OeMOZo7FY8" />
          </div>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-4 md:px-32 py-12 md:py-16">
        {/* Success State Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-fixed rounded-full mb-6">
            <span className="material-symbols-outlined text-primary text-[48px]" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
          </div>
          <h2 className="font-h1 text-h1 text-on-surface mb-2">Subscription Confirmed!</h2>
          <p className="font-body-md text-text-body-md text-on-surface-variant">Your journey to professional farming excellence starts now. We've notified your coach about your enrollment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-5xl mx-auto">
          {/* Coach Contact Information Card */}
          <div className="md:col-span-7 bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden">
            <div className="p-lg border-b border-outline-variant bg-surface-container-lowest">
              <h3 className="font-h3 text-h3 text-on-surface">Your Coach's Contact Information</h3>
            </div>
            <div className="p-lg space-y-6">
              <div className="flex items-center gap-4">
                <img alt="Coach profile photo" className="w-16 h-16 rounded-lg object-cover" data-alt="A professional headshot of an experienced agricultural coach with a friendly and knowledgeable expression. He is dressed in business casual attire suitable for an agrotech consultancy role. The photography uses high-quality studio lighting that creates a professional, trustworthy atmosphere consistent with a modern SaaS platform. The background is neutral and clean." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNfciFfGwSVJ7ZCQeTtkj0gBc0b7MqUZlhP-LRcq3EMat2Xi7ISN2ZxnrC4OAZJ4XxtiTWbq7V2fdQXiobWl9SQUq6w4F0aS6qE3SR7aYMFxw8VO-asW1iZscvpeM3U78c6Qg7WhIs3R24PVgVNVe26-vJwMtidb_8XmS2-MeWvvWb09qhIlAeGhd7fdQTWXoiYEYdO6KSSswWAABYvXLykD1pXsLMIkeqy5vKpmR2c1FJiyjvW0xMkR1M_alqu-duOQCWrY5iI3o" />
                <div>
                  <p className="font-label-sm text-text-label-sm text-outline uppercase tracking-wider">Lead Instructor</p>
                  <p className="font-h2 text-h2 text-on-surface">Dr. Olumide Adeleke</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-md rounded-lg bg-surface-container-low border border-outline-variant">
                  <span className="material-symbols-outlined text-primary" data-icon="chat">chat</span>
                  <div>
                    <p className="font-label-sm text-text-label-sm text-on-surface-variant">WhatsApp Number</p>
                    <p className="font-numeric text-text-numeric font-semibold text-on-surface">+234 801 234 5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-md rounded-lg bg-surface-container-low border border-outline-variant">
                  <span className="material-symbols-outlined text-primary" data-icon="mail">mail</span>
                  <div>
                    <p className="font-label-sm text-text-label-sm text-on-surface-variant">Official Email</p>
                    <p className="font-numeric text-text-numeric font-semibold text-on-surface">adeleke.o@kizfarm.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps Card */}
          <div className="md:col-span-5 bg-white rounded-xl border border-outline-variant shadow-sm flex flex-col">
            <div className="p-lg border-b border-outline-variant bg-surface-container-lowest">
              <h3 className="font-h3 text-h3 text-on-surface">Next Steps</h3>
            </div>
            <div className="p-lg flex-grow flex flex-col justify-center space-y-4">
              <button className="w-full bg-primary-container text-white py-4 px-6 rounded-lg font-label-md flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                <span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
                Access Course Materials
              </button>
              <button className="w-full bg-white text-primary-container border-2 border-primary-container py-4 px-6 rounded-lg font-label-md flex items-center justify-center gap-2 hover:bg-green-50 active:scale-95 transition-all">
                <span className="material-symbols-outlined" data-icon="send">send</span>
                Message Coach
              </button>
              <div className="pt-4 text-center">
                <p className="font-body-sm text-text-body-sm text-on-surface-variant">
                  Course content is now available in your dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Summary Bento-ish Section */}
        <div className="mt-xl grid grid-cols-1 md:grid-cols-3 gap-gutter max-w-5xl mx-auto">
          <div className="p-lg bg-surface-container rounded-xl border border-outline-variant">
            <span className="material-symbols-outlined text-primary mb-2" data-icon="calendar_today">calendar_today</span>
            <p className="font-label-sm text-text-label-sm text-on-surface-variant uppercase">Duration</p>
            <p className="font-h3 text-h3 text-on-surface">12 Weeks</p>
          </div>
          <div className="p-lg bg-surface-container rounded-xl border border-outline-variant">
            <span className="material-symbols-outlined text-primary mb-2" data-icon="videocam">videocam</span>
            <p className="font-label-sm text-text-label-sm text-on-surface-variant uppercase">Format</p>
            <p className="font-h3 text-h3 text-on-surface">Live &amp; Recorded</p>
          </div>
          <div className="p-lg bg-surface-container rounded-xl border border-outline-variant">
            <span className="material-symbols-outlined text-primary mb-2" data-icon="workspace_premium">workspace_premium</span>
            <p className="font-label-sm text-text-label-sm text-on-surface-variant uppercase">Benefit</p>
            <p className="font-h3 text-h3 text-on-surface">Global Certificate</p>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 flex justify-around items-center px-4 py-2 pb-safe z-50 shadow-[0_-1px_3px_0_rgba(0,0,0,0.05)]">
        <a className="flex flex-col items-center justify-center text-gray-500 px-4 py-1.5 hover:text-green-700 active:opacity-80 transition-opacity" href="#">
          <span className="material-symbols-outlined" data-icon="school">school</span>
          <span className="font-inter text-[11px] font-semibold">Hub</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-500 px-4 py-1.5 hover:text-green-700 active:opacity-80 transition-opacity" href="#">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[11px] font-semibold">Marketplace</span>
        </a>
        <a className="flex flex-col items-center justify-center text-green-800 bg-green-50 rounded-lg px-4 py-1.5 active:opacity-80 transition-opacity" href="#">
          <span className="material-symbols-outlined" data-icon="account_circle" style={{fontVariationSettings: "'FILL' 1"}}>account_circle</span>
          <span className="font-inter text-[11px] font-semibold">Profile</span>
        </a>
      </nav>

      {/* Spacer for Mobile Nav */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
}

function CourseDetailPage() {
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
                <img alt="Cassava Processing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="A cinematic, high-detail image of cassava processing in a modern Nigerian facility. The scene shows clean, industrial machinery alongside fresh cassava roots. The lighting is bright and industrial-chic, with a focus on hygiene and modern technology. The color palette is dominated by clean whites, metallic grays, and the natural tones of the cassava roots." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbjIuIdcVF5h2pMX5YIBHrR9salYJ_Zc6moc9eRy7I9uuIoaMBixVUEzhm_z6-t_DteJ40S_aX67iSFpUd7W9UnqIhTolE0RMegzz5Xi_fuZaI6-H0L3cB40vymR6_ncjb9ZPKyjmGmrfGghmRmb8CXFoEpeYiuMNogpUS_C2dgMQA9_Hq_rmFEGnFhATAEGuf3iTwvu-h495ACibpI604bKBOMtMzQedhp2rVFK4Kk_oS8tiO70R6x32JNi2JEdo5iXiM-PV7x-I" />
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

function AdminDashboardPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface" style={{fontFamily: "'Inter', sans-serif", minHeight: 'max(884px, 100dvh)'}}>
      {/* NavigationDrawer */}
      <aside className="fixed left-0 top-0 h-full w-[280px] border-r border-gray-200 bg-white shadow-none flex flex-col py-6 px-4 gap-2 z-50 overflow-y-auto">
        <div className="flex items-center gap-3 px-4 mb-8">
          <img alt="KizFarm Logo" className="w-10 h-10 object-contain" data-alt="KizFarm brand logo" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          <h1 className="text-xl font-black tracking-tight text-emerald-900">KizFarm</h1>
        </div>
        <nav className="flex flex-col gap-1">
          <a className="flex items-center gap-3 px-4 py-3 text-emerald-700 font-semibold bg-emerald-50/50 rounded-lg scale-100 active:scale-[0.98] transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="font-inter text-sm antialiased">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="group">group</span>
            <span className="font-inter text-sm antialiased">Users</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
            <span className="font-inter text-sm antialiased">Farmers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span className="font-inter text-sm antialiased">Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span className="font-inter text-sm antialiased">Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
            <span className="font-inter text-sm antialiased">Drivers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="payments">payments</span>
            <span className="font-inter text-sm antialiased">Payments</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="assessment">assessment</span>
            <span className="font-inter text-sm antialiased">Reports</span>
          </a>
          <div className="mt-auto flex flex-col gap-1">
            <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
              <span className="font-inter text-sm antialiased">Notifications</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 scale-100 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
              <span className="font-inter text-sm antialiased">Settings</span>
            </a>
          </div>
        </nav>
      </aside>

      {/* TopAppBar */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm flex justify-between items-center h-16 px-8 ml-[280px] w-[calc(100%-280px)]">
        <div className="flex items-center gap-4">
          <button className="hover:bg-gray-100 rounded-full p-2 transition-all duration-200 text-emerald-800 lg:hidden">
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
          <h2 className="text-lg font-bold text-emerald-900">Dashboard Overview</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <button className="hover:bg-gray-100 rounded-full p-2 transition-all duration-200 text-gray-500">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-white"></span>
            </button>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
            <div className="text-right hidden sm:block">
              <p className="font-label-md text-on-surface leading-none mb-1">Admin User</p>
              <p className="font-label-sm text-secondary leading-none">Super Administrator</p>
            </div>
            <img alt="Admin Profile" className="w-9 h-9 rounded-full object-cover border border-emerald-100" data-alt="professional portrait of a corporate administrator in business attire, clean studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZC_LRaKvUzhFoj2SsEaEabfvJYppbkwRYYcSNz-1ab3fLWw39UTK-0f0rHEDQu94zZ7u4oDLeYxdtgzpDvikM5NiNmnaY6qLPgDZkI5mHIFKgVlKEMcURH4jQ71XVSD65ZI71db6-IRgfdKIxCakWyAIdguTpVQRigEhG4VNC2AGrMPyD_MaP_tDao5lAs6vTbGN5aqRVDYoyfFarSpWnPymFe9eijJEQy5yenpXZUlMS95KUsKHlTw6qQypQ3yk3XR4rHPgb_Q4" />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-[280px] p-margin min-h-screen">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-gutter text-secondary font-label-sm">
          <span>Home</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-bold">Dashboard</span>
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter mb-gutter">
          {/* Stat Card 1 */}
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.05)] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-sm">
              <div className="p-sm bg-emerald-50 text-emerald-700 rounded-lg">
                <span className="material-symbols-outlined" data-icon="group">group</span>
              </div>
              <span className="flex items-center gap-1 font-label-sm text-primary px-2 py-1 bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                12%
              </span>
            </div>
            <h4 className="font-label-md text-secondary uppercase tracking-wider mb-xs">Total Users</h4>
            <div className="flex items-baseline gap-2">
              <span className="font-h1 text-on-surface">12.5k</span>
              <span className="font-body-sm text-secondary">from last month</span>
            </div>
          </div>
          {/* Stat Card 2 */}
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.05)] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-sm">
              <div className="p-sm bg-blue-50 text-blue-700 rounded-lg">
                <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
              </div>
              <span className="flex items-center gap-1 font-label-sm text-primary px-2 py-1 bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                8.5%
              </span>
            </div>
            <h4 className="font-label-md text-secondary uppercase tracking-wider mb-xs">Total Farmers</h4>
            <div className="flex items-baseline gap-2">
              <span className="font-h1 text-on-surface">4.2k</span>
              <span className="font-body-sm text-secondary">from last month</span>
            </div>
          </div>
          {/* Stat Card 3 */}
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.05)] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-sm">
              <div className="p-sm bg-orange-50 text-orange-700 rounded-lg">
                <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
              </div>
              <span className="flex items-center gap-1 font-label-sm text-primary px-2 py-1 bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                15%
              </span>
            </div>
            <h4 className="font-label-md text-secondary uppercase tracking-wider mb-xs">Total Orders</h4>
            <div className="flex items-baseline gap-2">
              <span className="font-h1 text-on-surface">8.9k</span>
              <span className="font-body-sm text-secondary">from last month</span>
            </div>
          </div>
          {/* Stat Card 4 */}
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.05)] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-sm">
              <div className="p-sm bg-emerald-700 text-white rounded-lg">
                <span className="material-symbols-outlined" data-icon="payments">payments</span>
              </div>
              <span className="flex items-center gap-1 font-label-sm text-primary px-2 py-1 bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                24%
              </span>
            </div>
            <h4 className="font-label-md text-secondary uppercase tracking-wider mb-xs">Total Revenue</h4>
            <div className="flex items-baseline gap-2">
              <span className="font-h1 text-on-surface">₦45.2M</span>
              <span className="font-body-sm text-secondary">from last month</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-gutter">
          {/* Analytics Chart Area */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.05)] overflow-hidden">
            <div className="px-lg py-md border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="font-h3 text-on-surface">Revenue &amp; Order Volume</h3>
                <p className="font-body-sm text-secondary">Tracking monthly growth performance</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-label-sm bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">1M</button>
                <button className="px-3 py-1.5 text-label-sm bg-primary text-white rounded-lg">6M</button>
                <button className="px-3 py-1.5 text-label-sm bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">1Y</button>
              </div>
            </div>
            <div className="p-lg">
              <div className="relative h-[300px] w-full flex items-end justify-between px-4 pb-8 border-b border-l border-gray-100">
                {/* Simulated Chart Bars */}
                <div className="flex flex-col items-center gap-2 group w-1/12">
                  <div className="w-full bg-emerald-100 h-24 rounded-t-sm group-hover:bg-emerald-200 transition-all"></div>
                  <div className="w-full bg-emerald-700 h-16 rounded-t-sm group-hover:bg-emerald-800 transition-all"></div>
                  <span className="absolute -bottom-8 font-label-sm text-secondary">Jan</span>
                </div>
                <div className="flex flex-col items-center gap-2 group w-1/12">
                  <div className="w-full bg-emerald-100 h-32 rounded-t-sm group-hover:bg-emerald-200 transition-all"></div>
                  <div className="w-full bg-emerald-700 h-20 rounded-t-sm group-hover:bg-emerald-800 transition-all"></div>
                  <span className="absolute -bottom-8 font-label-sm text-secondary">Feb</span>
                </div>
                <div className="flex flex-col items-center gap-2 group w-1/12">
                  <div className="w-full bg-emerald-100 h-28 rounded-t-sm group-hover:bg-emerald-200 transition-all"></div>
                  <div className="w-full bg-emerald-700 h-24 rounded-t-sm group-hover:bg-emerald-800 transition-all"></div>
                  <span className="absolute -bottom-8 font-label-sm text-secondary">Mar</span>
                </div>
                <div className="flex flex-col items-center gap-2 group w-1/12">
                  <div className="w-full bg-emerald-100 h-40 rounded-t-sm group-hover:bg-emerald-200 transition-all"></div>
                  <div className="w-full bg-emerald-700 h-32 rounded-t-sm group-hover:bg-emerald-800 transition-all"></div>
                  <span className="absolute -bottom-8 font-label-sm text-secondary">Apr</span>
                </div>
                <div className="flex flex-col items-center gap-2 group w-1/12">
                  <div className="w-full bg-emerald-100 h-48 rounded-t-sm group-hover:bg-emerald-200 transition-all"></div>
                  <div className="w-full bg-emerald-700 h-36 rounded-t-sm group-hover:bg-emerald-800 transition-all"></div>
                  <span className="absolute -bottom-8 font-label-sm text-secondary">May</span>
                </div>
                <div className="flex flex-col items-center gap-2 group w-1/12">
                  <div className="w-full bg-emerald-100 h-56 rounded-t-sm group-hover:bg-emerald-200 transition-all"></div>
                  <div className="w-full bg-emerald-700 h-44 rounded-t-sm group-hover:bg-emerald-800 transition-all"></div>
                  <span className="absolute -bottom-8 font-label-sm text-secondary">Jun</span>
                </div>
              </div>
              <div className="mt-xl flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-700 rounded-full"></span>
                  <span className="font-label-sm text-secondary">Revenue (M)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-100 rounded-full"></span>
                  <span className="font-label-sm text-secondary">Orders (k)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-white rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.05)] overflow-hidden">
            <div className="px-lg py-md border-b border-gray-100">
              <h3 className="font-h3 text-on-surface">System Activity</h3>
              <p className="font-body-sm text-secondary">Real-time admin events</p>
            </div>
            <div className="p-lg flex flex-col gap-6">
              <div className="flex gap-4 relative before:content-[''] before:absolute before:left-[11px] before:top-6 before:h-full before:w-[1px] before:bg-gray-100 last:before:hidden">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center z-10 shrink-0">
                  <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>circle</span>
                </div>
                <div>
                  <p className="font-label-md text-on-surface">New Farmer Onboarded</p>
                  <p className="font-body-sm text-secondary mb-1">Adebayo Farms Ltd. joined the platform</p>
                  <span className="font-label-sm text-gray-400">2 mins ago</span>
                </div>
              </div>
              <div className="flex gap-4 relative before:content-[''] before:absolute before:left-[11px] before:top-6 before:h-full before:w-[1px] before:bg-gray-100 last:before:hidden">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center z-10 shrink-0">
                  <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>circle</span>
                </div>
                <div>
                  <p className="font-label-md text-on-surface">Bulk Inventory Update</p>
                  <p className="font-body-sm text-secondary mb-1">Products in 'Grain' category updated</p>
                  <span className="font-label-sm text-gray-400">45 mins ago</span>
                </div>
              </div>
              <div className="flex gap-4 relative before:content-[''] before:absolute before:left-[11px] before:top-6 before:h-full before:w-[1px] before:bg-gray-100 last:before:hidden">
                <div className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center z-10 shrink-0">
                  <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>circle</span>
                </div>
                <div>
                  <p className="font-label-md text-on-surface">Payment Dispute Flagged</p>
                  <p className="font-body-sm text-secondary mb-1">Order #8829 pending review</p>
                  <span className="font-label-sm text-gray-400">2 hours ago</span>
                </div>
              </div>
              <button className="w-full py-2 text-label-sm text-primary font-bold hover:bg-emerald-50 rounded-lg transition-colors border border-dashed border-primary/20">
                View All Activity
              </button>
            </div>
          </div>
        </div>

        {/* Latest Orders Table */}
        <div className="bg-white rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(16,24,40,0.05)] overflow-hidden">
          <div className="px-lg py-md border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="font-h3 text-on-surface">Recent Orders</h3>
              <p className="font-body-sm text-secondary">Latest 5 transactions across the network</p>
            </div>
            <button className="flex items-center gap-2 text-label-sm text-primary font-bold px-4 py-2 hover:bg-emerald-50 rounded-lg transition-colors">
              Export CSV <span className="material-symbols-outlined text-[18px]">download</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-lg py-md font-label-sm text-secondary uppercase">Order ID</th>
                  <th className="px-lg py-md font-label-sm text-secondary uppercase">Farmer</th>
                  <th className="px-lg py-md font-label-sm text-secondary uppercase">Status</th>
                  <th className="px-lg py-md font-label-sm text-secondary uppercase">Items</th>
                  <th className="px-lg py-md font-label-sm text-secondary uppercase text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-lg py-md font-numeric text-on-surface font-medium">#ORD-9902</td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-[12px]">SO</div>
                      <span className="font-label-md text-on-surface">Samuel Okafor</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[12px] font-bold">Completed</span>
                  </td>
                  <td className="px-lg py-md font-body-sm text-secondary">12x Organic Yam</td>
                  <td className="px-lg py-md font-numeric text-right font-bold text-on-surface">₦45,000.00</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-lg py-md font-numeric text-on-surface font-medium">#ORD-9901</td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-[12px]">FA</div>
                      <span className="font-label-md text-on-surface">Fatima Aminu</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[12px] font-bold">Processing</span>
                  </td>
                  <td className="px-lg py-md font-body-sm text-secondary">5x Basket Tomatoes</td>
                  <td className="px-lg py-md font-numeric text-right font-bold text-on-surface">₦12,500.00</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-lg py-md font-numeric text-on-surface font-medium">#ORD-9899</td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold text-[12px]">JE</div>
                      <span className="font-label-md text-on-surface">John Edeh</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[12px] font-bold">Completed</span>
                  </td>
                  <td className="px-lg py-md font-body-sm text-secondary">20kg Brown Rice</td>
                  <td className="px-lg py-md font-numeric text-right font-bold text-on-surface">₦82,000.00</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-lg py-md font-numeric text-on-surface font-medium">#ORD-9898</td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-[12px]">CA</div>
                      <span className="font-label-md text-on-surface">Chidi Azikiwe</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="px-2.5 py-0.5 rounded-full bg-error-container text-error text-[12px] font-bold">Cancelled</span>
                  </td>
                  <td className="px-lg py-md font-body-sm text-secondary">2x Palm Oil (5L)</td>
                  <td className="px-lg py-md font-numeric text-right font-bold text-on-surface">₦15,000.00</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-lg py-md font-numeric text-on-surface font-medium">#ORD-9897</td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-[12px]">BA</div>
                      <span className="font-label-md text-on-surface">Bello Agro-Vets</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[12px] font-bold">Completed</span>
                  </td>
                  <td className="px-lg py-md font-body-sm text-secondary">Mixed Grains Batch</td>
                  <td className="px-lg py-md font-numeric text-right font-bold text-on-surface">₦155,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-lg py-md border-t border-gray-100 flex items-center justify-between">
            <p className="font-label-sm text-secondary">Showing 5 of 8,900+ orders</p>
            <div className="flex gap-2">
              <button className="p-1.5 border border-gray-200 rounded hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <button className="p-1.5 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* FAB for quick actions */}
      <button className="fixed bottom-margin right-margin bg-primary-container text-on-primary-container w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group">
        <span className="material-symbols-outlined text-[32px] group-hover:rotate-90 transition-transform">add</span>
      </button>
    </div>
  );
}

function UserListPage() {
  return (
    <div className="bg-background text-on-background antialiased" style={{fontFamily: "'Inter', sans-serif", minHeight: 'max(884px, 100dvh)'}}>
      {/* NavigationDrawer Shell */}
      <aside className="fixed left-0 top-0 h-full w-[280px] border-r border-outline-variant bg-surface-container-lowest flex flex-col py-6 px-4 gap-2 z-50">
        <div className="mb-8 px-4">
          <h1 className="text-xl font-black tracking-tight text-primary-container">
            <img alt="KizFarm Logo" className="h-12 w-auto mb-2" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
            <span className="text-xl font-black tracking-tight text-primary-container">KizFarm</span>
          </h1>
        </div>
        <nav className="flex flex-col gap-1">
          <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span>Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-emerald-700 font-semibold bg-emerald-50/50 rounded-lg transition-transform scale-100 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="group" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
            <span>Users</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
            <span>Farmers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span>Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span>Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
            <span>Drivers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="payments">payments</span>
            <span>Payments</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="assessment">assessment</span>
            <span>Reports</span>
          </a>
          <div className="mt-auto pt-6 border-t border-outline-variant flex flex-col gap-1">
            <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
              <span>Notifications</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium rounded-lg" href="#">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
              <span>Settings</span>
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="ml-[280px] min-h-screen">
        {/* TopAppBar */}
        <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center h-16 px-8">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200">
              <span className="material-symbols-outlined text-primary" data-icon="menu">menu</span>
            </button>
            <h2 className="text-lg font-bold text-emerald-900">All Users</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <input className="pl-10 pr-4 py-2 rounded-full border border-outline-variant bg-surface-container-low text-sm focus:outline-none focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all w-64" placeholder="Global search..." type="text" />
              <span className="material-symbols-outlined absolute left-3 top-2 text-gray-400 text-lg" data-icon="search">search</span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 relative">
              <span className="material-symbols-outlined text-primary" data-icon="notifications">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center text-white text-xs font-bold overflow-hidden">
              <img alt="User Profile" data-alt="professional portrait of an administrative manager in a corporate office setting with soft focus background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB379_dzaod3sdhGTXuNTO28tOe6_3WieoDmjl-VqkfqixJJxb-P88JKPt2JLeKBE320y4WDgfh-MUsuhzIEQVEGIhoc9XeTipNyAj2tG6_9tHUC7c-m6za5d1CMWy3L6WEx5g87tJI9Ip8yp7B-dsePgRnkewUSuWpkQ6hiUcxvMXlNHKoYN9gLF3DM6NMgGDL4nmo3UMx8jH4wYhJJWgho8PoKaIXjgCNRC2gqxwIBwYcxVvqMHTFBmow67HoDLLIjvDoxMxpjJU" />
            </div>
          </div>
        </header>

        {/* Page Canvas */}
        <section className="p-8 max-w-[1440px] mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex mb-6 text-sm text-gray-500 font-medium">
            <a className="hover:text-primary" href="#">Admin Dashboard</a>
            <span className="mx-2">/</span>
            <span className="text-primary-container font-semibold">User Management</span>
          </nav>

          {/* Top Filter Bar */}
          <div className="bg-white border border-outline-variant rounded-xl p-4 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <input className="pl-10 pr-4 py-2 rounded-lg border border-outline-variant text-sm focus:ring-2 focus:ring-primary-container/10 focus:border-primary-container outline-none w-80" placeholder="Search by name or email..." type="text" />
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-sm" data-icon="search">search</span>
              </div>
              <select className="pl-3 pr-8 py-2 rounded-lg border border-outline-variant text-sm text-gray-600 focus:ring-2 focus:ring-primary-container/10 focus:border-primary-container outline-none bg-white">
                <option>Status: All</option>
                <option>Active</option>
                <option>Suspended</option>
                <option>Pending</option>
              </select>
              <select className="pl-3 pr-8 py-2 rounded-lg border border-outline-variant text-sm text-gray-600 focus:ring-2 focus:ring-primary-container/10 focus:border-primary-container outline-none bg-white">
                <option>Role: All Users</option>
                <option>Admin</option>
                <option>Farmer</option>
                <option>Customer</option>
                <option>Driver</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 border border-outline-variant rounded-lg hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined text-lg" data-icon="filter_list">filter_list</span>
                More Filters
              </button>
            </div>
            <button className="bg-primary-container text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary transition-all flex items-center gap-2 shadow-sm active:scale-95">
              <span className="material-symbols-outlined text-lg" data-icon="person_add">person_add</span>
              Invite New User
            </button>
          </div>

          {/* Users Table Card */}
          <div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between bg-gray-50/30">
              <h3 className="font-h3 text-on-surface text-lg">Total Users <span className="ml-2 text-sm font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">1,248</span></h3>
              <div className="flex gap-2">
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                  <span className="material-symbols-outlined" data-icon="download">download</span>
                </button>
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                  <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-gray-500 border-b border-outline-variant">
                      <div className="flex items-center gap-2">
                        <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                        User Profile
                      </div>
                    </th>
                    <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-gray-500 border-b border-outline-variant">Email Address</th>
                    <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-gray-500 border-b border-outline-variant">Phone Number</th>
                    <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-gray-500 border-b border-outline-variant">Status</th>
                    <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-gray-500 border-b border-outline-variant">Join Date</th>
                    <th className="px-6 py-4 text-label-sm uppercase tracking-wider text-gray-500 border-b border-outline-variant text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {/* Row 1: Active */}
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <img alt="User Avatar" data-alt="headshot of a smiling young man in a casual denim shirt against a neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6PfgRwOOcUXjkl6ha2xEjzEF9vF9r_LMiigR0DhDtBMH-pJxegz5jZFr6m01Ufw_ctLni1JqAWCMJqdlC6qoklJKgY7WGFI9MD8gSOgfkRG_u0Beq-TLTCkKK2eE0mkVoeHd4KTYPL2k6IHuIpWT-8vnL_UX8HQy3Ear4ZuVnPtYHFUJqQ2Q07mtI3zrpKa7zkUokjmW6_Xs96KkEc_ndwi4XjPEOKBlrLs7WrJqyvRoj7K5a50Pi_tTkC8_vTHXlkOC6vWC3mXQ" />
                        </div>
                        <div>
                          <div className="text-body-md font-semibold text-on-surface">Marcus Thorne</div>
                          <div className="text-xs text-gray-500">Tier 1 Farmer</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">m.thorne@example.com</td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">+1 (555) 012-3456</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Active</span>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">Oct 24, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 text-xs font-semibold text-primary hover:bg-emerald-50 rounded-md transition-colors border border-transparent hover:border-emerald-100">View Details</button>
                        <button className="px-3 py-1.5 text-xs font-semibold text-error hover:bg-red-50 rounded-md transition-colors">Suspend</button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2: Pending */}
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <img alt="User Avatar" data-alt="portrait of a young woman with a friendly smile, outdoor lighting, blurred greenery in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAudR0TX1wCfB0WTMUXDuOZvASoTKcEygEIw5Ljxu30rd_PdZRVmHNrlaz19nCFS59bY35Z-GAkGm5PB4PO0l-KR2qCmDN00XxTPl4YlzEIBOwBC7XRc0QY3-qAbJwMBBaAOrrAA93mo9WbY5sSSjRGV2bo8lVVE_YlAQfrs5o95cTbZvg7sTSIjbrfbcBoKGt1s75RTs1pg2hwbZOxHmIdDvI8kMLqpjoGDU4RSJqOd5rZAfKzqV4R3-6xOboRxFdIl7Lu0xoez1A" />
                        </div>
                        <div>
                          <div className="text-body-md font-semibold text-on-surface">Elena Rodriguez</div>
                          <div className="text-xs text-gray-500">Retail Customer</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">elena.r@kizfarm.net</td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">+1 (555) 987-6543</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Pending</span>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">Nov 02, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 text-xs font-semibold text-primary hover:bg-emerald-50 rounded-md transition-colors">View Details</button>
                        <button className="px-3 py-1.5 text-xs font-semibold text-error hover:bg-red-50 rounded-md transition-colors">Suspend</button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 3: Suspended */}
                  <tr className="hover:bg-gray-50/80 transition-colors bg-red-50/10">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <img alt="User Avatar" data-alt="medium shot of a middle aged man with a beard looking directly into the camera, professional lighting, indoor office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9efodBEehg1OGBPayxfJXdpyVHu_ggaKZ8h9YfkQlkWPVdPzlkEB97oECiyCms4qPuvtRYWz_7YGDvnfFSfvthK_qrjkiwGsEbjwzzaesX7cPCgs2UjkTIVMigpqlfo6V6qtSz89zqHmgQcsLcODU5MtwMFVkudqM1PvdACvexKnkmMTpgfGI4ziammjWaWiEMZ5kOwYR46_Mf_EIv2p7q5yyggWvalCeacQkdjbnRrgXA_OspmF0ekEIs4Tols1XsiSJ9onB7_I" />
                        </div>
                        <div>
                          <div className="text-body-md font-semibold text-on-surface">Silas Vane</div>
                          <div className="text-xs text-gray-500">Logistics Driver</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">sv@trucklogistics.com</td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">+1 (555) 443-2211</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Suspended</span>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">Sep 15, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 text-xs font-semibold text-primary hover:bg-emerald-50 rounded-md transition-colors">View Details</button>
                        <button className="px-3 py-1.5 text-xs font-semibold text-white bg-error rounded-md transition-all shadow-sm">Lift Ban</button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 4: Active */}
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <img alt="User Avatar" data-alt="close up profile of a young woman with bright expression, natural light, urban background with warm tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxK7yYwOGKuGn6KVWdZt0AuP_Gpmk2wm3UfNDpszwd6vcj3DNfDOWfQw2ISGNPLBc3NLuFlvamsFHGvkVjBRry12KHWf7k7niidvqJDTZ0ZEQETNHGc-x96yQSL4BgNrrTEXVOJ76jZFoTwLsr47DssOSKWZWsLzxKIT-yCiWyy5xh5IlFLGiHgD54rzkACK4DXia3virpeEyAsKAa1Pj44UJ6thpbXkDOkrstosNCXw4y_fisg6l9vSWxhwGPZB81RBfYaq1k5ig" />
                        </div>
                        <div>
                          <div className="text-body-md font-semibold text-on-surface">Sarah Chen</div>
                          <div className="text-xs text-gray-500">Global Admin</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">sarah.chen@kizfarm.com</td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">+1 (555) 777-8899</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Active</span>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">Jun 12, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 text-xs font-semibold text-primary hover:bg-emerald-50 rounded-md transition-colors">View Details</button>
                        <button className="px-3 py-1.5 text-xs font-semibold text-error hover:bg-red-50 rounded-md transition-colors">Suspend</button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 5: Active */}
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <img alt="User Avatar" data-alt="portrait of a man with sunglasses and casual jacket standing in a city park at dusk, cinematic warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAalYhUgkdT7YDdEZyWEcyWe_F6mQS1Tn0hura1KFqdHulWWsCf9n-qKmxNs-BTcIfLz5bZZ8IVRj65-db__1DwDOgAXQYUB0L5_4SMLdL82hCbOn0v6YindF3TsEqH9OThXvu5OrFDJzRqSGD9hIKvIZukk5m9yKEcqVB21yQNDcQs84VhkLSqYmbhc01Z4jZB5h4DzGhaqu2YcXZD3D8NgTwvtoMaS0krxg1Kpyr427iWEp9uaweu2qakmYiwz4cusCtZDssGqDI" />
                        </div>
                        <div>
                          <div className="text-body-md font-semibold text-on-surface">David Okafor</div>
                          <div className="text-xs text-gray-500">Tier 2 Farmer</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">d.okafor@agrihub.org</td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">+1 (555) 662-1144</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Active</span>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-gray-600">Dec 01, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 text-xs font-semibold text-primary hover:bg-emerald-50 rounded-md transition-colors">View Details</button>
                        <button className="px-3 py-1.5 text-xs font-semibold text-error hover:bg-red-50 rounded-md transition-colors">Suspend</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination Footer */}
            <div className="px-6 py-4 bg-white border-t border-outline-variant flex items-center justify-between">
              <span className="text-body-sm text-gray-500">Showing 1 to 5 of 1,248 users</span>
              <div className="flex gap-1">
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-gray-50 text-gray-400 cursor-not-allowed">
                  <span className="material-symbols-outlined text-base" data-icon="chevron_left">chevron_left</span>
                </button>
                <button className="px-3 py-1 bg-primary text-white rounded font-medium text-sm">1</button>
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-gray-50 text-gray-600 text-sm">2</button>
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-gray-50 text-gray-600 text-sm">3</button>
                <span className="px-3 py-1 text-gray-400">...</span>
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-gray-50 text-gray-600 text-sm">250</button>
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-gray-50 text-gray-600">
                  <span className="material-symbols-outlined text-base" data-icon="chevron_right">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Analytics Quick View (Bento Style) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <span className="material-symbols-outlined text-2xl" data-icon="person_outline">person_outline</span>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">New Registrations</div>
                <div className="text-xl font-bold text-on-surface">+124 <span className="text-xs font-normal text-emerald-500 ml-1">↑ 8%</span></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined text-2xl" data-icon="verified_user">verified_user</span>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Verification Rate</div>
                <div className="text-xl font-bold text-on-surface">94.2% <span className="text-xs font-normal text-emerald-500 ml-1">↑ 2%</span></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <span className="material-symbols-outlined text-2xl" data-icon="timer">timer</span>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Avg Session</div>
                <div className="text-xl font-bold text-on-surface">12m 4s <span className="text-xs font-normal text-red-500 ml-1">↓ 1%</span></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                <span className="material-symbols-outlined text-2xl" data-icon="block">block</span>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Reports/Bans</div>
                <div className="text-xl font-bold text-on-surface">12 <span className="text-xs font-normal text-gray-400 ml-1">---</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function UserDetailPage() {
  return (
    <div className="font-body-md text-on-surface antialiased" style={{backgroundColor: '#f9f9ff', minHeight: 'max(884px, 100dvh)'}}>
      {/* NavigationDrawer */}
      <aside className="fixed left-0 top-0 h-full w-[280px] border-r border-gray-200 bg-white flex flex-col py-6 px-4 gap-2 z-50">
        <div className="mb-8 px-4">
          <div className="flex items-center gap-3">
            <img alt="KizFarm Logo" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
            <span className="text-xl font-black tracking-tight text-emerald-900">KizFarm</span>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-emerald-700 font-semibold bg-emerald-50/50 rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="group">group</span>
            <span className="font-label-md text-label-md">Users</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
            <span className="font-label-md text-label-md">Farmers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span className="font-label-md text-label-md">Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span className="font-label-md text-label-md">Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
            <span className="font-label-md text-label-md">Drivers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="payments">payments</span>
            <span className="font-label-md text-label-md">Payments</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="assessment">assessment</span>
            <span className="font-label-md text-label-md">Reports</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            <span className="font-label-md text-label-md">Notifications</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </a>
        </nav>
      </aside>

      {/* TopAppBar */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm flex justify-between items-center h-16 px-8 ml-[280px] max-w-[calc(100%-280px)]">
        <div className="flex items-center gap-4">
          <button className="hover:bg-gray-100 rounded-full p-2 transition-all duration-200">
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
          <h1 className="text-lg font-bold text-emerald-900 font-h2">KizFarm Profile</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input className="bg-gray-50 border border-outline-variant rounded-lg px-4 py-1.5 text-body-sm focus:ring-primary focus:border-primary w-64" placeholder="Search user data..." type="text" />
          </div>
          <button className="hover:bg-gray-100 rounded-full p-2 transition-all duration-200">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200">
            <img className="h-full w-full object-cover" data-alt="professional headshot of an administrative manager in a clean studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXw7Uywc9Wz43Jj9C3HvCZc87lPYfjmu9NQaz95TPN9y0ArPuDQGWR3RLt9JR-2MBoGiojnCXIFMEKfJsAq3LkeKJJlYQzvufRnmWFEyqZVtnuCEF5c1eS8OsehIaDGPHzyp4z7cmdzbEeMbbG77m0j-HLHLzL62GWBTj528YJJCDyRwl_jquZJpJeqcFMI4-DrotgqPFlVMUf068nuI4WLlW-tfW3oJ1AsxPpsHKUQ7CkqU419jEIS_alERJYval9TPqHSaGD9XI" />
          </div>
        </div>
      </header>

      <main className="ml-[280px] p-8 max-w-[1440px] mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex mb-6 text-label-sm font-label-sm text-gray-500 gap-2 items-center">
          <a className="hover:text-primary" href="#">Dashboard</a>
          <span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
          <a className="hover:text-primary" href="#">Users</a>
          <span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
          <span className="text-on-surface">User Details</span>
        </nav>

        <div className="grid grid-cols-12 gap-gutter">
          {/* Left Column: Profile Card */}
          <div className="col-span-12 lg:col-span-4 space-y-gutter">
            <div className="bg-white border border-gray-200 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="h-32 bg-primary-container relative">
                <div className="absolute -bottom-12 left-6">
                  <img className="h-24 w-24 rounded-xl border-4 border-white object-cover shadow-md" data-alt="Close-up portrait of a friendly man with a warm smile, wearing a casual shirt against a natural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiMtRVM_uDh9yJyI-oUaQ1ovczJHaP_iwQaP4ukMZE6KvookefvQPXZp42oo2F2gh7rsE5NFuHW6dxFpDEq5Fbx36RuQs9Okl_4WeDP-5DJJXzerZVVoSsZlMh2rz744LaYY5Ua17jQetOOZ07cBhL6psam-blBtFlDizBzR6qKKKWIDlu8gKaZk_gUSoGKFPiWRsUYgfv-4WYFlYRY4vYB3wintGLUrzGWjLSP7-QWambN_uKuQvQK8b9D3zfOSaJ0RQUFwQ9Eqg" />
                </div>
              </div>
              <div className="pt-16 pb-6 px-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="font-h2 text-h2 text-on-surface">Jonathan Miller</h2>
                    <p className="font-body-sm text-body-sm text-gray-500">Premium Farmer Member</p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-label-sm font-label-sm px-2.5 py-0.5 rounded-full">Active</span>
                </div>
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3 text-body-sm">
                    <span className="material-symbols-outlined text-gray-400" data-icon="mail">mail</span>
                    <span className="text-on-surface">j.miller@kizfarm.co</span>
                  </div>
                  <div className="flex items-center gap-3 text-body-sm">
                    <span className="material-symbols-outlined text-gray-400" data-icon="call">call</span>
                    <span className="text-on-surface">+1 (555) 012-3456</span>
                  </div>
                  <div className="flex items-center gap-3 text-body-sm">
                    <span className="material-symbols-outlined text-gray-400" data-icon="location_on">location_on</span>
                    <span className="text-on-surface">Green Valley, CA</span>
                  </div>
                  <div className="flex items-center gap-3 text-body-sm">
                    <span className="material-symbols-outlined text-gray-400" data-icon="calendar_today">calendar_today</span>
                    <span className="text-on-surface">Member since: Oct 12, 2022</span>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-2">
                  <button className="w-full bg-primary-container text-white py-2.5 rounded-lg font-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                    <span className="material-symbols-outlined" data-icon="send">send</span>
                    Send Message
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="border border-red-200 text-red-600 bg-red-50 py-2.5 rounded-lg font-label-sm flex items-center justify-center gap-2 hover:bg-red-100 transition-all">
                      <span className="material-symbols-outlined text-[18px]" data-icon="block">block</span>
                      Suspend
                    </button>
                    <button className="border border-gray-200 text-gray-600 bg-white py-2.5 rounded-lg font-label-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                      <span className="material-symbols-outlined text-[18px]" data-icon="history">history</span>
                      Reactivate
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <h3 className="font-h3 text-h3 mb-4 text-on-surface">Transaction Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-label-sm text-gray-500 mb-1">Total Spent</p>
                  <p className="text-h3 font-h3 text-emerald-800">$12,450.00</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-label-sm text-gray-500 mb-1">Total Orders</p>
                  <p className="text-h3 font-h3 text-emerald-800">48</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tables and Activity */}
          <div className="col-span-12 lg:col-span-8 space-y-gutter">
            {/* Order History */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-h3 text-h3 text-on-surface">Order History</h3>
                <button className="text-emerald-700 text-label-sm hover:underline font-semibold">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-label-sm text-gray-500 uppercase">
                    <tr>
                      <th className="px-6 py-3 font-bold">Order ID</th>
                      <th className="px-6 py-3 font-bold">Date</th>
                      <th className="px-6 py-3 font-bold">Amount</th>
                      <th className="px-6 py-3 font-bold">Status</th>
                      <th className="px-6 py-3 font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-numeric text-body-sm text-emerald-800">#ORD-90210</td>
                      <td className="px-6 py-4 text-body-sm">Jan 24, 2024</td>
                      <td className="px-6 py-4 text-body-sm font-semibold">$1,240.50</td>
                      <td className="px-6 py-4">
                        <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">Completed</span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-emerald-600"><span className="material-symbols-outlined" data-icon="visibility">visibility</span></button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-numeric text-body-sm text-emerald-800">#ORD-89421</td>
                      <td className="px-6 py-4 text-body-sm">Jan 18, 2024</td>
                      <td className="px-6 py-4 text-body-sm font-semibold">$890.00</td>
                      <td className="px-6 py-4">
                        <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">Completed</span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-emerald-600"><span className="material-symbols-outlined" data-icon="visibility">visibility</span></button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-numeric text-body-sm text-emerald-800">#ORD-87312</td>
                      <td className="px-6 py-4 text-body-sm">Dec 28, 2023</td>
                      <td className="px-6 py-4 text-body-sm font-semibold">$2,450.10</td>
                      <td className="px-6 py-4">
                        <span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">Pending</span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-emerald-600"><span className="material-symbols-outlined" data-icon="visibility">visibility</span></button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-numeric text-body-sm text-emerald-800">#ORD-86500</td>
                      <td className="px-6 py-4 text-body-sm">Dec 15, 2023</td>
                      <td className="px-6 py-4 text-body-sm font-semibold">$540.25</td>
                      <td className="px-6 py-4">
                        <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">Cancelled</span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-emerald-600"><span className="material-symbols-outlined" data-icon="visibility">visibility</span></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity Logs */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="font-h3 text-h3 text-on-surface">Activity Logs</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                      <span className="material-symbols-outlined text-[18px]" data-icon="shopping_bag">shopping_bag</span>
                    </div>
                    <div className="w-0.5 h-full bg-gray-100 mt-1"></div>
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex justify-between items-start">
                      <p className="text-body-md font-semibold text-on-surface">Order #ORD-90210 placed</p>
                      <span className="text-label-sm text-gray-400">2 hours ago</span>
                    </div>
                    <p className="text-body-sm text-gray-500 mt-1">User purchased Organic Soil (50kg) and Seed Starter Kits. Payment confirmed via Credit Card.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800">
                      <span className="material-symbols-outlined text-[18px]" data-icon="login">login</span>
                    </div>
                    <div className="w-0.5 h-full bg-gray-100 mt-1"></div>
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex justify-between items-start">
                      <p className="text-body-md font-semibold text-on-surface">Login Success</p>
                      <span className="text-label-sm text-gray-400">Jan 24, 2024 09:12 AM</span>
                    </div>
                    <p className="text-body-sm text-gray-500 mt-1">IP: 192.168.1.45 | Browser: Chrome on macOS</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-800">
                      <span className="material-symbols-outlined text-[18px]" data-icon="rate_review">rate_review</span>
                    </div>
                    <div className="w-0.5 h-full bg-gray-100 mt-1"></div>
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex justify-between items-start">
                      <p className="text-body-md font-semibold text-on-surface">Product Review Submitted</p>
                      <span className="text-label-sm text-gray-400">Jan 22, 2024</span>
                    </div>
                    <p className="text-body-sm text-gray-500 mt-1">User rated "Natural Fertilizer B" with 5 stars: "Great results for my tomatoes!"</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-800">
                      <span className="material-symbols-outlined text-[18px]" data-icon="settings">settings</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="text-body-md font-semibold text-on-surface">Profile Updated</p>
                      <span className="text-label-sm text-gray-400">Jan 15, 2024</span>
                    </div>
                    <p className="text-body-sm text-gray-500 mt-1">Updated phone number and primary shipping address.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function DriverManagementPage() {
  return (
    <div className="text-on-background" style={{fontFamily: "'Inter', sans-serif", backgroundColor: '#f9f9ff'}}>
      {/* SideNavBar Shell */}
      <aside className="flex flex-col w-[280px] h-screen fixed left-0 top-0 z-40 pt-6 px-4 bg-white border-r border-gray-200">
        <div className="mb-8 px-2">
          <div className="flex items-center gap-2 mb-1">
            <img alt="KizFarm Logo" className="h-8 w-auto" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
            <h1 className="text-xl font-bold tracking-tight text-green-900">KizFarm</h1>
          </div>
          <p className="text-[12px] text-slate-500 font-medium">Admin Management</p>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg font-['Inter'] text-sm font-medium hover:bg-slate-50 hover:text-green-800 transition-all duration-200 scale-95 active:scale-90" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            Dashboard
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg font-['Inter'] text-sm font-medium hover:bg-slate-50 hover:text-green-800 transition-all duration-200 scale-95 active:scale-90" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            Orders
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-green-800 bg-green-50 border-r-4 border-green-800 rounded-lg font-['Inter'] text-sm font-semibold transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="local_shipping" style={{fontVariationSettings: "'FILL' 1"}}>local_shipping</span>
            Logistics
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg font-['Inter'] text-sm font-medium hover:bg-slate-50 hover:text-green-800 transition-all duration-200 scale-95 active:scale-90" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            Inventory
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg font-['Inter'] text-sm font-medium hover:bg-slate-50 hover:text-green-800 transition-all duration-200 scale-95 active:scale-90" href="#">
            <span className="material-symbols-outlined" data-icon="groups">groups</span>
            Sellers
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg font-['Inter'] text-sm font-medium hover:bg-slate-50 hover:text-green-800 transition-all duration-200 scale-95 active:scale-90" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            Settings
          </a>
        </nav>
        <div className="border-t border-gray-100 pt-4 pb-6 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
              <img alt="Admin User Profile" className="w-full h-full object-cover" data-alt="professional portrait of a logistics manager in a modern office setting, soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBier9OyjwbA-zmBJnsbQRfOjndApAeK7YNxguOO6uOBDd437aTzQKqhQlCzhhJD_RdSj2WB6twQQ1H4oJ8QfGWqYuWlfQcW7vfe82axtZHVEHAZxLMKssqkjPH210YsdJsqkmosnDh42302AFnIqKTZTykP4TuvfXryFiEmOXMOWw0iOCmWHKhNMiG9MEuniDeoSeYvOsIPhZieASCSHoy9ThwfKOR-7X2cqU9VVgOfkIRMUAjHmqsF8BFqoCiZZKJJd3dfWE7xwE" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Admin User</p>
              <p className="text-xs text-slate-500">Fleet Operations</p>
            </div>
          </div>
        </div>
      </aside>

      {/* TopNavBar Shell */}
      <header className="flex justify-between items-center w-[calc(100%-280px)] ml-[280px] px-8 h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" data-icon="search">search</span>
            <input className="w-full bg-slate-50 border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-green-800 focus:border-green-800 outline-none transition-all" placeholder="Search drivers, routes, or vehicles..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-slate-500 hover:text-green-800 transition-colors relative">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="text-slate-500 hover:text-green-800 transition-colors">
            <span className="material-symbols-outlined" data-icon="help">help</span>
          </button>
          <div className="h-6 w-[1px] bg-gray-200"></div>
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-sm font-medium text-slate-700">KizFarm HQ</span>
            <span className="material-symbols-outlined text-slate-400" data-icon="keyboard_arrow_down">keyboard_arrow_down</span>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-[280px] p-margin min-h-[calc(100vh-64px)]">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6 text-slate-500">
          <span className="text-label-sm font-label-sm">Logistics</span>
          <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
          <span className="text-label-sm font-label-sm text-green-800">Drivers List</span>
        </div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-gutter">
          <div>
            <h2 className="text-h1 font-h1 text-slate-900">Delivery Fleet</h2>
            <p className="text-body-md font-body-md text-slate-500 mt-1">Manage and assign tasks to available drivers at KizFarm.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-outline rounded-lg text-primary font-label-md hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
              Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md shadow-sm hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined" data-icon="person_add">person_add</span>
              Onboard Driver
            </button>
          </div>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-gutter">
          <div className="bg-white border border-gray-200 rounded-xl p-lg" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
            <p className="text-label-sm font-label-sm text-slate-500 mb-2">Total Drivers</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-slate-900">42</h3>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">+4 this month</span>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-lg" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
            <p className="text-label-sm font-label-sm text-slate-500 mb-2">Active Now</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-slate-900">28</h3>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img className="w-full h-full object-cover" data-alt="driver avatar placeholder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnxkbT5JFrEwMnbf2liCSD9KczzEG97wmqNG7Si15gvQ1qtcoktMoc_7h4pbPNygkiDxjFD7iH7bnEWXbMusoKaFCHCCNR4T8FVOy8sW7NERZveSZuiFnBrsA8yYH1N1smohWXSF_lOaO3rqJ8dwML9YQSxzMaDI5Lkecp6iyeuJHhWy3_g545BqkyT8nFjo2mLy6n4_Qw5r3M4_0sFlOqM489iDSiLkp5a0eeFE_BT0ehajlPHAmsctZ-WLKxe_qwdod5wmpccko" /></div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img className="w-full h-full object-cover" data-alt="driver avatar placeholder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASOoDWFKfcizoTvuitNZFpb4ihXE-pER247hunyiBLYKT9dlPX5EcbxcpPi4ud0s--_DIjfILXfXnR1PWAromRQV3aWvETzBhNN_ZyyON6uEIWkxlEWc65cVa7thmule6K9eYAB7VUFCycFRJLRQAWJX7GB-N7qyyUf7ffqxCWyOmI_oc8rCCetyY2mo9xlvPBjEK0HqXktOpEkyPcD3qHBoXujMWfevMdZ_YxI46Q0Y7rMwha53Ao8RfwRceLs28mzqK2UvTRF3g" /></div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] text-white">+12</div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-lg" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
            <p className="text-label-sm font-label-sm text-slate-500 mb-2">Efficiency Rate</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-slate-900">94%</h3>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">↑ 2%</span>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-lg" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
            <p className="text-label-sm font-label-sm text-slate-500 mb-2">Deliveries Today</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-slate-900">156</h3>
              <span className="material-symbols-outlined text-slate-300" data-icon="trending_up">trending_up</span>
            </div>
          </div>
        </div>

        {/* Drivers Table Card */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
          <div className="px-lg py-md border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h3 className="text-label-md font-label-md text-slate-900">Available Drivers</h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-50 text-green-800 text-xs font-semibold rounded-full border border-green-100">All: 42</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-full border border-slate-200">Bikes: 12</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-full border border-slate-200">Vans: 30</span>
              </div>
            </div>
            <button className="text-slate-400 hover:text-slate-600 transition-colors">
              <span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider">Driver Name</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider">Phone</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider">Vehicle Type</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider">Current Location</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Driver 1 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                        <img alt="Driver Avatar" className="w-full h-full object-cover" data-alt="portrait of a male delivery driver in a green polo shirt, smiling at the camera, clean studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkHPcLzba_jfvwN5dz2Z6sRWqH-UBDf8Ln29FmAPxg7GUCF7pXasxIjKT9dTsx_5-MF2W6Ui82_-3BcsN2vXq9NuFFuivG2LZQnm25DGSVoNtvmOC1S-BqNOqkEicVZugg7oXi0uVBtRY3AORjJNU7h_ktDCQt0mXJJ_eFJ7L3ZJ2vZBfp3ueudTdQOurf8yumBUVdJ2GL5v9hdeaY-48IR-UQaEUxT2pEQbHCIwDJBfHvoJC9XCHULnDVVh_4ntYfx_6p839vMnY" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Samuel Mwangi</p>
                        <p className="text-xs text-slate-500">ID: #KIZ-0082</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4 text-numeric font-numeric text-slate-600">+254 712 345 678</td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="material-symbols-outlined text-lg" data-icon="local_shipping">local_shipping</span>
                      <span className="text-sm">Transit Van</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="material-symbols-outlined text-sm text-red-400" data-icon="location_on">location_on</span>
                      <span className="text-sm">Central Market, Nairobi</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-800/10 text-green-800">Active</span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-4 py-1.5 bg-green-50 text-green-800 text-sm font-semibold rounded-lg hover:bg-green-100 transition-colors border border-green-200">Assign Delivery</button>
                  </td>
                </tr>
                {/* Driver 2 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                        <img alt="Driver Avatar" className="w-full h-full object-cover" data-alt="smiling female delivery courier with a sunhat and green uniform, outdoor bright daylight setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHwTq9Vpj_WEVPds6SEMg0oEV4yLFM80bJpYHnCMJZUbfbh5VK_CQIj9RPh7aq7p5GVpp7jxGwEts8JUFqKXGJbLzIDg6aoRsYFtIBB9gbobc4AJj0pLMYvmY4jXof1JEdWlW0_wm-Qg6FOU6U52ioniUqiHvWy_KurhIw7rSZOiUTIQB7vGey4qWAmeqzVmsRCMXowkOELdB9BRqcSmD5zSrpJRv04dipwPKYQ_Z9gj39AveuuuwznOQl3FgRXwPCQBSvDw41ePE" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Anita Otieno</p>
                        <p className="text-xs text-slate-500">ID: #KIZ-0091</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4 text-numeric font-numeric text-slate-600">+254 723 456 789</td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="material-symbols-outlined text-lg" data-icon="moped">moped</span>
                      <span className="text-sm">Electric Bike</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="material-symbols-outlined text-sm text-red-400" data-icon="location_on">location_on</span>
                      <span className="text-sm">Westlands Area</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500/10 text-orange-600">Busy</span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-4 py-1.5 bg-slate-100 text-slate-400 text-sm font-semibold rounded-lg cursor-not-allowed border border-slate-200" disabled>On Route</button>
                  </td>
                </tr>
                {/* Driver 3 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                        <img alt="Driver Avatar" className="w-full h-full object-cover" data-alt="middle-aged male driver in professional attire, leaning against a clean white delivery van, morning soft light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDNbiXlbTJGnPKyclMONt9O4Le9kZAbW1bSfH2napX2Pcq_4Mgp2zY3H4cWhHtn5gXz-Rr3HLAdW3d8pvG6R4uXaxIDEnSDre50ykctslxAExmIJksfqTcET_MBa72-roTerjYReCchn-IqJKBUP1rJVCIqJ7JHaENze-46_haHkaBp2DKEzWsWkAHEYPtAI6NOOm-e_bpsVMfznakTjbxZ0xvDzlXASUtkw-xrt2pq1N1ELCRk-_5iOy-ZpNUQmjWNtQ56n2lQRY" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">David Kamau</p>
                        <p className="text-xs text-slate-500">ID: #KIZ-0104</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4 text-numeric font-numeric text-slate-600">+254 734 567 890</td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="material-symbols-outlined text-lg" data-icon="local_shipping">local_shipping</span>
                      <span className="text-sm">Box Truck</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="material-symbols-outlined text-sm text-red-400" data-icon="location_on">location_on</span>
                      <span className="text-sm">KIZ FARM Depot B</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-800/10 text-green-800">Active</span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-4 py-1.5 bg-green-50 text-green-800 text-sm font-semibold rounded-lg hover:bg-green-100 transition-colors border border-green-200">Assign Delivery</button>
                  </td>
                </tr>
                {/* Driver 4 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                        <img alt="Driver Avatar" className="w-full h-full object-cover" data-alt="portrait of a young energetic male driver with a cap, outdoor urban delivery setting, sharp focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ__HGVYFhtJzi0hUxzOraoYiEKAo2DODAcQzQcVTEHRV3VDhHV9_Uwqbmpk_D7EbI0FhxmWkUiy7N6jl2D7kGpaipgtbrKQiQpBbBJ3MWrB7-yT-dK1MbMRWb0M4isJdNTVofWyukFBPbi9KyrnNNaq1aQc3IJxeYQoCNswds3UUmtTPohXDHEKp37ry9OfAjyQl_ohbgPdOmLPLvxAeJmmvx5ATA0CZpI7lkRFYc8N42GwZ9_8bHyUnv0rXr9L0HLbpeGqo1MG4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">James Njenga</p>
                        <p className="text-xs text-slate-500">ID: #KIZ-0112</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4 text-numeric font-numeric text-slate-600">+254 745 678 901</td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="material-symbols-outlined text-lg" data-icon="moped">moped</span>
                      <span className="text-sm">Electric Bike</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <span className="material-symbols-outlined text-sm" data-icon="location_off">location_off</span>
                      <span className="text-sm">Offline</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-400/10 text-slate-500">Offline</span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-4 py-1.5 bg-slate-100 text-slate-400 text-sm font-semibold rounded-lg cursor-not-allowed border border-slate-200" disabled>Unavailable</button>
                  </td>
                </tr>
                {/* Driver 5 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                        <img alt="Driver Avatar" className="w-full h-full object-cover" data-alt="close-up of a female driver with a headscarf, bright and friendly expression, professional logistics background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClrsuHL7GHUlrJamwBIv8ZQ1FatXR-WRc4ry-BCxlC9frZu3_zvmiGYI3ooppdjYSD-kq11cDZtnk5dF1hiHl9XkRowIFdkDpZX_QeSZThUda6A6kzdwiu5sFsCFojbA51q3zqkmBrnLvZ_tReYvVpeRdaiaJgDE_QJ4wLdSn3WHocJyWSWOl1BBwknF9L4ghpkxGmdavvT7AmPgVXo69yNa4XJqQDegi04d0WSud_Pl1P0gqv7KWaOHAe_oPVw5g8w0xSPEw9PSk" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Beatrice Wanjiru</p>
                        <p className="text-xs text-slate-500">ID: #KIZ-0125</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4 text-numeric font-numeric text-slate-600">+254 756 789 012</td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="material-symbols-outlined text-lg" data-icon="local_shipping">local_shipping</span>
                      <span className="text-sm">Refrigerated Van</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="material-symbols-outlined text-sm text-red-400" data-icon="location_on">location_on</span>
                      <span className="text-sm">Riverside Industrial Park</span>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-800/10 text-green-800">Active</span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-4 py-1.5 bg-green-50 text-green-800 text-sm font-semibold rounded-lg hover:bg-green-100 transition-colors border border-green-200">Assign Delivery</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Pagination Shell */}
          <div className="px-lg py-4 bg-slate-50/30 flex items-center justify-between border-t border-gray-100">
            <span className="text-sm text-slate-500">Showing 1 to 5 of 42 drivers</span>
            <div className="flex items-center gap-2">
              <button className="p-1 rounded border border-gray-200 text-slate-400 hover:bg-white transition-colors cursor-not-allowed" disabled>
                <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
              </button>
              <button className="w-8 h-8 rounded bg-primary text-on-primary text-xs font-bold">1</button>
              <button className="w-8 h-8 rounded text-slate-600 text-xs font-semibold hover:bg-slate-100">2</button>
              <button className="w-8 h-8 rounded text-slate-600 text-xs font-semibold hover:bg-slate-100">3</button>
              <span className="text-slate-400 px-1">...</span>
              <button className="w-8 h-8 rounded text-slate-600 text-xs font-semibold hover:bg-slate-100">8</button>
              <button className="p-1 rounded border border-gray-200 text-slate-400 hover:bg-white transition-colors">
                <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Insights */}
        <div className="mt-gutter grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl p-lg" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
            <h3 className="text-label-md font-label-md text-slate-900 mb-4">Fleet Map Overview</h3>
            <div className="relative rounded-lg overflow-hidden h-[300px] bg-slate-100 border border-gray-100">
              <img className="w-full h-full object-cover opacity-80" data-alt="minimalist city map illustration with stylized green route lines and moving circular location markers for delivery tracking" data-location="Nairobi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo24yhMNgoe8otXXe0ihwacLGFPWj-zrY_g2iMgoNadbfbd8p232Kljb0aFnOcMYdP0e7oTx60gOyFccUwPWcCPTdxhOATWhbddJ6HwhMFQg5h-06kSxS6K8bb-ota1YTsDX-1ses_Uwqo8w_itI9SAtJHB2hYxsIjBCYvIassG4ervkTquqxtkmqeFQM6CNQRduupe6AZ5nzBlQ60wOdQBh_GyfLFC2CjPMK47jF8Q1-Ykj0KRIymfflDdOQdS4yzJqK5wuoCOwA" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex gap-3">
                <div className="bg-white px-3 py-2 rounded-lg shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-semibold text-slate-700">28 Online</span>
                </div>
                <div className="bg-white px-3 py-2 rounded-lg shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span className="text-xs font-semibold text-slate-700">14 On Trip</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary text-on-primary rounded-xl p-lg shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <h3 className="text-h3 font-h3 mb-2">Need bulk assignment?</h3>
              <p className="text-sm opacity-80 mb-6">Our intelligent route optimizer can automatically batch orders for your top-performing drivers.</p>
            </div>
            <button className="relative z-10 bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm w-fit hover:bg-green-50 transition-colors">Launch Optimizer</button>
            {/* Decorative background elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute top-10 -right-5 w-20 h-20 bg-white/5 rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

function AssignDriverPage() {
  return (
    <div className="bg-background text-on-background" style={{fontFamily: "'Inter', sans-serif"}}>
      {/* SideNavBar Shell */}
      <aside className="flex flex-col w-[280px] h-screen fixed left-0 top-0 z-40 pt-6 px-4 bg-white border-r border-gray-200">
        <div className="mb-10 px-4">
          <img alt="KizFarm Logo" className="h-12 w-auto mb-2" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          <p className="text-xs text-slate-500 font-medium">KizFarm Admin</p>
        </div>
        <nav className="space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 font-['Inter'] text-sm font-medium leading-tight" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span>Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 font-['Inter'] text-sm font-medium leading-tight" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span>Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-green-800 bg-green-50 border-r-4 border-green-800 font-semibold font-['Inter'] text-sm leading-tight" href="#">
            <span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
            <span>Logistics</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 font-['Inter'] text-sm font-medium leading-tight" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span>Inventory</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 font-['Inter'] text-sm font-medium leading-tight" href="#">
            <span className="material-symbols-outlined" data-icon="groups">groups</span>
            <span>Sellers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200 font-['Inter'] text-sm font-medium leading-tight" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span>Settings</span>
          </a>
        </nav>
        <div className="mt-auto mb-6 px-4">
          <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30">
            <p className="text-xs font-bold text-primary mb-1">System Status</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs text-on-surface-variant">Fleet operational</span>
            </div>
          </div>
        </div>
      </aside>

      {/* TopNavBar Shell */}
      <header className="flex justify-between items-center w-[calc(100%-280px)] ml-[280px] px-8 h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md focus-within:ring-2 focus-within:ring-green-800 rounded-lg">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-icon="search">search</span>
            <input className="w-full bg-slate-50 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-0" placeholder="Search orders, drivers or farmers..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-slate-500 hover:text-green-800 cursor-pointer" data-icon="notifications">notifications</span>
          <span className="material-symbols-outlined text-slate-500 hover:text-green-800 cursor-pointer" data-icon="help">help</span>
          <div className="flex items-center gap-3 border-l pl-6 border-slate-200 ml-2">
            <div className="text-right">
              <p className="text-xs font-bold text-on-surface">Alex Rivera</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Logistics Lead</p>
            </div>
            <img alt="Admin User Profile" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="professional portrait of a logistics manager in a modern office setting, clean lighting, high-end professional look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJFtWd0qwPUZAvNZBttsa2soQFzGQpFyfB-B20MFuQ2cGq93sUBGtot_h8K7z2Sskdh1x14j12Kmu8yVlwmqjVJJUQnm6ntUr9MXaZyHGfYeWjNlliPU9pStFxzIfUVh_ruDcPxKbDvra9OvaWPoGeLqDZnsZdbWXhHpJPSv8zJz6qYSi462VKh2fqoijRycrGnTgGpMMQlTtt5mlkC7UVO8N5A89AgPTzjoCQ4DTmeK3LmpouBMmVmvZqkBs8Zrdrw6UtLvuiSzE" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-[280px] p-margin">
        <div className="mb-xl flex items-center justify-between">
          <div>
            <nav className="flex gap-2 text-label-sm text-outline mb-2">
              <span>Logistics</span>
              <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
              <span className="text-primary font-bold">Assign Driver</span>
            </nav>
            <h1 className="font-h1 text-h1 text-on-surface">Assign Driver to Order #ORD-8829</h1>
          </div>
          <button className="bg-white border border-outline-variant text-on-surface px-md py-sm rounded-lg font-label-md flex items-center gap-2 hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-sm" data-icon="close">close</span>
            Cancel Assignment
          </button>
        </div>

        <div className="grid grid-cols-12 gap-gutter">
          {/* Left Side: Order Details */}
          <div className="col-span-12 lg:col-span-4 space-y-gutter">
            <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between mb-md">
                <h2 className="font-h3 text-h3 text-on-surface">Order Summary</h2>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-full uppercase tracking-widest border border-amber-200">Pending Driver</span>
              </div>
              <div className="space-y-md">
                <div className="flex items-start gap-4 p-md bg-surface-container-lowest rounded-lg border border-outline-variant/20">
                  <div className="w-10 h-10 rounded bg-primary-fixed/20 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
                  </div>
                  <div>
                    <p className="text-label-sm text-outline">Cargo</p>
                    <p className="text-body-md font-semibold text-on-surface">2.4 Tons of Organic Arabica Coffee</p>
                  </div>
                </div>
                <div className="relative py-2 px-4 border-l-2 border-dashed border-primary-fixed ml-5 space-y-8">
                  <div className="relative">
                    <span className="absolute -left-[27px] top-0 w-3 h-3 bg-primary rounded-full border-2 border-white shadow-sm"></span>
                    <p className="text-label-sm text-outline">Pickup Point</p>
                    <p className="text-body-sm font-semibold text-on-surface">Green Valley Estate, Narok</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[27px] top-0 w-3 h-3 bg-tertiary rounded-full border-2 border-white shadow-sm"></span>
                    <p className="text-label-sm text-outline">Destination</p>
                    <p className="text-body-sm font-semibold text-on-surface">Central Port Terminal B, Mombasa</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-sm pt-4 border-t border-outline-variant/30">
                  <div>
                    <p className="text-label-sm text-outline">Est. Distance</p>
                    <p className="text-body-md font-bold text-on-surface">542 km</p>
                  </div>
                  <div>
                    <p className="text-label-sm text-outline">Pickup Deadline</p>
                    <p className="text-body-md font-bold text-on-surface">Today, 04:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(0,0,0,0.05)] overflow-hidden h-[340px] relative group">
              <img alt="Logistics Map View" className="w-full h-full object-cover" data-alt="top-down satellite map view of rural and urban roads with digital logistics path markers in bright green" data-location="Kenya" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzZVZXpZN6Iylq_V0aJh3e6MFzcOl7ytCW-va1T39SNgROd9V-9pJVKViYsum8z7nNHKdPI0IJIaWVKpsElGSi2BkYnHp21AHnHzzMXyCZxjjHsLq6UFxYZsBLyXaWEglFu6ezCDv1FvpYtvI59aWLxhlUIz34TkNvbyYPn0tijo78M09Fepd5OLSPrZ2TWhOfUdfZ1twVp8YiC9wh0QuCzLXf9a23VL7Zy7mhd6QhYuggbrDXiy5rn00b1jBkDqXL9sRARklToOI" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-white/40">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-on-surface">Route Optimized</span>
                  <span className="text-xs text-primary font-bold">View full map</span>
                </div>
              </div>
              {/* Map Pin Overlays */}
              <div className="absolute top-1/4 left-1/3 p-1 bg-primary rounded-full shadow-lg border-2 border-white"></div>
              <div className="absolute bottom-1/3 right-1/4 p-1 bg-tertiary rounded-full shadow-lg border-2 border-white"></div>
            </div>
          </div>

          {/* Right Side: Driver Selection */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-xl border border-[#EAECF0] shadow-[0px_1px_3px_rgba(0,0,0,0.05)] flex flex-col h-full">
              <div className="p-lg border-b border-outline-variant/30 flex items-center justify-between">
                <div>
                  <h2 className="font-h3 text-h3 text-on-surface">Available Drivers Nearby</h2>
                  <p className="text-body-sm text-outline">Showing 14 verified drivers within 20km of pickup</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg border border-outline-variant/30 text-label-sm text-on-surface">
                    <span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
                    Filter
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg border border-outline-variant/30 text-label-sm text-on-surface">
                    <span className="material-symbols-outlined text-sm" data-icon="sort">sort</span>
                    Nearest
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-lg space-y-md">
                {/* Driver Card (Active/Selected) */}
                <div className="relative group cursor-pointer p-lg rounded-xl border-2 border-primary bg-green-50/30 transition-all">
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-sm" data-icon="check">check</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <img alt="Driver Profile" className="w-16 h-16 rounded-full object-cover" data-alt="close up of a professional heavy truck driver smiling, wearing a simple polo shirt, outdoors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfMNIdgbxYEQpBQY85ykr67bLwq-ac7MuCopydC0WY-24jK2uMwLZUDZWHG49Ywizyr5p_dhiWzUImMS6ZpT9pkuWZ-GYR_HOAOB0vgBhWjS25XYT5R_SlfwIA3OciIZ0AwFGuTUKeQUb_NEcdwFPSH1ZTDrDWuHlN3dRDo5jdfvgW3lzwYrLwIvZ3b4kjb9cP2Yw3zIonBzbt3RPpKIv9mv_Ic12X7_7STj0NWHEH6AV08V4r8MjLpOyOd3G7sTKAqHv9jhBsr_s" />
                      <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-h3 text-body-md font-bold text-on-surface">David M. Kamau</h3>
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]" data-icon="verified" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                          PLATINUM DRIVER
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-label-sm text-outline">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-amber-500" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="text-on-surface font-bold">4.9</span> (120+ trips)
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm" data-icon="distance">distance</span>
                          4.2 km away
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm" data-icon="local_shipping">local_shipping</span>
                          Heavy Duty (10T)
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-label-sm text-outline mb-1">Est. Completion</p>
                      <p className="text-body-md font-bold text-on-surface">8.5 hrs</p>
                    </div>
                  </div>
                </div>

                {/* Driver Card */}
                <div className="group cursor-pointer p-lg rounded-xl border border-[#EAECF0] hover:border-primary/50 hover:bg-slate-50 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <img alt="Driver Profile" className="w-16 h-16 rounded-full object-cover" data-alt="portrait of a middle-aged male delivery driver, professional appearance, neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIbLVFS3TtVrP875P50NmppxMjE5lCzmHiZvjtIPqR5drbi6-FtDfRqpCkW7G5WIc-duf3KlHYD9BKgtDl-5E5lDLC8sIdRCkci0DqvomIlDUORXNgxehlP_hTG4hVwaUlRZ-bRqh_-yvKQagyjLohuM_k7e8HEWB3mFtP31colEfXwvB0IAh1RjxniH2Ms6QvJXZSwTh9HK6V7X-REamlFB2YB9j6hqv-fFi8AxvLjFfH9J6X9yTz2C2L9QEQGGZDoQcoizE_4Zg" />
                      <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-h3 text-body-md font-bold text-on-surface">Samuel Otieno</h3>
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">STANDARD</span>
                      </div>
                      <div className="flex items-center gap-4 text-label-sm text-outline">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-amber-500" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="text-on-surface font-bold">4.7</span> (85 trips)
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm" data-icon="distance">distance</span>
                          6.8 km away
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm" data-icon="local_shipping">local_shipping</span>
                          Medium Truck (5T)
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-label-sm text-outline mb-1">Est. Completion</p>
                      <p className="text-body-md font-bold text-on-surface">9.2 hrs</p>
                    </div>
                  </div>
                </div>

                {/* Driver Card */}
                <div className="group cursor-pointer p-lg rounded-xl border border-[#EAECF0] hover:border-primary/50 hover:bg-slate-50 transition-all opacity-80">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <img alt="Driver Profile" className="w-16 h-16 rounded-full object-cover" data-alt="professional male worker portrait, smiling warmly, studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmIAoC2ymmeWuoVlVBTgsgZvjlXUQHHyKW8BiyT-j5s9peHZbPgYjzBkdgK_L4B0Phg93m0Uq0lmOQ-O2Gu5NIozLnlIMA52rVqpAtLfPlaNmw9CprhvV1p4cyJ1g_RM8DcrjBqXmG4Ns0mlVTqCTfMhiVkwmgO36W5Us2h6GRaVGmfojecJxrPH36oEnXhTaTcfhz3cxEYbRDBH8D0IbejMcImr88zwYiZBPHK8a2IlAnvtLg7sUdeSEej2tIn_-uDvYmJt3zcKA" />
                      <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-amber-400 border-2 border-white"></span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-h3 text-body-md font-bold text-on-surface">Ibrahim Njenga</h3>
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">STANDARD</span>
                      </div>
                      <div className="flex items-center gap-4 text-label-sm text-outline">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-amber-500" data-icon="star" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="text-on-surface font-bold">4.8</span> (42 trips)
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm" data-icon="distance">distance</span>
                          12.1 km away
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm" data-icon="local_shipping">local_shipping</span>
                          Heavy Duty (15T)
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-label-sm text-amber-600 font-bold mb-1">On current job</p>
                      <p className="text-body-md font-bold text-on-surface">Available in 45m</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-lg border-t border-outline-variant/30 bg-surface-container-lowest rounded-b-xl flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <p className="text-label-sm text-outline">Total Trip Cost (Est.)</p>
                  <p className="text-h3 font-h3 text-primary">KSh 42,500</p>
                </div>
                <button className="bg-primary hover:bg-primary-container text-white px-xl py-md rounded-lg font-label-md flex items-center gap-3 transition-transform scale-95 active:scale-90 shadow-lg shadow-primary/20">
                  Confirm and Assign Driver
                  <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Metric Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mt-xl">
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-sm">
            <p className="text-label-sm text-outline mb-sm">Driver Efficiency</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-on-surface">94.2%</h3>
              <span className="flex items-center text-xs text-green-600 font-bold">
                <span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                2.1%
              </span>
            </div>
          </div>
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-sm">
            <p className="text-label-sm text-outline mb-sm">Avg. Response Time</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-on-surface">12 min</h3>
              <span className="flex items-center text-xs text-green-600 font-bold">
                <span className="material-symbols-outlined text-xs" data-icon="trending_down">trending_down</span>
                4 min
              </span>
            </div>
          </div>
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-sm">
            <p className="text-label-sm text-outline mb-sm">Fleet Occupancy</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-on-surface">88%</h3>
              <span className="flex items-center text-xs text-amber-600 font-bold">
                High Demand
              </span>
            </div>
          </div>
          <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-sm">
            <p className="text-label-sm text-outline mb-sm">Fuel Surcharge Index</p>
            <div className="flex items-end justify-between">
              <h3 className="text-h2 font-h2 text-on-surface">1.04</h3>
              <span className="flex items-center text-xs text-slate-500 font-bold">
                Stable
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function OrderControlPage() {
  return (
    <div className="bg-background text-on-surface" style={{fontFamily: "'Inter', sans-serif"}}>
      {/* Sidebar Navigation */}
      <aside className="flex flex-col w-[280px] h-screen fixed left-0 top-0 z-40 pt-6 px-4 bg-white border-r border-gray-200">
        <div className="flex items-center px-4 mb-8">
          <div className="w-10 h-10 flex items-center justify-center mr-3">
            <img alt="KizFarm Logo" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-green-900">KizFarm</h1>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Admin Management</p>
          </div>
        </div>
        <nav className="space-y-1">
          <a className="flex items-center px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200" href="#">
            <span className="material-symbols-outlined mr-3" data-icon="dashboard">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </a>
          <a className="flex items-center px-4 py-3 rounded-lg text-green-800 bg-green-50 border-r-4 border-green-800 font-semibold" href="#">
            <span className="material-symbols-outlined mr-3" data-icon="shopping_cart" style={{fontVariationSettings: "'FILL' 1"}}>shopping_cart</span>
            <span className="font-label-md text-label-md">Orders</span>
          </a>
          <a className="flex items-center px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200" href="#">
            <span className="material-symbols-outlined mr-3" data-icon="local_shipping">local_shipping</span>
            <span className="font-label-md text-label-md">Logistics</span>
          </a>
          <a className="flex items-center px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200" href="#">
            <span className="material-symbols-outlined mr-3" data-icon="inventory_2">inventory_2</span>
            <span className="font-label-md text-label-md">Inventory</span>
          </a>
          <a className="flex items-center px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200" href="#">
            <span className="material-symbols-outlined mr-3" data-icon="groups">groups</span>
            <span className="font-label-md text-label-md">Sellers</span>
          </a>
          <div className="pt-4 mt-4 border-t border-slate-100">
            <a className="flex items-center px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-all duration-200" href="#">
              <span className="material-symbols-outlined mr-3" data-icon="settings">settings</span>
              <span className="font-label-md text-label-md">Settings</span>
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="ml-[280px] w-[calc(100%-280px)] min-h-screen">
        {/* Top Navigation Bar */}
        <header className="flex justify-between items-center px-8 h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="flex items-center gap-4">
            <nav className="flex items-center space-x-2 text-slate-500 font-label-md text-label-sm">
              <a className="hover:text-green-800" href="#">Orders</a>
              <span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span>
              <span className="text-green-800 font-bold">ORD-8829-XPL</span>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-green-800" data-icon="notifications">notifications</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
            </div>
            <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-green-800" data-icon="help">help</span>
            <div className="flex items-center space-x-3 cursor-pointer pl-4 border-l border-slate-200">
              <img alt="Admin User Profile" className="w-8 h-8 rounded-full object-cover" data-alt="professional portrait of a middle-aged male executive in a clean office setting, soft natural lighting, high-end business aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3UGXU__Q7696WdyTMt6kUSb_A_UeqCUEkWaVXHpnKYNCdt6jQiocTx0OIQ2dIXYRzYhbrIZ_3RElPgk_snT15NtPJ33633UyKI4UnAlJyUkTlCzuLYE6nh5vtXQ6IPGJL3t2Yep44EFhkbILJOTzmcJBkQ9OPwNvBjgw8fczwY0fovufINYk3WV4EPpTadxcUiJdIddJSfpv2g7yaiwbkmxsJnsdlEJz1i_gMRlq-pTmua-VhFYs5rA-kGggx-2UrAceVjQA-HUo" />
              <span className="font-label-md text-label-md text-slate-700">Admin User</span>
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="p-8 space-y-gutter">
          {/* Header Actions */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-h2 text-h2 text-on-surface">Order ORD-8829-XPL</h2>
              <p className="text-slate-500 font-body-sm mt-1">Placed on Oct 24, 2023 at 09:42 AM</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-error text-error font-label-md rounded-lg hover:bg-error/5 transition-colors flex items-center">
                <span className="material-symbols-outlined mr-2 text-[20px]" data-icon="cancel">cancel</span>
                Cancel Order
              </button>
              <button className="px-4 py-2 border border-outline text-on-surface-variant font-label-md rounded-lg hover:bg-slate-50 transition-colors flex items-center">
                <span className="material-symbols-outlined mr-2 text-[20px]" data-icon="support_agent">support_agent</span>
                Contact Support
              </button>
              <div className="relative group">
                <button className="px-4 py-2 bg-primary text-on-primary font-label-md rounded-lg flex items-center shadow-sm">
                  Update Status: Shipped
                  <span className="material-symbols-outlined ml-2 text-[20px]" data-icon="expand_more">expand_more</span>
                </button>
                {/* Hidden dropdown for UI demonstration */}
                <div className="hidden absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-xl rounded-xl z-50 overflow-hidden">
                  <a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" href="#">Processing</a>
                  <a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" href="#">Packed</a>
                  <a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" href="#">Shipped</a>
                  <a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" href="#">Delivered</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-gutter">
            {/* Section 1: Order Summary Card (Span 8) */}
            <div className="col-span-8 space-y-gutter">
              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-gutter">
                <div className="bg-white p-lg border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                  <p className="text-slate-500 font-label-sm uppercase mb-1">Total Amount</p>
                  <h3 className="font-h1 text-h1 text-green-900">$1,248.50</h3>
                  <div className="mt-2 flex items-center">
                    <span className="bg-green-100 text-green-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Paid</span>
                  </div>
                </div>
                <div className="bg-white p-lg border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                  <p className="text-slate-500 font-label-sm uppercase mb-1">Items</p>
                  <h3 className="font-h1 text-h1 text-on-surface">3 Products</h3>
                  <p className="text-slate-400 text-sm mt-2">Total weight: 450kg</p>
                </div>
                <div className="bg-white p-lg border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                  <p className="text-slate-500 font-label-sm uppercase mb-1">Delivery Estimate</p>
                  <h3 className="font-h1 text-h1 text-on-surface">Oct 28</h3>
                  <p className="text-slate-400 text-sm mt-2">Via FastTrack Agri</p>
                </div>
              </div>

              {/* Section 3: Product Details */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                  <h4 className="font-h3 text-h3">Order Contents</h4>
                  <span className="text-slate-400 text-sm">3 Items Total</span>
                </div>
                <div className="divide-y divide-gray-100">
                  {/* Product 1 */}
                  <div className="p-6 flex items-center gap-6 group hover:bg-slate-50 transition-colors">
                    <img alt="Organic Potatoes" className="w-20 h-20 rounded-lg object-cover border border-gray-200" data-alt="close-up of earthy organic russet potatoes in a wooden crate, warm natural morning light, rustic agricultural setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnxCJ7VS6A-K5Sm3PCvLqGEfFE_5AL1XCN8ZzuH7TIc7dihhoHKhw9h2IfF8DuNWbfYRPnv12yTf3hSQROlM3BOI8R4cPc8BdjtlMkwa0OWLfgnL-B7vybZSqBIbiQrQ7FUUhSUH_o5oiXkU6nw8N66yOSUu8KERxq4fNwyMH0013SQkGiYSxElzJagNS_h9AbjdPmyHSYzOX3pWHtdjN1HLCIXeMg0XzYrI_mCftSzdUtm8JJ3sk2uhC-HYTgjSFwuM_zAMdrA0A" />
                    <div className="flex-1">
                      <h5 className="font-label-md text-body-md text-on-surface">Premium Russet Potatoes</h5>
                      <p className="text-slate-500 text-sm">Category: Root Vegetables</p>
                      <p className="text-slate-400 text-xs mt-1">SKU: VG-POT-001</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-on-surface">$0.85 / kg</p>
                      <p className="text-slate-500 text-sm">x 200kg</p>
                      <p className="font-bold text-green-800 mt-1">$170.00</p>
                    </div>
                  </div>
                  {/* Product 2 */}
                  <div className="p-6 flex items-center gap-6 group hover:bg-slate-50 transition-colors">
                    <img alt="Grade A Large Eggs" className="w-20 h-20 rounded-lg object-cover border border-gray-200" data-alt="macro shot of fresh brown farm eggs in a cardboard carton, shallow depth of field, soft diffused window light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIgOjaMQztBNey7RI2jPC31kW5NpnKtUpArnIJ5gmPG3UeICJHFHTayZxroxqYdd3swLSNunwa78U3PwmUoDGESKQ95SDJON3dtb18nHOGnIzqYgfMjGKY1EiieJO8PYz7ddXCqiWKqdHDmFd46M0xvquFvBVcVImStb4iEpQpmfTNo6s7oh1qnsxmri3uuw6DNNWX4TfCB5FauJEfvgAVRcP3cT4ADWTkHFysR-PWXiG3sB-ZMTgruAdeI0dzO0w_ZsnS_nTvWDU" />
                    <div className="flex-1">
                      <h5 className="font-label-md text-body-md text-on-surface">Grade A Large Brown Eggs</h5>
                      <p className="text-slate-500 text-sm">Category: Dairy &amp; Poultry</p>
                      <p className="text-slate-400 text-xs mt-1">SKU: DY-EGG-042</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-on-surface">$4.50 / dozen</p>
                      <p className="text-slate-500 text-sm">x 50 doz</p>
                      <p className="font-bold text-green-800 mt-1">$225.00</p>
                    </div>
                  </div>
                  {/* Product 3 */}
                  <div className="p-6 flex items-center gap-6 group hover:bg-slate-50 transition-colors">
                    <img alt="High Protein Wheat" className="w-20 h-20 rounded-lg object-cover border border-gray-200" data-alt="golden wheat grains held in hands, sun-drenched harvest scene, rich yellow tones and sharp detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9pBrDI3avKNARqhN2uilauIUrygr6prCWEJKkmhidliDSAzIICb3eB8mOgJ998L2eAscdTXIE-YswvSqLlZQ_ZojCrwEqwcQOv-J7vBRk7KQD23XCN5wJ8aGjsjCjAIfooJ1L-fHgdooyq_tlY2E_J9LOueuud61hw9ksIk4_e08sEXIAktdbrPYiPDp2WQK_tu9EUzTxL6OmvWYWoYyQSzOcVuWqgR2WZNLRD7jbP66AGcWQvi4jEuTe2PyCFDU50FfoC3QTKDo" />
                    <div className="flex-1">
                      <h5 className="font-label-md text-body-md text-on-surface">Whole Grain Hard Red Wheat</h5>
                      <p className="text-slate-500 text-sm">Category: Grains</p>
                      <p className="text-slate-400 text-xs mt-1">SKU: GR-WHT-982</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-on-surface">$4.25 / kg</p>
                      <p className="text-slate-500 text-sm">x 200kg</p>
                      <p className="font-bold text-green-800 mt-1">$850.00</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 flex flex-col items-end space-y-2">
                  <div className="flex justify-between w-48 text-slate-500 text-sm">
                    <span>Subtotal:</span>
                    <span>$1,245.00</span>
                  </div>
                  <div className="flex justify-between w-48 text-slate-500 text-sm">
                    <span>Shipping:</span>
                    <span>$3.50</span>
                  </div>
                  <div className="flex justify-between w-48 font-bold text-on-surface text-lg pt-2 border-t border-slate-200">
                    <span>Total:</span>
                    <span className="text-green-800">$1,248.50</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 & 4: Sidebar Details (Span 4) */}
            <div className="col-span-4 space-y-gutter">
              {/* Section 2: Buyer & Farmer Info */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h4 className="font-label-sm uppercase tracking-wider text-slate-500">Stakeholder Information</h4>
                </div>
                <div className="p-6 space-y-6">
                  {/* Buyer */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-tertiary" data-icon="person">person</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase">Buyer</p>
                      <h5 className="font-bold text-on-surface">Whole Foods Coop Inc.</h5>
                      <p className="text-sm text-slate-500">contact@wholefoodscoop.com</p>
                      <p className="text-sm text-slate-500">+1 (555) 012-3456</p>
                    </div>
                  </div>
                  {/* Farmer */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary" data-icon="agriculture">agriculture</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase">Producer</p>
                      <h5 className="font-bold text-on-surface">Green Valley Farms</h5>
                      <p className="text-sm text-slate-500">orders@greenvalley.agri</p>
                      <p className="text-sm text-slate-500">ID: GV-9921-X</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Delivery Details */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h4 className="font-label-sm uppercase tracking-wider text-slate-500">Delivery &amp; Address</h4>
                </div>
                <div className="p-0">
                  <div className="h-32 bg-slate-200 relative">
                    <img alt="Map view showing delivery location in suburban Kansas City, satellite view with street overlays" className="w-full h-full object-cover" data-location="Kansas City" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqnR7PrFA4JwCIJltaEQhSTi7Hb6zoIjisZaxZslW-qyB846HppDsGn_7MbxwUkoE-JPwKxxAsepHe-FZ89G2DsgIATDd_rkRDtcakQBLet6HdL43n9RodyBuY8Iikzqb0HKMRSZXg4GracBTnV7Q_Brgw5uBCjy6PXu23OR-qFY00mH6azJ5F837qFHXl9I0E6HYOzuZfk-Px9YaMfBRTArwGe20vI3v1PD4I6-rdLBOcysYCYnSYvcfWxsBBlAzSCBRsuvpGVs0" />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <div className="bg-white p-1 rounded-full shadow-lg">
                        <span className="material-symbols-outlined text-error" data-icon="location_on" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="material-symbols-outlined text-slate-400 mt-1" data-icon="home">home</span>
                      <div>
                        <h5 className="font-bold text-on-surface">Central Distribution Hub</h5>
                        <p className="text-sm text-slate-500">842 Industrial Way, Suite 102</p>
                        <p className="text-sm text-slate-500">Kansas City, MO 64106</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400" data-icon="local_shipping">local_shipping</span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">Priority Freight</p>
                        <p className="text-xs text-slate-500">Tracking: #AG-7766-9912</p>
                      </div>
                      <button className="text-primary text-xs font-bold hover:underline">Track Live</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Timeline Tracking UI */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h4 className="font-label-sm uppercase tracking-wider text-slate-500">Order Timeline</h4>
                </div>
                <div className="p-6 space-y-6">
                  <div className="relative pl-8">
                    {/* Vertical Line */}
                    <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-slate-100"></div>
                    {/* Step 1 (Completed) */}
                    <div className="relative mb-8">
                      <div className="absolute -left-8 w-7 h-7 bg-green-800 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-[14px]" data-icon="check">check</span>
                      </div>
                      <h5 className="text-sm font-bold text-on-surface">Order Placed</h5>
                      <p className="text-xs text-slate-400">Oct 24, 2023 · 09:42 AM</p>
                    </div>
                    {/* Step 2 (Completed) */}
                    <div className="relative mb-8">
                      <div className="absolute -left-8 w-7 h-7 bg-green-800 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-[14px]" data-icon="check">check</span>
                      </div>
                      <h5 className="text-sm font-bold text-on-surface">Payment Verified</h5>
                      <p className="text-xs text-slate-400">Oct 24, 2023 · 10:15 AM</p>
                    </div>
                    {/* Step 3 (Current) */}
                    <div className="relative mb-8">
                      <div className="absolute -left-8 w-7 h-7 bg-primary-container rounded-full border-4 border-white shadow-sm flex items-center justify-center animate-pulse">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <h5 className="text-sm font-bold text-green-800">Shipped from Farm</h5>
                      <p className="text-xs text-slate-400">Oct 26, 2023 · 02:30 PM</p>
                      <p className="text-[11px] bg-green-50 text-green-800 inline-block px-2 py-0.5 rounded mt-1">On Schedule</p>
                    </div>
                    {/* Step 4 (Future) */}
                    <div className="relative">
                      <div className="absolute -left-8 w-7 h-7 bg-slate-100 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
                      </div>
                      <h5 className="text-sm font-bold text-slate-400">Out for Delivery</h5>
                      <p className="text-xs text-slate-300">Estimated Oct 28</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function RefundManagementPage() {
  return (
    <div className="bg-surface text-on-surface" style={{fontFamily: "'Inter', sans-serif", backgroundColor: '#f9f9ff'}}>
      {/* Left Side Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-[280px] z-50 bg-white border-r border-gray-100 shadow-[1px_0_3px_0_rgba(0,0,0,0.05)] flex flex-col py-6 px-4">
        <div className="mb-10 px-2 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img alt="KizFarm Logo" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
            <div>
              <h1 className="text-xl font-black tracking-tight text-[#1B6D24]">KizFarm</h1>
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Admin Console</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-3 py-2.5 font-['Inter'] text-sm font-medium rounded-lg text-gray-500 hover:text-[#1B6D24] hover:bg-gray-50 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            Dashboard
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 font-['Inter'] text-sm font-medium rounded-lg bg-green-50 text-[#1B6D24] border-r-4 border-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="payments">payments</span>
            Financials
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 font-['Inter'] text-sm font-medium rounded-lg text-gray-500 hover:text-[#1B6D24] hover:bg-gray-50 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            Inventory
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 font-['Inter'] text-sm font-medium rounded-lg text-gray-500 hover:text-[#1B6D24] hover:bg-gray-50 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
            Livestock
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 font-['Inter'] text-sm font-medium rounded-lg text-gray-500 hover:text-[#1B6D24] hover:bg-gray-50 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
            Reports
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 font-['Inter'] text-sm font-medium rounded-lg text-gray-500 hover:text-[#1B6D24] hover:bg-gray-50 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            Settings
          </a>
        </nav>
        <div className="mt-auto border-t border-gray-100 pt-6 space-y-1">
          <a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-[#1B6D24] transition-colors" href="#">
            <span className="material-symbols-outlined" data-icon="help">help</span>
            Support
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-error transition-colors" href="#">
            <span className="material-symbols-outlined" data-icon="logout">logout</span>
            Logout
          </a>
        </div>
      </aside>

      {/* Top Navigation */}
      <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm flex justify-between items-center h-16 px-8 ml-[280px] w-[calc(100%-280px)]">
        <div className="flex items-center gap-6">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-lg" data-icon="search">search</span>
            <input className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-[#1B6D24]/20 w-80" placeholder="Search orders, users..." type="text" />
          </div>
          <nav className="hidden md:flex gap-8">
            <a className="font-['Inter'] text-sm text-gray-500 hover:text-gray-900" href="#">Overview</a>
            <a className="font-['Inter'] text-sm text-[#1B6D24] font-bold border-b-2 border-[#1B6D24] pb-4 mt-4" href="#">History</a>
            <a className="font-['Inter'] text-sm text-gray-500 hover:text-gray-900" href="#">Analytics</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-full transition-all">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <div className="h-8 w-[1px] bg-gray-100"></div>
          <div className="flex items-center gap-3 pl-2">
            <div className="text-right">
              <p className="text-xs font-bold text-on-surface">Admin Profile</p>
              <p className="text-[10px] text-gray-400">System Administrator</p>
            </div>
            <img alt="Admin User Avatar" className="w-10 h-10 rounded-full object-cover border-2 border-primary-container/20" data-alt="professional headshot of a middle-aged male administrator in a light blue shirt with a clean background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWAD0e4dXoRVl7URYQKovg7R-4hdIqIj5C1NvjGeVtxPME4ewC2FuyGjIE5bKkUvK-x0QSEV-xmNZmaNTNowqLmo0udwtiXjCABmUjjvnEgiD-SdQ_Xs7Z6xRSBVMRfv9UgWHP0xnqtUuO3Re2NGfRuT3TNeZ5tf4fGDIFb3euDnUg3_IPqaVyY2VY8sbwCQR9FU1sFgXt7wCYFdVzjLHPpuuBT27URbZthnrAi7m_Unhd1D5LedclBweQr74o4YXHueei424JKRo" />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="ml-[280px] p-8 max-w-[1440px]">
        <div className="flex justify-between items-end mb-8">
          <div>
            <nav className="flex text-label-sm text-gray-400 mb-2 gap-2">
              <span>Financials</span>
              <span>/</span>
              <span className="text-[#1B6D24]">Refund Management</span>
            </nav>
            <h2 className="font-h1 text-h1 text-on-surface">Refund Requests</h2>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant rounded-lg text-label-md text-secondary hover:bg-gray-50 transition-all">
              <span className="material-symbols-outlined text-md" data-icon="filter_list">filter_list</span>
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1B6D24] text-white rounded-lg text-label-md shadow-md hover:opacity-90 transition-all">
              <span className="material-symbols-outlined text-md" data-icon="download">download</span>
              Export Report
            </button>
          </div>
        </div>

        {/* Asymmetric Layout: Table + Highlighted Detail */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* Requests Table (Left) */}
          <div className="col-span-12 lg:col-span-8 space-y-gutter">
            <div className="bg-white rounded-xl border border-gray-100 shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/30 flex justify-between items-center">
                <h3 className="text-label-md font-bold text-on-surface">Pending Approval (12)</h3>
                <span className="text-xs text-gray-400">Showing last 30 days</span>
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 text-label-sm uppercase font-bold text-gray-400">User</th>
                    <th className="px-6 py-4 text-label-sm uppercase font-bold text-gray-400">Order ID</th>
                    <th className="px-6 py-4 text-label-sm uppercase font-bold text-gray-400">Issue Type</th>
                    <th className="px-6 py-4 text-label-sm uppercase font-bold text-gray-400">Request Date</th>
                    <th className="px-6 py-4 text-label-sm uppercase font-bold text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {/* Active/Selected Row */}
                  <tr className="bg-green-50/30 hover:bg-green-50 transition-colors cursor-pointer border-l-4 border-[#1B6D24]">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700">JS</div>
                        <div>
                          <p className="text-body-sm font-semibold">James Sterling</p>
                          <p className="text-[11px] text-gray-400">james.s@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm">#ORD-2024-8812</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-100 text-orange-700">Damaged Goods</span>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm text-gray-500">Oct 24, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-yellow-100 text-yellow-700">Under Review</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-[10px] font-bold text-purple-700">AM</div>
                        <div>
                          <p className="text-body-sm font-semibold">Anna Murphy</p>
                          <p className="text-[11px] text-gray-400">a.murphy@farmnet.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm">#ORD-2024-8790</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-700">Wrong Item</span>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm text-gray-500">Oct 23, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-600">Pending</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-[10px] font-bold text-teal-700">RK</div>
                        <div>
                          <p className="text-body-sm font-semibold">Robert Kincaid</p>
                          <p className="text-[11px] text-gray-400">r.kincaid@outlook.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm">#ORD-2024-8755</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-100 text-red-700">Missing Parts</span>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm text-gray-500">Oct 22, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-600">Pending</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-[10px] font-bold text-pink-700">LW</div>
                        <div>
                          <p className="text-body-sm font-semibold">Linda White</p>
                          <p className="text-[11px] text-gray-400">linda.w@gmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm">#ORD-2024-8720</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-100 text-orange-700">Damaged Goods</span>
                    </td>
                    <td className="px-6 py-4 font-numeric text-body-sm text-gray-500">Oct 21, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-600">Pending</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/30 flex items-center justify-between">
                <p className="text-body-sm text-gray-500">Showing 4 of 12 requests</p>
                <div className="flex gap-2">
                  <button className="p-2 border rounded hover:bg-white text-gray-400"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                  <button className="p-2 border rounded hover:bg-white text-gray-400"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                </div>
              </div>
            </div>

            {/* Stats Cards (Bento style) */}
            <div className="grid grid-cols-3 gap-gutter">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-label-sm text-gray-400 uppercase font-bold mb-1">Total Refunded</p>
                <h4 className="text-h2 text-[#1B6D24]">$12,450.00</h4>
                <div className="mt-2 flex items-center text-xs text-green-600 font-bold">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  <span>+4.2% from last month</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-label-sm text-gray-400 uppercase font-bold mb-1">Average Time</p>
                <h4 className="text-h2 text-on-surface">1.4 Days</h4>
                <div className="mt-2 flex items-center text-xs text-green-600 font-bold">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span>Within 24hr goal</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-label-sm text-gray-400 uppercase font-bold mb-1">Rejection Rate</p>
                <h4 className="text-h2 text-on-surface">3.8%</h4>
                <div className="mt-2 flex items-center text-xs text-gray-400 font-bold">
                  <span className="material-symbols-outlined text-sm">history</span>
                  <span>Consistent trend</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed View (Right) */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-xl border border-gray-100 shadow-lg sticky top-24 overflow-hidden">
              <div className="p-6 bg-[#1B6D24]/5 border-b border-green-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-label-sm text-[#1B6D24] font-black uppercase tracking-widest">Active Investigation</span>
                    <h3 className="text-h3 text-on-surface mt-1">#ORD-2024-8812</h3>
                  </div>
                  <button className="text-gray-400 hover:text-on-surface"><span className="material-symbols-outlined">more_vert</span></button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <img alt="User image" className="w-10 h-10 rounded-full border-2 border-white object-cover" data-alt="close-up portrait of a woman with dark hair against a blurred natural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNwQrbpLCrPQfpJNbUmcEXK0Qu2RbUlZhtugeSsGlyCsu_SW7yIwnkSh1pWkNHFIUrpOVbO4yNiASQNU2VCfkpbRqTQgk_3X5uIfhXRA2NF0PXXJgzUnXsn5q5UaXiuldG46H5QnUSDSSMjB_lF34yq34655da5xuqKEg6fU1gPWYpMAMa_q-p1EkT9Y9xndA8_JynAUjceCd-52IW9jtjd0Jp9cUCPlg5HZbPG0Yik01HxG4M-Uaa6FpanmuIWbW6PS0TO2BjU_o" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">+2</div>
                  </div>
                  <div>
                    <p className="text-body-sm font-bold">James Sterling</p>
                    <p className="text-[11px] text-gray-500">Premium Farmer Member</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <p className="text-label-sm font-bold text-gray-400 uppercase mb-2">Issue Description</p>
                  <p className="text-body-sm text-on-surface leading-relaxed italic">
                    "The organic fertilizer bags arrived with multiple punctures. Approximately 15% of the content was spilled in the delivery truck. We require a partial refund for the lost materials as per our bulk supply agreement."
                  </p>
                </div>
                <div>
                  <p className="text-label-sm font-bold text-gray-400 uppercase mb-3">Evidence Attached (2)</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                      <img alt="Evidence 1" className="w-full h-24 object-cover transform group-hover:scale-105 transition-transform duration-300" data-alt="close-up of torn white plastic bags filled with granular soil fertilizer spilling out onto a wooden pallet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhcWkJDh8tuldaSFdooQTr41nwQGo7KpsZPsyEPyElXTc6Oma1YTbs4bDrQOKtbNTSmISJA-7U2-frUb5yNMrCnO7Jf-f7kAPbEkdtgwz3Kk6OdLBbqyH2egC98-t7p12xNMRqbdBoSDG6nlBQNLcRVZ8KMad3M1kkJ1AtdY7Hj5A9qkiJH8NqNwE9MKJb9ejy-x5aTAA4p67PflZDq6KJww3m4CmpOP4pfbj1sbeVT2dJaY224My5IuVPBUw1J7pV68lBu5LTs3A" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white">zoom_in</span>
                      </div>
                    </div>
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                      <img alt="Evidence 2" className="w-full h-24 object-cover transform group-hover:scale-105 transition-transform duration-300" data-alt="a signed delivery receipt showing handwritten notes about damage in a warehouse environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnTBQghpoayfCz1kL7OMz9NrfGHnUw_yufTYXAOabChQjk2m_8QrzTiWfJ0k68ToQ75aONKYZf7awpq4IJjTj8rN0E3CQXlO2K5fKiBsNfzKqLJwBVuvWZn1Gzj7aC97jqFm5QqgDzTiU1Y8TkiJS0kF6uCSQUbJCkHF60ur4JMSaKLfO9GU4gs95VLuRlb_enGJQn9obk0705dff4iM8N09EhK-hv6EFhQeREs2KScSw2tRDFvKxVYSj2mtydPSCxj_X0i2KFe4k" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white">zoom_in</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex justify-between text-body-sm">
                    <span className="text-gray-500">Order Total</span>
                    <span className="font-numeric font-bold">$1,240.00</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-gray-500">Requested Refund</span>
                    <span className="font-numeric font-bold text-error">$186.00</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-500" data-icon="info">info</span>
                    <p className="text-[11px] text-blue-700 leading-tight">Farmer has a clean history. 0 previous refunds in last 12 months.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <button className="py-3 px-4 bg-[#1B6D24] text-white rounded-lg font-bold text-label-md hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    Approve
                  </button>
                  <button className="py-3 px-4 bg-white border border-error text-error rounded-lg font-bold text-label-md hover:bg-red-50 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">cancel</span>
                    Reject
                  </button>
                </div>
                <button className="w-full py-2.5 text-secondary text-label-md font-medium hover:underline flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-md">chat_bubble</span>
                  Contact Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function EscrowManagementPage() {
  return (
    <div className="font-body-md text-on-surface" style={{backgroundColor: '#f9f9ff', fontFamily: "'Inter', sans-serif"}}>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-[280px] z-50 bg-white border-r border-gray-100 shadow-[1px_0_3px_0_rgba(0,0,0,0.05)] flex flex-col py-6 px-4">
        <div className="mb-10 px-2 flex flex-col gap-2">
          <img alt="KizFarm Logo" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          <div>
            <h1 className="text-xl font-black tracking-tight text-[#1B6D24]">KizFarm</h1>
            <p className="text-xs text-gray-500 font-medium">Admin Console</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24] transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-green-50 text-[#1B6D24] border-r-4 border-[#1B6D24] transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>payments</span>
            <span className="font-label-md">Financials</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24] transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-label-md">Inventory</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24] transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">agriculture</span>
            <span className="font-label-md">Livestock</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24] transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-label-md">Reports</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24] transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md">Settings</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 border-t border-gray-100 space-y-1">
          <button className="w-full mb-4 bg-primary text-white py-3 px-4 rounded-lg font-label-md flex items-center justify-center gap-2 hover:bg-[#155a1d] transition-all shadow-sm">
            <span className="material-symbols-outlined text-sm">add</span>
            New Transaction
          </button>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors" href="#">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-md">Support</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors" href="#">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-md">Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-[280px] min-h-screen">
        {/* TopNavBar */}
        <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm flex justify-between items-center h-16 px-8">
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 w-96">
            <span className="material-symbols-outlined text-gray-400 mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full" placeholder="Search escrow transactions..." type="text" />
          </div>
          <div className="flex items-center gap-8">
            <nav className="flex gap-6">
              <a className="text-gray-500 hover:text-gray-900 font-label-md" href="#">Overview</a>
              <a className="text-[#1B6D24] font-bold border-b-2 border-[#1B6D24] pb-4 font-label-md" href="#">History</a>
              <a className="text-gray-500 hover:text-gray-900 font-label-md" href="#">Analytics</a>
            </nav>
            <div className="flex items-center gap-4 border-l border-gray-100 pl-8">
              <button className="text-gray-400 hover:text-[#1B6D24] relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
              </button>
              <button className="text-gray-400 hover:text-[#1B6D24]">
                <span className="material-symbols-outlined">chat_bubble</span>
              </button>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="font-label-md text-on-surface">Admin Profile</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Super Admin</p>
                </div>
                <img alt="Admin User Avatar" className="w-10 h-10 rounded-full border-2 border-gray-100 object-cover" data-alt="professional headshot of a middle-aged man with short hair and a clean-shaven face, warm lighting, neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2TBtebUj2AYJuzjNz4OEDl7Fchp2772S1w1-oSewYNfuWneyPda9DHG8x6i2Tn1uzIqkj9Qa-XoLXFgsugLH6tTJwKv357BN9reFceo6nBzQiRQlNeoFwfNMlRixQQdU1g2y8-roeggfxiqW3P9oaFsKPOBityyPdjAdNhTL4M2jXr-Ktkd8RpcyCuYJajvzW-D-Z5lZ-xjCSR7Z4zh2upv6KSxcPYkUK_5N9iO0YmW_wvqRMR9iiuIttl1gANh9rzSajGgOCpt0" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 max-w-[1440px] mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center gap-2 text-gray-400 font-label-sm">
            <a className="hover:text-primary" href="#">Financials</a>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-gray-600">Escrow Management</span>
          </nav>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-h2 text-on-surface">Escrow Management</h2>
              <p className="text-body-sm text-gray-500">Monitor and override secure payment holds across the marketplace.</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:bg-gray-50 transition-all">
                <span className="material-symbols-outlined">filter_list</span>
                Filters
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:bg-gray-50 transition-all">
                <span className="material-symbols-outlined">download</span>
                Export CSV
              </button>
            </div>
          </div>

          {/* Bento Metric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-8">
            <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-[#1B6D24]">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-primary">
                  <span className="material-symbols-outlined text-xs mr-1">trending_up</span>
                  12%
                </span>
              </div>
              <div>
                <p className="text-gray-500 font-label-sm">Total in Escrow</p>
                <h3 className="text-h2 text-primary mt-1">$482,904.50</h3>
                <p className="text-[10px] text-gray-400 mt-2 font-numeric">LAST UPDATED: 2 MINS AGO</p>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined">pending_actions</span>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                  24 Orders
                </span>
              </div>
              <div>
                <p className="text-gray-500 font-label-sm">Pending Payouts</p>
                <h3 className="text-h2 text-blue-700 mt-1">$124,050.00</h3>
                <p className="text-[10px] text-gray-400 mt-2 font-numeric">REQUIRES MANUAL REVIEW: 3</p>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-sm flex flex-col justify-between col-span-1 md:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-500 font-label-sm">Escrow Volume (7 Days)</p>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Released</span>
                  <div className="w-2 h-2 rounded-full bg-gray-200 mt-1.5 ml-2"></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Held</span>
                </div>
              </div>
              <div className="h-24 flex items-end justify-between gap-1">
                <div className="w-full bg-gray-100 rounded-t-sm relative group h-12">
                  <div className="absolute bottom-0 w-full bg-primary/20 rounded-t-sm h-[40%]"></div>
                </div>
                <div className="w-full bg-gray-100 rounded-t-sm relative group h-16">
                  <div className="absolute bottom-0 w-full bg-primary/40 rounded-t-sm h-[60%]"></div>
                </div>
                <div className="w-full bg-gray-100 rounded-t-sm relative group h-20">
                  <div className="absolute bottom-0 w-full bg-primary/60 rounded-t-sm h-[50%]"></div>
                </div>
                <div className="w-full bg-gray-100 rounded-t-sm relative group h-14">
                  <div className="absolute bottom-0 w-full bg-primary/30 rounded-t-sm h-[70%]"></div>
                </div>
                <div className="w-full bg-gray-100 rounded-t-sm relative group h-24">
                  <div className="absolute bottom-0 w-full bg-primary/80 rounded-t-sm h-[90%]"></div>
                </div>
                <div className="w-full bg-gray-100 rounded-t-sm relative group h-18">
                  <div className="absolute bottom-0 w-full bg-primary/50 rounded-t-sm h-[65%]"></div>
                </div>
                <div className="w-full bg-gray-100 rounded-t-sm relative group h-22">
                  <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[85%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Escrow Transactions Table */}
          <div className="bg-white rounded-xl border border-[#EAECF0] shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="font-h3 text-on-surface">Recent Escrow Transactions</h3>
              <div className="flex items-center gap-4">
                <span className="text-body-sm text-gray-500">Showing 1-10 of 154</span>
                <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                  <button className="p-2 hover:bg-gray-100 border-r border-gray-200 text-gray-400">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="p-2 hover:bg-gray-100 text-gray-400">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/80 border-b border-gray-100">
                    <th className="px-6 py-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider">Buyer</th>
                    <th className="px-6 py-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider">Farmer / Vendor</th>
                    <th className="px-6 py-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {/* Row 1 */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-numeric font-medium text-primary">#ORD-2024-8841</span>
                      <p className="text-[10px] text-gray-400">Oct 24, 2023 · 14:20</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-8 h-8 rounded-full" data-alt="close-up portrait of a young man with glasses smiling in a sunlit outdoor urban environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQjP3Db8dN5wTMcOQhWVN2ZTHD71sZlitX8lnmO5PZz-r2faMdJj9ZoYVPxkFFFBR88-o29IK0aD4jb4J2QT-7tefZTwJtzM820NRQwiYK_MPFNgROxYGIRLZPODOFjVocdpv7UmKB8i7yew5O_favmkXgfWzahzoxH0vcjyZC9DBPZ4FXWFiRZJJ-fo236zCRK1eMeKrUQySkEFka5at5q0SOEdoaRhLXnsKBgCaw83GUZh0EHK2VEUj921Sl7U4zFT3NbFJkniY" />
                        <div>
                          <p className="font-label-md text-on-surface">Alex Thompson</p>
                          <p className="text-[10px] text-gray-400">Premium Buyer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#1B6D24]">
                          <span className="material-symbols-outlined text-sm">home_work</span>
                        </div>
                        <div>
                          <p className="font-label-md text-on-surface">Green Valley Co-op</p>
                          <p className="text-[10px] text-gray-400">Verified Seller</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-numeric font-bold text-on-surface">$12,450.00</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 ring-1 ring-amber-100">
                        HELD BY ESCROW
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="bg-[#1B6D24] text-white px-3 py-1.5 rounded-lg text-xs font-label-md hover:bg-[#155a1d] transition-all shadow-sm">
                        Release Payment
                      </button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-numeric font-medium text-primary">#ORD-2024-8842</span>
                      <p className="text-[10px] text-gray-400">Oct 24, 2023 · 15:45</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-8 h-8 rounded-full" data-alt="vibrant portrait of a woman with long wavy hair laughing, natural lighting, blurred greenery in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqmyooba745Fqnls9I77oCfUDr_KQWpEApFEvPJw50y25CKqATk4wzbse3WviUb77Q3VufrBOTyhGEZjNf7lIobgvIAxHNypSxTfkJcSKNrHdPNUyV25CM-z5Rvh2RvTYVDWebl7XVdy2q7aE_Oug9tt3n6WOllUUNBqOj1kvMiNfxPqZw3fYl8z6uFSaZrZGlxnVP5bLUPvW1vy7AQlGrQ3w2EwnGOQN98PRq6wZ-m8zFWTBA5nC5CIon_n8ZHjjFt52PYUfUkCc" />
                        <div>
                          <p className="font-label-md text-on-surface">Sarah Jenkins</p>
                          <p className="text-[10px] text-gray-400">Wholesale Client</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#1B6D24]">
                          <span className="material-symbols-outlined text-sm">agriculture</span>
                        </div>
                        <div>
                          <p className="font-label-md text-on-surface">Sunrise Orchards</p>
                          <p className="text-[10px] text-gray-400">Certified Organic</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-numeric font-bold text-on-surface">$5,200.00</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                        RELEASE PENDING
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="bg-[#1B6D24] text-white px-3 py-1.5 rounded-lg text-xs font-label-md hover:bg-[#155a1d] transition-all shadow-sm">
                        Release Payment
                      </button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-numeric font-medium text-primary">#ORD-2024-8845</span>
                      <p className="text-[10px] text-gray-400">Oct 23, 2023 · 09:12</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-8 h-8 rounded-full" data-alt="headshot of a man with a short beard and friendly expression, soft office lighting, clean professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlGHhWu4gXRPWrywNtWFOx-W9HkvKxxMPBo2tY-ImZ-2ShtxLCrxVWC5AI1jlL62OiKvciLp6iIJra_drfwcNC5_jx_u5KTQXjTlKGB4OmQPjPlWnRwQMGWK0vwl0WS0B9P1RiSbscWS0rZHh1H0s7nbcPj6ZST6-_hAxUu0I1V_dAcOcLm9mPpQ-QRHkZwXABzrDiAR2lni3tQJiTh5fyusL_oE1iBHbX99Ch69NPK1Ulo-m9ir8ynIttokXZ6aKzZTMmPujiCfg" />
                        <div>
                          <p className="font-label-md text-on-surface">Marcus Weber</p>
                          <p className="text-[10px] text-gray-400">Standard Buyer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#1B6D24]">
                          <span className="material-symbols-outlined text-sm">water_drop</span>
                        </div>
                        <div>
                          <p className="font-label-md text-on-surface">HydroPure Systems</p>
                          <p className="text-[10px] text-gray-400">Tech Provider</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-numeric font-bold text-on-surface">$22,100.00</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 ring-1 ring-amber-100">
                        HELD BY ESCROW
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="bg-[#1B6D24] text-white px-3 py-1.5 rounded-lg text-xs font-label-md hover:bg-[#155a1d] transition-all shadow-sm">
                        Release Payment
                      </button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-numeric font-medium text-primary">#ORD-2024-8848</span>
                      <p className="text-[10px] text-gray-400">Oct 23, 2023 · 11:30</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-8 h-8 rounded-full" data-alt="professional portrait of a confident woman in a black blazer smiling, clean studio background with soft overhead light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVx1jCJJVOIAyhD5iDRsEFImrzN-0T9dr93j-xiK6GPYtmxitTul02di_ZF-Ue2mwpLGtIwXCqEqaxGhc9p0-LXWjDOgh78NpBZ0i3mRujsCKMAN8S3hjAZALKy6Yr87MZE4U-ch4mjTupUtEUeTJhalNxdRNenmt75Rmp9gZXgtN7_XrgM1SA2snvRTne2DtIT3L3BHRDtDxkp2p-3bOqXyZSLxCeDcW9MJeYNptBPJaKxPMUd2eTPtCuB8bm0UEeperou3sqHwg" />
                        <div>
                          <p className="font-label-md text-on-surface">Linda Zhang</p>
                          <p className="text-[10px] text-gray-400">Enterprise Buyer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#1B6D24]">
                          <span className="material-symbols-outlined text-sm">token</span>
                        </div>
                        <div>
                          <p className="font-label-md text-on-surface">FertileGround LLC</p>
                          <p className="text-[10px] text-gray-400">Logistics Partner</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-numeric font-bold text-on-surface">$850.75</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-50 text-red-700 ring-1 ring-red-100">
                        DISPUTED
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <button className="bg-white border border-gray-200 text-red-600 px-3 py-1.5 rounded-lg text-xs font-label-md hover:bg-red-50 transition-all">
                        View Dispute
                      </button>
                      <button className="bg-[#1B6D24] text-white px-3 py-1.5 rounded-lg text-xs font-label-md hover:bg-[#155a1d] transition-all shadow-sm">
                        Release Payment
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-gray-50/30 flex items-center justify-between border-t border-gray-100">
              <p className="text-body-sm text-gray-500 italic">Showing results for current billing cycle ending Oct 31, 2024</p>
              <nav className="flex gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white font-label-sm">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-200 text-gray-600 font-label-sm hover:bg-gray-50">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-200 text-gray-600 font-label-sm hover:bg-gray-50">3</button>
                <span className="px-2 self-center text-gray-400">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-200 text-gray-600 font-label-sm hover:bg-gray-50">16</button>
              </nav>
            </div>
          </div>

          {/* Dashboard Alerts / Notifications */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-amber-50 border border-amber-100 p-lg rounded-xl flex gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex shrink-0 items-center justify-center text-amber-700">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div>
                <h4 className="font-label-md text-amber-900">High-Value Transaction Alert</h4>
                <p className="text-body-sm text-amber-800 mt-1">Order #ORD-2024-8902 is currently held for an amount exceeding $50,000. Verification of identity required before release.</p>
                <button className="mt-3 text-amber-900 font-label-sm underline decoration-amber-300 underline-offset-4 hover:decoration-amber-900">Start Verification</button>
              </div>
            </div>
            <div className="bg-green-50 border border-green-100 p-lg rounded-xl flex gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex shrink-0 items-center justify-center text-[#1B6D24]">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <h4 className="font-label-md text-green-900">Escrow Security Active</h4>
                <p className="text-body-sm text-green-800 mt-1">All escrowed funds are backed by our 100% Marketplace Guarantee. Security protocols updated 4 hours ago.</p>
                <button className="mt-3 text-green-900 font-label-sm underline decoration-green-300 underline-offset-4 hover:decoration-green-900">View Audit Logs</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function TransactionListPage() {
  return (
    <div className="bg-surface text-on-surface" style={{fontFamily: "'Inter', sans-serif"}}>
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-[280px] z-50 bg-white border-r border-gray-100 shadow-[1px_0_3px_0_rgba(0,0,0,0.05)] flex flex-col py-6 px-4">
        <div className="mb-10 px-2 flex items-center gap-3">
          <img alt="KizFarm Logo" className="w-10 h-10 object-contain rounded-lg" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          <div>
            <h1 className="text-xl font-black tracking-tight text-[#1B6D24]">KizFarm</h1>
            <p className="text-xs text-secondary font-medium uppercase tracking-widest">Admin Console</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 bg-green-50 text-[#1B6D24] border-r-4 border-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="payments">payments</span>
            <span className="font-label-md text-label-md">Financials</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span className="font-label-md text-label-md">Inventory</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
            <span className="font-label-md text-label-md">Livestock</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
            <span className="font-label-md text-label-md">Reports</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 text-gray-500 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 border-t border-gray-100 space-y-1">
          <button className="w-full mb-4 bg-primary text-white py-2.5 rounded-lg font-label-md text-label-md shadow-sm active:scale-[0.98] transition-transform">
            New Transaction
          </button>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50" href="#">
            <span className="material-symbols-outlined" data-icon="help">help</span>
            <span className="font-label-md text-label-md">Support</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50" href="#">
            <span className="material-symbols-outlined" data-icon="logout">logout</span>
            <span className="font-label-md text-label-md">Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <main className="ml-[280px] min-h-screen flex flex-col">
        {/* Top Navigation */}
        <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm flex justify-between items-center h-16 px-8">
          <div className="flex items-center gap-6">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <span className="material-symbols-outlined text-[20px]" data-icon="search">search</span>
              </span>
              <input className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 w-64" placeholder="Search transactions..." type="text" />
            </div>
            <nav className="hidden md:flex gap-6 items-center">
              <a className="text-[#1B6D24] font-bold border-b-2 border-[#1B6D24] pb-4 mt-4 font-body-sm text-body-sm" href="#">Overview</a>
              <a className="text-gray-500 hover:text-gray-900 font-body-sm text-body-sm" href="#">History</a>
              <a className="text-gray-500 hover:text-gray-900 font-body-sm text-body-sm" href="#">Analytics</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <span className="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
            </button>
            <div className="h-8 w-px bg-gray-200 mx-2"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <span className="text-sm font-medium text-on-surface">Admin Profile</span>
              <img className="w-8 h-8 rounded-full border border-gray-200" data-alt="Portrait of a professional farm administrator in a clean office setting, soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBELaLFOIX4Gl881ukXOEf5YsAlPUBpoZBVv3XSEFPFzLtDG9D097F1EjwftUwNmrmuTEXkWuxkjHeTTQc1MD72NuYw1gMvs8uXF0ZSwJ1_D6VVgc-S-h4jggsZSK2hEtL8KxRw2WSLjc42H-sAoz1vi8I8W0iuuNECzOBdP5eJQV-c6NEfIJQNO9uI9fI7utmUtTnE5TRLVChBdDX2ao4w4CI0totmK6_SHw7aAF2K3DCFVJ5tUek4vxP8kJqKA9agPfp9tKC5Dvo" />
            </div>
          </div>
        </header>

        {/* Canvas Area */}
        <div className="p-margin flex-1">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <nav className="flex items-center gap-2 text-secondary mb-2">
                <span className="font-label-sm text-label-sm">Financials</span>
                <span className="material-symbols-outlined text-xs" data-icon="chevron_right">chevron_right</span>
                <span className="font-label-sm text-label-sm text-primary font-bold">Transactions</span>
              </nav>
              <h2 className="font-h1 text-h1 text-on-surface">Admin Transactions</h2>
              <p className="text-secondary font-body-sm text-body-sm mt-1">Manage and monitor all financial activities across KizFarm ecosystem.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant bg-white text-on-surface rounded-lg font-label-md text-label-md hover:bg-gray-50 transition-all">
                <span className="material-symbols-outlined" data-icon="file_download">file_download</span>
                Export CSV
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-label-md text-label-md shadow-sm hover:opacity-90 active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined" data-icon="add">add</span>
                Create Transaction
              </button>
            </div>
          </div>

          {/* Dashboard Stats Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-8">
            <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-green-50 text-primary rounded-lg">
                  <span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
                </div>
                <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[14px] mr-1" data-icon="trending_up">trending_up</span>
                  12.5%
                </span>
              </div>
              <p className="text-secondary font-label-sm text-label-sm">Total Revenue</p>
              <h3 className="text-h2 font-h2 mt-1">$428,500.00</h3>
            </div>
            <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
                </div>
                <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[14px] mr-1" data-icon="trending_up">trending_up</span>
                  8.2%
                </span>
              </div>
              <p className="text-secondary font-label-sm text-label-sm">Active Invoices</p>
              <h3 className="text-h2 font-h2 mt-1">1,284</h3>
            </div>
            <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                  <span className="material-symbols-outlined" data-icon="pending_actions">pending_actions</span>
                </div>
                <span className="flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[14px] mr-1" data-icon="trending_down">trending_down</span>
                  3.1%
                </span>
              </div>
              <p className="text-secondary font-label-sm text-label-sm">Pending Payments</p>
              <h3 className="text-h2 font-h2 mt-1">$24,105.00</h3>
            </div>
            <div className="bg-white p-lg rounded-xl border border-[#EAECF0] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <span className="material-symbols-outlined" data-icon="group">group</span>
                </div>
                <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[14px] mr-1" data-icon="trending_up">trending_up</span>
                  24%
                </span>
              </div>
              <p className="text-secondary font-label-sm text-label-sm">Transacting Users</p>
              <h3 className="text-h2 font-h2 mt-1">852</h3>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="bg-white border border-[#EAECF0] rounded-xl p-md mb-gutter flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-48">
                <select className="w-full pl-3 pr-10 py-2 border border-outline-variant rounded-lg text-sm bg-white appearance-none focus:ring-2 focus:ring-primary/20">
                  <option>All Types</option>
                  <option>Livestock Sale</option>
                  <option>Supply Purchase</option>
                  <option>Service Fee</option>
                </select>
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                  <span className="material-symbols-outlined text-[18px]" data-icon="expand_more">expand_more</span>
                </span>
              </div>
              <div className="relative w-full md:w-48">
                <select className="w-full pl-3 pr-10 py-2 border border-outline-variant rounded-lg text-sm bg-white appearance-none focus:ring-2 focus:ring-primary/20">
                  <option>Last 30 Days</option>
                  <option>This Quarter</option>
                  <option>This Year</option>
                  <option>Custom Range</option>
                </select>
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                  <span className="material-symbols-outlined text-[18px]" data-icon="calendar_today">calendar_today</span>
                </span>
              </div>
              <button className="flex items-center gap-2 text-sm font-semibold text-[#1B6D24] hover:underline px-2">
                Clear all filters
              </button>
            </div>
            <div className="text-secondary text-sm font-medium">
              Showing <span className="text-on-surface">1,284</span> results
            </div>
          </div>

          {/* Transaction Table Card */}
          <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-[#EAECF0]">
                    <th className="px-6 py-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        Transaction ID
                        <span className="material-symbols-outlined text-xs" data-icon="arrow_downward">arrow_downward</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider">User</th>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAECF0]">
                  {/* Row 1 */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-numeric text-numeric font-medium text-primary">#TRX-82910</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-8 h-8 rounded-full" data-alt="Portrait of a male farmer with a friendly expression, outdoor natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDWeSnA4QoTD234h75GP9uAc3ZcUsqElFk3_IQZokY4QIb3uJ1zl-N5JZHji1uinenQUEZPvg33LyWdpOWTRT_gc0pWWdoykgHtgKmMQPSb83nxVZJtpgOWL9chlErxDNWLKUjjL-guQoXVX9Ldu-bnx8sXBJXP33xagm3JxxWakoGgQmg-ApjLE0D3OblPeqwC9rcMNmbnxKuToyrh3Mhtdut9D2hkwyOP6Yf4Kcl48f2EITMwsAfu_TYdW94waTEShsULMxlFcY" />
                        <div>
                          <div className="text-sm font-semibold text-on-surface">Marcus Thorne</div>
                          <div className="text-xs text-secondary">m.thorne@agri.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface">Livestock Sale</td>
                    <td className="px-6 py-4 text-sm font-bold text-on-surface">$12,450.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">Paid</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary">Oct 24, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-numeric text-numeric font-medium text-primary">#TRX-82911</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-8 h-8 rounded-full" data-alt="Close up portrait of a female agriculturist, thoughtful gaze, soft afternoon light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJrqc_U_uZaPNrkQM8WyFaUEQayhcQklVqYhfDM19q1x_wHXjpHv2RIo2UxhL839YteBQlJYCxWxo0QOPCPzjWgLSBANwjsBC6jsYoQK13ZEb_ABOmZVCAs66oyGJ4lLnk21BBTN9XDW2qcZJ-N45aheW8x_NGfa5Dnw_yQbn26VNOpXyp0b1Ym-zlljQDoK_InP4i8jH-8EeJ8ZG5G3Ix6vqmjKKZZdaNaI7VUsjugCkysSEQ9wobQCVYdx0-eMkx8PoLqpG9wFM" />
                        <div>
                          <div className="text-sm font-semibold text-on-surface">Sarah Jenkins</div>
                          <div className="text-xs text-secondary">s.jenkins@farm.net</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface">Supply Purchase</td>
                    <td className="px-6 py-4 text-sm font-bold text-on-surface">$3,120.50</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700">Pending</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary">Oct 23, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-numeric text-numeric font-medium text-primary">#TRX-82912</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-8 h-8 rounded-full" data-alt="Profile of an older male farmer with weathered features, gentle smile, sunlit background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH1EUW8FlcQKMgK7h1D3H_kSagt-6DWVznpLVjqwDumJUryYap2fqY2HDjLB0TZm5bnb4U5W7T4OuUZzq1iayYDKLIt_Bz8HfANgD8AgxfgHstDqcrC2BbYEbymd9QTlXGWY3gnGDWGd-OSEk_3ftBBDePUIJPfrp_Uk7U0Be5jZf1Rzl8rLN9qDfZdDca_GSxQgRTNjX4ZCtTiglXStaXjNxuopaySt4oncb066NJyFiwt6Dusy3_DQneJdugBktoFYMm9naP-DQ" />
                        <div>
                          <div className="text-sm font-semibold text-on-surface">Robert Millon</div>
                          <div className="text-xs text-secondary">rob.m@millonfarms.org</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface">Service Fee</td>
                    <td className="px-6 py-4 text-sm font-bold text-on-surface">$450.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700">Failed</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary">Oct 23, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-numeric text-numeric font-medium text-primary">#TRX-82913</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-8 h-8 rounded-full" data-alt="Portrait of a young female agribusiness professional in a bright greenhouse, vibrant green surroundings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_tNMij4nEL3GfkgUrxQyHS6SphsJ4_iIbliBcpFRoZaaxr5PlGpoxKBEtUTsUytegbZfJYgH7NsSHdkxcYnCelnTZvb_SR-wqdYiahgch04tb2eDOT2nuVtijYtqgy-8s92WqDPUWQvRou1pnqGOMkpPacZm9noTKUn7WEPrXNDFL62BMra45swPXoZFDjtzquZhdsd6ArIjz8kOWLr1jGiaF2rLDp_nEXKIiUrS7bfz99oGFLTTf6k_EoqNn_KQp5IU7rzmyoMs" />
                        <div>
                          <div className="text-sm font-semibold text-on-surface">Elena Rodriguez</div>
                          <div className="text-xs text-secondary">elena.r@kiz-ops.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface">Livestock Sale</td>
                    <td className="px-6 py-4 text-sm font-bold text-on-surface">$22,800.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">Paid</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary">Oct 22, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-numeric text-numeric font-medium text-primary">#TRX-82914</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-8 h-8 rounded-full" data-alt="Portrait of a male technical specialist in a modern farm office, high-key lighting, professional vibe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADdMWH1exchDtCBpRBP5Qu6Hev0qABh3eO5_G66gPCGfd1oOuJ6WZmXl6UoBzaaqUDFkRDcouHOSRItncy46Yql1qJOrEp-zgIEt1p54hv-zEco7OkvAX7v7dH4h59GyEyJbMON8DnzYjpaEBRKbkUJKHiBvejA0JUGC6nJyg4jb-vyii-LTge30In3RlcFtCxbpCeHzK9BEWRVBPoLjdYJAZNCDLsRM5SC3o6ocFzllsG9uUgjO4qdJ-wDuGyNbZzcDU_ij2jjLw" />
                        <div>
                          <div className="text-sm font-semibold text-on-surface">Liam Watson</div>
                          <div className="text-xs text-secondary">l.watson@agrotech.io</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface">Service Fee</td>
                    <td className="px-6 py-4 text-sm font-bold text-on-surface">$1,200.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">Paid</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary">Oct 22, 2023</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="px-6 py-4 flex items-center justify-between border-t border-[#EAECF0] bg-gray-50">
              <button className="px-4 py-2 border border-outline-variant rounded-lg text-sm font-medium text-secondary hover:bg-white transition-all disabled:opacity-50">
                Previous
              </button>
              <div className="flex gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-medium">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-secondary text-sm font-medium">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-secondary text-sm font-medium">3</button>
                <span className="px-2 text-secondary">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-secondary text-sm font-medium">12</button>
              </div>
              <button className="px-4 py-2 border border-outline-variant rounded-lg text-sm font-medium text-secondary hover:bg-white transition-all">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <footer className="mt-auto px-margin py-lg bg-white border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-secondary gap-4">
          <div className="flex items-center gap-6">
            <span>© 2023 KizFarm. All rights reserved.</span>
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>System Status: Healthy</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

function ProductReviewPage() {
  return (
    <div className="bg-background text-on-background antialiased" style={{fontFamily: "'Inter', sans-serif"}}>
      {/* SideNavBar Shell */}
      <aside className="fixed left-0 top-0 h-full w-[280px] border-r bg-white border-slate-200 shadow-sm z-50">
        <div className="flex flex-col h-full p-4 space-y-2">
          <div className="flex items-center gap-3 px-4 py-6">
            <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>agriculture</span>
            </div>
            <div>
              <h1 className="text-xl font-black text-emerald-900 tracking-tight">AgriMarket</h1>
              <p className="text-[10px] uppercase tracking-widest text-secondary font-bold opacity-70">Admin Dashboard</p>
            </div>
          </div>
          <nav className="flex-1 space-y-1">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-inter text-sm antialiased">Dashboard</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">group</span>
              <span className="font-inter text-sm antialiased">Users</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">agriculture</span>
              <span className="font-inter text-sm antialiased">Farmers</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-800 font-semibold transition-all duration-200" href="#">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>inventory_2</span>
              <span className="font-inter text-sm antialiased">Products</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="font-inter text-sm antialiased">Orders</span>
            </a>
          </nav>
          <div className="pt-4 border-t border-slate-100 space-y-1">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">help</span>
              <span className="font-inter text-sm antialiased">Support</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-inter text-sm antialiased">Settings</span>
            </a>
          </div>
        </div>
      </aside>

      {/* TopNavBar Shell */}
      <header className="fixed top-0 right-0 left-[280px] h-16 border-b z-40 bg-white/80 backdrop-blur-md border-slate-200">
        <div className="flex items-center justify-between px-8 w-full h-full">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-96">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all" placeholder="Search products, farmers, or listings..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-slate-500 hover:text-emerald-700 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-6 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">Admin Console</p>
                <p className="text-[10px] text-slate-500">System Administrator</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-100">
                <img className="w-full h-full object-cover" data-alt="professional portrait of a system administrator with a friendly expression in a modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxoOY_rafvkbS_e8kbyRmDp-bJPkQfS6YukkAV6G_JBw2JjstQtdf9nz0tGwO3bCssT2noOmPLDqIsX8zwspSRfWTDj_Tr2Im35Z3rei15sfe3FmPjDXaP4MYNTS4m9wVMyaLKJS6FM_xplRb313HttCCoO6G_qmNQEaDGg6eLF9Qbkmg1tZeEidkjP2huxkaX_G21rQ67-4aL3PZtSbV1esRTNv4YBfezF3-UAt5_M9CEjr3zXhMTUpbXs5zN5cLgFJVMywlQ1lQ" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-[280px] pt-16 min-h-screen">
        <div className="p-8 max-w-[1440px] mx-auto space-y-8">
          {/* Breadcrumbs & Header Actions */}
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400 font-label-sm text-label-sm">
                <span>Inventory</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span>Product Review</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-emerald-800">PRD-8821</span>
              </div>
              <h2 className="font-h1 text-h1 text-on-background">Review Listing: Organic Honeycrisp Apples</h2>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-600 font-label-md text-label-md bg-white hover:bg-slate-50 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-error">flag</span>
                Flag for Review
              </button>
              <button className="px-5 py-2.5 rounded-lg border border-error bg-white text-error font-label-md text-label-md hover:bg-error/5 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">delete_outline</span>
                Remove Product
              </button>
              <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-label-md text-label-md shadow-sm hover:opacity-90 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Approve Product
              </button>
            </div>
          </div>

          {/* Bento Grid Layout for Review Content */}
          <div className="grid grid-cols-12 gap-gutter">
            {/* Main Product Image & Visuals (Span 8) */}
            <div className="col-span-8 space-y-gutter">
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="relative aspect-video w-full bg-slate-50">
                  <img className="w-full h-full object-cover" data-alt="high-quality close-up of vibrant red honeycrisp apples in a wooden crate with soft morning sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdkh-GGF2cmx5A7hIF76RtRhT-WJUS3MVLJVOpx9sacZZEHpgsfB3BfHKdZneImDutI_h6mOU1AjY9c7NEW751AE7nmO-W4Ff7XJTfR2-LzYHVe6eBSiJbF97omYWNi14gwKRlmHtoFLBpAiq3bcIwIt54f--VXiYL_DxWtgGq_rczJPaSHpbx5DP6Ur-6ijw-KX77aZSPa9GXR_9_ucK9V_7dDQQpkhLnW4i25UJ1X7t2TJOJuqMAlSKXOawrwF736Cx7HNKprPU" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">Pending Approval</span>
                    <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">Grade A+</span>
                  </div>
                </div>
                <div className="p-lg grid grid-cols-4 gap-4">
                  <div className="aspect-square rounded-lg border-2 border-primary-container overflow-hidden">
                    <img className="w-full h-full object-cover" data-alt="close-up detail of organic apple skin showing natural texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClJZCbp5dt7sr3Ru9ql-STIFTqFNtDlaEuvokjIKkrVBemrB0ZfnTcQRu1rBZVM7GIcKNuz582ZAuBsfS2BOV0IXmLbEph4RDevC-GbefcbO0JjUhIfm8dQzWbCngeS0z7CBfvs_BVp62pd5ywbKwd30zLJ3_FHo-D9J_vEaq686wbMPG370G3gYrR5oFtMZnqnVdrFSiIEjiGwI5Jf5kHaGt6JljgrMkWlIoisYIDtHDJDwW7QQIypvq73KjkVSCJRZzKMdwyeFo" />
                  </div>
                  <div className="aspect-square rounded-lg border border-slate-100 overflow-hidden hover:border-primary-container cursor-pointer transition-colors">
                    <img className="w-full h-full object-cover" data-alt="a crate of fresh red apples in an orchard setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1LleQsjaAcKJlC71HkaRINn7J-CDsJ8o3F7IfdaOd97SJMDqG1NrWptGebTZ2RYA6mNQRwqjfE4W927dK2mCRwzpOUbwHlLe2iCMUyXxMeYXYn6mAUQGoVkOCxA84AhafWgmBDbF8pDVCGAL3JfKeCn-OAXauKZ8uL2he04_v0CaO6Ugv6W0lx_uz1zo9MuV42cNS2Z5YIFslXjOglZTAfrdSgGcrBr7b7qaQ5EXEqDH-kPbJ_yLE3TtfeUFcpiOKIz7jZyYvDO0" />
                  </div>
                  <div className="aspect-square rounded-lg border border-slate-100 overflow-hidden hover:border-primary-container cursor-pointer transition-colors">
                    <img className="w-full h-full object-cover" data-alt="overhead view of freshly harvested apples arranged neatly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrC7Be6d8byh_Ivr8VWw-QgKxqfyUZgsQUsAvxEXXyLE4fW3toue4kpHGqu0gWgd_yiYyhaoxgH-PGDE946g70p_Px7LGZAIuIXxBQnkMpFcfkXE0JNxdysNpUuTH5HD3Zdt_FEiF5TGsAREMml39N_uJKo9AuAF6RHoAp9W0tdyxNCn2tcgeMbZAZdh00_lwaKHQgBm5Qi4sg4Mr4LtVmDnPiM0a-3o8_vY3ngAibsaV8lC7pOJFSnoQFgC0ZwbnL86oH503lcIY" />
                  </div>
                  <div className="aspect-square rounded-lg bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-slate-400 group hover:bg-slate-100 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                    <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">View All (12)</span>
                  </div>
                </div>
              </div>

              {/* Description & Specification Details */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-lg">
                <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                  <h3 className="font-h3 text-h3 text-on-background flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">description</span>
                    Product Description
                  </h3>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Last Updated: Oct 24, 2023</span>
                </div>
                <div className="space-y-4">
                  <p className="font-body-md text-body-md text-slate-600 leading-relaxed">
                    Our Honeycrisp apples are grown in the mineral-rich soil of the Columbia River Basin. These apples are characterized by their exceptionally crisp texture and a perfect balance of sweet and tart flavors. Harvested at peak ripeness, they undergo a rigorous quality check to ensure they meet "Grade A" standards for both direct retail and wholesale distribution.
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-4">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">eco</span>
                        </div>
                        <div>
                          <p className="text-label-sm font-label-sm text-slate-400 uppercase tracking-tighter">Agricultural Category</p>
                          <p className="text-body-md font-body-md font-semibold">Pome Fruits / Organic</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">scale</span>
                        </div>
                        <div>
                          <p className="text-label-sm font-label-sm text-slate-400 uppercase tracking-tighter">Inventory Stock</p>
                          <p className="text-body-md font-body-md font-semibold">4,500 lbs (Bulk)</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">payments</span>
                        </div>
                        <div>
                          <p className="text-label-sm font-label-sm text-slate-400 uppercase tracking-tighter">Price Point</p>
                          <p className="text-body-md font-body-md font-semibold">$2.45 / lb (Wholesale)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">verified_user</span>
                        </div>
                        <div>
                          <p className="text-label-sm font-label-sm text-slate-400 uppercase tracking-tighter">Certification</p>
                          <p className="text-body-md font-body-md font-semibold">USDA Organic Certified</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Panel (Span 4) */}
            <div className="col-span-4 space-y-gutter">
              {/* Farmer Information Card */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="p-lg bg-slate-50 border-b border-slate-100 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">agriculture</span>
                  <h3 className="font-h3 text-h3 text-on-background">Farmer Profile</h3>
                </div>
                <div className="p-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden ring-4 ring-emerald-50">
                      <img className="w-full h-full object-cover" data-alt="portrait of an experienced farmer in a sun hat with a weathered kind face in front of a green field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOas17qkDrYThhHFJmg3w--w0A9DZF9pIL3W_4usIXYFcCQIBGa0s12n7dst428L_erzkupqBqzs4qc2PfAE7nI8p2gT1kMJ9bByq8Kqa4esR6jvLeyzRlXWHKZ-kh2EQp_OAXLpzUpNP807Ler2rfmHRrxfwUbn9hDE-vkKfNoGx0ZhxP40WWYpqEOyECblcHSd04JV7mHVqA9-_UKCnOBKm_Aq1JhaNpKOaNUAtHwh7K0meDIJE0wKCslGo50WeUeQphOnoK8vc" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-background text-body-md">Silas Thorne</h4>
                      <p className="text-body-sm text-slate-500">Green Valley Orchards</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-[14px] text-amber-500" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="text-xs font-bold text-slate-700">4.9</span>
                        <span className="text-[10px] text-slate-400 font-medium">(128 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-slate-50">
                      <span className="text-body-sm text-slate-500">Location</span>
                      <span className="text-body-sm font-semibold text-on-background">Yakima, WA</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-50">
                      <span className="text-body-sm text-slate-500">Total Listings</span>
                      <span className="text-body-sm font-semibold text-on-background">14 Active</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-50">
                      <span className="text-body-sm text-slate-500">Member Since</span>
                      <span className="text-body-sm font-semibold text-on-background">Mar 2021</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-body-sm text-slate-500">KYC Status</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Verified</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-2.5 rounded-lg border border-slate-200 text-primary font-label-md text-label-md hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">person_search</span>
                    View Full Farmer History
                  </button>
                </div>
              </div>

              {/* Risk Analysis / Compliance Card */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-lg">
                <h3 className="font-h3 text-h3 text-on-background mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-600">security</span>
                  Vet Analysis
                </h3>
                <div className="space-y-4">
                  <div className="p-3 bg-slate-50 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">AI Image Scan</p>
                      <p className="text-xs font-semibold text-slate-700">98% Authentic Match</p>
                    </div>
                    <span className="material-symbols-outlined text-emerald-600 text-sm">verified</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Price Anomaly</p>
                      <p className="text-xs font-semibold text-slate-700">Within Market Range</p>
                    </div>
                    <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Cert Expiry</p>
                      <p className="text-xs font-semibold text-slate-700">Expires in 45 Days</p>
                    </div>
                    <span className="material-symbols-outlined text-amber-600 text-sm">warning</span>
                  </div>
                </div>
              </div>

              {/* Admin Notes Section */}
              <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-lg">
                <h3 className="font-label-md text-label-md text-slate-900 mb-3">Internal Admin Notes</h3>
                <textarea className="w-full min-h-[100px] border border-slate-200 rounded-lg p-3 text-body-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" placeholder="Add a private note about this listing..."></textarea>
                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg border-l-4 border-slate-300">
                    <p className="text-[11px] font-bold text-slate-400">Oct 25, 14:20 - Admin (Sarah K.)</p>
                    <p className="text-xs text-slate-600 italic">Farmer submitted updated USDA certificate via email. Needs attachment to record.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Audit Trail Table */}
          <div className="bg-white border border-[#EAECF0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-lg border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-h3 text-h3 text-on-background">Listing Lifecycle History</h3>
              <button className="text-primary text-label-md font-label-md flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">history</span>
                Full Audit Log
              </button>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-400 uppercase tracking-widest">Event</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-400 uppercase tracking-widest">User / Actor</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-400 uppercase tracking-widest">Status Change</th>
                  <th className="px-lg py-3 text-label-sm font-label-sm text-slate-400 uppercase tracking-widest text-right">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-[#F9FAFB] transition-colors">
                  <td className="px-lg py-4 text-body-sm font-semibold text-slate-700">Listing Submission</td>
                  <td className="px-lg py-4 text-body-sm text-slate-500">Silas Thorne (Farmer)</td>
                  <td className="px-lg py-4">
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">New Entry</span>
                  </td>
                  <td className="px-lg py-4 text-body-sm text-slate-400 text-right font-numeric">Oct 24, 2023 - 09:12 AM</td>
                </tr>
                <tr className="hover:bg-[#F9FAFB] transition-colors">
                  <td className="px-lg py-4 text-body-sm font-semibold text-slate-700">Automated Compliance Check</td>
                  <td className="px-lg py-4 text-body-sm text-slate-500">System AI (Validator v2)</td>
                  <td className="px-lg py-4">
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Passed</span>
                  </td>
                  <td className="px-lg py-4 text-body-sm text-slate-400 text-right font-numeric">Oct 24, 2023 - 09:13 AM</td>
                </tr>
                <tr className="hover:bg-[#F9FAFB] transition-colors">
                  <td className="px-lg py-4 text-body-sm font-semibold text-slate-700">Image Verification</td>
                  <td className="px-lg py-4 text-body-sm text-slate-500">System AI (Validator v2)</td>
                  <td className="px-lg py-4">
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Verified</span>
                  </td>
                  <td className="px-lg py-4 text-body-sm text-slate-400 text-right font-numeric">Oct 24, 2023 - 09:15 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function AllProductsListPage() {
  return (
    <div className="bg-background text-on-background antialiased overflow-x-hidden" style={{fontFamily: "'Inter', sans-serif"}}>
      {/* SideNavBar Shell */}
      <aside className="fixed left-0 top-0 h-full w-[280px] border-r border-slate-200 bg-white shadow-sm z-50">
        <div className="flex flex-col h-full p-4 space-y-2">
          <div className="px-4 py-6 mb-4">
            <h1 className="text-xl font-black text-emerald-900 tracking-tight">AgriMarket</h1>
            <p className="font-inter text-sm antialiased text-slate-500">Admin Dashboard</p>
          </div>
          <nav className="flex-1 space-y-1">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
              <span className="font-inter text-sm antialiased">Dashboard</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="group">group</span>
              <span className="font-inter text-sm antialiased">Users</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
              <span className="font-inter text-sm antialiased">Farmers</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-800 font-semibold transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
              <span className="font-inter text-sm antialiased">Products</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
              <span className="font-inter text-sm antialiased">Orders</span>
            </a>
          </nav>
          <div className="pt-4 border-t border-slate-100 space-y-1">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="help">help</span>
              <span className="font-inter text-sm antialiased">Support</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
              <span className="font-inter text-sm antialiased">Settings</span>
            </a>
          </div>
        </div>
      </aside>

      {/* TopNavBar Shell */}
      <header className="fixed top-0 right-0 left-[280px] h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md z-40">
        <div className="flex items-center justify-between px-8 w-full h-full">
          <div className="flex items-center gap-6 flex-1">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" data-icon="search">search</span>
              <input className="w-full bg-slate-100 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="Search marketplace listings..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:text-emerald-700 transition-colors">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <button className="p-2 text-slate-500 hover:text-emerald-700 transition-colors">
              <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-label-sm text-slate-900">Admin User</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Super Admin</p>
              </div>
              <img alt="User Profile Avatar" className="w-10 h-10 rounded-full border border-slate-200 object-cover" data-alt="Close-up portrait of a professional man in a clean office setting, soft natural lighting, high-end photography style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzVy7xVwbuX3Xngvs__vYTSXLs-SCdkaDQg4xh8KrmfqAK86rp0P-KH7dB3gW-M3JtyBHNtrtohuq4URHsSowb4sHCxr-E1AT1TrKdFRnhddotdkc5ehiJL8flcYrP5ZoJqDVQfDCp-iDkIp3PKEBg44h-OZJflL1n2gkTFo6CTb4qL6c5kSgLVxjKMBaXqeU2VJWh284NZJwZxyoYPU1_PlCYRPTaI-9sn-dCQwEgdg3ZUUlPUAzBtKzYPa9V4NBCIUWx5_-ClFw" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pl-[280px] pt-16 min-h-screen">
        <div className="p-margin max-w-container-max mx-auto">
          {/* Breadcrumbs & Header Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <nav className="flex items-center gap-2 mb-2">
                <span className="text-slate-400 font-label-sm">Marketplace</span>
                <span className="material-symbols-outlined text-slate-300 text-sm" data-icon="chevron_right">chevron_right</span>
                <span className="text-emerald-800 font-label-sm">All Products</span>
              </nav>
              <h2 className="font-h1 text-on-background">Inventory Management</h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant text-primary rounded-lg font-label-md hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-lg" data-icon="file_download">file_download</span>
                Export CSV
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-label-md hover:bg-emerald-900 shadow-sm transition-all active:scale-95">
                <span className="material-symbols-outlined text-lg" data-icon="add">add</span>
                New Product
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-8">
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-label-sm">Total Listings</span>
                <span className="p-1.5 bg-emerald-50 text-emerald-700 rounded-lg material-symbols-outlined text-lg" data-icon="inventory_2">inventory_2</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-h2 text-slate-900">1,284</span>
                <span className="text-emerald-600 text-xs font-label-sm mb-1">+12%</span>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-label-sm">Pending Review</span>
                <span className="p-1.5 bg-amber-50 text-amber-700 rounded-lg material-symbols-outlined text-lg" data-icon="pending_actions">pending_actions</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-h2 text-slate-900">42</span>
                <span className="text-amber-600 text-xs font-label-sm mb-1">Requires Action</span>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-label-sm">Approved Today</span>
                <span className="p-1.5 bg-blue-50 text-blue-700 rounded-lg material-symbols-outlined text-lg" data-icon="verified">verified</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-h2 text-slate-900">156</span>
                <span className="text-blue-600 text-xs font-label-sm mb-1">High Activity</span>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-label-sm">Flagged Products</span>
                <span className="p-1.5 bg-red-50 text-red-700 rounded-lg material-symbols-outlined text-lg" data-icon="flag">flag</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-h2 text-slate-900">8</span>
                <span className="text-red-600 text-xs font-label-sm mb-1">High Risk</span>
              </div>
            </div>
          </div>

          {/* Table Controls */}
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden">
            <div className="p-4 border-b border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 text-slate-600 font-label-md bg-slate-100 rounded-md">All Products</button>
                <button className="px-3 py-1.5 text-slate-500 font-label-md hover:bg-slate-50 rounded-md transition-colors">Pending</button>
                <button className="px-3 py-1.5 text-slate-500 font-label-md hover:bg-slate-50 rounded-md transition-colors">Archived</button>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" data-icon="filter_list">filter_list</span>
                  <select className="pl-9 pr-8 py-1.5 border border-outline-variant rounded-lg text-sm bg-white focus:ring-emerald-500 appearance-none">
                    <option>Status: All</option>
                    <option>Status: Approved</option>
                    <option>Status: Pending</option>
                    <option>Status: Flagged</option>
                  </select>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant rounded-lg text-sm hover:bg-slate-50 transition-colors">
                  Bulk Actions
                  <span className="material-symbols-outlined text-sm" data-icon="expand_more">expand_more</span>
                </button>
              </div>
            </div>

            {/* Product Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50">
                  <tr>
                    <th className="px-6 py-4 w-10">
                      <input className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                    </th>
                    <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Product Info</th>
                    <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Farmer</th>
                    <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* Row 1 */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <input className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                          <img alt="Fresh Organic Tomatoes" className="w-full h-full object-cover" data-alt="Vibrant red organic vine tomatoes with green stalks, glistening with morning dew, high detail, studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe-GO8wXnj6gdvHZi-3pd069Zc6tjVQZD7NpE9h82VpUMekUe8BA3bCSwFkNHmOM2Q0GzzRVaHAnp2D8nVNJYVaYEr0Xyk4hqZo9Gx_0tclawaD1hsWI8GwyEREx10VY2YTg05WXOeZgkA0SejYw3PxB9GBCpbYnb5SFNpUoMlD2hG-viTmIOn-FuJTFZjMV4pV0WuTEA_Ei8VCbXHgQSATmOCD8wxwXIv-6gChGoJi3-9DV7lcR2K_SzwqjrhcdGok0Mqq1z9CeY" />
                        </div>
                        <div>
                          <p className="font-label-md text-slate-900">Organic Vine Tomatoes</p>
                          <p className="text-xs text-slate-500">ID: PRD-0421-TM</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400 text-sm" data-icon="location_on">location_on</span>
                        <div>
                          <p className="font-body-sm text-slate-700">Green Valley Farms</p>
                          <p className="text-[10px] text-slate-500">John Doe • Tier 1</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">Vegetables</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-numeric font-medium text-slate-900">$4.50 / kg</p>
                      <p className="text-[10px] text-slate-400">Stock: 450 kg</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                        Approved
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <input className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                          <img alt="Fresh Local Honey" className="w-full h-full object-cover" data-alt="Golden artisanal honey in a classic glass jar with a wooden honey dipper, soft morning light, rustic wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZPlF1r2ZkcnlaJMH5Jv45NRukjZ8ovVcMzYEgM4dwxiXpzZgV81u-0KReEWwBIItvA1p3JLdQhIRmepvvZ1rYEX7AiUIx_S1hxbPGHho4Wl_xvBOVFLk_MmqNAa0cmS-e-giX2laN5LSrepeVEkgOHqIkGvXqsyCBTk1HlCN4OiflNa3kzytbCLU7SOrlcnOgxgMYMY55kTDr_VVas8t0ErQZKExP5AzSowqwmUZlM044Ab42rPgKRyBEJzCrdHe865zvCwAyGc" />
                        </div>
                        <div>
                          <p className="font-label-md text-slate-900">Wildflower Honey (300g)</p>
                          <p className="text-xs text-slate-500">ID: PRD-1102-HN</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400 text-sm" data-icon="location_on">location_on</span>
                        <div>
                          <p className="font-body-sm text-slate-700">Mountain Apiary</p>
                          <p className="text-[10px] text-slate-500">Sarah Mill • New Vendor</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">Pantry</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-numeric font-medium text-slate-900">$12.00 / unit</p>
                      <p className="text-[10px] text-slate-400">Stock: 25 units</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                        Pending Review
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <input className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                          <img alt="Strawberries" className="w-full h-full object-cover" data-alt="Bowl of ripe vibrant red strawberries with green leaves, macro shot, bright summery lighting, crisp focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCT65V8k2snhr_SMjVSkZ4wh01wFn-hKf2PRMM3GRU-GLJl_f8upULOKo9ImIP12OJKujUlWt4nbUCJSuwyXPc-fGJuy59nZ_Gv1PrZh2FGeGTj7f2uO6lQuyC_6nwKCQy4utxesFFgKzIbMoBdkTBRmQMmau6ven7kR96BOFBLjCrA_SojbgAJLbalSCQauqyqbf2YYD6h8Et6i7ONG8eXhLQc6-muDWQlfmaCQKchFRsWnLkQghqk_BiD1kjD3Bf8k4_5ZSmVto" />
                        </div>
                        <div>
                          <p className="font-label-md text-slate-900">Summer Strawberries</p>
                          <p className="text-xs text-slate-500">ID: PRD-0925-SB</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400 text-sm" data-icon="location_on">location_on</span>
                        <div>
                          <p className="font-body-sm text-slate-700">Sunny Orchards</p>
                          <p className="text-[10px] text-slate-500">Mike Ross • Tier 2</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">Fruits</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-numeric font-medium text-slate-900">$6.75 / box</p>
                      <p className="text-[10px] text-slate-400">Stock: Out of stock</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                        Flagged
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <input className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                          <img alt="Fresh Kale" className="w-full h-full object-cover" data-alt="Bundle of dark green curly kale, farm fresh, textured leaves, natural daylight, soft bokeh background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASwF9sjURmlxsTpndB_bCep_k2o2c7ENYs7SQvtWiNcHTrIx_SugNbc2V0o_Kc8fggE_ZoLkvGJnmJixhtRJCwvzlSZ6544uDosXm4B6mrGE3vwhZSUgn_qlSxNHkRyBJj7r-c2ejXnJr3NdaWzWAMvic_Zh2Caggt-7uC844RnEjrcUk6gpW_uRgL3p0zhl-1gzquwqnKXZ53supCTQekfwU0ZXe4swClBjfaRavnqELbFUWmWH3H1N9skXY02PcT1UFHIld6bRg" />
                        </div>
                        <div>
                          <p className="font-label-md text-slate-900">Organic Curly Kale</p>
                          <p className="text-xs text-slate-500">ID: PRD-3321-KL</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400 text-sm" data-icon="location_on">location_on</span>
                        <div>
                          <p className="font-body-sm text-slate-700">Green Valley Farms</p>
                          <p className="text-[10px] text-slate-500">John Doe • Tier 1</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">Vegetables</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-numeric font-medium text-slate-900">$3.20 / bunch</p>
                      <p className="text-[10px] text-slate-400">Stock: 120 bunches</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                        Approved
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-outline-variant flex items-center justify-between bg-slate-50/30">
              <p className="text-sm text-slate-500">Showing <span className="font-medium text-slate-900">1</span> to <span className="font-medium text-slate-900">10</span> of <span className="font-medium text-slate-900">1,284</span> results</p>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-outline-variant rounded-lg text-slate-400 hover:bg-white hover:text-slate-700 disabled:opacity-50 transition-colors" disabled>
                  <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-lg text-sm font-medium">1</button>
                <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-white rounded-lg text-sm font-medium transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-white rounded-lg text-sm font-medium transition-colors">3</button>
                <span className="text-slate-400 mx-1">...</span>
                <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-white rounded-lg text-sm font-medium transition-colors">129</button>
                <button className="p-2 border border-outline-variant rounded-lg text-slate-400 hover:bg-white hover:text-slate-700 transition-colors">
                  <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function FarmerVerificationReviewPage() {
  return (
    <div className="font-body-md text-on-background" style={{backgroundColor: '#f9f9ff'}}>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-[280px] border-r border-slate-200 bg-white shadow-sm flex flex-col p-4 space-y-2 z-50">
        <div className="mb-8 px-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>agriculture</span>
          </div>
          <div>
            <h1 className="text-xl font-black text-emerald-900 tracking-tight leading-none">AgriMarket</h1>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-1">Admin Dashboard</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-800 font-semibold transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="group" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
            <span className="font-label-md text-label-md">Users</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
            <span className="font-label-md text-label-md">Farmers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span className="font-label-md text-label-md">Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span className="font-label-md text-label-md">Orders</span>
          </a>
        </nav>
        <div className="pt-4 border-t border-slate-100 space-y-1">
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50" href="#">
            <span className="material-symbols-outlined" data-icon="help">help</span>
            <span className="font-label-md text-label-md">Support</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </a>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 right-0 left-[280px] h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md z-40 flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <nav className="flex items-center text-body-sm text-slate-500 gap-2">
            <a className="hover:text-emerald-700" href="#">Users</a>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <a className="hover:text-emerald-700" href="#">Verification Queue</a>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-emerald-800 font-medium">Review: #FRM-92831</span>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-emerald-800" data-icon="notifications">notifications</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
          </div>
          <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
            <div className="text-right">
              <p className="text-label-md font-label-md text-on-background">Admin Console</p>
              <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-tighter">Senior Reviewer</p>
            </div>
            <img className="w-10 h-10 rounded-full border-2 border-emerald-100 object-cover" data-alt="professional portrait of a corporate male administrator in a light grey suit with focused expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyT5HfW2p3vIzggUhN9rjOkJaOJj9vd8j5CYD5GUsdCXuB3Jm9a7LzqKLADn9f1cEQGIzpGvof66HWZxnO0gvUG3c0ePT0gAGdLmEBeX4e2-7ciHXyx6usD2Z6ln_2EDPcyVrqar6Hj4HVTrOomTNYzSC6_6PspVayLRGeHzEO4vO61CclDLVjTKQ_gmLsOlec0WTg-_JDQVcnv2q3k3jLq5PYAhSJIpu2GeG4iGf9FHQaDV_zwvnA7SYPLrm6cyTyNTYq8upB8H0" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-[280px] pt-16 min-h-screen">
        <div className="p-8 max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-h1 text-h1 text-on-background">Farmer Verification Review</h2>
              <p className="text-body-md text-secondary mt-1">Reviewing application for <strong>Adebayo Chidubem</strong> • Submitted 4 hours ago</p>
            </div>
            <div className="flex gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-label-sm text-label-sm flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Identity Match: 98%
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container text-tertiary border border-outline-variant font-label-sm text-label-sm">
                Tier 2 Verification
              </span>
            </div>
          </div>

          {/* Bento Layout Content */}
          <div className="grid grid-cols-12 gap-gutter">
            {/* Left Column: Documents */}
            <div className="col-span-8 space-y-gutter">
              {/* ID Document Card */}
              <div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-slate-50/50">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-700" data-icon="badge">badge</span>
                    <h3 className="font-h3 text-h3">Primary Identity Document</h3>
                  </div>
                  <button className="text-emerald-700 font-label-sm flex items-center gap-1 hover:underline">
                    <span className="material-symbols-outlined text-[18px]">zoom_in</span> Full Screen
                  </button>
                </div>
                <div className="p-6">
                  <div className="aspect-[16/9] w-full bg-slate-100 rounded-lg overflow-hidden border-2 border-dashed border-slate-200 group relative">
                    <img className="w-full h-full object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity" data-alt="high resolution scan of a national identity card with clear text and biometric photo details on a clean surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKt1IQ1J1zbQoZ4qGTNA_S45-ygvf8nWlzjaCuXdA2bEN2XZdjn3JmXo2K-tYm7s2Dtb6h9ufyrGvbwojKIudRbasPYX4a-0MgpDM9wffjdP5AvK-dz7wBRowX6vx9-wLHbvchBdO4QsJFTMcknYGn5e9u9aSn1Ez-yy3Lj8dtJDSNdgFa_SVEKZDLcLQb3f3Au5vjyMFew3I6dW7sol5jKzGkE53vTn_U37fABdqXPt294Ct4Ryvbx6NuYmQ01YOLo5lJVAzLhdU" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg flex justify-between items-center border border-slate-200">
                      <span className="text-label-sm font-label-sm text-slate-600">National ID Card • PNG • 2.4 MB</span>
                      <span className="text-emerald-700 font-label-sm">Verified Clear</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Selfie & Biometrics Card */}
              <div className="grid grid-cols-2 gap-gutter">
                <div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-outline-variant bg-slate-50/50">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-700" data-icon="face">face</span>
                      <h3 className="font-h3 text-h3">Live Liveness Selfie</h3>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col items-center">
                    <div className="w-48 h-48 bg-slate-100 rounded-full overflow-hidden border-4 border-emerald-50 mb-4">
                      <img className="w-full h-full object-cover" data-alt="front-facing portrait of a man with a natural background and soft even lighting for identity verification" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAetWKYJJnW6GnwO5eTMe7odLH_omSc_fcAOnlfPU7Rrfa4a8l8JmeWDBRRObZzQ36XIqcmsaj45p3NZUDu0csnooQMYhnHN0_J7BB0bNj6iP-MQ5gTOUeji-vZEZmHW4VOLcxn1SEPbTorbiY6fOd4BOwJtazxXdq9JJedYREemQbIlNXxtC7VkYSNJWloHvwU4AoQMPeZheS77Oiyi6NvL8Q9z-twsUKrkmvYeIVSN4KtzYrhMZxuPU6YjUwAmqKkPBwxizbkyQI" />
                    </div>
                    <p className="text-label-sm text-slate-500 mb-4">Captured via Mobile App Web-Cam</p>
                    <div className="w-full bg-emerald-50/50 rounded-lg p-3 border border-emerald-100">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs font-semibold text-emerald-800">Face Match Confidence</span>
                        <span className="text-xs font-bold text-emerald-800">94.2%</span>
                      </div>
                      <div className="w-full bg-emerald-200/30 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full" style={{width: '94.2%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-outline-variant bg-slate-50/50">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-700" data-icon="fingerprint">fingerprint</span>
                      <h3 className="font-h3 text-h3">Data Comparison</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400">account_balance</span>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">BVN Status</p>
                          <p className="text-label-md font-semibold text-slate-800">Verified &amp; Active</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-emerald-500" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400">pin</span>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">NIN Retrieval</p>
                          <p className="text-label-md font-semibold text-slate-800">Match Found</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-emerald-500" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-error-container/10 rounded-lg border border-error/10">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-error">warning</span>
                        <div>
                          <p className="text-[10px] font-bold text-error uppercase tracking-wider">Document Expiry</p>
                          <p className="text-label-md font-semibold text-on-error-container">Expires in 12 days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Verification Form */}
            <div className="col-span-4 space-y-gutter">
              {/* Profile Summary */}
              <div className="bg-white border border-outline-variant rounded-xl shadow-sm p-6">
                <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-slate-400 mb-4">Farmer Profile</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase">Full Legal Name</label>
                    <p className="text-body-md font-semibold text-on-background">Adebayo Oluwaseun Chidubem</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 uppercase">Date of Birth</label>
                      <p className="text-body-md font-medium text-on-background">14 May 1982</p>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 uppercase">Gender</label>
                      <p className="text-body-md font-medium text-on-background">Male</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase">Registered Farm Location</label>
                    <p className="text-body-md font-medium text-on-background">Oyo State, Nigeria</p>
                    <div className="mt-2 h-24 rounded-lg bg-slate-100 overflow-hidden border border-slate-200">
                      <img className="w-full h-full object-cover" data-alt="satellite view of organized green agricultural farmland squares with small rural access roads" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlbtKjmwQzRe7wsoj8WDi2XXrz2hZsVbA4-2VQyRzvaOGEKl3Bv4RbB7LqukoR7Duv5_sv715jxBGRgZVxpBAohge7iTSVQBKk39g9egKwUYSfnq2ZkSbnQFAgPLZW7O4p_-uI1slEPjcEG1InEZNVPLfZ1UjNUNeRPwRSc6Fv8D9jggnp59punYLTHO7Z8mIUIDjbDrQA-UbpynxAZgWrqy4bqLAvurjAbuGdvdQWR-RiN9PoqM09H-55d318sqyHCA9wsxPuk80" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Panel */}
              <div className="bg-white border border-outline-variant rounded-xl shadow-sm p-6 sticky top-24">
                <h3 className="font-h3 text-h3 mb-6">Review Decision</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-label-md font-label-md text-secondary mb-2" htmlFor="reviewer-notes">Internal Reviewer Notes</label>
                    <textarea className="w-full rounded-lg border-outline-variant focus:ring-primary focus:border-primary text-body-sm" id="reviewer-notes" placeholder="Add comments about document clarity, inconsistencies, or general observations..." rows={4}></textarea>
                  </div>
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <button className="w-full py-4 bg-primary text-white rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.98]">
                      <span className="material-symbols-outlined">verified</span>
                      Approve Verification
                    </button>
                    <button className="w-full py-3 bg-white border border-error text-error rounded-lg font-label-md text-label-md hover:bg-error/5 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                      <span className="material-symbols-outlined">block</span>
                      Reject Application
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mt-4 p-3 bg-slate-50 rounded-lg">
                    <span className="material-symbols-outlined text-slate-400 text-[20px]">info</span>
                    <p className="text-[11px] text-slate-500 leading-tight">By approving, the farmer will receive a confirmation SMS and gain full access to the marketplace and credit facilities.</p>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="bg-white border border-outline-variant rounded-xl shadow-sm p-6">
                <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-slate-400 mb-4">Verification Checklist</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <input defaultChecked className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                    <span className="text-body-sm text-slate-600">ID text matches form data</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <input defaultChecked className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                    <span className="text-body-sm text-slate-600">Selfie matches ID photo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <input className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                    <span className="text-body-sm text-slate-600">Document shows valid expiry</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <input defaultChecked className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                    <span className="text-body-sm text-slate-600">BVN/NIN API check success</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function AllFarmersListPage() {
  return (
    <div className="bg-background text-on-background antialiased" style={{fontFamily: "'Inter', sans-serif", backgroundColor: '#f9f9ff'}}>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-[280px] border-r bg-white border-slate-200 shadow-sm flex flex-col p-4 space-y-2 z-50">
        <div className="px-4 py-6">
          <h1 className="text-xl font-black text-emerald-900 tracking-tight">AgriMarket</h1>
          <p className="text-xs font-label-sm text-slate-500 uppercase tracking-widest mt-1">Admin Dashboard</p>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="font-label-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="group">group</span>
            <span className="font-label-md">Users</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-800 font-semibold transition-all duration-200 active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined" data-icon="agriculture" style={{fontVariationSettings: "'FILL' 1"}}>agriculture</span>
            <span className="font-label-md">Farmers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span className="font-label-md">Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span className="font-label-md">Orders</span>
          </a>
        </nav>
        <div className="pt-4 border-t border-slate-100 space-y-1">
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="help">help</span>
            <span className="font-label-md">Support</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="font-label-md">Settings</span>
          </a>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 right-0 left-[280px] h-16 border-b bg-white/80 backdrop-blur-md border-slate-200 z-40">
        <div className="flex items-center justify-between px-8 w-full h-full">
          <div className="flex items-center flex-1">
            <div className="relative w-full max-w-md group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" data-icon="search">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 transition-all outline-none" placeholder="Search farmers, farms, or locations..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-500 hover:text-emerald-700 transition-colors">
                <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
              </button>
              <button className="p-2 text-slate-500 hover:text-emerald-700 transition-colors">
                <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
              </button>
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right">
                <p className="text-xs font-bold text-slate-900 leading-tight">Admin Console</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">System Admin</p>
              </div>
              <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" data-alt="professional male admin profile picture in a soft lit office setting with modern aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeE5AgN-idmLG-49IgteXk-J-8C3u32ZrR6dEKquPDpJk81tvuIWrQaGVqUXYBqCqq7tfIUgj8mq7zWK3c_mQlZTRrLdvfOJHyPNiCZBORboeNYn2FJ5q52nRzYwaTBt4Kp7m-FRCBCLOx3Ac4WVe9O5dM6HVCnWMV0HNX5KfX21lE5dJktqRvPRkxcvC0NBUxES2GcWmH0OzDBahtoD1UlA1JexhytBE6LJVsLUxc2mHBUm_2TGlBKv7PxHHU7J3LTJ5nRQ6K7Jk" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-[280px] pt-16 min-h-screen">
        <div className="p-margin max-w-container-max mx-auto">
          {/* Breadcrumbs & Actions */}
          <div className="flex items-center justify-between mb-lg">
            <div>
              <nav className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                <span>Admin</span>
                <span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
                <span className="text-emerald-700 font-medium">Farmers</span>
              </nav>
              <h2 className="font-h1 text-h1 text-slate-900">Farmers Management</h2>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-label-md shadow-sm hover:bg-slate-50 transition-all">
                <span className="material-symbols-outlined text-[20px]" data-icon="file_download">file_download</span>
                Export CSV
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-label-md shadow-sm hover:opacity-90 transition-all active:scale-95">
                <span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                Add New Farmer
              </button>
            </div>
          </div>

          {/* Stats Overview - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-lg">
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <span className="material-symbols-outlined text-emerald-700" data-icon="groups">groups</span>
                </div>
                <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px] font-bold">
                  <span className="material-symbols-outlined text-[12px]" data-icon="trending_up">trending_up</span> 12%
                </span>
              </div>
              <div className="mt-4">
                <p className="text-slate-500 font-label-sm uppercase tracking-wider">Total Farmers</p>
                <p className="text-h2 font-h2 text-slate-900">2,842</p>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <span className="material-symbols-outlined text-blue-700" data-icon="verified">verified</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-slate-500 font-label-sm uppercase tracking-wider">Verified</p>
                <p className="text-h2 font-h2 text-slate-900">2,410</p>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-amber-50 rounded-lg">
                  <span className="material-symbols-outlined text-amber-700" data-icon="pending_actions">pending_actions</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-slate-500 font-label-sm uppercase tracking-wider">Pending</p>
                <p className="text-h2 font-h2 text-slate-900">384</p>
              </div>
            </div>
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-rose-50 rounded-lg">
                  <span className="material-symbols-outlined text-rose-700" data-icon="error">error</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-slate-500 font-label-sm uppercase tracking-wider">Rejected</p>
                <p className="text-h2 font-h2 text-slate-900">48</p>
              </div>
            </div>
          </div>

          {/* Filters Section */}
          <div className="bg-white border border-outline-variant rounded-t-xl p-md flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 font-label-md hover:bg-slate-100 transition-all">
                <span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
                Filters
              </button>
              <div className="h-6 w-px bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Status:</span>
                <select className="text-xs border-none bg-emerald-50 text-emerald-800 rounded-full py-1 pl-2 pr-8 font-bold focus:ring-0">
                  <option>All Status</option>
                  <option>Verified</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </select>
              </div>
            </div>
            <div className="text-sm text-slate-500">
              Showing <span className="font-bold text-slate-900">1-10</span> of 2,842 farmers
            </div>
          </div>

          {/* Farmers Table */}
          <div className="bg-white border-x border-b border-outline-variant rounded-b-xl shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-y border-slate-200">
                <tr>
                  <th className="px-lg py-3 text-[12px] font-bold text-slate-500 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <input className="rounded text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                      Farmer Name
                    </div>
                  </th>
                  <th className="px-lg py-3 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Farm Name</th>
                  <th className="px-lg py-3 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Location</th>
                  <th className="px-lg py-3 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Verification Status</th>
                  <th className="px-lg py-3 text-[12px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <input className="rounded text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                      <img className="w-10 h-10 rounded-full object-cover" data-alt="portrait of a weather-beaten farmer in a straw hat with a warm smile and blue overalls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4hi2YESVSVme-HXrhvnlpYBrGSAAdZHBeh5M8YAuOmcX2j2OXvURYdisYlMAjN3cMLcQmnzEfDKNLd-Jr6azJElB2_4PYCxj3P8QvqrTSPX7sbw_vwNmtDJftSEtMUPBm-blq0K5_euGZHDslB2bltI5DoU-ezNbrPRouBLU6TA2rzLJtBsOp5GG74aRWco5KYv-4vzvAHEbnSNMQJd-3xVda_mAHuGNqJc2xZFrPAJLdi4UUvWPrIks5NKwNfUhilFpJfRRlTu0" />
                      <div>
                        <p className="font-label-md text-slate-900">Benjamin Cooper</p>
                        <p className="text-xs text-slate-500">ben.cooper@farmmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <p className="text-body-sm text-slate-700">Green Valley Orchards</p>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1 text-body-sm text-slate-600">
                      <span className="material-symbols-outlined text-[16px] text-slate-400" data-icon="location_on">location_on</span>
                      Oregon, USA
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Verified
                    </span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-700 font-bold text-xs hover:bg-emerald-50 transition-colors">
                      View Profile
                    </button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <input className="rounded text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                      <img className="w-10 h-10 rounded-full object-cover" data-alt="close-up of a middle aged female farmer looking into the distance with a field in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiwwQ0j31EP6f-vg_lcpInWlHtHpUO3Y_OEzpxZjTix7Th5IW1LKlROGBgvT1JrtDzsdZVxm6XPEWhCsS75-8owOJjPMdeCEtpEubi-Kd68qnin7-AU8UnjmJJFhRczIMUW5rEarIvqLLObeq8ayvWcAbVaDVR2NZ8rYSjESEO7u4Y73vvdFh4VkEhFOF0RJ_NE-K39ONsdWSoaIZJhYA9jBY2gNxuZ7Qdd4inHT-LyYV53FHNgWvoyNzvE7ata4EhZJTUA98K8j4" />
                      <div>
                        <p className="font-label-md text-slate-900">Elena Rodriguez</p>
                        <p className="text-xs text-slate-500">elena.r@agriflow.co</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <p className="text-body-sm text-slate-700">Sun-Drenched Plains</p>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1 text-body-sm text-slate-600">
                      <span className="material-symbols-outlined text-[16px] text-slate-400" data-icon="location_on">location_on</span>
                      Valencia, Spain
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/50 text-amber-700 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                      Pending
                    </span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-700 font-bold text-xs hover:bg-emerald-50 transition-colors">
                      View Profile
                    </button>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <input className="rounded text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <span className="material-symbols-outlined" data-icon="person">person</span>
                      </div>
                      <div>
                        <p className="font-label-md text-slate-900">Marcus Thorne</p>
                        <p className="text-xs text-slate-500">m.thorne@skyfarms.io</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <p className="text-body-sm text-slate-700">Highland Cattle Co.</p>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1 text-body-sm text-slate-600">
                      <span className="material-symbols-outlined text-[16px] text-slate-400" data-icon="location_on">location_on</span>
                      Scotland, UK
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Verified
                    </span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-700 font-bold text-xs hover:bg-emerald-50 transition-colors">
                      View Profile
                    </button>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <input className="rounded text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                      <img className="w-10 h-10 rounded-full object-cover" data-alt="young male farmer in a modern greenhouse using a tablet to monitor plants with natural sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE2ru1If37WKusu5tUeVzjcMDyj3VG3MY5Z74TQxFo2pSaG0JHn4YZ-wb_37YQ1IzgxyuTRNm-xbJCChVyesME7FYNVSm0wJPgB6iLTogYIxSHdquSkL798-_ba-waZb0nZYjSxMuPjiu2ruh4PqLoJPhOWo4b0q37ZMaw7TMDqOSMf52AgoZZK6OyxTGvAEia_k6Y-r58FnwMi16wcVVGc6rOGfxbjaJW0HF3EKA6W9IeQdVctfka42jVYls4tmvjxU-mNFTTKNQ" />
                      <div>
                        <p className="font-label-md text-slate-900">Li Wei</p>
                        <p className="text-xs text-slate-500">liwei@technogrow.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <p className="text-body-sm text-slate-700">Digital Hydroponics</p>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1 text-body-sm text-slate-600">
                      <span className="material-symbols-outlined text-[16px] text-slate-400" data-icon="location_on">location_on</span>
                      Suzhou, China
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/50 text-rose-700 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                      Rejected
                    </span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-700 font-bold text-xs hover:bg-emerald-50 transition-colors">
                      View Profile
                    </button>
                  </td>
                </tr>
                {/* Row 5 */}
                <tr className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-3">
                      <input className="rounded text-emerald-600 focus:ring-emerald-500" type="checkbox" />
                      <img className="w-10 h-10 rounded-full object-cover" data-alt="a confident african woman farmer standing in a field of sunflowers during sunset with a beautiful golden sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6arzbFWnpa5muTQ42JJSF2S-lijfJaacqNls-QsgyrBaUu2WHfJrGeNZnuf-HOdEIUqnEeREVmM-7oSNbNuHZd-W78YSlOlK6krUalz5ah5ZGh_fDjJ6NSJgWzDzTPaOKW_hJE8rDoNwMUHlznw5UVUm43FBPpdOiE4LTAPXIFCay87zE3kLTV_wNtvnD-M-62g7XDl5V639wta9P9Rf-x1dsvAQBtbjrZi216xB5up2F4ySGch1utsf1BMpbQgKKbW__8LexYIo" />
                      <div>
                        <p className="font-label-md text-slate-900">Amara Okafor</p>
                        <p className="text-xs text-slate-500">amara.o@harvestlink.org</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <p className="text-body-sm text-slate-700">Sunrise Harvests</p>
                  </td>
                  <td className="px-lg py-4">
                    <div className="flex items-center gap-1 text-body-sm text-slate-600">
                      <span className="material-symbols-outlined text-[16px] text-slate-400" data-icon="location_on">location_on</span>
                      Enugu, Nigeria
                    </div>
                  </td>
                  <td className="px-lg py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Verified
                    </span>
                  </td>
                  <td className="px-lg py-4 text-right">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-700 font-bold text-xs hover:bg-emerald-50 transition-colors">
                      View Profile
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pagination */}
            <div className="px-lg py-4 flex items-center justify-between bg-slate-50/30">
              <button className="flex items-center gap-1 text-slate-500 hover:text-emerald-700 transition-colors disabled:opacity-50" disabled>
                <span className="material-symbols-outlined text-[20px]" data-icon="chevron_left">chevron_left</span>
                Previous
              </button>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white font-bold text-xs">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded text-slate-600 hover:bg-slate-100 font-bold text-xs">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded text-slate-600 hover:bg-slate-100 font-bold text-xs">3</button>
                <span className="px-1 text-slate-400">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded text-slate-600 hover:bg-slate-100 font-bold text-xs">284</button>
              </div>
              <button className="flex items-center gap-1 text-slate-500 hover:text-emerald-700 transition-colors">
                Next
                <span className="material-symbols-outlined text-[20px]" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function FarmProfilePage() {
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

function BankSetupPage() {
  return (
    <div className="font-body-md text-on-surface" style={{backgroundColor: '#ffffff'}}>
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col py-4 gap-2 z-50">
        <div className="text-2xl font-black text-[#1B6D24] p-6">KIZ FARM</div>
        <nav className="flex flex-col px-4 gap-1">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            Products
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">shopping_cart</span>
            Orders
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">payments</span>
            Earnings
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">chat</span>
            Chat
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-50 text-[#1B6D24] font-semibold border-r-4 border-[#1B6D24] transition-all active:scale-[0.98] font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">person</span>
            Profile
          </a>
        </nav>
      </aside>

      <header className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 h-16 ml-64 max-w-[calc(100%-16rem)]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-gray-500 cursor-pointer">menu</span>
          <h1 className="text-sm font-medium font-['Inter'] text-gray-500">Settings / Payout Setup</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-gray-500 cursor-pointer">notifications</span>
          <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
            <img className="w-full h-full object-cover" data-alt="portrait of a professional modern farmer wearing a clean denim shirt against a soft blurred rural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIzw8bU79uSRiOmiBArpR9-HwghGxhSpKIhW46-NAaARZJ-nqBj9nBYndRCNutO0HXJJxQRdrVmtHAjRsT0euMH3d-5j0V9bwo2aUhSboAMNLN6sX5mBC4BoCvPAb2CkNFb_noAF1ULgKYwkgAk8HEIpu1NSKbMGCKKE9PYMoQQFwSLR_sK427cAIEjyGhm5MXHhusXv3_ssHfH2lRb3PWfkQV33x8-45aOV71TqEZtJDKTbad5Ne3w0DAqT3Uv9NyDwnRQnztivI" />
          </div>
        </div>
      </header>

      <main className="ml-64 pt-24 pb-16 px-margin min-h-screen flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <div className="mb-lg text-center">
            <img className="h-12 mx-auto mb-md" data-alt="KIZ FARM logo featuring a minimalist stylized green leaf integrated with modern agricultural grid patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBosjGPduQz5x-k-CjGD2OtzAiCEOrlZe5mBwWt4-eWKlbVXflLEw-H0NWhDWvLqmFXF3V3o3xyVY1creEwks82vU_697qJo18Kq08fEPQtUlUZ5azyTbaAyRkPuxvE02fGUcA9DSSx3zADPA2a2fW2qCOU2Jy6XIy5RWh6aHOpSnsQ1XM0xCV1WnmL5rkklazKPh4UNd91eB4DyJN5gzf1nf0RHl4jorkCtWaCsWhvyA-gCqjzLV95RPzMUkaxbAIfPdSfS-nunW8" />
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Bank Account Setup</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">Configure your payout details to receive payments for your farm products directly to your bank account.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-7 bg-white border border-gray-200 rounded-xl p-md">
              <form className="space-y-md">
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Bank Name</label>
                  <div className="relative">
                    <select className="w-full h-12 px-4 bg-white border border-outline-variant rounded-lg font-body-md text-on-surface focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all appearance-none cursor-pointer">
                      <option disabled value="" selected>Select your bank</option>
                      <option value="agri-bank">Agricultural Development Bank</option>
                      <option value="rural-trust">Rural Trust Bank</option>
                      <option value="national-agri">National Farmers Credit Union</option>
                      <option value="eco-finance">EcoFinance Rural</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <span className="material-symbols-outlined text-on-surface-variant">keyboard_arrow_down</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Account Holder Name</label>
                  <input className="w-full h-12 px-4 bg-white border border-outline-variant rounded-lg font-body-md text-on-surface focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all" placeholder="Legal name as on bank records" type="text" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Account Number</label>
                    <input className="w-full h-12 px-4 bg-white border border-outline-variant rounded-lg font-body-md text-on-surface focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all" placeholder="10-12 digits" type="text" />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Branch Code / Swift</label>
                    <input className="w-full h-12 px-4 bg-white border border-outline-variant rounded-lg font-body-md text-on-surface focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all" placeholder="e.g. AGRI123" type="text" />
                  </div>
                </div>

                <div className="pt-base">
                  <button className="w-full h-12 bg-[#1B6D24] text-white font-label-sm rounded-lg hover:bg-primary-container transition-colors shadow-sm active:scale-[0.98]" type="submit">
                    Save Bank Details
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-md">
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-md">
                <div className="flex items-start gap-md">
                  <div className="w-10 h-10 rounded-full bg-[#1B6D24]/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#1B6D24]" data-weight="fill">verified_user</span>
                  </div>
                  <div>
                    <h3 className="font-label-sm text-label-sm text-on-surface mb-xs">Security &amp; Privacy</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Your data is encrypted using industry-standard AES-256 protocols. KIZ FARM does not store your full account credentials—only the necessary routing information for verified payouts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-outline-variant rounded-xl p-md overflow-hidden group">
                <div className="relative h-40 -mx-md -mt-md mb-md overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="modern irrigation system in a lush green agricultural field under a clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZr8vaz9IUki0I9SKsTYLN96yYsO74_eW1DO3zE67h7cTvTbjfmLaRcHvrgrh0lV8jg1jT0kY2xU5GJ1phwuF_m2iGoG-wYMCW8IE8S41zIsp52qrFoupy1iGFX-tipO_f7Z023Y6IJKaVCYcWZkRdVcSuE9o8rKRk3tiYzVb4XFB-emI1sr1JVdJYaf6Ic2GzDaiP-KnBwHc3qSHF2jplEhSe20-YgzlrV9vssEQ-f69fkTSVC83AjRHMzOk2l2MvTX8t1s8q9aE" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-md">
                    <span className="text-white font-label-sm">Grow your business with Kiz Farm</span>
                  </div>
                </div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs">Need Help?</h4>
                <p className="text-label-xs font-label-xs text-on-surface-variant">Our support team is available 24/7 for financial verification assistance.</p>
                <a className="inline-flex items-center gap-1 mt-md text-[#1B6D24] font-label-sm hover:underline" href="#">
                  Contact Support
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-lg border-t border-outline-variant pt-md flex flex-wrap justify-center gap-md">
            <div className="flex items-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-sm">lock</span>
              <span className="text-label-xs font-label-xs">PCI DSS Compliant</span>
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-sm">shield</span>
              <span className="text-label-xs font-label-xs">SSL Secured Connection</span>
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-sm">payments</span>
              <span className="text-label-xs font-label-xs">Direct Deposit Enabled</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ChatWithBuyerPage() {
  return (
    <div className="font-body-md text-on-surface" style={{backgroundColor: '#fbf9f8'}}>
      {/* NavigationDrawer */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col py-4 gap-2 z-50">
        <div className="text-2xl font-black text-[#1B6D24] p-6">KIZ FARM</div>
        <nav className="flex-1 px-4 space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span>Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span>Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span>Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined" data-icon="payments">payments</span>
            <span>Earnings</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-50 text-[#1B6D24] font-semibold border-r-4 border-[#1B6D24] transition-all font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined" data-icon="chat" style={{fontVariationSettings: "'FILL' 1"}}>chat</span>
            <span>Chat</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all font-['Inter'] text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined" data-icon="person">person</span>
            <span>Profile</span>
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen flex flex-col relative">
        {/* TopAppBar */}
        <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-white/90 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 z-40">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img alt="KIZ FARM Logo" className="h-8 w-auto" data-alt="Official logo of KIZ FARM featuring minimalist agricultural symbol and professional typography in primary green color" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYgFVPPXEssW2w27IwCwuiL9MpI-8H4NgrrRokyMeDLEBnZlXIQoqbTkylOVSfs5kjCCJyFhCBKPi2hjP82lz6AILDQEN9tPXDg1J8w61BiIHBQr2U2Ld1fcHUmLSTaAozarbsoBE7A_Kd1ywcOHAvbuv6NlyNWra4mIO7wIblcypLzuyg3arQeW5xTyorEfjQuuMSi_2NERaYwP_XFYYVlHi1bwHKgylOAJyuRClzHozWdGlr8JSz2IbYnfzzV0RIQhFDEKyEIl4" />
              <span className="text-xl font-black tracking-tighter text-[#1B6D24]">KIZ FARM</span>
            </div>
            <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
                <img alt="Buyer Portrait" className="w-full h-full object-cover" data-alt="Professional headshot of a middle-aged male buyer with a friendly expression in an office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3yRjkGS9mNdtWN5yxP4fg-2VOisT766Tdd7Q-JBmHWGdPFhmD2XFXwwninC8i0ze636iPL_M9xjwi_02XCMcsPkzfrN1B4xVFCt007UC5pDYrVzjKjRMw2r9tonisvlWViQ-6TGTdkwk2EsbxE3u9IQ_wizzKRdz8IIcgUR71BXILxcQod6ABk6w4X28715x1VKOLHryMrCS6rysUabRZjcBHF2htnSH9kStE5f8KYlVs8b0BsOXgyeamUyoQEJ2KEO5tD4xr_LU" />
              </div>
              <div>
                <p className="font-label-sm text-on-surface">James Wilson</p>
                <p className="text-[10px] text-primary font-bold">VERIFIED BUYER</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-50 transition-colors text-gray-500">
              <span className="material-symbols-outlined" data-icon="search">search</span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-50 transition-colors text-gray-500">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-50 transition-colors text-gray-500">
              <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
            </button>
          </div>
        </header>

        {/* Chat Container */}
        <div className="mt-16 flex-1 flex flex-col max-w-5xl mx-auto w-full bg-white border-x border-gray-100">
          {/* Safety Banner */}
          <div className="bg-primary/5 px-6 py-3 flex items-center justify-center gap-2 border-b border-primary/10">
            <span className="material-symbols-outlined text-primary text-sm" data-icon="gpp_maybe">gpp_maybe</span>
            <p className="font-label-sm text-primary">Keep all transactions inside <span className="font-bold">KIZ FARM</span> for safety</p>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-8 space-y-6 overflow-y-auto bg-surface-bright">
            {/* Date Separator */}
            <div className="flex justify-center">
              <span className="px-4 py-1 bg-surface-container-low rounded-full font-label-xs text-on-surface-variant">Today</span>
            </div>

            {/* Left Message (Buyer) */}
            <div className="flex gap-4 max-w-[80%]">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex-shrink-0 overflow-hidden">
                <img alt="Buyer" className="w-full h-full object-cover" data-alt="Portrait of James Wilson, verified buyer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgi7tjxh9BgxyXKo6bXQnzEAIKy8DiFzZYtPMbi-sP557kGiEnBNeezof3FuYqNwUVahNfmx5JzJjfSH5qQsslUdg-erQS-rxoreV0fNULD3bwvC-7HoprbLM9F5M7s6nY9Uytoc6eCix7stH8aK5_UFnN5F8a2JCqjpBmi5AlOtypI8uruAeuh5rJtHHoh6vLQVj8ks6y5XuLLnv9uRvo7dVhl_lsYhe7PEaL4IOgz-245gC_hc7lpoqJbi7mu41gMD8IXaTKfq0" />
              </div>
              <div className="space-y-1">
                <div className="bg-white border border-outline-variant p-4 rounded-2xl rounded-tl-none shadow-sm">
                  <p className="font-body-md text-on-surface">Hello! I saw your listing for the Organic Gala Apples. Are they still available for bulk purchase this week?</p>
                </div>
                <p className="font-label-xs text-on-surface-variant ml-1">09:15 AM</p>
              </div>
            </div>

            {/* Right Message (Farmer) */}
            <div className="flex flex-row-reverse gap-4 ml-auto max-w-[80%]">
              <div className="w-10 h-10 rounded-full bg-primary-container flex-shrink-0 overflow-hidden">
                <img alt="Farmer" className="w-full h-full object-cover" data-alt="Smiling experienced farmer wearing a plaid shirt and a wide-brimmed hat in a sun-drenched orchard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9cyxvbx4rZB3ubJAijEKlMYe_QOBMGfm-kUUfu6yBTFRPWEZ2KocBZgiX8XJzQmcMejnKqWiysbYqncxJPxFpQxODpTyT-_QiAfQHQ-NMAUxTGm5iIn6jRtlUnJz0GLdUr36mLCwuagDKtf2BYwS6qD211aQC2rwZHhBzYxdHgKKHFlIS3Ss3VZ8nZPD573i_ThDXF4YkNQi1mKz9xyhbRjqkXJ3bSkajgb-hN5VeSzHjIa3thEPBbI2U8sykghZexn46QuD7Qqc" />
              </div>
              <div className="space-y-1 items-end flex flex-col">
                <div className="bg-[#1B6D24] p-4 rounded-2xl rounded-tr-none text-white shadow-md">
                  <p className="font-body-md">Good morning James! Yes, we just finished the harvest yesterday. They are in peak condition right now. How many crates are you looking for?</p>
                </div>
                <p className="font-label-xs text-on-surface-variant mr-1">09:18 AM</p>
              </div>
            </div>

            {/* Left Message (Buyer) */}
            <div className="flex gap-4 max-w-[80%]">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex-shrink-0 overflow-hidden">
                <img alt="Buyer" className="w-full h-full object-cover" data-alt="Portrait of James Wilson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjO2wtCzReDVfq_RDsBvgj51VgCPNGkubkH29LER4FCEmchMI3vmI_g8yfiA69HzBr9XvCe7LMtu7-XprA58AhFwmYQiLmySRZYrwZOycMr8UPZNIXQZgutRW53jzeM0O3z2emQ0zkR7SY1cb6BcWC8Y0oy8JTv0JnaV8ksmYZOERnIR9D_Fqkec2OT0LpnhLvYZUYfahCFW372ScVPpeNyfB-ZWN5MbXsX90t6NprCCFTl78jU5T7GNOdnMgUAf1yeUmvfd3v9xA" />
              </div>
              <div className="space-y-1">
                <div className="bg-white border border-outline-variant p-4 rounded-2xl rounded-tl-none shadow-sm">
                  <p className="font-body-md">I'd like about 50 crates if possible. Could you send over a couple of photos of the current batch? Just want to check the sizing.</p>
                </div>
                <p className="font-label-xs text-on-surface-variant ml-1">09:20 AM</p>
              </div>
            </div>

            {/* Right Message (Farmer - Image Share) */}
            <div className="flex flex-row-reverse gap-4 ml-auto max-w-[80%]">
              <div className="w-10 h-10 rounded-full bg-primary-container flex-shrink-0 overflow-hidden">
                <img alt="Farmer" className="w-full h-full object-cover" data-alt="Smiling farmer in orchard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1dN9qfpI7A6-xRgUrSfz0fIjmBfCrZ2cZbThiSxW5smcIpDDuoF2jI1bLhqDehSgrLqIR0ITdHi6GEP5jhLimkcWc0nJvVrhP7tnLzwQApx5FycwofO9tLqm4YYbiNXYm0HfjW1r6ni_nyNiCGbDlnULAP_C9eggsi3JauJojUKHgt-HhLSYNjIt0mSjS0Vmr_VRzQvELf149IEgSgDN9w0AZ4Wtm6mIHMYuPAoKMPONhQ99hHwXs-8CTfJXO5R6t85ddLR3lUiM" />
              </div>
              <div className="space-y-1 items-end flex flex-col">
                <div className="bg-[#1B6D24] p-2 rounded-2xl rounded-tr-none text-white shadow-md">
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="rounded-xl overflow-hidden aspect-square">
                      <img alt="Fresh Apples" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" data-alt="Close-up of vibrant red Gala apples in a wooden harvest crate with natural morning light and visible water droplets" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkrj4ijr1P7QGM2m9XUIs-GfmA04jd96PLiEeblv98fN-mss1_0_6pX5P2N7TSppIYK8hTjZWGYPJmZyREUb-q-hZNyt-1qh5dZZ2WIRngmu9dog8QXMNKgXJm7StoYfxvf82Ven3Z3GK1k4C_KHpd-W0H6Vd2xlUPLs4crdcWX6IBYNzDBYT2BwJ58IJN4Yr5mAICOcB8RSOEJVG7IrOsTmYRYPsAWyivlFoVUkVxEVAglP8cSNw2gWTJgBwhlSzhiWcQyJ51RoY" />
                    </div>
                    <div className="rounded-xl overflow-hidden aspect-square">
                      <img alt="Apple Quality Check" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" data-alt="A crate full of shiny organic apples being inspected by a hand in the sunlight, showing uniform size and deep color" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEXCtixNuhPa9jkolmcDY1k01A48NKCnBJjuG00U-wbEZOMLRhSmbRAigN1cpHBQKk3cPiT3Xa8y4ArO8luCid9Oy92K31qOr_9VWtiQMXXrYGcNDMj23Hi2baKaZfMB9mkbJBb0Gp1APMG8qoWTK0a6huIl4WdVIYoXZArsrtC_aNwZAkAdGPi-cjg8SpjwhczoAWKR3Ck-Vb7HXHMcZIBQfnmp0HLRdk53c8gsTUh2fgqExJLiiCt4PKwWpYEFRv2Y8huakdz3U" />
                    </div>
                  </div>
                  <div className="px-2 pb-2">
                    <p className="font-body-md">Absolutely! Here are some shots from the packing shed. The sizing is very consistent this year, mostly 70-80mm.</p>
                  </div>
                </div>
                <p className="font-label-xs text-on-surface-variant mr-1">09:22 AM</p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-end gap-3 bg-surface-container-low rounded-3xl p-3 border border-outline-variant focus-within:border-primary-container focus-within:ring-2 focus-within:ring-primary/5 transition-all">
                <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                </button>
                <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined" data-icon="image">image</span>
                </button>
                <textarea className="flex-1 bg-transparent border-none focus:ring-0 font-body-md resize-none py-2 px-1 text-on-surface placeholder:text-on-surface-variant/50" placeholder="Type your message to James..." rows={1}></textarea>
                <button className="bg-[#1B6D24] text-white p-3 rounded-full hover:shadow-lg active:scale-95 transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined" data-icon="send" style={{fontVariationSettings: "'FILL' 1"}}>send</span>
                </button>
              </div>
              <div className="mt-3 flex items-center justify-between px-2">
                <div className="flex gap-4">
                  <button className="flex items-center gap-1 font-label-xs text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined text-base" data-icon="description">description</span>
                    Send Quote
                  </button>
                  <button className="flex items-center gap-1 font-label-xs text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined text-base" data-icon="location_on">location_on</span>
                    Farm Location
                  </button>
                </div>
                <p className="font-label-xs text-on-surface-variant/60 italic">James is typing...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function FarmerPayoutHistoryPage() {
  return (
    <div className="text-on-background" style={{backgroundColor: '#fbf9f8', fontFamily: "'Inter', sans-serif"}}>
      {/* Navigation Drawer */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col py-4 gap-2 z-50">
        <div className="px-6 py-4 mb-4 flex items-center gap-3">
          <img alt="KIZ FARM Logo" className="w-8 h-8 rounded" data-alt="minimalist professional logo for an agricultural brand featuring stylized green leaves in a circular motif" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1vgCzToRMfEFvCXL-IMB9fs60_rd3oVPNvQf99bxBmwO4sT2em5RRteb_fETOQQys9RvmUI-eOXetQPbQ1udSNZ0mo0ZlGVeOqQSreuw3xDUdeJpyBp0be2ooEHXhmb7OEzWJZwKpNbjjjBl42F4PNU5PE4Uf2N_oBxtIe3GF2vVPm6X4rNubHd_w7exw8To15ycC979zEg_jC9dAGPn15yBPMitQM3ImSBj-NBJ5V5e-_jLEMeqotmoIAPNZt74J9w0bb2bnKAA" />
          <span className="text-2xl font-black text-[#1B6D24] tracking-tight">KIZ FARM</span>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-gray-600 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="font-label-sm text-label-sm">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-gray-600 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span className="font-label-sm text-label-sm">Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-gray-600 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span className="font-label-sm text-label-sm">Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all bg-green-50 text-[#1B6D24] font-semibold border-r-4 border-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="payments">payments</span>
            <span className="font-label-sm text-label-sm">Earnings</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-gray-600 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="chat">chat</span>
            <span className="font-label-sm text-label-sm">Chat</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-gray-600 hover:bg-gray-50 hover:text-[#1B6D24]" href="#">
            <span className="material-symbols-outlined" data-icon="person">person</span>
            <span className="font-label-sm text-label-sm">Profile</span>
          </a>
        </nav>
        <div className="px-4 mt-auto border-t border-gray-100 pt-4">
          <div className="bg-surface-container-low p-4 rounded-xl">
            <p className="font-label-xs text-label-xs text-on-surface-variant mb-2">FIELD AGENT</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white font-bold">OA</div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface">Oluwaseun A.</p>
                <p className="text-[10px] text-on-surface-variant">Oyo State Sector</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Top AppBar */}
      <header className="fixed top-0 right-0 left-64 h-16 bg-white/90 backdrop-blur-md border-b border-gray-100 z-40 flex items-center justify-between px-8">
        <h1 className="font-headline-md text-headline-md text-[#1B6D24]">Payout History</h1>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 text-gray-500 transition-colors">
            <span className="material-symbols-outlined" data-icon="search">search</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 text-gray-500 transition-colors relative">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
          </button>
          <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1B6D24] text-white rounded-lg font-medium text-sm transition-all active:scale-95">
            <span className="material-symbols-outlined text-sm" data-icon="download">download</span>
            Export CSV
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-64 pt-16 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          {/* Summary Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Total Earnings */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-9xl text-[#1B6D24]" data-icon="payments">payments</span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Total Earnings</p>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">₦4,250,000</h3>
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
                <span className="font-label-xs text-label-xs">+12.5% from last month</span>
              </div>
            </div>

            {/* Pending Payouts */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-9xl text-tertiary" data-icon="schedule">schedule</span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Pending Payouts</p>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">₦185,000</h3>
              <div className="flex items-center gap-2 text-tertiary">
                <span className="material-symbols-outlined text-sm" data-icon="hourglass_empty">hourglass_empty</span>
                <span className="font-label-xs text-label-xs">Next payout in 3 days</span>
              </div>
            </div>

            {/* Last Payout */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-9xl text-[#1B6D24]" data-icon="check_circle">check_circle</span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Last Payout</p>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">₦450,000</h3>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm" data-icon="event">event</span>
                <span className="font-label-xs text-label-xs">Oct 12, 2023</span>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-xl">
            <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface">Recent Transactions</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Viewing your last 10 payout activities</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Filter</button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Date Range</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low border-b border-gray-100">
                    <th className="px-8 py-4 font-label-xs text-label-xs text-on-surface-variant uppercase">Payout ID</th>
                    <th className="px-8 py-4 font-label-xs text-label-xs text-on-surface-variant uppercase">Date</th>
                    <th className="px-8 py-4 font-label-xs text-label-xs text-on-surface-variant uppercase">Amount (₦)</th>
                    <th className="px-8 py-4 font-label-xs text-label-xs text-on-surface-variant uppercase">Reference</th>
                    <th className="px-8 py-4 font-label-xs text-label-xs text-on-surface-variant uppercase">Status</th>
                    <th className="px-8 py-4 font-label-xs text-label-xs text-on-surface-variant uppercase text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {/* Row 1 */}
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="px-8 py-5 font-label-sm text-label-sm text-on-surface">#PO-23941</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Oct 28, 2023</td>
                    <td className="px-8 py-5 font-headline-md text-body-md text-on-surface font-semibold">₦210,000</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Q4 Maize Harvest - Batch A</td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-[#1B6D24] text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B6D24]"></span>
                        PAID
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-on-surface-variant hover:text-[#1B6D24] transition-colors">
                        <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="px-8 py-5 font-label-sm text-label-sm text-on-surface">#PO-23940</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Oct 24, 2023</td>
                    <td className="px-8 py-5 font-headline-md text-body-md text-on-surface font-semibold">₦185,000</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Soybean Bonus Payment</td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                        PENDING
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-on-surface-variant hover:text-[#1B6D24] transition-colors">
                        <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="px-8 py-5 font-label-sm text-label-sm text-on-surface">#PO-23938</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Oct 15, 2023</td>
                    <td className="px-8 py-5 font-headline-md text-body-md text-on-surface font-semibold">₦450,000</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Bulk Grain Settlement</td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-[#1B6D24] text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B6D24]"></span>
                        PAID
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-on-surface-variant hover:text-[#1B6D24] transition-colors">
                        <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="px-8 py-5 font-label-sm text-label-sm text-on-surface">#PO-23935</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Oct 02, 2023</td>
                    <td className="px-8 py-5 font-headline-md text-body-md text-on-surface font-semibold">₦98,000</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Irrigation Subsidy</td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-[#1B6D24] text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B6D24]"></span>
                        PAID
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-on-surface-variant hover:text-[#1B6D24] transition-colors">
                        <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="px-8 py-5 font-label-sm text-label-sm text-on-surface">#PO-23930</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Sep 28, 2023</td>
                    <td className="px-8 py-5 font-headline-md text-body-md text-on-surface font-semibold">₦1,200,000</td>
                    <td className="px-8 py-5 font-body-md text-body-md text-on-surface-variant">Annual Performance Bonus</td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-[#1B6D24] text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B6D24]"></span>
                        PAID
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-on-surface-variant hover:text-[#1B6D24] transition-colors">
                        <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="px-8 py-4 border-t border-gray-50 flex items-center justify-between bg-surface-container-lowest">
              <p className="font-body-md text-label-xs text-on-surface-variant">Showing 1-5 of 42 results</p>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:text-[#1B6D24] hover:bg-gray-50 transition-all">
                  <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1B6D24] text-white text-xs font-bold">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-xs font-medium">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-xs font-medium">3</button>
                <span className="px-1 text-gray-400">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-xs font-medium">9</button>
                <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:text-[#1B6D24] hover:bg-gray-50 transition-all">
                  <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Visual Insight / Support Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-xl">
            <div className="bg-primary-container rounded-2xl p-8 text-white flex items-center gap-8 relative overflow-hidden">
              <div className="z-10 flex-1">
                <h4 className="font-headline-md text-headline-md mb-2">Automate Your Payouts</h4>
                <p className="font-body-md text-on-primary-container mb-6 opacity-90">Link your bank account to receive automatic daily settlements for every successful sale.</p>
                <button className="px-6 py-3 bg-white text-[#1B6D24] rounded-lg font-bold text-sm shadow-sm hover:bg-gray-50 transition-all active:scale-95">Link Bank Account</button>
              </div>
              <div className="hidden lg:block z-10">
                <img alt="App interface" className="w-48 h-auto drop-shadow-2xl rounded-lg" data-alt="close-up of a high-tech farming management app showing financial charts on a smartphone screen against a soft green background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQeyQmwBWqKo-S8Fkd-nwIoFibSjoAsSqUEWFJhmQzJJqoCflIzi8FnPEC7di3u09nTOki9BTOIqbg8GDghzl-fl4AUEGOM8_w2PIw_S-U6_29XayWnx4TcEOB9yPZkAdg1gmxVEZunng0apnZdHDi9-ioYRLQJNhmV8d4UIoZbOkdtnu8rwwko-sr9RM7Lb57pDiSyvax44qqVjTSJGzKfVde4wDAqtQ8O_bSy4vuBcWmbaP8tPKaEczhPtuYB_GKt-8G5D8qBEs" />
              </div>
              {/* Decorative element */}
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1B6D24]" data-icon="help_center">help_center</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface">Payment Support</h4>
                </div>
                <p className="font-body-md text-on-surface-variant mb-6">Having trouble with a specific payout? Our finance team is available 24/7 to help you resolve any discrepancies.</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" data-alt="professional headshot of a female finance support agent with a friendly expression" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfaTTMjK8kbYqvf_xAScrSuW5Z19CMCyG62Wy9ZBFS8PRCK_GVt8Mex5sSv78SEcAAHJWnNonfPfJwMteBCJGOZl2hkVK7sDAAFmCmIpPUWBUjQjOQIEAldp1ZKAS4OIWsZDBLFBjvZ7Qw1PnzmIkLLomFMWObTcOJWMCaTnkZ5VPNHJb5MoRSLJgoJm8HsTmnD3D2Ijb8HFjzlqhBAOI8zFQGvbFdIbUcWzxqewIMw7PzqQRGGHOQT4dlC03eFNlt7eQ6jedRZa4')"}}></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300" data-alt="professional headshot of a male customer success representative wearing a headset" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGYhpyKID3JqUoCEeUoGmpHr8xlc9p5iCG2ZAjrHOMSyb7qmkEv5tpllDZQPEICrB84v2BtIRD3vVFUtSJPrEFw2Ty8c2-Y1DZqeqGsJThH-m4sCaMODjAI5llqF5KdFhauKBtHoomYsrEEBstGrp2J_gX7QNV0ge3A3nGY8w6Ypdpy9RH1Xia2tD5ORNON_db0P8CZQbcXwIDgXsGcD8-gxsTyRpap6pU8VHQgcv0hD6Yuy_H9Qys9gA8-0yJrBNj4zZOZ4SWZqk')"}}></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#1B6D24] flex items-center justify-center text-[10px] text-white font-bold">+3</div>
                </div>
                <button className="text-[#1B6D24] font-bold text-sm hover:underline">Contact Support Team</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAB for quick action */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#1B6D24] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined" data-icon="add" style={{fontVariationSettings: "'FILL' 0, 'wght' 600"}}>add</span>
      </button>
    </div>
  );
}

function BuyerMessagesPage() {
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

      {/* Contextual FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#1B6D24] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined" data-icon="add">add</span>
      </button>
    </div>
  );
}

function FarmerDashboardPage() {
  return (
    <div className="bg-background text-on-background font-body-md">
      {/* TopAppBar Shell */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-16 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors active:scale-95 duration-150">
            <span className="material-symbols-outlined text-[#1B6D24]">menu</span>
          </button>
          <div className="flex items-center gap-2">
            <img alt="KIZ FARM logo" className="w-8 h-8 rounded-lg" data-alt="Kiz Farm official logo featuring a green letter K with a red swoosh and text 'KIZ FARM' in grey and green" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
            <span className="text-lg font-black tracking-tighter text-[#1B6D24] uppercase">KIZ FARM</span>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex gap-6 mr-6">
            <a className="text-[#1B6D24] font-bold font-sans text-sm tracking-wide" href="#">Dashboard</a>
            <a className="text-zinc-600 dark:text-zinc-400 font-sans text-sm font-medium tracking-wide hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors" href="#">Products</a>
            <a className="text-zinc-600 dark:text-zinc-400 font-sans text-sm font-medium tracking-wide hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors" href="#">Orders</a>
          </div>
          <button className="p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors active:scale-95 duration-150">
            <span className="material-symbols-outlined text-[#1B6D24]">notifications</span>
          </button>
          <div className="h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center overflow-hidden">
            <img alt="Profile" className="w-full h-full object-cover" data-alt="professional portrait of a modern agricultural manager in a sunlit office environment, soft focused background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT2HclsEB9Yb66Q53Me0MHLaAf-GAgts5hWC2uXyOU1aFF_AjchObMx8_CtA_JgfKjjNqXSlOz3TTmVjAf_H2ruKu-rpCfLtb0-OfzixXg685X_5wB3lLKP9WBzOAMB7_mGbovKKd05gVSTXfj9HFkl_2-4ZiizOmfCD4fz9_0hpirG_hAQzaULEG0BfXDieQUPbuDDff_aWBMYnY0G5AcvBcqbWUK0wuIxpCKGSSg-_h189frunVi70sHx14WxKnaM4HGFNsC1uQ" />
          </div>
        </div>
      </header>

      <div className="flex min-h-screen">
        {/* NavigationDrawer (Sidebar) */}
        <aside className="hidden md:flex fixed inset-y-0 left-0 w-64 z-[60] flex-col bg-white dark:bg-zinc-950 border-r border-zinc-100 dark:divide-zinc-900 mt-16 shadow-2xl dark:shadow-none">
          <div className="px-6 py-4">
            <span className="text-xl font-bold text-[#1B6D24]">Seller Portal</span>
          </div>
          <nav className="flex-1 space-y-1 px-3">
            <a className="flex items-center gap-3 px-3 py-3 bg-green-50 dark:bg-green-950/30 text-[#1B6D24] font-semibold border-r-4 border-[#1B6D24] transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
              Dashboard
            </a>
            <a className="flex items-center gap-3 px-3 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">inventory_2</span>
              Products
            </a>
            <a className="flex items-center gap-3 px-3 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">shopping_cart</span>
              Orders
            </a>
            <a className="flex items-center gap-3 px-3 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">payments</span>
              Earnings
            </a>
            <a className="flex items-center gap-3 px-3 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">chat</span>
              Chat
            </a>
          </nav>
          <div className="p-4 mt-auto">
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
              <p className="text-label-xs font-label-xs text-primary mb-2">FARM STATUS</p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-label-sm font-label-sm">Operational</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 p-4 md:p-8 space-y-8 max-w-[1440px] mx-auto w-full">
          {/* Page Header & Quick Actions */}
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-headline-lg font-headline-lg text-on-surface">Farm Overview</h1>
              <p className="text-body-md font-body-md text-secondary">Manage your crops, sales, and orders in one place.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 h-[48px] border border-[#1B6D24] text-[#1B6D24] rounded-lg font-label-sm hover:bg-zinc-50 transition-colors active:scale-95 duration-150">
                <span className="material-symbols-outlined">receipt_long</span>
                View Orders
              </button>
              <button className="flex items-center gap-2 px-6 h-[48px] bg-[#1B6D24] text-white rounded-lg font-label-sm hover:opacity-90 transition-colors active:scale-95 duration-150">
                <span className="material-symbols-outlined">add</span>
                Add Product
              </button>
            </div>
          </section>

          {/* Stats Bento Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="bg-white p-6 rounded-xl border border-zinc-200 flex flex-col justify-between group hover:border-primary/20 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-50 rounded-lg text-primary">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-[10px] font-bold">+12.5%</span>
              </div>
              <div>
                <p className="text-label-xs font-label-xs text-secondary mb-1">Total Sales</p>
                <p className="text-headline-md font-headline-md">$24,592.00</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-zinc-200 flex flex-col justify-between group hover:border-primary/20 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-50 rounded-lg text-primary">
                  <span className="material-symbols-outlined">shopping_basket</span>
                </div>
                <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-[10px] font-bold">+8%</span>
              </div>
              <div>
                <p className="text-label-xs font-label-xs text-secondary mb-1">Total Orders</p>
                <p className="text-headline-md font-headline-md">1,284</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-zinc-200 flex flex-col justify-between group hover:border-primary/20 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-50 rounded-lg text-primary">
                  <span className="material-symbols-outlined">potted_plant</span>
                </div>
                <span className="text-zinc-400 bg-zinc-50 px-2 py-1 rounded text-[10px] font-bold">Stable</span>
              </div>
              <div>
                <p className="text-label-xs font-label-xs text-secondary mb-1">Active Products</p>
                <p className="text-headline-md font-headline-md">42</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-zinc-200 flex flex-col justify-between group hover:border-primary/20 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-50 rounded-lg text-primary">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-[10px] font-bold">+18.2%</span>
              </div>
              <div>
                <p className="text-label-xs font-label-xs text-secondary mb-1">Earnings</p>
                <p className="text-headline-md font-headline-md">$18,230.50</p>
              </div>
            </div>
          </section>

          {/* Chart and Weather Widgets */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {/* Sales Chart Mockup */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-zinc-200">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-headline-md font-headline-md">Sales Performance</h3>
                <select className="bg-zinc-50 border-none rounded-lg text-label-xs focus:ring-primary">
                  <option>Last 30 Days</option>
                  <option>Last 6 Months</option>
                </select>
              </div>
              {/* Chart Graphic Representation */}
              <div className="h-[300px] w-full flex items-end justify-between gap-2 pt-4">
                <div className="flex-1 bg-primary/10 h-[40%] rounded-t-sm relative group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$2k</div>
                </div>
                <div className="flex-1 bg-primary/20 h-[60%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary/15 h-[55%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary/30 h-[85%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary/25 h-[70%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary h-[100%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary/40 h-[90%] rounded-t-sm relative group"></div>
              </div>
              <div className="flex justify-between mt-4 text-label-xs text-secondary px-2">
                <span>WK 1</span><span>WK 2</span><span>WK 3</span><span>WK 4</span><span>WK 5</span><span>WK 6</span><span>WK 7</span>
              </div>
            </div>

            {/* Weather Card */}
            <div className="bg-primary text-white p-6 rounded-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -right-10 -top-10 opacity-10">
                <span className="material-symbols-outlined text-[180px]">wb_sunny</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined">location_on</span>
                  <span className="text-label-sm font-label-sm uppercase tracking-widest">Kiz Farm West</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-headline-xl font-headline-xl">28°C</span>
                  <span className="material-symbols-outlined text-4xl">wb_sunny</span>
                </div>
                <p className="text-body-md">Sunny, light breeze</p>
              </div>
              <div className="space-y-3 pt-6 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="text-label-sm">Humidity</span>
                  <span className="font-bold">42%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-label-sm">Soil Moisture</span>
                  <span className="font-bold text-on-primary-container">Optimal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-label-sm">Next Irrigation</span>
                  <span className="font-bold">18:00</span>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Orders Table */}
          <section className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
            <div className="p-6 flex justify-between items-center">
              <h3 className="text-headline-md font-headline-md">Recent Orders</h3>
              <button className="text-[#1B6D24] font-label-sm hover:underline">See all activity</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 border-y border-zinc-100">
                    <th className="px-6 py-4 text-label-xs text-secondary uppercase tracking-wider">Product</th>
                    <th className="px-6 py-4 text-label-xs text-secondary uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-4 text-label-xs text-secondary uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-4 text-label-xs text-secondary uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-label-xs text-secondary uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr className="hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img className="w-10 h-10 rounded-lg object-cover" data-alt="close up of fresh organic potatoes still slightly dusty with soil, rustic agricultural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB311qBSF6EKaUEOIIhCm1rY7QWdhjKVrS9DOTyZV_vc0I9cTaSIfPoWAEHnMCp6YJUXC8DtRrcFtfb_E21_xvjXWTIXpXkxKs-7gLuRS5tLwGpbuFs-t-9ajt6V7Ho5NQmu4oA13kBnOwLOVDASeDoivDcLwEomNZ17iK35j2P0w6BSAwHUCJuOQKZU5l6LPBasyc2IOAcUy8R49eXNCJUzRd4dLFBD7wz0SbRi-5S5ms-B1hd8Rr9vQofrVOy3dsbuqkFiZ379og" alt="Organic Russet Potatoes" />
                      <span className="font-medium text-on-surface">Organic Russet Potatoes</span>
                    </td>
                    <td className="px-6 py-4 text-label-sm text-secondary">#ORD-2849</td>
                    <td className="px-6 py-4 text-label-sm">Sarah Jenkins</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Delivered</span>
                    </td>
                    <td className="px-6 py-4 font-bold text-on-surface">$42.00</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img className="w-10 h-10 rounded-lg object-cover" data-alt="vibrant red ripe tomatoes on the vine in a sun-drenched greenhouse, high-quality agricultural photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8LI2iK4_3I1LD5qc2eF6ViRP4jfr8MwuiwQDgXfYQq6QJrUQKi3e3XanAKA_eyzi5KOXqL6hYz2ca9iO8wVP7sKJbZq3oGYmcpg0kHddYBa8q41pdQVv5O5um7yIWuJD_MuFW-c7PLVy7YV55Lh63Y08iRul-8oImU3T85v8wKpDFHPUaCiy6SmA4--6-Vx2KrCpw79sTEfym1K5k3VAQl3p465yObb3knj0sDe40f3eilNYdOpyNM551dXuh3B5_-ccvuKLqsd8" alt="Vine-Ripened Tomatoes" />
                      <span className="font-medium text-on-surface">Vine-Ripened Tomatoes</span>
                    </td>
                    <td className="px-6 py-4 text-label-sm text-secondary">#ORD-2850</td>
                    <td className="px-6 py-4 text-label-sm">Marcus Chen</td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Processing</span>
                    </td>
                    <td className="px-6 py-4 font-bold text-on-surface">$28.50</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img className="w-10 h-10 rounded-lg object-cover" data-alt="bunches of fresh organic kale with water droplets, deep green colors and textured leaves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiGvs40YDUlE_HghLlhK2WUWEbGkTWZsdJMjCY847W5hCzjmN5hJTMlmwvijb349bOj3GU-5vQfvIiGKugXRwhCbFCZbexnEeX5u9ifsXsT-HrE58GnXhGd05qLTXSDNQmuYaT0GkylbazxWrvitLaOUvR_ngYsTpFYqC5rmMRYjyUuIVEF4aGYXcBqE-58koXC8b1Zyb48O-oDEjKqnt314iUVxaQ9uC1wostzr1ePSEs_RhvSVIfHDiqPQ_HdTU6LbFDWmkDrCk" alt="Curly Kale Bunch" />
                      <span className="font-medium text-on-surface">Curly Kale Bunch</span>
                    </td>
                    <td className="px-6 py-4 text-label-sm text-secondary">#ORD-2851</td>
                    <td className="px-6 py-4 text-label-sm">Local Harvest Co.</td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Shipped</span>
                    </td>
                    <td className="px-6 py-4 font-bold text-on-surface">$156.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>

      {/* BottomNavBar for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 z-50 flex justify-around items-center px-4 pb-safe bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] rounded-t-2xl">
        <a className="flex flex-col items-center justify-center text-[#1B6D24] scale-110 active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>grid_view</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#1B6D24] active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined">potted_plant</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Products</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#1B6D24] active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#1B6D24] active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined">account_balance_wallet</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Earnings</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#1B6D24] active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined">forum</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Chat</span>
        </a>
      </nav>
      {/* Invisible spacer for bottom nav mobile */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
}

function AddProductPage() {
  return (
    <div className="bg-background text-on-surface">
      {/* TopAppBar Shell */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-16 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-none">
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-zinc-600 dark:text-zinc-400 p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors active:scale-95 duration-150">menu</button>
          <div className="flex items-center gap-2">
            <img alt="KIZ FARM logo" className="h-10 w-auto object-contain" data-alt="KIZ FARM corporate logo featuring a large green 'K' with 'KIZ FARM' text in black and a red/green swoosh element" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
            <span className="text-lg font-black tracking-tighter text-[#1B6D24] uppercase">KIZ FARM</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="material-symbols-outlined text-zinc-600 dark:text-zinc-400 p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors active:scale-95 duration-150">notifications</button>
          <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center overflow-hidden border border-zinc-200">
            <img alt="KIZ FARM logo" className="h-10 w-auto object-contain" data-alt="KIZ FARM corporate logo featuring a large green 'K' with 'KIZ FARM' text in black and a red/green swoosh element" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* NavigationDrawer Shell */}
        <aside className="hidden md:flex fixed inset-y-0 left-0 w-64 z-[60] flex-col bg-white dark:bg-zinc-950 rounded-r-lg h-full border-r divide-y divide-zinc-100 dark:divide-zinc-900 shadow-2xl dark:shadow-none mt-16">
          <div className="p-6">
            <h2 className="text-xl font-bold text-[#1B6D24]">Seller Portal</h2>
          </div>
          <nav className="flex-1 py-4">
            <a className="flex items-center gap-4 px-6 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </a>
            <a className="flex items-center gap-4 px-6 py-3 bg-green-50 dark:bg-green-950/30 text-[#1B6D24] font-semibold border-r-4 border-[#1B6D24] transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">inventory_2</span>
              Products
            </a>
            <a className="flex items-center gap-4 px-6 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">shopping_cart</span>
              Orders
            </a>
            <a className="flex items-center gap-4 px-6 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">payments</span>
              Earnings
            </a>
            <a className="flex items-center gap-4 px-6 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out font-sans text-base" href="#">
              <span className="material-symbols-outlined">chat</span>
              Chat
            </a>
          </nav>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 md:ml-64 p-6 md:p-12 max-w-[1440px] mx-auto w-full">
          <header className="mb-lg">
            <nav className="flex items-center gap-2 text-zinc-500 mb-4 font-label-sm text-label-sm">
              <span>Inventory</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-[#1B6D24]">Add New Product</span>
            </nav>
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Add New Farm Product</h1>
            <p className="font-body-md text-body-md text-zinc-500 mt-2">List your fresh harvest or agricultural supplies for buyers across the region.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left: Form Fields */}
            <section className="lg:col-span-7 bg-white p-8 rounded-xl border border-zinc-200 shadow-[0px_10px_30px_rgba(27,109,36,0.03)]">
              <form className="space-y-md">
                <div>
                  <label className="block font-label-sm text-label-sm text-zinc-700 mb-2">Product name</label>
                  <input className="w-full h-12 px-4 bg-white border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#1B6D24]/20 focus:border-[#1B6D24] outline-none transition-all placeholder:text-zinc-400 font-body-md text-body-md" placeholder="e.g. Organic Roma Tomatoes" type="text" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div>
                    <label className="block font-label-sm text-label-sm text-zinc-700 mb-2">Price ($)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">$</span>
                      <input className="w-full h-12 pl-8 pr-4 bg-white border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#1B6D24]/20 focus:border-[#1B6D24] outline-none transition-all font-body-md text-body-md" placeholder="0.00" type="number" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-zinc-700 mb-2">Quantity</label>
                    <input className="w-full h-12 px-4 bg-white border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#1B6D24]/20 focus:border-[#1B6D24] outline-none transition-all font-body-md text-body-md" placeholder="e.g. 50 kg" type="text" />
                  </div>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-zinc-700 mb-2">Category</label>
                  <select className="w-full h-12 px-4 bg-white border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#1B6D24]/20 focus:border-[#1B6D24] outline-none transition-all font-body-md text-body-md appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23707a6c%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[right_1rem_center] bg-no-repeat">
                    <option>Vegetables</option>
                    <option>Fruits</option>
                    <option>Grains</option>
                    <option>Dairy &amp; Eggs</option>
                    <option>Livestock</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-zinc-700 mb-2">Description</label>
                  <textarea className="w-full p-4 bg-white border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#1B6D24]/20 focus:border-[#1B6D24] outline-none transition-all font-body-md text-body-md resize-none" placeholder="Describe your product's origin, freshness, and quality..." rows={5}></textarea>
                </div>
                <div className="pt-4">
                  <button className="w-full md:w-auto px-12 h-12 bg-[#1B6D24] hover:bg-[#15531b] text-white font-semibold rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2" type="submit">
                    <span className="material-symbols-outlined">check_circle</span>
                    Submit Product
                  </button>
                </div>
              </form>
            </section>

            {/* Right: Image Upload & Preview */}
            <section className="lg:col-span-5 space-y-gutter">
              <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-[0px_10px_30px_rgba(27,109,36,0.03)]">
                <label className="block font-label-sm text-label-sm text-zinc-700 mb-4">Product Showcase</label>
                <div className="border-2 border-dashed border-zinc-200 rounded-xl p-8 text-center hover:border-[#1B6D24] transition-colors cursor-pointer group">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-4xl text-zinc-400 group-hover:text-[#1B6D24] transition-colors">cloud_upload</span>
                  </div>
                  <p className="font-body-md text-body-md text-zinc-600 mb-2">Drag and drop your farm photos here</p>
                  <p className="font-label-xs text-label-xs text-zinc-400">Supported: JPG, PNG, WEBP (Max 5MB)</p>
                  <button className="mt-6 px-6 h-10 border border-[#1B6D24] text-[#1B6D24] hover:bg-green-50 font-semibold rounded-lg transition-all text-label-sm">Browse Files</button>
                </div>
                {/* Image Preview Grid */}
                <div className="grid grid-cols-2 gap-4 mt-gutter">
                  <div className="aspect-square rounded-lg overflow-hidden border border-zinc-100 group relative">
                    <img alt="Tomato Field" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="vibrant close-up of organic red tomatoes hanging on green vines in a sun-drenched greenhouse with soft bokeh background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSsJkCc4ACELqi-8O_uRc_sih4P1Cp-nZRieBtM80JqxIE5x2shYqgibOoqEHGH-DC9jA37wUk-2MA13-BT1sOr2kY5rxAUfkBuo54TtVWkI90B6e45_mhnJEelnuLPOHbmjErSy9rYGM07TA6nrc5kLOYS1Sc042U17OkkV1v6P3u7q5RL5logYv6Izp96UglUQFxgnwHWH9X6jr9q-suMVZ0FfCbBKFrjbQCsOJUDZztK6lWty6BQyw01ZIqW0Rhvaai-FxM0f0" />
                    <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-error hover:bg-error hover:text-white transition-all shadow-sm">
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  </div>
                  <div className="aspect-square rounded-lg border-2 border-dashed border-zinc-100 flex items-center justify-center text-zinc-300">
                    <span className="material-symbols-outlined">add_a_photo</span>
                  </div>
                </div>
              </div>

              {/* Market Insights Tip */}
              <div className="bg-primary-fixed/30 p-6 rounded-xl border border-primary-fixed-dim/20">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#1B6D24]">lightbulb</span>
                  <div>
                    <h4 className="font-label-sm text-label-sm text-[#1B6D24] mb-1 uppercase tracking-wider">Farmer Tip</h4>
                    <p className="font-body-md text-body-md text-on-primary-fixed-variant leading-relaxed">Products with high-resolution photos of the actual harvest sell 40% faster. Ensure natural lighting and clean surfaces for the best results.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* BottomNavBar Shell (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 z-50 flex justify-around items-center px-4 pb-safe bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
        <a className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#1B6D24] active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] scale-110 active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined">potted_plant</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Products</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#1B6D24] active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#1B6D24] active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined">account_balance_wallet</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Earnings</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#1B6D24] active:scale-90 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined">forum</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Chat</span>
        </a>
      </nav>
    </div>
  );
}

function IdentityVerificationPage() {
  return (
    <div className="bg-white font-body-md text-on-surface">
      {/* TopAppBar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-16 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200">
        <div className="flex items-center gap-4">
          <button className="p-2 text-zinc-600 hover:bg-zinc-50 transition-colors active:scale-95 duration-150 rounded-lg">
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
          <div className="flex items-center gap-2">
            <img alt="KIZ FARM logo" className="h-8 w-auto" data-alt="KIZ FARM official logo featuring a large green K with red and green swooshes" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
            <span className="text-lg font-black tracking-tighter text-[#1B6D24] uppercase">KIZ FARM</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-zinc-600 hover:bg-zinc-50 transition-colors active:scale-95 duration-150 rounded-lg relative">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
          </button>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto min-h-[calc(100vh-64px)] p-6 md:p-margin bg-white">
        {/* Verification Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-lg gap-md">
          <div>
            <nav className="flex items-center gap-2 text-zinc-400 mb-2">
              <span className="text-label-sm font-label-sm uppercase">Account</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-label-sm font-label-sm uppercase text-primary">Verification</span>
            </nav>
            <h1 className="text-headline-lg font-headline-lg text-on-surface">Identity Verification</h1>
            <p className="text-body-lg font-body-lg text-zinc-500 max-w-2xl">Complete your profile to unlock full marketplace features and ensure secure transactions within the KIZ FARM ecosystem.</p>
          </div>
          {/* Status Badge */}
          <div className="flex items-center gap-3 px-4 py-2 bg-tertiary-fixed rounded-xl border border-tertiary-container/20">
            <span className="material-symbols-outlined text-tertiary" data-icon="pending">pending</span>
            <div className="flex flex-col">
              <span className="text-label-xs font-label-xs text-on-tertiary-fixed-variant uppercase">Current Status</span>
              <span className="text-label-sm font-label-sm font-bold text-tertiary">Pending verification</span>
            </div>
          </div>
        </div>

        {/* Verification Canvas: Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Form Fields & Uploads (8 cols) */}
          <div className="lg:col-span-8 space-y-md">
            {/* Identification Numbers Card */}
            <section className="bg-white border border-[#E5E7EB] rounded-xl p-md">
              <div className="flex items-center gap-2 mb-md">
                <span className="material-symbols-outlined text-primary" data-icon="fingerprint">fingerprint</span>
                <h2 className="text-headline-md font-headline-md">Identification Numbers</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant uppercase">Bank Verification Number (BVN)</label>
                  <div className="relative">
                    <input className="w-full h-12 bg-white border border-zinc-200 rounded-lg px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="222********" type="password" />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-primary">
                      <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                    </button>
                  </div>
                  <p className="text-label-xs font-label-xs text-zinc-400">Used for financial identity only. Secured by 256-bit encryption.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant uppercase">National Identity Number (NIN)</label>
                  <input className="w-full h-12 bg-white border border-zinc-200 rounded-lg px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Enter 11-digit NIN" type="text" />
                  <p className="text-label-xs font-label-xs text-zinc-400">Your official Nigerian identity record.</p>
                </div>
              </div>
            </section>

            {/* Documents Grid (Bento Style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Government ID Upload */}
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-md flex flex-col group cursor-pointer hover:border-primary transition-colors">
                <div className="flex justify-between items-start mb-md">
                  <div className="p-3 bg-green-50 rounded-xl text-primary">
                    <span className="material-symbols-outlined" data-icon="badge">badge</span>
                  </div>
                  <span className="text-label-xs font-label-xs text-zinc-400 uppercase">Step 02</span>
                </div>
                <h3 className="text-headline-md font-headline-md mb-2">Government ID</h3>
                <p className="text-body-md text-zinc-500 mb-md">Upload a clear photo of your International Passport, Voter's Card, or Driver's License.</p>
                <div className="flex-grow flex flex-col items-center justify-center border-2 border-dashed border-zinc-200 rounded-lg p-lg bg-zinc-50/50 group-hover:bg-green-50/20 transition-all">
                  <span className="material-symbols-outlined text-4xl text-zinc-300 mb-2" data-icon="cloud_upload">cloud_upload</span>
                  <span className="text-label-sm font-label-sm text-zinc-600">Drag file or click to browse</span>
                  <span className="text-label-xs font-label-xs text-zinc-400 mt-1">PNG, JPG up to 10MB</span>
                </div>
              </div>

              {/* Selfie Verification */}
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-md flex flex-col group cursor-pointer hover:border-primary transition-colors">
                <div className="flex justify-between items-start mb-md">
                  <div className="p-3 bg-green-50 rounded-xl text-primary">
                    <span className="material-symbols-outlined" data-icon="face">face</span>
                  </div>
                  <span className="text-label-xs font-label-xs text-zinc-400 uppercase">Step 03</span>
                </div>
                <h3 className="text-headline-md font-headline-md mb-2">Live Selfie</h3>
                <p className="text-body-md text-zinc-500 mb-md">Take a clear photo of yourself looking directly at the camera with neutral lighting.</p>
                <div className="flex-grow flex flex-col items-center justify-center border-2 border-dashed border-zinc-200 rounded-lg p-lg bg-zinc-50/50 group-hover:bg-green-50/20 transition-all">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white shadow-sm">
                    <img alt="Selfie placeholder" className="w-full h-full object-cover grayscale opacity-50" data-alt="close up illustrative silhouette of a person for profile picture placeholder with soft lighting and clean background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSeUxpPyskgRjpA-7ITQfvT5Fysnaa35SMATd0TU3N0wsg97dZsOAR2wSSQSFtKfTZMaI3_CcAC8zWysmcxhMy58zQXBNp_vGmxG55WjHA_4AcXB8ZEJylEFfkeJbr0qQr-yhU_nKVQQ4M6vzNP5HQwURnmIbhjN-RUpCv0BG2K7IugWQfovz7ZvKJE8QGFcy30P3Lxbi4J3h1IK_kSfuFZUQzacvkNDsd303pau684VlfKq62sIrEfuWPwDvuCRscVGwBk2nIOLs" />
                    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" data-icon="photo_camera">photo_camera</span>
                    </div>
                  </div>
                  <span className="text-label-sm font-label-sm text-zinc-600">Open Camera</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-md">
              <button className="bg-[#1B6D24] text-white px-xl h-12 rounded-lg font-label-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/10">
                Submit for Review
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-gutter">
            {/* Security Notice Card */}
            <div className="bg-[#1B6D24] rounded-2xl p-md text-white overflow-hidden relative">
              {/* Decorative Element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-md">
                  <span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
                  <span className="text-label-sm font-label-sm uppercase tracking-widest">Security Protocol</span>
                </div>
                <h3 className="text-headline-md font-headline-md mb-md">Your Data is Encrypted</h3>
                <p className="text-body-md text-white/80 mb-md">We use industry-standard SSL encryption and vault storage for all identification documents. KIZ FARM never shares your personal details with third parties.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-label-sm">
                    <span className="material-symbols-outlined text-[20px]" data-icon="check_circle">check_circle</span>
                    AES-256 Bit Encryption
                  </li>
                  <li className="flex items-center gap-3 text-label-sm">
                    <span className="material-symbols-outlined text-[20px]" data-icon="check_circle">check_circle</span>
                    NDPR Compliant Processing
                  </li>
                  <li className="flex items-center gap-3 text-label-sm">
                    <span className="material-symbols-outlined text-[20px]" data-icon="check_circle">check_circle</span>
                    Secure Cloud Storage
                  </li>
                </ul>
              </div>
            </div>

            {/* Verification Progress */}
            <div className="bg-surface-container-lowest border border-[#E5E7EB] rounded-2xl p-md">
              <h3 className="text-label-sm font-label-sm uppercase text-zinc-400 mb-md">Verification Timeline</h3>
              <div className="space-y-gutter relative">
                {/* Connecting Line */}
                <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-zinc-100"></div>
                {/* Step 1 (Completed) */}
                <div className="relative flex gap-4">
                  <div className="z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-sm" data-icon="check">check</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-sm font-bold">Profile Basics</span>
                    <span className="text-label-xs text-zinc-400">Completed June 12, 2024</span>
                  </div>
                </div>
                {/* Step 2 (Active) */}
                <div className="relative flex gap-4">
                  <div className="z-10 w-8 h-8 rounded-full bg-primary border-4 border-white ring-2 ring-primary flex items-center justify-center text-white">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-sm font-bold text-primary">Identity Check</span>
                    <span className="text-label-xs text-zinc-500">Awaiting your documents</span>
                  </div>
                </div>
                {/* Step 3 (Pending) */}
                <div className="relative flex gap-4 opacity-50">
                  <div className="z-10 w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500">
                    <span className="text-label-xs">3</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-sm font-bold">Address Verification</span>
                    <span className="text-label-xs text-zinc-400">Locked</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Widget */}
            <div className="p-md bg-green-50/50 rounded-2xl border border-green-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary" data-icon="help">help</span>
                <span className="text-label-sm font-bold text-[#1B6D24]">Need Assistance?</span>
              </div>
              <p className="text-label-xs text-zinc-600 mb-md">Having trouble uploading? Our support team is available 24/7 to help you verify your account.</p>
              <button className="text-primary font-bold text-label-sm hover:underline flex items-center gap-1">
                Chat with Support
                <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 z-50 flex justify-around items-center px-4 pb-safe bg-white/95 backdrop-blur-lg border-t border-zinc-200">
        <div className="flex flex-col items-center justify-center text-zinc-400">
          <span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Home</span>
        </div>
        <div className="flex flex-col items-center justify-center text-zinc-400">
          <span className="material-symbols-outlined" data-icon="potted_plant">potted_plant</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Products</span>
        </div>
        <div className="flex flex-col items-center justify-center text-zinc-400">
          <span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Orders</span>
        </div>
        <div className="flex flex-col items-center justify-center text-zinc-400">
          <span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Earnings</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#1B6D24] scale-110">
          <span className="material-symbols-outlined" data-icon="forum">forum</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">Chat</span>
        </div>
      </nav>
    </div>
  );
}

function BecomeAFarmerPage() {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 px-4 h-16 w-full flex items-center justify-between">
        <div className="flex items-center gap-base">
          <img alt="KIZ FARM logo" className="h-8 w-auto object-contain" data-alt="minimalist professional logo for an agricultural technology company with modern typography and leaf motifs in deep green" src="https://lh3.googleusercontent.com/aida/ADBb0ujvT0foH0KVcUsUv1-X4NT6qkDm-oxoWHPKnV2esAnpEYklq4ts8j8P3_GO0-dXO8ryqMabe9myPDfL0XYeqBDVig2viC4Rij2XdBmivAgOvEtr0hGHDgDKJZ1i38ZtqiD-LoHs4WVWukq8QcifpDJziKXxgrnxclqiEC_kDMK9LVOr0HmGh1xKcZ7krF1tknqWE-DCpzGSaO8Y2JOVQvTR-0-hQxIhA2Oem9ye8FJhDUNqr8nPm5RYcAimG0-7PXqDyqvgpsiJRg" />
          <span className="text-lg font-black tracking-tighter text-[#1B6D24] uppercase font-headline-md">KIZ FARM</span>
        </div>
        <a className="text-primary font-label-sm hover:underline decoration-2 underline-offset-4" href="#">Sign In</a>
      </header>

      <main className="flex-grow flex items-center justify-center py-xl px-gutter">
        <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          {/* Branding/Value Prop Section */}
          <div className="hidden lg:flex flex-col space-y-md">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img alt="Farm Landscape" className="absolute inset-0 w-full h-full object-cover" data-alt="dramatic aerial view of rolling green hills and geometric crop fields during morning mist with golden sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkJ5di6_z4mMdCMAfGHKgBtk46NAv2eT2HLqypI8tR38DzEi8XqG313rBSFnV_fSCH16S9-Jpm3blcnU5LCBy34wO7ghQlazGIrwNBeo67Gtu-QeGs63ROeKiiwwBe8Ch2RMwHkSksli_J9el7puGpRctGrUCnl_3hVELEGBKMK7lVPZMIIVpnmLLyJfMM1d0BnmadMcEsfXAUNyEK3GG_qFOy6kqhPCmb7Br4bWpd01M1Qze67YibCj-haI2F8_nJKVGo44OpQes" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-margin">
                <span className="text-white/80 font-label-sm uppercase tracking-widest mb-xs">Join the movement</span>
                <h1 className="text-white font-headline-xl mb-base">Empowering Digital Agronomy</h1>
                <p className="text-white/90 font-body-lg max-w-md">Connect your farm to the future of high-precision software and sustainable growth.</p>
              </div>
            </div>
          </div>

          {/* Registration Form Canvas */}
          <div className="bg-white p-margin rounded-xl border border-zinc-200 shadow-sm">
            <div className="mb-lg">
              <h2 className="text-on-surface font-headline-lg mb-xs">Create Farmer Account</h2>
              <p className="text-secondary font-body-md">Join the KIZ FARM ecosystem and start managing your production with precision.</p>
            </div>
            <form className="space-y-md">
              {/* Name & Farm Name Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="text-on-surface font-label-sm" htmlFor="full_name">Full name</label>
                  <input className="h-12 px-4 rounded-lg border border-zinc-300 bg-white font-body-md text-on-surface form-input-focus transition-all" id="full_name" placeholder="Enter your full name" type="text" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="text-on-surface font-label-sm" htmlFor="farm_name">Farm name</label>
                  <input className="h-12 px-4 rounded-lg border border-zinc-300 bg-white font-body-md text-on-surface form-input-focus transition-all" id="farm_name" placeholder="Official farm name" type="text" />
                </div>
              </div>

              {/* Email/Phone */}
              <div className="flex flex-col gap-xs">
                <label className="text-on-surface font-label-sm" htmlFor="contact">Email/Phone</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" data-icon="mail">mail</span>
                  <input className="w-full h-12 pl-12 pr-4 rounded-lg border border-zinc-300 bg-white font-body-md text-on-surface form-input-focus transition-all" id="contact" placeholder="email@example.com or phone number" type="text" />
                </div>
              </div>

              {/* Location & Farm Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="text-on-surface font-label-sm" htmlFor="location">Farm location</label>
                  <div className="relative">
                    <select className="w-full h-12 px-4 rounded-lg border border-zinc-300 bg-white font-body-md text-on-surface appearance-none form-input-focus transition-all" id="location">
                      <option disabled value="" selected>Select location</option>
                      <option value="central_valley">Central Valley</option>
                      <option value="highlands">Northern Highlands</option>
                      <option value="coastal_plains">Coastal Plains</option>
                      <option value="river_basin">River Basin</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" data-icon="expand_more">expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="text-on-surface font-label-sm" htmlFor="farm_type">Farm type</label>
                  <div className="relative">
                    <select className="w-full h-12 px-4 rounded-lg border border-zinc-300 bg-white font-body-md text-on-surface appearance-none form-input-focus transition-all" id="farm_type">
                      <option disabled value="" selected>Select type</option>
                      <option value="crops">Crops</option>
                      <option value="livestock">Livestock</option>
                      <option value="mixed">Mixed Farming</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" data-icon="agriculture">agriculture</span>
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-xs">
                <label className="text-on-surface font-label-sm" htmlFor="password">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" data-icon="lock">lock</span>
                  <input className="w-full h-12 pl-12 pr-4 rounded-lg border border-zinc-300 bg-white font-body-md text-on-surface form-input-focus transition-all" id="password" placeholder="Minimum 8 characters" type="password" />
                </div>
              </div>

              {/* CTA Section */}
              <div className="pt-base flex flex-col gap-md">
                <button className="w-full h-12 bg-[#1B6D24] hover:bg-primary-container text-white font-headline-md rounded-lg shadow-sm active:scale-[0.98] transition-all duration-150" type="submit">
                  Join KIZ FARM
                </button>
                <p className="text-center text-secondary font-label-sm">
                  By joining, you agree to our{' '}
                  <a className="text-[#1B6D24] font-semibold hover:underline" href="#">Terms of Service</a>
                  {' '}and{' '}
                  <a className="text-[#1B6D24] font-semibold hover:underline" href="#">Privacy Policy</a>
                </p>
              </div>
            </form>

            {/* Support/Quick Links */}
            <div className="mt-lg pt-lg border-t border-zinc-100 flex items-center justify-between">
              <div className="flex items-center gap-xs text-zinc-500">
                <span className="material-symbols-outlined text-[18px]" data-icon="help_outline">help_outline</span>
                <span className="font-label-sm">Need assistance?</span>
              </div>
              <a className="text-[#1B6D24] font-label-sm font-semibold flex items-center gap-xs" href="#">
                Contact Support
                <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-lg px-gutter border-t border-zinc-200 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-md text-secondary">
          <p className="font-label-sm">© 2024 KIZ FARM DIGITAL AGRONOMY. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-lg font-label-sm">
            <a className="hover:text-primary transition-colors" href="#">Twitter</a>
            <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
            <a className="hover:text-primary transition-colors" href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function UserDashboardPage() {
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

function ProductDetailPage() {
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

function MarketplacePage() {
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

function SearchResultsPage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-white">
              <img alt="KIZ FARM Official Logo" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-[#1B6D24] font-['Inter'] antialiased">KIZ FARM</h1>
          </div>
          {/* Desktop Search Bar Integrated into Header */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-label-sm" type="text" defaultValue="Tomatoes" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors active:scale-95 duration-150">
              <span className="material-symbols-outlined text-[#1B6D24]">notifications</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-secondary-container"></div>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-lg">
        {/* Subheader & Filters */}
        <section className="mb-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Search Results</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">12 results found for <span className="font-semibold text-primary">"Tomatoes"</span></p>
            </div>
            <div className="flex gap-sm items-center overflow-x-auto pb-2 md:pb-0">
              <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-full font-label-sm whitespace-nowrap hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                Filters
              </button>
              <div className="h-6 w-[1px] bg-outline-variant"></div>
              <span className="px-4 py-1 bg-primary text-white rounded-full font-label-xs">Organic</span>
              <span className="px-4 py-1 bg-surface-container-highest text-on-surface-variant rounded-full font-label-xs">In Season</span>
              <span className="px-4 py-1 bg-surface-container-highest text-on-surface-variant rounded-full font-label-xs">Price: Low to High</span>
            </div>
          </div>
        </section>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
          {/* Result Card 1 */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden organic-elevation group cursor-pointer transition-all">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="vibrant cluster of fresh organic roma tomatoes on the vine in a sunlit rustic wooden crate with soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzQxIsfAV3TkEFci95ThTJvPGXy85MSqRMvNscTaR2h9dasmQn-4vh-nOvPX4REyOMXoFiUesn8kWBEqgqMJENNpB46GiRIXGETJhXR1JTlWNWEgXSTSIc_iJ88jrrLKW68haSDfGJPz9c6YMald2Sv3kwOE1_rzwnLp4AQOMx1tpCiWr3t9JH2CfzHEledqVq3InNmMgsLaLKbH39LgFaJsh6Ohsptrf5mbLjwxBiABCku4cPYwMVo7EcA1Ei9bz6IFBAsOeiuPY" />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary font-label-xs rounded-full shadow-sm">Organic</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline-md text-[18px] text-on-surface">Organic Roma Tomatoes</h3>
                <span className="font-headline-md text-primary">$4.50</span>
              </div>
              <p className="font-label-xs text-on-surface-variant mb-4">Greenway Farms • 1kg</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#F6BE3B]">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-xs text-on-surface">4.8</span>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-label-sm active:scale-95 transition-transform">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Result Card 2 */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden organic-elevation group cursor-pointer transition-all">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="macro close-up of shiny red cherry tomatoes in a minimalist white bowl with bright clean studio lighting and soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd9jsq8MKjjMwIQDecvYFsL_BRXC-5ctTbqSkKQU1zVTgUS0JmAdItHGPeE0GX_Uyp7KePbrOo6Kuoy-EhWR_heNSqHwIUnC820HaWyfzFQtERgrxyhxCstE_KH2hxPoF8-vPwSr_dZMESbdFZFQFtFcERbKJGiSrM3Dwh7LdEtmJIQMX8GdDeEb6zHXV-e0luwSQdoMsJLhUXoRSTCK48eUQLRCADMlRi33kX6nHl_rpZUqdsGU2jhXgiiu5yKlYBe1Xy00mL71M" />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary font-label-xs rounded-full shadow-sm">Bestseller</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline-md text-[18px] text-on-surface">Sweet Cherry Tomatoes</h3>
                <span className="font-headline-md text-primary">$3.25</span>
              </div>
              <p className="font-label-xs text-on-surface-variant mb-4">Sun-Kissed Acres • 500g</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#F6BE3B]">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-xs text-on-surface">4.9</span>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-label-sm active:scale-95 transition-transform">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Result Card 3 */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden organic-elevation group cursor-pointer transition-all">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="assorted heirloom tomatoes in various colors like purple, yellow, and orange on a dark slate background with professional food photography lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz8iz9O0ZWVUbmlnVa26mNLZuqf6-ctu62W7NNzhwNhDB2EsKrkrZ-A6Dz22-hz-aFZKSmXShLSfyKcLQ8ZeicSzx_j9b8VoxIaaNXMd2KJkoRwjlSN20Fjh4TgUjLMi_3MCGs1uNpJ7Tol_uu5EYDMDwDCcF1WhUZ2zedhDQLFAvqWzFza4sagznE5WniKLKq3bXd8E_NfzQhDKzjs9V4iRmdVcPDEtCcFv52OV4dM7S-MlnY8tadhwEpp_iEh34vH_w32Oen7-o" />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline-md text-[18px] text-on-surface">Heirloom Variety Pack</h3>
                <span className="font-headline-md text-primary">$6.80</span>
              </div>
              <p className="font-label-xs text-on-surface-variant mb-4">Heritage Harvest • 800g</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#F6BE3B]">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-xs text-on-surface">4.7</span>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-label-sm active:scale-95 transition-transform">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Result Card 4 */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden organic-elevation group cursor-pointer transition-all">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="large ripe beefsteak tomatoes sliced on a wooden cutting board in a farmhouse kitchen setting with warm afternoon sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHvvjdnGVd9-Kf3yZqPvmjycJW3s_asq4R7i7clyq4rWc5w9y9E86N3fvyB4HCRhCGAdiguECmnHWmOsEtOQL9OCmp8K5ugyfbvqGY7NTCmw_KRvpZnZJMWES9n1kkGaZHwN7HArAkJm6AAA5p_S8INV47mRQSGqG0zw5eDoUAJncSz80E4p8ciUh69P95B_s_m9i2_UuwD4V_qJzKrKfIG8496bLq6gohia0Qenpifm1f5GRDS0pP42YvVMS7XKADvwR_I7b3KYI" />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline-md text-[18px] text-on-surface">Beefsteak Tomatoes</h3>
                <span className="font-headline-md text-primary">$5.10</span>
              </div>
              <p className="font-label-xs text-on-surface-variant mb-4">Valley View Growers • 1.5kg</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#F6BE3B]">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-xs text-on-surface">4.5</span>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-label-sm active:scale-95 transition-transform">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Result Card 5 */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden organic-elevation group cursor-pointer transition-all">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="bright yellow pear-shaped cherry tomatoes in a woven basket sitting on green grass with soft morning dew and natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-WG6S-V4gODSNrwNhsIbvXdrCoUs4rjeDesc_aYxrVZJxwF_BvgoAKEZxVcAgeMIISjmeMH6ri8lc0vgonYLQXhGrjcM3NphyebOptAiFp8zjhqX_wYoBkz75IYBnr9SAtdIIXjTM8rNUi6RYSSBg8PXISEyEzWm5jPfa1ybAoeVfDOgIAtn3ClZeTXTFiPRGqQMw3hCD6UIv2x4T4aCs7elpTn2cXx-KuUf3ifn6asFBb7BzzL54sRlVh7jp4Hp374YqUIGQ9HE" />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline-md text-[18px] text-on-surface">Yellow Pear Tomatoes</h3>
                <span className="font-headline-md text-primary">$3.90</span>
              </div>
              <p className="font-label-xs text-on-surface-variant mb-4">Sunny Fields • 400g</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#F6BE3B]">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-xs text-on-surface">4.6</span>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-label-sm active:scale-95 transition-transform">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Result Card 6 */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden organic-elevation group cursor-pointer transition-all">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="professional glass jars of artisan sun-dried tomatoes in olive oil with herbs and garlic with elegant lighting and dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA48aHt82esO9-vy_pdibn1T8GIq1YgMt2xfKVyzQAwfxlYX-1T8p8K-Xml_NM91bvqnTNeY4-MABRnOQOd5KH8uibkpgr1-WHb9EZ39yYF_sXOu72NeYiOMZHPWkO6EfGb1CODNqfJxVo-VPvbUshfBVKU-vO1KGs0EFrJKtqJq99c9sShDGuEyqrK7L07tO7Xze4a0-CAMUHhSWqc3S-I3YL46KnNSGdh-dl2vXgIoniFu6w6VuOPONlGHwb68IZvCrZG0PNGwtI" />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-[#5C4300] text-white font-label-xs rounded-full shadow-sm">Preserved</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline-md text-[18px] text-on-surface">Sun-Dried Tomatoes</h3>
                <span className="font-headline-md text-primary">$7.50</span>
              </div>
              <p className="font-label-xs text-on-surface-variant mb-4">Artisan Pantry • 250g</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#F6BE3B]">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-xs text-on-surface">5.0</span>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-label-sm active:scale-95 transition-transform">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Result Card 7 */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden organic-elevation group cursor-pointer transition-all">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="close-up of vine-ripened campari tomatoes on a minimalist white countertop with clean bright high-key lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANj83aEv6BgBUjc39Yg45zcGdxDxkSuvi9tuzGcwqIdGcYUUCeXV0giG7hZu_PTkELeY5lnTILFzniDPL5CrYGXPOhqA-M8g8g2YVzRgMc7BCCG38sZVXwHzj_bvhRREo5DZPD2rkliFTK5rl--JjMYVjTB3kkQLwOhmGf8QcHypNqJ_zB96MvfuZQqISad5YBgAAVD0Ok7nC4yRsr6UKJ_Rkwl5jEZsGX2AssjQNUew0ojwxNQjZKWffAAF_3qHlNHrctKoSBIhg" />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline-md text-[18px] text-on-surface">Campari Tomatoes</h3>
                <span className="font-headline-md text-primary">$4.20</span>
              </div>
              <p className="font-label-xs text-on-surface-variant mb-4">Hydro Green • 450g</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#F6BE3B]">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-xs text-on-surface">4.8</span>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-label-sm active:scale-95 transition-transform">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Result Card 8 */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden organic-elevation group cursor-pointer transition-all">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="dark purple indigo rose tomatoes on a vine with dramatic lighting and deep shadows showcasing unique color textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACZGci-0T9jakLGe1zvYHIjM2Dh5Yd2pBA1b801hKHPZUxsmWK1RNa88iVBCckQL-mOkc8-QcthzWpl0UV2dqKYESzXp28VjPyE8Y56CYjWu6cKP9SLjrA3C6riHSwi8cqkHnnY10j-gJgT8NLBGrGs2wbfl82KnClE8LpZ0CN2RLiKkiPPFHNLeizV_KguUYs6AmdYwRrLFWW8m_cpOdwxy6iiuP0LZftfjb8ox9vq-1qBs1QvGwK8a8QeLXnJFlmv_bF-uC4ie0" />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary font-label-xs rounded-full shadow-sm">Rare</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline-md text-[18px] text-on-surface">Indigo Rose Tomatoes</h3>
                <span className="font-headline-md text-primary">$8.00</span>
              </div>
              <p className="font-label-xs text-on-surface-variant mb-4">Exotic Botany • 300g</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#F6BE3B]">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-xs text-on-surface">4.4</span>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-label-sm active:scale-95 transition-transform">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-xl flex justify-center items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-label-sm">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors font-label-sm">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-2 bg-white/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1 hover:text-[#1B6D24] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] bg-green-50 dark:bg-green-900/20 rounded-xl px-4 py-1 transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
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
    </>
  );
}

function ShoppingCartPage() {
  return (
    <>
      {/* TopAppBar Section */}
      <header className="bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3">
            <img alt="KIZ FARM" className="h-10 object-contain w-auto" data-alt="high-quality minimalist logo for a modern agriculture company featuring a stylized green leaf and modern clean typography" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
            <h1 className="text-xl font-extrabold tracking-tight text-[#1B6D24]">KIZ FARM</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-gray-500 hover:bg-gray-50 p-2 rounded-full transition-colors" data-icon="notifications">notifications</button>
            <div className="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center text-white font-bold text-xs">KF</div>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-lg lg:grid lg:grid-cols-12 lg:gap-gutter">
        {/* Cart Items Section */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-md">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">My Cart</h2>
            <span className="text-label-sm font-label-sm text-secondary bg-secondary-container px-3 py-1 rounded-full">3 Items</span>
          </div>

          {/* Product Card 1 */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-md mb-md flex flex-col sm:flex-row gap-md items-start sm:items-center hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-shadow">
            <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
              <img className="w-full h-full object-cover" data-alt="close-up of fresh organic white potatoes in a rustic wooden crate with soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe68eC7scU1nxbda0XvvyJkDfCuPS6HCvbxIa77LatQfQ0o9yjP3HPzd6FxJpczvLV0YsnKz0kKlhR-MRI-dw2Nz0i_0_HuegD7KOQnr9l9QhbcSJ5JJSNve44fu18nM6SkGw2j5aesa_hf0vb2tHOW8Zx9x9-w0fakJPhiEpWS8F1p5OKnnjbdTO_y3ejXJDI5cZwsjsTIAYQG-bqiGhGAT5B8H3-bj2rYRqISC8YTA1J-GlEq9lqdrCieJGG3hSUq1FX0U3PWTU" />
            </div>
            <div className="flex-grow flex flex-col gap-1">
              <h3 className="font-headline-md text-body-lg text-on-surface">Premium Irish Potatoes</h3>
              <p className="text-label-sm font-label-sm text-secondary">Weight: 50kg</p>
              <p className="font-bold text-[#1B6D24] mt-2">₦ 45,000</p>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center border border-outline-variant rounded-lg">
                <button className="p-2 text-primary hover:bg-green-50 transition-colors"><span className="material-symbols-outlined">remove</span></button>
                <span className="px-4 font-bold">1</span>
                <button className="p-2 text-primary hover:bg-green-50 transition-colors"><span className="material-symbols-outlined">add</span></button>
              </div>
              <button className="material-symbols-outlined text-error hover:bg-error-container/20 p-2 rounded-full transition-colors" data-icon="delete">delete</button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-md mb-md flex flex-col sm:flex-row gap-md items-start sm:items-center hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-shadow">
            <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
              <img className="w-full h-full object-cover" data-alt="burlap sack filled with high-quality golden brown rice grains with dramatic side lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHI0qSvlPbEe2rYWWTLQxUomD4Ib6fDAi6NBQ9LxoHuM4mnDlYFmjzp_VKprLrxyaCxdr18m9f-KJ-zU7qHyjaDkD7rBxET56MwC3w-s7D4vbvshUUfO0W_229egG1j_6A8gez-3EF748cvhFZuKBH01Qk6XfFSTyTjLE5LOpRfbUp0TMkWDNTWGmhwGeH4c1pYdixjMl7kMc7hluto5-OsjjdHG_TOjQKj42MrNRYFSRP2kq4GI3EyLCx9hG6fQ4vLMReqlXnD9Y" />
            </div>
            <div className="flex-grow flex flex-col gap-1">
              <h3 className="font-headline-md text-body-lg text-on-surface">Long Grain Parboiled Rice</h3>
              <p className="text-label-sm font-label-sm text-secondary">Weight: 50kg</p>
              <p className="font-bold text-[#1B6D24] mt-2">₦ 78,000</p>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center border border-outline-variant rounded-lg">
                <button className="p-2 text-primary hover:bg-green-50 transition-colors"><span className="material-symbols-outlined">remove</span></button>
                <span className="px-4 font-bold">2</span>
                <button className="p-2 text-primary hover:bg-green-50 transition-colors"><span className="material-symbols-outlined">add</span></button>
              </div>
              <button className="material-symbols-outlined text-error hover:bg-error-container/20 p-2 rounded-full transition-colors" data-icon="delete">delete</button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-md mb-md flex flex-col sm:flex-row gap-md items-start sm:items-center hover:shadow-[0px_10px_30px_rgba(27,109,36,0.05)] transition-shadow">
            <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
              <img className="w-full h-full object-cover" data-alt="large golden yellow honey beans spilling out of a ceramic bowl on a dark stone surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn2qlQgWpvYhUdb_OuBTL3CLvBdoYB0pMwN6WenhCCox6EispQVp1Jo4H3EHJtgy3dk6Hz-rmK0aBZGJrfeiTHZh3CF1Q7s128789Rw9Fj0wRvgGgXZrNlnNLatg5aq2OOEwYjshHWELbsyQEhScyhzFQ6xmrxBIuxP-mvXGVbaLoclh49VrpQrjxZEoVrOvfJuvqtTTIVpZK7CgT8kJQxTKCzvuYBNp-AOy15sXNDEWm8Ui7bFnoqOFSW6o1sB9dGpj4Z3-jM3Co" />
            </div>
            <div className="flex-grow flex flex-col gap-1">
              <h3 className="font-headline-md text-body-lg text-on-surface">Premium Honey Beans</h3>
              <p className="text-label-sm font-label-sm text-secondary">Weight: 50kg</p>
              <p className="font-bold text-[#1B6D24] mt-2">₦ 52,500</p>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center border border-outline-variant rounded-lg">
                <button className="p-2 text-primary hover:bg-green-50 transition-colors"><span className="material-symbols-outlined">remove</span></button>
                <span className="px-4 font-bold">1</span>
                <button className="p-2 text-primary hover:bg-green-50 transition-colors"><span className="material-symbols-outlined">add</span></button>
              </div>
              <button className="material-symbols-outlined text-error hover:bg-error-container/20 p-2 rounded-full transition-colors" data-icon="delete">delete</button>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <aside className="lg:col-span-4 mt-lg lg:mt-0">
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-md sticky top-24">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Order Summary</h3>
            <div className="space-y-4 mb-lg">
              <div className="flex justify-between text-body-md text-secondary">
                <span>Subtotal</span>
                <span className="text-on-surface">₦ 253,500</span>
              </div>
              <div className="flex justify-between text-body-md text-secondary">
                <span>Delivery Fee</span>
                <span className="text-on-surface">₦ 5,000</span>
              </div>
              <div className="flex justify-between text-body-md text-secondary">
                <span>Service Charge</span>
                <span className="text-on-surface">₦ 1,200</span>
              </div>
              <div className="pt-4 border-t border-outline-variant flex justify-between">
                <span className="font-bold text-lg text-on-surface">Total</span>
                <span className="font-bold text-lg text-[#1B6D24]">₦ 259,700</span>
              </div>
            </div>
            <div className="mb-lg">
              <div className="relative">
                <input className="w-full bg-white border border-[#D1D5DB] rounded-lg h-12 px-4 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition-all" placeholder="Promo code" type="text" />
                <button className="absolute right-2 top-2 h-8 px-4 bg-secondary-container text-on-secondary-container rounded-md font-label-sm text-label-sm hover:bg-secondary transition-colors">Apply</button>
              </div>
            </div>
            <button className="w-full h-[48px] bg-[#1B6D24] text-white rounded-lg font-bold text-body-md flex items-center justify-center gap-2 hover:bg-primary transition-all active:scale-[0.98]">
              Proceed to Checkout
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <div className="mt-md flex items-center gap-2 justify-center text-label-sm font-label-sm text-secondary">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              Secure Checkout by KIZ FARM
            </div>
          </div>

          {/* Ad/Promo Card */}
          <div className="mt-md rounded-xl overflow-hidden relative group aspect-[4/3]">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="expansive lush green farm fields under a clear blue sky at dawn representing agricultural growth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv2VPSDn50fNV0CQH3fxFuRoTtaYnfd2mkqgXX9k8RDayE5sgRjSOI5RQns130QHVzCWzcAnUaxyIw6xizGr54Wrx0sVJUhqijT_336ZTKrZ1tXjqDsj1sXS3l5przkBD2k5JbfRDVjRwhOm6__M0QTRvtGf9jXYfGqFVWftFBkDKeaGnahFHBXNcp2nj9egCYLG57tXjwb6q3nDyDiLz22nKAxOI3Ela0CzpZTEyA-dq-Q5QqVo49UjgOcIqrfOKMjzVzKut9Jqg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white font-bold text-lg">Direct From Source</h4>
              <p className="text-white/80 text-sm">Save 10% more on bulk purchases over 500kg</p>
            </div>
          </div>
        </aside>
      </main>

      <div className="h-20 lg:hidden"></div>

      {/* BottomNavBar Section */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-2 bg-white/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none md:hidden">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1 hover:text-[#1B6D24] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] bg-green-50 dark:bg-green-900/20 rounded-xl px-4 py-1 hover:text-[#1B6D24] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
          <span className="font-['Inter'] text-[12px] font-semibold">Cart</span>
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
    </>
  );
}

function CheckoutPage() {
  return (
    <>
      {/* Header / TopAppBar */}
      <header className="bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center px-6 h-16 w-full max-w-[1440px] mx-auto sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img alt="KIZ FARM Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-gray-500">lock</span>
          <span className="font-label-sm text-label-sm text-gray-500 uppercase tracking-widest">Secure Checkout</span>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-margin mt-lg">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-gutter">
          {/* Left Column: Checkout Flow */}
          <div className="lg:col-span-8 space-y-lg">
            {/* Steps Indicator */}
            <nav className="flex items-center justify-between w-full max-w-2xl mx-auto mb-lg">
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center font-bold">1</div>
                <span className="font-label-sm text-label-sm text-primary">Address</span>
              </div>
              <div className="h-[2px] flex-1 bg-primary-container/20 mx-4">
                <div className="h-full bg-primary-container w-1/2"></div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-primary-container text-primary-container flex items-center justify-center font-bold">2</div>
                <span className="font-label-sm text-label-sm text-primary-container font-semibold">Payment</span>
              </div>
              <div className="h-[2px] flex-1 bg-gray-200 mx-4"></div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center font-bold">3</div>
                <span className="font-label-sm text-label-sm text-gray-400">Review</span>
              </div>
            </nav>

            {/* Section: Address Selection */}
            <section className="bg-white rounded-xl border border-[#E5E7EB] p-md">
              <div className="flex justify-between items-center mb-md">
                <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                  Shipping Address
                </h2>
                <button className="text-primary font-label-sm text-label-sm hover:underline">+ Add New</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
                {/* Address Card 1 */}
                <label className="relative flex p-md border-2 border-primary-container bg-primary/5 rounded-xl cursor-pointer">
                  <input defaultChecked className="absolute top-4 right-4 text-primary focus:ring-primary h-4 w-4" name="address" type="radio" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                      <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Home Address</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">42 Agronomy Lane, Greenfield Estates</p>
                    <p className="font-body-md text-body-md text-on-surface-variant">Nairobi, Kenya 00100</p>
                    <p className="mt-2 font-label-xs text-label-xs text-gray-500">+254 712 345 678</p>
                  </div>
                </label>
                {/* Address Card 2 */}
                <label className="relative flex p-md border border-[#E5E7EB] hover:border-primary/30 rounded-xl cursor-pointer transition-all">
                  <input className="absolute top-4 right-4 text-primary focus:ring-primary h-4 w-4" name="address" type="radio" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-secondary">business</span>
                      <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Office Address</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">Tech Hub Plaza, 4th Floor, Kilimani</p>
                    <p className="font-body-md text-body-md text-on-surface-variant">Nairobi, Kenya 00200</p>
                    <p className="mt-2 font-label-xs text-label-xs text-gray-500">+254 798 765 432</p>
                  </div>
                </label>
              </div>
            </section>

            {/* Section: Payment Method */}
            <section className="bg-white rounded-xl border border-[#E5E7EB] p-md">
              <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 mb-md">
                <span className="material-symbols-outlined text-primary">payments</span>
                Payment Method
              </h2>
              <div className="space-y-base">
                {/* Option: Card */}
                <div className="border border-[#E5E7EB] rounded-xl p-md">
                  <div className="flex items-center justify-between mb-md">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary">credit_card</span>
                      <span className="font-body-md text-body-md font-semibold">Credit / Debit Card</span>
                    </div>
                    <div className="flex gap-2">
                      <img alt="Visa" className="h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-RsglwsNPJXX73IDwIdQ3HHRuxBh_1XbfDe37VlY-hYlEIQ-bqUL3dPkwdRKIljsqZm9DRrSfojmLcoHNeMj-QCiPeagPjjVewcLjw0X0xsoPzIycqSJp3awK3PohQeShlQSa7KydGKlnsLoDsDiB6U3LLo5e0RzeIZ2UXJLZ2yPKLu-J1ZrI0CsViyXLZcd52FqFAiBhY_wy9VjGt_apM-1wgbIS67XOUw9mfDF5w_NSEifFkvRswqOHHVa1AcaPHF-BJs8K5H4" />
                      <img alt="Mastercard" className="h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkuSVgKnfSjdSUQhzCb_xOF05-EKPt81CZU4qgCxV845GnamHkdNdRtu78LF9bOBto2glzTPFzCD4zFGr8QbAJw90ZkoNbC3RvUx8O2oZYMMqc4bb_eiQ5C5J5mNBIoOAiQYbmm58z1LUOcYWJN5kWkAa7Z6B02TxxPSgLSOrLC3efCgfhfIsXOaA6mRl0CejF9c4fLOtz8Pt1u0-xoU26cLq3R8b63-GGozQ6uIquPzzUPa5BnpPwktl_9RIixJnikNIBHqcCVro" />
                    </div>
                  </div>
                  <div className="space-y-md">
                    <div className="grid grid-cols-1 gap-base">
                      <label className="block font-label-xs text-label-xs text-gray-500 uppercase">Card Number</label>
                      <div className="relative">
                        <input className="w-full h-12 border-[#D1D5DB] border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-md font-body-md" placeholder="xxxx xxxx xxxx xxxx" type="text" />
                        <span className="absolute right-4 top-3 material-symbols-outlined text-gray-400">lock</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-md">
                      <div className="space-y-base">
                        <label className="block font-label-xs text-label-xs text-gray-500 uppercase">Expiry Date</label>
                        <input className="w-full h-12 border-[#D1D5DB] border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-md font-body-md" placeholder="MM/YY" type="text" />
                      </div>
                      <div className="space-y-base">
                        <label className="block font-label-xs text-label-xs text-gray-500 uppercase">CVV</label>
                        <input className="w-full h-12 border-[#D1D5DB] border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-md font-body-md" placeholder="***" type="password" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Option: Bank Transfer */}
                <div className="border border-[#E5E7EB] rounded-xl p-md flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-gray-500">account_balance</span>
                    <span className="font-body-md text-body-md font-semibold text-gray-500">Direct Bank Transfer</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-300">radio_button_unchecked</span>
                </div>
                {/* Option: M-Pesa */}
                <div className="border border-[#E5E7EB] rounded-xl p-md flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-gray-500">smartphone</span>
                    <span className="font-body-md text-body-md font-semibold text-gray-500">M-Pesa Mobile Money</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-300">radio_button_unchecked</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4">
            <aside className="sticky top-24 space-y-md">
              <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
                <div className="p-md border-b border-[#E5E7EB] bg-gray-50">
                  <h3 className="font-headline-md text-headline-md text-on-surface">Order Summary</h3>
                </div>
                {/* Mini Product List */}
                <div className="p-md space-y-md">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                      <img className="w-full h-full object-cover" data-alt="Close up of fresh organic bright green kale leaves with water droplets and vibrant texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMdG6CQYMJuGcGM8xjuBUZYI39hwXD1-SWLMCeKI4TBmmEUkPaSphhNZQDBLQRPjVTB0zOW9KkknyKsw7_IlVMfYS1AAsrJ7wQRJGI0RVTMUoqQ6r3ESFV5S1gZfMXIGGxilT1JR8C9ZF12etkBlwIudo6cQAIbj6r4fADivJlBt5jQNbrYQ08UDAw4tDXqi4iZkZzEPRahpIQpLeFjdS3ylQU8p_aotpWr_iRWij5zEyQQOdjnw93QrZurpx9K6coEWkFyW_Ar4g" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-label-sm text-label-sm font-bold text-on-surface">Organic Lacinato Kale</h4>
                      <p className="font-label-xs text-label-xs text-gray-500">Qty: 2 Bunches</p>
                      <p className="font-body-md text-body-md font-semibold text-primary mt-1">$12.50</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                      <img className="w-full h-full object-cover" data-alt="Artisanal glass jar of pure golden honey sitting on a rustic wooden table with honeycomb" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwRI4p1ysyO4zoWAfRw-Ft8xN3lfslGZQk3hVRVjNmlNm5X3HXaacbTfZ1BAoTMCNGw6CDXuPHBbd19PXt0gL3L8S1GpzVEQyx6B1A3NrEXf4FPxQhTtCL51D_B5h18ez6uIcV48wRjIcMAzTqYu5q97dHXzRMo79Hw870lupSSMf3FRThzUQTs61ILxHdvz1GngyHFRX6uaEua1sG6of8S6G9AlHHs57XN79rD1oPeNZz8B21UDntOjqH09--ntCnaC6UGMVFuoI" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-label-sm text-label-sm font-bold text-on-surface">Wildflower Raw Honey</h4>
                      <p className="font-label-xs text-label-xs text-gray-500">Qty: 1 Jar (500g)</p>
                      <p className="font-body-md text-body-md font-semibold text-primary mt-1">$18.00</p>
                    </div>
                  </div>
                </div>
                {/* Price Calculations */}
                <div className="p-md space-y-base border-t border-[#E5E7EB]">
                  <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>$30.50</span>
                  </div>
                  <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                    <span>Shipping (Express)</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                    <span>Est. Taxes</span>
                    <span>$2.45</span>
                  </div>
                  <div className="flex justify-between font-headline-md text-headline-md text-on-surface pt-md border-t border-[#E5E7EB]">
                    <span>Total</span>
                    <span>$37.95</span>
                  </div>
                </div>
                <div className="p-md">
                  <button className="w-full h-12 bg-primary text-white font-label-sm text-label-sm font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 active:scale-95 duration-150 shadow-lg shadow-primary/20 hover:bg-primary-container">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    Place Order Securely
                  </button>
                  <p className="text-center font-label-xs text-label-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-xs">shield</span>
                    AES-256 Encrypted Connection
                  </p>
                </div>
              </div>
              {/* Map/Delivery Status Card */}
              <div className="bg-primary/5 rounded-xl border border-primary/10 p-md flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">bolt</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm font-bold text-primary">Farm-to-Door Delivery</p>
                  <p className="font-label-xs text-label-xs text-primary/70">Estimated: Tomorrow by 10:00 AM</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Bottom Navigation (Mobile Only Shell) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-2 bg-white/80 backdrop-blur-md border-t border-gray-200">
        <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-xs text-label-xs">Home</span>
        </div>
        <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1">
          <span className="material-symbols-outlined">storefront</span>
          <span className="font-label-xs text-label-xs">Market</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#1B6D24] bg-green-50 dark:bg-green-900/20 rounded-xl px-4 py-1">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
          <span className="font-label-xs text-label-xs">Orders</span>
        </div>
        <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 px-4 py-1">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-xs text-label-xs">Profile</span>
        </div>
      </nav>

      {/* Separation Padding for Bottom Nav */}
      <div className="h-24 md:hidden"></div>
    </>
  );
}

function MyOrdersPage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 shadow-none sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 py-3 h-16 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3">
            <div className="h-8 rounded-lg overflow-hidden flex-shrink-0 w-10">
              <img alt="KIZ FARM Official Logo" className="w-full h-full object-contain" data-alt="Minimalist agricultural logo with a stylized green leaf and modern geometric structure, professional branding" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
            </div>
            <h1 className="font-inter antialiased text-sm font-medium font-extrabold tracking-tight text-[#1B6D24] dark:text-green-500 text-xl">KIZ FARM</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 dark:text-zinc-400 hover:opacity-80 transition-opacity active:scale-95 duration-150">
              <span className="material-symbols-outlined" data-icon="search">search</span>
            </button>
            <button className="text-gray-500 dark:text-zinc-400 hover:opacity-80 transition-opacity active:scale-95 duration-150">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-8">
        {/* Section Header */}
        <div className="mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Track Your Order</h2>
          <p className="text-secondary font-body-md max-w-2xl">Monitor your recent agricultural purchases, delivery statuses, and transaction history in real-time.</p>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-sm mb-md overflow-x-auto pb-2">
          <button className="bg-primary-container text-on-primary px-6 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap">All Orders</button>
          <button className="bg-white border border-outline-variant text-secondary px-6 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap hover:bg-surface-container transition-colors">Processing</button>
          <button className="bg-white border border-outline-variant text-secondary px-6 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap hover:bg-surface-container transition-colors">Shipped</button>
          <button className="bg-white border border-outline-variant text-secondary px-6 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap hover:bg-surface-container transition-colors">Delivered</button>
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Order Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-md flex flex-col gap-md transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] group">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label-xs text-label-xs text-secondary mb-1">ORDER ID</p>
                <h3 className="font-headline-md text-headline-md text-on-surface">#KF-88219</h3>
              </div>
              <span className="bg-[#1B6D24] text-white px-3 py-1 rounded-full font-label-xs text-label-xs uppercase tracking-wider">Shipped</span>
            </div>
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-surface-variant flex-shrink-0">
                <img alt="Fresh Tomatoes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close-up of vibrant red vine-ripened tomatoes in a rustic wooden crate, natural sunlight, earthy textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABBrOKdEfukzXoSoGBYOgUZ2IznuVkCnknO38-raOa_o7BZlwliIodDGEFRzWvZKVqWXnKb7lFa_-kx_B7jUKJaGqT3y8OtdrF1uZ7ZEGrZB58cfVxM51ZNFXumUidM_fgZMv_W7r-6zYsniVCjCMegAwzvJVjHV5tb_zMY-y3y9p6zQv3SI-QOE8K6zqKStABc8aBLlnWnU9di-EVxXv_FcG3ob_cYHrRVrsKU5lHBU30YYfBtt4FIZL_leHeYni1kaZK1vR6yow" />
              </div>
              <div className="flex-1">
                <p className="font-label-sm text-label-sm text-on-surface">Organic Roma Tomatoes</p>
                <p className="font-body-md text-secondary text-sm">Oct 24, 2023</p>
              </div>
            </div>
            <div className="pt-md border-t border-gray-100 flex justify-between items-center">
              <p className="font-headline-md text-headline-md text-[#1B6D24]">₦12,500.00</p>
              <button className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:underline">
                Details <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Order Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-md flex flex-col gap-md transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] group">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label-xs text-label-xs text-secondary mb-1">ORDER ID</p>
                <h3 className="font-headline-md text-headline-md text-on-surface">#KF-88104</h3>
              </div>
              <span className="bg-tertiary-container text-on-tertiary-fixed px-3 py-1 rounded-full font-label-xs text-label-xs uppercase tracking-wider">Processing</span>
            </div>
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-surface-variant flex-shrink-0">
                <img alt="Fertilizer Sacks" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Sacks of premium organic fertilizer stacked in a clean, modern agricultural warehouse with soft overhead lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfmUW1e7F8DTpZy3_7G8EL_1y8mglS5RzfwqZANomocyDdVwhni8w-9EQPupV4tnYD_8jNn-oWzoRfA5n8kJNWtA6vTXWvSFS-homWaYKnAYoz9tJNt2tmJ_80LFSzWHP9HpcfVHpSzOVZ8HGYr0oVT602WVTljlkiH8OO9LNx-z8Yf8PJGvyjg52ZYNxN4ImMaUFrHPvCqrURsJ7WE306IPbgRoo1oe1bDaGg_oxR4Yoj_H-VPSo5cuGv6q-bOftiHtfbQremhCE" />
              </div>
              <div className="flex-1">
                <p className="font-label-sm text-label-sm text-on-surface">NPK 15-15-15 (50kg)</p>
                <p className="font-body-md text-secondary text-sm">Oct 22, 2023</p>
              </div>
            </div>
            <div className="pt-md border-t border-gray-100 flex justify-between items-center">
              <p className="font-headline-md text-headline-md text-[#1B6D24]">₦45,200.00</p>
              <button className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:underline">
                Details <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Order Card 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-md flex flex-col gap-md transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] group">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label-xs text-label-xs text-secondary mb-1">ORDER ID</p>
                <h3 className="font-headline-md text-headline-md text-on-surface">#KF-87992</h3>
              </div>
              <span className="bg-surface-container-highest text-secondary px-3 py-1 rounded-full font-label-xs text-label-xs uppercase tracking-wider">Delivered</span>
            </div>
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-surface-variant flex-shrink-0">
                <img alt="Seedlings" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Tray of young green vegetable seedlings in a nursery with soft morning mist and diffused sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_D39EERRsZO-E4UzvIqfdUrwybnPONC-y8p0M25Vn0oiHfPOcT2j5ytfupVQ__dAaeMTRSKxPxhvfVq5iq7pwVB3GEELZGriYvYLxLCORsKbQgTSW-1WUaYObzrKi7aQMh4aUU2D-mpD7wl6Doe0UX0kl_cJsMwKGWAB_YdPDUGRmUc4jXVYr8rOuUPYAoiQcArxvQrmmyfryen0nLfYSl5f7cIAMQnRot8L2ZMlyHAtG4PLmI1pkElmycaQA0Gb9a2ODmm0SfpM" />
              </div>
              <div className="flex-1">
                <p className="font-label-sm text-label-sm text-on-surface">Hybrid Corn Seeds x5</p>
                <p className="font-body-md text-secondary text-sm">Oct 18, 2023</p>
              </div>
            </div>
            <div className="pt-md border-t border-gray-100 flex justify-between items-center">
              <p className="font-headline-md text-headline-md text-[#1B6D24]">₦8,750.00</p>
              <button className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:underline">
                Details <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Order Card 4 */}
          <div className="bg-white border border-gray-200 rounded-xl p-md flex flex-col gap-md transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] group">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label-xs text-label-xs text-secondary mb-1">ORDER ID</p>
                <h3 className="font-headline-md text-headline-md text-on-surface">#KF-87850</h3>
              </div>
              <span className="bg-surface-container-highest text-secondary px-3 py-1 rounded-full font-label-xs text-label-xs uppercase tracking-wider">Delivered</span>
            </div>
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-surface-variant flex-shrink-0">
                <img alt="Irrigation Tools" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close-up of high-precision drip irrigation nozzles on dark fertile soil, macro photography focusing on water droplets" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXCi_Ela7C-7oH7jjRHJegbYhgTnd2vE6XX8zhIbF8OnLFd2vwIZd2D0A2o4-BLaGqG-HbKo_FwrbIhiZl3s2D3ehf9IYAol0mFgSvUPDCsJvBRXcu2V4eRpmlz8V83gsUmsyoCf9awb0jxdR8kW4s2sgLcVEQPK4TxeNT_eglnxycwqRbBjSp55CJ9SKBmyVFDD4NxpTINDIsAHgnle-tyI__v2V-Z2bKBEwujpsSHMYmDmhSAWkgxVkBosLrnk5_4-G6HLomR44" />
              </div>
              <div className="flex-1">
                <p className="font-label-sm text-label-sm text-on-surface">Drip Irrigation Kit</p>
                <p className="font-body-md text-secondary text-sm">Oct 15, 2023</p>
              </div>
            </div>
            <div className="pt-md border-t border-gray-100 flex justify-between items-center">
              <p className="font-headline-md text-headline-md text-[#1B6D24]">₦125,000.00</p>
              <button className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:underline">
                Details <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Empty State / Add Placeholder */}
          <div className="border-2 border-dashed border-outline-variant rounded-xl p-md flex flex-col items-center justify-center text-center gap-sm bg-surface-container-low/50">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
            </div>
            <div>
              <h4 className="font-label-sm text-label-sm text-on-surface">Start a new order</h4>
              <p className="text-secondary text-xs mt-1">Browse our latest farm produce</p>
            </div>
            <button className="mt-xs border border-primary text-primary px-4 py-1.5 rounded-lg font-label-xs text-label-xs hover:bg-primary hover:text-white transition-colors">Go to Market</button>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-white dark:bg-zinc-950 h-20 pb-safe border-t border-gray-100 dark:border-zinc-800 shadow-[0_-10px_30px_rgba(27,109,36,0.05)]">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] dark:text-green-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="shopping_bag" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Profile</span>
        </a>
      </nav>
    </>
  );
}

function TrackOrderPage() {
  return (
    <>
      <header className="bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 flex justify-between items-center w-full px-6 py-3 h-16 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img alt="KIZ FARM Logo" className="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
          <span className="font-inter antialiased text-sm font-medium text-xl font-extrabold tracking-tight text-[#1B6D24] dark:text-green-500">KIZ FARM</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-gray-500 hover:opacity-80 transition-opacity active:scale-95 duration-150" data-icon="notifications">notifications</button>
          <button className="material-symbols-outlined text-gray-500 hover:opacity-80 transition-opacity active:scale-95 duration-150" data-icon="menu">menu</button>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-12 lg:py-xl">
        <div className="mb-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-headline-xl text-headline-xl text-primary mb-2">Track Your Harvest</h1>
              <p className="text-secondary font-body-md">Order #KF-92841 • Placed Oct 24, 2023</p>
            </div>
            <div className="bg-surface-container-low border border-gray-200 rounded-xl p-6 flex items-center gap-4 min-w-[300px]">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1B6D24]"></span>
              </div>
              <div>
                <p className="font-label-xs text-label-xs text-secondary uppercase">Live Status</p>
                <p className="font-headline-md text-headline-md text-[#1B6D24]">In Transit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-7 bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="font-headline-md text-headline-md mb-8">Delivery Progress</h2>
            <div className="relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-100"></div>

              <div className="relative flex gap-6 mb-10 items-start">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#1B6D24] text-white">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-md text-[18px] text-[#1B6D24]">Order Placed</h3>
                  <p className="text-secondary text-label-sm">Oct 24, 09:12 AM</p>
                  <p className="mt-1 text-on-surface-variant font-body-md">Your order has been received by the Kiz Farm system.</p>
                </div>
              </div>

              <div className="relative flex gap-6 mb-10 items-start">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#1B6D24] text-white">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-md text-[18px] text-[#1B6D24]">Confirmed by Farmer</h3>
                  <p className="text-secondary text-label-sm">Oct 24, 11:45 AM</p>
                  <p className="mt-1 text-on-surface-variant font-body-md">Green Valley Organics has confirmed your selection for harvest.</p>
                </div>
              </div>

              <div className="relative flex gap-6 mb-10 items-start">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#1B6D24] text-white">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-md text-[18px] text-[#1B6D24]">Packed</h3>
                  <p className="text-secondary text-label-sm">Oct 25, 06:30 AM</p>
                  <p className="mt-1 text-on-surface-variant font-body-md">Produce was harvested and packed in sustainable bio-containers.</p>
                </div>
              </div>

              <div className="relative flex gap-6 mb-10 items-start">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#1B6D24] text-white">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-md text-[18px] text-[#1B6D24]">Picked up by Driver</h3>
                  <p className="text-secondary text-label-sm">Oct 25, 08:15 AM</p>
                  <p className="mt-1 text-on-surface-variant font-body-md">Courier has collected the package from the farm gates.</p>
                </div>
              </div>

              <div className="relative flex gap-6 mb-10 items-start group">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#1B6D24] text-white ring-8 ring-green-50 ring-opacity-100">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-headline-md text-[18px] text-[#1B6D24]">In Transit</h3>
                    <span className="bg-primary-container text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Active</span>
                  </div>
                  <p className="text-secondary text-label-sm">In Progress</p>
                  <p className="mt-1 text-on-surface font-body-md font-medium">Expected delivery today by 4:00 PM.</p>
                </div>
                <div className="absolute left-[19px] top-10 h-10 w-0.5 bg-[#1B6D24]"></div>
              </div>

              <div className="relative flex gap-6 items-start opacity-40">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-500">
                  <span className="material-symbols-outlined text-[20px]">task_alt</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-md text-[18px]">Delivered</h3>
                  <p className="text-secondary text-label-sm">Pending</p>
                  <p className="mt-1 text-on-surface-variant font-body-md">Final delivery signature and photo confirmation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="h-64 w-full bg-slate-100 relative group overflow-hidden">
                <img alt="Live Map" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="aerial view of a modern clean city grid with a green delivery truck moving through a sunlit boulevard isometric style soft colors" data-location="Seattle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD_hdqAmPWkbq0uzhoCZA8N97gUsC1hfENbsm3GpKnmygXUpGyak4c6EdmnaHp7XPrqIEZDTzAjnCIeYlugY_gcgA3TVIIak_4Y0GVdsH2qwhKiq3TXNpLItQ6MY-6WAkdZ5hL_muE1OaYcKM782orIiGcJIUoh_ceu-sWVi5NOjHvMwXS7JJqBuMmoiSIvR0wUaIbs5_TitaPokR3iLIyu7seNaCi-hrZPo934sgSg0mDYwX4BfMtkfz4mV3A610o4fkpv1tH48c" />
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg border border-gray-200 text-label-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Live Location
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-label-xs text-secondary uppercase mb-1">Estimated Arrival</p>
                    <p className="font-headline-md text-headline-md text-primary">15:45 - 16:15</p>
                  </div>
                  <button className="bg-[#1B6D24] text-white px-4 py-2 rounded-lg font-label-sm hover:opacity-90 transition-opacity">View Map</button>
                </div>
                <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-lg border border-gray-100">
                  <img alt="Driver" className="w-12 h-12 rounded-full object-cover border-2 border-white" data-alt="portrait of a friendly middle-aged delivery driver wearing a green polo shirt natural lighting outdoors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRfzrP7v9nuKpdg51yoGz3LfRbd9-jw4-hayHl4h1qyPaPCQ4_nsmbzlxgifB4huWBjGxWkppVwDSv5qFS98aqqJqbINHTr335aIfYpgN0Zx7Hd1EaALKyuiEW66iZ7i3-oMTrRzxcNca-Ux1J0aDP3ajQZut6nWwGt0RwZEQxnXqOgCfHv7WGSdn_TvTlcmEYIH3q37eQO0_gU3Mra-YMaEVQ6PuJighZRr8Ry0VDy6SVehg7CHazuOBNxs7vW_JpFU1AOGx_8e0" />
                  <div>
                    <p className="font-label-sm text-on-surface">Marcus Chen</p>
                    <p className="text-label-xs text-secondary">Verified Logistics Partner</p>
                  </div>
                  <button className="ml-auto material-symbols-outlined text-primary p-2 bg-white rounded-full border border-gray-200" data-icon="call">call</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-headline-md text-[18px] mb-4">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img alt="Kale" className="w-14 h-14 rounded-lg object-cover" data-alt="close up of fresh organic green kale with water droplets white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyFWAv35NNAScD61--7FBl_8Jx-9DqJsdZ8IQ0sj8lQjZfrr2JYJ_rCgZ2ufgnsl7dpmjObKZzsDDS2kMI_qlk-YSYuGeWJqCImmzcpWoFaBC_BFTfmuoyR6wrnxmpTsjDY5f4td44q_2Iy-bKRcvyQfEZDcmlC5LydNggthmFDKIivtZYtf-uwBd_21agVoHMOX2MoSXUPiObmPJ9Xn2o11FlBJNsGCvn2Wrg8LG1Cr6sLLIMF4PJrElzK0JFBOSiwpkt-ZIz8wQ" />
                  <div className="flex-1">
                    <p className="font-label-sm">Organic Curly Kale</p>
                    <p className="text-label-xs text-secondary">2.5 lbs • $12.50</p>
                  </div>
                  <span className="bg-secondary-container text-secondary text-[10px] px-2 py-0.5 rounded-full font-bold">Irrigated</span>
                </div>
                <div className="flex items-center gap-4">
                  <img alt="Carrots" className="w-14 h-14 rounded-lg object-cover" data-alt="basket of freshly harvested heritage carrots vibrant orange and purple with green tops white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdIAsIXX2nGriQ6nw6tK6r1x4sYqdFmDL4qmawF7tB2COCc5BCMcaF4uPENpMtflV-Gw5q7KwKlf0Yxzy20sxgJOUpUeMmFiaMFAmf8cHAzOz9-hHaQzon88KtuSAH9FUFgSgJgzPvSJea5iaKhLVrKZdZfpO8SLVDVI1VOwyBq6bqgyz7-ObtVr-BYNKqdeaQ_dK5PpScILr4OGmUraoTVUrzH6zOJYq_qS8QTVHDDAKJQZ_Tx40UBI404TCAaFtl1twVRW4iNp8" />
                  <div className="flex-1">
                    <p className="font-label-sm">Heirloom Carrots</p>
                    <p className="text-label-xs text-secondary">1.0 lb • $5.00</p>
                  </div>
                  <span className="bg-secondary-container text-secondary text-[10px] px-2 py-0.5 rounded-full font-bold">Harvested</span>
                </div>
                <hr className="border-gray-100" />
                <div className="flex justify-between text-on-surface font-medium">
                  <span>Total (incl. tax)</span>
                  <span>$17.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-white dark:bg-zinc-950 h-20 pb-safe border-t border-gray-100 dark:border-zinc-800 shadow-[0_-10px_30px_rgba(27,109,36,0.05)] md:hidden">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] dark:text-green-500 p-2 active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="shopping_bag" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Profile</span>
        </a>
      </div>
    </>
  );
}

function OrderDetailPage() {
  return (
    <>
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 flex justify-between items-center w-full px-6 py-3 h-16">
        <div className="flex items-center gap-3">
          <img alt="KIZ FARM Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-gray-500 dark:text-zinc-400 hover:opacity-80 transition-opacity active:scale-95 duration-150">notifications</button>
          <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
            <img alt="User Profile" className="h-full w-full object-cover" data-alt="Professional headshot of a smiling man in a business casual outfit with a neutral studio background and soft lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBBQTDYPVqlEFIiaUNU93CBi3qRh76HOdyjJPyUFoltM457AswyjN5M_h4CdvmkQT9urretCVZUdKmZdmZf0OILuZibpvq-G-EjGLPMn7iuny03aBQDo3epuzz0ArCjv02EQWR_1vBHHQkc6OyuSeQOtep2HrloI8q6217px-j1ZDfW-S_o9sBaUT59jyylRU9zhEciHwPbrNz5iHkWxcmnaV-RCbMzM9UCl8f8MsQv8IkR4exzr8uXdn-jt8r151e9FDAxze0xhk" />
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-margin py-lg lg:grid lg:grid-cols-12 lg:gap-gutter">
        {/* Main Content (8 Columns) */}
        <div className="lg:col-span-8 space-y-md">
          {/* Order Header & Progress Tracker */}
          <section className="bg-white border border-gray-200 p-md rounded-xl custom-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-sm mb-md">
              <div>
                <h1 className="font-headline-md text-headline-md text-on-surface">Order #KF-9284-A</h1>
                <p className="font-body-md text-label-sm text-secondary">Placed on October 12, 2023 • 09:42 AM</p>
              </div>
              <div className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full font-label-xs self-start md:self-center">
                IN TRANSIT
              </div>
            </div>

            {/* Progress Tracker */}
            <div className="relative pt-sm">
              <div className="flex justify-between mb-2">
                <div className="flex flex-col items-center flex-1">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white z-10">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <span className="font-label-xs mt-2 text-primary">Placed</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white z-10">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <span className="font-label-xs mt-2 text-primary">Harvested</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed-dim border-2 border-primary flex items-center justify-center text-primary z-10">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                  </div>
                  <span className="font-label-xs mt-2 text-primary">Shipped</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-gray-400 z-10">
                    <span className="material-symbols-outlined text-sm">home_pin</span>
                  </div>
                  <span className="font-label-xs mt-2 text-gray-400">Delivered</span>
                </div>
              </div>
              <div className="absolute top-12 left-0 w-full h-1 bg-gray-100 -z-0 translate-y-[-1px]">
                <div className="h-full bg-primary w-2/3"></div>
              </div>
            </div>
          </section>

          {/* Item List (Bento-style layout) */}
          <section className="space-y-sm">
            <h2 className="font-headline-md text-headline-md text-on-surface px-xs">Items in your harvest</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
              {/* Item 1 */}
              <div className="bg-white border border-gray-200 p-sm rounded-xl flex gap-md hover:border-primary-container transition-all group custom-shadow">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img alt="Fresh Tomatoes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" data-alt="Close-up of vibrant red organic vine tomatoes with green stalks on a rustic wooden farm table with soft natural light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0AHqxNPldyi5DkkEoLrkV7SNlsSgFEq-rOcr5t10W_T9F1JOQisQLmkqjFe-KGkn5mQNDOw1rjOF0xR3PnGl6rGIpGRU5_ObS_iblze8He7E8iiln8yDnBdVjkAVw5NRt3wbU-_phbfpgA7HQyhNBjOOpzWi2GAwbT_eZ_Ivz1TFP3iSC0OsXHUzZ5xXkqXXzatOh9DGjIfhVP3CuCIvO461jZh-JbFj5zomIP_TnrCq6n17VlKAa7vzQ6aZafzod5DDirs7tjkU" />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline-md text-body-lg font-bold">Organic Roma Tomatoes</h3>
                    <span className="font-label-sm text-primary">₦4,200</span>
                  </div>
                  <p className="font-body-md text-secondary text-label-sm">Quantity: 2 kg</p>
                  <div className="mt-base flex gap-xs">
                    <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold border border-green-100">IRRIGATED</span>
                    <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold border border-green-100">PEST-FREE</span>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-white border border-gray-200 p-sm rounded-xl flex gap-md hover:border-primary-container transition-all group custom-shadow">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img alt="Fresh Potatoes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" data-alt="A heap of earthy unwashed organic potatoes freshly harvested from the soil, captured in high-detail documentary style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB48BhCbGONmNIpX7ZMf9_7mtlZ0gGJE3WezKbZGoNpTZYm8ZYZpFid2rQ5CCb3jGI7DEkledBfIQjlgX-qwWLOFr0Sm7olCrO2tJ2WlP-6IQJCV4rNJ_rZYxEjeS_6ihpPDlRPZwSTySa-L67k-N3Om-LbI7T5gmOLHTKKSTH8fD15o1XpNL96yjZrKn4Vu0TVuioZChCvNqJRT5UR1gSOf4SIDYtrQhN8EGkCbp5JSs2BEYDmF2IDJP3G8iCqKTSnzpIqFvG81W8" />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline-md text-body-lg font-bold">Irish Potatoes</h3>
                    <span className="font-label-sm text-primary">₦7,500</span>
                  </div>
                  <p className="font-body-md text-secondary text-label-sm">Quantity: 5 kg</p>
                  <div className="mt-base flex gap-xs">
                    <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold border border-green-100">RAIN-FED</span>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-white border border-gray-200 p-sm rounded-xl flex gap-md hover:border-primary-container transition-all group custom-shadow">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img alt="Fresh Carrots" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" data-alt="Bunch of bright orange carrots with green leafy tops on a neutral textured background with dramatic side lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT7WjLija1W5gEXl73YijFdVVNt7k3LdtIfeVbiMuLRhDqUtxf3RtXzaeof6cZmq80fU6mt-SGdu-L2bom5jiHrpWzUbmBDt1NRAzmqwkWTrpOxs-pJWOxZ2hZln2-Rf3VevC86PnwLIDPETYDZeVz8KvsiICHId7uFR8_KI5b-tUcfmLaaQ1x85T2Od1vzljHqS5gI0Vk_vIYAmy_dt-ZAUIG7jRYgpi9Bqdhbfnt76qnTFmuvmzKO_TPULcCyiCuyUckPIScAY4" />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline-md text-body-lg font-bold">Nantes Carrots</h3>
                    <span className="font-label-sm text-primary">₦2,800</span>
                  </div>
                  <p className="font-body-md text-secondary text-label-sm">Quantity: 1.5 kg</p>
                  <div className="mt-base flex gap-xs">
                    <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold border border-green-100">ORGANIC</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support Footer (Mobile only) */}
          <div className="lg:hidden flex flex-col items-center py-md space-y-md">
            <p className="font-body-md text-secondary text-center">Need help with this order?</p>
            <button className="w-full h-12 bg-white border border-[#1B6D24] text-[#1B6D24] rounded-lg font-label-sm flex items-center justify-center gap-2 active:scale-95 transition-all">
              <span className="material-symbols-outlined">support_agent</span>
              Contact Support
            </button>
          </div>
        </div>

        {/* Sidebar (4 Columns) */}
        <aside className="lg:col-span-4 space-y-md">
          {/* Order Summary Card */}
          <section className="bg-white border border-gray-200 rounded-xl p-md custom-shadow">
            <h3 className="font-headline-md text-body-lg font-bold mb-md">Order Summary</h3>
            <div className="space-y-sm">
              <div className="flex justify-between font-body-md text-secondary">
                <span>Subtotal</span>
                <span>₦14,500.00</span>
              </div>
              <div className="flex justify-between font-body-md text-secondary">
                <span>Tax (VAT 7.5%)</span>
                <span>₦1,087.50</span>
              </div>
              <div className="flex justify-between font-body-md text-secondary">
                <span>Delivery Fee</span>
                <span>₦1,200.00</span>
              </div>
              <div className="pt-sm border-t border-gray-100 flex justify-between items-center">
                <span className="font-headline-md text-body-lg font-bold">Total</span>
                <span className="font-headline-lg text-headline-md text-primary">₦16,787.50</span>
              </div>
            </div>
            <div className="mt-md p-sm bg-green-50 border border-green-100 rounded-lg flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <div>
                <p className="font-label-xs text-primary uppercase">Payment Status</p>
                <p className="font-body-md text-on-surface font-semibold">Paid via Paystack</p>
              </div>
            </div>
          </section>

          {/* Farmer & Delivery Info */}
          <section className="bg-white border border-gray-200 rounded-xl p-md custom-shadow">
            <div className="space-y-md">
              {/* Farmer Info */}
              <div>
                <h4 className="font-label-xs text-secondary uppercase tracking-widest mb-sm">Farmer Information</h4>
                <div className="flex items-center gap-sm">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img alt="Farmer Musa" className="w-full h-full object-cover" data-alt="A portrait of an elderly African farmer with a warm smile, wearing a traditional hat, standing in a sun-drenched field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTO3etGwJCmTNFzJfjpusD0VZyI9yTX-13wjL7YzUEKlFg7G75xJ6Vdbp0tDPNPTgV9UuQ84UKk1-I4Bc0JmutL2aWd0U01cvviLZnyklgka-G-ouPdMYZxau5kU_xYEneDEnZyZB9J30HzTAUZvP5nha7g_dw6hD13qy8H40TjaAZrEW92ikskktfgdYXslKe0CAhwoHT1L3MG_3V8_nJTIwTEbQCNZLMZlzeq-2ipgTHWHw9TUuBPqfnHyI0AARapzEb5wFxqJE" />
                  </div>
                  <div>
                    <p className="font-body-md font-bold text-on-surface">Musa Abubakar</p>
                    <p className="font-label-xs text-secondary">Green Horizon Estate, Kaduna</p>
                  </div>
                  <button className="ml-auto w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-primary hover:bg-green-50 active:scale-90 transition-all">
                    <span className="material-symbols-outlined text-sm">chat</span>
                  </button>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="pt-md border-t border-gray-100">
                <h4 className="font-label-xs text-secondary uppercase tracking-widest mb-sm">Delivery Address</h4>
                <div className="flex gap-sm">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                  <div>
                    <p className="font-body-md font-semibold text-on-surface">Home - Sarah Okafor</p>
                    <p className="font-body-md text-secondary text-sm">Block 4, Flat 12, Ocean View Estate<br />Victoria Island, Lagos</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Desktop Support Button */}
          <button className="hidden lg:flex w-full h-12 bg-white border border-[#1B6D24] text-[#1B6D24] rounded-lg font-label-sm items-center justify-center gap-2 hover:bg-green-50 active:scale-95 transition-all">
            <span className="material-symbols-outlined">support_agent</span>
            Contact Support
          </button>
        </aside>
      </main>

      {/* Bottom Navigation Bar (Mobile only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-white dark:bg-zinc-950 h-20 pb-safe border-t border-gray-100 dark:border-zinc-800 shadow-[0_-10px_30px_rgba(27,109,36,0.05)]">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">storefront</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] dark:text-green-500 p-2 active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Profile</span>
        </a>
      </nav>

      {/* Spacing for Bottom Nav on Mobile */}
      <div className="h-20 md:hidden"></div>
    </>
  );
}

function NotificationPage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 flex justify-between items-center px-6 py-3 h-16">
        <div className="flex items-center gap-3">
          <img alt="KIZ FARM Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:opacity-80 transition-opacity active:scale-95 duration-150 text-[#1B6D24]">
            <span className="material-symbols-outlined" data-icon="notifications" style={{ fontVariationSettings: "'FILL' 1" }}>notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
            <img className="w-full h-full object-cover" data-alt="portrait of a professional farm manager wearing a neutral colored shirt in bright natural daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQURTiqM3TE8Xh2AotYv-WPeDRM68KlBuY7PImbaOUj0HRVYPx62EOOohlGIh4RI57p19ITrHU5psmrt7S3OHtEz5pAe_VWoL1MvAH-bgmATfNOdk8cmdk_M82_FZLKQLBRGo0T6AGp_cvEJTYodRLc19BaAln-srjTTfZp97tz2rMrgpHjhMplQx20lgrcUL1AJ5BP2PWsdTsG9IYjyhcHfgYAuIRUnHmMtm3Q0b2Ix8S4VTOMnnP1YpQ4mpijUR6PxUuXDs_PqM" />
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto pt-24 px-margin md:px-lg">
        {/* Hero Section */}
        <section className="mb-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
            <div>
              <h1 className="font-headline-lg text-primary mb-xs">Notifications</h1>
              <p className="font-body-md text-secondary">Stay updated with your farm operations and orders.</p>
            </div>
            <div className="flex gap-base">
              <button className="px-md h-12 border border-outline text-primary font-label-sm rounded-lg hover:bg-surface-container transition-colors">Mark all as read</button>
              <button className="px-md h-12 border border-outline text-primary font-label-sm rounded-lg hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-[20px] align-middle" data-icon="filter_list">filter_list</span>
                Filters
              </button>
            </div>
          </div>
        </section>

        {/* Notification Feed */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-base">
            {/* Date Header */}
            <div className="py-base">
              <h2 className="font-label-sm text-secondary uppercase tracking-widest">Today</h2>
            </div>

            {/* Notification Item: Order Update (Unread) */}
            <div className="unread-tint border border-gray-100 rounded-xl p-md flex gap-md items-start transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-md text-[18px] text-primary">Order Out for Delivery</h3>
                  <span className="font-label-xs text-outline">2m ago</span>
                </div>
                <p className="font-body-md text-secondary mt-xs">Your order #KF-8821 containing 50kg of Organic Fertilizer is out for delivery with our logistics partner.</p>
                <div className="mt-sm flex items-center gap-xs">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-label-xs text-primary">Unread</span>
                </div>
              </div>
            </div>

            {/* Notification Item: Payment Success (Unread) */}
            <div className="unread-tint border border-gray-100 rounded-xl p-md flex gap-md items-start transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-md text-[18px] text-primary">Payment Successful</h3>
                  <span className="font-label-xs text-outline">45m ago</span>
                </div>
                <p className="font-body-md text-secondary mt-xs">Payment of $1,240.00 for your seasonal seed subscription has been processed successfully.</p>
                <div className="mt-sm flex items-center gap-xs">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-label-xs text-primary">Unread</span>
                </div>
              </div>
            </div>

            {/* Date Header */}
            <div className="py-base mt-md">
              <h2 className="font-label-sm text-secondary uppercase tracking-widest">Yesterday</h2>
            </div>

            {/* Notification Item: Message */}
            <div className="bg-white border border-gray-100 rounded-xl p-md flex gap-md items-start transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-secondary">
                <span className="material-symbols-outlined" data-icon="chat">chat</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-md text-[18px] text-on-surface">Message from Agronomist</h3>
                  <span className="font-label-xs text-outline">Yesterday, 4:20 PM</span>
                </div>
                <p className="font-body-md text-secondary mt-xs">"Based on the recent soil test from Plot B, I recommend increasing the nitrogen levels by 15% before the next rain cycle."</p>
                <div className="mt-sm">
                  <button className="text-primary font-label-sm hover:underline">Reply Now</button>
                </div>
              </div>
            </div>

            {/* Notification Item: Order Update */}
            <div className="bg-white border border-gray-100 rounded-xl p-md flex gap-md items-start transition-all hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-secondary">
                <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-md text-[18px] text-on-surface">Order Received</h3>
                  <span className="font-label-xs text-outline">Yesterday, 10:15 AM</span>
                </div>
                <p className="font-body-md text-secondary mt-xs">Your order #KF-8819 for Wheat Seeds has been confirmed and is being prepared for dispatch.</p>
              </div>
            </div>
          </div>

          {/* Sidebar / Stats */}
          <div className="lg:col-span-4 space-y-gutter">
            {/* Promo / Summary Card */}
            <div className="bg-primary p-md rounded-xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-headline-md text-[20px] mb-xs">Farm Insights</h4>
                <p className="font-body-md opacity-90 mb-md">You have 2 pending tasks requiring immediate attention.</p>
                <button className="w-full h-12 bg-white text-primary font-label-sm rounded-lg hover:bg-opacity-90 transition-all">View Dashboard</button>
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <span className="material-symbols-outlined text-[120px]" data-icon="analytics">analytics</span>
              </div>
            </div>

            {/* Quick Filters Card */}
            <div className="border border-gray-200 rounded-xl p-md">
              <h4 className="font-label-sm text-secondary uppercase tracking-widest mb-md">Notification Settings</h4>
              <div className="space-y-sm">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="font-body-md text-on-surface">Order Updates</span>
                  <input checked defaultChecked className="rounded text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="font-body-md text-on-surface">Payment Alerts</span>
                  <input checked defaultChecked className="rounded text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="font-body-md text-on-surface">Direct Messages</span>
                  <input checked defaultChecked className="rounded text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="font-body-md text-on-surface">Market Trends</span>
                  <input className="rounded text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                </label>
              </div>
              <hr className="my-md border-gray-100" />
              <button className="w-full text-center text-primary font-label-sm hover:underline">Manage preferences</button>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-white h-20 pb-safe border-t border-gray-100 shadow-[0_-10px_30px_rgba(27,109,36,0.05)] md:hidden">
        <a className="flex flex-col items-center justify-center text-gray-400 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="person" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Profile</span>
        </a>
      </nav>
    </>
  );
}

function PaymentPage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 shadow-none sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 py-3 h-16 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:opacity-80 transition-opacity active:scale-95 duration-150">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="flex items-center gap-2">
              <img alt="KIZ FARM logo" className="h-8 w-8 object-contain" data-alt="Official KIZ FARM logo featuring a green 'K' with 'KIZ FARM' and 'KIZ EMPIREX' branding" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
              <span className="text-xl font-extrabold tracking-tight text-[#1B6D24] dark:text-green-500 font-inter antialiased">KIZ FARM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[#1B6D24] dark:text-green-500 hover:opacity-80 transition-opacity active:scale-95 duration-150">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-margin py-lg lg:py-xl">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="mb-lg">
            <h1 className="font-headline-lg text-headline-lg text-primary mb-xs">Payment Methods</h1>
            <p className="font-body-md text-body-md text-secondary">Manage your saved cards and payment preferences for secure agricultural transactions.</p>
          </div>

          {/* Bento Layout for Payment Methods */}
          <div className="grid grid-cols-1 gap-gutter">
            {/* Saved Cards List */}
            <div className="space-y-md">
              <h2 className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Saved Cards</h2>

              {/* Card 1: Primary */}
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-md flex items-center justify-between hover:border-primary transition-colors group">
                <div className="flex items-center gap-md">
                  <div className="w-16 h-10 bg-surface-container-low rounded flex items-center justify-center p-2">
                    <span className="material-symbols-outlined text-primary text-3xl">credit_card</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-label-sm text-body-md text-on-surface">Visa ending in 4242</p>
                      <span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed rounded-full text-[10px] font-bold uppercase tracking-tighter">Primary</span>
                    </div>
                    <p className="font-label-xs text-label-xs text-secondary mt-0.5">Expires 12/26</p>
                  </div>
                </div>
                <div className="flex items-center gap-sm">
                  <button className="p-2 text-outline hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="p-2 text-outline hover:text-error transition-colors">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-md flex items-center justify-between hover:border-primary transition-colors">
                <div className="flex items-center gap-md">
                  <div className="w-16 h-10 bg-surface-container-low rounded flex items-center justify-center p-2">
                    <span className="material-symbols-outlined text-primary text-3xl">payments</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-body-md text-on-surface">Mastercard ending in 8801</p>
                    <p className="font-label-xs text-label-xs text-secondary mt-0.5">Expires 09/25</p>
                  </div>
                </div>
                <div className="flex items-center gap-sm">
                  <button className="p-2 text-outline hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="p-2 text-outline hover:text-error transition-colors">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full h-12 flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:opacity-90 active:scale-[0.98] transition-all">
              <span className="material-symbols-outlined">add</span>
              Add New Method
            </button>

            {/* Trust Indicators (Asymmetric Layout/Bento Element) */}
            <div className="mt-lg grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="bg-surface-container-low rounded-xl p-md border border-transparent">
                <div className="flex items-center gap-base mb-sm">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  <h3 className="font-label-sm text-label-sm text-on-surface">Secure Transactions</h3>
                </div>
                <p className="font-body-md text-label-xs text-secondary">Your payment information is encrypted and protected by industry-leading security protocols.</p>
              </div>
              <div className="bg-surface-container-low rounded-xl p-md border border-transparent">
                <div className="flex items-center gap-base mb-sm">
                  <span className="material-symbols-outlined text-primary">history</span>
                  <h3 className="font-label-sm text-label-sm text-on-surface">Payment History</h3>
                </div>
                <p className="font-body-md text-label-xs text-secondary">Access complete records of your farm equipment purchases and supply subscriptions in your orders.</p>
              </div>
            </div>

            {/* Aesthetic Image Card */}
            <div className="relative overflow-hidden rounded-xl h-48 group mt-md">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute bottom-4 left-6 z-20">
                <p className="text-white font-headline-md text-headline-md">Sustainably Managed</p>
                <p className="text-white/80 font-label-xs text-label-xs uppercase">Powering the Future of Farming</p>
              </div>
              <img alt="Farm landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="expansive lush green crop field under a clear blue sky at sunset with warm golden hour light reflecting on the soil" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt5eBcr8ZP79C3IUFfDT3un3VB6FSPISgWDF7sfgPIGK75ddvY7wk3p0_iBgs31VyTCjEAPcvjz20-02pN9d6IjgPR4PFylY0EOJfeIr0LqnWT2lYV06sLyl9MYMnMCPAApL5ltUScFhz7_-LlP_yWgj7M123N-GQknSgc-nNML-ZdYTVofIiDIUjJrIHV1g-3WYqeS0EqCItTXTPxGR6b4oLcMLObK5Gk_5RtPKvNSCECWQPROCx6q6jP39-2Kvla3_tHyjiF0Gs" />
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-white dark:bg-zinc-950 h-20 pb-safe border-t border-gray-100 dark:border-zinc-800 shadow-[0_-10px_30px_rgba(27,109,36,0.05)]">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] dark:text-green-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Profile</span>
        </a>
      </nav>
    </>
  );
}

function AddressesPage() {
  return (
    <>
      {/* TopAppBar Shell */}
      <header className="bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-6 py-3 h-16">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#1B6D24]" data-icon="agriculture">agriculture</span>
            <img alt="KIZ FARM" className="h-8 w-auto" data-alt="minimalist professional logo for a modern agriculture technology brand featuring clean lines and organic shapes" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 dark:text-zinc-400 hover:opacity-80 transition-opacity active:scale-95 duration-150">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-lg">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col gap-2 mb-xl">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Saved Addresses</h1>
            <p className="font-body-md text-body-md text-secondary">Manage your delivery locations for fresh farm produce deliveries.</p>
          </div>

          {/* Address Grid/List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-xl">
            {/* Primary Address Card */}
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 relative group transition-all duration-200 hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)]">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1B6D24]" data-icon="home" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                  <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-full">Home</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-outline hover:text-primary transition-colors active:scale-95 duration-150">
                    <span className="material-symbols-outlined" data-icon="edit">edit</span>
                  </button>
                  <button className="p-2 text-outline hover:text-error transition-colors active:scale-95 duration-150">
                    <span className="material-symbols-outlined" data-icon="delete">delete</span>
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-md text-headline-md text-[#1B6D24]">Jonathan Aris</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  452 Organic Meadows, Greenhouse District<br />
                  Nairobi, 00100, Kenya
                </p>
                <p className="font-label-sm text-label-sm text-secondary mt-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]" data-icon="call">call</span>
                  +254 701 234 567
                </p>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 relative group transition-all duration-200 hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)]">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-outline" data-icon="business">business</span>
                  <span className="font-label-sm text-label-sm text-outline px-2 py-0.5 border border-outline-variant rounded-full">Work</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-outline hover:text-primary transition-colors active:scale-95 duration-150">
                    <span className="material-symbols-outlined" data-icon="edit">edit</span>
                  </button>
                  <button className="p-2 text-outline hover:text-error transition-colors active:scale-95 duration-150">
                    <span className="material-symbols-outlined" data-icon="delete">delete</span>
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-md text-headline-md text-on-surface">Jonathan Aris</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  AgriTech Hub, 3rd Floor, Silicon Savannah<br />
                  Westlands, Nairobi, Kenya
                </p>
                <p className="font-label-sm text-label-sm text-secondary mt-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]" data-icon="call">call</span>
                  +254 788 990 011
                </p>
              </div>
            </div>

            {/* Farm Address Card (Asymmetric detail) */}
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 relative group transition-all duration-200 hover:shadow-[0_10px_30px_rgba(27,109,36,0.05)] md:col-span-2">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-32 rounded-lg bg-surface-container-low overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover bg-center" data-alt="minimalist topographical map showing green vegetation zones and rural roads with soft green and grey tones" data-location="Nairobi" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAU60kn3aHJ_r57rhaEToAekX44tlCUyaXWIwuPrehdKhG0dzyOj_1IgKKrZX-bk7XypgGVt7Fg7mOjj0PDCSBVxduZyBWLdd1WvRgtQlQFjq1nSW_cIJZDm9-fEQ04oiqdWanpefN95B3pZo1Xp_IQ9e8lxu_J7mz4XG-hbncY0UNKwf4q1oFZIWHVg5UfpYlUVpt2rBM3O6Tnh0kWdb4vuq4Css60PyDzdUoWyx1qYvXxzwEb-Wn4cVTOybHiABkIr_MNKCzrp9M')" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1B6D24] text-4xl" data-icon="location_on" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-outline" data-icon="agriculture">agriculture</span>
                      <span className="font-label-sm text-label-sm text-outline px-2 py-0.5 border border-outline-variant rounded-full">Farm Site</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-outline hover:text-primary transition-colors active:scale-95 duration-150">
                        <span className="material-symbols-outlined" data-icon="edit">edit</span>
                      </button>
                      <button className="p-2 text-outline hover:text-error transition-colors active:scale-95 duration-150">
                        <span className="material-symbols-outlined" data-icon="delete">delete</span>
                      </button>
                    </div>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">KIZ Main Field A</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Gate 4, Kiambu Rural Road 12, Highlands Region</p>
                  <p className="font-label-sm text-label-sm text-secondary mt-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]" data-icon="call">call</span>
                    +254 722 000 111
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-col items-center gap-4">
            <button className="w-full md:w-auto min-w-[320px] h-12 px-8 bg-[#1B6D24] text-white rounded-lg font-label-sm text-label-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-transform active:scale-95 hover:bg-primary duration-200 shadow-md">
              <span className="material-symbols-outlined" data-icon="add_location">add_location</span>
              Add New Address
            </button>
            <p className="font-label-xs text-label-xs text-outline italic">Maximum 5 addresses per account</p>
          </div>
        </div>
      </main>

      {/* BottomNavBar Shell */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-white dark:bg-zinc-950 h-20 pb-safe border-t border-gray-100 dark:border-zinc-800 shadow-[0_-10px_30px_rgba(27,109,36,0.05)] md:hidden">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] dark:text-green-500 p-2 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="person" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Profile</span>
        </a>
      </nav>

      {/* FAB for quick addition (Responsive variant) */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-[#1B6D24] text-white rounded-full flex items-center justify-center shadow-lg md:hidden active:scale-90 transition-transform">
        <span className="material-symbols-outlined" data-icon="add">add</span>
      </button>
    </>
  );
}

function ProfilePage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 shadow-none flex justify-between items-center w-full px-6 py-3 h-16 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img alt="KIZ FARM Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uj23GL1yyohDEuVyudjCde9xNopFZpHCGNijVRI7_HJybbUQd0SFj0Z-XhpQWQnOfiSkEmJWn9d8fKlJFq0qsc3mZlPIrdE4vjs6GDC6u2ke-vkWWQD5xodJ0YjKCA3slbcuEcGZNXYT7Qq_sSEX2IpzueZh-7FgDLuKZT82snUxkiQCv4D4HmN47B9ejnDhm2YojkfYBHAbmSLAQqdHDhiY56I2jeR3l3jAXenLOwCeQTqfgfBawBRJEC9pIKxysbLNjgbJdsM5g" />
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 dark:text-zinc-400 hover:opacity-80 transition-opacity active:scale-95 duration-150">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
            <img className="w-full h-full object-cover" data-alt="professional headshot of a smiling farm manager in natural outdoor lighting with soft green background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2JT5EBI9r488gdA45KluUg1RAiDim0rPPR6OJn8mb3ruL6ydhuJmYY817nGysp9H8P4PKE5oSD4y91ycmMWj3u-whGorBw6WejBIplzSr7C5-tx7TZ-ULcMe6l0aBoEIhsx_KCjcf1CGCuLs6quLkeACMFDkaIsmFWtl2hYsfrNE2gqlimtN4aoeEDquQ4h2YYuwcXVQHzmV0DtrFH4hbTyNJzI2VUO7mab3yrtLGSPAYc-OWRbIOVtqJiz8uXX1Lyz5Bdyu48nE" />
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-margin py-xl md:py-xl">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="mb-lg border-b border-gray-100 pb-md">
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Edit Profile</h1>
            <p className="font-body-md text-body-md text-secondary">Manage your personal information and farm identity.</p>
          </div>

          {/* Profile Form Content */}
          <form className="space-y-xl">
            {/* Profile Image Upload */}
            <section className="flex flex-col md:flex-row items-center gap-md p-md bg-surface-container-low rounded-xl border border-gray-100">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm">
                  <img className="w-full h-full object-cover" data-alt="Close up of a person smiling, farm setting, natural warm lighting, high quality portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtfslUBiRZGg66PfwLA8EaerHamr7hfVETKkUrBUCOoLo0T6-9F3RF8rJHo_afDxgmIdAnnVSsDIlirlfGqevO8NA9wjqRZrXYH7tgvOq4X0uCaD02CeIRLWxEQnhFzFiOHpAZXG8MJMuYYLQ0uu44jHzhX66hn8drZDNr_7VKaX2CPLR-wf78RPgfjJaYE_hnimDWtYEq6UrWGU1Zb-_LsnqDbLVqJhF6YpaBxPHa6QOPj_glFBIQLKBPAwOHu6LO6hbZ99_W7nE" />
                </div>
                <label className="absolute inset-0 flex items-center justify-center bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" htmlFor="avatar-upload">
                  <span className="material-symbols-outlined" data-icon="photo_camera">photo_camera</span>
                </label>
                <input accept="image/*" className="hidden" id="avatar-upload" type="file" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-label-sm text-label-sm text-on-surface mb-xs">Profile Picture</h3>
                <p className="font-body-md text-label-xs text-secondary mb-md">JPG, GIF or PNG. Max size of 2MB.</p>
                <div className="flex gap-sm justify-center md:justify-start">
                  <button className="px-md py-2 border border-primary text-primary rounded-lg font-label-sm hover:bg-primary/5 transition-colors" type="button">Upload New</button>
                  <button className="px-md py-2 text-error font-label-sm hover:underline" type="button">Remove</button>
                </div>
              </div>
            </section>

            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              {/* Full Name */}
              <div className="flex flex-col gap-xs md:col-span-2">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="full-name">Full Name</label>
                <div className="relative">
                  <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none" id="full-name" type="text" defaultValue="Marcus Chen" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant material-symbols-outlined" data-icon="person">person</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="email">Email Address</label>
                <div className="relative">
                  <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none" id="email" type="email" defaultValue="m.chen@kizfarm.ag" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant material-symbols-outlined" data-icon="mail">mail</span>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="phone">Phone Number</label>
                <div className="relative">
                  <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none" id="phone" type="tel" defaultValue="+1 (555) 012-3456" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant material-symbols-outlined" data-icon="call">call</span>
                </div>
              </div>

              {/* Farm Role */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="role">Farm Role</label>
                <select className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none appearance-none" id="role">
                  <option>Farm Owner</option>
                  <option>Operations Manager</option>
                  <option>Agronomist</option>
                  <option>Technician</option>
                </select>
              </div>

              {/* Region */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="region">Primary Region</label>
                <input className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none" id="region" type="text" defaultValue="Central Valley, CA" />
              </div>
            </div>

            {/* Bio / Notes */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-sm text-label-sm text-on-surface" htmlFor="bio">Professional Bio</label>
              <textarea className="w-full p-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none resize-none" id="bio" rows={4} defaultValue="Managing sustainable almond cultivation and soil health optimization for over 15 years."></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row items-center gap-md pt-lg border-t border-gray-100">
              <button className="w-full md:w-auto h-12 px-xl bg-[#1B6D24] text-white rounded-lg font-label-sm hover:opacity-90 active:scale-95 transition-all shadow-sm" type="submit">
                Save Changes
              </button>
              <button className="w-full md:w-auto h-12 px-xl border border-outline text-secondary rounded-lg font-label-sm hover:bg-surface-container transition-all" type="button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-white dark:bg-zinc-950 h-20 pb-safe border-t border-gray-100 dark:border-zinc-800 shadow-[0_-10px_30px_rgba(27,109,36,0.05)]">
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-400 dark:text-zinc-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] dark:text-green-500 p-2 hover:text-[#1B6D24] dark:hover:text-green-400 transition-colors active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="person" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Profile</span>
        </a>
      </nav>
    </>
  );
}

function WishlistPage() {
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

function ChatDetailPage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 h-16 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button className="p-2 -ml-2 text-gray-500 hover:bg-gray-50 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="relative">
            <img alt="Farmer Profile Image" className="w-10 h-10 rounded-full object-cover border border-gray-100" data-alt="Close-up portrait of a friendly middle-aged farmer with a warm smile wearing a denim shirt in a sunlit field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnU0b86tW1fsVIJcsxIAUTx_AhLX09jzZYItDy-B1iFYYtaRYz1zQSyWL26x5wLz40kluYp0v9DYALVEG4TgZereimfbuQBMQZ-8etNQG-Nz6YKJPs780-96V87VWpn9AhYSMjMLyFElzAuDHu5DV_qngtG16jQuOFE4oSwoRz05--wHU3eswCbaLWYZHGpjIgo559Lkjjtk_IijgwBvmbDGynDdzH8S2F2LTdYVZYaF-5zO2eZBlElgsz_RTeKPQrQdV501i0toQ" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-md text-[16px] text-on-surface leading-tight">Samuel Okon</span>
            <span className="text-label-xs text-[#1B6D24] font-medium">Online</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center mr-4">
            <img alt="KIZ FARM logo" className="h-6" data-alt="KIZ FARM professional minimalist agricultural logo with clean typography and a sprout icon in brand green" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtf4lslROReKnP3d88rTQKeqI4ivQ35Wm1_s44bq2j8A_lO8CaERdC7_UzyDkCHj8tAueXRQ3MToRv_2Z7BWJe9SYRaioy_nfpRGvaLvQpB0QMmUHI5piK6gD--v2Nl8Kc3o6L-TDHLwS9Mv4gHUob_YUn1tLRhU44tCiPsTI5iTrlS-rZ4gSqLfvlrbbwYou8uqOsaTQId4y6Q316BEKKYjb0dY08ZZUjZpbPCwcc7AMJ-3eXIttHqQTVqXIFAxNKVGx1Bsph2zs" />
          </div>
          <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined" data-icon="info">info</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-16 pb-24 min-h-screen max-w-3xl mx-auto px-4 flex flex-col">
        {/* Warning Banner */}
        <div className="mt-4 mb-6 p-4 bg-tertiary-fixed rounded-xl border border-tertiary/10 flex items-start gap-3">
          <span className="material-symbols-outlined text-tertiary mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
          <p className="text-label-sm text-on-tertiary-fixed-variant leading-relaxed">
            Keep all transactions inside KIZ FARM for your safety
          </p>
        </div>

        {/* Chat History */}
        <div className="flex-1 space-y-6 flex flex-col">
          <div className="flex flex-col items-center my-4">
            <span className="px-3 py-1 bg-surface-container text-on-secondary-container text-label-xs rounded-full">Today</span>
          </div>

          {/* Farmer Message */}
          <div className="flex flex-col items-start max-w-[85%]">
            <div className="bg-surface-container text-on-surface p-4 rounded-2xl rounded-tl-none border border-gray-100">
              <p className="text-body-md">Hello! I just harvested a fresh batch of organic tomatoes this morning. They are perfectly ripe and ready for delivery.</p>
            </div>
            <span className="text-label-xs text-gray-400 mt-2 ml-1">09:12 AM</span>
          </div>

          {/* Farmer Image Attachment */}
          <div className="flex flex-col items-start max-w-[85%]">
            <div className="bg-surface-container p-2 rounded-2xl rounded-tl-none border border-gray-100 overflow-hidden">
              <img alt="Fresh red tomatoes" className="rounded-xl w-full max-w-sm object-cover aspect-square md:aspect-video hover:scale-[1.02] transition-transform duration-300" data-alt="Crate overflowing with vibrant, shiny red organic vine tomatoes with green stems, captured in natural bright daylight on a farm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9dxoVIeYL6IC-NExtr-m-oSfReoHhrAY-SctU12pnXm_1eAhPlYWHgHpRO1_HeX2RPbpnDi_eUXAzYXACaKYtd0sEoqXDQ-Rv3LzZsbwQWlOUJhoUlxzy1KT_guwmU6JQhF-A92_JVtSAdmmmkd2mc25VpmS3Bk14ybHK1Gcf9ZGW_mOiTUfLmUVgz8SRtpOQ6XMoQ8Ro9UX3MPAS6RHtJPwpcpViZCFcoIU3DA_DUvo4g-EkaGdVz3nC7VPhR9-oWf0YFtIVIXA" />
              <div className="p-2">
                <p className="text-body-md text-on-surface">Here is the current quality of the harvest.</p>
              </div>
            </div>
            <span className="text-label-xs text-gray-400 mt-2 ml-1">09:13 AM</span>
          </div>

          {/* User Message */}
          <div className="flex flex-col items-end self-end max-w-[85%]">
            <div className="bg-primary-container text-on-primary-container p-4 rounded-2xl rounded-tr-none shadow-sm">
              <p className="text-body-md">Those look excellent, Samuel! I'd like to order 5kg for my restaurant. Can you deliver by tomorrow afternoon?</p>
            </div>
            <div className="flex items-center gap-1 mt-2 mr-1">
              <span className="text-label-xs text-gray-400">09:15 AM</span>
              <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
            </div>
          </div>

          {/* Farmer Message */}
          <div className="flex flex-col items-start max-w-[85%]">
            <div className="bg-surface-container text-on-surface p-4 rounded-2xl rounded-tl-none border border-gray-100">
              <p className="text-body-md">Yes, I can definitely manage that. I'll include them in my morning delivery route. The total will be processed through the app.</p>
            </div>
            <span className="text-label-xs text-gray-400 mt-2 ml-1">09:17 AM</span>
          </div>
        </div>
      </main>

      {/* Bottom Message Input Shell */}
      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 p-4 z-50">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <button className="flex items-center justify-center w-10 h-10 text-gray-500 hover:bg-gray-50 rounded-full active:scale-90 transition-all">
            <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
          </button>
          <button className="flex items-center justify-center w-10 h-10 text-gray-500 hover:bg-gray-50 rounded-full active:scale-90 transition-all">
            <span className="material-symbols-outlined" data-icon="image">image</span>
          </button>
          <div className="flex-1 relative">
            <input className="w-full bg-surface-container-low border-none rounded-full px-6 py-3 text-body-md focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none" placeholder="Type your message..." type="text" />
          </div>
          <button className="bg-[#1B6D24] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg shadow-primary/20 active:scale-95 transition-all">
            <span className="material-symbols-outlined" data-icon="send" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 bg-surface-bright"></div>
      <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-tertiary/5 blur-[120px] -z-10 pointer-events-none"></div>
    </>
  );
}

function ChatPage() {
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

function BlogPage() {
  return (
    <>
      {/* TopAppBar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-zinc-100">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img alt="KizFarm Logo" className="h-12 w-auto" data-alt="minimalist professional logo for an agricultural tech company KizFarm in deep green and white" src="https://lh3.googleusercontent.com/aida/ADBb0ujrVNZn0PXXU7LaKBcyTR7OSOmvq4w6N-34wwcSmC0YSB8o9Fny5rOScxtRIRbn8OdOL7ot7UkBOLkwNoCbr5jVi-4thha6GNce2j0ZoBhd6LroPvl6-U9z8Xip84Hcqyw9qMltXULkoDeXo58r_J_pmrs0ZmdMjucr8eBDYQA9zkvJrg923pIDJP_oFMZaUMRQ6dLJ7J1UY3G8DMV7Fd2Ng2P06N0NeGa3z4VoJ2IJxuz-Y5THF05B21amOm14YAImFTshjiu-QA" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-zinc-500 hover:text-[#1B6D24] font-label-sm text-label-sm transition-colors" href="#">Market</a>
            <a className="text-[#1B6D24] font-bold font-label-sm text-label-sm transition-colors" href="#">Blog</a>
            <a className="text-zinc-500 hover:text-[#1B6D24] font-label-sm text-label-sm transition-colors" href="#">Profile</a>
            <div className="h-6 w-[1px] bg-zinc-200"></div>
            <button className="text-green-800"><span className="material-symbols-outlined">shopping_cart</span></button>
          </div>
          <button className="md:hidden text-green-800">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <section className="px-6 py-xl">
          <div className="flex flex-col lg:flex-row gap-lg items-center">
            <div className="lg:w-1/2 space-y-md">
              <span className="inline-block px-4 py-1 rounded-full bg-green-50 text-[#1B6D24] text-label-xs font-label-xs tracking-wider uppercase">Digital Agronomy Insights</span>
              <h1 className="text-headline-xl font-headline-xl text-zinc-900 leading-tight">Harvesting the Future: Technology in the Field</h1>
              <p className="text-body-lg font-body-lg text-zinc-600 max-w-xl">
                Explore the latest advancements in precision farming, sustainable crop management, and the digital tools shaping modern agriculture.
              </p>
              <div className="pt-base">
                <button className="bg-[#1B6D24] text-white px-8 py-3 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all flex items-center gap-2">
                  Read Featured Story <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img alt="Lush green rows of crops" className="w-full h-full object-cover" data-alt="high-resolution aerial view of perfectly aligned lush green crop rows in a sun-drenched fertile valley during morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2CAUruApc_LeVIdFtYf2YD466TKLl1aMtCBUbicSF3CfgXQnWGZOkvEP7eHeFMr55j8Q_LlP-NF2cCsYMZ1MazqtZniFMTkVOnrvftV31a_ifrMTfOJqOMw-vTgPEIXep3gTTtfurPLKsA7cVMpPr-9Q8MXbwrlcnS2LHgShVs-Jftn6EGh56VB_8eJuuC_IrhWtElWZJKdJpgHPYitfaKEo5wEoWnqgpJno6MN1EhvjUdsYhj72wpjcTbOsGWXZw3F-qxBjHsGU" />
            </div>
          </div>
        </section>

        {/* Bento Grid Categories */}
        <section className="px-6 pb-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Blog Post 1 */}
            <div className="tonal-card rounded-2xl bg-white overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img alt="Precision Irrigation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="close-up of automated precision irrigation system spraying water over young green plants in a field under soft daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiHCqlcJlZ3cd55YA3jHyr2A4lu7IKZu11Db9N8VkC2rNcuibcQ3s0_PCdbaQ-BXp95tSqx2FH52_mzFwJqlrmtdseKXoHL8fFygZHlRv1rE4WiaqkMvGNQ2dERxDGf38YWnlvXULlg5bVdHa3zw2aizDpW_QmmQRyvFlr_1GPMTP85bpdw1zKqT2O1pfB2dyidDkenaZvsCXE6jbW-9Q88lSU2WXk-t76_UyKZAb39perIzDsLl4XmLFYuxEvOtUQTrcgelXBfbc" />
              </div>
              <div className="p-md space-y-sm">
                <div className="flex items-center gap-2 text-label-xs font-label-xs text-[#1B6D24]">
                  <span className="material-symbols-outlined text-[16px]">water_drop</span>
                  Irrigation Tech
                </div>
                <h3 className="text-headline-md font-headline-md text-zinc-900 group-hover:text-[#1B6D24] transition-colors">Smart Water Management for 2024</h3>
                <p className="text-body-md font-body-md text-zinc-500 line-clamp-2">How sensor-based irrigation is reducing waste and improving yields in dry regions.</p>
                <div className="flex items-center justify-between pt-base">
                  <span className="text-label-xs font-label-xs text-zinc-400">5 min read</span>
                  <span className="material-symbols-outlined text-zinc-400">arrow_outward</span>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="tonal-card rounded-2xl bg-white overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img alt="Soil Health" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="a farmer holding a handful of dark rich fertile soil showing healthy texture and organic matter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRgo6h_bjMbh06cg2g0RXXUrIeyN8fYiy-42DDTS4m6G3TOW80FEGGURHb2s_SwBltH9bdesxpgAD4lF4hjtk6g6H7P_n9n3vyPN3DzUl_y7qaAra83y4afdDleKQnPgKbzmLuxn02Dm-VYhON1N8DuGiVu7R_MPdF5DBl7Yg7yqsh1z1g4WQAylQJi43MpnEbh98OykS_wR-zuQgh78A6JR9ucCopGREFtiezrK2kZ28wXdwdDLEzrtLok7rt5mWEtQ00AMDDQkg" />
              </div>
              <div className="p-md space-y-sm">
                <div className="flex items-center gap-2 text-label-xs font-label-xs text-[#1B6D24]">
                  <span className="material-symbols-outlined text-[16px]">compost</span>
                  Soil Health
                </div>
                <h3 className="text-headline-md font-headline-md text-zinc-900 group-hover:text-[#1B6D24] transition-colors">The Secret Under Our Feet</h3>
                <p className="text-body-md font-body-md text-zinc-500 line-clamp-2">Regenerative practices that restore soil nutrients without synthetic fertilizers.</p>
                <div className="flex items-center justify-between pt-base">
                  <span className="text-label-xs font-label-xs text-zinc-400">8 min read</span>
                  <span className="material-symbols-outlined text-zinc-400">arrow_outward</span>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="tonal-card rounded-2xl bg-white overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img alt="Farm Machinery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="modern green tractor parked in a golden wheat field at sunset with dramatic lens flare" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_jJ1mDZ3d2zspWUMbflVraZvVcGSQ0B6hEYd_8J8IeDwCM-m5vL5f2q-_l0zl2xd4xzCu80PqBFj-VCqFj2D865VFQY7JTmHXCdCkbuxtI4bANAqjAFyth7azj5a4qQzGuH_HJcE2layl0YDM0LWc8V3AYUFDQObS19ycaM4Nt1j4IEKIWvXJO5FCsyaeACyhFCCrxZYmQQgc5rmguZpfCYItL01WrdWnauA9AluJe8AolMRu2oeGQ1mBPJx5xsDnhfFxiJbVd5E" />
              </div>
              <div className="p-md space-y-sm">
                <div className="flex items-center gap-2 text-label-xs font-label-xs text-[#1B6D24]">
                  <span className="material-symbols-outlined text-[16px]">precision_manufacturing</span>
                  Agri-Tech
                </div>
                <h3 className="text-headline-md font-headline-md text-zinc-900 group-hover:text-[#1B6D24] transition-colors">AI and the Autonomous Tractor</h3>
                <p className="text-body-md font-body-md text-zinc-500 line-clamp-2">Exploring the rise of self-driving machinery in large scale agriculture operations.</p>
                <div className="flex items-center justify-between pt-base">
                  <span className="text-label-xs font-label-xs text-zinc-400">12 min read</span>
                  <span className="material-symbols-outlined text-zinc-400">arrow_outward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="px-6 pb-xl">
          <div className="bg-[#1B6D24] rounded-3xl p-lg flex flex-col md:flex-row items-center justify-between gap-md text-white">
            <div className="md:w-1/2 space-y-sm text-center md:text-left">
              <h2 className="text-headline-lg font-headline-lg">Stay rooted in innovation</h2>
              <p className="text-body-md opacity-90">Get weekly agronomy updates and market trends delivered straight to your inbox.</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-base">
              <input className="bg-white/10 border border-white/20 rounded-lg px-6 py-3 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white outline-none min-w-[300px]" placeholder="Email address" type="email" />
              <button className="bg-white text-[#1B6D24] font-bold px-8 py-3 rounded-lg hover:bg-zinc-100 transition-colors">Subscribe</button>
            </div>
          </div>
        </section>

        {/* Latest Articles List (Asymmetric) */}
        <section className="px-6 pb-xl">
          <h2 className="text-headline-lg font-headline-lg text-zinc-900 mb-lg">Latest Articles</h2>
          <div className="space-y-gutter">
            {/* Article Row 1 */}
            <article className="flex flex-col md:flex-row gap-md items-center py-base group">
              <div className="w-full md:w-1/3 aspect-[16/9] rounded-xl overflow-hidden">
                <img alt="Greenhouse" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="interior view of a modern high-tech greenhouse with glass panels and organized plant trays growing green leafy vegetables" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArSLOvmhg0fhECZnl9PJv9AAw3At1HXV4HWszH-H0WHTnZ7uq67LL4xXxNdIGRut0aFDi81WTLB6a00-VA-lm0-qGyJcUMITfh2ke9n4ppAZGs4B76gJDwvCPgF_DI0SPT69Fkil6xMKDNfgJupMpPfV4rcGB15ryIUIOhpegi8C9n0S9OP-sWpoQA2GDrlFS946NNOyYWgsGolF-SO6EDli80n87lV2x1Ulmpy4ZyLiVkPSdNaVogXEr-q2TzV8g3-0fSxwaxs58" />
              </div>
              <div className="w-full md:w-2/3 space-y-xs">
                <div className="flex items-center gap-4 text-label-xs text-zinc-400">
                  <span>March 12, 2024</span>
                  <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
                  <span>Sustainable Growing</span>
                </div>
                <h4 className="text-headline-md font-headline-md text-zinc-800 group-hover:text-[#1B6D24] transition-colors cursor-pointer">Indoor Farming: Maximizing Yield in Urban Spaces</h4>
                <p className="text-body-md font-body-md text-zinc-500">The rise of vertical farming is changing how cities feed themselves. We look at the top 5 crops for indoor environments.</p>
              </div>
            </article>
            <hr className="border-zinc-100" />

            {/* Article Row 2 */}
            <article className="flex flex-col md:flex-row gap-md items-center py-base group">
              <div className="w-full md:w-1/3 aspect-[16/9] rounded-xl overflow-hidden">
                <img alt="Marketplace" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="colorful variety of fresh harvested organic vegetables displayed at an outdoor farmers market table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3PaeClmZZEbF603oQpx84LNNSNX_RB14azY-LxmkOX9e7-qkVnst6C8c5rNag4wS3SlwFYFUKHNm_mgd46FEzoJwU1Z8Pd7k6k4_QQLHHvpQWj0XwS83P_6trH1FJuqnPq3OP_rvGqajmeSqw2yAEQaC3gKE3_HOf9xh5GZKhUB_vcH8lDBxhYMsI2cR2Kz_3X0PXRHpzI1LMpA37DGZ4yttdnEHZA8q7ou22X_V84sndGqgHgSEPQ-EcsArAxi6DuPt58_IjTX8" />
              </div>
              <div className="w-full md:w-2/3 space-y-xs">
                <div className="flex items-center gap-4 text-label-xs text-zinc-400">
                  <span>March 10, 2024</span>
                  <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
                  <span>Economics</span>
                </div>
                <h4 className="text-headline-md font-headline-md text-zinc-800 group-hover:text-[#1B6D24] transition-colors cursor-pointer">Global Crop Markets: What to Expect this Quarter</h4>
                <p className="text-body-md font-body-md text-zinc-500">A deep dive into supply chain shifts and pricing for major grains and legumes worldwide.</p>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-50 border-t border-zinc-200 py-12">
        <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-lg font-bold text-[#1B6D24]">KIZ FARM</span>
            <p className="text-zinc-600 font-['Inter'] text-sm">© 2024 KizFarm Digital Agronomy. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm font-['Inter']">
            <a className="text-zinc-500 hover:text-[#1B6D24] transition-all" href="#">Privacy Policy</a>
            <a className="text-zinc-500 hover:text-[#1B6D24] transition-all" href="#">Terms of Service</a>
            <a className="text-zinc-500 hover:text-[#1B6D24] transition-all" href="#">Contact Us</a>
          </div>
        </div>
      </footer>

      {/* BottomNavBar (Mobile only) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-t border-zinc-100 px-4 py-3 flex justify-around items-center">
        <a className="flex flex-col items-center justify-center text-zinc-400 px-4 py-1" href="#">
          <span className="material-symbols-outlined">storefront</span>
          <span className="font-['Inter'] text-[11px] font-medium tracking-wide">Market</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1B6D24] bg-green-50/50 rounded-xl px-4 py-1" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>article</span>
          <span className="font-['Inter'] text-[11px] font-medium tracking-wide">Blog</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 px-4 py-1" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Inter'] text-[11px] font-medium tracking-wide">Profile</span>
        </a>
      </div>
    </>
  );
}

type PageKey = 'home' | 'about' | 'contact' | 'login' | 'otp' | 'catalog' | 'signup' | 'blog' | 'chat' | 'chat-detail' | 'wishlist' | 'profile' | 'addresses' | 'payment' | 'notifications' | 'order-detail' | 'track-order' | 'my-orders' | 'checkout' | 'cart' | 'search' | 'marketplace' | 'product-detail' | 'dashboard' | 'become-farmer' | 'identity-verification' | 'add-product' | 'farmer-dashboard' | 'buyer-messages' | 'payout-history' | 'chat-with-buyer' | 'bank-setup' | 'farm-profile' | 'all-farmers' | 'farmer-verification' | 'all-products' | 'product-review' | 'transactions' | 'escrow' | 'refunds' | 'order-control' | 'assign-driver' | 'driver-management' | 'user-detail' | 'user-list' | 'admin-dashboard' | 'course-detail' | 'access-contact' | 'coach-profile' | 'learning-hub' | 'all-subscriptions' | 'add-new-tutor' | 'learning-hub-admin' | 'add-new-course';

const NAV_GROUPS: { label: string; items: { key: PageKey; name: string }[] }[] = [
  {
    label: 'Public',
    items: [
      { key: 'home', name: 'Home' },
      { key: 'about', name: 'About' },
      { key: 'contact', name: 'Contact' },
      { key: 'login', name: 'Login' },
      { key: 'otp', name: 'OTP Verification' },
    ],
  },
  {
    label: 'Buyer',
    items: [
      { key: 'catalog', name: 'Catalog' },
      { key: 'signup', name: 'Sign Up' },
      { key: 'blog', name: 'Blog' },
      { key: 'chat', name: 'Chat' },
      { key: 'chat-detail', name: 'Chat Detail' },
      { key: 'wishlist', name: 'Wishlist' },
      { key: 'profile', name: 'Profile' },
      { key: 'addresses', name: 'Addresses' },
      { key: 'payment', name: 'Payment' },
      { key: 'notifications', name: 'Notifications' },
      { key: 'order-detail', name: 'Order Detail' },
      { key: 'track-order', name: 'Track Order' },
      { key: 'my-orders', name: 'My Orders' },
      { key: 'checkout', name: 'Checkout' },
      { key: 'cart', name: 'Cart' },
      { key: 'search', name: 'Search' },
      { key: 'marketplace', name: 'Marketplace' },
      { key: 'product-detail', name: 'Product Detail' },
      { key: 'dashboard', name: 'Dashboard' },
    ],
  },
  {
    label: 'Farmer',
    items: [
      { key: 'become-farmer', name: 'Become a Farmer' },
      { key: 'identity-verification', name: 'Identity Verification' },
      { key: 'add-product', name: 'Add Product' },
      { key: 'farmer-dashboard', name: 'Farmer Dashboard' },
      { key: 'buyer-messages', name: 'Buyer Messages' },
      { key: 'payout-history', name: 'Payout History' },
      { key: 'chat-with-buyer', name: 'Chat with Buyer' },
      { key: 'bank-setup', name: 'Bank Setup' },
      { key: 'farm-profile', name: 'Farm Profile' },
    ],
  },
  {
    label: 'Admin',
    items: [
      { key: 'all-farmers', name: 'All Farmers' },
      { key: 'farmer-verification', name: 'Farmer Verification' },
      { key: 'all-products', name: 'All Products' },
      { key: 'product-review', name: 'Product Review' },
      { key: 'transactions', name: 'Transactions' },
      { key: 'escrow', name: 'Escrow' },
      { key: 'refunds', name: 'Refunds' },
      { key: 'order-control', name: 'Order Control' },
      { key: 'assign-driver', name: 'Assign Driver' },
      { key: 'driver-management', name: 'Driver Management' },
      { key: 'user-detail', name: 'User Detail' },
      { key: 'user-list', name: 'User List' },
      { key: 'admin-dashboard', name: 'Admin Dashboard' },
    ],
  },
  {
    label: 'Learning Hub',
    items: [
      { key: 'course-detail', name: 'Course Detail' },
      { key: 'access-contact', name: 'Access & Contact' },
      { key: 'coach-profile', name: 'Coach Profile' },
      { key: 'learning-hub', name: 'Learning Hub' },
      { key: 'all-subscriptions', name: 'All Subscriptions' },
      { key: 'add-new-tutor', name: 'Add New Tutor' },
      { key: 'learning-hub-admin', name: 'Hub Admin' },
      { key: 'add-new-course', name: 'Add New Course' },
    ],
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('catalog');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = (key: PageKey) => {
    setCurrentPage(key);
    setSidebarOpen(false);
  };

  return (
    <>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'otp' && <OtpPage />}
      {currentPage === 'catalog' && <AgriCatalogPage />}
      {currentPage === 'signup' && <SignUpPage />}
      {currentPage === 'blog' && <BlogPage />}
      {currentPage === 'chat' && <ChatPage />}
      {currentPage === 'chat-detail' && <ChatDetailPage />}
      {currentPage === 'wishlist' && <WishlistPage />}
      {currentPage === 'profile' && <ProfilePage />}
      {currentPage === 'addresses' && <AddressesPage />}
      {currentPage === 'payment' && <PaymentPage />}
      {currentPage === 'notifications' && <NotificationPage />}
      {currentPage === 'order-detail' && <OrderDetailPage />}
      {currentPage === 'track-order' && <TrackOrderPage />}
      {currentPage === 'my-orders' && <MyOrdersPage />}
      {currentPage === 'checkout' && <CheckoutPage />}
      {currentPage === 'cart' && <ShoppingCartPage />}
      {currentPage === 'search' && <SearchResultsPage />}
      {currentPage === 'marketplace' && <MarketplacePage />}
      {currentPage === 'product-detail' && <ProductDetailPage />}
      {currentPage === 'dashboard' && <UserDashboardPage />}
      {currentPage === 'become-farmer' && <BecomeAFarmerPage />}
      {currentPage === 'identity-verification' && <IdentityVerificationPage />}
      {currentPage === 'add-product' && <AddProductPage />}
      {currentPage === 'farmer-dashboard' && <FarmerDashboardPage />}
      {currentPage === 'buyer-messages' && <BuyerMessagesPage />}
      {currentPage === 'payout-history' && <FarmerPayoutHistoryPage />}
      {currentPage === 'chat-with-buyer' && <ChatWithBuyerPage />}
      {currentPage === 'bank-setup' && <BankSetupPage />}
      {currentPage === 'farm-profile' && <FarmProfilePage />}
      {currentPage === 'all-farmers' && <AllFarmersListPage />}
      {currentPage === 'farmer-verification' && <FarmerVerificationReviewPage />}
      {currentPage === 'all-products' && <AllProductsListPage />}
      {currentPage === 'product-review' && <ProductReviewPage />}
      {currentPage === 'transactions' && <TransactionListPage />}
      {currentPage === 'escrow' && <EscrowManagementPage />}
      {currentPage === 'refunds' && <RefundManagementPage />}
      {currentPage === 'order-control' && <OrderControlPage />}
      {currentPage === 'assign-driver' && <AssignDriverPage />}
      {currentPage === 'driver-management' && <DriverManagementPage />}
      {currentPage === 'user-detail' && <UserDetailPage />}
      {currentPage === 'user-list' && <UserListPage />}
      {currentPage === 'admin-dashboard' && <AdminDashboardPage />}
      {currentPage === 'course-detail' && <CourseDetailPage />}
      {currentPage === 'access-contact' && <AccessContactPage />}
      {currentPage === 'coach-profile' && <CoachProfilePage />}
      {currentPage === 'learning-hub' && <LearningHubPage />}
      {currentPage === 'all-subscriptions' && <AllSubscriptionsPage />}
      {currentPage === 'add-new-tutor' && <AddNewTutorPage />}
      {currentPage === 'learning-hub-admin' && <LearningHubAdminPage />}
      {currentPage === 'add-new-course' && <AddNewCoursePage />}

      {/* Sidebar toggle button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-[#1B6D24] text-white rounded-r-xl px-1 py-4 shadow-lg hover:bg-[#005312] transition-colors flex flex-col items-center gap-1"
        aria-label="Open navigation"
      >
        <span className="material-symbols-outlined text-[20px]">menu</span>
        <span style={{ writingMode: 'vertical-rl', fontSize: '10px', fontWeight: 600, letterSpacing: '0.05em', transform: 'rotate(180deg)' }}>PAGES</span>
      </button>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className="fixed top-0 left-0 h-full z-50 flex flex-col bg-white shadow-2xl transition-transform duration-300"
        style={{ width: '240px', transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-[#1B6D24]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-white text-[20px]">grid_view</span>
            <span className="text-white font-semibold text-sm tracking-wide">All Pages</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="text-white/80 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable nav list */}
        <div className="flex-1 overflow-y-auto py-2">
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              <div className="px-4 pt-4 pb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{group.label}</span>
              </div>
              {group.items.map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigate(item.key)}
                  className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 transition-colors"
                  style={{
                    backgroundColor: currentPage === item.key ? '#f0fdf4' : 'transparent',
                    color: currentPage === item.key ? '#1B6D24' : '#374151',
                    fontWeight: currentPage === item.key ? 600 : 400,
                    borderRight: currentPage === item.key ? '3px solid #1B6D24' : '3px solid transparent',
                  }}
                >
                  {currentPage === item.key && (
                    <span className="material-symbols-outlined text-[14px] text-[#1B6D24]">arrow_right</span>
                  )}
                  {currentPage !== item.key && <span className="w-[14px]" />}
                  {item.name}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Sidebar footer */}
        <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
          <p className="text-[11px] text-gray-400 text-center">KizFarm · {NAV_GROUPS.reduce((a, g) => a + g.items.length, 0)} screens</p>
        </div>
      </div>
    </>
  );
}
