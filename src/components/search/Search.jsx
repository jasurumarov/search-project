import React, { useState } from 'react'
import { useGetSearchProductsQuery  } from '../../context/api/productsApi'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState("") 
    let { data } = useGetSearchProductsQuery({q: value})
    let searchItems = data?.products?.map(el => (
        <li onClick={() => navigate(`/product/${el.id}`)} key={el.id}><img src={el.images[0]} alt="" /> <p>{el.title}</p></li>
    ))
  return (
    <section className='search-section'>
        <div className="container">
            <div className="search-section__content">
                <h1>Google</h1>
                <form>
                    <input className={`${value ? "active" : ""}`} value={value} onChange={e => setValue(e.target.value)} type="text" placeholder='Search...'/>
                    {value 
                    ? <ul className={`search__value`}>
                        {searchItems}
                    </ul>
                    : <></>}
                </form>
            </div>
        </div>
    </section>
  )
}

export default Search