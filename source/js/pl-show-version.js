(function ($) {

  loadJSON(function(response) {
    // Parse JSON string into object
      var bao_version = JSON.parse(response);
      
      // We are in an infamous iframe here!
      // Test if we have allready output the version 
      if(window.parent.$(".sg-header .sg-bao-version").length == 0) {
        window.parent.$(".sg-header .sg-controls").before('<span class="sg-bao-version" style="color: #ffffff;font-size: 70%;display:inline-block;padding: .9em 1em;text-transform:lowercase;">v'+ bao_version.version +'</span>');
      }
   });

  // LoadJSON function 
  function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../../bao-version.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      }
    };
    xobj.send(null);  
  }

})(jQuery);
