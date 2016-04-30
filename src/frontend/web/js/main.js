var vueObj;
$(document).ready(function(){
  vueObj = new Vue({
    el: 'main',
    data: {
      hash_tags:[],
      text_message:"",
      view_section:false,
      hash_loading:false
    }
  });
  $('#up_file').uploadThumbs({
        position : '#preview1'
  });
  $("#bgndVideo").YTPlayer();
  $('#background_video').tubular({
    videoId: '4Bh1nm7Ir8c',
    repeat: true,
    mute: true
  });
});
/**
 * 選択した画像をajaxを利用してアップロード
 * @author tomoki uekusa
 */
function upload(form){
  var tmp_str = $("#txt_area").val()
  for (var i = 0; i < vueObj.hash_tags.length; i++) {
    tmp_str += " "+vueObj.hash_tags[i];
  }
  $("#txt_area").val(tmp_str);

  $form = $('#upload_form');
  var fd = new FormData($form[0]);

  $.ajax({
    url: "http://133.25.210.30:34001/oauth",
    type: "post",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: fd,
    success: function(data) {
      console.log("success");
      console.log(data.message);
      console.log(data);
      window.location.href = data;
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("error");
      console.log(textStatus);
      console.log(errorThrown);

    }
  });
}
/**
 * @param
 * @return
 */
function getTextarea(text){
  // console.log("text is changed");
  // vueObj.text_message = text.value;
}
function clickTag(tag_index){
  vueObj.hash_tags.splice( tag_index, 1 );
}
function changeImage(form){
  vueObj.view_section = true;
  vueObj.hash_loading = true;
  $form = $('#upload_form');
  var fd = new FormData($form[0]);
  console.log(form[0]);
  console.log(fd);
  $.ajax({
    url: "http://133.25.210.30:34001/hashtag",
    type: "post",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: fd,
    success: function(data) {
        console.log(data.message);
        console.log(data);
        vueObj.hash_tags = data.hashtags;
        vueObj.hash_loading = false;
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log(textStatus);
        console.log(errorThrown);
    }
  });
}
