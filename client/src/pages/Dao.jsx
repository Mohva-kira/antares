import React from 'react'
import Container from '../components/Container'
import Breadcumb from '../components/Breadcumb'
import { useGetDaoQuery } from '../redux/dao';
import job2 from "../assets/images/job-2.png";
import DaoCard from '../components/DaoCard';
import { useGetPartenaireQuery } from '../redux/partenaire';

const Dao = () => {

    const { data, isLoading, isError } = useGetDaoQuery();
      const {data: partenaireData, isLoading: partenaireIsLoading} = useGetPartenaireQuery();
    
        console.log('data', data);
  return (
    <Container >
        <Breadcumb title={'Appel d\'offre'} />
        <section class="banner-bottom-wthree pb-lg-5 pb-md-4 pb-3">
        <div class="container">
          <div class="inner-sec-w3ls py-lg-5  py-3">
            <h3 class="tittle text-center mb-lg-4 mb-3">
              <span> Appel d'offres</span>Tous les appels d'offres
            </h3>

            <div class="tabs mt-5">
              <div className="flex space-x-2 bg-white w-fit rounded-lg   p-2">
                <h2 className="px-2">Categories : </h2>
                <a
                  className="px-2 hover:bg-orange-500 hover:text-white rounded-lg"
                  href="">
                  {" "}
                  Manager{" "}
                </a>
                <a
                  className="px-2 hover:bg-orange-500 hover:text-white rounded-lg"
                  href="">
                  {" "}
                  Comptabilité{" "}
                </a>
                <a
                  className="px-2 hover:bg-orange-500 hover:text-white rounded-lg"
                  href="">
                  {" "}
                  Informatiuqe{" "}
                </a>
                <a
                  className="px-2 hover:bg-orange-500 hover:text-white rounded-lg"
                  href="">
                  {" "}
                  Sécretariat{" "}
                </a>
              </div>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab">
                  <div class="menu-grids mt-4">
                    <div class="row t-in">
                      <div class="col-lg-8 text-info-sec">
                        {data?.data?.map((item) => (
                          <DaoCard item={item} />
                        ))}
                      </div>
                      <div class="col-lg-4 text-info-sec">
                      {partenaireData?.data?.map(item =>  (
                          <img src={'https://api.antares-rh.net' + item?.attributes?.image?.data?.attributes?.url} alt=" " className="img-fluid h-44 object-cover mb-2 shadow-md" />
                        ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Dao
