import React, { useState, useEffect } from "react";
import QuestionForm from "./components/QuestionForm";
import Response from "./components/Response";

function App() {
  const [answer, setAnswer] = useState("");

  const newQuestion = (question) => {
    let params = encodeURIComponent(question);
    let url = "https://8ball.delegator.com/magic/JSON/" + params;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.magic.answer);
        setAnswer(json.magic.answer);
      });
  };

  return (
    <div>
      <div>Go on... Ask the magic 8-ball something</div>
      <QuestionForm newQuestion={newQuestion} />
      <Response answer={answer} />
    </div>
  );
}

export default App;
