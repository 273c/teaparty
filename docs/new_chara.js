// JavaScript Document

	count = 20;	//　点滅させる回数
	mSec = 50;	//　点滅速度（1秒＝1000）



	function new_str() {
		var mt = new MersenneTwister();
		var dice1_1 = mt.nextInt(0, 6);
		var dice1_2 = mt.nextInt(0, 6);
		var dice1_3 = mt.nextInt(0, 6);

		document.getElementById('new_result_str').innerHTML = (dice1_1 + 1) + (dice1_2 + 1) + (dice1_3 + 1);

//DB
	var siz = parseInt(document.getElementById("new_result_siz").innerHTML)+0;
	var dame =(siz + (dice1_1 + 1) + (dice1_2 + 1) + (dice1_3 + 1));
	if (dame <=12){document.getElementById('new_result_DB').innerHTML = ("－1D6") ;}
	else if (dame <=16) {document.getElementById('new_result_DB').innerHTML = ("－1D4")}
	else if (dame <=24) {document.getElementById('new_result_DB').innerHTML = ("0")}
	else if (dame <=32) {document.getElementById('new_result_DB').innerHTML = ("+1D4")}
	else if (dame <=36) {document.getElementById('new_result_DB').innerHTML = ("+1D6")}
	else {document.getElementById('new_result_DB').innerHTML = ("-")}


		count--;
		if (count >=1 )	{ tim = setTimeout("new_str()",mSec);}
		if (count ==0 )	{ count = 20 ;}
	}

	function new_con() {
		var mt = new MersenneTwister();
		var dice2_1 = mt.nextInt(0, 6);
		var dice2_2 = mt.nextInt(0, 6);
		var dice2_3 = mt.nextInt(0, 6);

		document.getElementById('new_result_con').innerHTML = (dice2_1 + 1) + (dice2_2 + 1) + (dice2_3 + 1);

//HP
		var siz = parseInt(document.getElementById("new_result_siz").innerHTML)+0;
		if (siz >=1){document.getElementById('new_result_HP').innerHTML = (siz + (dice2_1 + 1) + (dice2_2 + 1) + (dice2_3 + 1))/2;}
	else {document.getElementById('new_result_HP').innerHTML = ("-")}

		count--;
		if (count >=1 )	{ tim = setTimeout("new_con()",mSec);}
		if (count ==0 )	{ count = 20 ;}
	}


	function new_pow() {
		var mt = new MersenneTwister();
		var dice3_1 = mt.nextInt(0, 6);
		var dice3_2 = mt.nextInt(0, 6);
		var dice3_3 = mt.nextInt(0, 6);

		document.getElementById('new_result_pow').innerHTML = (dice3_1 + 1) + (dice3_2 + 1) + (dice3_3 + 1);

		document.getElementById('new_result_SAN').innerHTML = ((dice3_1 + 1) + (dice3_2 + 1) + (dice3_3 + 1)) * 5;
		document.getElementById('new_result_LUCKY').innerHTML = ((dice3_1 + 1) + (dice3_2 + 1) + (dice3_3 + 1)) * 5;
		document.getElementById('new_result_MP').innerHTML = (dice3_1 + 1) + (dice3_2 + 1) + (dice3_3 + 1);

		count--;
		if (count >=1 )	{ tim = setTimeout("new_pow()",mSec);}
		if (count ==0 )	{ count = 20 ;}

	}

	function new_dex() {
		var mt = new MersenneTwister();
		var dice4_1 = mt.nextInt(0, 6);
		var dice4_2 = mt.nextInt(0, 6);
		var dice4_3 = mt.nextInt(0, 6);

		document.getElementById('new_result_dex').innerHTML = (dice4_1 + 1) + (dice4_2 + 1) + (dice4_3 + 1);

		count--;
		if (count >=1 )	{ tim = setTimeout("new_dex()",mSec);}
		if (count ==0 )	{ count = 20 ;}

	}

	function new_app() {
		var mt = new MersenneTwister();
		var dice5_1 = mt.nextInt(0, 6);
		var dice5_2 = mt.nextInt(0, 6);
		var dice5_3 = mt.nextInt(0, 6);

		document.getElementById('new_result_app').innerHTML = (dice5_1 + 1) + (dice5_2 + 1) + (dice5_3 + 1);

		count--;
		if (count >=1 )	{ tim = setTimeout("new_app()",mSec);}
		if (count ==0 )	{ count = 20 ;}

	}

	function new_siz() {
		var mt = new MersenneTwister();

		var con = parseInt(document.getElementById("new_result_con").innerHTML)+0;
		var str = parseInt(document.getElementById("new_result_str").innerHTML)+0;

		var dice6_1 = mt.nextInt(0, 6);
		var dice6_2 = mt.nextInt(0, 6);

		document.getElementById('new_result_siz').innerHTML = (dice6_1 + 1) + (dice6_2 + 1) + 6;


		document.getElementById('new_result_HP').innerHTML = Math.ceil((con + (dice6_1 + 1) + (dice6_2 + 1) + 6)/2);

		var dame =(str + (dice6_1 + 1) + (dice6_2 + 1) + 6);
		if (dame <=12){document.getElementById('new_result_DB').innerHTML = ("－1D6") ;}
		else if (dame <=16) {document.getElementById('new_result_DB').innerHTML = ("－1D4")}
		else if (dame <=24) {document.getElementById('new_result_DB').innerHTML = ("0")}
		else if (dame <=32) {document.getElementById('new_result_DB').innerHTML = ("+1D4")}
		else if (dame <=36) {document.getElementById('new_result_DB').innerHTML = ("+1D6")}
		else {document.getElementById('new_result_DB').innerHTML = ("-")}

		count--;
		if (count >=1 )	{ tim = setTimeout("new_siz()",mSec);}
		if (count ==0 )	{ count = 20 ;}

	}

	function new_int() {
		var mt = new MersenneTwister();

		var dice7_1 = mt.nextInt(0, 6);
		var dice7_2 = mt.nextInt(0, 6);

		document.getElementById('new_result_int').innerHTML = (dice7_1 + 1) + (dice7_2 + 1) + 6;

		document.getElementById('new_result_IDEA').innerHTML = ((dice7_1 + 1) + (dice7_2 + 1) + 6) * 5;

		document.getElementById('new_result_SHUMI').innerHTML = ((dice7_1 + 1) + (dice7_2 + 1) + 6) * 10;

		count--;
		if (count >=1 )	{ tim = setTimeout("new_int()",mSec);}
		if (count ==0 )	{ count = 20 ;}

	}

	function new_edu() {
		var mt = new MersenneTwister();

		var dice8_1 = mt.nextInt(0, 6);
		var dice8_2 = mt.nextInt(0, 6);
		var dice8_3 = mt.nextInt(0, 6);


		document.getElementById('new_result_edu').innerHTML = (dice8_1 + 1) + (dice8_2 + 1) + (dice8_3 + 1) + 3;

		document.getElementById('new_result_KNOW').innerHTML = ((dice8_1 + 1) + (dice8_2 + 1) + (dice8_3 + 1) + 3) * 5;
		document.getElementById('new_result_SHOKUGYO').innerHTML = ((dice8_1 + 1) + (dice8_2 + 1) + (dice8_3 + 1) + 3) * 20;

		count--;
		if (count >=1 )	{ tim = setTimeout("new_edu()",mSec);}
		if (count ==0 )	{ count = 20 ;}

	}


	function new_features() {
    var mt = new MersenneTwister();

    var dice10_1 = mt.nextInt(1, 6);
    var dice10_2 = mt.nextInt(1, 10);

	get_features(dice10_1, dice10_2);

//	var features_name = features[dice10_1][dice10_2].name;
//	var features_txt = features[dice10_1][dice10_2].txt;

//	document.getElementById('new_result_features').innerHTML = ('<b>' + dice10_1 + "-" + dice10_2 + " 『" + features_name + "』</b><BR>" + features_txt);

   // count--;
   // if (count >=1 )	{ tim = setTimeout("new_features()",mSec);}
   // if (count ==0 )	{ count = 20 ;}

}



