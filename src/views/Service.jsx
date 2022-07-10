import PageLayout from "../layouts/PageLayout";
import {motion} from 'framer-motion'

const Service = () => {
   return (
      <motion.div
      initial={{width: 0}}
      animate={{width: "100vw" }}
      exit={{ x: window.innerWidth , transition: {duration: .5 }}}
      >
         <PageLayout>
           <h1>This is the service page! </h1> 
         </PageLayout>
      </motion.div>
   ) 
}

export default Service;