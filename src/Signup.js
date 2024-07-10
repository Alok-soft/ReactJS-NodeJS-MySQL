import React, { useState } from 'react'
import axios from 'axios';
// import axios from 'axios/dist/browser/axios.cjs';
const Signup = () => {
  let alText = 'photo'
  const [values, setValues] = useState({
    name: '',
    email: '',
    userid: '',
    pass: '',
  })

const handleChange = (event) => {
  setValues({...values, [event.target.name]: [event.target.value]})
}

const handleSubmit = (event) =>{
  event.preventDefault();
  console.log(values)
  axios.post('http://127.0.0.1:3001/signup', values)
    .then(res => console.log("SignUp Successfully!!"))
    .catch(err => console.log('SignUp failed'))
}

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}  >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: "25px" }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example1c">Your Name*</label>
                      <input type="text" name="name" id="form3Example1c" className="form-control" onChange={handleChange} />                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c">Your Email*</label>
                      <input type="email" name="email" id="form3Example3c" className="form-control" onChange={handleChange} />                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c">Your UserId*</label>
                      <input type="text" name="userid" id="form3Example3c" className="form-control" onChange={handleChange} />                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4c">Password*</label>
                      <input type="password" name="pass" id="form3Example4c" className="form-control" onChange={handleChange} />                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password*</label>
                      <input type="password" name="re-pass" id="form3Example4cd" className="form-control" onChange={handleChange} />                      
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" name="term-cond" value="1" id="form2Example3c" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"} className="img-fluid" alt={alText} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Signup
