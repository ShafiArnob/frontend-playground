import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Order = ({ pizza, setShowModal }) => {

  const containerVarients = {
    hidden:{
      opacity:0,
      x:"100vw"
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        type:"spring",
        mass:0.4,
        damping: 10,
        when:"beforeChildren",
        staggerChildren:0.4
      } 
    }
  }

  const childVarients = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1
    }
  }

  useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true)
    }, 2000)
    console.log("order");
    return () => setShowModal(false)
  },[setShowModal])
  return (
    <motion.div className="container order"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p
        variants={childVarients}

      >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={childVarients} 
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;