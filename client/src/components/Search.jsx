import React from 'react'

const Search = () => {
  return (
    <div className="banner-info-w3layouts text-center z-50">
        
        <h3>
            <span>Trouver un emploi</span>.
            <span>ici maintenant.</span>
        </h3>
        <p>Le poste que vous cherchez se trouve ici.</p>

        <form action="#" method="post" className="ban-form row">
            <div className="col-md-3 banf">
                <input className="form-control" type="text" name="name" placeholder="Comptable, informatique, etc" required=""/>
            </div>
            <div className="col-md-3 banf">
                <select className="form-control" id="country12">
                    <option>Bamako</option>
                    <option>Kayes</option>
                    <option>Sikasso</option>
                    <option>Segou</option>
                    <option>Koulikoro</option>
                    <option>Mopti</option>
                    <option>Tombouctou</option>
                    <option>Gao</option>
                </select>
            </div>
            <div className="col-md-3 banf">
                <select id="country13" className="form-control">
                    <option>Finances</option>
                    <option>Banque</option>
                    <option> Ingénieur </option>
                    <option> comptabilité</option>
                    <option>Design interieur</option>
                    <option>Import Export</option>
                </select>

            </div>
            <div className="col-md-3 banf">
                <button className="btn1" type="submit">
                    <i className="fas fa-search"></i>
                    Rechercher
                </button>
            </div>
        </form>
    </div>
   
  )
}

export default Search
