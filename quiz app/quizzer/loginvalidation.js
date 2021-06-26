function valid() {
    var u = document.frm.un.value;
    var p = document.frm.pwd.value;
  
    if (u == "") {
        document.getElementById('errorun').innerHTML ;
        document.getElementById('uns').style.borderBottom = "2px solid red";
    } else {
        document.getElementById('errorun').innerHTML ;
        document.getElementById('uns').style.borderBottom = "2px solid green";
    }
    if (p == "") {
        document.getElementById('errorpwd').innerHTML ;
        document.getElementById('pass').style.borderBottom = "2px solid red";
    } else {
        document.getElementById('errorpwd').innerHTML ;
        document.getElementById('pass').style.borderBottom = "2px solid green";
      
    }
    }