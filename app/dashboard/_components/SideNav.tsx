import { FileClock, Home, Settings, WalletCards} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideNav() {
    const MenuList=[
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
        },
        {
            name:'Billing',
            icon:WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/setting'
        },
    ]
  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center border-b-2'>
        <Image src={'/logo.svg'} alt='OGcreator' width={50} height={50} className='mb-2'/>
        </div>

        <div className='mt-10'>
            {MenuList.map((menu,index)=>(
                <div className='flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer'>
                    <menu.icon/>
                    <h2>{menu.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav