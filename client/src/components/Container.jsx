import React from 'react'
import Headers from './Headers'
import img1 from "../assets/images/1.jpg"
import Footer from './Footer'
import Breadcumb from './Breadcumb'

const Container = ({children}) => {
  return (
    <div id="demo-1" data-zs-src={`["${img1}", "${img1}","${img1}", "${img1}"]`} data-zs-overlay="dots">
        <div class="demo-inner-content">
          <Headers />

          
       
            <div className='w-full'>
              {children}
            </div>
           <Footer />
        </div>
    </div>
  )
}

export default Container
