/* 
DOM是文档对象模型(Document Object Model)是基于浏览器编程的一套API接口，W3C出台的标准，每个浏览器都有一些细微的差别，其中以Mozilla的浏览器与标准最接近。
通过 DOM，您可访问 HTML 文档中的每个节点。
*/

//	查找元素

// 1、直接查找
getElementById(id)                //获取有指定惟一ID属性值文档中的元素
getElementsByTagName(name)        //获取带有指定标签名的对象的集合
getElementsByClassName            //获取所有指定类名的元素
getAttribute(name)                //获取指定属性名的属性值
//2、间接查找
childNodes              //返回当前元素所有子元素的数组
firstChild              //返回当前元素的第一个下级子元素
lastChild               //返回当前元素的最后一个子元素
nextSibling             //返回紧跟在当前元素后面的元素
previousSibling         //返回紧跟在当前元素前面的元素
parentElement           //返回其父节点标签元素
children                // 返回其所有子标签
firstElementChild       //返回第一个子标签元素
lastElementChild        //返回最后一个子标签元素
nextElementtSibling     //返回下一个兄弟标签元素
previousElementSibling  //返回上一个兄弟标签元素

//	操作元素

//1、动态创建内容时所用的W3C DOM属性和方法
document.createElement(tagName)        //创建由tagName指定的元素
document.createTextNode(text)          //创建一个包含静态文本的节点
<element>.appendChild(childNode)       //将指定的节点增加到当前元素的子节点列表
<element>.setAttribute(name, value)    //添加指定的属性，并为其赋指定的值
<element>.insertBefore(newNode, targetNode)    //将节点newNode作为当前元素的子节点插到targetNode元素前面
<element>.removeAttribute(name)         //这个方法从元素中删除属性name
<element>.removeChild(childNode)        //这个方法从元素中删除子元素childNode
<element>.replaceChild(newNode, oldNode)//这个方法将节点oldNode替换为节点newNode
<element>.hasChildnodes()               //这个方法返回一个布尔值，指示元素是否有子元素
//2、标签内容
innerText   //获取标签文本内容
innerHTML   //获取HTML内容
value       //获取值，即form提交表单的值
//3、属性
attributes                //获取所有标签属性
setAttribute(key,value)   //设置标签属性
getAttribute(key)         //获取指定标签属性
//4、class操作
className              //获取所有类名
classList.remove(cls)  //删除指定类
classList.add(cls)     //添加类
//5、标签操作  我们可以通过dom创建标签，添加到指定位置
// 方式一
var zhang = "<input type='text' />";
obj.insertAdjacentHTML("beforeEnd",zhang);
obj.insertAdjacentElement('afterBegin',document.createElement('a'))
//注意：第一个参数只能是'beforeBegin'、 'afterBegin'、 'beforeEnd'、 'afterEnd'
// 方式二
var tag = document.createElement('div')
obj.appendChild(tag)  //往后追加一个div元素
obj.insertBefore(tag,obj[1]) //插到指定位置，可根据索引
//6、样式操作
var obj = document.getElementById('i1');
obj.style.fontSize = "32px";
obj.style.backgroundColor = "red";
//7、位置操作
document.documentElement.offsetHeight   //总文档高度
document.documentElement.clientHeight    //当前文档占屏幕高度  
tag.offsetHeight        //自身高度    
tag.offsetTop           //距离上级定位高度    
tag.offsetParent        //父定位标签  
tag.scrollTop           //滚动高度    
//8、其他操作
console.log()   //输出框
alert()         //弹出框
confirm()       //确认框
   
// URL和刷新
location.href          //获取URL
location.href = "url"  //重定向
location.reload()      //重新加载
   
// 定时器
setInterval()        //多次定时器
clearInterval()      //清除多次定时器
setTimeout()         //单次定时器
clearTimeout()       //清除单次定时器


//	事件列表
onabort　　　　 //图象的加载被中断
onblur　　　　  //元素失去焦点
onchange        //区域的内容被修改
onclick         //当用户点击某个对象时调用的事件句柄
ondblclick      //当用户双击某个对象时调用的事件句柄
onerror         //在加载文档或图像时发生错误
onfocus         //元素获得焦点
onkeydown       //某个键盘按键被按下
onkeypress      //某个键盘按键被按下并松开
onkeyup         //某个键盘被松开
onload          //一张页面或一副图片完成加载
onmousedown     //鼠标按钮被按下
onmousemove     // 鼠标移动过来后
onmouseout      // 鼠标从某个元素移开
onmouseover     //鼠标移动到某个元素之上
onmouseup       //鼠标按键被松开
onreset         //重置按钮被点击
onresize        //窗口或框架被重新调整大小
onselect        //文本被选中
onsubmit        //确认按钮被点击
onunload        //用户退出页面
//注：一个标签可以绑定多个事件，this标签当前正在操作的标签，event封装了当前事件的内容。


