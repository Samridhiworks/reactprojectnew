import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './Navbar'

const Dashboard = ()=>{
   let[detail,setDetail] = useState([])

   useEffect(function(){
    fetch('https://dummyjson.com/products/category/home-decoration').then(response => response.json()).then(function(data){
        console.log(data);
        setDetail(data.products);
    })
   },[])
    
    return(
        <>
       
       <div className='container-new'>
        {detail.map((item)=>(
            <div  key={item.id}className='all-content' >
                <img src={item.images[0]} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span>${item.price}</span>
                </div>
        ))}
       </div>
        </>
    )
}

export default Dashboard;