import React from 'react'
import './Styling.css'
import photo1 from'./images/yoga_4.jpg'
import photo2 from'./images/yoga_2.jpg'
import photo3 from'./images/yoga_3.jpg'
import photo5 from'./images/photo_5.jpg'
import photo6 from'./images/photo_6.jpg'
import photo7 from'./images/yoga_7.jpg'

function Body() {
  return (
    <div className="container">
    <div className="row">
           <div className="col-sm-6 col-md-4">
               <div className="thumbnail">
                   <img src={photo1} alt="bird"/>
                   <div className="caption">
                       <h3>HEADING</h3>
                       <p>description</p>
                       <p>
                           <a href="#" className="btn btn-primary" role="button">READ MORE</a>
                       </p>
                   </div>
               </div>
           </div>
           <div className="col-sm-6 col-md-4">
               <div className="thumbnail">
                   <img src={photo2} alt="bird"/>
                   <div className="caption">
                       <h3>HEADING</h3>
                       <p>description</p>
                       <p>
                           <a href="#" className="btn btn-primary" role="button">READ MORE</a>
                       </p>
                   </div>
               </div>
           </div>
           <div className="col-sm-6 col-md-4">
               <div className="thumbnail">
                   <img src={photo3} alt="bird"/>
                   <div className="caption">
                       <h3>HEADING</h3>
                       <p>description</p>
                       <p>
                           <a href="#" className="btn btn-primary" role="button">READ MORE</a>
                       </p>
                   </div>
               </div>
           </div>
       </div>
       <br /><br /><br />

       <div className="row">
           <div className="col-sm-6 col-md-4">
               <div className="thumbnail">
                   <img src={photo5} alt="bird"/>
                   <div className="caption">
                       <h3>HEADING</h3>
                       <p>description</p>
                       <p>
                           <a href="#" className="btn btn-primary" role="button">READ MORE</a>
                       </p>
                   </div>
               </div>
           </div>
           <div className="col-sm-6 col-md-4">
               <div className="thumbnail">
                   <img src={photo6} alt="bird"/>
                   <div className="caption">
                       <h3>HEADING</h3>
                       <p>description</p>
                       <p>
                           <a href="#" className="btn btn-primary" role="button">READ MORE</a>
                       </p>
                   </div>
               </div>
           </div>
           <div className="col-sm-6 col-md-4">
               <div className="thumbnail">
                   <img src={photo7} alt="bird"/>
                   <div className="caption">
                       <h3>HEADING</h3>
                       <p>description</p>
                       <p>
                           <a href="#" className="btn btn-primary" role="button">READ MORE</a>
                       </p>
                   </div>
               </div>
           </div>
       </div>
</div>
  )
}

export default Body