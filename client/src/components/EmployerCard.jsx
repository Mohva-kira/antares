import React from 'react'
import team4 from '../assets/images/team4.jpg'

import { useNavigate } from 'react-router-dom';
const EmployerCard = ({item1, item2}) => {

    const navigate = useNavigate()
  return (
    <div class="flex w-[80%] justify-center items-center ">
        <div class="w-full testi-main relative m-2 ">
        <div className='bg-white w-[90%] absolute h-[80%]  rounded-2xl -z-50  m-2'></div>

        <a href={`/employeurs/${item1.name}`}>
            <div class="testi-grids row cursor-pointer  " >
                

                <div class="col-md-9 col-sm-9 col-xs-9 clients-info-text">
                    <h6>{item1.name}</h6>
                    <p>{item1.description}</p>
                    
                </div>
                <div class="col-md-3 col-sm-3 col-xs-3 img-testi">
                    <img class="img-fluid" src={team4} alt=""/>
                </div>

            </div>
            </a>
        </div>
        <div class="w-full testi-main relative">
        <div className='bg-white w-[90%] absolute h-[80%] rounded-2xl  -z-50  m-2'></div>
        <a href={`/employeurs/${item2.name}`}>
            <div class="testi-grids t2 row cursor-pointer">
                <div class="col-md-3 col-sm-3 col-xs-3 img-testi">
                 <img class="img-fluid" src={team4} alt=""/>
                </div>
                <div class="col-md-9 col-sm-9 col-xs-9 clients-info-text">
                      <h6>{item2.name}</h6>
                    <p>{item2.description}</p>
                    
                    
                </div>


            </div>
            </a>
        </div>
       
    </div>
  )
}

export default EmployerCard
