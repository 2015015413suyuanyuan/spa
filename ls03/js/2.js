  var width=document.getElementById('width');
  var height=document.getElementById('height');
  var txt1 = document.getElementById('txt1');
   var txt2 = document.getElementById('txt2');
  var spe=document.getElementById('spe');
  var length = document.getElementById('length');
  var area=document.getElementById('area');
  var reg=/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/;
  
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
  width.onblur=function(){
    if(width.value==''){
      height.setAttribute('disabled',true);
      txt1.style.display = "block";
      txt1.innerHTML='宽度值不能为空！';
    }
    else if(reg.test(width.value)){
      height.setAttribute('disabled',true);
      txt1.style.display = "block";
      txt1.innerHTML='宽度值必须为数值！';
    }
    else{
      height.removeAttribute('disabled');
      txt1.style.display = "none";
      txt1.innerHTML='';

    }
  }
  height.onblur=function(){
    if(height.value==''){
      width.setAttribute('disabled',true);
      txt2.style.display = "block";
      txt2.innerHTML='高度值不能为空！';
    }
    else if(reg.test(height.value)){
      width.setAttribute('disabled',true);
      txt2.style.display = "block";
      txt2.innerHTML='高度值必须为数值！';
    }
    else{
      width.removeAttribute('disabled');
      txt2.style.display = "none";
      txt2.innerHTML='';
    }    
  }
  var reg1=/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/;
  height.onkeypress=function(e){
    if(reg1.test(e.key)){
      e.preventDefault();
    }
  } 
  width.onkeypress=function(e){
    if(reg1.test(e.key)){
      e.preventDefault();
    }
  }   