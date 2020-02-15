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