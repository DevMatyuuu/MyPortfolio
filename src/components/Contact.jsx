import React,{useEffect, useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button} from '@material-tailwind/react'
import emailjs from '@emailjs/browser'

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_ltt08jl';
    const templateId = 'template_somp5hv';
    const publickKey = 'DfzlGylZBlQyaUcFc';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Matthew',
      message: message,
    };

    emailjs.send (serviceId, templateId, templateParams, publickKey)
    .then((response) => {
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('error sending email', error)
    })
  };

  useEffect(() => {
    AOS.init();
  }, [])
  return (
  <section className='h-[105vh] bg-contactBG bg-cover' id="contact">
    <h1 className='text-center lg:mb-16'>
        <p className='text-slate-600 font-semibold lg:mb-2 text-lg font-poppins'>Get In Touch</p>
        <p className='font-bold lg:text-6xl text-2xl mb-8 lg:mb-0 font-poppins uppercase'>Contact</p>
    </h1>
    <div className="py-8 lg:py-16 px-6 lg:mx-auto lg:max-w-[60%] sl:max-w-[1000px] sm:max-w-[600px] lg:mt-10 sl:mt-5 sm:mt-5 sm:mb-5 mt-5 mb-5 sl:mb-5 md:mb-10 rounded-xl bg-white border-2 lg:border-r-8 lg:border-b-4 border-black">
            <h2 className="mb-2 sl:text-4xl lg:text-4xl sm:text-2xl tracking-tight font-poppins font-bold text-center text-black uppercase">Let's Connect</h2>
            <h4 className='text-center mb-7 lg:text-base text-sm'>Need a Web designer / Web Developer to work with? You can send me an Email using the form below. Have a nice day!</h4>
            <form onSubmit={handleSubmit} className="space-y-8 px-8">
                <div>
                    <label  className="block mb-2 text-sm font-medium text-black">Your Name:</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" id="subject" value={name} className="block p-3 w-full text-sm border-black text-black bg-gray-50 rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-slate-600" placeholder="please enter your name" required></input>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-black">Your Email Address:</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" value={email} className="shadow-sm bg-gray-50 border border-black text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-slate-600" placeholder="name@gmail.com" required></input>
                </div>
                <div className="sm:col-span-2">
                    <label  className="block mb-2 text-sm font-medium text-black">Your message:</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} id="message" rows="6" value={message} className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-black focus:ring-primary-500 focus:border-primary-500 placeholder-slate-600" placeholder="Leave a comment..."></textarea>
                </div>
                <Button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</Button>
            </form>
        </div>
  </section>
  )
}

export default Footer