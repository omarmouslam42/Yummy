import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
// import $ from "jquery"
export default function Main() {

    // let navWidth = $('.navbar').innerWidth();
    // // let sideNavWidth=$('.sideNav').innerWidth();
    // $(".navbar").css("left",`-200px`);
    // function navbar() {
    //     $(".show").click(function(){
    //         if($(".navbar").css("left")=="0px"){
    //            $(".navbar").animate({left:-navWidth},500,function(){
    //         //    $(".close").css("display","none");
    //         //    $(".hide").css("display","unset");
    //            })
    //         //    $(".nav-content").slideUp(150)
    //         }
    //         else{
    //             $(".navbar").animate({left:0},500,function(){
    //                 $(".close").css("display","unset");
    //                 $(".hide").css("display","none");
    //             })
    //             // $(".nav-content").slideDown(150)
    //         }
    //     })
    // }
    useEffect(() => {
        
    }, []);
   
  return <>
<div className='navbar vh-100  me-auto fixed-top '>

   <div className='sideNav me-4 position-absolute start-0 vh-100 d-flex flex-column justify-content-between align-items-center'>
        <img className="w-50 mt-2" src="logo.png" alt="logo"/>
      <div className="close&ShowIcon">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

     </div>
      <div className=" d-flex justify-content-around mb-3">
        <i className="fa-solid fa-globe me-2"></i>
        <i className="fa-solid fa-share-nodes"></i>
      </div>
   </div>

  <div className='d-flex flex-column text-white offcanvas offcanvas-start text-bg-dark' tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
       <button type="button" className="btn-close btn-close-white p-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      <div className='nav-content pt-4'>
        <Link to="/home"><h6 className=' p-2 rounded-4 text-center fst-italic'>Home</h6></Link>
        <Link to={`/search`} ><h6 className=' p-2 rounded-4 text-center fst-italic'>Search</h6></Link>
        <Link to="/category"><h6 className=' p-2 rounded-4 text-center fst-italic m-3'>Category</h6></Link>
        <Link to="/area"><h6 className=' p-2 rounded-4 text-center fst-italic m-3'>Area</h6></Link>
        <Link to={"/ingredients"} ><h6 className=' p-2 rounded-4 text-center fst-italic m-3'>Ingredients</h6></Link>
        <Link to={'/contact'}><h6 className=' p-2 rounded-4 text-center fst-italic m-3'>Contact US</h6></Link>
      </div>
   
       <div className='nav-footer mt-auto ps-2 d-flex justify-content-around mb-2'>
         <i className="fa-brands fa-facebook-f"></i>
         <i className="fa-brands fa-twitter"></i>
         <i className="fa-solid fa-globe"></i>
       <div>   

   </div>
  </div>
  <p className='ps-2 fw-lighter'>Copyright Â© 2019 All Rights Reserved.</p>

  <div className='sideNav position-absolute start-100 vh-100 w-25 ms-auto d-flex flex-column justify-content-between align-items-center'>
    <img className="w-50 mt-2" src="logo.png" alt="logo"/>
   <div className="close&ShowIcon">

     <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
     <i className="fa-solid fa-xmark text-dark "></i>
     </button>

     </div>
       <div className=" d-flex justify-content-around mb-3 text-dark">
        <i className="fa-solid fa-globe me-2"></i>
        <i className="fa-solid fa-share-nodes"></i>
       </div>
  </div>

   </div>  
  
</div>

  <Outlet/>
  </>
}
