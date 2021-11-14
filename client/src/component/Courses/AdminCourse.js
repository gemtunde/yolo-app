import React, { useState, useEffect } from "react";
import { AvatarGenerator } from "random-avatar-generator";
import { useDispatch, useSelector } from "react-redux";

/* Actions */
import { createCourse } from "../../store/actions/courseAction";
const generator = new AvatarGenerator();
const avatar = generator.generateRandomAvatar();

const AdminCourse = () => {
  const dispatch = useDispatch();

  const [courseName, setCourseName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const { msg: errMsg, id: errID } = useSelector((state) => state.error);
  const { created } = useSelector((state) => state.course);

  useEffect(() => {

    if (created) {
      window.location.href = "/courses";
    }
  }, [created]);

  const onSubmit = (e) => {
    e.preventDefault();

    let courseStudents = [];
    const tags = document.querySelectorAll(".tagify__tag");
    for (var i = 0; i <= tags.length; i++) {
      if (tags[i]) {
        courseStudents.push(tags[i].getAttribute("value"));
      }
    }

    dispatch(createCourse({ name: courseName, price:price, description : description }));
  };

  return (
    <div className="container">
      
      <div className="class__wrapper">
        <div className="class__wrapper__left">
          <img src={avatar} alt="Avatar" />

          <h1>Welcome </h1>
         
        </div>
        <div className="class__wrapper__right">
          <form {...{ onSubmit }}>
            <div className="form-group">
              <label htmlFor="name">Title</label>
              <input
                type="text"
                name="coursename"
                id="coursename"
                placeholder="title"
                className="mb-3"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Price</label>
              <input
                type="text"
                name="coursename"
                id="coursename"
                placeholder="Price"
                className="mb-3"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Description</label>
              <textarea
                type="text"
                name="coursename"
                ///cols={10}
                rows={8}
                id="coursename"
                placeholder="description"
                className="mb-3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {errID === "COURSE__ERROR" ? (
              <div
                className="err-msgs"
                style={{ color: "red", marginTop: "10px" }}
              >
                {errMsg}
              </div>
            ) : null}

            <button color="dark" style={{ marginTop: "1rem" }}>
              Create Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminCourse;
