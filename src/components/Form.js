import { Component } from "react";

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
  };
  handleChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
    //console.log(this.state.firstname);
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  render() {
    return (
      <div>
        Form
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.firstname}
          ></input>

          <input
            onChange={this.handleLastNameChange}
            type="text"
            value={this.state.lastname}
          ></input>
        </form>
      </div>
    );
  }
}
export default Form;
