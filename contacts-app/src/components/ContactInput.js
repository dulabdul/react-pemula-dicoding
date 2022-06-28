import React from "react";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tag: "",
      imageUrl: "",
    };
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHander = this.onTagChangeEventHander.bind(this);
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
  onTagChangeEventHander(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        tag: e.target.value,
      };
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addContact(this.state);
  }
  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Name" onChange={this.onNameChangeEventHandler} value={this.state.name}></input>
        <input type="text" placeholder="Tag" onChange={this.onTagChangeEventHander} value={this.state.tag}></input>
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
