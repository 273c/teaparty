
// ダークデイズドライブ専用


//スフレDDD_masterシートJSON出力 by SheetAPIv4
var DDD_data_json_URL = "https://sheets.googleapis.com/v4/spreadsheets/1XPbNsOruJ6p2vUMtMHBnnjTjV5g_0IZyK7Yursjv6m4/values/DDD_master!A2:AB1000?key=AIzaSyAbx80bTQcqDmi62lwb4BBkfot2gUY9_QA";


//車アイコン

var car_icon = [

  {c_name:'軽自動車1',c_URL:ttntf_img + '/DDD/lv1_1.jpg'},
  {c_name:'軽自動車2',c_URL:ttntf_img + '/DDD/lv1_2.jpg'},
  {c_name:'軽自動車3',c_URL:ttntf_img + '/DDD/lv1_3.jpg'},

  {c_name:'セダン中古1',c_URL:ttntf_img + '/DDD/lv2_1.jpg'},
  {c_name:'セダン中古2',c_URL:ttntf_img + '/DDD/lv2_2.jpg'},
  {c_name:'セダン中古3',c_URL:ttntf_img + '/DDD/lv2_3.jpg'},

  {c_name:'ワンボックス1',c_URL:ttntf_img + '/DDD/lv3_1.jpg'},
  {c_name:'ワンボックス2',c_URL:ttntf_img + '/DDD/lv3_2.jpg'},

];

//--------------------------------------------------------


function DDD_read(){//プルダウン

	$('#DDD_main').hide();//DDDモードパネル表示
		$('#states_panell_DDD').show();//DDDモードパネル表示

    get_jsonp (DDD_data_json_URL).done(function(data) {

		$('#PC_name_select').children().remove();

		for(var i=0;i<data.values.length;i++){
			$("#PC_name_select").append($('<option id="DDD" value=' + [i] +'>').html(data.values[i][0] +'：'+ data.values[i][1] + '/' + data.values[i][2]+' '+ data.values[i][4]+' '+ data.values[i][6]));
		}

	});

};


//--------------------------------------------------------


