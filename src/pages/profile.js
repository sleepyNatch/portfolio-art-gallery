import { Inter } from 'next/font/google'
import Image from 'next/image'
import heading from '../images/profile-heading.png'
import profile from '../images/profile-06.png'
import gmail from '../images/gmail.png'
import phone from '../images/phone-call.png'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{width:"100%", height:"100%",backgroundColor:"#9ED7FF"}}>
        <div>
            <Image src={heading}/>
        </div>
        <div className='column'>
        <div>
            <p>
                Name : Natchanan Kitprayoon
            </p>
            <p>
                Age : 17 y/o
            </p>
            <p>
                Dirth of Birth : 31-05-2007
            </p>
            <p>
                School : St. Francis Xavier Convent School
            </p>
            <p>
                Major : Science-Mathematics
            </p>
            <p>
                Contract
            </p>
            <div className='smallColumn'>
                <Image src={gmail} style={{marginLeft:"35px", width:"35px", height:"35px"}}/>
                <p>natchananks@gmail.com</p>
            </div>
            <div className='smallColumn'>
                <Image src={phone} style={{marginLeft:"35px", width:"35px", height:"35px"}}/>
                <p>096 185 9907</p>
            </div>
        </div>
            <Image src={profile}/>
        </div>
        <br></br><br></br>
    </div>
)
}
