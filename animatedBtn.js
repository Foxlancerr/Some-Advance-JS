let btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("mouseover", (event) => {
  let x = event.pageX - btn.offsetLeft;
  console.log(x);
  let y = event.pageY - btn.offsetTop;
  console.log(y);

  btn.style.setProperty("--x", x + "px");
  btn.style.setProperty("--y", y + "px");
});

// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// body {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     background-color: aqua;
// }

// .btn {
//     padding: 20px 40px;
//     font-size: 20px;
//     text-transform: uppercase;
//     border-radius: 5px;
//     border: none;
//     box-shadow: 2px 8px 8px rgba(0, 0, 0, .3);
//     position: relative;
//     overflow: hidden;
// }

// .btn::before {
//     transition: width 0.5s,height 0.5s;
//     content: " ";
//     position: absolute;
//     border-radius: 50%;
//     top: var(--x);
//     left: var(--y);
//     width: 0px;
//     transform: translate(-50%, -50%);
//     height: 0px;
//     background-color: red;
// }

// .btn:hover::before {
//     width: 300px;
//     height: 300px;
// }

// span {
//     z-index: 11;
//     font-weight: 900;
//     position: relative;
//     color: black;
// }
// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8" />
//   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <link rel="stylesheet" href="practice.css">
//   <title>Document</title>
// </head>

// <body>

//   <button type="submit" class="btn"><span>clicked</span></button></div>

//   <!-- ----------Javascript file is attached------- -->

//   <script src="JavaPractice.js"></script>
// </body>

// </html>
