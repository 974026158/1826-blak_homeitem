$("#footer").load("index.html #footer");
$("#logoNav").load("index.html #logoNav");

var adidas = $.ajax({
	type:"get",
	url:"json/adidas.json",
	async:true
});
adidas.done(function(vans){
	var str = "";
	for( var i = 0 ; i < vans.list.length;i++ ){
		var res = vans.list[i];
		str += `<em class="header_naeWen">${res.price}</em>`;
	};
	$(".header_nav").html( str );
});
$(".black_logo").click(function(){
	open("bigImg.html");
});
$(".header_logo").click(function(){
	location.href = "index.html";
});
