//two_1的隐藏框

/*$(".two_1_left>a>img").mouseover(function(){
	var list1 = document.getElementById("two_1_left_list1");
	list1.style.display = "block";
	$(document).ready(function(){
		$('#two_1_left_list1').delay(1000).hide(0);
	});
});

$(".two_1_right_list4-1>a>img").mouseover(function(){
	$('#two_1_right_list4-1-1').show();
	$(document).ready(function(){
		$('#two_1_left_list4-1-1').delay(1000).hide(0);
	});
})
*/

$(function(){
	$(".two_1_left>a>img").mouseover(function(){
		$(".two_1_left_list1").show();
		$(document).ready(function(){
		$('#two_1_left_list1').delay(1000).hide(0);
	});
	})
})

$(function(){
	$(".two_1_right_list4-1>a>img").mouseover(function(){
		$(".two_1_left_list4-1-1").show();
		$(document).ready(function(){
		$("#two_1_left_list4-1-1").delay(1000).hide(0);
	});
	})
})
