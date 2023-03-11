import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function Details() {

    const [meals, setMeals] = useState([]);
    let {id}= useParams();
    // console.log(id);

   async function ApiDetalis() {
        let {data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        // console.log(data.meals);
        setMeals(data.meals[0]);
    }

    const [resipes, setResipes] = useState([]);
    let res=[];

    (function Resipes() {
        for (let i = 0; i<6; i++) {
            // setResipes(meals[`strIngredient${i}`])
            res[i]=meals[`strIngredient${i+1}`]
            
        }
    })()
    
    useEffect(() => {
        ApiDetalis();
    }, []);
    
   

  return <>
  {meals? 
  <div className='container p-5 text-white mt-5'>
    <div className='row p-4 ms-4'>
    
      <div className='col-md-3 text-center'>
        <img src={meals.strMealThumb} className='w-100'  alt="meals" />
        <h3>{meals.strMeal}</h3>
      </div>

      <div className='col-md-9'>
        <div>
            <h4>Instructions :</h4>
            <p>{meals.strInstructions}</p>
            <h6>Area : <span className='fs-6 fw-light'>{meals.strArea}.</span></h6>
            
            <div className='d-flex my-4'>
              <h6>Recipes :</h6>
            
             {res?.map((rest,idx)=> <span key={idx} className='p-1 bg-success rounded-3 ms-2'>{rest}</span>)} 

            </div>

            <div className='d-flex my-4'>
                {meals.strTags?<h6>Tags :</h6> :""}
              
                {meals.strTags?.split(',').map((tag,idx)=><span key={idx} className='p-1 bg-danger rounded-3 ms-2'>{tag}</span>)}
              
            </div>
            <a href={meals.strSource}><button className='btn btn-outline-success mt-3'>Source</button></a>
            <a href={meals.strYoutube}><button className='btn btn-outline-danger ms-3 mt-3'>Youtube</button></a>
            

        </div>
      </div>

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
