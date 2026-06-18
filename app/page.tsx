import { redirect } from 'next/navigation';

export default function Page() {
  // Redirect root to grouped public home route
  redirect('/public/home');
}
