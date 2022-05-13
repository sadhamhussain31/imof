	function test_area_fn() {
	    var $winH = $(window).height();
	    var $winW = $(window).width();
	    var $header = $('.header').outerHeight();
	    var $lines = $('.lines').outerHeight();
	    var $footer = $('.footer').outerHeight();
	    var $breadcrumbs = $('.breadcrumbs').outerHeight();
	    var $minusHeight = ($header + $footer + $breadcrumbs);
	    $(".full_height").css({
	        "min-height": $winH - $minusHeight
	    });
	    var $ta = $(".test__area");
	    var $ta_topbar = $ta.find(".test__area__topbar");
	    var $ta_workarea = $ta.find(".test__area__workarea");
	    var $ta_body = $ta.find(".test__area__body");
	    var $ta_sarea = $ta.find(".scrolling_area");
	    var $ta_header = $ta.find(".test__area__header");
	    var $ta_footer = $ta.find(".test__area__footer");
	    var $ta_sidebar = $ta.find(".test__area__sidebar");
	    var $ta_mytabs = $ta.find(".mytabs");
	    var $ta_points_guide = $ta.find(".points_guide");
	    var $ta_tab_content = $ta.find(".tab-content");
	    var $ta_minus_topbar = $ta.outerHeight() - $ta_topbar.outerHeight();
	    var $header_plus_footer = $ta_header.outerHeight() + $ta_footer.outerHeight();
	    var $pointsguide_plus_mytabs = $ta_points_guide.outerHeight() + $ta_mytabs.outerHeight();
	    $ta_workarea.height($ta_minus_topbar);
	    $ta_body.height($ta_minus_topbar);
	    $ta_sarea.outerHeight($ta_body.outerHeight() - $header_plus_footer);
	    $ta_tab_content.height($ta_workarea.outerHeight() - $pointsguide_plus_mytabs);
	}

	function instruction_box_fn() {
	    var $hnf = $(".instruction_box_header").outerHeight() + $(".instruction_box_footer").outerHeight() + 40;
	    $(".instruction_box_body").css({
	        "max-height": $(window).height() - $hnf
	    });
	    var $instruction_box = $(".instruction_box");
	    var $instruction_box_width = $(".instruction_box").outerWidth();
	    var $instruction_box_width_half = $instruction_box_width / 2;
	    var $instruction_box_height = $(".instruction_box").outerHeight();
	    var $instruction_box_height_half = $instruction_box_height / 2;
	    $(".instruction_box").css({
	        "margin-left": -$instruction_box_width_half,
	        "margin-top": -$instruction_box_height_half
	    });
	}
	$(window).on("load", function() {
	    instruction_box_fn();
	    test_area_fn();
	});
	$(window).on("resize", function() {
	    instruction_box_fn();
	    test_area_fn();
	});
	/*$(window).load(function() {
	    $(".preloader").fadeOut("slow");
	});*/
	$(".header").height($(".header .inner").height());
	$('.slimscroll').slimscroll({
	    height: false,
	    width: "100%",
	    size: '5px',
	    distance : '2px',
	    color: '#000',
	    opacity: .1,
	});