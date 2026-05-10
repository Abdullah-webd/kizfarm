const fs = require('fs');

const content = fs.readFileSync('c:/Users/Abdullah/Downloads/b_HPOTMuXhcy1/app/page.tsx', 'utf-8');
const appIndex = content.indexOf('export default function App()');
const appCode = content.substring(appIndex);

const matches = content.match(/function\s+([a-zA-Z0-9_]+)\s*\(/g).map(m => m.split(' ')[1].replace('(', ''));

const imports = matches.filter(m => m !== 'App').map(m => {
    const filename = m.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    return `import ${m} from '@/components/${filename}';`;
}).join('\n');

const newCode = `"use client"\nimport { useState } from 'react';\nimport HomePage from '@/components/home-page';\nimport AboutPage from '@/components/about-page';\nimport ContactPage from '@/components/contact-page';\nimport LoginPage from '@/components/login-page';\nimport OtpPage from '@/components/otp-page';\n${imports}\n\n// Added missing type for PageKey since we are extracting App\ntype PageKey = 'home' | 'about' | 'contact' | 'login' | 'otp' | 'catalog' | 'signup' | 'blog' | 'chat' | 'chat-detail' | 'wishlist' | 'profile' | 'addresses' | 'payment' | 'notifications' | 'order-detail' | 'track-order' | 'my-orders' | 'checkout' | 'cart' | 'search' | 'marketplace' | 'product-detail' | 'dashboard' | 'become-farmer' | 'identity-verification' | 'add-product' | 'farmer-dashboard' | 'buyer-messages' | 'payout-history' | 'chat-buyer' | 'bank-setup' | 'farm-profile' | 'all-farmers' | 'verify-farmer' | 'all-products' | 'product-review' | 'transactions' | 'escrow' | 'refunds' | 'order-control' | 'assign-driver' | 'driver-management' | 'user-detail' | 'users' | 'admin-dashboard' | 'course-detail' | 'access-contact' | 'coach-profile' | 'learning-hub' | 'subscriptions' | 'add-tutor' | 'learning-admin' | 'add-course' | string;\n\n${appCode}`;

fs.writeFileSync('c:/Users/Abdullah/Downloads/b_HPOTMuXhcy1/app/page.tsx', newCode);
console.log('Refactoring complete!');
