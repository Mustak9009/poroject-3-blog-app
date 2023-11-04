import React from 'react'
import Image from 'next/image';
export default function Header() {
  return (
    <div className='w-full text-center py-5 relative'>
        <section className='font-lora text-3xl text-[#444] px-3 flex justify-center items-center'>
            <h1 className='absolute top-10'>React & Node</h1>
            <span className='text-[130px] absolute top-32'>Blog</span>
        </section>
        <Image  src={'https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt='morning sunny flowers' className='w-full object-cover h-[70vh] mt-32' width={0} height={0} sizes="100vw"/>
    </div>
  )
}
