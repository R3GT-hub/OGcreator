"use client"
import { TEMPLATE } from '@/app/dashboard/_components/TemplateListSection'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { generateKey } from 'crypto'
import { Loader2Icon } from 'lucide-react'
interface PROPS{
    selectedTemplate?:TEMPLATE;
    userFormInput:any
    loading:boolean
}
function FormSection({selectedTemplate,userFormInput,loading}:PROPS) {

    const [formData,setFormData]=useState<any>();
    const onSubmit=(e:any)=>{
        e.preventDefault();
        userFormInput(formData);
    }
    const handleInputChnage=(e:any)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }
  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
        {/*@ts-ignore*/}
        <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70}/>
        <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
        <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

        <form className='mt-6' onSubmit={onSubmit}>
            {selectedTemplate?.form?.map((item,index)=>(
                <div className='my-2 flex flex-col gap-2 mb-7'>
                    <label className='font-bold' >
                        {item.label}
                    </label>
                    {item.feild=='input'?<Input name={item.name} required={item?.required} onChange={handleInputChnage}/>:
                    item.feild=='textarea'?<Textarea name={item.name} required={item?.required} onChange={handleInputChnage}/>:null
                    }
                </div>
            ))}
            <Button type="submit" className='w-full py-6' disabled={loading}>{loading&&<Loader2Icon className='animate-spin'/>} Generate Content</Button>
        </form>


    </div>
  )
}

export default FormSection