let currentScore = 20;
let attempt = 10;
let highestScore = 20;
let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);

let checkBtn = document.getElementById("#check1");
let inputText = document.querySelector("#input");
let att_lef = document.querySelector("#att_lef");

checkBtn.addEventListener("click", function () {
  // if (attempt > 0) {
  //   attempt--;
  //   att_lef.textContent = attempt;
  // } else {
  //   console.log("running");
  // }
});

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>JavaPractice</title>

//     <style>
//       * {
//         margin: 0px;
//         padding: 0px;
//         box-sizing: border-box;
//         font-weight: 500;
//         text-transform: capitalize;
//         color: white;
//         font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
//           "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
//       }
//       .main {
//         display: flex;
//         width: 100vw;
//         background-color: rgb(117, 117, 86);
//         flex-direction: column;
//         flex-wrap: wrap;
//       }
//       .section {
//         display: flex;
//         justify-content: space-between;
//         padding: 10px;
//         align-items: center;
//       }
//       .sec1 {
//         background-color: rgb(0, 0, 0);
//         padding: 10px 15px;
//       }
//       .btn1 {
//         color: black;
//         background-color: aliceblue;
//         outline: none;
//         border: 0px;
//         padding: 8px 12px;
//       }
//       .btn2 {
//         margin-bottom: 10px;
//       }
//       .sec2 {
//         display: flex;
//         flex-direction: column;
//         padding: 50px 0px;
//       }
//       .sec2 h1 {
//         margin-bottom: 10px;
//       }
//       .sec2 #result {
//         color: black;
//         margin-bottom: 10px;
//       }
//       .sec2 #guessNo {
//         font-size: 70px;
//         padding: 20px 50px;
//         background-color: black;
//         border-radius: 15px;
//       }
//       .sec3 {
//         display: flex;
//         flex-direction: column;
//         margin: 20px 0px;
//       }
//       .sec3 #input {
//         padding: 10px;
//         color: black;
//         margin-bottom: 10px;
//       }
//     </style>
//   </head>

//   <body>
//     <div class="main">
//       <div class="section sec1">
//         <button id="btn1" class="btn1">New Game</button>
//         <h4>Highest Score: <span id="high_sec1">20</span></h4>
//       </div>

//       <div class="section sec2">
//         <h1>Guess the Number</h1>
//         <h3 id="user_message">the number is incorrect</h3>
//         <h1 id="Secret_noResult">?</h1>
//       </div>
//       <div class="section sec3">
//         <input type="text" id="input" />
//         <button id="check1" class="btn2 btn1">Check</button>
//         <div class="score">
//           <p>Current Score: <span id="cu_scr">20</span></p>
//           <p>Attempt Left: <span id="att_lef">10</span></p>
//         </div>
//       </div>
//     </div>
//     <!-- ----------Javascript file is attached------- -->

//     <script src="JavaPractice.js"></script>
//   </body>
// </html>
