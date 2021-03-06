import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEnteringInForm, setIsEnteringInForm] = useState();
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // if (enteredAuthor === "" && enteredText === "") {
    //   alert("Please enter quote and author");
    //   return;
    // }

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  const formOnFocusHandler = (e) => {
    setIsEnteringInForm(true);
  };
  const onSubmitBtnClickHandler = (e) => {
    setIsEnteringInForm(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isEnteringInForm}
        message="Are you sure? data entered will be lost"
      ></Prompt>
      <Card>
        <form
          onFocus={formOnFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={onSubmitBtnClickHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