function DDD_panel(){//DDDモードご主人様データシートパネル

$("#DDD_name,#award,#beauty,#bad,#handsome,#car_status").empty();
$('#img_URL_car').removeAttr('src');

  get_room_info('#room_list_DDD');

  get_jsonp (DDD_data_json_URL) .done(function(data) {

    //変数取得
    var i = $("#PC_name_select").val(),
        datas = data.values[i],

        KP_name = datas[0],
        M_name = datas[1],
        M_name2 = datas[10],

        PC1 = datas[2],
        PC1_URL = datas[3],
        PC2 = datas[4],
        PC2_URL = datas[5],
        PC3 = datas[6],
        PC3_URL = datas[7],

        award = datas[8],
        money = datas[9],

        beauty = datas[11],
        beauty_tr = datas[12],
        bad = datas[13],
        bad_tr = datas[14],

        car_type = datas[15],
        car_name = datas[16],
        car_year = datas[17],
        car_power = datas[18],
        car_handle = datas[19],
        car_stay = datas[20],
        car_limit = datas[21],
        car_back = datas[22],
        car_custum = datas[23];



    //コマ画像取得
      get_koma(M_name);

			for(var i = 0 ; i < car_icon.length ; i++){//car_iconの中から探す
      if (car_type == car_icon[i].c_name){
        var spread_img_url = car_icon[i].c_URL;
      $('#img_URL_car').attr('src', spread_img_url);
        break;
     }else{
        $('#img_URL_car').removeAttr('src');
        continue;
    }

    } //for


  //表に挿入

      //name
      $("#DDD_name").append('<small>' +M_name2 + '</small><BR>' + M_name + '<small>(' + KP_name + ')</small>');

      //award
		    $("#award")
        .text("【功績】" + award + "/【予算】" + money + "");


      //beauty
		    $("#beauty")
        .append('<td>' + beauty + '</td>')
        .append('<td  colspan="2">' + beauty_tr + '</td>');

      //bad
		    $("#bad")
        .append('<td>' + bad + '</td>')
        .append('<td colspan="2">' + bad_tr + '</td>');


      //handsome
      if (PC1_URL){
       $("#handsome").append('<td><a href="' + PC1_URL+ '">' + PC1 +'</a></td>');
      }else{
        $("#handsome").append('<td>' + PC1 +'</td>');
      }

      if (PC2_URL){
       $("#handsome").append('<td><a href="' + PC2_URL+ '">' + PC2 +'</a></td>');
      }else{
        $("#handsome").append('<td>' + PC2 +'</td>');
      }

      if (PC3_URL){
       $("#handsome").append('<td><a href="' + PC3_URL+ '">' + PC3 +'</a></td>');
      }else{
        $("#handsome").append('<td>' + PC3 +'</td>');
      }


      //car_name
		    $("#car_name")
        .text(car_name);

      //car_status
		    $("#car_status")
        .append('<tr><th>車種</th><td>' + car_type + '</td><th>年式</th><td>' +car_year + '</td></tr>')
        .append('<tr><th>出力</th><td>' + car_power + '</td><th>操作性</th><td>' +car_handle + '</td></tr>')
        .append('<tr><th>居住性</th><td>' + car_stay + '</td><th>座席/トランク</th><td>' +car_limit +'/' +car_back + '</td></tr>')
        .append('<tr><th>カスタマイズ</th><td colspan="3">' + car_custum + '</td></tr>');





$('#ttntf_go_DDD_master').click(function(){

    //たつんとふ送信専用
    var Name_PC_PL = M_name ;

    var postUser = "魔法瓶";
    var postMessage = "主人である【"+Name_PC_PL+"】様を召喚しました。";

    var postRoomNo = $('#room_list_DDD option:selected').val();
    var password = null;

    //パスワード確認
       if (password == null) {
       password = window.prompt("ルームパスワードの入力","");
       if (password == null) {
         return;
       }
     }

        $.ajax({
           url : ttntf_url,
           type:'GET',
           data:  {
             "webif":"addCharacter",
             "room":postRoomNo,
             "password":password,
             "name":Name_PC_PL,
             "counters":"所持金:" +money+ ",*魅了:1,*怪力:1,*変身:1",
             "info":"【功績】" +award+ "【美学】" +beauty+"/"+beauty_tr+"【悪癖】"+bad+"/"+bad_tr,
             "isHide":false,
             "image":img_koma,
             "x":1,
             "y":1,
             "size":3
           },
           dataType:'jsonp',
         }).done(function(data) {

           if (!data) {
             alert("連携に失敗しました。接続するURL、バージョンを確認してください。");
             password = null;
           } else if (data.result != "OK") {
             alert("連携に失敗しました。パスワードが正しいか確認してください。");
             console.log(data.result);
             password = null;
           }
           else {
          //	  成功
          $.ajax({
             url : ttntf_url,
             type:'GET',
             data: {
               "webif":"talk",
               "room":postRoomNo,
               "password":password,
               "name":postUser,
               "message":postMessage
             },
             dataType:'jsonp',
           }).done(function(data) {
               alert("【" + Name_PC_PL + "】を" +postRoomNo+ "番部屋にお招きしました。");
            });
          }

     			});//first ajax
            return false;
});

$('#ttntf_go_DDD_car').click(function(){

    //たつんとふ送信専用
    var Name_PC_PL = car_name ;

    var postUser = "魔法瓶";
    var postMessage = "【"+Name_PC_PL+"】をガレージから出してきました。";

    var postRoomNo = $('#room_list_DDD option:selected').val();
    var password = null;

    //パスワード確認
       if (password == null) {
       password = window.prompt("ルームパスワードの入力","");
       if (password == null) {
         return;
       }
     }

        $.ajax({
           url : ttntf_url,
           type:'GET',
           data:  {
             "webif":"addCharacter",
             "room":postRoomNo,
             "password":password,
             "name":Name_PC_PL,
             "info":"【居住性】" +car_stay+ "【出力/操作性】" +car_power+"/"+car_handle+"【座席/トランク】"+car_limit+"/"+car_back+"【カスタム】"+car_custum,
             "isHide":false,
             "image":spread_img_url,
             "x":1,
             "y":1,
             "size":2
           },
           dataType:'jsonp',
          }).done(function(data) {

            if (!data) {
              alert("連携に失敗しました。接続するURL、バージョンを確認してください。");
              password = null;
            } else if (data.result != "OK") {
              alert("連携に失敗しました。パスワードが正しいか確認してください。");
              console.log(data.result);
              password = null;
            }
            else {
           //	  成功
           $.ajax({
              url : ttntf_url,
              type:'GET',
              data: {
                "webif":"talk",
                "room":postRoomNo,
                "password":password,
                "name":postUser,
                "message":postMessage
              },
              dataType:'jsonp',
            }).done(function(data) {
                alert("【" + Name_PC_PL + "】を" +postRoomNo+ "番部屋にもっていきました。");
             });
           }

      			});//first ajax
             return false;

  }); //jsonp


	$('#DDD_main').show();//DDDモードパネル表示

});
};

//--------------------------------------------------------
