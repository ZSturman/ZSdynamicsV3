import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email format'),
    message: z.string().min(5, 'Message must be at least 5 characters'),
});

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data: any) => {
        console.log('Form data:', data);

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 w-full mx-auto text-light-shade rounded-xl space-y-4">
            <div className="mb-4">
                <label htmlFor="name" className="block  font-bold mb-2">Name:</label>
                <input type="text" id="name" {...register('name')} 
                       className="w-full border border-gray-200 text-black p-2 rounded-lg focus:outline-none focus:border-blue-500" />
                {errors.name && <p className="text-red-500 text-xs italic mt-2">{errors.name.message as string}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block  font-bold mb-2">Email:</label>
                <input type="email" id="email" {...register('email')} 
                       className="w-full border border-gray-200 p-2 text-black rounded-lg focus:outline-none focus:border-blue-500"/>
                {errors.email && <p className="text-red-500 text-xs italic mt-2">{errors.email.message as string}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block  font-bold mb-2">Message:</label>
                <textarea id="message" {...register('message')} 
                          className="w-full border border-gray-200 p-2 text-black rounded-lg focus:outline-none focus:border-blue-500"></textarea>
                {errors.message && <p className="text-red-500 text-xs italic mt-2">{errors.message.message as string}</p>}
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
        </form>
    );
};

export default ContactForm;