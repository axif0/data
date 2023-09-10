import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      financialHabits: '',
      mentalHabits: '',
      message: ''
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform your fetch request here
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx3jTOI2UjpyZXDT1l3rN0kS6D8fIdslkD15UHnasO_qoi6SQ4lZ_htduElQtogyQtk/exec';
    
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('age', this.state.age);
    formData.append('financialHabits', this.state.financialHabits);
    formData.append('mentalHabits', this.state.mentalHabits);
    formData.append('message', this.state.message);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => alert("Thank you! Your form is submitted successfully."))
      .then(() => { window.location.reload(); })
      .catch(error => console.error('Error!', error.message));
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h4>Contact Us</h4>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="financialHabits"
            placeholder="Financial Habits"
            value={this.state.financialHabits}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="mentalHabits"
            placeholder="Mental Habits"
            value={this.state.mentalHabits}
            onChange={this.handleInputChange}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            value={this.state.message}
            onChange={this.handleInputChange}
          ></textarea>
          <input type="submit" value="Submit" id="submit" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
