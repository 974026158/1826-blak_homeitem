

/*点击版心区图边上的叉号 是图片和div消失   第一块   最顶部*/
$(".header_Con_Call").click(function() {
	$("#header").css("height", 0);
})
$(".header_Con_Call").click(function() {
	$(".header_Con").css("height", 0);
})
$(".header_Con_Call").click(function() {
	$(".header_Con img").hide();
})
$(".header_Con_Call").click(function() {
	$(this).hide();
})


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

/*$(".logoDiv").mouseenter(function(){
	$(".logoDiv1").fadeIn(700,function(){
		$(".logoDiv_wenzi").fadeIn(2100,function(){
			$(this).css( "z-index" , 40 )
		})
		$(".logoDiv_wenzi1").fadeIn(2100,function(){
			$(this).css( "z-index" , 40 )
		})
		
	})
})*/

$(".logoDiv").mouseenter(function() {
	return ZZh()
})
//京东logo显示的操作
function ZZh() {
	$(".logoDiv1").fadeIn(300, function() {
		$(".logoDiv_wenzi").animate({
			"z-index": 40
		}, 2500, function() {
			$(".logoDiv_wenzi").fadeIn(600, function() {
				$(".logoDiv").animate({
					"z-index": 1000
				}, 5000)
			})
		})

		$(".logoDiv_wenzi1").animate({
			"z-index": 40
		}, 2500, function() {
			$(".logoDiv_wenzi1").fadeIn(600, function() {
				$(".logoDiv").animate({
					"z-index": 1000
				}, 5000)
			})
		})
	})
}

/*隐藏购物车提示显示*/
$(".gouwuche").mouseenter(function() {
	$(".shopCar_hide").show()
})
$(".gouwuche").mouseleave(function() {
	$(".shopCar_hide").hide()
})

/*文本框地下的文字轮播*/
var $list = $(".sportWen1>.sportWen");
var index = 0;
var timer = null;
timer = setInterval(auto, 3000);

function auto() {
	index++;
	if(index == $list.size()) {
		index = 0;
	}
	$list.eq(index).fadeIn(100).siblings($list).fadeOut(100)
}
$list.mouseenter(function() {
	clearInterval(timer)
})
$list.mouseleave(function() {
	timer = setInterval(auto, 3000);
})

var $list1 = $(".sportWen4>.sportWen3");
var index1 = 0;
var timer1 = null;
timer1 = setInterval(auto1, 3000);

function auto1() {
	index1++;
	if(index1 == $list1.size()) {
		index1 = 0;
	}
	$list1.eq(index1).fadeIn(100).siblings($list).fadeOut(100)
}
$list1.mouseenter(function() {
	clearInterval(timer1)
})
$list1.mouseleave(function() {
	timer1 = setInterval(auto1, 3000);
})

//这里是跨域的操作
//https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+this.value+'&cb=fn
function fn(data) { //这里是所有数据
	/*console.log( data.s)*/
	for(var i = 0; i < data.s.length; i++) { //取出对应的数据
		var res = data.s[i];
		/*动态创建li标签*/
		var oLi = document.createElement("li");
		oLi.innerHTML = res;
		$(".hide_hint").append(oLi);

		$(".hide_hint").children().hover(function() {
			$(this).css("background", "#999").css("color", "azure")
		}, function() {
			$(this).css("background", "").css("color", "")
		})

		$(".hide_hint").children().click(function() {
			$(".lunlboinput input").val($(this).html()).css({
				"font-size": "11px",
				"color": "#999"
			})
			$(this).slideUp(500)
		})
	}
}
$(document).click(function() {
	$(".hide_hint").slideUp()
})
$(".lunlboinput input").keyup(function() {
	$(".hide_hint").html("")
	var sc = document.createElement("script")
	sc.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + $(this).val() + '&cb=fn';
	$("head").append(sc);
	$(".hide_hint").slideDown(500)
})

/*banner轮播图区域的操作*/
/*鼠标移入到li使对应隐藏div显示*/
$(".banner_list_li").mouseenter(function() {
	$(this).find(".hide_li_div").show()
})
$(".banner_list_li").mouseleave(function() {
	$(this).find(".hide_li_div").hide()
})

/*轮播图右侧三张图片 使用AJAX请求*/
var deff = $.ajax({
	type: "get",
	url: "json/data1.json",
	async: true
});
deff.done(function(json) { //服务器返回的数据
	//console.log( json );//Conimg: Array(3
	var str = "";
	for(var i = 0; i < json.Conimg.length; i++) {
		var res = json.Conimg[i];
		//console.log( res );//{id: "001", src: "images/lunyou/1.jpg"}
		//开始字符串拼接
		str += `<a href=""><img src="${res.src}" class="Con_Courright_img"/></a>`

		/*console.log( str )*/
	}
	/*往父元素添加内容*/
	$(".Con_Courright").html(str);
})

var deff1 = $.ajax({
	type: "get",
	url: "json/data2.json",
	async: true
});
deff1.done(function(json1) {
	var str1 = "";
	for(var i = 0; i < json1.Contxt.length; i++) {
		var res1 = json1.Contxt[i];
		str1 += `<div class="Con_select_middle_bottom_one">
						<a href="">${res1.first}</a>
						${res1.last}
				</div>`
	}
	$(".Con_select_middle_bottom").html(str1)
	$(".Con_select_middle_bottom_one a").eq(1).css("background", "orange")
	$(".Con_select_middle_bottom_one a").eq(2).css("background", "lightpink")
	$(".Con_select_middle_bottom_one a").eq(3).css("background", "lightpink")
})

$(".Con_select_bottom_tuOne").eq(0).mouseenter(function() {
	$(this).css("position", "absolute")
	$(this).animate({
		"top": "-28px"
	}, 200)
	$(".CrossHide").fadeIn(2000)
})
$(".CrossHide").click(function(){
	$(this).hide();
	$(".Con_select_bottom_tuOne").eq(0).animate({
		"top": "18px"
	})
	$(".Con_select_bottom").nextAll().slideUp()
	$(".Last-line").css("position","absolute")
	$(".Last-line").animate({
		"bottom" : "7px"
	})
})
$(".CrossHide").mouseenter(function(){
	$(this).css({
		"background" : "#999",
		"color" : "#fff"
	})
})
$(".CrossHide").mouseleave(function(){
	$(this).css({
		"background" : "",
		"color" : ""
	})
})
/*鼠标放入iconfont图标显示对应的隐藏div*/
$(".Con_select_bottom_tu:eq(0)").mouseenter(function() {
	$(".hideDiv_Tab").show();
	$(".hide_planeDiv").hide();
	$(".hide_HotelDiv").hide();
	$(".hide_GameDiv").hide();
})
$(".Con_select_bottom_tu:eq(1)").mouseenter(function() {
	$(".hide_planeDiv").show();
	$(".hideDiv_Tab").hide();
	$(".hide_HotelDiv").hide();
	$(".hide_GameDiv").hide();

})
$(".Con_select_bottom_tu:eq(2)").mouseenter(function() {
	$(".hide_HotelDiv").show();
	$(".hide_GameDiv").hide();
})
$(".Con_select_bottom_tu:eq(3)").mouseenter(function() {
	$(".hide_GameDiv").show().css("z-index", 2000);
	$(".hide_HotelDiv").hide();

})

