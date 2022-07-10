import PageLayout from "../layouts/PageLayout";
import {motion} from "framer-motion"

const Contact = () => {
   return (
      <motion.div
      initial={{width: 0}}
      animate={{width: "100vw" , height:'100vh' }}
      exit={{ x: window.innerWidth , transition: {duration: .5 }}}
      >
         <PageLayout>
            <h1>This is home contact</h1>
         </PageLayout>
      </motion.div>
   )
}

export default Contact;