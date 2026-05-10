"use client"
import { useState } from 'react';
import HomePage from '@/components/home-page';
import AboutPage from '@/components/about-page';
import ContactPage from '@/components/contact-page';
import LoginPage from '@/components/login-page';
import OtpPage from '@/components/otp-page';
import AgriCatalogPage from '@/components/agri-catalog-page';
import SignUpPage from '@/components/sign-up-page';
import AddNewCoursePage from '@/components/add-new-course-page';
import LearningHubAdminPage from '@/components/learning-hub-admin-page';
import AddNewTutorPage from '@/components/add-new-tutor-page';
import AllSubscriptionsPage from '@/components/all-subscriptions-page';
import LearningHubPage from '@/components/learning-hub-page';
import CoachProfilePage from '@/components/coach-profile-page';
import AccessContactPage from '@/components/access-contact-page';
import CourseDetailPage from '@/components/course-detail-page';
import AdminDashboardPage from '@/components/admin-dashboard-page';
import UserListPage from '@/components/user-list-page';
import UserDetailPage from '@/components/user-detail-page';
import DriverManagementPage from '@/components/driver-management-page';
import AssignDriverPage from '@/components/assign-driver-page';
import OrderControlPage from '@/components/order-control-page';
import RefundManagementPage from '@/components/refund-management-page';
import EscrowManagementPage from '@/components/escrow-management-page';
import TransactionListPage from '@/components/transaction-list-page';
import ProductReviewPage from '@/components/product-review-page';
import AllProductsListPage from '@/components/all-products-list-page';
import FarmerVerificationReviewPage from '@/components/farmer-verification-review-page';
import AllFarmersListPage from '@/components/all-farmers-list-page';
import FarmProfilePage from '@/components/farm-profile-page';
import BankSetupPage from '@/components/bank-setup-page';
import ChatWithBuyerPage from '@/components/chat-with-buyer-page';
import FarmerPayoutHistoryPage from '@/components/farmer-payout-history-page';
import BuyerMessagesPage from '@/components/buyer-messages-page';
import FarmerDashboardPage from '@/components/farmer-dashboard-page';
import AddProductPage from '@/components/add-product-page';
import IdentityVerificationPage from '@/components/identity-verification-page';
import BecomeAFarmerPage from '@/components/become-a-farmer-page';
import UserDashboardPage from '@/components/user-dashboard-page';
import ProductDetailPage from '@/components/product-detail-page';
import MarketplacePage from '@/components/marketplace-page';
import SearchResultsPage from '@/components/search-results-page';
import ShoppingCartPage from '@/components/shopping-cart-page';
import CheckoutPage from '@/components/checkout-page';
import MyOrdersPage from '@/components/my-orders-page';
import TrackOrderPage from '@/components/track-order-page';
import OrderDetailPage from '@/components/order-detail-page';
import NotificationPage from '@/components/notification-page';
import PaymentPage from '@/components/payment-page';
import AddressesPage from '@/components/addresses-page';
import ProfilePage from '@/components/profile-page';
import WishlistPage from '@/components/wishlist-page';
import ChatDetailPage from '@/components/chat-detail-page';
import ChatPage from '@/components/chat-page';
import BlogPage from '@/components/blog-page';

// Added missing type for PageKey since we are extracting App
type PageKey = 'home' | 'about' | 'contact' | 'login' | 'otp' | 'catalog' | 'signup' | 'blog' | 'chat' | 'chat-detail' | 'wishlist' | 'profile' | 'addresses' | 'payment' | 'notifications' | 'order-detail' | 'track-order' | 'my-orders' | 'checkout' | 'cart' | 'search' | 'marketplace' | 'product-detail' | 'dashboard' | 'become-farmer' | 'identity-verification' | 'add-product' | 'farmer-dashboard' | 'buyer-messages' | 'payout-history' | 'chat-buyer' | 'bank-setup' | 'farm-profile' | 'all-farmers' | 'verify-farmer' | 'all-products' | 'product-review' | 'transactions' | 'escrow' | 'refunds' | 'order-control' | 'assign-driver' | 'driver-management' | 'user-detail' | 'users' | 'admin-dashboard' | 'course-detail' | 'access-contact' | 'coach-profile' | 'learning-hub' | 'subscriptions' | 'add-tutor' | 'learning-admin' | 'add-course' | string;

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
