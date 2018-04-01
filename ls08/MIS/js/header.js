var $header=(function(){
	var $headDom =$(`
		<div class="admin-app-header">
			<div class="title">
			<h1></h1>
				<span></span>
			</div>
			<div class="account">
				<div class="logo">
					<span>管理</span>
					<i></i>
				</div>
				<div class="submenu">
					<i class="iconfont icon-sign-out"></i>
					<span>注销</span>
				</div>
			</div>
			
		</div>	
		`);
	var $title=$headDom.find('.title h1');
	var $logo = $headDom.find('.log');
	var $account = $headDom.find('.account');
	var $menu=$headDom.find('.submenu'),
	 $arrow = $headDom.find('.account span+i');
	 $title.html(app.config.headerTitle);

	$account.mouseover(function(){
		$account.css({'color':'black'});
		$menu.css('display','block');

	});
	$account.mouseout(function(){
		$account.css({'color':'#999'});
		$arrow.removeClass('icon-arrowup');
		$arrow.attr('class','icon-arrowdown');
		$menu.css('display','none');

	});
	$menu.click(function(){
		location.hash = '#/login';
		app.isLogin = false; 
	});
	$logo.css('background-img',app.config.headerLogo);
	function show(cfg){
		$title.html(cfg.title);
		$logo.css('background-img',cfg.logo);
		$(app.config.appContainer).append($headDom);
	}
	return {show:show};
})();