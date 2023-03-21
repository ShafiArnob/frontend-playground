import React from 'react'
import { motion } from 'framer-motion'
const Box3 = () => {
  const boxVarient = {
    hidden:{
      x:"-100vw"
    },
    visible:{
      x:0,
      transition:{
        delay:0.5,
        when:"beforeChildren",
        staggerChildren:0.2

      }
    }
  }

  const listVarient = {
    hidden:{
      x:-10,
      opacity:0
    },
    visible:{
      x:0,
      opacity:1,
      // staggerChildren:0.2
      // transition:{
      //   delay:1
      // }
    }
  }
  return (
    <div className='box-container'>
      <motion.div 
        className="box"
        variants={boxVarient}
        initial="hidden"
        animate="visible"
        >
          {
            [1,2,3].map(box=>
              <motion.li
                className='boxItem'
                variants={listVarient}
               
                        >

              </motion.li>)
          }
      </motion.div>
    </div>
  )
}

export default Box3