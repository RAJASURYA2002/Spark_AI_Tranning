"use strict";
const fs = require('fs');
const text=fs.readFileSync('test.txt','utf-8');
console.log(text);
//Local variable//
//class//
// const pop = document.querySelector(".Pop");
// const queryNameList = document.querySelector(".Query_Name_List");

// //function//

// //Load Data//
// function loadDataJson() {
//   fetch("/Tranning/heyconvo_tranning.json") // Replace 'yourfile.json' with the path to your JSON file
//     .then((response) => response.json())
//     .then((data) => {
//       displayQueryName(data);
//     })
//     .catch((error) => console.error("Error loading JSON:", error));
// }
// function writeFile(data) {

// }
// function displayQueryName(data) {
//   queryNameList.innerHTML = "";
//   data.forEach(function (mov, i) {
//     const html = `<div class="Qyery_List">
//                       <p>${mov["ID"]}: ${mov["Name"]}</p>
//                     </div>`;
//     queryNameList.insertAdjacentHTML("afterbegin", html);
//   });
// }
// //Event listener//
// pop.addEventListener("click", (e) => {
//   e.preventDefault();
//   loadDataJson();
//   writeFile();
// });
