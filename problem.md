# 无线网络技术教程网站    
## 开发过程遇到的问题    
### 1.导航栏下拉效果时，导航栏 下方内容下移        
  &nbsp;&nbsp;首先考虑到，如何将触发导航栏消息传递给下方模块。    
  &nbsp;&nbsp;由于react为单向数据流，那么导航栏的变化必须由他们的父节点通知给下方模块。    
  &nbsp;&nbsp;接着，父节点如何得知导航栏发生了变化。    
  &nbsp;&nbsp;一样，react为单向数据流，那么只能在父节点传给导航栏的参数上操作。为此，在父节点中写一个闭包函数。
在该函数中，通知下方模块导航栏发生了变化。将函数传递给导航栏模块，当导航栏发生变化时，调用函数。    
<code>navOff(){  <br>  
  return function(){    <br>
    var wrapper = this.wrapper;<br>
    wrapper.className = "wrapper wrapperNavOff";<br>
  }.bind(this);<br>
}<br>
<br> <br>
<TopWapper navOn={this.navOn()} navOff={this.navOff()}/><br>
<div ref={(wrapper) => {this.wrapper = wrapper}} className="wrapper wrapperNavOff"><br>
<br> <br>
handleMouseOut(event){<br>
  var cur_elem = event.currentTarget;<br>
  cur_elem.className = "";<br>
  cur_elem.children[1].style.display = 'none';<br>
  this.props.navOff();

}
 </code>    
