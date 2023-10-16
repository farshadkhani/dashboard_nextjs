import { Barchart } from '@/components/Barchart'
import { Header } from '@/components/Header'
import { Recentorders } from '@/components/Recentorders'
import { Topcards } from '@/components/Topcards'
import Image from 'next/image'

export default function Home() {
  return (
    
    <div className='bg-gray-100 min-h-screen '>
        <Header/>
        <Topcards/>
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <Barchart/>
          <Recentorders/>
        </div>
    </div>
  )
}
