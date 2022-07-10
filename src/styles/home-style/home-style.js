import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   background: #0E0E23;
   height: 100vh;
   width: 100vw;
`

export const ContainerChild = styled.div`
   display:  flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
`

export const FlippedAbout = styled.h2`
   color: #fff;
   transform: rotate(90deg);
   font-family: 'raleways' , sans-serif;
   padding: 0;
`

export const NavIcon = styled.span `
   color: #e74e3c;
   font-size: 18px;
   cursor: grab;
` 

export const Logo = styled.h2`
   color: #fff;
   text-transform: uppercase;
   font-size: 18px;
   letter-spacing: 1px;
`

export const FlippedPortfolio = styled.h2`
   color: #fff;
   transform: rotate(270deg);
   margin: 0px;
   padding: 0px;
   font-family: 'raleways' , sans-serif;
`

export const Img = styled.img`
   border: 2px solid #fff;
   border-radius: 17px 0px 17px 0px;
   height: 250px;
   object-fit: cover;
   width: 250px;

   @media (max-width: 450px ) {
      max-width: 180px;
   }
`