$(".planeNav:eq(1)").mouseenter(function() {
	$(".threePlaneNavOne:eq(0)").animate({
		"left": -190,
		"zIndex": 1000
	})
})
$(".planeNav:eq(2)").mouseenter(function() {
	$(".threePlaneNavOne:eq(0)").animate({
		"left": -190,
		"zIndex": 1000
	})
})
$(".planeNav:eq(2)").mouseenter(function() {
	$(".threePlaneNavOne:eq(1)").animate({
		"left": -190,
		"zIndex": 1000
	})
})
$(".planeNav:eq(1)").mouseenter(function() {
	$(".threePlaneNavOne:eq(1)").animate({
		"left": 0
	})
})
$(".planeNav:eq(0)").mouseenter(function() {
	$(".threePlaneNavOne:eq(1)").animate({
		"left": 190
	})
})
$(".planeNav:eq(0)").mouseenter(function() {
	$(".threePlaneNavOne:eq(2)").animate({
		"left": 190
	})
})
$(".planeNav:eq(0)").mouseenter(function() {
	$(".threePlaneNavOne:eq(0)").animate({
		"left": 0
	})
})
$(".planeNav:eq(2)").mouseenter(function() {
	$(".threePlaneNavOne:eq(2)").animate({
		"left": 0
	})
})
/*酒店*/
$(".HoteDivNav:eq(1)").mouseenter(function() {
	$(".HoteDivTwoNavli:eq(0)").animate({
		"left": -190
	})
})
$(".HoteDivNav:eq(0)").mouseenter(function() {
	$(".HoteDivTwoNavli:eq(0)").animate({
		"left": 0,
		"zIndex": 3333
	})
	$(".HoteDivTwoNavli:eq(1)").animate({
		"zIndex": 2222
	})
})
/*游戏*/
$(".GameNav:eq(1)").mouseenter(function() {

	$(".GameThreeNavOne:eq(1)").css("z-index", 1122);
	$(".GameThreeNavOne:eq(2)").css("z-index", 0)
})
$(".GameNav:eq(0)").mouseenter(function() {
	$(".GameThreeNavOne:eq(1)").css("z-index", 0);
	$(".GameThreeNavOne:eq(2)").css("z-index", 0)
})
$(".GameNav:eq(2)").mouseenter(function() {
	$(".GameThreeNavOne:eq(2)").css("z-index", 1122)
})
/*话费*/
$(".hideDiv_Tab_xuan:eq(0)").mouseenter(function(){
	$(".End:eq(0)").css("z-index",2222)
	$(".End:eq(1)").css("z-index",0)
	$(".End:eq(2)").css("z-index",0)
})
$(".hideDiv_Tab_xuan:eq(1)").mouseenter(function(){
	$(".End:eq(1)").css("z-index",2222)
	$(".End:eq(2)").css("z-index",0)
})
$(".hideDiv_Tab_xuan:eq(2)").mouseenter(function(){
	$(".End:eq(2)").css("z-index",2222)
})

/*倒计时*/
$(function() {
	show_time();
})
function show_time() {
	var time_current = new Date().getTime();//当前时间
	var time_target = new Date("2019/4/25 00:00:00").getTime();//目标时间
	var time_difference = time_target - time_current;//计算时间差
	var int_hour = Math.floor(time_difference / 3600000)//设置时
	time_difference -= int_hour * 3600000;
	var int_minute = Math.floor(time_difference / 60000)//设置分
	time_difference -= int_minute * 60000;
	var int_second = Math.floor(time_difference / 1000)//设置时
	//当数值为单数时，面前加0
	if(int_hour < 10) {
		int_hour = "0" + int_hour;
	}
	if(int_minute < 10) {
		int_minute = "0" + int_minute;
	}
	if(int_second < 10) {
		int_second = "0" + int_second;
	}
	//显示时间
	$(".Figure-start").html(int_hour);
	$(".Figure-start1").html(int_minute);
	$(".Figure-start2").html(int_second);
	//定时器
	setTimeout("show_time()",1000); 
}

/*无缝轮播列表ajax请求  第一个*/
var def2 = $.ajax({
	type:"get",
	url:"json/data3.json",
	async:true
});
def2.done(function(json1){
	//console.log( json1 );//List: Array(4)
	var str1 = "";//准备拼接
	for( var i = 0 ; i < json1.List.length; i++ ){
		var res1 =  json1.List[i];
		//console.log( res1 );
		str1 += `<div class="ProductsOne">
							<a href="#" class="Products">
								<div class="Products-Img"><img src="${res1.src}" style="width: 140px;height: 140px;"/></div>
								<div class="Products-Int">${res1.intr}</div>
								<div class="Products-Price">
									<div class="Products-Price-One">${res1.priceOne}</div>
									<div class="Products-Price-One">${res1.priceTwo}</div>
								</div>
							</a>
						</div>`
	}
	var str2 = "";//准备拼接
	for( var i = 0 ; i < json1.List1.length; i++ ){
		var res2 =  json1.List1[i];
		//console.log( res1 );
		str2 += `<div class="ProductsOne">
							<a href="#" class="Products">
								<div class="Products-Img"><img src="${res2.src}" style="width: 140px;height: 140px;"/></div>
								<div class="Products-Int">${res2.intr}</div>
								<div class="Products-Price">
									<div class="Products-Price-One">${res2.priceOne}</div>
									<div class="Products-Price-One">${res2.priceTwo}</div>
								</div>
							</a>
						</div>`
	}
	var str3 = "";//准备拼接
	for( var i = 0 ; i < json1.List2.length; i++ ){
		var res3 =  json1.List2[i];
		//console.log( res1 );
		str3 += `<div class="ProductsOne">
							<a href="#" class="Products">
								<div class="Products-Img"><img src="${res3.src}" style="width: 140px;height: 140px;"/></div>
								<div class="Products-Int">${res3.intr}</div>
								<div class="Products-Price">
									<div class="Products-Price-One">${res3.priceOne}</div>
									<div class="Products-Price-One">${res3.priceTwo}</div>
								</div>
							</a>
						</div>`
	}
	$(".hide-ShopListSport:eq(0)").html( str1 );
	$(".hide-ShopListSport:eq(1)").html( str2 );
	$(".hide-ShopListSport:eq(2)").html( str3 );
	/*无缝轮播*/
	//左按钮 .ShopSportLeftBtn     右按钮  .ShopSportrightBtn
	$(".ShopSportLeftBtn").click(function(){
		$(".hide-ShopList").animate({
			"margin-left" : -800
		},700,function(){
			$(".hide-ShopListSport").first().appendTo(".hide-ShopList");
			$(".hide-ShopList").css("margin-left",0)
		})
		return false;
	})
	
	$(".ShopSportrightBtn").click(function(){
		$(".hide-ShopList").animate({
			"margin-left" : 0
		},700,function(){
			$(".hide-ShopListSport").last().prependTo(".hide-ShopList");
			$(".hide-ShopList").css("margin-left",-800)
		})
		return false;
	})

});
/*第二个无缝轮播ajax请求数据*/
 var def3 =  $.ajax({
	type:"get",
	url:"json/data4.json",
	async:true
});
def3.done(function(json2){
	var str = "";
	for( var i = 0 ; i < json2.Lista.length ; i ++ ){
		var res = json2.Lista[i];
		/*console.log( res )*/
		str += `<img src="${res.src}"/>`
	}
	var str1 = "";
	for( var i = 0 ; i < json2.Lista1.length ; i ++ ){
		var res1 = json2.Lista1[i];
		/*console.log( res )*/
		str1 += `<img src="${res1.src}"/>`
	}
	$(".AutoTwoImgOne_OneLi:eq(0)").html( str );
	$(".AutoTwoImgOne_OneLi:eq(1)").html( str1 );
	var timer5 = null;
	var index5 = 0 ; 
	var $zhuan = $(".AutoTwoImgOne_One");
	timer5 = setInterval(autoplay1,2000)
	function autoplay1(){
		index++;
		if( index5 == $zhuan.size() ){
			index5 = 0;
		}
		$zhuan.animate({
			"margin-left" : -180
		},function(){
			$(".AutoTwoImgOne_OneLi").first().appendTo($zhuan);
			$zhuan.css("margin-left",0)
		})
	}
	$(".AutoTwoImgOne_OneLi").mouseenter(function(){
		clearInterval(timer5)
	})
	$(".AutoTwoImgOne_OneLi").mouseleave(function(){
		timer5 = setInterval(autoplay1,1000)
	})
	$(".AutoleftBtn").mouseenter(function(){
		clearInterval(timer5)
	})
	$(".AutoleftBtn").mouseleave(function(){
		timer5 = setInterval(autoplay1,1000)
	})
	$(".AutorightBtn").mouseenter(function(){
		clearInterval(timer5)
	})
	$(".AutorightBtn").mouseleave(function(){
		timer5 = setInterval(autoplay1,1000)
	})
	$(".AutoleftBtn").click(function(){
		$(".AutoTwoImgOne_One").animate({
			"margin-left" : -180
		},function(){
			$(".AutoTwoImgOne_OneLi").first().appendTo(".AutoTwoImgOne_One");
			$(".AutoTwoImgOne_One").css("margin-left",0)
		})
		return false
	})
	
	$(".AutorightBtn").click(function(){
		$(".AutoTwoImgOne_One").animate({
			"margin-left" : 0
		},function(){
			$(".AutoTwoImgOne_OneLi").last().prependTo(".AutoTwoImgOne_One");
			$(".AutoTwoImgOne_One").css("margin-left",-180)
		})
		return false
	})

})
/*吸顶搜索框*/
$(window).scroll(function(){
	if($("#FixedInput").offset().top > 600){
		$("#FixedInput").slideDown()
	}else{
		$("#FixedInput").hide()
	}
})
/*ajax请求数据     排行榜那些*/
/*面部护肤*/
var def6 = $.ajax({
	type:"get",
	url:"json/data5.json",
	async:true
});
def6.done(function(json6){
	//console.log( json6 );
	var str6 = "";
	for( var i = 0 ; i < json6.list.length ; i++ ){
		var res6 = json6.list[i];
		//console.log( res6 )
		//開始拼接
		str6 += `<div class="rankingoUl-LiOne">
						<a href="#" class="rankingoUl-LiOneA">
						<div class="Rimg"><img src="${res6.src}"/></div>
						<span class="RS">${res6.count}</span>
						<span class="RS1">${res6.price}</span>
					</a>
				</div>`
	}
	var str7 = "";
	for( var i = 0 ; i < json6.list1.length ; i++ ){
		var res7 = json6.list1[i];
		//console.log( res6 )
		//開始拼接
		str7 += `<div class="rankingoUl-LiOne">
						<a href="#" class="rankingoUl-LiOneA">
						<div class="Rimg"><img src="${res7.src}"/></div>
						<span class="RS">${res7.count}</span>
						<span class="RS1">${res7.price}</span>
					</a>
				</div>`
	}
	$(".middleBox-oUl:eq(0) .rankingList-bottomBox .rankingoUl-Li:eq(0)").html( str6 );
	$(".middleBox-oUl:eq(0) .rankingList-bottomBox .rankingoUl-Li:eq(1)").html( str7 );
	$(".rankingListleftBtn").click(function(){
		$(".rankingoUl:eq(0)").animate({
			"margin-left" : -350
		},700,function(){
			$(".rankingoUl-Li").first().appendTo(".rankingoUl:eq(0)");
			$(".rankingoUl:eq(0)").css("margin-left",0)
		})
		return false;
	})
	
	$(".rankingListrightBtn").click(function(){
		$(".rankingoUl:eq(0)").animate({
			"margin-left" : 0
		},700,function(){
			$(".rankingoUl:eq(0) .rankingoUl-Li").last().prependTo(".rankingoUl:eq(0)");
			$(".rankingoUl:eq(0)").css("margin-left",-350)
		})
		return false;
	})
	$(".middleBox-oUl:eq(0)").click(function(){
	$(".rankingList-bottomBox:eq(0)").toggle().siblings().hide()
		})
})

