import Image from 'next/image'
import { Inter } from 'next/font/google'
import heading2 from '../images/heading2.png'
import profile from '../images/botton-05.png'
import arts from '../images/botton-02.png'
import editing from '../images/botton-03.png'
import translation from '../images/botton-04.png'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
    <div>
      <Image src={heading2}/>
    </div>
    <div className='Center'>
      <Link href="/profile">
        <Image src={profile}/>
      </Link>
      <Link href="/arts">
        <Image src={arts}/>
      </Link>
    </div>
  </div>
  )
}
