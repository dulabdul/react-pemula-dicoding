import React from "react";
import { createRoot } from "react-dom/client";

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      name: "",
      email: "",
      gender: "Man",
    };
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  onNameChangeEventHandler(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        name: e.target.value,
      };
    });
  }

  onEmailChangeEventHandler(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        email: e.target.value,
      };
    });
  }
  onGenderChangeEventHandler(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        gender: e.target.value,
      };
    });
  }
  onSubmitEventHandler(e) {
    // menghentikan aksi default dari tombol submit
    e.preventDefault();

    const message = `
      Name : ${this.state.name}
      Email: ${this.state.email}
      Gender : ${this.state.gender}
      `;

    alert(message);
  }
  render() {
    return (
      <div className="form-container">
        <h1>Register Form</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <label for="name">Name:</label>
          <input type="text" id="name" value={this.state.name} onChange={this.onNameChangeEventHandler} />
          <br />
          <label for="email">Email:</label>
          <input type="email" id="email" value={this.state.email} onChange={this.onEmailChangeEventHandler} />
          <br />
          <label for="gender">Gender:</label>
          <select name="gender" id="gender" value={this.state.gender} onChange={this.onGenderChangeEventHandler}>
            <option value="Man">Man</option>
            <option value="Female">Female</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
const root = createRoot(document.querySelector("#root"));
root.render(<MyForm />);
