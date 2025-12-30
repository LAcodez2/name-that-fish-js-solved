import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const initialFishes = ["trout", "salmon", "tuna", "shark"];

  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [fishesLeft, setFishesLeft] = useState(initialFishes);

  const gameOver = fishesLeft.length === 0;

  return (
    <>
      {!gameOver && (
        <>
          <FunctionalScoreBoard
            correctCount={correct}
            incorrectCount={incorrect}
            answersLeft={fishesLeft}
          />

          <FunctionalGameBoard
            onCorrectGuess={() => {
              setCorrect(correct + 1);
              setFishesLeft(fishesLeft.slice(1));
            }}
            onWrongGuess={() => setIncorrect(incorrect + 1)}
          />
        </>
      )}

      {gameOver && (
        <FunctionalFinalScore
          correctCount={correct}
          totalCount={correct + incorrect}
        />
      )}
    </>
  );
}
