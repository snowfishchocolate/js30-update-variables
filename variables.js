
function updatspaceinput(){
    var picture = document.querySelector('.picture');
    var spaceValue = document.querySelector('.space').value;
   console.log(spaceValue);
    if(spaceValue == 0){
        picture.classList.add('space0');
        picture.classList.remove('space2');
        picture.classList.remove('space3');
        picture.classList.remove('space4');
        picture.classList.remove('space1');
        picture.classList.remove('space5');
    }
    else if(spaceValue == 1){
        picture.classList.add('space1');
        picture.classList.remove('space2');
        picture.classList.remove('space3');
        picture.classList.remove('space4');
        picture.classList.remove('space0');
        picture.classList.remove('space5');
    }
    else if(spaceValue == 2){
        picture.classList.add('space2');
        picture.classList.remove('space0');
        picture.classList.remove('space1');
        picture.classList.remove('space4');
        picture.classList.remove('space3');
        picture.classList.remove('space5');
    }
    else if(spaceValue == 3){
        picture.classList.add('space3');
        picture.classList.remove('space2');
        picture.classList.remove('space4');
        picture.classList.remove('space1');
        picture.classList.remove('space0');
        picture.classList.remove('space5');
    }
    else if(spaceValue == 4){
        picture.classList.add('space4');
        picture.classList.remove('space2');
        picture.classList.remove('space3');
        picture.classList.remove('space0');
        picture.classList.remove('space1');
        picture.classList.remove('space5');
    }
    else if(spaceValue == 5){
        picture.classList.add('space5');
        picture.classList.remove('space2');
        picture.classList.remove('space3');
        picture.classList.remove('space0');
        picture.classList.remove('space1');
        picture.classList.remove('space4');
    }
    console.log(picture);
}
function updatblurInput(){
    var picture = document.querySelector('.picture');
    var blurValue = document.querySelector('.blur').value;
    console.log(blurValue);
    if(blurValue == 0){
        picture.classList.add('filter1');
        picture.classList.remove('filter2');
        picture.classList.remove('filter3');
        picture.classList.remove('filter4');
        picture.classList.remove('filter5');
    }
    else if(blurValue == 1){
        picture.classList.add('filter2');
        picture.classList.remove('filter1');
        picture.classList.remove('filter3');
        picture.classList.remove('filter4');
        picture.classList.remove('filter5');
    }
    else if(blurValue == 2){
        picture.classList.add('filter3');
        picture.classList.remove('filter2');
        picture.classList.remove('filter1');
        picture.classList.remove('filter4');
        picture.classList.remove('filter5');
    }
    else if(blurValue == 3){
        picture.classList.add('filter4');
        picture.classList.remove('filter2');
        picture.classList.remove('filter3');
        picture.classList.remove('filter1');
        picture.classList.remove('filter5');
    }
    else if(blurValue == 4){
        picture.classList.add('filter5');
        picture.classList.remove('filter2');
        picture.classList.remove('filter3');
        picture.classList.remove('filter4');
        picture.classList.remove('filter1');
    }
}
function colorChange(){
    var picture = document.querySelector('.picture');
    var colorValue = document.querySelector('.color').value;
    picture.style.borderColor = colorValue;
}