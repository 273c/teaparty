// JavaScript Document

count = 20; //　点滅させる回数
mSec = 50; //　点滅速度（1秒＝1000）

function getDice1() {

  $('#condice1').removeClass('text-primary').removeClass('text-danger');

  var mt = new MersenneTwister();
  var dice1 = mt.nextInt(0, 10);
  var dice2 = mt.nextInt(0, 10);

  document.getElementById('condice1').innerHTML = (dice1) * 10 + (dice2);
  if ((dice1) * 10 + (dice2) == 0) {
    document.getElementById('condice1').innerHTML = 100
  }
  var Result = parseInt(document.getElementById("condice1").innerHTML) + 0;

  document.getElementById('condiceall').innerHTML = ("");
  target = document.getElementById("result");

  if (Result >= 96) {
    document.getElementById('result').innerHTML = ("<span class='text-danger'>ファンブル！</span>");
  } else if (Result == 0) {
    document.getElementById('result').innerHTML = ("<span class='text-danger'><strong>ファンブル！</strong></span>");
  } else if (Result <= 5) {
    document.getElementById('result').innerHTML = ("<span class='text-primary'>クリティカル！</span>");
  } else {
    document.getElementById('result').innerHTML = ("");
  }

  count--;
  if (count >= 1) {
    tim = setTimeout("getDice1()", mSec);
  }
  if (count == 0) {
    count = 20;

    var dicelog = document.createElement("p");
    var deme = (dice1) * 10 + (dice2);
    var gettime = new Date();
    var m = gettime.getMonth() + 1;
    var d = gettime.getDate();
    if (deme == 0) {
      dicelog.innerHTML = (m + "/" + d + " " + gettime.toLocaleTimeString() + " <span>【100】</span>(1D100)");
      document.getElementById("dicelog_box").insertBefore(dicelog, dicelog_box.firstChild);
    } else {
      dicelog.innerHTML = (m + "/" + d + " " + gettime.toLocaleTimeString() + " <span>【" + deme + "】</span>(1D100)");
      document.getElementById("dicelog_box").insertBefore(dicelog, dicelog_box.firstChild);
    }
  }
}

function getDice10() {
  $('#condice1').removeClass('text-primary').removeClass('text-danger');

  var mt = new MersenneTwister();
  var dice1_1 = mt.nextInt(0, 10);
  document.getElementById('result').innerHTML = ("");
  document.getElementById('condiceall').innerHTML = ("");
  document.getElementById('condice1').innerHTML = (dice1_1);

  if (dice1_1 == 0) {
    document.getElementById('condice1').innerHTML = 10
  }
  count--;
  if (count >= 1) {
    tim = setTimeout("getDice10()", mSec);
  }
  if (count == 0) {
    count = 20;
    var dicelog = document.createElement("p");
    var deme = (dice1_1);

    var gettime = new Date();
    var m = gettime.getMonth() + 1;
    var d = gettime.getDate();
    if (deme == 0) {
      dicelog.innerHTML = (m + "/" + d + " " + gettime.toLocaleTimeString() + " <span>【10】</span>(1D10)");
      document.getElementById("dicelog_box").insertBefore(dicelog, dicelog_box.firstChild);
    } else {
      dicelog.innerHTML = (m + "/" + d + " " + gettime.toLocaleTimeString() + " <span>【" + deme + "】</span>(1D10)");
      document.getElementById("dicelog_box").insertBefore(dicelog, dicelog_box.firstChild);
    }
  }
}


function getDice6() {
  $('#condice1').removeClass('text-primary').removeClass('text-danger');

  var mt = new MersenneTwister();
  var dice6 = mt.nextInt(0, 6);
  document.getElementById('result').innerHTML = ("");
  document.getElementById('condiceall').innerHTML = ("");
  document.getElementById('condice1').innerHTML = (dice6 + 1);
  count--;
  if (count >= 1) {
    tim = setTimeout("getDice6()", mSec);
  }
  if (count == 0) {
    count = 20;
    var dicelog = document.createElement("p");
    var deme = (dice6 + 1);

    var gettime = new Date();
    var m = gettime.getMonth() + 1;
    var d = gettime.getDate();
    dicelog.innerHTML = (m + "/" + d + " " + gettime.toLocaleTimeString() + " <span>【" + deme + "】</span>(1D6)");
    document.getElementById("dicelog_box").insertBefore(dicelog, dicelog_box.firstChild);
  }
}


