import React from 'react'
import p1 from '../assets/images/p1.jpg'

const CategoryCard = ({title, nb, img, index = 0, icon}) => {
  return (
    <div className="col-md-3  category_grid">
        <div className={`view view${index} view-tenth`}>
            <div className="category_text_box flex flex-col items-center" >
                
                <div className='w-full text-white flex items-center justify-center' style={{fontSize: 50, marginTop: '1em'}}>
                    {icon}
                </div> 

                <h3> {title}</h3>
                <p>({nb} postes ouvert)</p>
            </div>
            <div className="mask">
                <a href="#">
                    <img src={img} className="img-fluid" alt=""/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard
