import Header from "@/components/Header";
import { Pizza_data } from "@/context/state";
import { Box, VStack, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'
const Order = () => {
    const [pizza, setPizza] = useContext(Pizza_data);
    const [showTitle, setShowTitle] = useState(true);

    setTimeout(()=>{
        setShowTitle(false)
    }, 4000)
    return (<>
        <Header />
        <Box maxW='800px' m='100px auto 40px' textAlign='center'>
            <AnimatePresence>
                {showTitle && (
                    <motion.h2 exit={{y:-1000}} transition={{duration:1}}>Thank you for your order :)</motion.h2> 
                )}
            </AnimatePresence>
           
           <Text m='20px auto' opacity={0.7}>You ordered a {pizza.base} pizza with:</Text>
           <VStack>
           {pizza.toppings.map((topping:string) => {
            return <Text key={topping} opacity={0.7}>{topping}</Text>
           })}
           </VStack>
           
        </Box>
    </>);
}

export default Order;