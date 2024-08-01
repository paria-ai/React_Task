import { useEffect, useState } from 'react';
import logo from "../assets/Spin.svg";
const Task2 = () => {
    const [showImg,setShowImg]=useState(true);
    const [post,setPost]=useState([
        {
           id :1,
           img:"https://static.tcimg.net/vehicles/primary/0cb931225cd869d0/2024-Mercedes-Benz-E-Class-silver-full_color-driver_side_front_quarter.png?auto=format&h=360&w=720",
           title:"Mercedes_Benz E_class",
           price:"$63,350",
           price1:"$60,298"
        },
        {
            id :2,
           img:"https://static.tcimg.net/vehicles/primary/e71190456f01e515/2025-MINI-Hardtop-gray-full_color-driver_side_front_quarter.png?auto=format&h=360&w=720",
           title:"Mini Hardtop",
          price:"$29,945",
           price1:"$29,686"
        },
        {
            id :3,
           img:"https://static.tcimg.net/vehicles/primary/7e87ef687e9b199a/2024-Maserati-GranCabrio-black-full_color-driver_side_front_quarter.png?auto=format&h=360&w=720",
           title:"Maserati GranCabrio",
           price:"$204,995",
           price1:"$202,708"
        },
        {
            id :4,
           img:"https://static.tcimg.net/vehicles/primary/e2560a6b3d932ace/2024-Lamborghini-Revuelto-gray-full_color-driver_side_front_quarter.png?auto=format&h=360&w=720",
           title:"Lamborghini Revuelto",
          price:"$608,358",
           price1:"$621,489"
        }
    ])
    useEffect(()=>{
        setTimeout(() => {
            setShowImg(false)
            setPost(post);
        },3000);
    })
    const posts = post.map(item=>{
        return ( 
            <>
            <div key={item.id} className="bg-color1 md:mx-3  md:w-1/2 w-3/4 m-auto pr-10 my-3 border-2 border-color2 rounded-md text-color1 hover:bg-color2">
            <img className='pl-7' src={item.img}/>
                <p className="flex p-2 font-serif text-lg font-bold text-color4">{item.title}</p>
                <p className="flex p-2  text-md font-bold text-color4">Starting MSRP :{item.price}</p>
                <p className="flex p-2  text-md font-bold text-color4">Starting Mkt Avg :{item.price1}</p>
            </div>
            </>
         );
    })
    return(
        <div className="flex m-auto  w-full mt-28">
            {
                showImg ?(
                    <img className=' m-auto' src={logo}/>
                ):(
<div className="md:flex md:w-11/12 w-5/6 justify-center m-auto mt-3 py-4 bg-color3 rounded-md">
                {posts}
            </div>
                )
            }
            
        </div>
    )
}
 
export default Task2;