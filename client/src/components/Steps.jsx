import React from 'react'
// import g7 from "../assets/images/c1.png"
// import g1 from "../assets/images/c2.png"
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
                            <p>Le candidat crée un compte en renseignant ses informations personnelles (nom, email, mot de passe), vérifie son identité par email ou SMS, puis complète son profil avec son CV, ses diplômes, ses expériences et ses compétences. </p>
                        </div>
                    </div>
                    <div class="col-lg-6 work-grid-left ">
                        <img src={'g1'} alt="" class="object-cover h-[430px]"/>
                    </div>
                </div>
                <div class="row my-5">

                    <div class="col-lg-6 work-grid-left">
                        <img src={'g7'} alt="" class="object-cover h-[380px]"/>
                    </div>
                    <div class="col-lg-6 work-grid-right">
                        <div class="work-info">
                            <h5>
                                <span class="post-color">Etape : 2</span>
                            </h5>
                            <h4 class="post my-3">Spécifier & chercher un poste</h4>
                            <p>Le candidat explore les offres d’emploi via des filtres (poste, lieu, contrat…), consulte les détails d’une offre, puis postule en quelques clics en joignant son CV et, si nécessaire, une lettre de motivation.</p>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Steps
