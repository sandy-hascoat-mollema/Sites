<!--This is the script needed to scroll up the URL text field (for both port. and landscape views) so it is not visible once the page loads...maximizing the screen's size. The user will then be able to display it by scrolling down if needed. DO NOT MODIFY this script in any way. -->

    
    addEventListener("load", function()
    {
        setTimeout(updateLayout, 0);
    }, false);

    var currentWidth = 0;
    
    function updateLayout()
    {
        if (window.innerWidth != currentWidth)
        {
            currentWidth = window.innerWidth;

            var orient = currentWidth < 480 ? "profile" : "landscape";
            document.body.setAttribute("orient", orient);
            setTimeout(function()
            {
                window.scrollTo(0, 1);
            }, 100);            
        }
    }

    setInterval(updateLayout, 400);
    
