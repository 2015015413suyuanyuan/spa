var $login=(function(){
	var html=`
	<div class="content">
		<h2>集团后台登录</h2>
		<form>
			<div class="form-item">
				<label for="name">用户名</label><input type="text">
			</div>
			<div class="form-item">
				<label for="password">密码</label><input type="password">
			</div>
			<div class="form-item">
				<label for="ma">验证码</label><input type="text" class="spe">
			</div>
			
			<input type="submit" value="登录" class="form-submit">
		</form>
	</div>

	`;
	function show(config){
		$(config.container).html(html);
	}
	return {show:show};
})();