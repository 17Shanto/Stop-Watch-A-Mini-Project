// Set Random Color in Time Window

document.getElementById('rand-color').addEventListener("click",function(){
    setInterval(
        function () {
          var randomColor = Math.floor(Math.random()*16777215).toString(16);
          document.body.style.backgroundColor = "#"+randomColor;
        },1000);
})