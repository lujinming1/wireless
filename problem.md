# 无线网络技术教程网站    
## 开发过程遇到的问题    
### 1.导航栏下拉效果时，导航栏 下方内容下移        
  &nbsp;&nbsp;首先考虑到，如何将触发导航栏消息传递给下方模块。    
  &nbsp;&nbsp;由于react为单向数据流，那么导航栏的变化必须由他们的父节点通知给下方模块。    
  &nbsp;&nbsp;接着，父节点如何得知导航栏发生了变化。    
  &nbsp;&nbsp;一样，react为单向数据流，那么只能在父节点传给导航栏的参数上操作。为此，在父节点中写一个闭包函数。
在该函数中，通知下方模块导航栏发生了变化。将函数传递给导航栏模块，当导航栏发生变化时，调用函数。    
### 2.在componentDidMount函数中给this.state.data赋值    
  用如下方法赋值，console.log(this);中this.state.data有值且正确，但 console.log(this.state.data);
  值为初始值，    
   componentDidMount() {    
     this.setState({data : mydata});    
     console.log(this);    
     console.log(this.state.data);    
   }    