function getDiceall() {
  $('#condice1').removeClass('text-primary').removeClass('text-danger');

  var mt = new MersenneTwister();
  var select = document.getElementById('roll');
  var options = document.getElementById('roll').options;
  var roll = parseInt(options.item(select.selectedIndex).value) + 0;

  var select = document.getElementById('men');
  var options = document.getElementById('men').options;
  var men = parseInt(options.item(select.selectedIndex).value) + 0;

  var dataset = [];
  for (var i = 0; i < roll; i++) {
    var array = mt.nextInt(0, men) + 1;
    dataset.push(array);
  }
  document.getElementById('condiceall').innerHTML = (dataset);
  document.getElementById('result').innerHTML = ("");

  var sum = 0;
  for (var i = 0; i < dataset.length; i++) {
    sum += dataset[i];
  }
  document.getElementById('condice1').innerHTML = (sum);

  count--;
  if (count >= 1) {
    tim = setTimeout("getDiceall()", mSec);
  }
  if (count == 0) {
    count = 20;
    var dicelog = document.createElement("p");
    var deme = (sum);

    var gettime = new Date();
    var m = gettime.getMonth() + 1;
    var d = gettime.getDate();
    dicelog.innerHTML = (m + "/" + d + " " + gettime.toLocaleTimeString() + " <span>【" + deme + "】</span>(" + roll + "D" + men + ")");
    document.getElementById("dicelog_box").insertBefore(dicelog, dicelog_box.firstChild);
  }

}


//------------------------------------------------------------------------------
//技能判定自作ダイス
//1d100を振る。セレクトボックスのidと照らし合わせて、判定。
//ダイスログにはセレクトボックスのvalが入る。

//skill_valは読み込めた。あとは表示

function getDice_skill(){
  var mt = new MersenneTwister();


  //1d100を振る
  var dice10_1 = mt.nextInt(0, 10);
  var dice10_2 = mt.nextInt(0, 10);


  //セレクトボックス式ダイスの表示を消す
  document.getElementById('condiceall').innerHTML = ("");

  //condiceフィールドに表示する
  document.getElementById('condice1').innerHTML = (dice10_1) * 10 + (dice10_2);
  if ((dice10_1) * 10 + (dice10_2) == 0) {
    document.getElementById('condice1').innerHTML = 100
  }
  var Result = parseInt(document.getElementById("condice1").innerHTML) + 0;


  //result表示
  target = document.getElementById("result");

  if (Result >= 96) {
    document.getElementById('result').innerHTML = ("<span class='text-danger'>ファンブル！</span>");
  } else if (Result == 0) {
    document.getElementById('result').innerHTML = ("<span class='text-danger'><strong>ファンブル！</strong></span>");
  } else if (Result <= 5) {
    document.getElementById('result').innerHTML = ("<span class='text-primary'>クリティカル！</span>");
  } else {
    document.getElementById('result').innerHTML = ("");
  }

  //技能判定result
  var skill_val =   $('#dice_skill_select option:selected').text();
  document.getElementById('condiceall').innerHTML = (skill_val);

  if (Result <= $('#dice_skill_select option:selected').val()) {//判定成功
    $('#condice1').attr('class','text-primary');
  }  else {//判定失敗
    $('#condice1').attr('class','text-danger');
  }


  count--;
  if (count >= 1) {
    tim = setTimeout("getDice_skill()", mSec);
  }
  if (count == 0) {
    count = 20;

    var dicelog = document.createElement("p");
    var deme = (dice10_1) * 10 + (dice10_2);
    var gettime = new Date();
    var m = gettime.getMonth() + 1;
    var d = gettime.getDate();
    if (deme == 0) {
      dicelog.innerHTML = (m + "/" + d + " " + gettime.toLocaleTimeString() + " <span>【100】</span>("+skill_val+")");
      document.getElementById("dicelog_box").insertBefore(dicelog, dicelog_box.firstChild);
    } else {
      dicelog.innerHTML = (m + "/" + d + " " + gettime.toLocaleTimeString() + " <span>【" + deme + "】</span>("+skill_val+")");
      document.getElementById("dicelog_box").insertBefore(dicelog, dicelog_box.firstChild);
    }

  }

}
