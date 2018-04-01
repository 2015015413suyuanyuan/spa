var $menu = (function(){
	function show(){
		$(app.config.appContainer).append('<div class="admin-app-menu"></div>')
	}
	return {show:show};
})()