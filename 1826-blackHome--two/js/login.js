$uname = $("#login_number");//用户名
$upwd = $("#login_password");//密码
$(function(){
	//用一个变量接受cookie
		var str = document.cookie;
		//console.log( str );// y=18602237500; m=zhangzhihang
		//分割 慢慢取出cookie
		var str1 = str.split("; ")
		//console.log( str1 );// ["y=18602237500", "m=zhangzhihang"]
		for(var i = 0; i < str1.length; i++) {
			//console.log( str1[i] );//y=18602237500 m=zhangzhihang
			var str2 = str1[i].split("=");
			//console.log( str2 );// ["y", "18602237500"]  ["m", "zhangzhihang"]
			if(str2[0] == "y") { //如果键相等 取出对应的值
				var st = str2[1]
				//console.log(st); //18602237500
			};
			if(str2[0] == "m") {
				var st1 = str2[1]
				//console.log(st1); //zhangzhihang
			}
			$("#login_btn").click(function() {
				if(st == $uname.val() && st1 == $upwd.val()) {
					/*alert("登录成功");*/
					/*console.log( st , st1 )*/
					open("index.html");
					/*alert("成功")*/
				} else {
					alert("该用户不存在，请去注册")
				}
			})
			
			
			
			

		}
	$("#remember").change(function() {
		//alert()
		document.cookie = "st=" + $uname.val() ;
		document.cookie = "st1=" + $upwd.val();
		//console.log(res)
		var time = new Date;
		time.setDate(time.getDate() + 1)
	})
	
})
