const d = new Date();
document.getElementById('date').innerHTML = d;



document.getElementById('button1').addEventListener('click', function(){
    give_alert();
    let count = 0;
    let count_1 = 0;
    let history = document.getElementById('history');

    let p = document.createElement('p');
    p.classList.add('paragraph');
    p.setAttribute("id","newID");
    p.innerHTML= "Congratulations you <p class= 'font-bold' >Fix Mobile Button Issue </p> completed the first task";
    history.appendChild(p);

    
            
    
    let ID =  document.getElementById("main-score").innerText;
    let score_board = document.getElementById('score-board').innerText;
    let Convert_Score = parseInt(score_board)
    let Convert_ID = parseInt(ID);
    
    count_1 = Convert_Score;
    count_1++;
    count = Convert_ID;
    count--;
    if(count < 0){
        count = 0;
    }
    document.getElementById("main-score").innerText = '0' + count;
    document.getElementById('score-board').innerText = count_1;
    document.getElementById('button1').setAttribute('disabled',true);
    
  

    
    
    
});


document.getElementById('button2').addEventListener('click', function(){
    give_alert();
    let count = 0;
    let count_1 = 0;
    let now = new Date();
    let man =now.toLocaleTimeString();
    let history = document.getElementById('history');
    let p = document.createElement('p');
    p.classList.add('paragraph');
    p.setAttribute("id","newID");
    
    p.innerHTML= `Congratulations you completed the add dark mode  at ${man}`;
    history.appendChild(p);
    
            
    
    let ID =  document.getElementById("main-score").innerText;
    let score_board = document.getElementById('score-board').innerText;
    let Convert_Score = parseInt(score_board)
    let Convert_ID = parseInt(ID);
    
    count_1 = Convert_Score;
    count_1++;
    count = Convert_ID;
    count--;
    if(count < 0){
        count = 0;
    }
    document.getElementById("main-score").innerText = '0' + count;
    document.getElementById('score-board').innerText = count_1;
    document.getElementById('button2').setAttribute('disabled',true);
    
    
  

    
    
    
});


document.getElementById('button3').addEventListener('click', function(){
    give_alert();
    let count = 0;
    let count_1 = 0;
    let history = document.getElementById('history');
    let p = document.createElement('p');
    let now = new Date();
    let man =now.toLocaleTimeString();
    p.classList.add('paragraph');
    p.setAttribute("id","newID");
    p.innerHTML=   `Congratulations you completed the Optimize Home page  at ${man}`;
    history.appendChild(p);
    
            
    
    let ID =  document.getElementById("main-score").innerText;
    let score_board = document.getElementById('score-board').innerText;
    let Convert_Score = parseInt(score_board)
    let Convert_ID = parseInt(ID);
    
    count_1 = Convert_Score;
    count_1++;
    count = Convert_ID;
    count--;
    if(count < 0){
        count = 0;
    }
    document.getElementById("main-score").innerText = '0' + count;
    document.getElementById('score-board').innerText = count_1;
    document.getElementById('button3').setAttribute('disabled',true);
    
    
  

    
    
    
});


document.getElementById('button4').addEventListener('click', function(){
    give_alert();
    let count = 0;
    let count_1 = 0;
    let history = document.getElementById('history');
    let now = new Date();
    let man =now.toLocaleTimeString();
    let p = document.createElement('p');
    p.classList.add('paragraph');
    p.setAttribute("id","newID");
    p.innerHTML=   `Congratulations you completed the Optimize Home page  at ${man}`;
    history.appendChild(p);
    
            
    
    let ID =  document.getElementById("main-score").innerText;
    let score_board = document.getElementById('score-board').innerText;
    let Convert_Score = parseInt(score_board)
    let Convert_ID = parseInt(ID);
    
    count_1 = Convert_Score;
    count_1++;
    count = Convert_ID;
    count--;
    if(count < 0){
        count = 0;
    }
    document.getElementById("main-score").innerText = '0' + count;
    document.getElementById('score-board').innerText = count_1;
    document.getElementById('button4').setAttribute('disabled',true);
    
    
  

    
    
    
});


document.getElementById('button5').addEventListener('click', function(){
    give_alert();
    let count = 0;
    let count_1 = 0;
    let p = document.createElement('p');
    let history = document.getElementById('history');
    let now = new Date();
    let man =now.toLocaleTimeString();
    p.classList.add('paragraph');
    p.setAttribute("id","newID");
    p.innerHTML= `Congratulations you completed the Optimize Home page mode  at ${man}`;
    history.appendChild(p);
    
            
    
    let ID =  document.getElementById("main-score").innerText;
    let score_board = document.getElementById('score-board').innerText;
    let Convert_Score = parseInt(score_board)
    let Convert_ID = parseInt(ID);
    
    count_1 = Convert_Score;
    count_1++;
    count = Convert_ID;
    count--;
    if(count < 0){
        count = 0;
    }
    document.getElementById("main-score").innerText = '0' + count;
    document.getElementById('score-board').innerText = count_1;
    document.getElementById('button5').setAttribute('disabled',true);
    
    
  

    
    
    
});


document.getElementById('button6').addEventListener('click', function(){
    give_alert();
    let count = 0;
    let count_1 = 0;
    let p = document.createElement('p');
    let history = document.getElementById('history');
    let now = new Date();
    let man =now.toLocaleTimeString();
    p.classList.add('paragraph');
    p.setAttribute("id","newID");
    p.innerHTML= `Congratulations you completed the Optimize Home page mode  at ${man}`;
    
    history.appendChild(p);
    
            
    
    let ID =  document.getElementById("main-score").innerText;
    let score_board = document.getElementById('score-board').innerText;
    let Convert_Score = parseInt(score_board)
    let Convert_ID = parseInt(ID);
    
    count_1 = Convert_Score;
    count_1++;
    count = Convert_ID;
    count--;
    if(count < 0){
        count = 0;
    }
    document.getElementById("main-score").innerText = '0' + count;
    document.getElementById('score-board').innerText = count_1;
    document.getElementById('button6').setAttribute('disabled',true);
    
    
  

    
    
    
});

document.getElementById('clear').addEventListener('click', function(){
     document.getElementById('history').innerHTML = '';
})


document.getElementById('discover').addEventListener('click', function(){
    window.location.href= "./back.html";
})

// document.getElementById('back').addEventListener('click', function(){
//      console.log('hello');


// })


document.getElementById('theme-btn').addEventListener('click', function(){
    let m = Math.floor(Math.random()*254);
    let t = Math.floor(Math.random()*254);
    let n = Math.floor(Math.random()*254);


    let color = `rgb(${m}, ${t}, ${n})`;
    document.body.style.backgroundColor = color;
    
})









