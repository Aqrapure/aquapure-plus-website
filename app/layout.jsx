import './global.css';

export const metadata = {
  title: 'Aquapure Plus Window Cleaning Northampton',
  description: 'Trusted window, gutter, conservatory and exterior cleaning services in Northampton since 2006.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
