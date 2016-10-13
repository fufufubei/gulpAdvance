var DateUtil={
	getDate:function(){
		return new Date().toLocaleDateString();
	}
}

module.exports=DateUtil;//暴露接口，让别的调用
console.log('DateUtil is require');