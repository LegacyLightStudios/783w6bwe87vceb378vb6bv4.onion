var vegetarisch=0
var fleisch=0

function submit(event) {
    // Retrieve input values from the form fields
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const klass = document.getElementById("klass").value.trim();
    const ordercode = document.getElementById("ordercode").value.trim();
    const vegetarian=document.getElementById("vegetarian").value.trim();
    const nonvegetarian=document.getElementById("vegetarian").value.trim();

    // Check if all fields are non-empty
    if (fname && lname && klass && ordercode) {
        // Encode the values after confirming they are non-empty
        const encodedFname = encodeURIComponent(fname);
        const encodedLname = encodeURIComponent(lname);
        const encodedKlass = encodeURIComponent(klass);
        const encodedvegetarian = encodeURIComponent(vegetarian);
        const encodednonvegetarian = encodeURIComponent(nonvegetarian);
        const encodedkey=encodeURIComponent(ordercode)
        
        

        // Construct the URL with query parameters
        const url = `https://zzdhb2qtv2.execute-api.eu-north-1.amazonaws.com/default/test1?firstname=${encodedFname}&familyname=${encodedLname}&class=${encodedKlass}&items=${encodednonvegetarian}x%20Fleisch,${encodedvegetarian}x%20Giftig&verificator=${encodedkey}`;
        console.warn(url)
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // Assuming the server responds with JSON
            })
            .then(data => {
                console.log('Success:', data); // Handle success here
            })
            .catch(error => {
                console.error('Error:', error); // Handle errors here
            });
    } else {
        console.warn('All fields must be filled out to submit the form.');
    }
}