function new_all() {
		var mt = new MersenneTwister();

//new_result_str
		var dice1_1 = mt.nextInt(0, 6);
		var dice1_2 = mt.nextInt(0, 6);
		var dice1_3 = mt.nextInt(0, 6);

		document.getElementById('new_result_str').innerHTML = (dice1_1 + 1) + (dice1_2 + 1) + (dice1_3 + 1);

//DB
	var siz = parseInt(document.getElementById("new_result_siz").innerHTML)+0;
	var dame =(siz + (dice1_1 + 1) + (dice1_2 + 1) + (dice1_3 + 1));
	if (dame <=12){document.getElementById('new_result_DB').innerHTML = ("－1D6") ;}
	else if (dame <=16) {document.getElementById('new_result_DB').innerHTML = ("－1D4")}
	else if (dame <=24) {document.getElementById('new_result_DB').innerHTML = ("0")}
	else if (dame <=32) {document.getElementById('new_result_DB').innerHTML = ("+1D4")}
	else if (dame <=36) {document.getElementById('new_result_DB').innerHTML = ("+1D6")}
	else {document.getElementById('new_result_DB').innerHTML = ("-")}


		count--;
		if (count >=1 )	{ tim = setTimeout("new_str()",mSec);}
		if (count ==0 )	{ count = 20 ;}


//new_result_con
	var dice2_1 = mt.nextInt(0, 6);
	var dice2_2 = mt.nextInt(0, 6);
	var dice2_3 = mt.nextInt(0, 6);

	document.getElementById('new_result_con').innerHTML = (dice2_1 + 1) + (dice2_2 + 1) + (dice2_3 + 1);

//HP
	var siz = parseInt(document.getElementById("new_result_siz").innerHTML)+0;
	if (siz >=1){document.getElementById('new_result_HP').innerHTML = (siz + (dice2_1 + 1) + (dice2_2 + 1) + (dice2_3 + 1))/2;}
else {document.getElementById('new_result_HP').innerHTML = ("-")}

	count--;
	if (count >=1 )	{ tim = setTimeout("new_con()",mSec);}
	if (count ==0 )	{ count = 20 ;}


//new_result_pow
	var dice3_1 = mt.nextInt(0, 6);
	var dice3_2 = mt.nextInt(0, 6);
	var dice3_3 = mt.nextInt(0, 6);

	document.getElementById('new_result_pow').innerHTML = (dice3_1 + 1) + (dice3_2 + 1) + (dice3_3 + 1);

	document.getElementById('new_result_SAN').innerHTML = ((dice3_1 + 1) + (dice3_2 + 1) + (dice3_3 + 1)) * 5;
	document.getElementById('new_result_LUCKY').innerHTML = ((dice3_1 + 1) + (dice3_2 + 1) + (dice3_3 + 1)) * 5;
	document.getElementById('new_result_MP').innerHTML = (dice3_1 + 1) + (dice3_2 + 1) + (dice3_3 + 1);

	count--;
	if (count >=1 )	{ tim = setTimeout("new_pow()",mSec);}
	if (count ==0 )	{ count = 20 ;}


//new_result_dex
	var dice4_1 = mt.nextInt(0, 6);
	var dice4_2 = mt.nextInt(0, 6);
	var dice4_3 = mt.nextInt(0, 6);

	document.getElementById('new_result_dex').innerHTML = (dice4_1 + 1) + (dice4_2 + 1) + (dice4_3 + 1);

	count--;
	if (count >=1 )	{ tim = setTimeout("new_dex()",mSec);}
	if (count ==0 )	{ count = 20 ;}



//new_result_app
	var dice5_1 = mt.nextInt(0, 6);
	var dice5_2 = mt.nextInt(0, 6);
	var dice5_3 = mt.nextInt(0, 6);

	document.getElementById('new_result_app').innerHTML = (dice5_1 + 1) + (dice5_2 + 1) + (dice5_3 + 1);

	count--;
	if (count >=1 )	{ tim = setTimeout("new_app()",mSec);}
	if (count ==0 )	{ count = 20 ;}


//new_result_siz
	var con = parseInt(document.getElementById("new_result_con").innerHTML)+0;
	var str = parseInt(document.getElementById("new_result_str").innerHTML)+0;

	var dice6_1 = mt.nextInt(0, 6);
	var dice6_2 = mt.nextInt(0, 6);

	document.getElementById('new_result_siz').innerHTML = (dice6_1 + 1) + (dice6_2 + 1) + 6;


	document.getElementById('new_result_HP').innerHTML = Math.ceil((con + (dice6_1 + 1) + (dice6_2 + 1) + 6)/2);

	var dame =(str + (dice6_1 + 1) + (dice6_2 + 1) + 6);
	if (dame <=12){document.getElementById('new_result_DB').innerHTML = ("－1D6") ;}
	else if (dame <=16) {document.getElementById('new_result_DB').innerHTML = ("－1D4")}
	else if (dame <=24) {document.getElementById('new_result_DB').innerHTML = ("0")}
	else if (dame <=32) {document.getElementById('new_result_DB').innerHTML = ("+1D4")}
	else if (dame <=36) {document.getElementById('new_result_DB').innerHTML = ("+1D6")}
	else {document.getElementById('new_result_DB').innerHTML = ("-")}

	count--;
	if (count >=1 )	{ tim = setTimeout("new_siz()",mSec);}
	if (count ==0 )	{ count = 20 ;}


//new_result_int
	var dice7_1 = mt.nextInt(0, 6);
	var dice7_2 = mt.nextInt(0, 6);

	document.getElementById('new_result_int').innerHTML = (dice7_1 + 1) + (dice7_2 + 1) + 6;

	document.getElementById('new_result_IDEA').innerHTML = ((dice7_1 + 1) + (dice7_2 + 1) + 6) * 5;

	document.getElementById('new_result_SHUMI').innerHTML = ((dice7_1 + 1) + (dice7_2 + 1) + 6) * 10;

	count--;
	if (count >=1 )	{ tim = setTimeout("new_int()",mSec);}
	if (count ==0 )	{ count = 20 ;}



//new_result_edu
	var dice8_1 = mt.nextInt(0, 6);
	var dice8_2 = mt.nextInt(0, 6);
	var dice8_3 = mt.nextInt(0, 6);


	document.getElementById('new_result_edu').innerHTML = (dice8_1 + 1) + (dice8_2 + 1) + (dice8_3 + 1) + 3;

	document.getElementById('new_result_KNOW').innerHTML = ((dice8_1 + 1) + (dice8_2 + 1) + (dice8_3 + 1) + 3) * 5;
	document.getElementById('new_result_SHOKUGYO').innerHTML = ((dice8_1 + 1) + (dice8_2 + 1) + (dice8_3 + 1) + 3) * 20;

	count--;
	if (count >=1 )	{ tim = setTimeout("new_edu()",mSec);}
	if (count ==0 )	{ count = 20 ;}

	}



