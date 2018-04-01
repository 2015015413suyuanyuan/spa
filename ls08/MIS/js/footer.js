var $footer = (function (){
	function show() {
		$(app.config.appContainer).append('<div class="admin-app-footer"><p>2017 © 中科佰融</p></div>');
	}
	return {show:show};
})();
//函数的立即执行形成一个作用域，返回一个对象给footer
