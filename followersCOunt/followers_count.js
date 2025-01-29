let count = 0;
function increaseCount(){
    count ++;
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
function inreaseCount(){
    count++;
    displayCount();
}
function checkCountValue({
    if(count===10){
        alert("Your instagaram post gained 10 followers!Congratulations!");
    }else if(count===20){
        alert("Your Instagram post gained 20 followers! keep it up!");
    }
}
function inreaseCount(){
    count++;
    displayCount();
    checkCountValue();
}
