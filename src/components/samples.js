import React, { useState } from 'react'
import { useEffect } from 'react'

const Dashboard = ()=>{
   let[detail,setDetail] = useState([])

   useEffect(function(){
    fetch('https://dummyjson.com/products/category/home-decoration').then(response => Response.json()).then(function(){
        console.log(data)
        setDetail(data)
    })
   })
    
    return(
        <>
       <div className='container'>
        
       </div>
        </>
    )
}

export default Dashboard;