import { useState } from "react";
import img1 from "../assets/img/Ford-Mustang.png";
import img2 from "../assets/img/BMW-5_Seriesr.png";
import img3 from "../assets/img/FIAT-500e.png";
import img4 from "../assets/img/Toyota-Priusavif.png";

const Task3 = () => {
    const post =["FORD","BMW","FIAT","TOYOTA"];
    const [show ,setShow]=useState('');
    return (  <>
    <div className=" m-auto  w-full mt-28">
        <div className="md:flex md:w-2/3 w-5/6 justify-center m-auto mt-3 py-4 bg-color3 rounded-md grid grid-cols-2">
                {post.map(item=>(
                    <>
                    <div className="w-full text-center md:w-1/2 font-bold font-mono text-lg">
                    <button className="px-10 py-3 border-2 border-color1 mx-5 mt-3 rounded-xl focus:bg-color1 focus:text-color4" 
                    key={item} onClick={()=>setShow(item)}>
                        {item.toLocaleUpperCase()}
                    </button>
                    </div>
                    </>
                ))}
           
        </div>
        <div className='bg-color1 md:flex md:w-1/2 m-auto mt-3'>
        <div>
                {show === "FORD" && 
                <div className="w-full m-auto mt-8">
                     <p className="text-4xl font-serif font-bold text-center text-color4">Ford Mustang</p>
                    <img className="mt-6" src={img1}/>
                    </div>}
                    {show === "BMW" && <div className="w-full m-auto mt-8">
                    <p className="text-4xl font-serif font-bold text-center text-color4">BMW 5 Series</p>
                    <img className="mt-6" src={img2}/>
                    </div>}
                    {show === "FIAT" && <div className="w-full m-auto mt-8">
                    <p className="text-4xl font-serif font-bold text-center text-color4">FIAT 500e</p>
                    <img className="mt-6" src={img3}/>
                    </div>}
                    {show === "TOYOTA" && <div className="w-full m-auto mt-8">
                    <p className="text-4xl font-serif font-bold text-center text-color4">Toyota Prius</p>
                    <img className="mt-6" src={img4}/>  
                    </div>}
            </div>
        </div>
    </div>
    </>);
}
 
export default Task3;