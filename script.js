// pixels scroll limit to change the scroll up button color
var scroll_pixel_limit = 1000;
// Time the pages need to scroll up, after having clicked on the up arrow btn
var scrollUpSpeed = 1500;
var isMobile = false; //initiate as false

$(document).ready(function () {
    // device detection
    function isMobile() {
        const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return regex.test(navigator.userAgent);
    }
      
    if (isMobile()) {
        console.log("Mobile device detected");
    } else {
        console.log("Desktop device detected");
    }

    var contact_form_text_field = $(".text-field");
    var thumb_container = $(".thumb-container");
    // vars for the read more / less logic on the product pages
    var read_more_link = $(".read-more");
    var container_cut_text = $(".container-cut-text");
    // remove the green circle once over the contact form field
    contact_form_text_field.on("mouseover", function (event) {
        $(".cursor").css("display", "none");
    });

    contact_form_text_field.on("mouseout", function (event) {
        $(".cursor").css("display", "block");
    });

    // add black background to the project containers, otherwise they are  
    // visible the first time the page loads with empty cache
    thumb_container.on("mouseover", function (event) {
        $(this).css("background-color", "#000");
    });

    thumb_container.on("mouseout", function (event) {
        var evt = $(this);
        setTimeout(to_transpanrent, 400, evt)
    });

    function to_transpanrent(evt) {
        evt.delay(1000).css("background-color", "transparent");
    }

    // read more / less logic on the product pages
    if (container_cut_text.length > 0) {
        var container_cut_text_height = container_cut_text.height();
    }

    read_more_link.on("click", function (event) {
        event.preventDefault();
        var cute_text = $(this).siblings(".container-cut-text").children(".cut-text");
        var cute_text_height = cute_text.height();
        var read_less = $(".read-less");

        if (read_less.length > 0) {
            cute_text_height = container_cut_text_height;
        }
        $(".container-cut-text").animate({ height: cute_text_height + "px" }, 300, "easeOutQuint", function () {
            // Animation complete.
            if (read_less.length > 0) {
                read_more_link.removeClass("read-less");
                read_more_link.text("Read More");
            } else {
                read_more_link.addClass("read-less");
                read_more_link.text("Read Less");
            }
        });
    });
    /*
    $("a.open-video-full-screen").on("mouseleave", function (event) {
        event.stopPropagation();
        // play modal video
        $(".modal-video-container video").trigger("play");
    });
   
    $("img.close-video-full-screen").on("mouseleave", function (event) {
        event.stopPropagation();
        // pause modal video
        $(".modal-video-container video").trigger("pause");
        var cloneVdeo = $(".modal-video-container video").clone()
        console.log("cloneVdeo = " + cloneVdeo)
        $(".modal-video-container video").remove();
        cloneVdeo.appendTo( ".modal-video-container .html-embed.w-embed" );
    });
    */
    
});

$(window).on('load', function(event){
	// check for the top position of the page and change 
    // the scroll up btn accordingly
    var scrollPosition = $(window).scrollTop();
    changeSlideUpColor(scrollPosition);

    $(".scroll-top-btn").on("click", function (event) {
    	event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, scrollUpSpeed, "easeOutQuint");
    });
    // addded mouseover and mouseout events on the scrollup btn.
    // When in the home page it overlaps the projects pages,
    // the cursor big has to disappear
    $(".scroll-top-btn").on("mouseover", function (event) {
		$(".wrapper-cursor.big").css("opacity","0");
    });

    $(".scroll-top-btn").on("mouseout", function (event) {
		$(".wrapper-cursor.big").css("opacity","1");
    });
    
    var hashId = window.location.hash;
    if (hashId.length > 1){
        goToAnchor(hashId,0);
    }
    
})

function goToAnchor(hashId,margin_top_anchor_link){
    var scrollTopPx= jQuery(hashId).position().top - margin_top_anchor_link+'px';
    jQuery('html,body').animate({
        scrollTop: scrollTopPx
    }, 1500, "easeOutQuint",function(){
       // $(".navigation-items").css("transform","none");
    });
}

$(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    changeSlideUpColor(scrollPosition);
});

function changeSlideUpColor(scrollPosition) {
    // scroll top arrow logic
    var scroll_block = $(".scroll-top-block");
    var footer_block = $(".footer-wrap");
    var scroll_block_top = scroll_block.offset().top;
    var footer_block_top = footer_block.offset().top;
    var scroll_block_bottom = scroll_block_top + scroll_block.innerHeight();
    var footer_block_bottom = footer_block_top + footer_block.innerHeight();

    if (scroll_block_bottom >= footer_block_top && scroll_block_top < footer_block_bottom) {
        if ($(".scroll-top-block circle").css("stroke") == "rgb(0, 0, 0)") {
            $(".scroll-top-block circle, .scroll-top-block path").css("stroke", "#fff");
        }
    } else {
        if ($(".scroll-top-block circle").css("stroke") == "rgb(255, 255, 255)")
            $(".scroll-top-block circle, .scroll-top-block path").css("stroke", "#000");
    }
    if (scrollPosition < scroll_pixel_limit) {
        $(".scroll-top-block").css('display', 'none');
    } else {
        $(".scroll-top-block").css('display', 'block');
    }
}