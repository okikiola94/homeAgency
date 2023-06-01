import React, { useState } from "react";
import Cover from "./images/cover.jpg";
import Hash from "./images/hash.png";
import ProfileImage from "./images/profileOwner.png";
import "./video.scss";

const testimonyData = [
  {
    testimony:
      "First and foremost, the process of finding suitable tenants was " +
      "efficient and hassle-free. The property management team demonstrated " +
      "professionalism and expertise in screening potential tenants, " +
      "ensuring that we found reliable individuals who would take good care " +
      "of our property.",
    writer: "AA.Jimoh",
    position: "Manager",
  },
  {
    testimony:
      "Once the tenants were settled in, the property management team continued to impress us with their dedication and commitment. Regular inspections were conducted to ensure that the property was well-maintained and any issues were promptly addressed. Communication with both the tenants and us, the property owners, was always clear and transparent.",
    writer: "Harry Wilson",
    position: "Property Owner",
  },
  {
    testimony:
      "Moreover, the financial aspect of renting out our property has been seamless." +
      " The property management team ensured that rent was collected on time and any necessary financial documentation was provided promptly." +
      " This has alleviated any concerns we had regarding rental income and allowed us to focus on other aspects of property ownership.",
    writer: "Harry Wilson",
    position: "Visitor",
  },
];

const TestimonySection = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const testimonyPerPage = 1;

  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  const currentTestimony = testimonyData[pageNumber - 1]; // Access the current testimonial based on pageNumber

  return (
    <div className="testimonyWrapper">
      <div className="testimonySlideWrap">
        <div key={pageNumber} className="testimonySlide">
          <div className="testimonyNote">
            <img src={Hash} alt="Hash" className="Hash" />
            <p>{currentTestimony.testimony}</p>
          </div>

          <div className="profileDetails">
            <span className="profileBorder">
              <img src={ProfileImage} alt="ProfileImage" />
            </span>
            <div>
              <h4 className="profileName">{currentTestimony.writer}</h4>
              <small className="profileTitle">
                {currentTestimony.position}
              </small>
            </div>
          </div>
        </div>
        <div className="controls">
          <button
            className="btn"
            onClick={() => handlePageChange(pageNumber - 1)}
            disabled={pageNumber === 1}
          ></button>
          <button
            className="btn"
            onClick={() => handlePageChange(pageNumber + 1)}
            disabled={
              pageNumber === Math.ceil(testimonyData.length / testimonyPerPage)
            }
          ></button>
        </div>
      </div>
      <div className="testimonyImageWrap">
        <img src={Cover} alt="textimony video" />
      </div>
    </div>
  );
};

export default TestimonySection;
