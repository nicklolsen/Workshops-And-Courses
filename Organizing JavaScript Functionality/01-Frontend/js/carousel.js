const CAROUSEL = (function(){

	EVT.on('init', init);

	const $CONTENT = $("[rel=js-carousel] > [rel=js-content]");
	const $ITEMS = $CONTENT.children("[rel=js-items]");
	const $LEFT = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
	const $RIGHT = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");

	var contentWidth;
	var itemsWidth;
	var position;
	var maxPosition;


	/* public methods */
	function init() {

		contentWidth = $CONTENT.width();
		itemsWidth = $ITEMS.width();
		position = 0;
		maxPosition = (itemsWidth - contentWidth);

		$LEFT.on('click', scrollLeft);
		$RIGHT.on('click', scrollRight);

		$ITEMS.on('click', personClicked);
	}


	/* private functions */
	function personClicked( evt ) {
		var id = $(event.target).data('carousel-item-id');

		EVT.emit('person-selected', id);
	}

	function scrollLeft(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		if (position > 0) {
			position = Math.max(0,position - 250);
		}

		$ITEMS.css({ left: (-position) + "px" });
	}

	function scrollRight(evt){
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		if (position < maxPosition) {
			position = Math.min(maxPosition,position + 250);
		}

		$ITEMS.css({ left: (-position) + "px" });
	}


	return {
		init: init
	};
})();
