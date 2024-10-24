import React from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
  const notify = (message) => {
    toast.error(message, {
      position: "top-center",   
      autoClose: 5000,        
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,      
    });
  };

  return (
    <div>
      <button onClick={()=>notify('hey there')}>Notify!</button>
      <ToastContainer
        position="top-center"  
        autoClose={3000}      
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"           
        transition={Bounce}    
      />
    </div>
  );
}

export default Toast;
