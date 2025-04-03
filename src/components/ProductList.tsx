import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className='flex gax-x-8 gap-y-16 justify-between flex-wrap'>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
        <Image src="https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt='' fill sizes='25vw' 
        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
        <Image src="https://images.pexels.com/photos/7321545/pexels-photo-7321545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
        </div>
        <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className='tex-sm text-gray-500'>My description</div>
        <button  className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 twxt-xs hover:bg-lama'>Add to Cart</button>
        </Link>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
        <Image src="https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt='' fill sizes='25vw' 
        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
        <Image src="https://images.pexels.com/photos/7290174/pexels-photo-7290174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
        </div>
        <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className='tex-sm text-gray-500'>My description</div>
        <button  className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 twxt-xs hover:bg-lama'>Add to Cart</button>
        </Link>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
        <Image src="https://images.pexels.com/photos/5655054/pexels-photo-5655054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt='' fill sizes='25vw' 
        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
        <Image src="https://images.pexels.com/photos/3060257/pexels-photo-3060257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
        </div>
        <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className='tex-sm text-gray-500'>My description</div>
        <button  className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 twxt-xs hover:bg-lama'>Add to Cart</button>
        </Link>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
        <Image src="https://images.pexels.com/photos/3762663/pexels-photo-3762663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt='' fill sizes='25vw' 
        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
        <Image src="https://images.pexels.com/photos/7588594/pexels-photo-7588594.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
        alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
        </div>
        <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className='tex-sm text-gray-500'>My description</div>
        <button  className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 twxt-xs hover:bg-lama'>Add to Cart</button>
        </Link>
    </div>
  )
}

export default ProductList