//ツイートボタンが押された時の処理
$('#tweet').click(function() {

	var STR = parseInt(document.getElementById("new_result_str").innerHTML)+0;
	var CON = document.getElementById("new_result_con").innerHTML;
	var POW = document.getElementById("new_result_pow").innerHTML;
	var DEX = document.getElementById("new_result_dex").innerHTML;
	var APP = document.getElementById("new_result_app").innerHTML;
	var SIZ = parseInt(document.getElementById("new_result_siz").innerHTML)+0;
	var INT = document.getElementById("new_result_int").innerHTML;
	var EDU = document.getElementById("new_result_edu").innerHTML;

	var SAN = document.getElementById("new_result_SAN").innerHTML;
	var LUK = document.getElementById("new_result_LUCKY").innerHTML;
	var IDA = document.getElementById("new_result_IDEA").innerHTML;
	var KNO = document.getElementById("new_result_KNOW").innerHTML;
	var EDR = document.getElementById("new_result_HP").innerHTML;
	var MGP = document.getElementById("new_result_MP").innerHTML;
	var EDP = document.getElementById("new_result_SHOKUGYO").innerHTML;
	var INP = document.getElementById("new_result_SHUMI").innerHTML;

	var dame =(STR + SIZ);
	if (dame <=12){var DMB = ("－1D6") ;}
	else if (dame <=16) {var DMB = ("－1D4")}
	else if (dame <=24) {var DMB = ("0")}
	else if (dame <=32) {var DMB = ("＋1D4")}
	else if (dame <=36) {var DMB = ("＋1D6")}
	else {var DMB = ("-")}

	var tw_contents = ("STR:" + STR + " CON:" + CON + " POW:" + POW + " DEX:" + DEX + " APP:" + APP + " SIZ:" + SIZ + " INT:" + INT + " EDU:" + EDU + " SAN:" + SAN + " 幸運:" + LUK + " IDA:" + IDA + " 知識:" + KNO + " HP:" + EDR + " MP:" + MGP + " 職P:" + EDP + " 趣P:" + INP + " DB:" + DMB);

	var url = "!MagicBottle in Teaparty!";

	window.open().location.href = ("https://twitter.com/share?url=" + url + "&text=" + tw_contents + "&lang=ja");

});



	//いあきゃら連携が押された時の処理
$('#iachara_newsheet').click(function() {

		var STR = parseInt(document.getElementById("new_result_str").innerHTML)+0;
		var CON = document.getElementById("new_result_con").innerHTML;
		var POW = document.getElementById("new_result_pow").innerHTML;
		var DEX = document.getElementById("new_result_dex").innerHTML;
		var APP = document.getElementById("new_result_app").innerHTML;
		var SIZ = parseInt(document.getElementById("new_result_siz").innerHTML)+0;
		var INT = document.getElementById("new_result_int").innerHTML;
		var EDU = document.getElementById("new_result_edu").innerHTML;

		var SAN = document.getElementById("new_result_SAN").innerHTML;

		var character_obj = {
			"STR":STR,
			"CON":CON,
			"POW":POW,
			"DEX":DEX,
			"APP":APP,
			"SIZ":SIZ,
			"INT":INT,
			"EDU":EDU,

		}

		window.open().location.href = ("https://iachara.com/new/costom/webdice?var=6&STR=" + STR + "&CON=" + CON + "&POW=" + POW + "&DEX=" + DEX + "&APP=" + APP + "&SIZ=" + SIZ + "&INT=" + INT + "&EDU=" + EDU);

	});
