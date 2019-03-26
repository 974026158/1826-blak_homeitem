$("#header").load("adidas.html #header");
$("#startEva").load("adidas.html #startEva");
$("#Adidas").load("adidas.html #Adidas");
$(".header_nav").load("adidas.html .header_nav");
$("#footer").load("index.html #footer");
/*var aa = $.ajax({
	type:"get",
	url:"json/Full.json",
	async:true
});
aa.done(function(bb){
	//console.log( fu1 )
	var full2 = ""
	for( var i = 0 ; i < bb.list.length; i++ ){
		var full1 = bb.list[i];
		full2 += `<a href="" class="Fullreduction_Wen">${full1.price}</a>`;
	}
	$(".Fullreduction").html( full2 );
})*/
/*$.getJSON("json/Full.json",data,function(res){
	console.log( res )
})*/ 
/*$(".footwear_sizeOne").mouseenter(function(){
	alert()
})*/

var deff = $.ajax({
	type:"get",
	url:"json/Full.json",
	async:true,
	success : function(res){
		var str = "";
		for( var i = 0 ; i < res.list.length; i++ ){
			var res1 = res.list[i];
			str += `<a href="" class="Fullreduction_Wen">${res1.price}</a>`
			//console.log( res1 )
		}
		$(".Fullreduction").html( str )
		var str1 = "";
		for( var i = 0 ; i < res.list2.length; i++ ){
			var res2 = res.list2[i];
			str1 += `<div class="JD_price">${res2.price1}</div>
						<div class="match_price">
							<span class="match_price_one">${res2.price2}</span>
							<span class="match_price_two">${res2.price3}</span>
						</div>
						<div class="not_price">${res2.price4}</div>
						<div class="Thecumulative">
							<p style="text-align: center;">${res2.price5}</p>
							<p style="text-align: center;font-size: 15px;">${res2.price6}</p>
						</div>`
		}
		var str2 = "";
		for( var i = 0 ; i < res.list3.length; i++ ){
			var res3 = res.list3[i];
			str2 += `<div class="look_liDiv">
						<img src="${res3.src}"/>
						<div class="look_Wen">${res3.int}</div>
						<div class="look_Price">${res3.price}</div>
					</div>`
		}
		var str3 = "";
		for( var i = 0 ; i < res.list4.length; i++ ){
			var res4 = res.list4[i];
			str3 += `<div class="look_liDiv">
						<img src="${res4.src}"/>
						<div class="look_Wen">${res4.int}</div>
						<div class="look_Price">${res4.price}</div>
					</div>`
		}
		var str4 = "";
		for( var i = 0 ; i < res.list5.length; i++ ){
			var res5 = res.list5[i];
			str4 += `<div class="shop_li_Div">
						<img src="${res5.src}"/>
						<div class="shop_li_price">${res5.price}</div>
						<div class="shop_li_hideDiv">${res5.wen}</div>
					</div>`
		}
		var str5 = "";
		for( var i = 0 ; i < res.list6.length; i++ ){
			var res6 = res.list6[i];
			str5 += `<div class="shop_li_Div">
						<img src="${res6.src}"/>
						<div class="shop_li_price">${res6.price}</div>
						<div class="shop_li_hideDiv">${res6.wen}</div>
					</div>`
		}
		/*最后一步*/
		var str6 = "";
		for( var i = 0 ; i < res.list7.length; i++ ){
			var res7 = res.list7[i];
			str6 += `<div class="bannerCon_Div">
						<img src="${res7.src}"/>
						<div class="banner_price">
							<span class="bannerSpan">${res7.price}</span>
							<span class="bannerSpanTwo">${res7.price1}</span>
						</div>
						<div class="shop_li_hideDiv">${res7.price2}</div>
					</div>`
		}
		$(".bannerCon_left").html( str6 )
		/*换一批*/
		$(".shop_li:eq(0)").html( str4 )
		$(".shop_li:eq(1)").html( str5 )
		/*换一批操作结果*/
		$(".manager_Btn").click(function(){
			$(".shop_oUl").animate({
				"margin-left" : 0
			},function(){
				$(".shop_li").first().appendTo(".shop_oUl")
				$(".shop_oUl").css("margin-left" , 0)
			})
		})
		/*竖轮播结果*/
		$(".look_li:eq(0)").html( str2 );
		$(".look_li:eq(1)").html( str3 );
		/*竖轮播 操作*/
		$(".look_Btn-left").click(function(){
			$(".look_oUl").animate({
				"margin-top" : -564
			},function(){
				$(".look_li").first().appendTo(".look_oUl");
				$(".look_oUl").css("margin-top",0)
			})
		})
		$(".look_Btn-right").click(function(){
			$(".look_oUl").animate({
				"margin-top" : 0
			},function(){
				$(".look_li").last().prependTo(".look_oUl");
				$(".look_oUl").css("margin-top",-564)
			})
		})
		
		$(".Fullreduction").html( str );
		$(".not_top").html( str1 );
			$(".header_logo").click(function(){
	location.href = "index.html"
})
	}
	
});
$(".Choose_size").find(".Choose_size_border").not(".Choose_size_border:last").click(function(){
	var index = $(this).index()-1
	$(this).css("border-color","red").siblings().css("border-color","#ccc");
	$(".footwear_sizeOne").eq(index).show(100).siblings().hide(100)
})
/*右侧固定栏*/
//鼠标移入右侧固定栏 显示隐藏div
	$(".tubiao1").mouseenter(function(){
		/*var index11 = $(this).not(".tubiao2").index();*/
		$(this).find(".hidefixed").fadeIn(100).animate({"right" : 32},200)
	})
	$(".tubiao1").mouseleave(function(){
		/*var index11 = $(this).not(".tubiao2").index();*/
		$(this).find(".hidefixed").animate({"right" : 80},200).fadeOut(100)
	})
	//右侧导航回到顶部
	$(".rightfixed_1 .tubiao1").last().click(function(){
		$("html,body").animate({
			scrollTop : 0
		},1)
	})
	//楼梯
		$(".last").click(function(){
			$("html,body").animate({
			scrollTop : 0
		},1)
	})
		