
 window.addEventListener("",function(){
    console.log('scrolling');
  })

let box1 = document.getElementById('clickme');
box1.addEventListener("click",clickBtn)

let box2 = document.getElementById('clickme');
box2.addEventListener("click",function(){
  console.log('the buton clicked')
})

box1.addEventListener("mouseover",function(){
  console.log('the mouse over')
})

box2.addEventListener("mouseout",function(){
  console.log('the butonout')
})

  function clickBtn(){
    console.log('the button was clcked')
  }

