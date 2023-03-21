import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Box1 = () => {
  const [isanimating, setIsAnimating] = useState(false)
  return (
    <div className='box-container'>
      <motion.div 
        className="box"
        animate={{
          x: isanimating ? "70vw" : 0,
          opacity: isanimating ? 1 : 0.5,
          rotate: isanimating ? 360 : 0
        }}
        initial={{
          opacity:0.1
        }}
        transition={{
          type: "spring",
          stiffness: 20,
          damping:10
        }}
        onClick={()=>setIsAnimating(!isanimating)}
        >

      </motion.div>
    </div>
  )
}

export default Box1