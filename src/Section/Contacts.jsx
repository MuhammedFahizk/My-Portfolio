import React from 'react'
import { ContactInformation, ContactForm } from '../components'


export const Contacts = () => {
  return (
    <div className='flex flex-col-reverse  md:grid md:grid-cols-5 lg:grid-cols-3  bg-lightS dark:bg-darkS h-full min-h-[500px] rounded-4xl'>
  <ContactInformation />
  <ContactForm />
</div>

  )
}
