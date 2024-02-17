import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="Home">
        <div className="landingBox">
          <div className="textBox">
            <h1>
              Empowering <br /> Digital <br /> Transformation
            </h1>
            <p>
              Our expertise lies in providing end to enddigital <br />
              transformation services for business. Our unbaised <br />
              advisory approach helps our clients achieve growth <br />
              and success in their industries. Our services include <br />
              Stratergy & Advisory , Process Reengineering & <br />
              Optimisation and Technology Implementation.
            </p>
          </div>
          <div className="rightSlider"></div>
          <Image
            src="./images/butterfly.svg"
            height="299"
            width="366"
            alt=""
            className="butterfly"
          />
          <Image
            src="./images/butStone1.svg"
            height="208"
            width="239"
            alt=""
            className="butStone1"
          />
          <Image
            src="./images/butStone2.svg"
            height="178"
            width="329"
            alt=""
            className="butStone2"
          />
          <Image
            src="./images/butStone3.svg"
            height="162"
            width="152"
            alt=""
            className="butStone3"
          />
        </div>
      </div>
      {/* Screens */}
      <div id="About">
        <div className="mainLineImg">
          <div className="AboutUs">
            <div className="AboutUsBox">
              <h1 className="headTxt">About Us</h1>
              <h2 className="detailTxt">
                We are specialized in Business <br /> & Technology Consulting
              </h2>
              <p className="para">
                Founded in 2019 as DPCon Solutions by enterprises professionals
                with over 25years of experience. Recently <br />
                have undertaken a rebranding excersice and have change the
                firm's name to Taciti Consulting. <br />
                We offer unbaised advisory services and comprehensive end-to-end
                digital transformation solutuons. We have <br />
                worked with some of the biggest brands accross the globe through
                the process and Technology Innovations. <br />
                The have helped them flourish as well as add value to the
                internal and external takeholders.
              </p>
              <button className="ContactBtn">Contact Us</button>
            </div>
          </div>
          {/* Services */}
          <div id="Services">
            <div className="AboutUs">
              <div className="AboutUsBox">
                <h1 className="headTxt">Recent Client Engagments</h1>
                <h2 className="detailTxt2">
                  End to End Digital Transformation Service
                </h2>
                <div className="cardsBoxFlex">
                  <div className="cardIn">
                    <Image
                      src="./images/orderCash.svg"
                      className="cardImg"
                      height="110"
                      width="110"
                      alt=""
                    />
                    <h1 className="carHeadTxt">
                      Order-to-order <br /> Transformation
                    </h1>
                    <p className="parain">
                      A recent collabration with a client from the enviromental
                      and life sciences industry involved and impactful
                      "Order-to-Cash Assesment and Process Improvment
                      initiative"
                    </p>
                  </div>
                  <div className="cardIn">
                    <Image
                      src="./images/businessImg.svg"
                      className="cardImg"
                      height="110"
                      width="110"
                      alt=""
                    />
                    <h1 className="carHeadTxt">
                      Business Transformation
                      <br /> Through Cloud{" "}
                    </h1>
                    <p className="parain">
                      We spreadhead a worldwide transformation of a Learning
                      management System (LMS) for a prominent global technology
                      leader.
                    </p>
                  </div>
                  <div className="cardIn">
                    <Image
                      src="./images/orderCash.svg"
                      className="cardImg"
                      height="110"
                      width="110"
                      alt=""
                    />
                    <h1 className="carHeadTxt">
                      SAP S / 4HANA Led <br /> Digital Transformation
                    </h1>
                    <p className="parain">
                      The primary objectiveis to streamline operations by
                      minimizing complexety, fostering process harmonization
                      among various business units, and establishing
                      standardized procedures through a unified digital core
                      built on SAP S/4HANA.
                    </p>
                  </div>
                </div>
                <button className="ContactBtn">Show all</button>
              </div>
            </div>
          </div>
          {/* Industries */}
          <div id="Industries">
            <div className="AboutUs">
              <div className="AboutUsBox">
                <h1 className="headTxt">Case Studies</h1>
                <h2 className="detailTxt2">Our Projects make Us Proud</h2>
                <div className="cardsBoxFlex">
                  <div className="cardInCase">
                    <div className="cardhead">
                      <Image
                        src="../images/stratergy.svg"
                        height="210"
                        width="100"
                        className="cardImgCase"
                        alt=""
                      />
                    </div>
                    <div className="cardbody">
                      <h1 className="caseheadTxt">Stratergy & Advisory</h1>
                      <p className="casePara">
                        Optimizing Working Capital, An <br /> Order to Cash
                        transformation for a<br /> leading Life Sciences majot.
                      </p>
                      <h2 className="caseStudy">
                        View Case Study
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="rgba(8, 106, 216, 1)"
                          className="bi bi-arrow-right mx-3"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          />
                        </svg>
                      </h2>
                    </div>
                  </div>
                  <div className="cardInCase">
                    <div className="cardhead">
                      <Image
                        src="../images/erp.svg"
                        height="210"
                        width="100"
                        className="cardImgCase"
                        alt=""
                      />
                    </div>
                    <div className="cardbody">
                      <h1 className="caseheadTxt">ERP Transformation</h1>
                      <p className="casePara">
                        A large scale SAP S/ 4 HANA led <br />
                        digital transformation for a US<br />
                        based manufacturer.
                      </p>
                      <h2 className="caseStudy">
                        View Case Study
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="rgba(8, 106, 216, 1)"
                          className="bi bi-arrow-right mx-3"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          />
                        </svg>
                      </h2>
                    </div>
                  </div>
                  <div className="cardInCase">
                    <div className="cardhead">
                      <Image
                        src="../images/erp.svg"
                        height="210"
                        width="100"
                        className="cardImgCase"
                        alt=""
                      />
                    </div>
                    <div className="cardbody">
                      <h1 className="caseheadTxt">Technology Services</h1>
                      <p className="casePara">
                        Empowering services with <br />
                        No-code/Low-Code (MS power <br />
                        platform) for a manufacturing<br />
                        leaser.
                      </p>
                      <h2 className="caseStudy">
                        View Case Study
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="rgba(8, 106, 216, 1)"
                          className="bi bi-arrow-right mx-3"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          />
                        </svg>
                      </h2>
                    </div>
                  </div>
                </div>
                <button className="ContactBtn">Show all</button>
              </div>
            </div>
          </div>
        </div>
        {/* Increamental Improvments */}
        <div id="Increamental">
          <div className="xaxisSlide">
            <div className="contentBox">
              <h1 className="incremanetalHeadTxt">We are passionate about accelerated <br /> & increamental improvements.</h1>
              <div className="borderROundedRec">
                <div className="innerBox">
                  <Image src='../images/client.svg' height="70" width="70" alt="" />
                  <div className="contentCard">
                    <h1 className="num">11</h1>
                    <h1 className="text">Clients</h1>
                  </div>
                </div>
                <div className="innerBox">
                  <Image src='../images/completed.svg' height="70" width="70" alt="" />
                  <div className="contentCard">
                    <h1 className="num">24</h1>
                    <h1 className="text">Completed Projects</h1>
                  </div>
                </div>
                <div className="innerBox">
                  <Image src='../images/ongoing.svg' height="70" width="70" alt="" />
                  <div className="contentCard">
                    <h1 className="num">36</h1>
                    <h1 className="text">Ongoing Projects</h1>
                  </div>
                </div>
                <div className="innerBox">
                  <Image src='../images/expert.svg' height="70" width="70" alt="" />
                  <div className="contentCard">
                    <h1 className="num">160</h1>
                    <h1 className="text">Experts at work</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bookBox">
          <div className="row">
            <div className="col-md-6 text-center mb-3">
              <Image src="../images/book.svg" height="700" width="550" alt="" className="book" />
            </div>
            <div className="col-md-6 mb-3">
              <div className="reconBox">
                <h1 className="headingReconTxt">Recognition</h1>
                <p className="recogPara">Lam Research acknowlodges <br/>
                  our expertise and significant <br/> 
                  contribution to their digital <br/>
                  transformation journey
                </p>
                <p className="liteTxt">With recenter branding excersice, we have changes our <br/>
                  Company name from DPcon Solution Tactiti Consulting.
                </p>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="TecBox">
                <h1><span>Our</span> Technology Partner</h1>
                <div className="belowBox">
                    <div className="textBox">
                      <h1>SAP</h1>
                      <h2>Silver partner</h2>
                    </div>
                    <div className="textBox">
                      <h1>Corner Stone</h1>
                      <h2>Teaming Agrement</h2>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
