//lets undestand concept of api calls in javascript
// //API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other.
// //APIs are used to access web services, databases, and other resources over the internet.

//example 

//i want to fetch data from a url   ,from a pet facts api

 async function getJoke() {
      const apiURL = "https://official-joke-api.appspot.com/random_joke";
        // URL of the API endpoint

      try {
        const response = await fetch(apiURL); 
        console.log("response :"+response);         // Wait for the response
        const data = await response.json(); // Parse the JSON data because the response is in json format
   // means readable stream of data
        console.log("data :"+data); // Parse the JSON data
        console.log("status :"+response.status); // Log the status of the response
        if(response.status !== 200) {  
            throw new Error("Failed to fetch joke");
            } else {
            console.log("response.ok :"+response.ok); // Log if the response is ok
        }
        console.log("data.setup :"+data.setup); // Log the setup of the joke
        console.log("data.punchline :"+data.punchline); // Log the punchline of the joke
        const jokeText = `${data.setup} - ${data.punchline}`;// Construct the joke text
        console.log("jokeText :"+jokeText); // Log the joke text
        document.getElementById("joke").innerHTML = `<h2>${jokeText}</h2>`; // Display the joke in the HTML element with id "joke"
        if (response.ok) {
          console.log("Joke fetched successfully!");
        }
      } catch (error) {
        console.error("Error fetching joke:", error);
        document.getElementById("joke").innerText = "Failed to fetch joke.";
      }
    }

    // Add event listener to the button
    document.getElementById("jokeBtn").addEventListener("click", getJoke);