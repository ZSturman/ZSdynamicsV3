"use client"
import React, { useState } from 'react'
import ContactForm from "./contactForm/ContactForm"

const ContactSheet = () => {
  const [flashMessage, setFlashMessage] = useState({
    message: '',
    type: '',
    active: false
  })

  return (
    <div className='flex flex-col w-full'>

    {flashMessage.active && (
      <div
        className={`${
          flashMessage.type === 'success'
            ? 'bg-green-400'
            : 'bg-red-400'
        } text-white p-5 text-center`}
      >
        {flashMessage.message}
      </div>
    )}
      <ContactForm setFlashMessage={setFlashMessage} />
    </div>
  )
}

export default ContactSheet