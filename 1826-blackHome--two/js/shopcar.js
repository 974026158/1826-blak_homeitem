$("#logoNav").load("index.html #logoNav");
$("#footer").load("index.html #footer");

/*鼠标移入显示隐藏地图 很多地名*/
$(".Locate").mouseover(function() {
	$(".hide_LocateDiv").show()
})
$(".Locate").mouseout(function() {
	$(".hide_LocateDiv").hide()
})
//鼠标移入到li我的京东上显示隐藏的div
$(".item").click(function() {
	$(this).css({
		"background": "red",
		"width": "40px",
		"height": "24px",
		"margin-right": "20px",
		"color": "#999"
	}).siblings().css("background", "");
	$(".Locate_bei").html($(this).html());
})
//鼠标移入到对应li显示隐藏的div
$(".Con_right>.Cli2").eq(1).mouseenter(function() {
	$(this).children(".Myjd").show()
})
$(".Con_right>.Cli2").eq(1).mouseleave(function() {
	$(this).css("background", "").css("border", "")
	$(this).children(".Myjd").hide()
})

$(".Con_right>.Cli2").eq(3).mouseenter(function() {
	$(this).children(".QYCG").show()
})
$(".Con_right>.Cli2").eq(3).mouseleave(function() {
	$(this).css("background", "")
	$(this).children(".QYCG").hide()
})

$(".Con_right>.Cli2").eq(4).mouseenter(function() {

	$(this).children(".KHFW").show()
})
$(".Con_right>.Cli2").eq(4).mouseleave(function() {
	$(this).css("background", "")
	$(this).children(".KHFW").hide()
})

$(".Con_right>.Cli2").eq(5).mouseenter(function() {

	$(this).children(".WZDH").show()
})
$(".Con_right>.Cli2").eq(5).mouseleave(function() {
	$(this).css("background", "")
	$(this).children(".WZDH").hide()
})

$(".JDapp").mouseenter(function() {
	$(this).children(".threeApp").show()
})
$(".JDapp").mouseleave(function() {
	$(this).children(".threeApp").hide()
})
/*为文字添加样式类*/
$(".Go_shopWen").mouseenter(function(){
	$(this).addClass("a").siblings().removeClass("a").css("color","#666")
})
$(".Go_shopWen").mouseleave(function(){
	$(this).addClass("a").siblings().removeClass("a").css("color","#666")
})

/*最后一步 ajax请求数据*/
var shop = $.ajax({
	type:"get",
	url:"json/shop.json",
	async:true
});
shop.done(function(sho){
	//console.log( sho )
	var s = ""
	for( var i = 0 ; i < sho.list.length ; i++ ){
		var shopcar = sho.list[i];
		s += `<div class="Fadein_Div">
				<div class="Fadein_Img"><img src="${shopcar.src}"/></div>
				<div class="Fadein_Wen">${shopcar.price}</div>
				<div class="Fadein_Wen" style="height: 18px;line-height: 18px;color: red;">${shopcar.price1}</div>
				<div class="Fadein_addcar">
					<div class="Fadein_car">
						<div class="Fadein_icon"></div>
						${shopcar.price2}
					</div>
				</div>
			</div>`
	}
	var s1 = ""
	for( var i = 0 ; i < sho.list1.length ; i++ ){
		var shopcar1 = sho.list1[i];
		s1 += `<div class="Fadein_Div">
				<div class="Fadein_Img"><img src="${shopcar1.src}"/></div>
				<div class="Fadein_Wen">${shopcar1.price}</div>
				<div class="Fadein_Wen" style="height: 18px;line-height: 18px;color: red;">${shopcar1.price1}</div>
				<div class="Fadein_addcar">
					<div class="Fadein_car">
						<div class="Fadein_icon"></div>
						${shopcar1.price2}
					</div>
				</div>
			</div>`
	}
	$(".Go_shoppingBottom:eq(0)").html( s )
	$(".Go_shoppingBottom:eq(1)").html( s1 )
	$(".Go_shopWen:eq(0)").mouseenter(function(){
		$(".Go_shoppingBottom:eq(0)").fadeIn(600)
		$(".Go_shoppingBottom:eq(1)").hide(600)
	})
	$(".Go_shopWen:eq(1)").mouseenter(function(){
		$(".Go_shoppingBottom:eq(1)").fadeIn(600)
		$(".Go_shoppingBottom:eq(0)").hide(600)
	})
	$(".Fadein_addcar").click(function(){
		open("login.html")
	})
	$(".Fadein_Div").hover(function(){
		$(this).css({
			"border-left" : "1px solid red",
			"border" : "1px solid red" 
		})
	},function(){
		$(this).css({
			"border-left" : "",
			"border" : "" 
		})
	})
})
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
/*跳转到主页*/
$(".header_logoOne").click(function(){
	open("index.html")
})
