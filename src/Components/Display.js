
function Display(props){
    if(props.name != null){
      return (
        <div className="Display-card">
              <div class="card" style={{width: "18rem"}}>
                  <img src={props.Image} class="card-img-top" alt={props.name}/>
                  <div class="card-body">
                      <h5 class="card-title"><h1>{props.name}</h1></h5>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item"><h6>Author : {props.author}</h6></li>
                      <li class="list-group-item"><h6>Description : </h6>{props.des}</li>
                  </ul>
              </div>
              <br></br>
          </div>
      );
    }
  }

export default Display;
