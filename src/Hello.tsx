import React, { SyntheticEvent } from 'react';

interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
  state = { currentEnthusiasm: this.props.enthusiasmLevel || 1 };
  onIncrement = (event: SyntheticEvent) => {
    console.log(event);
    this.updateEnthusiasm(1);
  };
  onDecrement = (event: SyntheticEvent) => {
    console.log(event.target);
    this.updateEnthusiasm(-1);
  };
  getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
  }
  render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + this.getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }
  updateEnthusiasm(change: number) {
    this.setState((currentState) => {
      return { currentEnthusiasm: currentState.currentEnthusiasm + change };
    });
  }
}

export default Hello;
