import '@/app/globals.css';
import { connection } from 'next/server';

import Container from '@/components/Container';
import Header from '@/components/Header';
import ToastProvider from '@/components/ToastProvider';
import { fontVariablesClassName } from '@/lib/fonts';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forms',
  description: 'フォームアプリ Forms',
}

export default async function RootLayout(props: {
  children: React.ReactNode
}) {
  await connection();

  return (
    <html lang="ja">
      <body className={fontVariablesClassName}>
        <ToastProvider>
          <Header />
          <Container>{props.children}</Container>
        </ToastProvider>
      </body>
    </html>
  )
}