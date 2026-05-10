"use client"

import React from 'react';

export default function LearningHubAdminPage() {
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
