import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { useState } from "react";

const Task4 = () => {
    const [user]=useState([
        {
            "id":"1",
           "username": "Bret",
    "email": "Sincere@april.biz",
    "website": "hildegard.org"

        },
        {
            "id":"2",
            "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "website": "ramiro.info"

        },
        {
            "id":"3",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "website": "demarco.info"
        },
        {
            "id":"4",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "website": "conrad.com"
        }
    ])
    const users = user.map(item=>{
        return ( 
            <>
            <div key={item.id} className="bg-color3 md:mx-3  md:w-1/2 w-3/4 my-3 m-auto pr-10 border-2 border-color1 rounded-md text-color1 hover:bg-color4">
                <p className="flex p-2 font-serif text-lg"><FaRegUser className="pr-3 size-8"/>{item.username}</p>
                <p className="flex p-2 font-mono text-md font-bold"><MdOutlineMail className="pr-3 pb-2 size-9" />{item.email}</p>
                <p className="flex p-2 font-mono text-md font-bold"><CgWebsite className="pr-3 pb-2 size-9" />{item.website}</p>
            </div>
            </>
         );
    })
    return(
        <div className="flex m-auto  w-full mt-28">
            <div className="md:flex md:w-11/12 w-5/6 justify-center m-auto mt-3 py-4 bg-color2 rounded-md">
                {users}
            </div>
        </div>
    )
    
}
 
export default Task4;