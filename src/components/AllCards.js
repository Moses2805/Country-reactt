import React from 'react';
import Card from './Card';
import { FcSearch } from 'react-icons/fc'
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';






const AllCards = ({darkMode, cards, setCards, gettingData}) => {


  // About pagination


const [itemOffset, setItemOffset] = useState(0);
const [currentItems, setCurrentItems] = useState([])
const [pageCount, setPageCount] = useState(0);
const itemsPerPage = 8

useEffect(() => {
  const endOffset = itemOffset + itemsPerPage;
  setCurrentItems(cards.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(cards.length / itemsPerPage));
}, [itemOffset, itemsPerPage, cards])


const handlePageClick = (event) => {
  const newOffset = (event.selected * itemsPerPage) % cards.length;
  setItemOffset(newOffset);
};




   
  // We should check searching area. If people don't enter some words for country, we just should return fetch all data, but if people write some words or letters, so we need to return data with that value 
  const searching = (e) => {
    if(e.target.value === ""){ 
      gettingData()
    }else{
      setItemOffset(0)
      fetch(`https://restcountries.com/v3.1/name/${e.target.value}`).then(res => res.json()).then((data) => { setCards(data); })} 
    
  }

  // Filtering is similar like searching. If people select any region, we should return data with this value.

  const filtering = (e) => {
    if(e.target.value === ""){ 
      gettingData()
    }else{
      setItemOffset(0)

      fetch(`https://restcountries.com/v3.1/region/${e.target.value}`).then(res => res.json()).then((data) => { setCards(data); })} 
    
  }

  return (
    <div>

        
      <div className='container mt-3 mb-4'>
        <div className='row d-flex justify-content-between'>
          <div className='col-6 col-md-4 col-lg-3'>
            <form className={darkMode ? "dark-mode-cards d-flex justify-content-evenly align-items-center" : "d-flex justify-content-evenly align-items-center"}>
              <FcSearch />
              <input className={darkMode && "dark-mode-cards light-mode-words"} type="text" id="fname" placeholder="Search for a country..."
               onChange={(e) => searching(e)}/>
               </form>
          </div>
          <div className='col-5 col-md-3 col-lg-3'>
            <select className={darkMode && "dark-mode-cards light-mode-select"} onChange={(e) => 
              filtering(e)
            }>
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>

            </select>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row d-flex justify-content-between'>
          {


            currentItems.map((c, index) => (

              <Card key={c.ccn3} id={c.ccn3} img={c.flags.png} title={c.name.official} people={c.population} region={c.region} capital={c.capital} darkMode={darkMode} />

            ))

          }


        </div>
      </div>

      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-lg-8 col-md-10 col-12 col-sm-12 mt-3 mb-3'>
            {/* For pagination */}
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName='page-num'
            previousLinkClassName='page-num'
            nextLinkClassName='page-num'
            activeClassName='active'
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCards