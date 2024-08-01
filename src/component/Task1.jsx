import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Task1 = () => {
    const navigate =useNavigate();
    const [selected,setSelected]=useState(0);
    const [post]=useState([
        {
           id :1,
           img:"https://static.tcimg.net/vehicles/primary/0cb931225cd869d0/2024-Mercedes-Benz-E-Class-silver-full_color-driver_side_front_quarter.png?auto=format&h=360&w=720",
           title:"Mercedes_Benz E_class",
           text:"The all-new 2024 Mercedes-Benz E-Class is a solid step forward in presence, luxury, and technology, bringing it closer to the flagship S-Class. The Mercedes-Benz E-Class is a 5-seater vehicle that comes in 2 trim levels. The most popular style is the E 350 Sedan, which starts at $63,350 and comes with a 2.0L I4 Turbo engine and All Wheel Drive. This E-Class is estimated to deliver 24 MPG in the city and 33 MPG on the highway."
        },
        {
            id :2,
           img:"https://static.tcimg.net/vehicles/primary/e71190456f01e515/2025-MINI-Hardtop-gray-full_color-driver_side_front_quarter.png?auto=format&h=360&w=720",
           title:"Mini Hardtop",
          text:"An all-new model from top to bottom, the 2025 Mini Hardtop doesn't lose any of its charm while adding more modern features. It's a tasteful update to a classic coupe. The MINI Hardtop is a 4-seater vehicle that comes in 4 trim levels. The most popular style is the Cooper S 2-Door, which starts at $35,595 and comes with a 2.0L I4 Turbo engine and Front Wheel Drive."
        },
        {
            id :3,
           img:"https://static.tcimg.net/vehicles/primary/7e87ef687e9b199a/2024-Maserati-GranCabrio-black-full_color-driver_side_front_quarter.png?auto=format&h=360&w=720",
           title:"Maserati GranCabrio",
           text:"The 2024 Maserati GranCabrio is arguably one of the most beautiful cars on the road. With perfect Italian styling and an elegant, premium interior, it stands out among high-performance sports cars as something special. The Maserati GranCabrio is a 4-seater vehicle that comes in 1 trim levels. The most popular style is the Trofeo, which starts at $204,995 and comes with a 3.0L V6 Turbo engine and All Wheel Drive. This GranCabrio is estimated to deliver 17 MPG in the city and 26 MPG on the highway."
        },
        {
            id :4,
           img:"https://static.tcimg.net/vehicles/primary/e2560a6b3d932ace/2024-Lamborghini-Revuelto-gray-full_color-driver_side_front_quarter.png?auto=format&h=360&w=720",
           title:"Lamborghini Revuelto",
           text:"The Revuelto represents Lamborghini's first foray into electrification of a standard (not limited-edition) supercar. With massive horsepower, extreme performance, and bold styling, the Revuelto is a proper replacement for the outgoing Aventador. The Lamborghini Revuelto is a 2-seater vehicle that comes in 1 trim levels. The most popular style is the Coupe, which starts at $608,358 and comes with a Plug-In Hybrid 6.5L V12 engine and All Wheel Drive"
        }
    ])

    const posts = post.map((item,index)=>{
        return ( 
            <>
             <div key={item.id} className=' w-full font-bold mt-2 '>
               <button className='border-2 border-color1 p-2 rounded-2xl bg-color3 focus:bg-color1
                 focus:text-color4 focus:border-color4 ' onClick={()=>setSelected(index)}> Show Post {item.id}</button>           
              </div>
            </> 
        );
    })

    

    return(
        <div className=" m-auto  w-full mt-28">
            <div className="md:flex md:w-11/12 w-5/6 justify-center m-auto mt-3 py-4 bg-color2 rounded-md ">
         <div className='m-3'>
            <div className='bg-color2 md:flex md:w-1/2 m-auto mt-3'>
           {posts}
           </div>
            <div  className=' bg-color2 w-full md:w-3/4 m-auto font-serif mt-5'>
                   <div className='py-3'>
                     <img className='pl-7' src={post[selected].img}/>
                     <p className='text-2xl text-center py-3 font-bold'>{post[selected].title}</p>
                     <p className='text-lg'>{post[selected].text}</p>
                  <button onClick={()=>navigate(`/post/${post[selected].id}`)} className='bg-color3 hover:tracking-widest text-color1 px-7 py-2 text-bold
                       text-lg mt-5 rounded-xl  hover:bg-color1 hover:text-color4'>see more...</button>
               </div>
            </div>
             </div>
             </div>
            
        </div>
        
        
        
    )
    
}
 
export default Task1;