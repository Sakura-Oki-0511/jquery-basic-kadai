// ボタンがクリックされたときの処理
$(document).ready(function() {
    $('.btn').on('click', function() {
        // テキストボックスに「クリックしました！」を表示
        $('.text-box').val('クリックしました！');
    });
});