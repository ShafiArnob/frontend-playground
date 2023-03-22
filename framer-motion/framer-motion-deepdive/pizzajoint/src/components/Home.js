import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const containerVarients={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{duration:1.5, delay:0.5}
    },
    exit:{
      x:"-100vw",
      transition:{ease:"easeInOut"}
    }
  }
  const buttonVarient = {
    visible:{

    },
    hover:{
      scale: 1.1, 
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition:{
        duration:0.3,
        yoyo:Infinity
      }
    }
  }
  return (
    <motion.div className="home container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVarient}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;