import React from "react";

// STYLES
import "./forms.scss";
const Form = () => {
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="FormContainer">
      <div className="FormContainerHeader">
        <p className="FormHeaderParagraph">
          Your property with us and be Confident that Your Room will be Filled
          Out!
        </p>
      </div>
      <div className="Forms">
        <h2 className="FormHeader">Add A New Property</h2>
        <form action="submit">
          <div className="FormInputSelect">
            <div className="InputField">
              <label htmlFor="Name">
                {" "}
                Name <span className="HashSpan">*</span>{" "}
              </label>
              <input type="text" placeholder="Enter Name" />
            </div>
            <div className="InputField">
              <label htmlFor="Address">
                {" "}
                Address <span className="HashSpan">*</span>{" "}
              </label>
              <input type="text" placeholder="Enter Address" />
            </div>
            <div className="InputField">
              <label htmlFor="Unit Number">
                Unit Number <span className="HashSpan">*</span>{" "}
              </label>
              <input type="text" placeholder="Enter Unit" />
            </div>
            <div className="InputField">
              <label htmlFor="Unit Number">
                City <span className="HashSpan">*</span>{" "}
              </label>
              <select id="Types" className="NeighborhoodInput">
                <option selected>Select City</option>
                <option value="AP">new york</option>
                <option value="CO">arkansas</option>
                <option value="CO">michigan</option>
                <option value="CO">delaware</option>
                <option value="CO">philadephia</option>
              </select>
            </div>
            <div className="InputField">
              <label htmlFor="Unit Number">
                state <span className="HashSpan">*</span>{" "}
              </label>
              <select id="Types" className="NeighborhoodInput">
                <option selected>Select state</option>
                <option value="AP">texas</option>
                <option value="CO">florida</option>
                <option value="CO">california</option>
                <option value="CO">alaska</option>
                <option value="CO">hawaii</option>
              </select>
            </div>
            <div className="InputField">
              <label htmlFor="Unit Number">
                room type <span className="HashSpan">*</span>{" "}
              </label>
              <select id="Types" className="NeighborhoodInput" required>
                <option selected>Select room type</option>
                <option value="AP">single</option>
                <option value="CO">double</option>
                <option value="CO">triple</option>
                <option value="CO">queen</option>
                <option value="CO">king</option>
              </select>
            </div>
            <div className="InputField">
              <label htmlFor="Unit Number">
                price <span className="HashSpan">*</span>{" "}
              </label>
              <select id="Types" className="NeighborhoodInput">
                <option selected>enter price</option>
                <option value="AP">150-200</option>
                <option value="CO">250-300</option>
                <option value="CO">350-400</option>
                <option value="CO">500-800</option>
                <option value="CO">1500-3000</option>
              </select>
            </div>
            <div className="InputField">
              <label htmlFor="Unit Number">
                room type <span className="HashSpan">*</span>{" "}
              </label>
              <select id="Types" className="NeighborhoodInput">
                <option selected>Select room type</option>
                <option value="AP">single</option>
                <option value="CO">double</option>
                <option value="CO">triple</option>
                <option value="CO">queen</option>
                <option value="CO">king</option>
              </select>
            </div>
          </div>
          <div className="TextareaFileUpload">
            <div className="InputField">
              <label htmlFor="Unit Number">
                Description <span className="HashSpan">*</span>{" "}
              </label>
              <textarea
                type="text"
                placeholder="Enter Description"
                name="message"
                required
              />{" "}
            </div>

            <div className="InputField">
              <label htmlFor="myfile">Upload Photos</label>
              <button onClick={handleClick} className="fileUploadPlaceHolder">
                Drag your images here, or{" "}
                <span className="fileUploadSpan">browse</span>
                <p>Supported: JPG, JPEG, PNG</p>
              </button>
              <input
                type="file"
                id="myfile"
                name="myfile"
                ref={hiddenFileInput}
                style={{ display: "none" }}
              ></input>
            </div>
          </div>
          <input type="submit" value="add new property" className="btnSubmit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
