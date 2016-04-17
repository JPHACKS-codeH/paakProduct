$(document).ready(function(){
  var vueObj = new Vue({
    el: '#vuetest',
    data: {
      array_data:[]
    }
  });
  var timer = setTimeout(function(){
    vueObj.array_data = ["hello","world","!!","good!!"]
  },1000);
  $('#upload1').uploadThumbs({
        position : '#preview1',   // any: arbitrarily jquery selector
    });
});
