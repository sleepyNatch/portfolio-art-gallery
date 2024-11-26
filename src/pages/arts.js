import Image from 'next/image'
import { Inter } from 'next/font/google'
import heading from '../images/art-heading.png'
import a1 from '../images/arts/a-1.png'
import a2 from '../images/arts/a-2.png'
import a3 from '../images/arts/a-3.png'
import a4 from '../images/arts/a-4.png'
import a5 from '../images/arts/a-5.png'
import a6 from '../images/arts/a-6.png'
import a7 from '../images/arts/a-7.png'
import a8 from '../images/arts/a-8.png'
import a9 from '../images/arts/a-9.png'
import a10 from '../images/arts/a-10.png'
import a11 from '../images/arts/a-11.png'
import a12 from '../images/arts/a-12.png'
import a13 from '../images/arts/a-13.png'
import a14 from '../images/arts/a-14.png'
import a15 from '../images/arts/a-15.png'
import a16 from '../images/arts/a-16.png'
import a17 from '../images/arts/a-17.png'
import a18 from '../images/arts/a-18.png'
import a19 from '../images/arts/a-19.png'
import a20 from '../images/arts/a-20.png'
import b1 from '../images/arts/b-1.jpeg'
import b2 from '../images/arts/b-2.jpeg'
import b3 from '../images/arts/b-3.jpeg'
import b4 from '../images/arts/b-4.jpeg'
import b5 from '../images/arts/b-5.jpeg'
import b6 from '../images/arts/b-6.jpeg'
import b7 from '../images/arts/b-7.jpeg'
import dc from '../images/arts/dc.jpg'
import ponsan from '../images/arts/ponsan.png'
import riinu from '../images/arts/riinu.jpg'
import san from '../images/arts/san.png'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{padding:"10px"}}>
        <div>
            <Image src={heading}/>
        </div>
        <div className='gallery'>
            <div className='artimg'>
                <Image src={a2}/>
            </div>
            <div className='artimg'>
                <Image src={a3}/>
            </div>
            <div className='artimg'>
                <Image src={a4}/>
            </div>
            <div className='artimg'>
                <Image src={a5}/>
            </div>
            <div className='artimg'>
                <Image src={a6}/>
            </div>
            <div className='artimg'>
                <Image src={a7}/>
            </div>
            <div className='artimg'>
                <Image src={a9}/>
            </div>
            <div className='artimg'>
                <Image src={a12}/>
            </div>
            <div className='artimg'>
                <Image src={a13}/>
            </div>
            <div className='artimg'>
                <Image src={a14}/>
            </div>
            <div className='artimg'>
                <Image src={a15}/>
            </div>
            <div className='artimg'>
                <Image src={a16}/>
            </div>
            <div className='artimg'>
                <Image src={a17}/>
            </div>
            <div className='artimg'>
                <Image src={a18}/>
            </div>
            <div className='artimg'>
                <Image src={a19}/>
            </div>
            <div className='artimg'>
                <Image src={a20}/>
            </div>
            <div className='artimg'>
                <Image src={b1}/>
            </div>
            <div className='artimg'>
                <Image src={b2}/>
            </div>
            <div className='artimg'>
                <Image src={b3}/>
            </div>
            <div className='artimg'>
                <Image src={b4}/>
            </div>
            <div className='artimg'>
                <Image src={b5}/>
            </div>
            <div className='artimg'>
                <Image src={b6}/>
            </div>
            <div className='artimg'>
                <Image src={b7}/>
            </div>
            <div className='artimg'>
                <Image src={riinu}/>
            </div>
            <div className='artimg'>
                <Image src={san}/>
            </div>
            <div className='artimg'>
                <Image src={dc}/>
            </div>
            <div className='artimg'>
                <Image src={ponsan}/>
            </div>
            <div className='artimg'>
                <Image src={a1}/>
            </div>
            <div className='artimg'>
                <Image src={a8}/>
            </div>
            <div className='artimg'>
                <Image src={a10}/>
            </div>
            <div className='artimg'>
                <Image src={a11}/>
            </div>
        </div>
    </div>
  )
}