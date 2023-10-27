// SharedModal.js
import React from 'react';

const Modaldisaply=({closeModal,content,showModal}) =>{
//   console.log("hello modal");
if(content){
  document.getElementById('display-content').innerHTML=content;
}
  return (
    <div>
            <div className="modal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <button className='btn-primary border-0 rounded p-2'>Send Resume</button>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body" id='display-content'></div>

              <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-bs-dismiss="modal" >Close</button>
              </div>

            </div>
          </div>
      </div>

  </div>

  );
}

export default Modaldisaply;
