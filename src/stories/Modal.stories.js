import React from 'react';
import { Modal } from './Modal';

import './Modal.css';


export default {
  title: 'Modal',
  component: Modal,
};

export const Default = () => {
 
  
  const [isOpen, setIsOpen] = React.useState(false);
  const contenido="Esta es una prueba mas ";
  return (
    <>
      <button style={{marginLeft: 10,padding: 8,backgroundColor: '#007bff', color: '#fefffa',border: 'none',
    borderRadius: 4 }} 
     onClick={() => setIsOpen(true) }>Abrir Modal</button>
      <Modal contenido={contenido} isOpen={isOpen} onClose={() => setIsOpen(false) } />
    </>
  );
};

export const Primary = {
  args:{
      contenido: 'Escribe aqui',
      isOpen: true,
  },
  argTypes: {
      backgroundColor: { control: 'color' },
      backgroundColorBotones: { control: 'color' },
      color: { control: 'color' },

    },
  
};
