import { Box, chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp, motion, useAnimationControls } from "framer-motion";
import Header from "./Header";
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router";
import { useCallback } from "react";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  })
  const varian ={
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
    },
}
const varianBtn = {
    hidden:{
        x:'-100vh'
    },
    visible:{
        x:0
    },
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
const Layout = ({children, route, caption, animasi,syarat}
                :{children:React.ReactNode, route:string, caption:string, animasi?:boolean, syarat?:boolean}) => {
    const router = useRouter()
    const controls = useAnimationControls()

    const onRoute = useCallback((href: string) => async () => {
    await router.prefetch(href)
    await controls.start('exit')
    await router.push(href)
    await controls.set('hidden')
    await controls.start('enter')
    }, [router, controls])
    return (
        <>
        {/* <Header /> */}
        {/* <ChakraBox maxW='300px' m='100px auto 40px' 
        initial={{ x:'100vw'}}
        animate={{ x:0 }}
        transition={{delay:1.5}} */}
        <Box as={motion.div} maxW='300px' m='100px auto 40px' 
        variants={varian}
        key={route}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
        {children}
        {animasi?
            
                syarat && 
                <motion.button className={styles.btn} 
                    variants={varianBtn} 
                    whileHover="hovering" 
                    initial="hidden"
                    animate="visible"
                    onClick={onRoute(route)}>
            {caption}
            </motion.button>
            
            :
            <motion.button className={styles.btn} variants={varianBtn} whileHover="hovering"
                            onClick={onRoute(route)}>
            {caption}
            </motion.button>
        }
        
        </Box>
        </>
    );
}

export default Layout;