import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Context  from '../context/state'
import { Quicksand } from '@next/font/google'
import Header from '@/components/Header'

const quicksand = Quicksand({ weight:'300', subsets:['latin'], style: 'normal'})
export default function App({ Component, pageProps }: AppProps) {
  return <Context>
    <main className={quicksand.className}>
      <Component {...pageProps} />
    </main>
    
  </Context> 
}
