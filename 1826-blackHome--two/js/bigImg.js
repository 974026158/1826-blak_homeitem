$("#header").load("adidas.html #header");
$("#startEva").load("adidas.html #startEva");
$("#Adidas").load("adidas.html #Adidas");
$(".header_nav").load("adidas.html .header_nav");
$("#footer").load("index.html #footer");

/*请求ajax数据*/
var Adi = $.ajax({
	type: "get",
	url: "json/adidas1.json",
	async: true
});
Adi.done(function(A) {
	//console.log( A )
	var strA = ""
	for(var i = 0; i < A.list.length; i++) {
		var Adi1 = A.list[i];
		strA += `<div class="left_shoeAdidas">
					<span class="left_AdidasNumber">${Adi1.Acc}</span>
					<div class="left_AdidasImg"><img src="${Adi1.src}"/></div>
					<div class="left_Awen">
						<a href="" class="left_Awen_wen">${Adi1.art}</a>
						<a href="" class="left_AdidasPrice">${Adi1.price}</a>
					</div>
				</div>`
	}
	var strA1 = ""
	for(var i = 0; i < A.list2.length; i++) {
		var Adi2 = A.list2[i];
		strA1 += `<div class="right_li_Div_One">
					<span class="right_bottom_hide_Div">关注</span>
					<div class="right_liImg"><img src="${Adi2.src}"/></div>
					<div class="right_lismallImg">
						<div class="right_Imgboeder"><img src="${Adi2.src1}" style="width: 24px;height:24px ;margin: 1px auto;"/></div>
					</div>
					<div class="right_smallWen">${Adi2.shoe}</div>
					<div class="right_smallPrice">${Adi2.price}</div>
					<div class="right_smallEavl">${Adi2.ecal}</div>
					<div class="right_smallBtn">${Adi2.imm}</div>
				 </div>`
	}
	var strA11 = ""
	for(var i = 0; i < A.list3.length; i++) {
		var Adi21 = A.list2[i];
		strA11 += `<div class="right_li_Div_One">
					<span class="right_bottom_hide_Div">关注</span>
					<div class="right_liImg"><img src="${Adi21.src}"/></div>
					<div class="right_lismallImg">
						<div class="right_Imgboeder"><img src="${Adi21.src1}" style="width: 24px;height:24px ;margin: 1px auto;"/></div>
					</div>
					<div class="right_smallWen">${Adi21.shoe}</div>
					<div class="right_smallPrice">${Adi21.price}</div>
					<div class="right_smallEavl">${Adi21.ecal}</div>
					<div class="right_smallBtn">${Adi21.imm}</div>
				 </div>`
	}
	$(".right_bottomli:eq(0)").html(strA1);
	$(".right_bottomli:eq(1)").html(strA11);
	$(".left_shoeBottom").html(strA);
	$(".next").click(function() {
		$(".right_bottomoUl").animate({
			"margin-left": 0
		}, function() {
			$(".right_bottomli").last().appendTo(".right_bottomoUl")
			$(".right_bottomoUl").css("margin-left", 0)
		})
	})
	$(".prv").click(function() {
		$(".right_bottomoUl").animate({
			"margin-left": 0
		}, function() {
			$(".right_bottomli").first().prependTo(".right_bottomoUl")
			$(".right_bottomoUl").css("margin-left", 0)
		})
	})

	$(".pagingUl").children("li:eq(0)").click(function() {
		$(".right_bottomoUl").animate({
			"margin-left": 0
		}, function() {
			$(".right_bottomli").first().appendTo(".right_bottomoUl")
			$(".right_bottomoUl").css("margin-left", 0)
		})
	})
	$(".pagingUl").children("li:eq(1)").click(function() {
		$(".right_bottomoUl").animate({
			"margin-left": 0
		}, function() {
			$(".right_bottomli").last().prependTo(".right_bottomoUl")
			$(".right_bottomoUl").css("margin-left", 0)
		})
	})

	$(".last").click(function() {
		$(".right_bottomoUl").animate({
			"margin-left": 0
		}, function() {
			$(".right_bottomli").first().appendTo(".right_bottomoUl")
			$(".right_bottomoUl").css("margin-left", 0)
		})
	})
	$(".first").click(function() {
		$(".right_bottomoUl").animate({
			"margin-left": 0
		}, function() {
			$(".right_bottomli").last().prependTo(".right_bottomoUl")
			$(".right_bottomoUl").css("margin-left", 0)
		})
	})

	$(".right_bottomshoeDiv").find(".right_li_Div_One").click(function() {
		location.href = "part.html"
	})
	$(".header_logo").click(function() {
		location.href = "index.html"
	})
})

//鼠标移入右侧固定栏 显示隐藏div
$(".tubiao1").mouseenter(function() {
	/*var index11 = $(this).not(".tubiao2").index();*/
	$(this).find(".hidefixed").fadeIn(100).animate({
		"right": 32
	}, 200)
})
$(".tubiao1").mouseleave(function() {
	/*var index11 = $(this).not(".tubiao2").index();*/
	$(this).find(".hidefixed").animate({
		"right": 80
	}, 200).fadeOut(100)
})
//右侧导航回到顶部
$(".rightfixed_1 .tubiao1").last().click(function() {
	$("html,body").animate({
		scrollTop: 0
	}, 1000)
})
//楼梯
$(".last").click(function() {
	$("html,body").animate({
		scrollTop: 0
	}, 1000)
})