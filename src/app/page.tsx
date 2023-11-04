import Image from 'next/image'
import {Header, Posts, NavBar, SideBar} from './Components';
export default function Home() {
  return (
    <div className='w-full h-full'>
      <NavBar/>
      <main>
        <Header/>
        <div className='grid sm:grid-cols-2 lg:grid-cols-[60%_1fr] xl:grid-cols-[75%_1fr] gap-5'>
          <Posts/>
          <SideBar/>
        </div>
      </main>
    </div>
  )
}
// grid md:grid-cols-[50%_1fr] lg:grid-cols-[75%_1fr] 