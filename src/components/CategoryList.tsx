import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div className='flex flex-row gap-4 items-center mt-3 border-b-2 overflow-x-hidden hover:overflow-x-auto 
        scrollbar-hide'>
        <div className='flex gap-4 md:gap-8'>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/973405/pexels-photo-973405.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' 
                fill sizes='20vw' className='object-cover'/> 
            </div>           
            <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>           
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/301367/pexels-photo-301367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' 
                fill sizes='20vw' className='object-cover'/> 
            </div>           
            <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
           </Link>           
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/2720447/pexels-photo-2720447.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' 
                fill sizes='20vw' className='object-cover'/> 
            </div>           
            <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>           
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' 
                fill sizes='20vw' className='object-cover'/> 
            </div>           
            <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>           
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/279480/pexels-photo-279480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' 
                fill sizes='20vw' className='object-cover'/> 
            </div>           
            <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>           
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/9774854/pexels-photo-9774854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' 
                fill sizes='20vw' className='object-cover'/> 
            </div>           
            <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/25189483/pexels-photo-25189483/free-photo-of-close-up-of-orchids.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' 
                fill sizes='20vw' className='object-cover'/> 
            </div>           
            <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/25189483/pexels-photo-25189483/free-photo-of-close-up-of-orchids.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' 
                fill sizes='20vw' className='object-cover'/> 
            </div>           
            <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/25189483/pexels-photo-25189483/free-photo-of-close-up-of-orchids.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' 
                fill sizes='20vw' className='object-cover'/> 
            </div>            
            <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
        </div>
    </div>
  )
}

export default CategoryList