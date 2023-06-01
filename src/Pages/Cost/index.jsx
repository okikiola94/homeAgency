import "./cost.scss";
import { RiMoneyDollarCircleLine, RiShieldStarLine } from "react-icons/ri";
import { MdOutlineHomeWork, MdOutlinePayments } from "react-icons/md";
import { TbStack2, TbPlant } from "react-icons/tb";
import LivingCost from "./images/livingcost.png";

const Cost = () => {
  return (
    <div className="CostContainer">
      <h1 className="CostContainerHeading">
        <span className="CostContainerHeadingSpan">minimum living cost </span>
        takes care of everything
      </h1>
      <div className="CostContainerFlex">
        <img src={LivingCost} alt="livingcost" />
        <div className="CostContainerGridContainer">
          <div className="CostContainerGrid" id="CostContainerGrid1">
            <span className="LivingCostSpan">
              <button className="LivingCostSpanImgWrap">
                <RiMoneyDollarCircleLine className="livingcosticon" />
              </button>
              <p className="livingcostparagraph">Pay as Little as possible!</p>
            </span>
            <span className="LivingCostSpan">
              <button className="LivingCostSpanImgWrap">
                <MdOutlineHomeWork className="livingcosticon" />
              </button>
              <p className="livingcostparagraph">Enjoy wisdom of community!</p>
            </span>
            <span className="LivingCostSpan">
              <button className="LivingCostSpanImgWrap">
                <TbStack2 className="livingcosticon" />
                {/* <img src={Vector2} alt="" className="LivingCostImg" /> */}
              </button>
              <p className="livingcostparagraph">
                Let's somebody else take care of Landlord!
              </p>
            </span>
            <span className="LivingCostSpan">
              <button className="LivingCostSpanImgWrap">
                <TbPlant className="livingcosticon" />
              </button>
              <p className="livingcostparagraph">Enjoy peaceful Environment!</p>
            </span>
            <span className="LivingCostSpan">
              <button className="LivingCostSpanImgWrap">
                <RiShieldStarLine className="livingcosticon" />
              </button>
              <p className="livingcostparagraph">Stay Safe! Save Money!</p>
            </span>
            <span className="LivingCostSpan">
              <button className="LivingCostSpanImgWrap">
                <MdOutlinePayments className="livingcosticon" />
              </button>
              <p className="livingcostparagraph">Pay for what you use !</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cost;
