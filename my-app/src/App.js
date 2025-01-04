import React, { Component } from 'react';
import './App.css';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, multiplier: 1 };
  }

  handleIncrease = () => {
    this.setState((prevState) => ({ count: prevState.count + prevState.multiplier }));
  };

  handleDecrease = () => {
    this.setState((prevState) => ({ count: prevState.count - prevState.multiplier }));
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleSetMultiplier = (value) => {
    this.setState({ multiplier: value });
  };

  render() {
    const { count, multiplier } = this.state;

    return (
        <div className="counter-container">
          <h1>Лічильник</h1>
          <h2>Значення: {count}</h2>
          <h3>Доданок: {multiplier}</h3>

          <div>
            <button onClick={this.handleIncrease}>Збільшити</button>
            <button onClick={this.handleDecrease}>Зменшити</button>
            <button onClick={this.handleReset}>Скинути</button>
          </div>

          <div className="multiplier-buttons">
            <h4>Обрати доданок:</h4>
            {[1, 5, 10].map((value) => (
                <button
                    key={value}
                    onClick={() => this.handleSetMultiplier(value)}
                    style={{
                      backgroundColor: multiplier === value ? 'lightblue' : 'white',
                    }}
                >
                  {value}
                </button>
            ))}
          </div>
        </div>
    );
  }
}

export default ClickCounter;
