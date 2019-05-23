function textWriter(txt, eleId, i) {
    //console.log(i);
    if(i < txt.length) {
        document.getElementById(eleId).innerHTML += txt.charAt(i);
        i++;
        setTimeout(textWriter, 50, txt, eleId, i);
    }
}

window.onload = async function() {
    textWriter("Hello, my name is Varun.", "text-welcome-1", 0);
    setTimeout(() => {
        textWriter("And, welcome to my website!.", "text-welcome-2", 0);
    }, 2500);
    setTimeout(() => {
        // textWriter("Click here to proceed forward", "text-welcome-3", 0);
        document.getElementById("proceed").style.display = "block";
    }, 5000);
}