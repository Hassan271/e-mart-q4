'use Client'
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/header/page'
import BottomofHeader from './components/bottomHeader/page'
import Banner from './components/banner/page'
import Footer from './components/footer/page'
// import LoginPage from './login/page'



export default function Home() {
  return (
    <main>
    <div className=' max-w-screen-2xl   mx-auto   '>
 
    {/* <h1>Main Page </h1> */}
    {/* <Link href={"./login"}>Login Page </Link> */}
    
    {/* <Header/> */}
    {/* <BottomofHeader/> */}
    <Banner/>
    {/* <Footer/> */}
 
 
    </div>
    </main>
  )
}
