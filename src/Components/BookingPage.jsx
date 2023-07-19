import React, { useEffect } from 'react'
import style from "./BookingPage.module.css"
import axios from "axios"
import { useState } from 'react'

let reserved =[
    {
        number:1,
        reserved:true,      
    },
    {
        number:2,
        reserved:true,      
    },
    {
        number:3,
        reserved:false,      
    },
    {
        number:4,
        reserved:false,      
    },
    {
        number:5,
        reserved:false,      
    },
    {
        number:6,
        reserved:false,      
    },
    {
        number:7,
        reserved:false,      
    },
]

let Seats = [
    {
        number:1,
        reserved:true,      
    },
    {
        number:2,
        reserved:true,      
    },
    {
        number:3,
        reserved:false,      
    },
    {
        number:4,
        reserved:false,      
    },
    {
        number:5,
        reserved:false,      
    },
    {
        number:6,
        reserved:false,      
    },
    {
        number:7,
        reserved:false,      
    },
    {
        number:8,
        reserved:false,      
    },
    {
        number:9,
        reserved:false,      
    },
    {
        number:10,
        reserved:false,      
    },
    {
        number:11,
        reserved:false,      
    },
    {
        number:12,
        reserved:false,      
    },
    {
        number:13,
        reserved:false,      
    },
    {
        number:14,
        reserved:false,      
    },
    {
        number:15,
        reserved:false,      
    },
    {
        number:16,
        reserved:false,      
    },
    {
        number:17,
        reserved:false,      
    },
    {
        number:18,
        reserved:false,      
    },
    {
        number:19,
        reserved:false,      
    },
    {
        number:20,
        reserved:false,      
    },
    {
        number:21,
        reserved:false,      
    },
    {
        number:22,
        reserved:false,      
    },
    {
        number:23,
        reserved:false,      
    },
    {
        number:24,
        reserved:false,      
    },
    {
        number:25,
        reserved:false,      
    },
    {
        number:26,
        reserved:false,      
    },
    {
        number:27,
        reserved:false,      
    },
    {
        number:28,
        reserved:false,      
    },
    {
        number:29,
        reserved:false,      
    },
    {
        number:30,
        reserved:false,      
    },
    {
        number:1,
        reserved:false,      
    },
    {
        number:2,
        reserved:false,      
    },
    {
        number:3,
        reserved:false,      
    },
    {
        number:4,
        reserved:false,      
    },
    {
        number:5,
        reserved:false,      
    },
    {
        number:6,
        reserved:false,      
    },
    {
        number:7,
        reserved:false,      
    },
    {
        number:8,
        reserved:false,      
    },
    {
        number:9,
        reserved:false,      
    },
    {
        number:10,
        reserved:false,      
    },
    {
        number:11,
        reserved:false,      
    },
    {
        number:12,
        reserved:false,      
    },
    {
        number:13,
        reserved:false,      
    },
    {
        number:14,
        reserved:false,      
    },
    {
        number:15,
        reserved:false,      
    },
    {
        number:16,
        reserved:false,      
    },
    {
        number:17,
        reserved:false,      
    },
    {
        number:18,
        reserved:false,      
    },
    {
        number:19,
        reserved:false,      
    },
    {
        number:20,
        reserved:false,      
    },
    {
        number:21,
        reserved:false,      
    },
    {
        number:22,
        reserved:false,      
    },
    {
        number:23,
        reserved:false,      
    },
    {
        number:24,
        reserved:false,      
    },
    {
        number:25,
        reserved:false,      
    },
    {
        number:26,
        reserved:false,      
    },
    {
        number:27,
        reserved:false,      
    },
    {
        number:28,
        reserved:false,      
    },
    {
        number:29,
        reserved:false,      
    },
    {
        number:30,
        reserved:false,      
    },
    {
        number:1,
        reserved:false,      
    },
    {
        number:2,
        reserved:false,      
    },
    {
        number:3,
        reserved:false,      
    },
    {
        number:4,
        reserved:false,      
    },
    {
        number:5,
        reserved:false,      
    },
    {
        number:6,
        reserved:false,      
    },
    {
        number:7,
        reserved:false,      
    },
    {
        number:8,
        reserved:false,      
    },
    {
        number:9,
        reserved:false,      
    },
    {
        number:10,
        reserved:false,      
    },
    {
        number:11,
        reserved:false,      
    },
    {
        number:12,
        reserved:false,      
    },
    {
        number:13,
        reserved:false,      
    },
    {
        number:14,
        reserved:false,      
    },
    {
        number:15,
        reserved:false,      
    },
    {
        number:16,
        reserved:false,      
    },
    {
        number:17,
        reserved:false,      
    },
    {
        number:18,
        reserved:false,      
    },
    {
        number:19,
        reserved:false,      
    },
    {
        number:20,
        reserved:false,      
    },
   
]




const BookingPage = () => {
     const [data ,setData] = useState([])
     const [reserved ,setReserved] =useState([])
     const [num , setNum]  = useState(0)



    useEffect(()=>{
        
            // fetch("https://ticket-booker-backend-oy5k.vercel.app/seats")
            getAllSeats()
        
    },[])
    
     

    const clearSeats = ()=>{
        axios.delete('https://ticket-booker-backend-oy5k.vercel.app/deleteseats')
        .then(function (response) {
          // handle success
          console.log(response.data);
          setData([])
          setReserved([])
          getAllSeats();
        })
    }


    const getAllSeats=()=>{
        axios.get('https://ticket-booker-backend-oy5k.vercel.app/all-seats')
        .then(function (response) {
          // handle success
        //   console.log(response.data);
          setData(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      
    }
    // 'https://ticket-booker-backend-oy5k.vercel.app/seats'
    const ReserveSeats = () =>{
        if(num > 0 && num <=7){
            console.log("hii",num)
            axios.post('https://ticket-booker-backend-oy5k.vercel.app/seats',{
                numSeats : +num
            })
            .then(function (response) {
              // handle success
              console.log(response.data.reservedSeats);
              let a= response.data.reservedSeats
              setReserved(a)
              getAllSeats()
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })

            // axios.post("https://ticket-booker-backend-oy5k.vercel.app/seats", {
            //     "numSeats":5
            // })
            // .then(response => {
            //   console.log('Response:', response.data);
            //   // Handle the response data here.
            // })
            // .catch(error => {
            //   console.error('Error:', error);
            //   // Handle any errors that occurred during the request.
            // });


        }else{
            alert("You can Book only 7 seats at a time ")
        }

       
        }



  return (
    <div className={style.container}  >
       <div>
         <div className={style.availableseats} >
          {
            data.map((detail)=><div style={{backgroundColor: detail.booked? " rgba(233, 141, 104, 0.912)":"none"}} className={style.seat} ><p>{detail.number}</p> </div>)
          }
         </div>
       </div>
       <div>
        <div className={style.bookingform} >
        <h1>Reserve Tickets</h1>
         <div className={style.reservedseats}  >
         {
            reserved.map((detail)=><div style={{backgroundColor: detail.booked? " rgba(233, 141, 104, 0.912)":"none"}} className={style.seat} >{detail.number}</div>)
          }
         </div>

        <input onChange={(e)=>setNum(e.target.value)} className={style.input} placeholder=''  /> 
        <button onClick={(e)=>{
            e.preventDefault()
            ReserveSeats()
        }} className={style.btn}   >Reaserve Seats</button>
        <button  onClick={(e)=>{
           e.preventDefault()
           clearSeats();
        }} className={style.btn2} >Reset All Seats</button>

        </div> 
       </div>
    </div>
  )
}

export default BookingPage
