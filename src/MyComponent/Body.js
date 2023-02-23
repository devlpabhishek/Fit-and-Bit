import React from 'react'



function Body () {
  return (

    <>
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src="coach.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Personalize Training support</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="train2.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Cardio</h5>
            <p className="card-text">There is imported machine to make your cardio best cardio</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="steamgym.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Separate Steam Rooms</h5>
            <p className="card-text">There is steam rooms so that you can enjoy the workout and remove all the toxins from
              the skin</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>



      <div class="card">
        <div class="card-header">

          Submit your Query here!

        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label htmlfor="exampleInputEmail1" class="htmlform-label" name="email">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text"><p id="p1">We'll never share your email with anyone else.</p></div>
            </div>
            <div class="mb-3">
              <input type="password" id="myPsw" name="username" maxlength="8" class="form-control" />
              <label class="form-label" htmlfor="typeNumber">Enter the Password</label>
            </div>
            <div class="mb-3">
              <input type="password" id="myPsw" name="username" maxlength="8" class="form-control" />
              <label class="form-label" htmlfor="typeNumber">Confirm Password</label>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" htmlfor="exampleCheck1">Notify me over Email</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          This is some text within a card body.
        </div>
      </div>
      

    


    </>
  )
}
export default Body;
