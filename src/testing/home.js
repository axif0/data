import React from 'react';
import Response from './responce';
import Feature from './feature';
import { useNavigate } from 'react-router-dom'; 

function Home() {
    const navigate = useNavigate(); // Get the navigate function

    const handleNavigateToQuestions = () => {
      // Call the navigate function to go to the /questions route
      navigate('/questions');
    };

  return (
    <main>
      <header>
        <h1 id="title">Survey Form</h1>
        <p id="description">Thank You For Taking Your Time To Give Us Feedback</p>
        <button onClick={handleNavigateToQuestions}>Manual Input</button> {/* Button to navigate */}
        <Response/>
        <Feature/>
      </header>

    
    </main>
  );
}

export default Home;
