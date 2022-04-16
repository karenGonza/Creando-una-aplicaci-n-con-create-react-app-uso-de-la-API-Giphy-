import React from 'react';
import Banner from './Banner';
import Encabezado from './Encabezado';
function Web(){
  return (
    <div className="container">
     <Encabezado/>
     <Banner/>
     <Producto/>
     <Footer/>
    </div>
  )

}
export default Web;