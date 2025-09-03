import React from 'react'
import { Clock, Mail, Phone } from 'lucide-react'
import { SelectTrigger, SelectValue, Select, SelectContent, SelectItem } from './ui/select'

const topbar = () => {
  return (
    <div className='w-screen bg-primary/90 m-0 py-1 mb-4 shadow-md flex items-center justify-between text-white text-sm xl:px-[15%] sm:px-1 sm:text-xs xs:px-1 xs:text-xs'>
        <div className='flex items-center justify-between gap-6 sm:gap-2 xs:gap-1'>
            <div className='pl-5 flex items-center gap-3'> <Phone/> <span className='hidden md:block'>Helpline: 1800-111-950</span></div>
            <div className='pl-5 flex items-center gap-3'> <Mail/>  <span className='hidden md:block'>info@econsult.gov.in</span></div>
            <div className='pl-5 flex items-center gap-3'> <Clock/> <span className='hidden md:block'>Last Updated: Sept 02, 2025</span></div>
        </div>
        <div>
            <Select defaultValue="English">
                <SelectTrigger className='border border-white text-primary-foreground bg-primary/90'>
                    <SelectValue placeholder="Languages"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="Odia">Odia</SelectItem>
                    <SelectItem value="Bengali">Bengali</SelectItem>
                </SelectContent>
            </Select>
        </div>
    </div>
  )
}

export default topbar