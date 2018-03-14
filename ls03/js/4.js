  var width=document.getElementById('rectangle-width');
  var height=document.getElementById('rectangle-height');

  var spe=document.getElementById('rectangle-calc');
  var length = document.getElementById('rectangle-perimeter');
  var area=document.getElementById('rectangle-area');

  
  window.onload=function(){
    var width=document.getElementById('rectangle-width');
    width.focus();
  }

  spe.onclick=function(){

   
    var val1=width.value;
    var val2=height.value;
    var widLength;
    var heiLength
    var Max1;
    var Max2;
    var a,b;
    a = (val1.split('.').length==2) ? val1.split('.')[1].length : 0;
    b = (val2.split('.').length==2) ? val2.split('.')[1].length : 0;
    var max=Math.max(a,b);
    length.value=2*(val1*(10**max)+val2*(10**max))/(10**max);
    area.value=(val1*(10**max))*(val2*(10**max))/(10**(2*max))
  }

  $('.rectangle form').submit(function(e) {
    e.preventDefault(); });