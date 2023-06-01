import { useState } from "react";
import "./Pagination.scss";
import Properties1 from "./images/properties1.png";
import Properties2 from "./images/properties2.png";
import Properties3 from "./images/properties3.png";
import Properties4 from "./images/properties4.png";
import Properties5 from "./images/properties5.png";
import Properties6 from "./images/properties6.png";
import { MdKingBed } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { TbResize } from "react-icons/tb";

const dummyCards = [
  {
    imageUrl: Properties1,
    altText: "Image 1",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties2,
    altText: "Image 2",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties3,
    altText: "Image 3",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties4,
    altText: "Image 4",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties5,
    altText: "Image 5",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties6,
    altText: "Image 6",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties3,
    altText: "Image 7",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties1,
    altText: "Image 8",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties4,
    altText: "Image 9",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties1,
    altText: "Image 1",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties2,
    altText: "Image 2",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties3,
    altText: "Image 3",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties4,
    altText: "Image 4",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties5,
    altText: "Image 5",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties6,
    altText: "Image 6",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties3,
    altText: "Image 7",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties1,
    altText: "Image 8",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties4,
    altText: "Image 9",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties1,
    altText: "Image 1",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties2,
    altText: "Image 2",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties3,
    altText: "Image 3",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties4,
    altText: "Image 4",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties5,
    altText: "Image 5",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties6,
    altText: "Image 6",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties3,
    altText: "Image 7",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties1,
    altText: "Image 8",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
  {
    imageUrl: Properties4,
    altText: "Image 9",
    title: "2578 Folsom street, san francisco, CA, 94110",
    description: "Private Room",
    number: "$1200/month",
  },
];

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showRemainingCards, setShowRemainingCards] = useState(false);
  const cardsPerPage = 6;
  const remainingCards = dummyCards.slice(cardsPerPage);
  const cardsToDisplay = showRemainingCards
    ? remainingCards
    : dummyCards.slice(
        currentPage * cardsPerPage,
        (currentPage + 1) * cardsPerPage
      );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="PropertiesPagination">
      <div className="PropertNavContainer">
        <h2 className="PropertNavContainerHeading">
          {" "}
          <span className="PropertNavContainerSpan">list</span> of properties
        </h2>
        <button
          className="PropertNavContainerButton"
          onClick={() => setShowRemainingCards(!showRemainingCards)}
        >
          {showRemainingCards ? "Hide" : "View"} all property
        </button>
      </div>
      <div className="CardPaginationContainer">
        <div className="card-pagination">
          {cardsToDisplay.map((card, index) => (
            <div key={index} className="card">
              <img src={card.imageUrl} alt={card.altText} />
              <div className="cardPagination">
                <h3 className="cardPaginationTitle">{card.title}</h3>
                <p className="cardPaginationDescription">{card.description}</p>
                <span className="cardPaginationPrice">{card.number}</span>
              </div>
              <div className="cardPaginationDetails">
                <p className="cardPaginationDetailsBed">
                  <MdKingBed /> 4
                </p>
                <span className="cardPaginationLine"></span>
                <p className="cardPaginationDetailsBed">
                  <GiBathtub /> 2
                </p>
                <span className="cardPaginationLine"></span>
                <p className="cardPaginationDetailsBed">
                  <TbResize /> 2
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="controls">
          <button
            className="prev-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            First
          </button>
          <button
            className="next-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(dummyCards.length / cardsPerPage) - 1
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
