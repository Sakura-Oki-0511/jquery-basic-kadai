// HTMLドキュメントが読み込み完了したときのloadイベント処理
$(window).on('load', function() {
    console.log('loadイベントが発生しました');
});

// 画面をスクロールしたときのscrollイベント処理
$(window).on('scroll', function() {
    console.log('scrollイベントが発生しました');
});