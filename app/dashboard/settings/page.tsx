import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='flex items-center w-full justify-center h-full mt-10 mb-10'>
      <UserProfile/>
    </div>
  )
}

export default Settings