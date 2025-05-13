var love = setInterval(function () {
  var r_num = Math.floor(Math.random() * 40) + 1;
  var r_size = Math.floor(Math.random() * 65) + 10;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_time = Math.floor(Math.random() * 5) + 5;

  // 🎨 Cores em tons de rosa e roxo
  var r_red = Math.floor(Math.random() * 56) + 200;
  var r_green = Math.floor(Math.random() * 40);
  var r_blue = Math.floor(Math.random() * 106) + 120;

  $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(" + r_red + "," + r_green + "," + r_blue + ",1);animation:love " + r_time + "s ease'></div>");
  $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(" + r_red + "," + r_green + "," + r_blue + ",1);animation:love " + (r_time + 5) + "s ease'></div>");

  $('.heart').each(function () {
    var top = $(this).css("top").replace(/[^-\d\.]/g, '');
    var width = $(this).css("width").replace(/[^-\d\.]/g, '');
    if (top <= -100 || width >= 150) {
      $(this).remove();
    }
  });
}, 500);

// ⏱️ Para parar após 5 segundos
setTimeout(function () {
  clearInterval(love);
}, 10000);
