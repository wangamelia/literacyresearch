document.onmousemove = mouseCoord;
document.onclick = clicked;

//var movements = 0;
//var dt = new Date();
//var utcDate = dt.toUTCString();

function mouseCoord(e) {
  tempX = e.pageX
  tempY = e.pageY
  var title = document.title;
  var coord = "(" + tempX + ", " + tempY + ")"
  var eventType = "movement"
  var offsetVar = document.documentElement.scrollTop + "px";
  var xmlhttp;
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.open("POST","/literacyresearch/phpwrite2.php",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("title=" + title + "&webevent=" + eventType + "&content=" + coord + "&offset=" + offsetVar);
//  xmlhttp.send("content=" + coord);
  //<input type='text' name='name' id='name' />

}

function clicked(e) {
  clickX = e.pageX
  clickY = e.pageY
  var title = document.title;
  var click = "(" + clickX + ", " + clickY + ")"
  var event = "clicked"
  var offsetVar = document.documentElement.scrollTop + "px";
  var xmlhttp;
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.open("POST","/literacyresearch/phpwrite2.php",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("title=" + title + "&webevent=" + event + "&content=" + click+ "&offset=" + offsetVar);

}

function getSelectedText() {
    var eventType = "highlighted";
  var offsetVar = document.documentElement.scrollTop + "px";
    var txt = "";
    var title = document.title;
    if (typeof window.getSelection != "undefined") {
        txt += window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        txt += document.selection.createRange().text;
    }
    var xmlhttp;
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.open("POST","/literacyresearch/phpwrite2.php",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("title=" + title + "&webevent=" + eventType + "&content=" + txt+ "&offset=" + offsetVar);

}

document.onmouseup = getSelectedText;
document.onkeyup = getSelectedText;

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var title = document.title;
    var charCode = evt.keyCode || evt.which;
    var eventType = "key pressed"
    var charStr = "\"" + String.fromCharCode(charCode) + "\"";
  var offsetVar = document.documentElement.scrollTop + "px";
    var xmlhttp;
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.open("POST","/literacyresearch/phpwrite2.php",true);
 // xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("title=" + title + "&webevent=" + eventType + "&content=" + charStr+ "&offset=" + offsetVar);

};
window.onresize = resize;

function resize() {
  var title = document.title;
  var w = window.outerWidth;
    var h = window.outerHeight;
    var eventType = "resize"
  var offsetVar = document.documentElement.scrollTop + "px";
    var txt = "Window size: width=" + w + ", height=" + h;
    //document.getElementById("demo").innerHTML = txt;
    var xmlhttp;
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.open("POST","/literacyresearch/phpwrite2.php",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("title=" + title + "&webevent=" + eventType + "&content=" + txt+ "&offset=" + offsetVar);

}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}
 
//var docheight = getDocHeight()

function amountscrolled(){
  var title = document.title;
    var eventType = "scrolled"
  var offsetVar = document.documentElement.scrollTop + "px";
    var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
    var docheight = getDocHeight()
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    var scrollString = pctScrolled + '% scrolled '

    var xmlhttp;
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.open("POST","/literacyresearch/phpwrite2.php",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("title=" + title + "&webevent=" + eventType + "&content=" + scrollString+ "&offset=" + offsetVar);

}
 
window.addEventListener("scroll", function(){
    amountscrolled()
}, false)
