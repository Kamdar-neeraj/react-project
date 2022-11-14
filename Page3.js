import { useEffect,useState } from "react";
import axios from 'axios'

export default function Page3(){


    const [tdata,setTdata]=useState([])


    useEffect(()=> {
        axios.get('http://localhost:3000/data.json').then((repos) => {
        
          setTdata(repos.data )
    
          console.log(tdata)
        });
    
        })
   

return(
    <div>
         <center>
               <h1>Welcome in REST API Implementation in React JS</h1>
               <table border='1' className="table ml-3 mr-3 table-striped table-light">

               <tbody>
                  <tr><th>ID</th><th>Title</th><th>Body</th></tr>
                  {tdata.map((person)=>{
                    return(
                      <tr>

                      <td>{person.id}</td>
         
                      <td>{person.title}</td>
         
                      <td>{person.body}</td>
         
                      
         
                   </tr>
                    )
                  })}   
                  </tbody>
               </table>
               </center>
    </div>
)


}