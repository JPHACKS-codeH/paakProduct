var vueObj;
$(document).ready(function(){
  // var vueObj = new Vue({
  //   el: '#vuetest',
  //   data: {
  //     array_data:[]
  //   }
  // });

  // TODO ajaxテスト
  // $.ajax({
  //   url: 'http://133.25.210.30:34001/hashtag',
  //   type: 'POST',
  //   dataType: 'json',
  //   data: {param1: 'test'}
  // })
  // .done(function() {
  //   console.log("success");
  // })
  // .fail(function() {
  //   console.log("error");
  // })
  // .always(function() {
  //   console.log("complete");
  // });

  vueObj = new Vue({
    el: '#upload_form',
    data: {
      hash_tags:[],
      text_message:""
    }
  });
  vueObj.text_message = "今日もうちの猫は可愛かった。最高。";

  // var timer = setTimeout(function(){
  //   vueObj.array_data = ["hello","world","!!","good!!"]
  // },1000);
  $('#upload_img').uploadThumbs({
        position : '#preview1'
    });
});
function upload(){
  $form = $('#upload_form');
  $img = $('#upload_img');
  fd = new FormData($form);
  console.log($('#upload_img').val());
  // var body = { "Url": "http://www.chihirophoto.com/pets/images/pets%20top-1.jpg"};
  // var body = {"Url": $img[0].value};
  $.ajax({
    url: "https://api.projectoxford.ai/vision/v1/analyses?visualFeatures=All",
    beforeSend: function(xhrObj){
      xhrObj.setRequestHeader("Content-Type","application/json");
      xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","818614e1a0f54568b370bfe0cdba54cf");
    },
    type: "POST",
    processData: false,
    contentType: false,
    // data: JSON.stringify(body),
    data: {
      'file': $('#upload_img').val()
    },
    success: function(data) {
        // alert( data.message );
        console.log(data.message);
        console.log(data);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log(textStatus);
        console.log(errorThrown);
        // alert( "ERROR" );
        // alert( textStatus );
        // alert( errorThrown );
    }
  });
  setTimeout(function(){
    console.log("created hash");
    vueObj.hash_tags = ["猫","cat","動物","かわいい"];
  },1000);
  return false;
}
