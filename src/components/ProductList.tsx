import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className='flex gax-x-8 gap-y-16 justify-between flex-wrap'>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
        <Image src="https://images.pexels.com/photos/25568845/pexels-photo-25568845/free-photo-of-couple-standing-and-reading-album.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
        alt='' fill sizes='25vw' 
        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
        <Image src="https://images.pexels.com/photos/25686146/pexels-photo-25686146/free-photo-of-cocktail-in-glass.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
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
        <Image src="https://images.pexels.com/photos/25568845/pexels-photo-25568845/free-photo-of-couple-standing-and-reading-album.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
        alt='' fill sizes='25vw' 
        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
        <Image src="https://images.pexels.com/photos/25686146/pexels-photo-25686146/free-photo-of-cocktail-in-glass.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
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
        <Image src="https://images.pexels.com/photos/25568845/pexels-photo-25568845/free-photo-of-couple-standing-and-reading-album.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
        alt='' fill sizes='25vw' 
        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
        <Image src="https://images.pexels.com/photos/25686146/pexels-photo-25686146/free-photo-of-cocktail-in-glass.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
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
        <Image src="https://images.pexels.com/photos/25568845/pexels-photo-25568845/free-photo-of-couple-standing-and-reading-album.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
        alt='' fill sizes='25vw' 
        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
        <Image src="https://images.pexels.com/photos/25686146/pexels-photo-25686146/free-photo-of-cocktail-in-glass.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
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