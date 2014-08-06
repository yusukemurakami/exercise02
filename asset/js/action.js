/**
 * 読み込み完了時の処理
 * 
 * @require jQuery v1.7.2
 */

jQuery(function($) {
	hoverCaption();
});

/**
 * ホバーでキャプションを表示
 * 
 * @param jQuery $ jQueryオブジェクト
 * @require jQuery v1.7.2
 */

function hoverCaption() {
	var $photo = $('.section--photo');

	// 読み込み時にキャプションをフェードアウト
	function init() {
		$photo.find('div').addClass('caption--fade-out');
	}
	init();


	if (Modernizr.touch) {
		// スマホでのタップ対応。スクロール、ピンチ時には反応させない。
		var isMoved = false;

		$photo.on('touchstart touchmove touchend', function(e) {
			if(e.type == 'touchstart'){
				isMoved = false;
				console.log('touchstart:' + ismoved );
				return;
			}
			if (e.type == 'touchmove') {
				isMoved = true;
				console.log('touchmove:' + ismoved );
				return;
			}
			if (e.type == 'touchend') {
				if (!isMoved) {
					$(this).find('div').toggleClass('caption--fade-out');
				}
			}
		});
	} else {
		$photo.on('mouseenter mouseleave', function() {
			$(this).find('div').toggleClass('caption--fade-out');
		});
	}


}