/*男装*/
var def7 = $.ajax({
	type:"get",
	url:"json/data6.json",
	async:true
});
def7.done(function(json7){
	//console.log( json7 );
	var str7 = "";
	for( var i = 0 ; i < json7.list.length ; i++ ){
		var res7 = json7.list[i];
		//console.log( res6 )
		//開始拼接
		str7 += `<div class="rankingoUl-LiOne">
						<a href="#" class="rankingoUl-LiOneA">
						<div class="Rimg"><img src="${res7.src}"/></div>
						<span class="RS">${res7.count}</span>
						<span class="RS1">${res7.price}</span>
					</a>
				</div>`
	}
	var str8 = "";
	for( var i = 0 ; i < json7.list1.length ; i++ ){
		var res8 = json7.list1[i];
		//console.log( res6 )
		//開始拼接
		str8 += `<div class="rankingoUl-LiOne">
						<a href="#" class="rankingoUl-LiOneA">
						<div class="Rimg"><img src="${res8.src}"/></div>
						<span class="RS">${res8.count}</span>
						<span class="RS1">${res8.price}</span>
					</a>
				</div>`
	}
	$(".middleBox-oUl:eq(1) .rankingList-bottomBox .rankingoUl-Li:eq(0)").html( str7 );
	$(".middleBox-oUl:eq(1) .rankingList-bottomBox .rankingoUl-Li:eq(1)").html( str8 );
	$(".rankingListleftBtn").click(function(){
		$(".rankingoUl:eq(1)").animate({
			"margin-left" : -350
		},700,function(){
			$(".rankingoUl:eq(1) .rankingoUl-Li").first().appendTo(".rankingoUl:eq(1)");
			$(".rankingoUl:eq(1)").css("margin-left",0)
		})
		return false;
	})
	
	$(".rankingListrightBtn").click(function(){
		$(".rankingoUl:eq(1)").animate({
			"margin-left" : 0
		},700,function(){
			$(".rankingoUl:eq(1) .rankingoUl-Li").last().prependTo(".rankingoUl:eq(1)");
			$(".rankingoUl:eq(1)").css("margin-left",-350)
		})
		return false;
	})
	$(".middleBox-oUl:eq(1)").click(function(){
	$(".rankingList-bottomBox:eq(1)").toggle().siblings().hide()
		})
})

/*休闲食品*/
var def8 = $.ajax({
	type:"get",
	url:"json/json7.json",
	async:true
});
def8.done(function(json8){
	console.log( json8 );
	var str8 = "";
	for( var i = 0 ; i < json8.list.length ; i++ ){
		var res8 = json8.list[i];
		//console.log( res6 )
		//開始拼接
		str8 += `<div class="rankingoUl-LiOne">
						<a href="#" class="rankingoUl-LiOneA">
						<div class="Rimg"><img src="${res8.src}"/></div>
						<span class="RS">${res8.count}</span>
						<span class="RS1">${res8.price}</span>
					</a>
				</div>`
	}
	var str9 = "";
	for( var i = 0 ; i < json8.list1.length ; i++ ){
		var res9 = json8.list1[i];
		//console.log( res6 )
		//開始拼接
		str9 += `<div class="rankingoUl-LiOne">
						<a href="#" class="rankingoUl-LiOneA">
						<div class="Rimg"><img src="${res9.src}"/></div>
						<span class="RS">${res9.count}</span>
						<span class="RS1">${res9.price}</span>
					</a>
				</div>`
	}
	$(".middleBox-oUl:eq(2) .rankingList-bottomBox .rankingoUl-Li:eq(0)").html( str8 );
	$(".middleBox-oUl:eq(2) .rankingList-bottomBox .rankingoUl-Li:eq(1)").html( str9 );
	$(".rankingListleftBtn").click(function(){
		$(".rankingoUl:eq(2)").animate({
			"margin-left" : -350
		},700,function(){
			$(".rankingoUl:eq(2) .rankingoUl-Li").first().appendTo(".rankingoUl:eq(2)");
			$(".rankingoUl:eq(2)").css("margin-left",0)
		})
		return false;
	})
	
	$(".rankingListrightBtn").click(function(){
		$(".rankingoUl:eq(2)").animate({
			"margin-left" : 0
		},700,function(){
			$(".rankingoUl:eq(2) .rankingoUl-Li").last().prependTo(".rankingoUl:eq(2)");
			$(".rankingoUl:eq(2)").css("margin-left",-350)
		})
		return false;
	})
	$(".middleBox-oUl:eq(2)").click(function(){
	$(".rankingList-bottomBox:eq(2)").toggle().siblings().hide()
		})
})

