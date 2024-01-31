import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Navbar = () => {
    return (
        <React.Fragment>
            <header className='padding-x py-8 z-10 absolute w-full'>
                <nav className='flex justify-between items-center max-container'>
                    <a href='/'>
                        <img src={headerLogo} width={130} height={29} alt='logo' />
                    </a>
                    <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                        {navLinks.map((item) => {
                            return (
                                <li key={item?.label}>
                                    <a href={item?.href} className='font-montserrat leading-normal text-lg text-slate-gray '>
                                        {item?.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className='hidden max-lg:block'>
                        <img src={hamburger} width={25} height={25} alt='hamburger' />
                    </div>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default Navbar