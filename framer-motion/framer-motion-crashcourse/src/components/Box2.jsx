import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Box2 = () => {
  const [isanimating, setIsAnimating] = useState(false)

  return (
    <div className='box-container'>
      <motion.div 
        className="box"
        whileHover={{
          scale:1.2
        }}
        whileTap={{
          scale:0.8
        }}
        drag
        dragConstraints={{
          right:20,
          left:-20,
          top:10,
          bottom:10
        }}

        >

      </motion.div>
    </div>
  )
}

export default Box2