/*女装*/
var def9 = $.ajax({
	type:"get",
	url:"json/data8.json",
	async:true
});
def9.done(function(json9){
	console.log( json9 );
	var str9 = "";
	for( var i = 0 ; i < json9.list.length ; i++ ){
		var res9 = json9.list[i];
		//console.log( res6 )
		//開始拼接
		str9 += `<div class="rankingoUl-LiOne">
						<a href="#" class="rankingoUl-LiOneA">
						<div class="Rimg"><img src="${res9.src}"/></div>
						<span class="RS">${res9.count}</span>
						<span class="RS1">${res9.price}</span>
					</a>
				</div>`
	}
	var stra = "";
	for( var i = 0 ; i < json9.list1.length ; i++ ){
		var resa = json9.list1[i];
		//console.log( res6 )
		//開始拼接
		stra += `<div class="rankingoUl-LiOne">
						<a href="#" class="rankingoUl-LiOneA">
						<div class="Rimg"><img src="${resa.src}"/></div>
						<span class="RS">${resa.count}</span>
						<span class="RS1">${resa.price}</span>
					</a>
				</div>`
	}
	$(".middleBox-oUl:eq(3) .rankingList-bottomBox .rankingoUl-Li:eq(0)").html( str9 );
	$(".middleBox-oUl:eq(3) .rankingList-bottomBox .rankingoUl-Li:eq(1)").html( stra );
	$(".rankingListleftBtn").click(function(){
		$(".rankingoUl:eq(3)").animate({
			"margin-left" : -350
		},700,function(){
			$(".rankingoUl:eq(3) .rankingoUl-Li").first().appendTo(".rankingoUl:eq(3)");
			$(".rankingoUl:eq(3)").css("margin-left",0)
		})
		return false;
	})
	
	$(".rankingListrightBtn").click(function(){
		$(".rankingoUl:eq(3)").animate({
			"margin-left" : 0
		},700,function(){
			$(".rankingoUl:eq(3) .rankingoUl-Li").last().prependTo(".rankingoUl:eq(3)");
			$(".rankingoUl:eq(3)").css("margin-left",-350)
		})
		return false;
	})
	$(".middleBox-oUl:eq(3)").click(function(){
	$(".rankingList-bottomBox:eq(3)").toggle().siblings().hide()
		})
})

/*流行男装*/
var def10 = $.ajax({
	type:"get",
	url:"json/data9.json",
	async:true
});
def10.done(function(json10){
	console.log( json10 );
	var str10 = "";
	for( var i = 0 ; i < json10.list.length ; i++ ){
		var res10 = json10.list[i];
		//console.log( res6 )
		//開始拼接
		str10 += `<div class="rankingoUl-LiOne">
						<a href="#" class="rankingoUl-LiOneA">
						<div class="Rimg"><img src="${res10.src}"/></div>
						<span class="RS">${res10.count}</span>
						<span class="RS1">${res10.price}</span>
					</a>
				</div>`
	}
	var str11 = "";
	for( var i = 0 ; i < json10.list1.length ; i++ ){
		var res11 = json10.list1[i];
		//console.log( res6 )
		//開始拼接
		str11 += `<div class="rankingoUl-LiOne">
						<a href="#" class="rankingoUl-LiOneA">
						<div class="Rimg"><img src="${res11.src}"/></div>
						<span class="RS">${res11.count}</span>
						<span class="RS1">${res11.price}</span>
					</a>
				</div>`
	}
	$(".middleBox-oUl:eq(4) .rankingList-bottomBox .rankingoUl-Li:eq(0)").html( str10 );
	$(".middleBox-oUl:eq(4) .rankingList-bottomBox .rankingoUl-Li:eq(1)").html( str11 );
	$(".rankingListleftBtn").click(function(){
		$(".rankingoUl:eq(4)").animate({
			"margin-left" : -350
		},700,function(){
			$(".rankingoUl:eq(4) .rankingoUl-Li").first().appendTo(".rankingoUl:eq(4)");
			$(".rankingoUl:eq(4)").css("margin-left",0)
		})
		return false;
	})
	
	$(".rankingListrightBtn").click(function(){
		$(".rankingoUl:eq(4)").animate({
			"margin-left" : 0
		},700,function(){
			$(".rankingoUl:eq(4) .rankingoUl-Li").last().prependTo(".rankingoUl:eq(4)");
			$(".rankingoUl:eq(4)").css("margin-left",-350)
		})
		return false;
	})
	$(".middleBox-oUl:eq(4)").click(function(){
	$(".rankingList-bottomBox:eq(4)").toggle().siblings().hide()
		})
})
/*继续ajax操作*/
var def11 = $.ajax({
	type:"get",
	url:"json/data10.json",
	async:true
});
def11.done(function(json11){
	console.log( json11 );
	var str11 = "";
	for( var i = 0 ; i < json11.list.length ; i++ ){
		var res11 = json11.list[i];
		//console.log( res6 )
		//開始拼接
		str11 += `<div class="Rotat_One">
					<div class="Rotat_Two">
						<div class="RotatImg"><img src="${res11.src}" style="width: 80px;height: 80px;"/></div>
						<div class="RotatWen">${res11.wen}</div>
						<div class="RotatWenTwo">${res11.price}</div>
						<div class="RotatDiv">
						<div class="RotatDiv-One"><img src="${res11.twoSrc}"/></div>
						<div class="RotatHome">${res11.home}</div>
						</div>
						</div>
					</div>`
		}
	var str12 = "";
	for( var i = 0 ; i < json11.list1.length ; i++ ){
		var res12 = json11.list1[i];
		//console.log( res6 )
		//開始拼接
		str12 += `<div class="Rotat_One">
					<div class="Rotat_Two">
						<div class="RotatImg"><img src="${res12.src}" style="width: 80px;height: 80px;"/></div>
						<div class="RotatWen">${res12.wen}</div>
						<div class="RotatWenTwo">${res12.price}</div>
						<div class="RotatDiv">
						<div class="RotatDiv-One"><img src="${res12.twoSrc}"/></div>
						<div class="RotatHome">${res12.home}</div>
						</div>
						</div>
					</div>`
		}
	var str13 = "";
	for( var i = 0 ; i < json11.list2.length ; i++ ){
		var res13 = json11.list2[i];
		//console.log( res6 )
		//開始拼接
		str13 += `<div class="Rotat_One">
					<div class="Rotat_Two">
						<div class="RotatImg"><img src="${res13.src}" style="width: 80px;height: 80px;"/></div>
						<div class="RotatWen">${res13.wen}</div>
						<div class="RotatWenTwo">${res13.price}</div>
						<div class="RotatDiv">
						<div class="RotatDiv-One"><img src="${res13.twoSrc}"/></div>
						<div class="RotatHome">${res13.home}</div>
						</div>
						</div>
					</div>`
		}
		$(".middleConoUl-Li:eq(0) .Rotat").html( str11 );
		$(".middleConoUl-Li:eq(1) .Rotat").html( str12 );
		$(".middleConoUl-Li:eq(2) .Rotat").html( str13 );
		var timer11 = null;
		var index11 = 0;
		var $oUl = $(".middleConoUl")
		timer11 = setInterval(auto11,2000)
		function auto11(){
			index11++;
			if( index11 ==  $oUl.size()){
				index11 = 0;
			}
			$oUl.animate({
			"margin-left" : -350
		},function(){
			$(".middleConoUl-Li").first().appendTo($oUl);
			$oUl.css("margin-left",0)
		})
		}
		$(".middleConoUl-Li").mouseenter(function(){
			clearInterval(timer11)
		})
			$(".middleConoUl-Li").mouseleave(function(){
			timer11 = setInterval(auto11,1000)
		})
		$(".Fing-LeftBtn").mouseenter(function(){
			clearInterval(timer11)
		})
		$(".Fing-LeftBtn").mouseleave(function(){
			timer11 = setInterval(auto11,1000)
		})
		$(".Fing-RightBtnBtn").mouseenter(function(){
			clearInterval(timer11)
		})
		$(".Fing-riBtn").mouseleave(function(){
			timer11 = setInterval(auto11,1000)
		})
		$(".Fing-LeftBtn").click(function(){
			$(".middleConoUl").animate({
				"margin-left" : -350
			},function(){
				$(".middleConoUl-Li").first().appendTo(".middleConoUl");
				$(".middleConoUl").css("margin-left",0)
			})
		})
		$(".Fing-RightBtn").click(function(){
			$(".middleConoUl").animate({
				"margin-left" : 0
			},function(){
				$(".middleConoUl-Li").last().prependTo(".middleConoUl");
				$(".middleConoUl").css("margin-left",-350)
			})
		})

})
/*七匹狼*/
$("#Septwolves").mouseenter(function(){
	$(this).next().animate({
		"left" : 165
	})
	$("#Septwolves1cha").show(900)
})
$("#Septwolves").mouseleave(function(){
	$(this).next().animate({
		"left" : -404
	})
	$("#Septwolves1cha").hide()
})
$(window).scroll(function(){
	if( $("#Septwolves").offset().top >0 ){
		$("#Septwolves").css("position","fixed");
		$("#Septwolves").css("top",0);
	}else{
		$("#Septwolves").css("position","");
		$("#Septwolves").css("top",265);
	}
})
$(window).scroll(function(){
	if( $("#Septwolves1cha").offset().top > 0 ){
		$("#Septwolves1cha").css("position","fixed");
		$("#Septwolves1cha").css("top",0);
	}else{
		$("#Septwolves1cha").css("position","");
		$("#Septwolves1cha").css("top",265);
	}
})
$(window).scroll(function(){
	if( $("#Septwolves1").offset().top > 0 ){
		$("#Septwolves1").css("position","fixed");
		$("#Septwolves1").css("top",0);
	}else{
		$("#Septwolves1").css("position","");
		$("#Septwolves1").css("top",265);
	}
})

