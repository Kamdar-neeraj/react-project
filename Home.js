import { Link } from "react-router-dom"


export default function Home(){
    return(<>
    <div className="card text-center">
  <div className="card-header">
 
    Featured
  </div>
  <div className="card-body ">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <div className="navbar">   
       <ul className="navbar-nav">
       
    <li className="nav-item d-inline" ><Link to="form" className="nav-link">login</Link></li>
    <li className="nav-item d-inline"><Link to="welcome" className="nav-link">welcome</Link></li>
    <li className="nav-item d-inline"><Link to="Page1" className="nav-link">page1</Link></li>
    <li className="nav-item d-inline"><Link to="Page2" className="nav-link">page2</Link></li>
    <li className="nav-item d-inline"><Link to="Page3" className="nav-link">page3</Link></li>
   
    </ul>
    </div>

  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>
    </>)
}