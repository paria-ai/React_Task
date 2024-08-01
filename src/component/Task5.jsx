import React from "react";

export default class Task5 extends React.Component{
    constructor(props){
        super(props);
        this.state = {users:[
            {
                "id": 1,
             "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"},
            {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": "https://reqres.in/img/faces/2-image.jpg"
              },
              {
                "id": 3,
                "email": "emma.wong@reqres.in",
                "first_name": "Emma",
                "last_name": "Wong",
                "avatar": "https://reqres.in/img/faces/3-image.jpg"
              },
              {
                "id": 4,
                "email": "eve.holt@reqres.in",
                "first_name": "Eve",
                "last_name": "Holt",
                "avatar": "https://reqres.in/img/faces/4-image.jpg"
              }

        ]}
    }

    render(){
        const user = this.state.users.map(item => {
            return(
                <>
                <div key={item.id} className="block px-6 py-3">
                    <img src={item.avatar} className=" m-auto size-36 rounded-full focus:size-44 focus:p-10 border-2 border-color1"/>
                    <p className="text-center font-sans text-lg font-bold text-color2">{item.first_name}</p>
                    <p className="text-center font-sans text-lg font-bold text-color2">{item.last_name}</p>
                    <p className="text-center font-serif text-sm text-color2">{item.email}</p>
                    </div>
                    </>
            )
        })
        return(
            <div className="flex m-auto w-full my-28">
                <div className="md:flex  md:w-2/3 w-5/6  justify-center m-auto mt-3 py-4 bg-color3 rounded-md">
                    {user}
                </div>
            </div>
        )
    } 
}
    

