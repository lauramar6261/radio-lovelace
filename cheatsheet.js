<input type="checkbox" id="something" />

$("#something").click( function(){
   if( $(this).is(':checked') ) alert("checked");
})
