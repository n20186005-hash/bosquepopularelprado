import { redirect } from 'next/navigation';

// This page only renders for the bare `/` path. The middleware normally
// intercepts `/` and redirects to the default locale (e.g. `/zh`); this
// fallback covers the case where no locale prefix is present.
export default function RootPage() {
  redirect('/zh');
}