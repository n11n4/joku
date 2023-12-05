import React from 'react'
import Link from 'next/link';

const Navbar = () => {
    const links = [
        {label: 'Porssisahko.net', href: '/'},
        {label: 'Katso huomisen hinnat', href:'/huominen'},
    ]
   
  return (
    <nav className= 'flex space-x-7 border-b mb-6  px-7 h-14 items-center'>
        <ul className='flex space-x-7'>
            {links.map(link=><Link key={link.href} className='hover:text-zinc-500'
                href={link.href}>{link.label}</Link>)}    
        </ul>
    </nav>
  )
}

export default Navbar