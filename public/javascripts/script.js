(function(){
  var form = document.forms[0];
  form.onsubmit= function(e){
    e.preventDefault();
    var value = e.target[0].value;
    e.target[0].value = "";
    appendLi(value);
    var payload = "msg="+ encodeURIComponent(value);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/send", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function(){
      if(this.readystage !== 4) return;
      else (console.log(this.responseText));
    }
    console.log(value);
    xhr.send(payload);
  }


  function appendLi(text){
    var ul = document.getElementById("ulTag");
    var li = document.createElement("li");
    li.innerText= text;
    ul.insertBefore(li, ul.children[0]);
  }
})();
