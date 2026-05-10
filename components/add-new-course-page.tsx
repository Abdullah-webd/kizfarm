"use client"

import React from 'react';

export default function AddNewCoursePage() {
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
