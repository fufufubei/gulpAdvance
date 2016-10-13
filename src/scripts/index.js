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
			for(var i=0;i<response.length;i++){
				html+='<li>'+response[i].category+'</li>';
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
