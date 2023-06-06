import "./Form.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    number: "",
    textarea: "",
    occupation: "",
    gender: "",
    rate: "",

    survey: [],
  });

  const [formError, setFormError] = useState({});

  const onChangeHandler = (event) => {
    console.log(event);
    if (event.target.name === "survey") {
      let copy = { ...formData };

      if (event.target.checked) {
        copy.survey.push(event.target.value);
      } else {
        copy.survey = copy.survey.filter((el) => el !== event.target.value);
      }

      setFormData(copy);
    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const validateForm = () => {
    let err = {};

    if (formData.username === "") {
      err.username = "Username required!";
    }
    if (formData.email === "") {
      err.email = "Email required!";
    } else {
      let regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(formData.email)) {
        err.email = "Email not valid!";
      }
    }

    if (formData.password === "" || formData.cpassword === "") {
      err.password = "Password and Confirm Password required!";
    } else {
      if (formData.password !== formData.cpassword) {
        err.password = "Password not matched!";
      } else {
        if (formData.password.length < 6) {
          err.password = "Password should greater than 6 characters!";
        }
      }
    }

    if (formData.number === "") {
      err.number = "Number required!";
    }

    if (formData.textarea === "") {
      err.textarea = "Textarea required!";
    }

    if (formData.occupation === "") {
      err.occupation = "Occupation required!";
    }
    if (formData.gender === "") {
      err.gender = "Gender required!";
    }
    if (formData.rate === "") {
      err.rate = "Rate required!";
    }
    if (formData.survey.length < 1) {
      err.survey = "Any one required!";
    }

    setFormError({ ...err });

    return Object.keys(err).length < 1;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    let isValid = validateForm();

    if (isValid) {
      alert("Submitted");
      //API call to server
    } else {
      alert("In-Valid Form");
    }
    console.log(isValid);
  };
  return (
    <Container>
      <Row>
        <h1 className="text-center">Review Form</h1>
      </Row>
      <div className="App">
        <form onSubmit={onSubmitHandler}>
          <Row>
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Your Name
              </label>
              <input
                className="form-control"
                name="username"
                onChange={onChangeHandler}
                value={formData.username}
              />
              <span className="non-valid">{formError.username}</span>
            </div>
          </Row>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              name="email"
              onChange={onChangeHandler}
              value={formData.email}
            />
            <span className="non-valid">{formError.email}</span>
          </div>
          <Row />

          <Row>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                className="form-control"
                name="password"
                type="password"
                onChange={onChangeHandler}
                value={formData.password}
              />
              <span className="non-valid">{formError.password}</span>
            </div>
          </Row>

          <Row>
            <div className="form-group">
              <label htmlFor="cpassword" className="form-label">
                Confirm Password
              </label>
              <input
                className="form-control"
                name="cpassword"
                type="password"
                onChange={onChangeHandler}
                value={formData.cpassword}
              />
            </div>
          </Row>

          <Row>
            <div className="form-group">
              <label htmlFor="number" className="form-label">
                Phone Number
              </label>
              <input
                className="form-control"
                name="number"
                type="tel"
                id="phone"
                pattern="[0-9]{11}"
                onChange={onChangeHandler}
                value={formData.number}
              />
              <span className="non-valid">{formError.number}</span>
            </div>
          </Row>

          <Row>
            <div className="form-group">
              <label htmlFor="textarea" className="form-label">
                Your Review
              </label>
              <textarea
                className="form-control"
                name="textarea"
                onChange={onChangeHandler}
                value={formData.textarea}
              />
              <span className="non-valid">{formError.textarea}</span>
            </div>
          </Row>
          <Row>
            <div className="form-group">
              <label htmlFor="occupation" className="form-label">
                Your Job
              </label>
              <select
                className="form-select"
                name="occupation"
                onChange={onChangeHandler}
                value={formData.occupation}
              >
                <option value=""></option>
                <option value="student">Student</option>
                <option value="employee">Employee</option>
                <option value="other">Other</option>
              </select>
              <span className="non-valid">{formError.occupation}</span>
            </div>
          </Row>
          <Row>
            <div className="form-group">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={onChangeHandler}
                    checked={formData.gender === "male"}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={onChangeHandler}
                    checked={formData.gender === "female"}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={onChangeHandler}
                    checked={formData.gender === "other"}
                  />
                  <label htmlFor="other">Other</label>
                </div>
                <span className="non-valid">{formError.gender}</span>
              </div>
            </div>
          </Row>

          <Row>
            <div className="form-group">
              <label htmlFor="rate" className="form-label">
                Your Rate
              </label>
              <div>
                <div>
                  <input
                    type="radio"
                    name="rate"
                    value="bad"
                    onChange={onChangeHandler}
                    checked={formData.rate === "bad"}
                  />
                  <label htmlFor="male">Bad</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="rate"
                    value="good"
                    onChange={onChangeHandler}
                    checked={formData.rate === "good"}
                  />
                  <label htmlFor="female">Good</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="rate"
                    value="verygood"
                    onChange={onChangeHandler}
                    checked={formData.rate === "verygood"}
                  />
                  <label htmlFor="other">Very Good</label>
                </div>
                <span className="non-valid">{formError.rate}</span>
              </div>
            </div>
          </Row>

          <Row>
            <div className="form-group">
              <label htmlFor="gender" className="form-label">
                How Did You Hear About Us !
              </label>
              <div>
                <div>
                  <input
                    type="checkbox"
                    name="survey"
                    value="media"
                    onChange={onChangeHandler}
                    checked={formData.survey.indexOf("media") !== -1}
                  />
                  <label htmlFor="media">Social Media</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="survey"
                    value="friend"
                    onChange={onChangeHandler}
                    checked={formData.survey.indexOf("friend") !== -1}
                  />
                  <label htmlFor="friend">Your Friend</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="survey"
                    value="other"
                    onChange={onChangeHandler}
                    checked={formData.survey.indexOf("other") !== -1}
                  />
                  <label htmlFor="other">Other</label>
                </div>
              </div>
              <span className="non-valid">{formError.survey}</span>
            </div>
          </Row>
          <Row>
            <div className="form-group">
              <Button variant="primary" type="submit">
                submit
              </Button>
            </div>
          </Row>
        </form>
      </div>
    </Container>
  );
}

export default Form;
