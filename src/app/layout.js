import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'С днём рождения, папа!',
  description: 'Специально для тебя',
  viewport: 'width=1400',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  )
}
