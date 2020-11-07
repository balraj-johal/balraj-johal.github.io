
$(document).ready(function(){
    // $('#style-switcher').val('static');

    $('#style-switcher').change(function() {
        // alert("Selected value is : " + document.getElementById("style-switcher").value);
        // alert("current stlye is : " + document.getElementById("style-switcher").value);
        $('#css-that-switches').attr('href', document.getElementById("style-switcher").value + '.css')
        // alert('#style-sitcher option:value')
    })
    
});
