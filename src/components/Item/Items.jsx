// inner category area ingredients
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Items() {
  const [meals, setMeals] = useState([]);
  let{strcateg,strarea,stringredients}= useParams();
  


   async function InnerCategApi() {
      let {data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strcateg}`)
    setMeals(data.meals);
    // console.log(data.meals);
    // console.log(strcateg);
    }


 async function InnerAreaApi() {
      let{data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${strarea}`)
      setMeals(data.meals);
      // console.log(data.meals);
      // console.log(strarea);
    }

    async function InnerIngredientsApi() {
      let{data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${stringredients}`)
      setMeals(data.meals);
      // console.log(data.meals);
      // console.log(strarea);
    }
   

  useEffect(() => {
    if (strcateg ==null &&stringredients==null && strarea !=null) {
      InnerAreaApi()
    }
    else if(strcateg !=null &&stringredients==null && strarea ==null){
      InnerCategApi()
    }
    else {
      InnerIngredientsApi();
    }
  }, []);

  return <>
  {meals?
    <div className='container p-5'>
    <div className='row g-3 ms-4'>
    {meals?.map((meal,idx)=>
     <div key={idx} className="col-md-4 col-lg-3 ">
      <Link to={`/details/${meal.idMeal}`}>
      <div className="homeMeal position-relative rounded-2">
        <img src={meal.strMealThumb} className="w-100" alt="meal"/>
        <div className="mealLayer position-absolute d-flex align-items-center">
          <h2 className="ms-2 fw-light text-black">{meal.strMeal}</h2>
        </div>
     </div>
      </Link>
     
     </div>
    ) }
     
    </div>

    </div>
:
    <div className='vh-100 d-flex justify-content-center align-items-center'>
     <div className="sk-flow ">
     <div className="sk-flow-dot bg-danger"></div>
     <div className="sk-flow-dot bg-danger"></div>
     <div className="sk-flow-dot bg-danger"></div>
</div>
    </div>
}
  
  
  </>
}
