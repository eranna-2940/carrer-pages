import React from 'react';

const Modal = ({ handleClose, show, data, clicked}) => {
//   console.log("hello"+clicked);

  if(clicked === "ds"){
    document.getElementById("showmod").innerHTML = `
            <div class='shadow rounded p-1 m-1'  style="border-bottom:8px solid red">
              <div class='mb-2 d-flex flex-wrap'>
                <span class='border p-1 m-1'>${data.ds1}</span>
                <span class='border p-1 m-1'>${data.ds2}</span>
                <span class='border p-1 m-1'>${data.ds3}</span>
                <span class='border p-1 m-1'>${data.ds4}</span>
                <span class='border p-1 m-1'>${data.ds5}</span>
                <span class='border p-1 m-1'>${data.ds6}</span>
              </div>
              <h6 class='text-danger text-center'>${data.dsHead}</h6>
              <p class='m-4'>${data.dsDescription}</p>
              <p >${data.dsDescription2}</p>
              <div class='text-center'><button class='btn-primary border-0 rounded p-2'>${data.dsButton}</button></div>
            </div>
    `
  }
  else if(clicked === "reactjs"){
    document.getElementById("showmod").innerHTML = `
    <div className='shadow rounded p-1 m-1' style={{borderBottom:"8px solid red"}}>
    <div className='mb-2 d-flex flex-wrap'>
      <span className='border p-1 m-1'>${data.react1}</span>
      <span className='border p-1 m-1'>${data.react2}</span>
      <span className='border p-1 m-1'>${data.react3}</span>
      <span className='border p-1 m-1'>${data.react4}</span>
      <span className='border p-1 m-1'>${data.react5}</span>
      <span className='border p-1 m-1'>${data.react6}</span>
      <span className='border p-1 m-1'>${data.react7}</span>
    </div>
    <h6 className='text-danger text-center'>${data.reactHead}</h6>
    <p className='m-4'>${data.reactDescription}</p>
    <div className='text-center'><button className='btn-primary border-0 rounded p-2'>${data.reactButton}</button></div>
  </div>
    `
  }
  else if(clicked === "analyst"){
    document.getElementById("showmod").innerHTML = `
    <div className='shadow rounded p-1 m-1' style={{borderBottom:"8px solid red"}}>
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>${data.analyst1}</span>
                <span className='border p-1 m-1'>${data.analyst2}</span>
                <span className='border p-1 m-1'>${data.analyst3}</span>
                <span className='border p-1 m-1'>${data.analyst4}</span>
                <span className='border p-1 m-1'>${data.analyst5}</span>
              </div>
              <h6 className='text-danger text-center'>${data.analystHead}</h6>
              <p className='m-4'>${data.analystDescription}</p>
              <div className='text-center mb-1'><button className='btn-primary border-0 rounded p-2' >${data.analystButton}</button></div>
            </div>
    `
  }
  else if(clicked === "aws"){
    document.getElementById("showmod").innerHTML = `
    <div className='shadow rounded p-1 m-1' style={{borderBottom:"8px solid red"}}>
    <div className='mb-2 d-flex flex-wrap'>
      <span className='border p-1 m-1'>${data.aws1}</span>
      <span className='border p-1 m-1'>${data.aws2}</span>
      <span className='border p-1 m-1'>${data.aws3}</span>
      <span className='border p-1 m-1'>${data.aws4}</span>
      <span className='border p-1 m-1'>${data.aws5}</span>
      <span className='border p-1 m-1'>${data.aws6}</span>
      <span className='border p-1 m-1'>${data.aws7}</span>
    </div>
    <h6 className='text-danger text-center'>${data.awsHead}</h6>
    <p className='m-4'>${data.awsDescription}</p>
    <div className='text-center'><button className='btn-primary border-0 rounded p-2'>${data.awsButton}</button></div>
  </div>
    `
  }
  else if(clicked === "app"){
    document.getElementById("showmod").innerHTML = `
    <div className='shadow rounded p-1 m-1' style={{borderBottom:"8px solid red"}}>
    <div className='mb-2 d-flex flex-wrap'>
      <span className='border p-1 m-1'>${data.app1}</span>
      <span className='border p-1 m-1'>${data.app2}</span>
      <span className='border p-1 m-1'>${data.app3}</span>
      <span className='border p-1 m-1'>${data.app4}</span>
      <span className='border p-1 m-1'>${data.app5}</span>
      <span className='border p-1 m-1'>${data.app6}</span>
    </div>
    <h6 className='text-danger text-center'>${data.appHead}</h6>
    <p className='m-4'>${data.appDescription}</p>
    <div className='text-center'><button className='btn-primary border-0 rounded p-2'>${data.appButton}</button></div>
  </div>
    `
  }
  else if(clicked === "dga"){
    document.getElementById("showmod").innerHTML = `
    <div className='shadow rounded p-1 m-1' style={{borderBottom:"8px solid red"}}>
    <div className='mb-2 d-flex flex-wrap'>
      <span className='border p-1 m-1'>${data.dga1}</span>
      <span className='border p-1 m-1'>${data.dga2}</span>
      <span className='border p-1 m-1'>${data.dga3}</span>
      <span className='border p-1 m-1'>${data.dga4}</span>
    </div>
    <h6 className='text-danger text-center'>${data.dgaHead}</h6>
    <p className='m-4'>${data.dgaDescription}</p>
    <div className='text-center mb-1'><button className='btn-primary border-0 rounded p-2'>${data.dgaButton}</button></div>
  </div>
    `
  }

  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="main-modal">
        <div id='showmod'></div>
        <div>
          <button className="btn btn-warning m-2" onClick={handleClose}>close</button>
        </div>
      </section>
    </div>
  );
};
export default Modal;