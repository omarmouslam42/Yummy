import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Search() {

    const [meals, setMeals] = useState([]);

  async  function getByName(e) {
        let name=e.target.value
        let{data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        // console.log(data.meals);
        setMeals(data.meals)
    }

    async  function getByLetter(e) {
        let letter =e.target.value
        let{data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        // console.log(data.meals);
        setMeals(data.meals)
    }


  return<>
  
  <div className='container p-5'>
    <form className='row ms-4 g-3'>

        <div className='col-md-6 '>
            <div>
            <input onChange={getByName} type="text" className="form-control bg-transparent text-white" placeholder="Search By Name"/>
            </div>
        </div>

        <div className='col-md-6 '>
            <div>
            <input onChange={getByLetter} type="text" maxLength={1} className="form-control bg-transparent text-white" placeholder="Search By Letter"/>
            </div>
        </div>
    </form>

  {meals?
    <div className='search-content mt-4'>
        <div className='row ms-4 g-3 mt-3'>
            {meals?.map((meal,idx)=> <div key={idx} className="col-md-4 col-lg-3 ">
        <Link to={`/details/${meal.idMeal}`}>
      <div className="homeMeal position-relative rounded-2">
        <img src={meal.strMealThumb} className="w-100" alt="meal"/>
        <div className="mealLayer position-absolute d-flex align-items-center">
          <h2 className="ms-2 fw-light text-black">{meal.strMeal}</h2>
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

   
  </div>
  
  </>
}
