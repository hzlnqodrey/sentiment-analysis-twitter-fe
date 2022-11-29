import { Suspense } from 'react'
import './globals.css'
import Head from './head'
import Navbar from './shared/navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body className="container mx-auto px-4 sm:text-sm md:text-base lg:text-lg xl:text-xl text-lg font-plus-jakarta">
        <Suspense fallback={<> Loading ... </>}>
          <Navbar />
          {children}
        </Suspense>
      </body>
    </html>
  )
}
