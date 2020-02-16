// BACKGROUND COLOR CHANGE ON HOVER 
var boxList = document.querySelector('.box-list');

// DEFINE STARTOVER LINK FOR ALL FUNCTIONS TO USE
var startOver = document.createElement('a');

var clickThree = document.createElement('p');
var clickOne = document.createElement('p');
var clickTwo = document.createElement('p');




boxList.addEventListener('mouseenter', colorChange)  
function colorChange() {
    document.getElementById('yellow').style.backgroundColor = '#FFA2F9';
    document.getElementById('teal').style.backgroundColor = '#A2E1FF';
    document.getElementById('green').style.backgroundColor = '#FFBFA2';
};

boxList.addEventListener('mouseleave', changeBack)  
function changeBack() {
    document.getElementById('yellow').style.backgroundColor = '#FCFF00';
    document.getElementById('teal').style.backgroundColor = '#55FFC9';
    document.getElementById('green').style.backgroundColor = '#A5FF01';
};

// BOX 1 CLICK ACTION https://www.tutorialspoint.com/html-dom-appendchild-method https://www.peterbe.com/plog/createelement-a 
var boxOne = document.querySelector('#yellow');

boxOne.addEventListener('click', messageOne)  
function messageOne() {
    startOver.setAttribute('href', '#'); 
    startOver.setAttribute('alt', 'start the game again'); 
    startOver.setAttribute('class','');
    clickOne.setAttribute('class','');
    clickOne.innerHTML = 'Ohhh - so close, but no cigar';
    document.querySelector('.results').appendChild(clickOne);
    startOver.innerHTML = 'Start Over';
    document.querySelector('.results').appendChild(startOver);
};

// BOX 2 CLICK ACTION 
var boxTwo = document.querySelector('#teal');

boxTwo.addEventListener('click', messageTwo)  
function messageTwo() {
    startOver.setAttribute('href', '#'); 
    startOver.setAttribute('alt', 'start the game again');
    startOver.setAttribute('class','');
    clickTwo.setAttribute('class','');
    clickTwo.innerHTML = 'DING DING DING - We have a winner';
    document.querySelector('.results').appendChild(clickTwo);
    startOver.innerHTML = 'Start Over';
    document.querySelector('.results').appendChild(startOver);
};

// BOX 3 CLICK ACTION 
var boxThree = document.querySelector('#green');

boxThree.addEventListener('click', messageThree)  
function messageThree() {
    startOver.setAttribute('href', '#'); 
    startOver.setAttribute('alt', 'start the game again');
    startOver.setAttribute('class','');
    clickThree.setAttribute('class','');
    clickThree.innerHTML = 'Oops, better luck next time';
    document.querySelector('.results').appendChild(clickThree);
    startOver.innerHTML = 'Start Over';
    document.querySelector('.results').appendChild(startOver);
};

// HIDE RESULTS CLASS ON STARTOVER CLICK
startOver.addEventListener('click', clearPage)
function clearPage() {       
    startOver.setAttribute('class','message');
    clickOne.setAttribute('class','message');
    clickTwo.setAttribute('class','message');
    clickThree.setAttribute('class','message');
    document.querySelector('.message').classList.toggle(startOver);
};

