/*24.08.2021*/
$("#downloadLinks a.dwnPageLink").each (interceptLink);

function interceptLink (index, node) {
    var jNode   = $(node);
    jNode.click (openInNewTab);
    jNode.addClass ("intercepted");
}
function openInNewTab (zEvent) {
    //-- Optionally adjust the href here, if needed.
    var targURL     = this.href;
    var newTab      = window.open (targURL, "_blank");

    //--- Stop the link from doing anything else.
    zEvent.preventDefault ();
    zEvent.stopPropagation ();
    return false;
}
$(window).bind ("beforeunload",  function (zEvent) {
    //-- Allow time for the file dialog to actually open.
    setTimeout ( function () {
            /*-- Since the time it takes for the user to respond
                to the File dialog can vary radically, use a confirm
                to keep the File dialog open long enough for the user 
                to act.
            */
            var doClose = confirm ("Close this window?");
            if (doClose) {
                window.close ();
            }
        },
        444 // 0.444 seconds
    );
} );

