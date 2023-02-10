import { motion } from "framer-motion"
import styles from '@/styles/Home.module.css'
const varian = {
    hovering:{
        scale:1.1,
        textShadow:"0px 0px 8px rgb(255,255,255)",
        boxShadow:"0px 0px 8px rgb(255,255,255)",
        transition:{
            duration:0.3,
            repeat:Infinity,
            repeatType:'mirror'
        }
    }
}
const Tombol = ({children}:{children:string}) =>{
    return <motion.button className={styles.btn}
    variants={varian}
    whileHover="hovering"
   >{children}</motion.button>
}

export default Tombol;