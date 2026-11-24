import './globals.css';
import type { Metadata } from 'next';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
  title: 'NetGuard AI — Network Attack Forecasting',
  description:
    'AI-powered network intrusion detection and attack forecasting built on the IoT-SFC v2 (2026) dataset.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
