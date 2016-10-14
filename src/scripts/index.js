/*
var dateUtil=require('./common/utils/dateUtil.js');
var List=require('./modules/list.js');
var Detail=require('./modules/detail.js');

var $=require('./common/libs/jquery-1.12.4.min.js');
console.log($);
$.post('/api/skill',{},function(response){
	result=response;
	var html="<ul>";
	for(var i=0;i<result.length;i++){
		html+='<li>'+result[i].name+'</li>';
	};
	html+="</ul>";
	$('#list').html(html);
})

console.log(List('222'));
console.log(Detail);
var detailInstance=new Detail();

console.log(detailInstance);
console.log(detailInstance.say('333333'));

console.log('main is');
console.log(dateUtil.getDate()) 

*/

//引入zepto
var $ = require('./components/zepto-modules/_custom');

//引入iscroll
var IScroll=require('./components/iscroll/iscroll.js');	
//设置iscroll对象默认为hide
$('#mainContent').hide();
$('.swiper-container').show();
$('#enter').tap(function(){
	$('#mainContent').show();
	$('.swiper-container').hide();
	//
	// $.post("/api/skill",function(response){
	// 	console.log(response)
	// 	var html="";
	// 	for(var i=0;i<response.length;i++){
	// 		html+='<li>'+response[i].name+'</li>';
	// 	};
	// 		$('#scroller').html(html);
	// 	//调用iscroll
	// 	myScroll = new IScroll('#wrapper', { mouseWheel: true });	
	// 	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	// })
	$('#footer .button').tap(function(){
		var apiTarget=$(this).attr("id");
		$.post("/api/"+apiTarget,function(response){			
			var html="";
			console.log(apiTarget)
			for(var i=0;i<response.length;i++){
				if(apiTarget=='skill'){
					html+='<li><span>技能</span>：'+response[i].category+'<br><span>内容</span>：'+response[i].name+'<br><span>运用时间</span>：'+response[i].time+'<br><span>掌握程度</span>：'+response[i].level+'</li>';
				}else if(apiTarget=='work'){
					html+='<li>公司类型：'+response[i].category+'<br>公司全称：'+response[i].name+'<br>在职时间：'+response[i].time+'<br>职位：'+response[i].posts+'/'+response[i].reportto+'<br>公司规模：'+response[i].peoples+'<br>项目：'+response[i].projects+'</li>';
				}else if(apiTarget=='product'){
					html+='<li>公司类型： '+response[i].title+'<br><div class="pic1"><img src="'+response[i].img+'"></div><br>在职时间：'+response[i].no+'<br>职位：'+response[i].price+'</li>';
				}else if(apiTarget=='project'){
					html+='<li><p class="company">'+response[i].name+'<span>'+response[i].category+'<span></p><div class="pic1"><img src="'+response[i].image+'"></div><p>项目简介: '+response[i].description+'<br>'+response[i].detail+'</p><p>运用的技术: '+response[i].tech+'</p></li>';
				}else if(apiTarget=='interest'){
					
					html+='<li><i class="img"><img src="'+response[i].image+'"></i><p>'+response[i].category+'</p></li>'

				}
				//html+='<li>'+'<dl>'+'<dt>'+response[i].category+'</dt>'+'<dd>'+response[i].name+'</dd>'+'</dl>'+'</li>';
			};
			$('#scroller').html(html);
			//调用iscroll
			myScroll = new IScroll('#wrapper', { mouseWheel: true });	
			document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		})
	})

});

$('#back').tap(function(){
	$('#mainContent').hide();
	$('.swiper-container').show();
	
})



//引入swiper
var Swiper=require('./components/swiper/swiper.min.js');
var SwiperAnimate=require('./components/swiper/swiper.animate1.0.2.min.js');
var mySwiper=new Swiper('.swiper-container',{
		//effect:'flip',//翻转
		effect:'cube',//方块立体
	  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
	    SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  }     
});
