import Link from 'next/link'
import { Plus } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-20 py-4 text-foreground rounded-md shadow-md mb-6">
        <Link href="/" className="text-xl font-bold hover:primary transition-colors">
            <Plus/> Se.An. Logo
        </Link>
        <div className="space-x-6 text-lg">
            <Link href="/" className="hover:text-primary transition-colors">
                Home
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
                About
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
            </Link>
        </div>
        <div className='space-x-6'>
            <Button variant="outline">Login</Button>
            <Button variant="default">Register</Button>
        </div>
    </nav>
  )
}

export default Navbar