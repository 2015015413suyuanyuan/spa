$(function(){
	//实例化定时器按钮
	var $btn = timerButton({
		'container':"div.main",
		'title':"同意",
		'length':9,
		'enable':false
	});
	$btn.on('timer-button-click',function(){
		alert('同意了');
	});

	var $bt = timerButton({
		'container':"div.main",
		'title':"发送短信",
		'length':9,
		'enable':true
	});
	$bt.on('timer-button-click',function(){
		alert('同意了');
	});
	var $bt1 = timerButton({
		'container':"div.main",
		'title':"发送短信",
		'length':9,
		'enable':true
	});
	$bt1.on('timer-button-click',function(){
		alert('同意了');
	});
});