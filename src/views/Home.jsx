import { Link } from "react-router-dom";
import 
   { Container ,
     ContainerChild , 
     FlippedAbout , 
     FlippedPortfolio , 
     Img,
     Logo,
     NavIcon
   } 
from "../styles/home-style/home-style";
import {motion} from "framer-motion"


const Home = () => {
   return (
      <motion.div
      initial={{width: 0}}
      animate={{width: "100vw"}}
      exit={{ x: window.innerWidth , transition: {duration: .5 }}}
      >
         <Container>
            <ContainerChild>
               <Logo>Akanji</Logo>
               <Link to="services">
                   <NavIcon>
                     <p>&gt;&gt;&gt;&gt;</p>
                 </NavIcon>
               </Link>
            </ContainerChild>
            <ContainerChild>
               <FlippedPortfolio>Portfolio</FlippedPortfolio>
               <div>
                  <Img src="https://cdn.pixabay.com/photo/2014/11/21/12/13/man-540500_960_720.jpg"/>
                  <h3>Hi , I'm Temitayo Adigun</h3>
               </div>
               <FlippedAbout>about</FlippedAbout>
            </ContainerChild>
            <ContainerChild>
               <span>Logo</span>
               <div>
                  <h3>interested in working together?</h3>
                  <Link to="/contact">Contact me</Link>
               </div>
               <div>Logos</div>
            </ContainerChild>
         </Container>
      </motion.div>
   )
}

export default Home;