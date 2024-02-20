import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>End of the game!</h2>
      <p>
        You scored {quizState.score} out of {quizState.questions.length}{" "}
        questions.
      </p>
      <img src={WellDone} alt="End of Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Restart</button>
    </div>
  );
};

export default GameOver;
