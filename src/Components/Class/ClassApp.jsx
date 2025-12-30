import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    fishesLeft: ["trout", "salmon", "tuna", "shark"],
  };

  handleCorrect = () => {
    const { fishesLeft, correctCount } = this.state;
    this.state({
      correctCount: correctCount + 1,
      fishesLeft: fishesLeft.slice(1),
    });
  };

  handleIncorrect = () => {
    this.state({ incorrectCount: this.state.incorrectCount + 1 });
  };

  render() {
    const { correctCount, incorrectCount, fishesLeft } = this.state;
    const gameOver = fishesLeft.length === 0;
    return (
      <>
        {!gameOver && (
          <>
            <ClassScoreBoard
              correctCount={correctCount}
              incorrectCount={incorrectCount}
              answersLeft={fishesLeft}
            />

            <ClassGameBoard
              onCorrectGuess={this.handleCorrect}
              onWrongGuess={this.handleIncorrect}
            />
          </>
        )}

        {gameOver && (
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={correctCount + incorrectCount}
          />
        )}
      </>
    );
  }
}
