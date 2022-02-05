import React from "react";
import "./App.css";
import HitTarget from "./components/HitTarget/HitTarget";


interface IAppState {
  totalHitTarget: number;
  currentTarget: number;
  isGameActive: boolean;
  score: number;
  youWin: boolean;
}

class App extends React.Component<any, IAppState> {
  public readonly state: Readonly<IAppState> = {
    totalHitTarget: 3,
    currentTarget: -1,
    isGameActive: false,
    score: 0,
    youWin: false,
  };

  constructor(props: any) {
    super(props);
    this.randomDraw();
  }

  startStopGame = () => {
    this.setState({ isGameActive: !this.state.isGameActive }, () => {
      if (this.state.isGameActive) {
        this.setState({
          youWin: false,
          currentTarget: -1,
        });
      } else {
        this.setState({ currentTarget: -1, score: 0 });
      }
    });
  };

  scoreUp = () => {
    if (!this.state.isGameActive) return;
    this.setState({ score: this.state.score + 1 }, () => {
      if (this.state.score === 5) {
        this.setState({
          isGameActive: false,
          youWin: true,
          currentTarget: -1,
        });
      }
    });
  };

  scoreDown = () => {
    if (!this.state.isGameActive) return;
    this.setState({ score: this.state.score - 1 });
  };

  private randomDraw() {
    setInterval((_: any) => {
      if (!this.state.isGameActive) return;
      let nextNumber = Math.floor(Math.random() * this.state.totalHitTarget);
      this.setState({ currentTarget: nextNumber });
    }, 1000);
  }

  buttonTitle = () => {
    return this.state.isGameActive ? "Stop" : "Start";
  };

  levelChange = (event: any) => {
    switch (event.target.value) {
      case "easy":
        this.setState({ totalHitTarget: 3 });
        break;
      case "medium":
        this.setState({ totalHitTarget: 5 });
        break;
      case "hard":
        this.setState({ totalHitTarget: 8 });
        break;
    }
  };

  createHitTargets = () => {
    let targets = [];
    for (let i = 0; i < this.state.totalHitTarget; i++) {
      targets.push(
        <HitTarget
          target={i}
          currentTarget={this.state.currentTarget}
          scoreUp={() => {
            this.scoreUp();
          }}
          scoreDown={() => {
            this.scoreDown();
          }}
        ></HitTarget>
      );
    }
    return targets;
  };

  render() {
    return (
      <div id="outer">
        <h1>Whack a mole!!</h1>
        <label>Choose a level:</label>

        <select onChange={this.levelChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button onClick={this.startStopGame}>{this.buttonTitle()}</button>
        <div className="score-data">Total Score : {this.state.score}</div>
        {this.state.youWin === true ? (
          <h1>You Won!!</h1>
        ) : (
          <section>
            <div className="target-container">
              {this.createHitTargets()}
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default App;
