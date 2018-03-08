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
   length.value=2*width.value+2*height.value;
    area.value=width.value*height.value;
  }
  width.onblur=function(){
    if(width.value==''){
      height.setAttribute('disabled',true);
      txt1.style.display = "block";
      txt1.innerHTML='宽度值不能为空！';
    }
    else if(!reg.test(width.value)){
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
    else if(!reg.test(height.value)){
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
