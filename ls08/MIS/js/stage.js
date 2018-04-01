var $stage = (function(){
	function show(){
		$(app.config.appContainer).append('<div class="admin-app-stage"></div>')
	}
/*
根据路由信息加载响应的panel
*/
	function load(router){
		var panel = parsePanel(router);
	}
/*
将路由信息解析成panel 名称

@paramrouter路由字符串
@returns string panel 名字
*/
	function parsePanel(router){
		return '';
	}
	return {show:show,load:load};
})()
