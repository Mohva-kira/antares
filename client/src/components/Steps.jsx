import React from 'react'
import g7 from "../assets/images/g7.jpg"
import g1 from "../assets/images/g1.jpg"
const Steps = () => {
  return (
    <>
          <div class="row choose-main mt-5">
                    <div class="col-lg-6 work-grid-right">
                        <div class="work-info">
                            <h5>
                                <span class="post-color">Etape : 1</span>
                            </h5>
                            <h4 class="post my-3">Inscription</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut consectetur adipisicing elit sedc labore et dolore magna aliqua uta enim ad minim.. </p>
                        </div>
                    </div>
                    <div class="col-lg-6 work-grid-left">
                        <img src={g1} alt="" class="img-fluid"/>
                    </div>
                </div>
                <div class="row my-5">

                    <div class="col-lg-6 work-grid-left">
                        <img src={g7} alt="" class="img-fluid"/>
                    </div>
                    <div class="col-lg-6 work-grid-right">
                        <div class="work-info">
                            <h5>
                                <span class="post-color">Etape : 2</span>
                            </h5>
                            <h4 class="post my-3">Spécifier & chercher un poste</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut consectetur adipisicing elit sedc labore et dolore magna aliqua uta enim ad minim.. </p>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Steps
