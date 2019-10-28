
	jQuery(document).ready(function($) {
		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
		});
	});

		$(document).ready(function() {
	  jQuery(document).ready(function(){
	    $(".dropdown").hover(
	      function() { $('.dropdown-menu', this).stop().fadeIn("fast");
	        },
	      function() { $('.dropdown-menu', this).stop().fadeOut("fast");
	    });
	  });
	}

			$('.toggle').click(function(){
			  // Switches the Icon
			  $(this).children('i').toggleClass('fa-pencil');
			  // Switches the forms  
			  $('.form').animate({
				height: "toggle",
				'padding-top': 'toggle',
				'padding-bottom': 'toggle',
				opacity: "toggle"
			  }, "slow");
			});

$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
});

		$(document).ready(function() {
			/*
				var defaults = {
				containerID: 'toTop', // fading element id
				containerHoverID: 'toTopHover', // fading element hover id
				scrollSpeed: 1200,
				easingType: 'linear' 
				};
			*/
								
			$().UItoTop({ easingType: 'easeOutQuart' });
								
			});

		$(document).ready(function () {
		    var itemsMainDiv = ('.MultiCarousel');
		    var itemsDiv = ('.MultiCarousel-inner');
		    var itemWidth = "";

		    $('.leftLst, .rightLst').click(function () {
		        var condition = $(this).hasClass("leftLst");
		        if (condition)
		            click(0, this);
		        else
		            click(1, this)
		    });

		    ResCarouselSize();




		    $(window).resize(function () {
		        ResCarouselSize();
		    });

		    //this function define the size of the items
		    function ResCarouselSize() {
		        var incno = 0;
		        var dataItems = ("data-items");
		        var itemClass = ('.item');
		        var id = 0;
		        var btnParentSb = '';
		        var itemsSplit = '';
		        var sampwidth = $(itemsMainDiv).width();
		        var bodyWidth = $('body').width();
		        $(itemsDiv).each(function () {
		            id = id + 1;
		            var itemNumbers = $(this).find(itemClass).length;
		            btnParentSb = $(this).parent().attr(dataItems);
		            itemsSplit = btnParentSb.split(',');
		            $(this).parent().attr("id", "MultiCarousel" + id);


		            if (bodyWidth >= 1200) {
		                incno = itemsSplit[1];
		                itemWidth = sampwidth / incno;
		            }
		            else if (bodyWidth >= 992) {
		                incno = itemsSplit[1];
		                itemWidth = sampwidth / incno;
		            }
		            else if (bodyWidth >= 768) {
		                incno = itemsSplit[1];
		                itemWidth = sampwidth / incno;
		            }
		            else {
		                incno = itemsSplit[1];
		                itemWidth = sampwidth / incno;
		            }
		            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
		            $(this).find(itemClass).each(function () {
		                $(this).outerWidth(itemWidth);
		            });

		            $(".leftLst").addClass("over");
		            $(".rightLst").removeClass("over");

		        });
		    }


		    //this function used to move the items
		    function ResCarousel(e, el, s) {
		        var leftBtn = ('.leftLst');
		        var rightBtn = ('.rightLst');
		        var translateXval = '';
		        var divStyle = $(el + ' ' + itemsDiv).css('transform');
		        var values = divStyle.match(/-?[\d\.]+/g);
		        var xds = Math.abs(values[4]);
		        if (e == 0) {
		            translateXval = parseInt(xds) - parseInt(itemWidth * s);
		            $(el + ' ' + rightBtn).removeClass("over");

		            if (translateXval <= itemWidth / 2) {
		                translateXval = 0;
		                $(el + ' ' + leftBtn).addClass("over");
		            }
		        }
		        else if (e == 1) {
		            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
		            translateXval = parseInt(xds) + parseInt(itemWidth * s);
		            $(el + ' ' + leftBtn).removeClass("over");

		            if (translateXval >= itemsCondition - itemWidth / 2) {
		                translateXval = itemsCondition;
		                $(el + ' ' + rightBtn).addClass("over");
		            }
		        }
		        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
		    }

		    //It is used to get some elements from btn
		    function click(ell, ee) {
		        var Parent = "#" + $(ee).parent().attr("id");
		        var slide = $(Parent).attr("data-slide");
		        ResCarousel(ell, Parent, slide);
		    }

		});

    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });
