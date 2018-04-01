
$(function(){
	if(app.isLogin) {
		$header.show();
		$menu.show();
		$footer.show();
		$stage.show();
	} else {
		$login.show();
	}
	
	window.onhashchange=function(){
		if(location.hash  === '#/login') $login.show();
		console.log(location.hash);
	}
})