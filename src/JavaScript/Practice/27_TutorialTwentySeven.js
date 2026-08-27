// To run this file:
// node src/JavaScript/Practice/27_TutorialTwentySeven.js

// Fetch API data with async and await
// With async and await
const fetchUserInfo = async ()=>{
    const response = await fetch("https://reqres.in/api/users?page=2");
    if(!response.ok){
        throw new Error("User data not found");
    }
    // Parse Json Response
    const data = await response.json(); // Whenever a method returns the Promise we have to use the "await"

    console.log(data)
}

// Calling the function
fetchUserInfo()

// Without async and await -> It will throw exception
const fetchUserInfoTwo =  ()=>{
    try{
        const response =  fetch("https://reqres.in/api/users?page=2");
        if(!response.ok){
            throw new Error("User data not found");
        }
        // Parse Json Response
        const data =  response.json(); // Whenever a method returns the Promise we have to use the "await"

        console.log(data)
    }
    catch(error){
        console.log("Error", error);
        console.log("*****************************************************************************************************")
    }

}

// Calling the function
fetchUserInfoTwo()