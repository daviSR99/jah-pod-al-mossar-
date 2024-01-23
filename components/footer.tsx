import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
   <footer className='mb-10 px-4 text-center text-custom-gray text-bold '>
    <div className='flex items-center justify-center mb-5 gap-6'>
    <a href="https://www.linkedin.com/in/d14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin  size={43}/>
        </a>
        
        <a href="https://github.com/daviSR99" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40}/>
        </a>

        <a href="mailto:daviramos.profissional@gmail.com">
        <FaEnvelope size={40}/>
        </a>
    </div>
     
    <p className='text-medium text-bold text-custom-gray'>
        &copy; 2024, Davi Ramos. Todos os direitos reservados.
    </p>
   </footer>
  )
}


