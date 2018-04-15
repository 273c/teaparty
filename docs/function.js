//タブ bootstrap
	$('#myTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})
	$('#accordion').collapse({
  toggle: false
})


//ツールチップ表示 bootstrap
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});



//クリップボードにコピー
var clipboard = new Clipboard('#copy_btn');
clipboard.on('success', function(e) {
    alert("クリップボードにコピーしました。");
    e.clearSelection();
});
clipboard.on('error', function(e) {
    alert("コピーしました…");
});


	//たつんとふ設定
	var ttntf_url = 'http://shower.rash.jp/xx/ddntf/web/DodontoF/DodontoFServer.rb';

	var ttntf_img = "http://shower.rash.jp/xx/ddntf/web/imageUploadSpace";
	var spread_img_URL = "https://script.google.com/macros/s/AKfycbyqFm-tKIxQivwp9KVj-5Q_dkyDjZJfFkURxUtwQmFPTjKtkxvu/exec";


//grep
function get_grep(dataAry, key, value) {
    var result = $.grep(dataAry, function (e) {
      return e[key] == value;
        });
        return result;
  }

//JSON&jsonp読み込み
function get_json(url){
	return $.ajax({
					 url : url,
					 type:'GET',
					 dataType:'json',
				});
};
function get_jsonp(url){
	return $.ajax({
					 url : url,
					 type:'GET',
					 dataType:'jsonp',
				});
};



//コマアドレス取得
function get_koma(Koma_name){

		return get_json(spread_img_URL).done(function(data) {//grepにはできないわ。

						for(var i = 0 ; i < data.length ; i++){//dataの中から探す

						if (Koma_name == data[i].icon_name){
							var spread_img_0 = data[i].icon_url;
							var spread_img_url = ttntf_img + spread_img_0.replace(/(local)/gi , "").replace(/\(/g, '（').replace(/\)/g, '）').replace(/（.*?）/gi , "").replace(/　/g,"").replace(/\s/g,"");

	 					$("[id=img_URL]").attr('src', spread_img_url);
						$("[id=img_URL_smh_space]").append('<img src="' +spread_img_url+ '" class="media-object img-responsive img-rounded center-block visible-xs"  style="width: 150px; height: 150px;" id="img_URL_smh">');

						break;

					 }else{
						 //	$("[id=img_URL]").attr('src',null);
						//	$("[id=img_URL_smh_space]").empty();
						 	continue;
 					}
					} //for
					 return img_koma = spread_img_0;
			 });

};



//-----------------------------------------------------------------------------

//ルーム情報を読み込む
function get_room_info(e){

		$.ajax({
			 url : ttntf_url,
			 type:'GET',
			 data: {
				webif:"getRoomList"
			 },
			 dataType:'jsonp',
		}).done(function(data_room) {

			for(var i=0;i<data_room.playRoomStates.length;i++){
			$(e)
				.append('<option value='+data_room.playRoomStates[i].index+ '>' + data_room.playRoomStates[i].index +'：' + data_room.playRoomStates[i].playRoomName+'</option>');
			}//for

			});
}

//-----------------------------------------------------------------------------
