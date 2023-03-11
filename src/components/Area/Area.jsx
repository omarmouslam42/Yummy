import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Area() {
    const [area, setArea] = useState([]);

   async function AreaApi() {
        let{data}=await axios(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        // console.log(data.meals);
        setArea(data.meals)
    }

    useEffect(() => {
        AreaApi();
    }, []);

  return <>
  

  {area? 
   <div className='container p-5'>
   <div className='row g-3 ms-4'>
       {area?.map((meal,idx)=><div key={idx} className='col-md-4 col-lg-3 '>
         <Link to={`/item2/${meal.strArea}`}>
           <div className=" item-content text-center p-4 rounded-3">
           <i className="fa-solid fa-city text-danger fa-3x"></i>
           <h4 className='mt-1'>{meal.strArea}</h4>
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
