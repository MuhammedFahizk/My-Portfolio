import React from 'react'
import { ContactInformation, ContactForm } from '../components'


export const Contacts = () => {
  return (
    <div className='   bg-lightS dark:bg-darkS grid  md:grid-cols-3  rounded-4xl h-[500px]   '>
          <ContactInformation/>
          <ContactForm/>
    </div>
  )
}
