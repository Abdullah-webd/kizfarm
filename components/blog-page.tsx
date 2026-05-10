"use client"

import React from 'react';

export default function BlogPage() {
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
