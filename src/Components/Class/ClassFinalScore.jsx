import { Component } from "react";

export class ClassFinalScore extends Component {
  render() {
    const { correctCount, totalCount } = this.props;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
