import React from 'react'

const Hero = () => {
    return (
        <React.Fragment>
            <section id='home' className='flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container w-full border-2 border-red-500 p-2'>
                <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
                    <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
                    <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
                        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
                        <br />
                        <span className='text-coral-red inline-block mt-3'>Nike</span>
                        Shoes
                    </h1>
                    <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
                        Discover stylish Nike arrivals, quality comfort, and innovation for
                        your active life.
                    </p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Hero