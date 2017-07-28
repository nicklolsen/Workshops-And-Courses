const HEADER = (function(){

  EVT.on('init', init);

  const $MODAL = $('#js-modal');

  function init(){
    $('#js-controls').on('click', '#js-register, #js-login', headerLinkClicked);
  }

  function headerLinkClicked( event ) {
    event.preventDefault();
    var url = $(event.target).attr('href');
    $.ajax(url, { dataType: 'text' }).then( content => {
      $MODAL.html(content).show();
    });
  }

  return {
    init: init
  };
})();