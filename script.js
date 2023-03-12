let totalChar = document.getElementById("totalChar");
let totalWords = document.getElementById("totalWords");
let txtarea = document.getElementById("txtarea");


//by adding event listener from js
txtarea.addEventListener("input", calculateChar);
function calculateChar(event) {
    content = event.target.value
    totalChar.innerHTML = content.length;

}


//by adding event listner from html and here just defining the function
function calculateWords(){
    content = txtarea.value;
    content = content.trim().replace(/\s+/g, " "); //for handling more than one spaces between words
    let cnt = 0;
    for (let i = 0; i < content.length; i++)
    {
        if(content[i] == ' ' | content[i] == ',' || content[i] == '.' || content[i] == '!' )
        cnt++;
    }
    if(content == "")
    totalWords.innerHTML = cnt;
    else
    totalWords.innerHTML = cnt+1;
}

//copy text using api
const copyText = () =>{
    txtarea.select();

    //API CALLING HERE
    txtarea.setSelectionRange(0,9999);
    navigator.clipboard.writeText(txtarea.value);
};