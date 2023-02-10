import Header from "@/components/Header";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";
import styles from '@/styles/Home.module.css'
import { useContext } from "react";
import { Pizza_data } from "@/context/state";
import Layout from "@/components/Layout";
import Tombol from "@/components/Tombol";
import { motion } from "framer-motion";

const listVariants = {
    hovering:{
        scale:1.2,
        originX:0,
        color:'#f8e112',
        transition:{
            type:'spring',
            stiffness:300
        }
    }
}
const buttoning = {
    hovering:{
        scale:1.1,
        textShadow:"0px 0px 8px rgb(255,255,255)",
        boxShadow:"0px 0px 8px rgb(255,255,255)",
        transition:{
            duration:0.8,
            repeat:Infinity,
            repeatType:'reverse'
        }
    }
}
const Topping = () =>{
    const toppings:string[] = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
    const [pizza, setPizza] = useContext(Pizza_data)

    const addTopping = (topping:string) =>{
        let newToppings;
        if(!pizza.toppings.includes(topping)){
        newToppings = [...pizza.toppings, topping];
        } else {
            newToppings = pizza.toppings.filter((item:string) => {
                return item !== topping
            });
        
        }
        setPizza({ ...pizza, toppings: newToppings });
    }

    return (
        <>
           
            <Layout>
                <Heading className={styles.subtitle} as='h3'>Step 1: Choose Your Base</Heading>
                <VStack textAlign='left'  align='stretch' spacing={0} pt='10px' className="cul">
                    {toppings.map(topping =>{
                        return <Button as={motion.li} className={`${styles.listBtn} ${pizza.toppings.includes(topping) ? styles.aktif : ''}`} key={topping} 
                                onClick={()=> addTopping(topping)} variant='ghost' alignItems='start' justifyContent='start'
                                _active={{fontWeight:'bold'}}
                                variants={listVariants}
                                whileHover="hovering"
                                // whileHover={{
                                //     scale:1.2,
                                //     originX:0,
                                //     color:'#f8e112'
                                // }}
                                >
                            {topping}
                        </Button>
                    })}
                </VStack>
                <Link href="/order">
                    <motion.button className={styles.btn} variants={buttoning} whileHover="hovering">
                    Order
                    </motion.button>
                    {/* <Tombol>Order</Tombol> */}
                </Link>
            {/* </Box> */}
            </Layout>
            
        </>
    )
}
export default Topping;