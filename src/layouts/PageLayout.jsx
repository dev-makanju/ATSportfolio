import Header from '../components/navbar/Header'

const PageLayout = (props) => {
   return (
      <div>
         <Header />
         <div>{props.children}</div>
      </div>
   )
}

export default PageLayout;