  var width=document.getElementById('width');
  var height=document.getElementById('height');
  var txt1 = document.getElementById('txt1');
   var txt2 = document.getElementById('txt2');
  var spe=document.getElementById('spe');
  var length = document.getElementById('length');
  var area=document.getElementById('area');
  var reg=/^\d+(\.\d+)?$/;
  
  window.onload=function(){
    var width=document.getElementById('width');
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

 //  width.addEventListener('input',function(event){
 //    if(!width.validity.valid){
 //      txt2.style.display = "block";
 //      txt2.innerHTML='宽度值必须为数值！';
 //    }
 //    else{
 //      height.removeAttribute('disabled');
 //      txt1.style.display = "none";
 //      txt1.innerHTML='';

 //    }
 //  });

 //  height.addEventListener('input',function(event){
 //    if(!height.validity.valid){
      
 //    }
 //    else{
 //      height.removeAttribute('disabled');
 //      txt1.style.display = "none";
 //      txt1.innerHTML='';

 //    }
 //  }); 

 // 