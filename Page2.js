import React from "react";
import axios from 'axios'
export class Page2 extends React.Component
{
   constructor()
   {
    super();

    this.state = {

       tdata:[]   

     }
   }
  

   componentDidMount()
   {
    axios.get('http://localhost:3000/data.json').then((repos) => {
    
      this.setState({ tdata: repos.data })

      console.log(this.state.tdata)
    });

    }

   render()

   {

       return(

           <div>
            <center>
               <h1>Welcome in REST API Implementation in React JS</h1>
               <table border='1' className="table ml-3 mr-3 table-striped table-dark">

               <tbody>
                  <tr><th>ID</th><th>Title</th><th>Body</th></tr>
                  {this.state.tdata.map((person)=> <TableRow data={person} />)}   
                  </tbody>
               </table>
               </center>
           </div>
       )
   }
}


class TableRow extends React.Component
{
    render()
    {
        return(

            <tr>

             <td>{this.props.data.id}</td>

             <td>{this.props.data.title}</td>

             <td>{this.props.data.body}</td>

             

          </tr>
        )
    }
}
