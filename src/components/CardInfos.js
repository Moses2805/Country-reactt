import React from 'react'
import { Link, useParams } from "react-router-dom"


const CardInfos = (props) => {

  // Getting id of clicked card from URL
  const params = useParams();
  const id = params.id;
  console.log(id)


  // Filtering clicked card from fetching data
  let selectedCountry = props.cards.filter((c) => c.ccn3 === id)

  // Getting some values of data
  let values = Object.values(selectedCountry[0].languages)
  let currenciesName = Object.values(selectedCountry[0].currencies)

  return (
    <div>
      <div className='container mt-5 pb-5'>
        <div className='row d-flex justify-content-start'>
          <div className='col-3'>
            <Link to="/">
            <button type="button" class="btn btn-dark mb-5">Back</button>
            </Link>
          </div>

        </div>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-12 col-md-6 mb-3'>
            <div className='img-box'>
              {


                <img src={selectedCountry[0].flags.png} />


              }
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='important-infos'>
              {
                <h3 className={props.darkMode && "light-mode-select"}>{selectedCountry[0].name.official}</h3>
              }
            </div>
            <div className='row d-flex justify-content-center'>
              <div className='col-6'>
                {
                  <p className={props.darkMode && "light-mode-select"}>Population: <span>{selectedCountry[0].population}</span></p>

                }
                {
                  <p className={props.darkMode && "light-mode-select"}>Region: <span>{selectedCountry[0].region}</span></p>

                }
                {
                  <p className={props.darkMode && "light-mode-select"}>Sub Region: <span>{selectedCountry[0].subregion}</span></p>

                }
                {
                  <p className={props.darkMode && "light-mode-select"}>Capital: <span>{selectedCountry[0].capital}</span></p>

                }

              </div>

              <div className='col-6'>
                {
                  <p className={props.darkMode && "light-mode-select"}>Top Level: <span>{selectedCountry[0].tld[0]}</span></p>

                }
                {
                  <p className={props.darkMode && "light-mode-select"}>Languages: <span>{values + " "}</span></p>
                }

                {
                  <p className={props.darkMode && "light-mode-select"}>Currencies: <span>{currenciesName[0].name}</span></p>
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardInfos