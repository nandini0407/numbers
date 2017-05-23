import React from 'react';

class NumberFacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: "",
      fact: "",
      type: "Choose Fact Type"
     };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      num: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let type = this.state.type;
    type = type === "Choose Fact Type" ? "trivia" : type;
    $.ajax({
      method: 'GET',
      url: `http://numbersapi.com/${this.state.num}/${type}`
    }).then((res) => {
      this.setState({ fact: res });
    });
  }

  selectOption(e) {
    e.preventDefault();
    this.setState({ type: e.target.value });
  }

  render() {
    return (
      <div className="main">
        <form className="form" onSubmit={ this.handleSubmit }>
          <input
            type="text"
            value={ this.state.num }
            onChange={ this.handleChange }
            className="text-box"
            />
          <select value={ this.state.type } onChange={ this.selectOption } className="dropdown">
            <option value="Choose Fact Type" className="dropdown-option">Choose fact type</option>
            <option className="dropdown-option" value="trivia" >trivia</option>
            <option className="dropdown-option" value="math" >math</option>
            <option className="dropdown-option" value="date" >date</option>
            <option className="dropdown-option" value="year" >year</option>
          </select>
          <input
            type="submit"
            value="Get Fact"
            className="submit-button"
            />
        </form>
        <div className="display-fact">
          <h3 className="fact-text">{ this.state.fact }</h3>
        </div>
      </div>
    );
  }
}

export default NumberFacts;
