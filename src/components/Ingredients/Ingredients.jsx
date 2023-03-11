import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Ingredients() {
    const [ingridents, setIngridents] = useState([]);

       async function ingredApi() {
            let{data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
            setIngridents(data.meals)
        }
        useEffect(() => {
            ingredApi()
        }, []);

  return <>
  {ingridents?
  <div className='container p-5'>
    <div className='row g-3 ms-4'>
        {ingridents.map((meal,idx)=>meal.strDescription != null && meal.strDescription != ""?
          <div key={idx} className='col-md-6 col-lg-3'>
            <Link to={`/item3/${meal.strIngredient}`}><div className='item-content text-center p-4 rounded-3 h-100'>
            <i className="fa-solid fa-bowl-food text-success fa-2x"></i>
            <h4>{meal.strIngredient}</h4>
            <p>{meal.strDescription?.split(' ').splice(0,20).join(" ")}</p>
            </div>
            </Link>
          </div>:""
        
        )}
        
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
