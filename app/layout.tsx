import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'City Health and Industrial Services - Medical Examination Form',
  description: 'Pre-employment medical check up services by City Health and Industrial Services, Halol',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
