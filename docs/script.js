

//ページを開いた時に動かすもの
//PLプルダウン＋PCプルダウン自動チェンジ
$(document).ready( function(){


	var PL_name = ["竜原","香月悠","ベータ","星野","唯","みやく","せばた","DDDデータ"];
	var	PL_ID_list = ["39824","39841","52207","25227","66093","54098","62183","DDD"];


//PLの名前プルダウンを作成
for(var i in PL_name){
	$('#PL_name_select').append($('<option id="PL_id" value=' +PL_ID_list[i]+ '>').html( PL_name[i] ));

}


 	//--------------------------------------------------------

//PLの名前プルダウンの値が変更されたとき
 $('#PL_name_select').bind('change',function(){


if ( $('#PL_name_select option:selected').val() == "DDD"){ //ダークデイズドライブご主人さまシートをプルダウン選択

	$('#states_panell').hide();//クトゥルフモードパネル非表示

DDD_read(); //DDDのご主人様JSON読み込み＆プルダウン

}
else{//クトゥルフモード

	$('#states_panell_DDD').hide();//DDDモードパネル非表示

//値に入っているPLIDを呼びだす
    var PL_ID_select = $(this).val();

//6P目までの探索者を呼び出す。
 var  PL_URL = '//charasheet.vampire-blood.net/' +PL_ID_select+ '_list.js';
 var  PL_URL_page2 = '//charasheet.vampire-blood.net/' +PL_ID_select+ '_list.js?page=2';
 var  PL_URL_page3 = '//charasheet.vampire-blood.net/' +PL_ID_select+ '_list.js?page=3';
 var  PL_URL_page4 = '//charasheet.vampire-blood.net/' +PL_ID_select+ '_list.js?page=4';
 var  PL_URL_page5 = '//charasheet.vampire-blood.net/' +PL_ID_select+ '_list.js?page=5';
 var  PL_URL_page6 = '//charasheet.vampire-blood.net/' +PL_ID_select+ '_list.js?page=6';
	
var request = [
	 { url: PL_URL },
	 { url: PL_URL_page2 },
	 { url: PL_URL_page3 },
	 { url: PL_URL_page4 },
	{ url: PL_URL_page5 },
	{ url: PL_URL_page6 },
];

var jqXHRList = [];
for (var i = 0; i < request.length; i++) {
	 jqXHRList.push($.ajax({
			 type: "POST",
			 dataType:'jsonp',
			 url: request[i].url,
	 }));
}

// Ajaxを動かす。
$.when.apply($, jqXHRList).done(function () {
$('#PC_name_select').children().remove();

$('#PC_name_select').append('<option value="PC_states_table">PC一覧</option>');

 //２つのアドレスデータを取得
	 var page1 = arguments[0][0];
	 var page2 = arguments[1][0];
	 var page3 = arguments[2][0];
	 var page4 = arguments[3][0];
	 var page5 = arguments[4][0];
	 var page6 = arguments[5][0];

	 //なんかこの辺いい感じのスクリプトを思いついたら治そう。多分forループで処理できる。
	 //あまりに効率悪い。そのうちエラー吐いて死にそう。
		for(var i in page1){ //１P目の中で回す
			if (page1[i].system == "クトゥルフ") {
				var name_replace = page1[i].title.replace(/\(/g, '（').replace(/\)/g, '）').replace(/（.*?）/gi , "").replace(/　/g,"").replace(/\s/g,"");
				$('#PC_name_select').append($('<option value=' +page1[i].id+ '>').html(page1[i].id +'： '+ name_replace));
			}
		 }
	 if (page2){ //２ページ目に値がある場合
		 for(var i in page2){
			if (page1[i].system == "クトゥルフ") {
			 var name_replace = page2[i].title.replace(/\(/g, '（').replace(/\)/g, '）').replace(/（.*?）/gi , "").replace(/　/g,"").replace(/\s/g,"");
			 $('#PC_name_select').append($('<option value=' +page2[i].id+ '>').html(page2[i].id +'： '+ name_replace));
		 }
		 }
	 }
	if (page3){ //3ページ目に値がある場合
	 	for(var i in page3){
			if (page1[i].system == "クトゥルフ") {
	 	 var name_replace = page3[i].title.replace(/\(/g, '（').replace(/\)/g, '）').replace(/（.*?）/gi , "").replace(/　/g,"").replace(/\s/g,"");
	 	 $('#PC_name_select').append($('<option value=' +page3[i].id+ '>').html(page3[i].id +'： '+ name_replace));
	 		}
		}
	 	}

	if (page4){ //4ページ目に値がある場合
	 	for(var i in page4){
			if (page1[i].system == "クトゥルフ") {
	 	 var name_replace = page4[i].title.replace(/\(/g, '（').replace(/\)/g, '）').replace(/（.*?）/gi , "").replace(/　/g,"").replace(/\s/g,"");
	 	 $('#PC_name_select').append($('<option value=' +page4[i].id+ '>').html(page4[i].id +'： '+ name_replace));
	 		}
		}
	 	}

	if (page5){ //5ページ目に値がある場合
	 	for(var i in page5){
			if (page1[i].system == "クトゥルフ") {
	 	 var name_replace = page5[i].title.replace(/\(/g, '（').replace(/\)/g, '）').replace(/（.*?）/gi , "").replace(/　/g,"").replace(/\s/g,"");
	 	 $('#PC_name_select').append($('<option value=' +page5[i].id+ '>').html(page5[i].id +'： '+ name_replace));
	 		}
		}
	 	}
	
	if (page6){ //6ページ目に値がある場合
	 	for(var i in page6){
			if (page1[i].system == "クトゥルフ") {
	 	 var name_replace = page6[i].title.replace(/\(/g, '（').replace(/\)/g, '）').replace(/（.*?）/gi , "").replace(/　/g,"").replace(/\s/g,"");
	 	 $('#PC_name_select').append($('<option value=' +page6[i].id+ '>').html(page6[i].id +'： '+ name_replace));
	 		}
		}
	 	}
	
	});//ajax

} //else

}); //プルダウン変更


//--------------------------------------------------------


$('#json_pc_data').click( function (){
	//次にクリックしても同じ値は入らないようにしたい。
	//でも新しい値が入れば、表示するようにしたい。

//一度綺麗にする
$('[id=img_URL]').removeAttr('src');
$('[id=img_URL_smh_space]').empty();


var DDD_check = $('#PC_name_select option:selected').attr("id");
var PC_table = $('#PC_name_select option:selected').attr("value");


if ( DDD_check == "DDD"){//DDD用フィールドパネルを表示

DDD_panel(); //DDDのメインパネル

}

else if( $('#PC_name_select option:selected').val() == "PC_states_table" ){//PC一覧モード

$('#states_panell').hide();//クトゥルフモードパネル非表示
$('#states_panell_table').show();//テーブル


//PLのPCリストの中からPCIDをまわす

//option value id pc全部ひく

//PCIDを読み込みjsonを引いて、その中で更に値をとるためにまわす

    var PC_ID_select = $("#PC_name_select").val();//ＰＣデータ読み込み
 		var PC_URL = '//charasheet.vampire-blood.net/' +PC_ID_select+ '.js';

		//Jquery getjsonで読み込み、データ出力
		get_jsonp (PC_URL).done(function(data){//成功の場合

		var Name = data.pc_name.replace(/\(/g, '（').replace(/\)/g, '）').replace(/（.*?）/gi , "").replace(/　/g,"").replace(/\s/g,"");
		var	ID = data.data_id;
		var SAN = data.SAN_Left;
		var	HP = data.NP9;
		var	STR = data.NP1,
				CON = data.NP2,
				POW = data.NP3,
				DEX = data.NP4,
				APP = data.NP5,
				SIZ = data.NP6,
				INT = data.NP7,
				EDU = data.NP8;

			});//get_jsonp



}//elseif

else{//クトゥルフモード
$('#states_panell_table').hide();//テーブル

$("#pc_name_id,#SAN_HP_MP,#STR_CON_DEX,#idea,#lucky,#knowledge,#db,#copy_filed,#dice_skill_select2,#dice_skill_select,#TBAP,#TFAP,#TAAP,#TCAP,#TKAP").empty();


    var PC_ID_select = $("#PC_name_select").val();//ＰＣデータ読み込み
 		var PC_URL = '//charasheet.vampire-blood.net/' +PC_ID_select+ '.js';
		var PC_URL_nojs = '//charasheet.vampire-blood.net/' + PC_ID_select ;

		//room呼び出し
		get_room_info('#room_list');

//--------------------------------------------------------

		//Jquery getjsonで読み込み、データ出力
		get_jsonp (PC_URL).done(function(data){//成功の場合

		var Name = data.pc_name.replace(/\(/g, '（').replace(/\)/g, '）').replace(/（.*?）/gi , "").replace(/　/g,"").replace(/\s/g,"");
		var	ID = data.data_id;

		var shokugyo = data.shuzoku;
		var age =  data.age;
		var othermemo = data.pc_making_memo.replace(/\n/g, "<br />");;

		var SAN = data.SAN_Left,
				SAN_danger = data.SAN_Danger;

		var	HP = data.NP9,
				MP = data.NP10;

		var	STR = data.NP1,
				CON = data.NP2,
				POW = data.NP3,
				DEX = data.NP4,
				APP = data.NP5,
				SIZ = data.NP6,
				INT = data.NP7,
				EDU = data.NP8;

		var	idea = data.NP12,
				lucky = data.NP13,
				knowledge = data.NP14,
				db = data.dmg_bonus;

		var command = 'CCB<=';
		var skill = ["TB","TF","TA","TC","TK"];
		var dmg = "1d3+" + data["dmg_bonus"];

		var list_str_name =[
						 "SANチェック",
						 "アイディア",
						 "幸運",
						 "知識",
						 "STR*5",
						 "CON*5",
						 "POW*5",
						 "DEX*5",
						 "APP*5",
						 "こぶしダメージ",
						 "応急手当回復量"
					 ];

		var S_TB =[
						"回避",
						"キック",
						"組み付き",
						"こぶし",
						"頭突き",
						"投擲",
						"マーシャルアーツ",
						"拳銃",
						"サブマシンガン",
						"ショットガン",
						"マシンガン",
						"ライフル"
						]

		var S_TF = [
						"応急手当",
						"鍵開け",
						"隠す",
						"隠れる",
						"聞き耳",
						"忍び歩き",
						"写真術",
						"精神分析",
						"追跡",
						"登攀",
						"図書館",
						"目星"
						]

		var S_TA = [
						"運転 "+ data.unten_bunya,
						"機械修理",
						"重機械操作",
						"乗馬",
						"水泳",
						"製作 "+ data.seisaku_bunya,
						"操縦 "+ data.main_souju_norimono,
						"跳躍",
						"電気修理",
						"ナビゲート",
						"変装"
						]

		var S_TC = [
						"言いくるめ",
						"信用",
						"説得",
						"値切り",
						"母国語"
						]

		var S_TK = [
						"医学",
						"オカルト",
						"化学",
						"クトゥルフ神話",
						"芸術 "+ data.geijutu_bunya,
						"経理",
						"考古学",
						"コンピューター",
						"心理学",
						"人類学",
						"生物学",
						"地質学",
						"電子工学",
						"天文学",
						"博物学",
						"物理学",
						"法律",
						"薬学",
						"歴史"
						]


		var S_list =[S_TB,S_TF,S_TA,S_TC,S_TK]

		//チャパレ用
		var str ="";
		var br = '<br>';

//--------------------------------------------------------
//基本ステータス表示

		$("#pc_name_id").append($('<h2 id="name">' + Name + ' <small id="PC_id">(' + age + '歳) <a href=' + PC_URL_nojs + '><span class="glyphicon glyphicon-file" aria-hidden="true"></span></a><BR>'+ shokugyo + '</small>'));

		$("#SAN_HP_MP").append($('<li><h3 id="SAN">SAN:' + SAN + '/<small id="SAN_danger">不定:' + SAN_danger +'</small></h3>')).append($('<li><h4 id="HP">HP:' + HP + '</h4>')).append($('<li><h4 id="MP">MP:' + MP + '</h4>'));

		$("#STR_CON_DEX")
		.append('<td id="STR">' + STR + '/<span class="text-muted">' + STR*5 + '</span></td>')
		.append('<td id="CON">' + CON + '/<span class="text-muted">' + CON*5 + '</span></td>')
		.append('<td id="POW">' + POW + '/<span class="text-muted">' + POW*5 + '</span></td>')
		.append('<td id="DEX">' + DEX + '/<span class="text-muted">' + DEX*5 + '</span></td>')
		.append('<td id="APP">' + APP + '/<span class="text-muted">' + APP*5 + '</span></td>')
		.append('<td id="SIZ">' + SIZ + '/<span class="text-muted">' + SIZ*5 + '</span></td>')
		.append('<td id="INT">' + INT + '/<span class="text-muted">' + INT*5 + '</span></td>')
		.append('<td id="EDU">' + EDU + '/<span class="text-muted">' + EDU*5 + '</span></td>');

	$("#idea").html(idea);
	$("#lucky").html(lucky);
	$("#knowledge").html(knowledge);
	$("#db").html(db);

	$("#othermemo").html(othermemo);

	//チャパレ用コマンド表示
	$("#copy_filed")
						.html(str += command + "{SAN値}" + " 【SANチェック】" + br)
						.html(str += command + idea + " 【アイディア】" + br)
						.html(str += command + lucky + " 【幸運】" + br)
						.html(str += command + knowledge + " 【知識】" + br)
						.html(str += command + "({STR}*5)" + " 【STR*5】" + br)
						.html(str += command + "({CON}*5)" + " 【CON*5】" + br)
						.html(str += command + "({POW}*5)" + " 【POW*5】" + br)
						.html(str += command + "({DEX}*5)" + " 【DEX*5】" + br)
						.html(str += command + "({APP}*5)" + " 【APP*5】" + br)
						.html(str +=  "1d3+" + db + " 【こぶしダメージ】" + br)
						.html(str +=  "1d6+" + db + " 【キックダメージ】" + br)
						.html(str +=  "1d3" + " 【基本回復量】" + br);

	//技能判定ダイス用

	$("#dice_skill_select")
									.append('<option value=' + SAN + '>' +command+ SAN +' 【SANチェック】</option>');

	$("#dice_skill_select2")
								.append('<option value="{SAN値}">' +command+ '{SAN値} 【SANチェック】</option>');

	$("#dice_skill_select,#dice_skill_select2")
						.append('<option value=' +idea+ '>' +command + idea + '【アイディア】</option>')
						.append('<option value=' +lucky+ '>'+command + lucky + '【幸運】</option>')
						.append('<option value=' +knowledge+ '>' +command + knowledge + ' 【知識】</option>')
						.append('<option value=' +STR*5+ '>' +command + STR*5 + ' 【STR*5】</option>' )
						.append('<option value=' +CON*5+ '>' +command + CON*5 + ' 【CON*5】</option>')
						.append('<option value=' +POW*5+ '>' +command + POW*5 + ' 【POW*5】</option>')
						.append('<option value=' +DEX*5+ '>' +command + DEX*5 + ' 【DEX*5】</option>')
						.append('<option value=' +APP*5+ '>' +command + APP*5 + ' 【APP*5】</option>');
						//.append('<option value="1d3+ ' +db+' ">1d3+' +db+ '【こぶしダメージ】</option>')
						//.append('<option value="1d6+ ' +db+' ">1d6+' +db+ '【キックダメージ】</option>')
						//.append('<option value="1d3">1d3【基本回復量】</option>')


//--------------------------------------------------------
//技能値表示



for(var i=0;i<S_list.length;i++){ //スキルカテゴリー数毎に

	var S_cag = S_list[i] ;

	var S_json = ''+skill[i]+'AP'; //合計

	var S_json_AD = ''+skill[i]+'AD'; //初期値
	var S_json_AS = ''+skill[i]+'AS'; //職業
	var S_json_AK = ''+skill[i]+'AK'; //興味
	var S_json_AA = ''+skill[i]+'AA'; //成長

	var S_org = ''+skill[i]+'AName';
	var org = data[S_org];
	var r=0;

 var count1 = S_cag.length ;//カテゴリーの中の範囲

 if (org){
 var count2 = org.length ;//独自スキルの範囲
 var count = count1 + count2 ;
 var org_start = count - count2;//独自スキル名スタート位置

 }else{
	 var count = count1 ;
 }

 var table_id = '#' + S_json;

	for(var j=0;j<count;j++){

	var skill_name = S_cag[j];
	var skill_value = data[S_json][j]; //合計

	var skill_value_AD = data[S_json_AD][j]; //初期値
	var skill_value_AS = data[S_json_AS][j]; //職業
	var skill_value_AK = data[S_json_AK][j]; //興味
	var skill_value_AA = data[S_json_AA][j]; //成長

 if (org && j>=org_start){ //独自スキルのあるターンで独自スキルの番になったら

		var name_org = org[r];

	$(table_id)
						.append('<tr><th>' + name_org + '</th><td><font color="#888888">' + skill_value_AD +'</div></td><td>' + skill_value_AS +'</td><td>' + skill_value_AK +'</td>><td>' + skill_value_AA +'</td><td>' + skill_value + '</td></tr>');

	//チャパレ用コマンド表示
	$("#copy_filed")
						.html(str += command + skill_value + " 【" +name_org+"】" + br);

	//技能判定ダイス用
	$("#dice_skill_select,#dice_skill_select2")
						.append('<option value=' +skill_value+ '>' +command + skill_value + ' 【' +name_org+ '】</option>');

		r++;
	}else{ //独自スキルじゃない場合
	 $(table_id)
						.append('<TR><th>' + skill_name + '</th><td><font color="#888888">' + skill_value_AD +'</font></td><td>' + skill_value_AS +'</td>><td>' + skill_value_AK +'</td>><td>' + skill_value_AA +'</td><td>' + skill_value + '</td></tr>');
		//チャパレ用コマンド表示
	$("#copy_filed")
						.html( str += command + skill_value + " 【" +skill_name+"】" + br);

	//技能判定ダイス用
	$("#dice_skill_select,#dice_skill_select2")
						.append('<option value=' +skill_value+ '>' +command + skill_value + ' 【' +skill_name+ '】</option>');

		var r=0;
	}

}
}


	//チャパレ用コマンド表示
	$("#copy_filed")
						.html(str +=  br)
						.html(str +=  "////////////" +br)
						.html(str += "//STR=" + STR +  br)
						.html(str += "//CON=" + CON +  br)
						.html(str += "//POW=" + POW +  br)
						.html(str += "//DEX=" + DEX +  br)
						.html(str += "//APP=" + APP +  br)
						.html(str += "//SIZ=" + SIZ +  br)
						.html(str += "//INT=" + INT +  br)
						.html(str += "//EDU=" + EDU +  br);


//--------------------------------------------------------


//GASでコマ画像を読み込む
get_koma(Name);


	$('#ttntf_go').one('click', function(){//これのせいで２回コマが送られてしまう。

		 	//たつんとふ送信専用
		 	var PL_name = $('#PL_name_select option:selected').text();
		 	var Name_PC_PL = Name + "＠" + PL_name ;


		 	var postUser = "魔法瓶";
		 	var postMessage = ""+Name_PC_PL+"を召喚しました。";

		 	var postRoomNo = $('#room_list option:selected').val();
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
		 					 "counters":"HP:" +HP+ ",MP:" +MP+ ",SAN値:" +SAN+ ",不定:" +SAN_danger,
		 					 "initiative":DEX,
		 					 "isHide":false,
		 					 "image":img_koma,
		 					 "x":1,
		 					 "y":1,
		 					 "size":3,
		 					 "url":PC_URL_nojs
		 				 },
		 				 dataType:'jsonp',
		 			 success : function(data) {
		 					 completeConnection(data);
		 				 },
		 			 error: function() {
		 					 completeConnection();
		 				 }
		 			});


		 	 // どどんとふとの接続完了
		 	 function completeConnection(data) {
		 		 if (!data) {
		 			 alert("連携に失敗しました。接続するURL、バージョンを確認してください。");
		 			 password = null;
		 		 } else if (data.result != "OK") {
		 			 alert("連携に失敗しました。パスワードが正しいか確認してください。");
					 console.log(data.result);
		 			 password = null;
		 		 } else {
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
		 		 success : function(data) {
		 				 alert("【" + Name_PC_PL + "】を" +postRoomNo+ "番部屋に召還しました。");
					 },
					 error: function() {

					 }
		 		});

		 		 }
		 	 }
		  return false;
		  });


});

$('#states_panell').show();//クトゥルフモードパネル表示

}//else終わり




});

});//全部のしめ
