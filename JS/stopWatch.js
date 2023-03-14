
const displayTime = document.getElementById('time');

document.getElementById('start').addEventListener('click', function(){

  const div = document.getElementById("color-field");

  function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
  
  function changeColor(){
    div.style.backgroundColor= getRandomColor();
  }

  let timeTracker=0;

const wannaStop = setInterval(()=>{
    timeTracker++;
    displayTime.innerText = '';
    const insideCard = timeTracker;
    displayTime.innerText = insideCard;
    changeColor();
    
    document.getElementById('stop').addEventListener('click',function(){
      clearInterval(wannaStop);
    });

    document.getElementById('reset').addEventListener('click',function(){
      clearInterval(wannaStop);
      displayTime.innerText = 0;

    });


},1000)
  
   //const id  = setInterval(changeColor,1000);

});
