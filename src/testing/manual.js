import React, { useState } from 'react';
 

function Manual() {
  // Define initial form data state
  const initialFormData = {
    name: '',
    email: '',
    age: '',
    occupation: '',
    rating: 'never',
    liked: [],
    remark: '',
  };

   

  const [formData, setFormData] = useState(initialFormData);
  
  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox inputs separately
    if (type === 'checkbox') {
      const liked = [...formData.liked];

      if (checked) {
        liked.push(value);
      } else {
        const index = liked.indexOf(value);
        if (index !== -1) {
          liked.splice(index, 1);
        }
      }

      setFormData({ ...formData, liked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send the form data
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((value) => {
          formDataToSend.append(key, value);
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    // You can now send formDataToSend to your desired endpoint using fetch
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx3jTOI2UjpyZXDT1l3rN0kS6D8fIdslkD15UHnasO_qoi6SQ4lZ_htduElQtogyQtk/exec';

    fetch(scriptURL, { method: 'POST', body: formDataToSend })
      .then((response) => {
        if (response.ok) {
          alert('Thank you! Your form is submitted successfully.');
          // Optionally, reset the form fields
          setFormData({
            name: '',
            email: '',
            age: '',
            occupation: '',
            rating: 'never',
            liked: [],
            remark: '',
          });
        } else {
          alert('There was an error submitting the form.');
        }
      })
      .catch((error) => console.error('Error!', error.message));
  };

  return (
    <main>
      <header>
        <h1 id="title">Survey Form</h1>
        <p id="description">Thank You For Taking Your Time To Give Us Feedback</p>
      </header>
      
      {/* <Feature/> */}
      <form id="survey-form" onSubmit={handleSubmit}>
        {/* Form fields */}
         
     
        <div className="form-group">
          <label htmlFor="name" id="name-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
 
  <div className="form-group">
  <label htmlFor="email" id="email-label">
    Email
  </label>
  <input
    type="email"
    name="email"
    id="email"
    placeholder="Enter Your Email"
    value={formData.email}
    onChange={handleInputChange}
    required
  />
        </div>
 
<div className="form-group">
  <label htmlFor="age" id="age-label">
    Age
  </label>
  <input
    type="number"
    name="age"
    id="age"
    placeholder="Enter Your Age"
    value={formData.age}
    onChange={handleInputChange}
    required
  />
</div>

<div className="form-group">
  <label htmlFor="occupation" id="occupation-label">
    Occupation
  </label>
  <input
    type="text"
    name="occupation"
    id="occupation"
    placeholder="Enter Your Occupation"
    value={formData.occupation}
    onChange={handleInputChange}
    required
  />
</div>

<div className="form-group">
  <label htmlFor="rating" id="rating-label">
    How often do you use our product?
  </label>
  <select
    name="rating"
    id="rating"
    value={formData.rating}
    onChange={handleInputChange}
  >
    <option value="never">Never</option>
    <option value="rarely">Rarely</option>
    <option value="sometimes">Sometimes</option>
    <option value="often">Often</option>
    <option value="very often">Very often</option>
  </select>
</div>

<div className="form-group">
  <label htmlFor="liked" id="liked-label">
    What do you like most about our product?
  </label>
  <div className="checkbox-group">
    <input
      type="checkbox"
      name="liked"
      id="liked-1"
      value="easy to use"
      checked={formData.liked.includes('easy to use')}
      onChange={handleInputChange}
    />
    <label htmlFor="liked-1">Easy to use</label>
    <input
      type="checkbox"
      name="liked"
      id="liked-2"
      value="feature-rich"
      checked={formData.liked.includes('feature-rich')}
      onChange={handleInputChange}
    />
    <label htmlFor="liked-2">Feature-rich</label>
    <input
      type="checkbox"
      name="liked"
      id="liked-3"
      value="affordable"
      checked={formData.liked.includes('affordable')}
      onChange={handleInputChange}
    />
    <label htmlFor="liked-3">Affordable</label>
  </div>
</div>

        <div className="form-group">
          <label htmlFor="remark">Remarks</label>
          <textarea
            name="remark"
            id="remark"
            placeholder="Tell Us How Can We Improve.."
            value={formData.remark}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <button id="submit" type="submit">
            Submit
          </button>
          
        </div>
      </form>

    
    </main>
  );
}

export default Manual;
