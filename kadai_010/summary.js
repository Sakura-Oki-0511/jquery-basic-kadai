// ドキュメントが準備できたら（DOMが読み込まれたら）実行
$(document).ready(function() {

    // id="change-color"をクリックで文字色が変わる
    $('#change-color').on('click', function() {
        $('#target').css('color', 'red'); // 色は任意なので赤に変更
    });

    // id="change-text"をクリックでテキストが変わる
    $('#change-text').on('click', function() {
        $('#target').text('友達になりましょう');
    });

    // id="fade-out"をクリックで<p>をフェードアウト
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });

    // id="fade-in"をクリックで<p>をフェードイン
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});