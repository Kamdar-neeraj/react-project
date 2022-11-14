// import { post } from "jquery";
import React from "react";
export class RestAPIExample extends React.Component
{
   constructor()
   {
    super();

    this.state = {}
   }

   componentDidMount()
   {
    fetch('http://localhost:3000/data.json')

    .then(res => res.json())

    .then((data) => {

      this.setState({ tdata: data })

      console.log(this.state.tdata)
    //   res.send(data)

    })

    .catch(console.log)
   }



   render()

   {

       return(

           <div>
             <h1>POST METHOD</h1>
           </div>
       )
   }
}