import './global.css';

export const metadata = {
  title: 'Window Cleaning Northampton | Aquapure Plus',
  description: 'Aquapure Plus provides professional window cleaning, gutter clearing, conservatory roof cleaning and pressure washing in Northampton. Trusted since 2006.',
  keywords: ['window cleaning Northampton', 'gutter cleaning Northampton', 'conservatory cleaning Northampton', 'pressure washing Northampton'],
  openGraph: {
    title: 'Aquapure Plus Window Cleaning Northampton',
    description: 'Trusted local window, gutter, conservatory and exterior cleaning services in Northampton since 2006.',
    url: 'https://aquapure-plus.co.uk',
    siteName: 'Aquapure Plus',
    images: ['/hero.jpg'],
    locale: 'en_GB',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
