function changeImage() {
    document.getElementById('littlebrain').style.height = "35%";
    document.getElementById('littlebrain').style.width = "35%";
    return true;
}

function alertme() {
    alertmsg = document.littlebrain.src + "\nHeight: " + document.littlebrain.height + "\nWight: " + document.littlebrain.width;
    alert = (alertmsg);
    return true;
}

function changeColor() {
    document.getElementById("h3style").style.color = "red";
    document.getElementById("h3sytle").firstChild.nodeValue = "Excited!";
    return true;
}

function changeAgain() {
    document.getElementById("h3style").style.color = "gray";
    document.getElementById("h3sytle").firstChild.nodeValue = "Bored!";
    return true;
}

function showPara() {
    document.getElementById("first").style.visibility = (document.formex.firstpara.checked) ? "visible" : "hidden";
    document.getElementById("second").style.visibility = (document.formex.secondpara.checked) ? "visible" : "hidden";
    document.getElementById("third").style.visibility = (document.formex.thirdpara.checked) ? "visible" : "hidden";
    return true;
}


