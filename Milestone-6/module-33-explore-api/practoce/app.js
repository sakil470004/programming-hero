function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
        .then(data => displayData(data))
}
function displayData(data) {
    const postConstainer = document.getElementById('post-list');
    for (const datam of data) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h3> ${datam.title}</h3>
        <p>${datam.body}</p>
        
        `
        postConstainer.appendChild(div)
    }
}
getData()

// what is api?
// An application programming interface is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software. A document or standard that describes how to build or use such a connection or interface is called an API specification.

// What are the HTTP methods supported by REST?
// The REST BC supports a subset of HTTP methods to manipulate the requests and responses processed by GlassFish ESB. Certain HTTP methods, such as GET and HEAD, do not make any changes to the resource or to the message and are thus considered to be “safe”. Other method are idempotent, which means that the results of multiple identical request are the same as for a single request. All supported methods except POST fall under this category.

// The following subset of HTTP methods are supported for the REST BC:

// GET

// The GET method retrieves specific information from the server as identified by the request URI.

// PUT

// The PUT method requests that the message body sent with the request be stored under the location provided in the HTTP message.

// DELETE

// The DELETE method deletes the specified resources.

// POST

// The POST method modifies data on the server from which a request was sent.

// HEAD

// The HEAD method is similar to the GET method except the message body is not returned in the response. The response only includes metainformation, such as a response code or corresponding headers.

// Can You use GET request instead of PUT to create a resource?
// You can, but the only way to pass data in a GET request is by the URL itself

// What is the difference between PUT and POST?
// The POST Method
// POST is used to send data to a server to create/update a resource.

// The data sent to the server with POST is stored in the request body of the HTTP request:
// POST requests are never cached
// POST requests do not remain in the browser history
// POST requests cannot be bookmarked
// POST requests have no restrictions on data length

// The PUT Method
// PUT is used to send data to a server to create/update a resource.

// The difference between POST and PUT is that PUT requests are idempotent. That is, calling the same PUT request multiple times will always produce the same result. In contrast, calling a POST request repeatedly have side effects of creating the same resource multiple times.

// What is JSON
// JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays. It is a common data format with diverse uses in electronic data interchange, including that of web applications with servers.

// What is CRUD operations?
// In computer programming, create, read, update, and delete are the four basic operations of persistent storage. CRUD is also sometimes used to describe user interface conventions that facilitate viewing, searching, and changing information using computer-based forms and reports.

