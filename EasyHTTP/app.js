//Instantiate HTTP
const http = new easyHttp();

//GET posts
// http.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

//GET Single post
// http.get("https://jsonplaceholder.typicode.com/posts/1", function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//Create Data
const data = {
  title: "Custom post",
  body: "This is a custom post"
}

//POST posts
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(err, post){
//   if (err) {
//         console.log(err);
//       } else {
//         console.log(post);
//       }
// });

//PUT or PATCH posts
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(err, post){
//   if (err) {
//         console.log(err);
//       } else {
//         console.log(post);
//       }
// });

//DELETE post
http.delete("https://jsonplaceholder.typicode.com/posts/1", function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});