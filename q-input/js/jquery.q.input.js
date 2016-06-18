//zhangxianggeng made in 2016/6/17
//开发版本 0.0.1
//开发功能，可以通过约定属性渲染出自定义的input组件
$(function(){
	$('[q-input]').each(function(index, el) {
		var val=$(el).attr('q-value');
		var title=$(el).attr('q-title');
		var col=$(el).attr('q-col');
		var size=$(el).attr('q-size');
		var placeholder=$(el).attr('q-placeholder');
		var name=$(el).attr('q-name');
		var Id=$(el).attr('q-id');
		var readonly=$(el).attr('q-13898647673readonly');
		var s='<input value="'+val+'" placeholder="'+placeholder+'"/>'
		var vali=$(el).attr('q-vali')?$(el).attr('q-vali'):'';
		$(el).after(s);
		var $input=$(el).next();
		vali=toArray(vali);
		//绑定验证插件
		var nameCheck={
			checkModel:'phoneCheck',
            msg:'手机为13位位数字',
            emptyMsg:'手机号不能为空'
		}
		var phoneCheck={
			checkModel:'phoneCheck',
            msg:'手机为13位位数字',
            emptyMsg:'手机号不能为空'
		}
		var IDCheck={
			checkModel:'phoneCheck',
            msg:'手机为13位位数字',
            emptyMsg:'手机号不能为空'
		}
		var emailCheck={
			checkModel:'phoneCheck',
            msg:'手机为13位位数字',
            emptyMsg:'手机号不能为空'
		}
		var userNameCheck={
			checkModel:'phoneCheck',
            msg:'手机为13位位数字',
            emptyMsg:'手机号不能为空'
		}
		var notEmptyCheck={
			checkModel:'phoneCheck',
            msg:'手机为13位位数字',
            emptyMsg:'手机号不能为空'
		}
		var passwordCheck={
			checkModel:'phoneCheck',
            msg:'手机为13位位数字',
            emptyMsg:'手机号不能为空'
		}
		var numCheck={
			checkModel:'phoneCheck',
            msg:'手机为13位位数字',
            emptyMsg:'手机号不能为空'
		}
		var priceCheck={
			checkModel:'phoneCheck',
            msg:'手机为13位位数字',
            emptyMsg:'手机号不能为空'
		}
		var checkModel={
			nameCheck,phoneCheck,IDCheck,emailCheck,userNameCheck,notEmptyCheck,passwordCheck,numCheck,priceCheck,priceCheck
		}
		//绑定验证插件
		var temp=findTheSameObj(checkModel,vali)
		console.log(temp)
		temp?$input.formCheck(checkModel[temp]):'';
		
		//验证通过可提交，验证不通过不可提交
		//console.log(checkModel);
		//console.log(vali); 
		//console.log(findSomething('email',vali));
		//字符串转数组，且去除空格
		function toArray(str){
			var arr=str.split(" ");;
			for(var i=0;i<arr.length;i++){
				arr[i]?'':arr.splice(i--,1);
			}
			return arr
		}
		//判断数组中是否有某个值
		function findSomething(v,arr){
			var temp=false;
			for(var key in arr){
				if(arr[key]==v){
					temp=true;
					break;
				}
			}
			return temp
		}
		//找到两数组第一个相同的元素
		function findTheSame(arr1,arr2){
			var temp=false;
			for(var key in arr1){
				if(findSomething(arr1[key],arr2)){
					temp=arr1[key]
					break;
				} 
			}
			return temp
		}
		//在对象数组中找到数组一个相同的元素
		function findTheSameObj(objarr,arr){
			var temp=false;
			for(var key in objarr){
				//console.log(key)
				if(findSomething(key,arr)){

					temp=key
					break;
				} 
			}
			return temp
		}
		$(el).remove();
	});
})