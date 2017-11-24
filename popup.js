document.getElementById("name").onkeyup = function(e){
  document.getElementById("greet").innerHTML = 'Hello ' + document.getElementById('name').value;
};
