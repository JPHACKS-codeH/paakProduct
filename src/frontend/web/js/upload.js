(function(win, doc) {

  "use strict";

  $('form').submit(function(e) {
    e.preventDefault();

    var fd = new FormData($(this)[0]);
    // 個別にパラメータ指定する場合は以下のようにする
    //var fd = new FormData();
    //fd.append('name', $(this).find(':text[name="name"]').val());
    //fd.append('profile', $(this).find(':file[name="profile"]')[0].files[0]);

    $.ajax('http://133.25.210.30:34001/hashtag', {
      method: "POST",
      processData: false,
      contentType: false,
      data: fd,
      dataType: 'json',
      success: function(json) {
        var img = $('<img>').attr('src', json.profile_url);
        $('#profile').append(img);
        $('form').find(':submit').attr('disabled', true);
      },
      error: function(json) {
        alert('エラーが発生しました');
      }
    });
  });

})(this, document);
