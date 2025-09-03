import React from 'react'
import { Phone } from 'lucide-react'

const topbar = () => {
  return (
    <div className='w-screen bg-topbar-background m-0 py-2 mb-4 shadow-md flex items-center justify-between text-white'>
        <div className='w-full pl-5'> <Phone/> Helpline: 1800-111-950</div>
    </div>
  )
}

export default topbar