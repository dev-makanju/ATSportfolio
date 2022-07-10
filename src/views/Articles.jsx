import PageLayout from "../layouts/PageLayout";
import {motion} from "framer-motion"

const Article = () => {
   return (
      <motion.div
      initial={{width: 0}}
      animate={{width: "100vw" }}
      exit={{ x: window.innerWidth , transition: {duration: .5 }}}
      >
         <PageLayout>
            <div>This is home article</div>
         </PageLayout>
      </motion.div>
   )
}

export default Article;