import React, { Fragment } from "react";
import { SiCodechef, SiHackerrank } from "react-icons/si";

function Resume() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Krishna Kurdekar</h2>
              <h5 className="d-inline fw-bold ls-2">Mail Id:</h5>{" "}
              <a
                href="mailto:ksrkmdl@gmail.com"
                className="h5 text-danger ls-2"
              >
                {" "}
                ksrmdl@gmail.com
              </a>
              <br />
              <h5 className="d-inline fw-bold ls-2">Phone No:</h5>{" "}
              <a href="https://call.me/7760294984" className="h5 text-danger ">
                {" "}
                7760294984
              </a>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EDUCATION</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    MCA - Master of Computer Application
                  </h4>
                  <h6 className="blue-label px-2 py-1">2021 - 2022</h6>
                  <p className="m-0">Jain College of Engineering, Belagavi</p>
                  <p>CGPA: 8.7</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    BCA - Bachelor of Computer Application
                  </h4>
                  <h6 className="blue-label px-2 py-1">2017-2020</h6>
                  <p className="m-0">Shri S R Kanti BCA College, Mudhol</p>
                  <p>Grade: 78.00 %</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EXPERIENCE</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    <a
                      href="https://drive.google.com/file/d/1Pe9Wuxo6IW2LswqacL0JuXB8iCPH1YQz/view?usp=share_link"
                      className="ff-jose my-1 text-red text-decoration-none"
                    >
                      Associate Web Developer
                    </a>
                  </h4>
                  <h6 className="blue-label px-2 py-1">May 2023 - Dec 2023</h6>
                  <p className="m-0">Proiuvo Pvt Ltd</p>
                  <details>
                    <p className="text-justify">
                      The implementation of Task by using modern browser
                      standards like ReactJS, HTML5, and JavaScript. Achieving
                      the team’s goals applying agile development practices.
                      Documenting and communicating best practices. Perform
                      application development build tasks and perform
                      application coding Fix defects identified through every
                      support
                    </p>
                    <p>
                      Web Technologies used : ReactJs, Redux, Javascript,
                      Bootstrap, MySql.
                    </p>
                  </details>
                  <p>Bangalore, Karnataka, India</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    <a
                      href="https://drive.google.com/file/d/1PsCN2Xc6UVfP_SiUvytvTRsIkwoiILSB/view?usp=share_link"
                      className="ff-jose my-1 text-red text-decoration-none"
                    >
                      Web Application Developer Internship
                    </a>
                  </h4>
                  <h6 className="blue-label px-2 py-1">Jan 2022 - June 2022</h6>
                  <p className="m-0">InfyNow Software Solutions LLP</p>
                  <details>
                    <p className="text-justify">
                      Participate in conception, design, development,
                      implementation and deployment of web-based user interface
                      systems. Direct involvement in elements of design,
                      development and maintenance of website. Taking critiques
                      for design and development. Fix defects identified through
                      every support.
                    </p>
                  </details>
                  <p>Belagavi, Karnataka, India</p>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h4 className="ff-jose">Languages Known</h4>
              <div className="row">
                <ul className="col mx-5">
                  <li>
                    <h5>English</h5>
                  </li>
                  <li>
                    <h5>Hindi</h5>
                  </li>
                </ul>
                <ul className="col mx-5">
                  <li>
                    <h5>Kannada</h5>
                  </li>
                  <li>
                    <h5>Konkani</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h4 className="ff-jose">Interests</h4>
              <div className="row">
                <ul className="col ms-5">
                  <li>
                    <h5>Pencil Art</h5>
                  </li>
                  <li>
                    <h5>Bike Riding</h5>
                  </li>
                </ul>
                <ul className="col ms-5">
                  <li>
                    <h5>Crafting</h5>
                  </li>
                  <li>
                    <h5>Reading Books</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Resume;
