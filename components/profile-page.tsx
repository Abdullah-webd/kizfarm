"use client"

import React, { useState, useEffect } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  profileImage?: string;
  farmName?: string;
  farmType?: string;
  location?: string;
}

export default function ProfilePage() {
  const [formData, setFormData] = useState<ProfileData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
  const [isFarmer, setIsFarmer] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('kizfarm_token');
      
      // Try farmer endpoint first
      let res = await fetch(`${API_URL}/farmer/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.profile) {
          setIsFarmer(true);
          setFormData({
            name: data.profile.user?.name || '',
            email: data.profile.user?.email || '',
            phone: data.profile.user?.phone || '',
            address: data.profile.user?.address || '',
            city: data.profile.user?.city || '',
            state: data.profile.user?.state || '',
            country: data.profile.user?.country || '',
            farmName: data.profile.farmer?.farmName || '',
            farmType: data.profile.farmer?.farmType || '',
            location: data.profile.farmer?.location || '',
          });
        }
      } else {
        // Try buyer endpoint
        res = await fetch(`${API_URL}/buyer/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.profile) {
            setFormData({
              name: data.profile.name || '',
              email: data.profile.email || '',
              phone: data.profile.phone || '',
              address: data.profile.address || '',
              city: data.profile.city || '',
              state: data.profile.state || '',
              country: data.profile.country || '',
            });
          }
        }
      }
    } catch (err) {
      console.error('Fetch profile failed:', err);
      setMessage('Failed to load profile');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      const token = localStorage.getItem('kizfarm_token');
      const endpoint = isFarmer ? '/farmer/profile' : '/buyer/profile';
      
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setMessageType('success');
        setMessage('Profile updated successfully!');
      } else {
        setMessageType('error');
        setMessage(data.error || 'Failed to update profile');
      }
    } catch (err) {
      setMessageType('error');
      setMessage('Network error');
      console.error('Update failed:', err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="material-symbols-outlined animate-spin">autorenew</span>
        <span className="ml-2">Loading profile...</span>
      </div>
    );
  }

  return (
    <>
      {/* TopAppBar */}
      <header className="bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 shadow-none flex justify-between items-center w-full px-6 py-3 h-16 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img alt="KIZ FARM Logo" className="h-10 w-auto object-contain" src="/logo.jpeg" />
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-margin py-xl md:py-xl">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="mb-lg border-b border-gray-100 pb-md">
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Edit Profile</h1>
            <p className="font-body-md text-body-md text-secondary">Manage your personal information {isFarmer && 'and farm details'}.</p>
          </div>

          {/* Message */}
          {message && (
            <div className={`mb-4 p-4 rounded-lg ${
              messageType === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {message}
            </div>
          )}

          {/* Profile Form Content */}
          <form onSubmit={handleSubmit} className="space-y-xl">
            {/* Basic Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              {/* Full Name */}
              <div className="flex flex-col gap-xs md:col-span-2">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="name">Full Name</label>
                <div className="relative">
                  <input
                    className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none"
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant material-symbols-outlined">person</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="email">Email Address</label>
                <div className="relative">
                  <input
                    className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none"
                    id="email"
                    type="email"
                    value={formData.email}
                    disabled
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant material-symbols-outlined">mail</span>
                </div>
                <p className="text-xs text-gray-500">Email cannot be changed</p>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface" htmlFor="phone">Phone Number</label>
                <div className="relative">
                  <input
                    className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none"
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant material-symbols-outlined">call</span>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="border-t border-gray-100 pt-md">
              <h3 className="font-label-sm text-label-sm text-on-surface mb-md">Address Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                {/* Street Address */}
                <div className="flex flex-col gap-xs md:col-span-2">
                  <label className="font-label-sm text-label-sm text-on-surface" htmlFor="address">Street Address</label>
                  <input
                    className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none"
                    id="address"
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Street address"
                  />
                </div>

                {/* City */}
                <div className="flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface" htmlFor="city">City</label>
                  <input
                    className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none"
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="City"
                  />
                </div>

                {/* State */}
                <div className="flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface" htmlFor="state">State/Province</label>
                  <input
                    className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none"
                    id="state"
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="State/Province"
                  />
                </div>

                {/* Country */}
                <div className="flex flex-col gap-xs">
                  <label className="font-label-sm text-label-sm text-on-surface" htmlFor="country">Country</label>
                  <input
                    className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none"
                    id="country"
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Country"
                  />
                </div>
              </div>
            </div>

            {/* Farm Information (Farmer Only) */}
            {isFarmer && (
              <div className="border-t border-gray-100 pt-md">
                <h3 className="font-label-sm text-label-sm text-on-surface mb-md">Farm Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  {/* Farm Name */}
                  <div className="flex flex-col gap-xs md:col-span-2">
                    <label className="font-label-sm text-label-sm text-on-surface" htmlFor="farmName">Farm Name</label>
                    <input
                      className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none"
                      id="farmName"
                      type="text"
                      value={formData.farmName || ''}
                      onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                      placeholder="Farm name"
                    />
                  </div>

                  {/* Farm Type */}
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-sm text-label-sm text-on-surface" htmlFor="farmType">Farm Type</label>
                    <select
                      className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none appearance-none"
                      id="farmType"
                      value={formData.farmType || ''}
                      onChange={(e) => setFormData({ ...formData, farmType: e.target.value })}
                    >
                      <option value="">Select type</option>
                      <option value="crops">Crops</option>
                      <option value="livestock">Livestock</option>
                      <option value="mixed">Mixed</option>
                      <option value="aquaculture">Aquaculture</option>
                    </select>
                  </div>

                  {/* Farm Location */}
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-sm text-label-sm text-on-surface" htmlFor="location">Farm Location</label>
                    <input
                      className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md outline-none"
                      id="location"
                      type="text"
                      value={formData.location || ''}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Farm location"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-md pt-md border-t border-gray-100">
              <button
                type="submit"
                disabled={saving}
                className="px-lg py-2 bg-primary text-white rounded-lg font-label-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                type="button"
                onClick={() => fetchProfile()}
                className="px-lg py-2 border border-outline-variant text-primary rounded-lg font-label-sm hover:bg-primary/5 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
