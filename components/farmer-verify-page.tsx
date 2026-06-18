"use client";

import React, { useEffect, useState } from "react";

export default function FarmerVerifyPage() {
  const [loading, setLoading] = useState(true);
  const [farmer, setFarmer] = useState(null);
  const [files, setFiles] = useState({ bvn: null, govId: null, selfie: null });

  useEffect(() => {
    const load = async () => {
      const token = localStorage.getItem("kizfarm_token");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await fetch("http://localhost:4000/farmer/status", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setFarmer(data?.farmer || null);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleFile = (e) => {
    const { name, files: f } = e.target;
    setFiles((s) => ({ ...s, [name]: f[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("kizfarm_token");
    if (!token) return alert("Please login");
    const form = new FormData();
    if (files.bvn) form.append("bvn", files.bvn);
    if (files.govId) form.append("govId", files.govId);
    if (files.selfie) form.append("selfie", files.selfie);

    const res = await fetch("http://localhost:4000/farmer/verify", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    });
    const data = await res.json();
    if (!res.ok) return alert(data.error || "Upload failed");
    setFarmer(data.farmer);
  };

  if (loading) return <div className="pt-32 text-center">Loading…</div>;

  if (!farmer)
    return (
      <div className="pt-32 text-center">
        No farmer record found. Please register first.
      </div>
    );

  return (
    <div className="pt-24 max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Identity Verification</h2>
      <p className="mb-4">
        Status: <strong>{farmer.status}</strong>
      </p>
      {farmer.status === "pending" || farmer.status === "approved" ? (
        <div className="bg-white p-4 rounded shadow">
          <p className="mb-2">
            BVN:{" "}
            {farmer.bvnUrl ? (
              <a className="text-primary" href={farmer.bvnUrl} target="_blank">
                View
              </a>
            ) : (
              "Not provided"
            )}
          </p>
          <p className="mb-2">
            BVN Number: <strong>{farmer.bvn || "Not provided"}</strong>
          </p>
          <p className="mb-2">
            Gov ID:{" "}
            {farmer.govIdUrl ? (
              <a
                className="text-primary"
                href={farmer.govIdUrl}
                target="_blank"
              >
                View
              </a>
            ) : (
              "Not provided"
            )}
          </p>
          <p className="mb-2">
            NIN: <strong>{farmer.nin || "Not provided"}</strong>
          </p>
          <p className="mb-2">
            Selfie:{" "}
            {farmer.selfieUrl ? (
              <a
                className="text-primary"
                href={farmer.selfieUrl}
                target="_blank"
              >
                View
              </a>
            ) : (
              "Not provided"
            )}
          </p>
          {farmer.status === "pending" && (
            <button disabled className="mt-4 px-4 py-2 bg-gray-200 rounded">
              Submitted
            </button>
          )}
          {farmer.status === "approved" && (
            <div className="mt-4 px-4 py-2 bg-green-100 rounded">Approved</div>
          )}
          {farmer.status === "rejected" && (
            <div className="mt-4">
              <div className="mb-2 text-red-600">
                Rejected: {farmer.rejectionReason}
              </div>
              <p>You may re-upload corrected documents below and resubmit.</p>
            </div>
          )}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow space-y-4"
        >
          <div>
            <label className="block mb-1">BVN (image/pdf)</label>
            <input
              name="bvn"
              onChange={handleFile}
              accept="image/*,application/pdf"
              type="file"
            />
          </div>
          <div>
            <label className="block mb-1">Government ID (image/pdf)</label>
            <input
              name="govId"
              onChange={handleFile}
              accept="image/*,application/pdf"
              type="file"
            />
          </div>
          <div>
            <label className="block mb-1">Live Selfie (image)</label>
            <input
              name="selfie"
              onChange={handleFile}
              accept="image/*"
              type="file"
            />
          </div>
          <button className="px-4 py-2 bg-emerald-700 text-white rounded">
            Submit for Review
          </button>
        </form>
      )}
    </div>
  );
}
