var timerButton = function(config) {
  var cfg = config,                 // 按钮的配置参数
    enabled = cfg.enable,          // 按钮状态，true 为启用，false 为禁用
    timer,                          // 定时器对象
    i = cfg.length,               // 按钮被禁用时长，单位秒
    $btn = $('<input class="timer-button" type="button">');
   var title=config.title;
  $(cfg.container).append($btn);

  if(cfg.enable) {
    enableBtn();
  } else {
    disableBtn();
  }

  function disableBtn() {
    enabled = false;
    $btn.attr('disabled', 'disabled').val(title+'（'+i+"s）");

    timer = window.setInterval(function() {
      i--;
      if(i === 0) 
      {
      	enableBtn();
      	window.clearInterval(timer);
      }
      else{
      	$btn.val(title+'（'+i+"s）");
      }
    }, 1000);
  }

  function enableBtn() {
    enabled = true;
    i = cfg.length;
    clearInterval(timer);
   $btn.val(title);
    $btn.removeAttr('disabled');
  }


  $btn.click(function() {
    $btn.trigger('timer-button-click');
    if(cfg.enabled) disableBtn();
  });

  return $btn;
};