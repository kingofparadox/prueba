import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
function Index(){
    const navigate = useNavigate()

    return(<>
      <div className="container text-center">
  <div className="row">
    <div className="col">
      <div className="card" style={{width: '18rem'}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
</div>
    </div>
    <div className="col">
      <div className="card" style={{width: '18rem'}}>
      <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
      <div className="col">
        <div className="card" style={{width: '18rem'}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
</div>
    </div>
  </div>
</div>
<button className="btn btn-danger" onClick={() => navigate('/home')}></button>
    </>)
}
export default Index