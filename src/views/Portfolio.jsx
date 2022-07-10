import PageLayout from "../layouts/PageLayout"
import {motion} from 'framer-motion'

const Portfolio = () => {
   return (
      <motion.div
      initial={{width: 0}}
      animate={{width: "100vw" }}
      exit={{ x: window.innerWidth , transition: {duration: .5 }}}
      >
         <PageLayout>
            <div>Hello portfolio</div>
         </PageLayout>
      </motion.div>
   )
}

export default Portfolio