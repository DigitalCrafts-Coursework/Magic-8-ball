import React, { useState } from "react";

export default function QuestionForm(props) {
  const [question, setQuestion] = useState("");

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const submitChange = (event) => {
    event.preventDefault();
    props.newQuestion(question);
  };

  return (
    <div>
      <form onSubmit={submitChange}>
        <label htmlFor="question">
          <input
            type="text"
            placeholder="type question"
            value={question}
            onChange={handleChange}
          />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
}
