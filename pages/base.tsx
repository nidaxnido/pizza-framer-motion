import Header from "@/components/Header";
import { Box, Button, Heading, ListItem, UnorderedList, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Pizza_data } from "@/context/state";
import { useContext } from "react";
import { addAbortSignal } from "stream";
import styles from '@/styles/Home.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from "@/components/Layout";
import Tombol from "@/components/Tombol";

const listVariants = {
    hovering:{
        scale:1.2,
        originX:0,
        color:'#f8e112',
        transition:{
            type:'spring',
            stiffness:300,
            yoyo:Infinity
        }
    }
}
const containerVariants ={
    hidden:{
        x:'100vw'
    },
    visible:{
        x:0,
        transition:{
            delay:1.5
        }
    },
    exit:{
        x:'-100vw'
    }
}

const Base = ()=>{
    const bases = ['Classic', 'Thin & Crispy', 'Thic Crust'];
    const [pizza, setPizza] = useContext(Pizza_data);
    const addBase = (base:string) =>{
        setPizza({...pizza, base})
        console.log(pizza)
    }
    return (
        <>
        <Header />
        <AnimatePresence>
        <Box as={motion.div} maxW='300px' m='100px auto 40px' 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <Heading className={styles.subtitle} as='h3'>Step 1: Choose Your Base</Heading>
            <VStack textAlign='left'  align='stretch' spacing={0} pt='10px' className="cul">
                {bases.map(base=>{
                    // let spanClass = pizza.base == base ? 'active' : ''
                    return (
                        <Box as={motion.li} className={`${styles.listBtn} ${pizza.base == base ? styles.aktif : ''}`} key={base} 
                                onClick={()=> addBase(base)}  alignItems='start' justifyContent='start'
                                _active={{fontWeight:'bold'}}
                                variants={listVariants}
                                whileHover="hovering"
                                >
                            {base}
                        </Box>
                    )
                })}
            </VStack>
            {pizza.base && (
                <motion.div animate={{x:0}} initial={{ x:'-100vh' }}>
                    <Link href='/topping'>
                        {/* <button className={styles.btn}>Next</button> */}
                        <Tombol>Next</Tombol>
                    </Link>
                </motion.div>
            )}
            </Box>
            </AnimatePresence>
            
        
        </>
        
    );
}

export default Base;