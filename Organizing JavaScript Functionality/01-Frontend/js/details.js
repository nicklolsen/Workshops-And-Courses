const DETAILS = (function(){

	const $CONTENT = $("[rel=js-details]");

  EVT.on('init', init);

  function init() {
    $CONTENT.on('click', '.js-select-person', selectPerson);

    EVT.on("person-selected", loadPerson);
  }


  function loadPerson( id ) {
    var url = `details/${id}.html`;
    $.ajax(url, {dataType:'text'}).then( personMarkup => $CONTENT.html(personMarkup).show() );
  }

  function selectPerson( event ) {
    event.preventDefault();

    var id = $(event.target).data('person');
    
    EVT.emit('person-selected', id);
  }

  return {
    init: init,
    loadPerson: loadPerson
  }

})();