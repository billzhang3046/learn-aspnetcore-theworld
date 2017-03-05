
(function () {
    
    var $sidebarAndWrapper = $("#sidebar, #wrapper");
    var $icon = $("#sidebarToggle.i.fa");

    $("#sidebarToggle").on("click", function() 
    { 
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if($sidebarAndWrapper.hasClass("hide-sidebar"))
        {
            $(this).text("Show Sidebar");
        }
        else
        {
            $(this).text("Hide Sidebar");
        }
    });

})();