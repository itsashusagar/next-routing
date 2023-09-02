import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
            <title>Contact Us</title>
        </head>
        <body className={inter.className}>
        <h1>Hello</h1>{children}
       
        </body>
      </html>
    )
  }
  