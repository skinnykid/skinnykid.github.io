var inpCourse = document.getElementById('course');
var inpPassword = document.getElementById('sn');
var btnSubmit = document.getElementById('submit');

inpCourse.addEventListener('change', function(e){
  var elem = document.getElementById(inpCourse.value);
  var divs = document.getElementsByTagName('div');
  for(i=0; i<divs.length ; i++){
    if (divs[i].style.display !== 'none') {
        divs[i].style.display = 'none';
    }
  }
  elem.style.display = 'block';
});

btnSubmit.addEventListener('click', function(e){
  alert(inpPassword.value);
});

var pts = document.getElementsByClassName('pt');
for(i=0;i<pts.length;i++){
  pts[i].addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.style.backgroundColor=='pink'){
       e.target.style.backgroundColor='green'
    }else{
      e.target.style.backgroundColor='pink'
    }
  });
}
