  var width=document.getElementById('width');
  var height=document.getElementById('height');
  var txt = document.getElementById('txt');
  var spe=document.getElementById('spe');
  var length = document.getElementById('length');
  var area=document.getElementById('area');
  spe.onclick=function(){
    length.value=2*width.value+2*height.value;
    area.value=width.value*height.value;
  }
  var reg=/^[0-9]*$/;
  
  width.onblur=function(){
    if(width.value==''){
      height.setAttribute('disabled',true);
      txt.style.display = "block";
      txt.innerHTML='宽度值不能为空！';
    }
    else if(!reg.test(width.value)){
      height.setAttribute('disabled',true);
      txt.style.display = "block";
      txt.innerHTML='宽度值必须为数值！';
    }
    else{
      height.removeAttribute('disabled');
      txt.style.display = "none";
      txt.innerHTML='';

    }
  }
  height.onblur=function(){
    if(height.value==''){
      width.setAttribute('disabled',true);
      txt.style.display = "block";
      txt.innerHTML='高度值不能为空！';
    }
    else if(!reg.test(height.value)){
      width.setAttribute('disabled',true);
      txt.style.display = "block";
      txt.innerHTML='高度值必须为数值！';
    }
    else{
      width.removeAttribute('disabled');
      txt.style.display = "none";
      txt.innerHTML='';
    }    
  }
