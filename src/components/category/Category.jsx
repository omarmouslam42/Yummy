import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Category() {
    const [category, setCategory] = useState([]);
   async function ApiCategory() {
        let{data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        // console.log(data.categories);
        setCategory(data.categories);
    }

    useEffect(() => {
        ApiCategory();
    }, []);


  return <>
  {category? 
  <div className='container p-5'>
  <div className='row ms-4 g-3'>
      {category?.map((categ,idx)=> <div key={idx} className="col-md-4 col-lg-3 ">
    <Link to={`/item1/${categ.strCategory}`}>
    <div className="homeMeal position-relative rounded-2">
      <img src={categ.strCategoryThumb} className="w-100" alt="meal"/>
      <div className="mealLayer position-absolute d-flex align-items-center">
        <h2 className="ms-2 fw-light text-black">{categ.strCategory}</h2>
      </div>
   </div>
    </Link>
   
    </div>)}
    
  </div>
  </div>
  :
    <div className=' vh-100 d-flex justify-content-center align-items-center'>
     <div className="sk-flow ">
     <div className="sk-flow-dot bg-danger"></div>
     <div className="sk-flow-dot bg-danger"></div>
     <div className="sk-flow-dot bg-danger"></div>
</div>
    </div>
  }
  
  
  </>
}
