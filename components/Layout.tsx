import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import Header from "./Header";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  })
const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <>
        <Header />
        <ChakraBox maxW='300px' m='100px auto 40px' 
        initial={{ x:'100vw'}}
        animate={{ x:0 }}
        transition={{delay:1.5}}
        >
        {children}
        </ChakraBox>
        </>
    );
}

export default Layout;