/*领劵中心 ajax请求数据*/
var def12 = $.ajax({
	type:"get",
	url:"json/data11.json",
	async:true
});
def12.done(function(json12){
	console.log( json12 );
	var str13 = "";
	for( var i = 0 ; i < json12.list.length ; i++ ){
		var res13 = json12.list[i];
		//console.log( res6 )
		//開始拼接
		str13 += `<div class="Let_theDiv">
					<div class="theDivCir"></div>
					<div class="theDivCir1"></div>
					<div class="Let_theDivImg">
						<img src="${res13.src}" style="width: 70px;height: 70px;"/>
					</div>
					<div class="Let_theDivWen">${res13.price}</div>
					<div class="Let_theDivPrice">
						<div class="PriceOneDiv">
						<span style="font-size: 16px;color: orangered;">${res13.price1}</span>
						<span style="font-size: 32px;color: orangered;font-weight: 900;">${res13.price2}</span>
					</div>
					<div class="PriceTwoDiv">${res13.price3}</div>
					<div class="PriceTwoDiv" style="color: #999;">${res13.price4}</div>
					</div>
				</div>`
		}
	var str14 = "";
	for( var i = 0 ; i < json12.list1.length ; i++ ){
		var res14 = json12.list1[i];
		//console.log( res6 )
		//開始拼接
		str14 += `<div class="Let_theDiv">
				<div class="theDivCir"></div>
				<div class="theDivCir1"></div>
					<div class="Let_theDivImg">
						<img src="${res14.src}" style="width: 70px;height: 70px;"/>
					</div>
					<div class="Let_theDivWen">${res14.price}</div>
					<div class="Let_theDivPrice">
						<div class="PriceOneDiv">
						<span style="font-size: 16px;color: orangered;">${res14.price1}</span>
						<span style="font-size: 32px;color: orangered;font-weight: 900;">${res14.price2}</span>
					</div>
					<div class="PriceTwoDiv">${res14.price3}</div>
					<div class="PriceTwoDiv" style="color: #999;">${res14.price4}</div>
					</div>
				</div>`
		}
		
		$(".Let_theLi:eq(0)").html( str13 )
		$(".Let_theLi:eq(1)").html( str14 )
		
		var timer12 = null;
		var index12 = 0;
		var $oUl1 = $(".Let_theoUl")
		timer12 = setInterval(auto12,4000)
		function auto12(){
			index12++;
			if( index12 ==  $oUl1.size()){
				index12 = 0;
			}
			$oUl1.animate({
			"margin-left" : -350
		},function(){
			$(".Let_theLi").first().appendTo($oUl1);
			$oUl1.css("margin-left",0)
		})
		}
		$(".Let_theLi").mouseenter(function(){
			clearInterval(timer11)
		})
			$(".Let_theLi").mouseleave(function(){
			timer12 = setInterval(auto11,3000)
		})
		$(".Fing-LeftBtn").mouseenter(function(){
			clearInterval(timer12)
		})
		$(".Fing-LeftBtn").mouseleave(function(){
			timer12 = setInterval(auto12,3000)
		})
		$(".Fing-RightBtnBtn").mouseenter(function(){
			clearInterval(timer12)
		})
		$(".Fing-riBtn").mouseleave(function(){
			timer12 = setInterval(auto12,3000)
		})
		$(".Fing-LeftBtn").click(function(){
			$(".Let_theoUl").animate({
				"margin-left" : -350
			},function(){
				$(".Let_theLi").first().appendTo(".Let_theoUl");
				$(".Let_theoUl").css("margin-left",0)
			})
		})
		$(".Fing-RightBtn").click(function(){
			$(".Let_theoUl").animate({
				"margin-left" : 0
			},function(){
				$(".Let_theLi").last().prependTo(".Let_theoUl");
				$(".Let_theoUl").css("margin-left",-350)
			})
		})
		$(".Let_theDiv:eq(1)").css("background","#eeefed")
		$(".Let_theDiv:eq(4)").css("background","#eeefed")
		$(".PriceOneDiv").css("font-family","'impact', sans-serif")
})
/*Me觅  那一块*/
var def13 = $.ajax({
	type:"get",
	url:"json/json1.json",
	async:true
});
def13.done(function(json13){
	console.log( json13 );
	var str14 = "";
	for( var i = 0 ; i < json13.list.length ; i++ ){
		var res14 = json13.list[i];
		//console.log( res6 )
		//開始拼接
		str14 += `<div class="Me-Img"><img src="${res14.src}"/></div>
					<div class="Me-Wen">${res14.price}</div>
					<div class="Me-WenOne">
						${res14.price1}
					</div>`
		}
	var str15 = "";
	for( var i = 0 ; i < json13.list1.length ; i++ ){
		var res15 = json13.list1[i];
		//console.log( res6 )
		//開始拼接
		str15 += `<div class="Me-Img"><img src="${res15.src}"/></div>
					<div class="Me-Wen">${res15.price}</div>
					<div class="Me-WenOne">
						${res15.price1}
					</div>`
		}
	var str16 = "";
	for( var i = 0 ; i < json13.list2.length ; i++ ){
		var res16 = json13.list2[i];
		//console.log( res16 )
		//開始拼接
		str16 += `<div class="Find-TopImg"><img src="${res16.src}" style="width: 350px;"/></div>
						<div class="Find-BottomImg">
							<div class="Find-Img">
								<div class="Find-oneImg"><img src="${res16.src1}"/></div>
								<div class="Find-oneImg"><img src="${res16.src2}"/></div>
								<div class="Find-oneImg"><img src="${res16.src3}"/></div>
							</div>
							<div class="Find-Wen">
								<h3 title="秋膘蠢蠢欲动？协装备用奔跑甩脱">${res16.price}</h3>
							</div>
							<div class="Find-WenBot">${res16.price1}</div>
						</div>`
		}
		var str17 = "";
	for( var i = 0 ; i < json13.list3.length ; i++ ){
		var res17 = json13.list3[i];
		//console.log( res16 )
		//開始拼接
		str17 += `<div class="WillBe-bigImg"><img src="${res17.src}"/></div>
					<div class="WillBe-smallImg">
						<a href="" class="WillBe-smallImg-A"><img src="${res17.src1}"/></a>
						<a href="" class="WillBe-smallImg-A"><img src="${res17.src2}"/></a>
						<a href="" class="WillBe-smallImg-A"><img src="${res17.src3}"/></a>
					</div>`
		}
		$(".Memiddle_oUl-Li:eq(0)").html( str14 )
		$(".Memiddle_oUl-Li:eq(1)").html( str15 )
		$(".Find-middleCon").eq(2).html( str16 )
		$(".WillBe").eq(0).html( str17 )
		var timer13 = null;
		var index13 = 0;
		var $oUl3 = $(".Memiddle_oUl")
		timer13 = setInterval(auto13,5000)
		function auto13(){
			index13++;
			if( index13 ==  $oUl3.size()){
				index13 = 0;
			}
			$oUl3.animate({
			"margin-left" : -350
		},function(){
			$(".Memiddle_oUl-Li").first().appendTo($oUl3);
			$oUl3.css("margin-left",0)
		})
		}
		$(".Memiddle_oUl-Li").mouseenter(function(){
			clearInterval(timer13)
		})
			$(".Memiddle_oUl-Li").mouseleave(function(){
			timer13 = setInterval(auto13,2500)
		})
		$(".MeBtnLeft").mouseenter(function(){
			clearInterval(timer13)
		})
		$(".MeBtnLeft").mouseleave(function(){
			timer13 = setInterval(auto13,2500)
		})
		$(".MeBtnRight").mouseenter(function(){
			clearInterval(timer13)
		})
		$(".MeBtnRight").mouseleave(function(){
			timer13 = setInterval(auto13,2500)
		})
		
		
		$(".MeBtnLeft").click(function(){
			$(".Memiddle_oUl").animate({
				"margin-left" : -350
			},function(){
				$(".Memiddle_oUl-Li").first().appendTo(".Memiddle_oUl");
				$(".Memiddle_oUl").css("margin-left",0)
			})
		})
		
		$(".MeBtnRight").click(function(){
			$(".Memiddle_oUl").animate({
				"margin-left" : 0
			},function(){
				$(".Memiddle_oUl-Li").last().prependTo(".Memiddle_oUl");
				$(".Memiddle_oUl").css("margin-left",-350)
			})
		})
		$(".Memiddle_oUl-Li:eq(1)").find(".Me-Wen").css("text-align","center")
})
/*时尚达人使用ajax请求数据*/
var deef = $.ajax({
	type:"get",
	url:"json/json3.json",
	async:true
});
deef.done(function(json14){
	//console.log( json14 );
	var fn = "";
	for( var i = 0 ; i < json14.list.length ; i++ ){
		var fa = json14.list[i];
		//console.log( res6 )
		//開始拼接
		fn += `<div class="Adidas" title="运动户外"><img src="${fa.src}"/></div>
				<div class="ASICS" title="运动户外"><img src="${fa.src1}"/></div>
				<div class="ASICS" title="运动户外" style="margin-right: 0;"><img src="${fa.src2}"/></div>`
	}
	var fn1 = "";
	for( var i = 0 ; i < json14.list1.length ; i++ ){
		var fa1 = json14.list1[i];
		//console.log( res6 )
		//開始拼接
		fn1 += `<div class="Adidas" title="运动户外"><img src="${fa1.src}"/></div>
				<div class="ASICS" title="运动户外"><img src="${fa1.src1}"/></div>
				<div class="ASICS" title="运动户外" style="margin-right: 0;"><img src="${fa1.src2}"/></div>`
	}
	$(".FDiv:eq(0)").html( fn )
	$(".FDiv:eq(1)").html( fn1 )
	
})
/*南极人  ajax请求数据 和下面的智能先锋 除了第一块 手机品牌的分类  全部ajax*/
var deef2 = $.ajax({
	type:"get",
	url:"json/json4.json",
	async:true
});
deef2.done(function(json15){
	console.log( json15 );
	var fn2 = "";
	for( var i = 0 ; i < json15.list.length ; i++ ){
		var fa2 = json15.list[i];
		//console.log( res6 )
		//開始拼接
		fn2 += `<div class="NGGGNTwo_left">
										<div class="NGGGN-img">
											<img src="${fa2.src}" style="margin-left: 3px;margin-top: 3px;border-radius: 10px;"/>
										</div>
										<div class="NGGGN-wen">${fa2.price}</div>
									</div>`
	}
	var fn3 = "";
	for( var i = 0 ; i < json15.list1.length ; i++ ){
		var fa3 = json15.list1[i];
		//console.log( res6 )
		//開始拼接
		fn3 += `<div class="NGGGNTwo_left">
										<div class="NGGGN-img">
											<img src="${fa2.src}" style="margin-left: 3px;margin-top: 3px;border-radius: 10px;"/>
										</div>
										<div class="NGGGN-wen">${fa2.price}</div>
									</div>`
	}
	var fn4 = "";
	for( var i = 0 ; i < json15.list2.length ; i++ ){
		var fa4 = json15.list2[i];
		//console.log( res6 )
		//開始拼接
		fn4 += `<div class="FDiv">
					<div class="Thank_Img"><img src="${fa4.src}"/></div>
					<div class="Thank_Img"><img src="${fa4.src1}"/></div>
				</div>`
	}
	var fn5 = "";
	for( var i = 0 ; i < json15.list3.length ; i++ ){
		var fa5 = json15.list3[i];
		//console.log( res6 )
		//開始拼接
		fn5 += `<div class="FDiv">
					<div class="Thank_Img"><img src="${fa5.src}"/></div>
					<div class="Thank_Img"><img src="${fa5.src1}"/></div>
				</div>`
	}
	var fn6 = "";
	for( var i = 0 ; i < json15.list4.length ; i++ ){
		var fa6 = json15.list4[i];
		//console.log( res6 )
		//開始拼接
		fn6 += `<div class="Adidas" title="新品首发"><img src="${fa6.src}"/></div>`
	}
	var fn7 = "";
	for( var i = 0 ; i < json15.list5.length ; i++ ){
		var fa7 = json15.list5[i];
		//console.log( res6 )
		//開始拼接
		fn7 += `<div class="FDiv">
					<div class="Thank_Img"><img src="${fa7.src}"/></div>
					<div class="Thank_Img"><img src="${fa7.src1}"/></div>
				</div>`
	}
	var fn8 = "";
	for( var i = 0 ; i < json15.list6.length ; i++ ){
		var fa8 = json15.list6[i];
		//console.log( res6 )
		//開始拼接
		fn8 += `<div class="FDiv">
					<div class="Thank_Img"><img src="${fa8.src}"/></div>
					<div class="Thank_Img"><img src="${fa8.src1}"/></div>
				</div>`
	}
	
	var fn9 = "";
	for( var i = 0 ; i < json15.list7.length ; i++ ){
		var fa9 = json15.list7[i];
		//console.log( res6 )
		//開始拼接
		fn9 += `<img src="${fa9.src}"/>`
	}
	var fn10 = "";
	for( var i = 0 ; i < json15.list8.length ; i++ ){
		var fa10 = json15.list8[i];
		//console.log( res6 )
		//開始拼接
		fn10 += `<img src="${fa10.src}"/>`
	}
	
	
	//智能数码
	$(".FindGcon_top .Numerical:eq(0)").html( fn9 );
	$(".FindGcon_top .Numerical:eq(1)").html( fn10 );
	
	
	
	//通信好物      初出茅庐
	$(".Thank_you:eq(2) .Memiddle_TopDiv").html( fn7 )
	$(".Thank_you:eq(3) .Memiddle_TopDiv").html( fn8 )
	
	
	
	
	/*这是第五个FDiv    下标 是4     新品首发*/
	$(".FDiv:eq(4)").html( fn6 )
	
	
	
	/*舒享鞋感       轻奢皮具*/
	$(".Thank_you:eq(0) .Memiddle_TopDiv").html( fn4 )
	$(".Thank_you:eq(1) .Memiddle_TopDiv").html( fn5 )
	
	
	/*南极人  两块*/
	$(".FindGcon_top .NGGGNTwo:eq(0)").html( fn2 );
	$(".FindGcon_top .NGGGNTwo:eq(1)").html( fn3 );
	$(".NGGGN:eq(1)").css({
		"background" : "#91809b",
		"background" : "rgba(145, 128, 155, 0.6)"
	})
	$(".NGGGNTwo:eq(1)").css({
		"background" : "#91809b",
		"background" : "rgba(145, 128, 155, 0.4)"
	})
	
})

