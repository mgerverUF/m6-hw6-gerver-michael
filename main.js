// BACKGROUND COLOR CHANGE ON HOVER 
var boxList = document.querySelector('.box-list');

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
    var clickOne = document.createElement('p');
    var startOver = document.createElement('a');
    startOver.setAttribute('href', '#'); 
    startOver.setAttribute('alt', 'start the game again'); 
    clickOne.innerHTML = 'Ohhh - so close, but no cigar';
    document.querySelector('.results').appendChild(clickOne);
    startOver.innerHTML = 'Start Over';
    document.querySelector('.results').appendChild(startOver);
};

// BOX 2 CLICK ACTION 
var boxTwo = document.querySelector('#teal');

boxTwo.addEventListener('click', messageTwo)  
function messageTwo() {
    var clickTwo = document.createElement('p');
    var startOver = document.createElement('a');
    startOver.setAttribute('href', '#'); 
    startOver.setAttribute('alt', 'start the game again');
    clickTwo.innerHTML = 'DING DING DING - We have a winner';
    document.querySelector('.results').appendChild(clickTwo);
    startOver.innerHTML = 'Start Over';
    document.querySelector('.results').appendChild(startOver);
};

// BOX 3 CLICK ACTION 
var boxThree = document.querySelector('#green');

boxThree.addEventListener('click', messageThree)  
function messageThree() {
    var clickThree = document.createElement('p');
    var startOver = document.createElement('a');
    startOver.setAttribute('href', '#'); 
    startOver.setAttribute('alt', 'start the game again');
    clickThree.innerHTML = 'Oops, better luck next time';
    document.querySelector('.results').appendChild(clickThree);
    startOver.innerHTML = 'Start Over';
    document.querySelector('.results').appendChild(startOver);
};

// HIDE RESULTS CLASS ON STARTOVER CLICK
/*startOver.addEventListener('click', clearPage)  
function clearPage() {
    document.querySelector('.results').classList.remove(startOver)
};*/

