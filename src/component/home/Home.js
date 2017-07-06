import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactEcharts from 'echarts-for-react';
import '../../style/home/Home.css';

require('echarts/map/js/china.js');

var name_list = require('../../data/Uname_list.json');
var mydata = [];
var mysubname = [];
var myUname = [];
name_list.map(function(item){
  var tem = {};
  tem.name = item.province;
  tem.value = item.value;
  mydata.push(tem);
  mysubname.push(item.subname);
  myUname.push(item.Uname);
});

class Home extends Component {

  constructor(props){
    super(props);
    this.state ={
      option : this.getOption(),
      isMount : true
    }

    this.getOption = this.getOption.bind(this);
  }

  componentDidMount() {
    if(this.state.isMount){

      const option = this.state.option;
      option.series[0].data = mydata;
      this.setState({ option: option});
    }
  }
  componentWillUnmount() {
    this.setState({isMount : false});
  }

  getOption(){

    const option = {
      title: {
        text: '全国高校教材选用情况分布',
        subtext: '无线网络技术课程',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: function(param){
          var subname = mysubname[param.dataIndex];
          var value = param.value;
          if(!isNaN(value)){
            return ("省份：" + param.name + "<br />" +
                    "学校数量：" + param.value + "<br />" +
                    "如：" + subname);
          } else {
            return "省份：" + param.name;
          }

        }
      },
      visualMap: {
        min: 0,
        max: 20,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],
        calculable: 'true'
      },
      toolbox: {
        show: true,
        orient:'right',
        left: 'right',
        top: 'center',
        feature: {
          dataView: {readOnly: true},
          restore: {show:false},
          saveAsImage: {}
        },
        optionToContent: function() {
          var table = '<table style="width:100%; " border="1"><tbody><tr style="text-align : center" >' +
                      '<th style="width:40px; ">省份</th><th style="width:70px; ">学校数量</th><th>学校名称</th>' +
                      '</tr>';
          for(var i = 0; i < myUname.length; i++){
            table += '<tr>' +
                     '<td style="text-align : center">' + mydata[i].name + '</td>' +
                     '<td style="text-align : center">' + mydata[i].value + '</td>' +
                     '<td>' + myUname[i] + '</td>' +
                     '</tr>'
          }
          table += '</tbody></table>';
          return table;

        }
      },
        series: [
        {
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode : 'multiple',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: []
        }
    ]
  }
    return option;
  }

  render(){


    return (
      <div className="Emap" ref={(Emap) => {this.Emap = Emap}} style={{width:'100%',height:'450px'}}>
        <ReactEcharts
          option = {this.state.option}
          style = {{height:'95%', width:'100%'}}
          className = 'react_for_echarts' />
      </div>
    );
  }
}

export default Home;
