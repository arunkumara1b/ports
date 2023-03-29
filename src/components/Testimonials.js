import React, { Component } from "react";
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>My Resume</span>
              </h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {resumeData.testimonials &&
                    resumeData.testimonials.map((item, index) => {
                      return (
                        <li key={index}>
                          <blockquote>
                            <p>
                              {item.description}
                            </p>
                            <a
                              href={item.name}
                              target="_blank"
                              style={{
                                cursor: "pointer",
                                color: "#fff",
                                fontSize: "20px",
                                textAlign: "center",
                              }}
                            >
                              {item.name}
                            </a>
                          </blockquote>
                        </li>
                      );
                    })}
                </ul>
              </div>{" "}
              {/* div.flexslider ends */}
            </div>{" "}
            {/* div.flex-container ends */}
          </div>{" "}
          {/* row ends */}
        </div>{" "}
        {/* text-container ends */}
      </section>
    );
  }
}
