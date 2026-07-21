import './global.css';

export const metadata = {
  title: 'Window Cleaners Northampton | Aquapure Plus',

  description:
    'Professional window cleaning, gutter clearing, fascia & soffit cleaning, conservatory roof cleaning and pressure washing throughout Northampton and surrounding villages. Free quotations.',

  keywords: [
    'window cleaners Northampton',
    'window cleaning Northampton',
    'gutter clearing Northampton',
    'gutter cleaning Northampton',
    'fascia and soffit cleaning Northampton',
    'conservatory roof cleaning Northampton',
    'pressure washing Northampton',
    'patio cleaning Northampton',
    'driveway cleaning Northampton',
    'Aquapure Plus',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
