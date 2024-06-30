"use client"
import { FileClock, Home, Settings, WalletCards} from 'lucide-react'
import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation'
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

    const path=usePathname();
    
  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center '>
        <Image src={'/logo.svg'} alt='OGcreator' width={50} height={50} />
        </div>
            <hr className='my-[26px] border'/>
        <div className='mt-3'>
            {MenuList.map((menu,index)=>(
                <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center  ${path==menu.path&&'bg-primary text-white'}`}>
                    <menu.icon className='h-6 w-6'/>
                    <h2 className='text-lg'>{menu.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav