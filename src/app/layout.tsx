import './globals.css';

export const metadata = {
  title: 'AI Cryptocurrency Trading Bot',
  description: 'Efficient and reliable AI trading bot for cryptocurrency.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}