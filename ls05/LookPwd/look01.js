
var lookPwd=function(config){
	var container = config.container;
	
	var $lab =$("<label for='name'>密码 :  </label>");
	var $pwd = $("<input type='password' style='text-align:left;' id='pwd'>");
	var $br=$('<br>');
	var $img = $("<img src='1.jpg'  class='img1'>");
	$(container).append($lab,$pwd,$img,$br);
	

	$img.mouseover(function(){
		$img.attr('src','2.jpg');
		$pwd.attr('type','text');
		});
	$img.mouseout(function(){
		 $img.attr('src','1.jpg');
		    $pwd.attr('type','password');
		    
		});
}