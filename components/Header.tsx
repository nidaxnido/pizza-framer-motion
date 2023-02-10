
import React from 'react';
import styles from '@/styles/Home.module.css'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <svg className={styles.logopizza} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg>
      </div>
      <motion.div className={styles.judul}
        initial={{ y:-250 }}
        animate={{ y:-1 }}
        transition={{ delay:0.2,type:'spring', stiffness:150 }}
        >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;