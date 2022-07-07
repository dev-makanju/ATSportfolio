import React from "react";

const Layouts = (props) => {
   return (
      <div className={props.classes}>
         {/* header */}
         <div>{props.children}</div>
      </div>
   )
}

export default Layouts