import React ,{useState} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Modal } from 'bootstrap';
// import Modaldisaply from './displaydata';


 const Carrres = (props) => {
    const displaying= props.product;
    // const [isContentVisible, setIsContentVisible] = useState(false);
    // const [isContentVisible2, setIsContentVisible2] = useState(false);
    // const [isContentVisible1, setIsContentVisible1] = useState(false);

    // const toggleContent = () => {
    //   setIsContentVisible(!isContentVisible);
    //   setIsContentVisible1(isContentVisible1)
    //   setIsContentVisible2(isContentVisible2)
    //   // console.log(isContentVisible2)
    // };
    // const toggleContent1 = () => {
    //   setIsContentVisible1(!isContentVisible1);
    //   setIsContentVisible(isContentVisible);
    //   setIsContentVisible2(isContentVisible2)

    // };
    // const toggleContent2 = () => {
    //   setIsContentVisible2(!isContentVisible2);
    //   setIsContentVisible1(isContentVisible1)
    //   setIsContentVisible(isContentVisible);

    // };
  
const toggleclick=(selected)=>{
  // const selected = e.currentTarget.id;

  if(selected === 'hyd'){
     document.getElementById('table1').style.display='block'
     document.getElementById('table2').style.display='none'
    document.getElementById('table3').style.display='none'

  }else if(selected === 'bang'){
    document.getElementById('table2').style.display='block'
    document.getElementById('table1').style.display='none'
    document.getElementById('table3').style.display='none'


 }else if(selected === 'usa'){
  document.getElementById('table3').style.display='block'
  document.getElementById('table1').style.display='none'
    document.getElementById('table2').style.display='none'

}


   
}  

      AOS.init();
      const showModal = (e) => {
        const clicked = e.currentTarget.id;
        if(clicked === "ds"){
          document.getElementById("showmod").innerHTML = `
                  <div class='border rounded p-1 m-1'  style="border-bottom:8px solid red" id='border1'>
                    <div class='mb-2 d-flex flex-wrap'>
                      <span class='border p-1 m-1'>${displaying.data1}</span>
                      <span class='border p-1 m-1'>${displaying.data2}</span>
                      <span class='border p-1 m-1'>${displaying.data3}</span>
                      <span class='border p-1 m-1'>${displaying.data4}</span>
                      <span class='border p-1 m-1'>${displaying.data5}</span>
                      <span class='border p-1 m-1'>${displaying.data6}</span>
                    </div>
                    <h6 class='text-danger text-center'>${displaying.dataMiniHeading}</h6>
                    <p class='m-4'>${displaying.dataContent}</p>
                    <p class='m-4'>${displaying.dataDetails}</p>

                  </div>
          `
        }
        else if(clicked === "dep"){
          document.getElementById("showmod").innerHTML = `
          <div class='border rounded p-1 m-1' style="border-bottom:8px solid red" id='border1'>
          <div class='mb-2 d-flex flex-wrap'>
            <span class='border p-1 m-1'>${displaying.dep1}</span>
            <span class='border p-1 m-1'>${displaying.dep2}</span>
            <span class='border p-1 m-1'>${displaying.dep3}</span>
            <span class='border p-1 m-1'>${displaying.dep4}</span>
            <span class='border p-1 m-1'>${displaying.dep5}</span>
            <span class='border p-1 m-1'>${displaying.dep6}</span>
            <span class='border p-1 m-1'>${displaying.dep7}</span>
          </div>
          <h6 class='text-danger text-center'>${displaying.depHeading}</h6>
          <p class='m-4'>${displaying.depContent}</p>
          <p class='m-4'>${displaying.depDetails}</p>      
          </div>
          `
        }
        else if(clicked === "ser"){
          document.getElementById("showmod").innerHTML = `
          <div class='border rounded p-1 m-1' style="border-bottom:8px solid red" id='border1'>
                    <div class='mb-2 d-flex flex-wrap'>
                      <span class='border p-1 m-1'>${displaying.ser1}</span>
                      <span class='border p-1 m-1'>${displaying.ser2}</span>
                      <span class='border p-1 m-1'>${displaying.ser3}</span>
                      <span class='border p-1 m-1'>${displaying.ser4}</span>
                      <span class='border p-1 m-1'>${displaying.ser5}</span>
                    </div>
                    <h6 class='text-danger text-center'>${displaying.serHeading}</h6>
                    <p class='m-4'>${displaying.serContent}</p>
                    <p class='m-4'>${displaying.serDetails}</p>      
                  </div>
          `
        }
        else if(clicked === "aws"){
          document.getElementById("showmod").innerHTML = `
          <div class='border rounded p-1 m-1' style="border-bottom:8px solid red" id='border1'>
          <div class='mb-2 d-flex flex-wrap'
            <span class='border p-1 m-1'>${displaying.aws1}</span>
            <span class='border p-1 m-1'>${displaying.aws2}</span>
            <span class='border p-1 m-1'>${displaying.aws3}</span>
            <span class='border p-1 m-1'>${displaying.aws4}</span>
            <span class='border p-1 m-1'>${displaying.aws5}</span>
            <span class='border p-1 m-1'>${displaying.aws6}</span>
            <span class='border p-1 m-1'>${displaying.aws7}</span>
          </div>
          <h6 class='text-danger text-center'>${displaying.awsHeading}</h6>
          <p class='m-4'>${displaying.awsContent}</p>
          <p class='m-4'>${displaying.awsDetails}</p>      
        </div>
          `
        }
        else if(clicked === "app"){
          document.getElementById("showmod").innerHTML = `
          <div class='border rounded p-1 m-1' style="border-bottom:8px solid red" id='border1'>
          <div class='mb-2 d-flex flex-wrap'>
            <span class='border p-1 m-1'>${displaying.app1}</span>
            <span class='border p-1 m-1'>${displaying.app2}</span>
            <span class='border p-1 m-1'>${displaying.app3}</span>
            <span class='border p-1 m-1'>${displaying.app4}</span>
            <span class='border p-1 m-1'>${displaying.app5}</span>
            <span class='border p-1 m-1'>${displaying.app6}</span>
          </div>
          <h6 class='text-danger text-center'>${displaying.appHeading}</h6>
          <p class='m-4'>${displaying.appContent}</p>
          <p class='m-4'>${displaying.appDetails}</p>      
        </div>
          `
        }
        else if(clicked === "cata"){
          document.getElementById("showmod").innerHTML = `
          <div class='border rounded p-1 m-1' style="border-bottom:8px solid red" id='border1'>
          <div class='mb-2 d-flex flex-wrap'>
            <span class='border p-1 m-1'>${displaying.cata1}</span>
            <span class='border p-1 m-1'>${displaying.cata2}</span>
            <span class='border p-1 m-1'>${displaying.cata3}</span>
            <span class='border p-1 m-1'>${displaying.cata4}</span>
          </div>
          <h6 class='text-danger text-center'>${displaying.catalogHeading}</h6>
          <p class='m-4'>${displaying.catalogContent}</p>
          <p class='m-4'>${displaying.catalogDetails}</p>      
        </div>
          `
        }
    };
    

  return (
    <div>
        {/* <Modaldisaply showModal={model} content={content} closeModal={closeModal}/> */}
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <button className='btn-primary border-0 rounded p-2'>Send Resume</button>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body" id='showmod'></div>

              <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
      </div>

        <img src={displaying.url} width='100%' alt='no-display' className='mainimg'/>
        <img src={displaying.mainMobileImg.url}  alt='no-display' className='sunimg'/>
      <div className='content-des'>
      <h1 className='sub-heading'>{displaying.subHeading}</h1>
        <p>{displaying.content}</p>
            <div className='d-flex main-content1' >
              <div className="border rounded m-2 p-4 col-md-6 slide-right" id='border1'data-aos="slide-right" data-aos-duration="2000" data-aos-once='true'>
                <img src={displaying.circleImg.url} height="60px" alt='Connection'></img>
                <p>{displaying.circleContent}</p>
              </div>
              <div className="border rounded m-2 p-4 col-md-6 slide-left" id='border1'data-aos="slide-left"data-aos-duration="2000" data-aos-once='true'>
                <img src={displaying.networkImg.url} height="60px" alt='CloudNetwork'></img>
                <p>{displaying.networkContent}</p>
              </div>
            </div>
            <div className='d-flex main-content2' >
              <div className="border rounded m-2 p-4 col-md-6 slide-right" id='border1'data-aos="slide-right" data-aos-duration="2000" data-aos-once='true'>
                <img src={displaying.computerImg.url} height="60px" alt='Computer'></img>
                <p>{displaying.computerContent}</p>
              </div>
              <div className="border rounded m-2 p-4 col-md-6 slide-left" id='border1' data-aos="slide-left" data-aos-duration="2000" data-aos-once='true'>
                <img src={displaying.wifiImg.url} height="60px" alt='Rocket'></img>
                <p>{displaying.wifiContent}</p>
              </div> 
            </div>
            <br/>
            <h1 className='text-primary pb-5'>{displaying.subHeading2}<span className='text-success'>{displaying.subHeading3}</span></h1>
            <div className="dropdown list">
  <button class="btn btn-secondary dropdown-toggle fs-1 pt-10 " type="button" data-bs-toggle="dropdown">
    Dropdown button
  </button>
  <ul class="dropdown-menu" >
    <li><button class="dropdown-item fs-1 " type='button'  onClick={()=>toggleclick('hyd')}>
    {/* {isContentVisible} */}
     Hyderabad </button></li>
    <li>
      {/* {isContentVisible1 } */}
      <button class="dropdown-item fs-1" type='button'  onClick={()=>toggleclick('bang')} >Banglore Openings</button></li>
<li>
{/* {isContentVisible2} */}
  <button class="dropdown-item fs-1" type='button'  onClick={()=>toggleclick('usa')}>US Openings</button></li>
  </ul>
</div>
  
  
        <div className='tableinfo' id='table1'>
          <table class="table border table-hover w-100">
  <thead className='table-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Job Type</th>
      <th scope="col">Location</th>
      <th scope="col">Job Name</th>
      <th scope="col">Skills</th>
      <th scope="col">Exp(Years)</th>
      <th scope="col">No Of Positions</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img src={displaying.new.url} alt='new' width={50}></img></td>
      <td>{displaying.hyd}</td>
      <td>{displaying.dataMiniHeading}</td>
      <td>{displaying.data2},{displaying.data3},{displaying.data4}</td>
      <td>{displaying.hydExp}</td>
      <td>{displaying.hydPos}</td>
      <td><button className='btn btn-primary'
                          id='ds' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal"

      >{displaying.button1}</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><img src={displaying.new.url} alt='new' width={50}></img></td>
      <td>{displaying.hyd}</td>
      <td>UI Developer</td>
      <td>{displaying.dep1},{displaying.dep2},{displaying.dep3}</td>
      <td>{displaying.hydExp}</td>
      <td>{displaying.hydPos}</td>
      <td><button className='btn btn-primary'
                    id='dep' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal"

      >{displaying.button1}</button></td>
    </tr>
    
  </tbody>
</table>
        </div>
    


        <div className='tableinfo' id='table2'>
          <table class="table border table-hover w-100">
  <thead className='table-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Job Type</th>
      <th scope="col">Location</th>
      <th scope="col">Job Name</th>
      <th scope="col">Skills</th>
      <th scope="col">Exp(Years)</th>
      <th scope="col">No Of Positions</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img src={displaying.new.url} alt='new' width={50}></img></td>
      <td>{displaying.banglore}</td>
      <td>{displaying.serHeading}</td>
      <td>{displaying.ser1},{displaying.ser3},{displaying.ser2}{displaying.ser4}</td>
      <td>{displaying.hydExp}</td>
      <td>{displaying.hydPos}</td>
      <td><button className='btn btn-primary'
                          id='ser' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal"

      >{displaying.button1}</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><img src={displaying.new.url} alt='new' width={50}></img></td>
      <td>{displaying.banglore}</td>
      <td>{displaying.catalogHeading}</td>
      <td>{displaying.cata1},{displaying.cata2},{displaying.cata3}</td>
      <td>{displaying.hydExp}</td>
      <td>{displaying.hydPos}</td>
      <td><button className='btn btn-primary'
                    id='cata' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal"
      >{displaying.button1}</button></td>
    </tr>
    
  </tbody>
</table>
        </div>
      
       
      
        <div className='tableinfo' id='table3'>
          <table class="table border table-hover w-100">
  <thead className='table-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Job Type</th>
      <th scope="col">Location</th>
      <th scope="col">Job Name</th>
      <th scope="col">Skills</th>
      <th scope="col">Exp(Years)</th>
      <th scope="col">No Of Positions</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img src={displaying.new.url} alt='new' width={50}></img></td>
      <td>{displaying.usa}</td>
      <td>{displaying.awsHeading}</td>
      <td>{displaying.aws1},{displaying.aws2},{displaying.aws3}</td>
      <td>{displaying.hydExp}</td>
      <td>{displaying.hydPos}</td>
      <td><button className='btn btn-primary'
                          id='aws' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal"

      >{displaying.button1}</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>2</td>
      <td>{displaying.usa}</td>
      <td>{displaying.appHeading}</td>
      <td>{displaying.app1},{displaying.app2},{displaying.app3}</td>
      <td>{displaying.hydExp}</td>
      <td>{displaying.hydPos}</td>
      <td><button className='btn btn-primary'
                    id='app' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal"

      >{displaying.button1}</button></td>
    </tr>
    
  </tbody>
</table>
        </div>
    
       

            {/* <div className='d-flex m-2  ' data-aos="slide-right" data-aos-duration="2000" data-aos-once='true'>
            <div className='border rounded p-1 m-1 ' id='border1' >
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{displaying.data1}</span>
                <span className='border p-1 m-1'>{displaying.data2}</span>
                <span className='border p-1 m-1'>{displaying.data3}</span>
                <span className='border p-1 m-1'>{displaying.data4}</span>
                <span className='border p-1 m-1'>{displaying.data5}</span>
                <span className='border p-1 m-1'>{displaying.data6}</span>
              </div>
              <h6 className='text-danger text-center'>{displaying.dataMiniHeading}</h6>
              <p className='m-4'>{displaying.dataContent}</p>
              <div className='text-center'><button className='btn-primary border-0 rounded p-2'
              id='ds' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal"
              >{displaying.button1}</button></div>
            </div>
            <div className='border rounded p-1 m-1' id='border1'>
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{displaying.dep1}</span>
                <span className='border p-1 m-1'>{displaying.dep2}</span>
                <span className='border p-1 m-1'>{displaying.dep3}</span>
                <span className='border p-1 m-1'>{displaying.dep4}</span>
                <span className='border p-1 m-1'>{displaying.dep5}</span>
                <span className='border p-1 m-1'>{displaying.dep6}</span>
                <span className='border p-1 m-1'>{displaying.dep7}</span>
              </div>
              <h6 className='text-danger text-center'>{displaying.depHeading}</h6>
              <p className='m-4'>{displaying.depContent}</p>
              <div className='text-center'><button className='btn-primary border-0 rounded p-2'
                             id='dep' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal"
              >{displaying.button1}</button></div>
          
            </div>

            <div className='border rounded p-1 m-1' id='border1'>
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{displaying.ser1}</span>
                <span className='border p-1 m-1'>{displaying.ser2}</span>
                <span className='border p-1 m-1'>{displaying.ser3}</span>
                <span className='border p-1 m-1'>{displaying.ser4}</span>
                <span className='border p-1 m-1'>{displaying.ser5}</span>
              </div>
              <h6 className='text-danger text-center'>{displaying.serHeading}</h6>
              <p className='m-4'>{displaying.serContent}</p>
              <div className='text-center mb-1'><button className='btn-primary border-0 rounded p-2'
                            id='app' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal"
              >{displaying.button1}</button></div>
            </div>
          </div>
          <div className='d-flex m-2'data-aos="slide-right" data-aos-duration="2000" data-aos-once='true'>
            <div className='border rounded p-1 m-1' id='border1'>
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{displaying.aws1}</span>
                <span className='border p-1 m-1'>{displaying.aws2}</span>
                <span className='border p-1 m-1'>{displaying.aws3}</span>
                <span className='border p-1 m-1'>{displaying.aws4}</span>
                <span className='border p-1 m-1'>{displaying.aws5}</span>
                <span className='border p-1 m-1'>{displaying.aws6}</span>
                <span className='border p-1 m-1'>{displaying.aws7}</span>
              </div>
              <h6 className='text-danger text-center'>{displaying.awsHeading}</h6>
              <p className='m-4'>{displaying.awsContent}</p>
              <div className='text-center'><button className='btn-primary border-0 rounded p-2'
                            id='aws' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal"
              >{displaying.button1}</button></div>
            </div>
            <div className='border rounded p-1 m-1' id='border1'>
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{displaying.app1}</span>
                <span className='border p-1 m-1'>{displaying.app2}</span>
                <span className='border p-1 m-1'>{displaying.app3}</span>
                <span className='border p-1 m-1'>{displaying.app4}</span>
                <span className='border p-1 m-1'>{displaying.app5}</span>
                <span className='border p-1 m-1'>{displaying.app6}</span>
              </div>
              <h6 className='text-danger text-center'>{displaying.appHeading}</h6>
              <p className='m-4'>{displaying.appContent}</p>
              <div className='text-center'><button className='btn-primary border-0 rounded p-2'
                            id='app' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal"
              >{displaying.button1}</button></div>
            </div>
            <div className='border rounded p-1 m-1' id='border1'>
              <div className='mb-2 d-flex flex-wrap'>
                <span className='border p-1 m-1'>{displaying.cata1}</span>
                <span className='border p-1 m-1'>{displaying.cata2}</span>
                <span className='border p-1 m-1'>{displaying.cata3}</span>
                <span className='border p-1 m-1'>{displaying.cata4}</span>
              </div>
              <h6 className='text-danger text-center'>{displaying.catalogHeading}</h6>
              <p className='m-4'>{displaying.catalogContent}</p>
              <div className='text-center mb-1'><button className='btn-primary border-0 rounded p-2'
                            id='cata' onClick={showModal}  data-bs-toggle="modal" data-bs-target="#myModal"
              >{displaying.button1}</button></div>
            </div>
          </div>
          <div className='d-flex justify-content-around mt-5 footerbutton'>
            <button className='btn-primary border-0 p-2 rounded hyd'>{displaying.hydbutton}</button>
            <button className='btn-primary border-0 p-2 rounded bag'>{displaying.bagbutton}</button>
          </div>
           */}
          </div>
          <div className='d-flex pt-5 footer-details'>
              <div className='col-3'>
                <img src={displaying.footerImg.url} alt='no-footer' width='95%' height='30%' className='footer-img'/>
                <p className='footerContent'>{displaying.footerContent}</p>
              </div> 
              <div className='col-3'>
                   <h5 className='footerkey'>{displaying.footerKey}</h5>
                   <div className='d-flex footerlist'>
                   <div>
                    <p><a href='/'><i class="bi bi-chevron-double-right"></i> {displaying.footerAbout}</a></p>
                    <p><a href='/'><i class="bi bi-chevron-double-right"></i> {displaying.footerService}</a></p>
                    <p><a href='/'><i class="bi bi-chevron-double-right"></i> {displaying.footerSolutions}</a></p>
                   </div>
                   <div className='secondlist'>
                    <p><a href='/'><i class="bi bi-chevron-double-right"></i> {displaying.footerCsr}</a></p>
                    <p><a href='/'><i class="bi bi-chevron-double-right"></i> {displaying.footerCarrers}</a></p>
                    <p><a href='/'><i class="bi bi-chevron-double-right"></i> {displaying.footerContact}</a></p>
                   </div>
                   </div>
              </div> 
              <div className='col-3'>
                   <h5 className='footerget'>{displaying.footerGet}</h5>
                   <p className='plocation'><i class="bi bi-geo-alt-fill"></i>: {displaying.footerLocation}</p>
                   <p className='pemail'><i class="bi bi-envelope-fill"></i>: {displaying.footerMail}</p>
              </div>
              <div className='col-3 footerimages'>
                <h5 className='footerfollow'>{displaying.footerFollow}</h5>
                <div className='footerimages1'>
                   <img className='f1' src={displaying.footerFacebook.url} width={50} alt='no-facebook'></img>
                   <img className='f1' src={displaying.footerYoutube.url}  width={50} alt='no-youtube'></img>
                   <img className='f1' src={displaying.footerLink.url}     width={50}    alt='no-link'></img>
                   </div>
              </div>
            </div>
      </div>

  )
}
export default Carrres;