/*手机分类 ajax请求数据*/
var deef3 = $.ajax({
	type:"get",
	url:"json/json8.json",
	async:true
});
deef3.done(function(json16){
	//console.log( json14 );
	var ip = "";
	for( var i = 0 ; i < json16.list.length ; i++ ){
		var ip1 = json16.list[i];
		//console.log( res6 )
		//開始拼接
		ip += `<div class="iphoneBorder">
					<img src="${ip1.src1}" style="margin: 3px auto;"/>
			   </div>`
	}
	var ip1 = "";
	for( var i = 0 ; i < json16.list2.length ; i++ ){
		var ip2 = json16.list2[i];
		//console.log( res6 )
		//開始拼接
		ip1 += `<img src="${ip2.src}" style="float: left;"/>
			   <img src="${ip2.src1}" style="float: right;"/>`
	}
	var ip2 = "";
	for( var i = 0 ; i < json16.list3.length ; i++ ){
		var ip3 = json16.list3[i];
		//console.log( res6 )
		//開始拼接
		ip2 += `<div class="Adidas" title="运动户外"><img src="${ip3.src}"/></div>
				<div class="ASICS" title="运动户外"><img src="${ip3.src1}"/></div>
				<div class="ASICS" title="运动户外" style="margin-right: 0;"><img src="${ip3.src2}"/></div>`
	}
	
	
	/*玩具世界*/
	var ip3 = "";
	for( var i = 0 ; i < json16.list4.length ; i++ ){
		var ip4 = json16.list4[i];
		//console.log( res6 )
		//開始拼接
		ip3 += `<div class="NGGGNTwo_left">
					<div class="NGGGN-img">
						<img src="${ip4.src}" style="margin-left: 3px;margin-top: 3px;border-radius: 10px;"/>
					</div>
					<div class="NGGGN-wen">${ip4.price}</div>
				</div>`
	}
	var ip4 = "";
	for( var i = 0 ; i < json16.list5.length ; i++ ){
		var ip5 = json16.list5[i];
		//console.log( res6 )
		//開始拼接
		ip4 += `<div class="NGGGNTwo_left">
						<div class="NGGGN-img">
							<img src="${ip5.src}" style="margin-left: 3px;margin-top: 3px;border-radius: 10px;"/>
						</div>
						<div class="NGGGN-wen">${ip5.price}</div>
				</div>`
	}
	
	/*图书世界*/
	var book = "";
	for( var i = 0 ; i < json16.list6.length ; i++ ){
		var resbook = json16.list6[i];
		//console.log( res6 )
		//開始拼接
		book += `<div class="FDiv">
					<div class="Thank_Img"><img src="${resbook.src}"/></div>
					<div class="Thank_Img"><img src="${resbook.src1}"/></div>
				</div>`
	}
	var book1 = "";
	for( var i = 0 ; i < json16.list7.length ; i++ ){
		var resbook1 = json16.list7[i];
		//console.log( res6 )
		//開始拼接
		book1 += `<div class="FDiv">
					<div class="Thank_Img"><img src="${resbook1.src}"/></div>
					<div class="Thank_Img"><img src="${resbook1.src1}"/></div>
				</div>`
	}
	
	var book2 = "";
	for( var i = 0 ; i < json16.list8.length ; i++ ){
		var resbook2 = json16.list8[i];
		//console.log( res6 )
		//開始拼接
		book2 += `<img src="${resbook2.src}"/>`
	}
	var book3 = "";
	for( var i = 0 ; i < json16.list9.length ; i++ ){
		var resbook3 = json16.list9[i];
		//console.log( res6 )
		//開始拼接
		book3 += `<img src="${resbook3.src}"/>`
	}
	/*图书世界*/
	$(".FindGcon_top .Numerical:eq(2)").html( book2 )
	$(".FindGcon_top .Numerical:eq(3)").html( book3 )
	$(".Thank_you:eq(4) .Memiddle_TopDiv").html( book )
	$(".Thank_you:eq(5) .Memiddle_TopDiv").html( book1 )
	/*玩具世界*/
	$(".FindGcon_top .NGGGNTwo:eq(2)").html( ip3 );
	$(".FindGcon_top .NGGGNTwo:eq(3)").html( ip4 );
	$(".NGGGN:eq(2)").css({
		"background" : "#7d6767",
		"background" : "rgba(145, 128, 155, 0.7)"
	})
	$(".NGGGNTwo:eq(2)").css({
		"background" : "#7d6767",
		"background" : "rgba(145, 128, 155, 0.5)"
	})
	$(".NGGGN:eq(3)").css({
		"background" : "#a37b7b",
		"background" : "rgba(145, 128, 155, 0.9)"
	})
	$(".NGGGNTwo:eq(3)").css({
		"background" : "#a37b7b",
		"background" : "rgba(145, 128, 155, 0.5)"
	})
	
	
	$(".FDiv:eq(10)").html( ip2 )
	$(".phoneClassify").html( ip )
	$(".Channel").html( ip1 )
	
})
/*企业采购 ajax请求数据*/
var pro = $.ajax({
	type:"get",
	url:"json/pro.json",
	async:true
});
pro.done(function(json22){
	//console.log( json );
	var str22 = "";
	for( var i = 0 ; i < json22.list.length ; i++ ){
		var res22 = json22.list[i];
		/*准备拼接*/
		str22 += `<img src="${res22.src1}" title="哈哈哈哈"/>
				<img src="${res22.src2}" title="哈哈哈哈" style="border-right: 1px solid #ccc;"/>
				<img src="${res22.src3}" title="哈哈哈哈" style="border-right: 1px solid #ccc;"/>
				<img src="${res22.src4}" title="哈哈哈哈"/>
				<img src="${res22.src5}" title="哈哈哈哈"/>`
	}
	$("#Purchase").html( str22 )
})
/*寻宝ajax请求数据*/
var man1 = $.ajax({
	type:"get",
	url:"json/real.json",
	async:true
});
man1.done(function(jsonMan){
	var man = "";
	for( var i = 0 ; i < jsonMan.list.length;i++ ){
		var real = jsonMan.list[i];
		man += `<a href="" class="realManDiv">
					<div class="realMask"></div>
					<div class="realImg"><img src="${real.src}" style="width: 390px;height: 100px;"/></div>
					<div class="realManWen">${real.price}</div>
					<div class="realManbottomDiv">
						<img src="${real.src1}"/>
						<img src="${real.src2}"/>
						<img src="${real.src3}"/>
					</div>
			</a>`
	}
	$("#realMan").html( man );
	$("#realMan .realManDiv:eq(2)").css("margin-right",0)
	$("#realMan .realManDiv:eq(5)").css("margin-right",0)
})
/*特色推荐 ajax请求数据*/
var lity1 = $.ajax({
	type:"get",
	url:"json/lity.json",
	async:true
});
lity1.done(function(lity2){
	var li = "";
	for( var i = 0 ; i < lity2.list.length;i++ ){
		var reallity = lity2.list[i];
		li += `<div class="SpecialityConDiv">
					<div class="SpecialityConDiv_Top">
						<h3 class="rankingH">${reallity.price}</h3>
						<i class="iconfont">${reallity.price1}</i>
						<span class="rankingS">${reallity.price2}</span>
					</div>
					<img src="${reallity.src}" style="margin-top: 6px;"/>
			   </div>`
	}
	var li1 = "";
	for( var i = 0 ; i < lity2.list1.length;i++ ){
		var reallity1 = lity2.list1[i];
		li1 += `<div class="SpecialityConDiv">
					<div class="SpecialityConDiv_Top">
						<h3 class="rankingH">${reallity1.price}</h3>
						<i class="iconfont">${reallity1.price1}</i>
						<span class="rankingS">${reallity1.price2}</span>
					</div>
					<img src="${reallity1.src}" style="margin-top: 6px;"/>
			   </div>`
	}
	var li2 = "";
	for( var i = 0 ; i < lity2.list2.length;i++ ){
		var reallity2 = lity2.list2[i];
		li2 += `<div class="SpecialityConDiv">
					<div class="SpecialityConDiv_Top">
						<h3 class="rankingH">${reallity2.price}</h3>
						<i class="iconfont">${reallity2.price1}</i>
						<span class="rankingS">${reallity2.price2}</span>
					</div>
					<img src="${reallity2.src}" style="margin-top: 6px;"/>
			   </div>`
	}
	$(".SpecialityConli:eq(0)").html( li );
	$(".SpecialityConli:eq(1)").html( li1 );
	$(".SpecialityConli:eq(2)").html( li2 );
	
	
	
	//SpecialityConoUl     SpecialityleftBtn      SpecialityrightBtn
	/*无缝轮播开始*/
	var timer123 = null;
		var index123 = 0;
		var $oUl123 = $(".SpecialityConoUl")
		timer123 = setInterval(auto123,2200)
		function auto123(){
			index123++;
			if( index123 ==  $oUl123.size()){
				index123 = 0;
			}
			$oUl123.animate({
			"margin-left" : -1190
		},function(){
			$(".SpecialityConli").first().appendTo($oUl123);
			$oUl123.css("margin-left",0)
		})
		}
		$(".SpecialityConli").mouseenter(function(){
			clearInterval(timer123)
		})
			$(".SpecialityConli").mouseleave(function(){
			timer123 = setInterval(auto123,2500)
		})
		$(".SpecialityleftBtn").mouseenter(function(){
			clearInterval(timer123)
		})
		$(".SpecialityleftBtn").mouseleave(function(){
			timer123 = setInterval(auto123,2500)
		})
		$(".SpecialityrightBtn").mouseenter(function(){
			clearInterval(timer123)
		})
		$(".SpecialityrightBtn").mouseleave(function(){
			timer123 = setInterval(auto123,2500)
		})
		
		
		$(".SpecialityleftBtn").click(function(){
			$(".SpecialityConoUl").animate({
				"margin-left" : -1190
			},function(){
				$(".SpecialityConli").first().appendTo(".SpecialityConoUl");
				$(".SpecialityConoUl").css("margin-left",0)
			})
		})
		
		$(".SpecialityrightBtn").click(function(){
			$(".SpecialityConoUl").animate({
				"margin-left" : 0
			},function(){
				$(".SpecialityConli").last().prependTo(".SpecialityConoUl");
				$(".SpecialityConoUl").css("margin-left",-1190)
			})
		})
})
/*京东直播 ajax请求数据*/
var live = $.ajax({
	type:"get",
	url:"json/live.json",
	async:true
});
live.done(function(livesys){
	/*第一块*/
	var sys = "";
	for( var i = 0 ; i < livesys.list.length;i++ ){
		var reallive = livesys.list[i];
		sys += `<div class="NewLiveImg">
					<img src="${reallive.src}" style="height: 190px;width: 170px;"/>
					<div class="liveIco"><i class="iconfont">${reallive.icon}</i></div>
					<div class="liveWen">${reallive.price}</div>
					<div class="liveMask">${reallive.mask}</div>
				</div>`
	}
	$(".NewLiveConDivCon:eq(0)").html( sys )
	//第二块
	var sys1 = "";
	for( var i = 0 ; i < livesys.list1.length;i++ ){
		var reallive1 = livesys.list1[i];
		sys1 += `<div class="NewLiveImg" style="width: 360px;height: 390px;">
						<img src="${reallive1.src}" style="width: 350px;height: 389px;"/>
						<div class="liveIco"><i class="iconfont" style="font-size: 60px;">${reallive1.icon}</i></div>
						<div class="liveWen1">${reallive1.price}</div>
						<div class="liveWen2">${reallive1.price1}</div>
						<div class="liveMask" style="width: 350px;height: 389px;">${reallive1.mask}</div>
					</div>`
	}
	$(".NewLiveConDivCon:eq(1)").html( sys1 )
	/*第三块*/
	var sys2 = "";
	for( var i = 0 ; i < livesys.list2.length;i++ ){
		var reallive2 = livesys.list2[i];
		sys2 += `<div class="NewLiveImg">
					<img src="${reallive2.src}" style="height: 190px;width: 170px;"/>
					<div class="liveIco"><i class="iconfont">${reallive2.icon}</i></div>
					<div class="liveWen">${reallive2.price}</div>
					<div class="liveMask">${reallive2.mask}</div>
				</div>`
	}
	$(".NewLiveConDivCon:eq(2)").html( sys2 )
	
	
})
/*还没逛够   请求数据*/
var red = $.ajax({
	type:"get",
	url:"json/black.json",
	async:true
});
red.done(function(jsonred){
	var blue = "";
	for( var i = 0 ; i < jsonred.list.length;i++ ){
		var realred = jsonred.list[i];
		blue += `<li class="Blacksharkli">
				<div class="BlackImg"><img src="${realred.src}"/></div>
				<div class="BlackWen">
					<span class="Blackspan">${realred.price}</span>
					${realred.price1}
				</div>
				<div class="BlackPrice">
					<i>${realred.price2}</i>
					${realred.price3}
				</div>
				<div class="BlackNo">
					<div class="BlackNoleft">
						<i class="iconfont" style="vertical-align: bottom;">&#xe608;</i>找相似
					</div>
					<div class="BlackNoleft" style="background: #fff;color: black;">
						<i class="iconfont" style="vertical-align: bottom;">&#xe613;</i>不喜欢
					</div>
				</div>
			</li>`
	}
	var blue1 = "";
	for( var i = 0 ; i < jsonred.list1.length;i++ ){
		var realred1 = jsonred.list1[i];
		blue1 += `<li class="Blacksharkli">
				<div class="BlackImg"><img src="${realred1.src}"/></div>
				<div class="BlackWen">
					<span class="Blackspan" style="background:#fff">${realred1.price}</span>
					${realred1.price1}
				</div>
				<div class="BlackPrice">
					<i>${realred1.price2}</i>
					${realred1.price3}
				</div>
				<div class="BlackNo">
					<div class="BlackNoleft">
						<i class="iconfont" style="vertical-align: bottom;">&#xe608;</i>找相似
					</div>
					<div class="BlackNoleft" style="background: #fff;color: black;">
						<i class="iconfont" style="vertical-align: bottom;">&#xe613;</i>不喜欢
					</div>
				</div>
			</li>`
	}
	$(".BlacksharkoUl:eq(0)").html( blue );
	$(".BlacksharkoUl:eq(0)").find(".Blacksharkli").mouseenter(function(){
		$(this).find(".BlackNo").fadeIn();
		$(this).find(".BlackNo").css("box-shadow","0,15px,30px,rgba(0,0,0,.3)")
		$(this).find(".BlackImg").css("opacity",0.5)
	})
	$(".BlacksharkoUl:eq(0)").find(".Blacksharkli").mouseleave(function(){
		$(this).find(".BlackNo").fadeOut();
		$(this).find(".BlackImg").css("opacity",1)
	})
	
	$(".BlacksharkoUl:eq(0)").children(".Blacksharkli").last().find(".BlackImg").children("img").css({
		"position": "absolute",
		"left" : 0,
		"top" : 0
	})
	$(".BlacksharkoUl:eq(0)").children(".Blacksharkli").last().find(".Blackspan").css("background","#fff")
	$(".BlacksharkoUl:eq(1)").children(".Blacksharkli").last().find(".Blackspan").css("background","#fff")
	$(".BlacksharkoUl:eq(1)").html( blue );
	$(".BlacksharkoUl:eq(1)").find(".Blacksharkli").mouseenter(function(){
		$(this).find(".BlackNo").fadeIn();
		$(this).find(".BlackNo").css("box-shadow","1,15px,30px,rgba(1,0,0,.3)")
		$(this).find(".BlackImg").css("opacity",0.5)
	})
	$(".BlacksharkoUl:eq(1)").find(".Blacksharkli").mouseleave(function(){
		$(this).find(".BlackNo").fadeOut();
		$(this).find(".BlackImg").css("opacity",1)
	})
	
	$(".BlacksharkoUl:eq(1)").children(".Blacksharkli").last().find(".BlackImg").children("img").css({
		"position": "absolute",
		"left" : 0,
		"top" : 0
	})
})
/*回到顶部*/
$(".last").click(function(){
			$("html,body").animate({
			scrollTop : 0
		},1)
})

$("#LoutiNav li:not(.last)").click(function(){
		//获取楼层号的下标
		var index10 = $(this).index();
		//alert( index )
		//根据下标查找对应楼层并获取该楼层相对于body的距离
		$(".LOUti").eq(index10).offset().top 
		//设置页面滚走的距离
		$("html,body").animate({
			scrollTop : $(".LOUti").eq(index10).offset().top
		},100)
		//设置楼层的样式给span标签
		//$("#LoutiNav span").addClass("active").siblings().removeClass("active")
	})

/*跳转到购物车未登录页面*/
$(".gouwuche").click(function(){
	open("shopcar.html")
})













