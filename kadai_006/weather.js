// ドキュメントが準備できたら（DOMが読み込まれたら）実行
$(document).ready(function() {
    // headingクラスを追加
    $('#target').addClass('heading');

    // 文字色を赤に設定（CSSで追加したheadingクラスを利用）
    $('.heading').css('color', 'red');
});