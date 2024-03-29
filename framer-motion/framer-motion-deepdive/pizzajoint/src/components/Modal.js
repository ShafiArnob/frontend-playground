import React from 'react';
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const Modal = ({showModal, setShowModal}) => {
  
  const backdropVarient ={
    visible:{opacity:1},
    hidden:{opacity:0}
  }

  const modalVarient = {
    hidden: {
      y:"-100vh",
      opacity:0
    },
    visible:{
      y:"200px",
      opacity:1,
      transition:{delay:0.5}
    }
  }
  console.log("modal", showModal);
  return (
    <AnimatePresence>
      {
        showModal && (
          <motion.div className='backdrop'
            variants={backdropVarient}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className='modal'
              variants={modalVarient}
              
            >
              <p>Want to make another pizza?</p>
              <Link to="/"><button 
                onClick={()=>setShowModal(false)}
              >Start Again</button></Link>
            </motion.div>
          
          </motion.div>
        )
      }
    </AnimatePresence>
  )
}

export default Modal