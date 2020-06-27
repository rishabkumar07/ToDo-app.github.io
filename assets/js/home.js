$(document).ready(function()
{
    console.log("JS file linked");
    
    // function for datepicker
    $('#datepicker').datepicker({
        dateFormat: 'D M d,yy',
        inline:true,
        });

        // function for when clicked on the like button
    $(".like").click(function(){
        $(this).toggleClass("heart");
    });
});