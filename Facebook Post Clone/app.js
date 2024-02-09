function setbackground(){
    var postbackground = document.getElementById('background-img');
    postbackground.style.backgroundImage = 'url('+event.target.src +')'
    console.log(event.target.src)
}
function changetextcolor() {
        var textAreaColor = document.getElementById('text-area');
        textAreaColor.style.color = event.target.value
        console.log(event.target.value)
}
function changeFontWeight(){
    var textAreaColor = document.getElementById('text-area');
      var type = event.target.tagName;
    console.log(type)
   
    if(type === "I"){
        if(textAreaColor.style.fontWeight === "bold"){
            textAreaColor.style.fontWeight = "normal"
        }
        else{
            textAreaColor.style.fontWeight = "bold" 
        }    
    }

    
}
function changeFontStyle(){
    var textAreaColor = document.getElementById('text-area');
    
    type2 = event.target.tagName;
    console.log(type2)
    if(type2 ==="I"){
        if(textAreaColor.style.fontStyle === 'italic' ){
            textAreaColor.style.fontStyle = 'normal'
        }
    else{
        textAreaColor.style.fontStyle = 'italic' 
    }
    }
}
function changeFontUnderline(){
    var textAreaColor = document.getElementById('text-area')
 
    type3 = event.target.tagName;
    console.log(type3)
    if(type3 ==="I"){
        if(textAreaColor.style.textDecoration === 'underline' ){
            textAreaColor.style.textDecoration = 'none'
        }
    else{
        textAreaColor.style.textDecoration = 'underline' 
    }
    }
}

function changeFontSize(){
    var textAreaColor = document.getElementById('text-area')
    textAreaColor.style.fontSize = event.target.value +"px"
}
function createPost(){
    var displayPost = document.getElementById('postDislay-div')
    var textAreaColor = document.getElementById('text-area').disabled = true;
    displayPost.style.display = 'none'
    // var type = event.target.innerText
}