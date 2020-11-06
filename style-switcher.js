
$(document).ready(function(){
    $('#style-switcher').change(function() {
        // alert("Selected value is : " + document.getElementById("style-switcher").value);
        // alert("current stlye is : " + document.getElementById("style-switcher").value);
        $('#css-that-switches').attr('href', document.getElementById("style-switcher").value + '.css')
        // alert('#style-sitcher option:value')
    })
    // $('#mode').click(function(){
    //     if($('link#styles').attr('href')=="Day.css") {
    //         $('#mode').attr('value','Switch To Day Mode')
    //         $('link#styles').attr('href','Night.css')
    //     } else {
    //         $('#mode').attr('value','Switch To Night Mode')
    //         $('link#styles').attr('href','Day.css')
    //     }
    // })
    
});
