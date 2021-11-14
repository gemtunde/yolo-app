import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Courses = () => {
  const { course } = useSelector((state) => state.course);

  return (
    <>
    {course.length > 0 ? (
      
      
      <div class="card mb-3" style={{maxWwidth: 540}}>
              {course.map(({ course_name, description, price, video }, id) => {
            
                return (
                  <>      <div class="card mb-3" style={{maxWwidth: 540}}>
                    <div key={id} class="row no-gutters">
                      <div key={id} class="col-md-4">
                          <video key={id} width="350" height="250" controls >
                             <source key={id} src={video} type="video/mp4"/>
                          </video>
                      </div>
                      <div key={id} class="col-md-8">
                      <div key={id} className="card-body">
                          <h5 key={id} className="card-title">Title - {course_name.toUpperCase()}</h5>
                          <p key={id} className="card-text"><span> Short Desription :-</span> {description.substring(0, 100) + "..."} </p>
                
                          <p key={id} className="card-text"><span> Long Desription :-</span> {description} </p>
                           <Link href="#" key={id} className="btn btn-primary"><span> Price :-</span> {price}</Link>
                          </div>
                      </div>
                   </div>
                   </div>
                    {/* end */}             
                  </>
                );
              })}
           
              

              </div>


          ) : (
            <div>
              <h3>No Course Available</h3>
              <br />
              <Link to="/create-course"> Create a course</Link>
            </div>
          )}
     
   </>
  );
};

export default Courses;
