import React from 'react';

class NumberFacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: "",
      fact: ""
     };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      num: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      method: 'GET',
      url: `http://numbersapi.com/${this.state.num}`
    }).then((res) => {
      this.setState({ fact: res });
    });
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
