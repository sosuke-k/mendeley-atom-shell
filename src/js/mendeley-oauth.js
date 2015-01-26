var req;

function authCheckCallback() {
  if( req.readyState == 4) {
    if( req.status == 200) {
      //console.log(req.responseText);
      var json = JSON.parse(req.responseText);
      for (var i = 0; i < json.length; i++) {
        console.log(json[i].title);
      }
      console.log("計" + json.length + "件");
    } else {
      console.log('status = ' + req.status);
    }
  } else {
    console.log('readyState = ' + req.readyState);
  }
}

function checkAccessToken(access_token) {
  console.log('checkAccessToken');
  var auth_token = localStorage['mendeley-access-token'];
}

function authCheck(access_token, callback) {
  if (typeof access_token !== "undefined") {
    checkAccessToken(access_token);
  } else {

  }


  // var url = "https://api.mendeley.com/documents?limit=1";
  // req = new XMLHttpRequest();
  // req.open("Get", url, true);
  // req.setRequestHeader("Authorization", "Bearer " + access_token);
  // req.setRequestHeader("Accept", "application/vnd.mendeley-document.1+json");
  // req.onreadystatechange = authCheckCallback;
  // req.send(null);
}

function showMendeleyView() {
  var mendeleyView = $('#mendeley-web-view-container');
  console.log(mendeleyView.html());
  mendeleyView.css('display', 'block');
}
function getAccessToken() {

}










