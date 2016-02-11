"use strict";var _=require("lodash"),React=require("react/addons"),classNames=require("classnames"),PageButton=require("./PageButton"),PageList=React.createClass({displayName:"PageList",propTypes:{currentPage:React.PropTypes.number,pageCount:React.PropTypes.number.isRequired,selectPageCallback:React.PropTypes.func.isRequired,range:React.PropTypes.number},getInitialState:function(){return{currentPage:this.props.currentPage}},selectPage:function(e){this.props.selectPageCallback(e)},buildPageList:function(){var e=this.props.currentPage,a=this.props.range||3,t=this.props.currentPage-a>=1?this.props.currentPage-a:1,s=this.props.currentPage+a<=this.props.pageCount?this.props.currentPage+a:this.props.pageCount+1;return _.range(t,s).map(function(a,t){var s=classNames({paginate_button:!0,active:a===e});return React.createElement(PageButton,{key:t,pageNumber:a,classes:s,selectPageCallback:this.selectPage})}.bind(this))},previousPage:function(e){e.preventDefault(),1!==this.props.currentPage&&this.props.previousPageCallback()},nextPage:function(e){e.preventDefault(),this.props.currentPage!==this.props.pageCount&&this.props.nextPageCallback()},firstPage:function(e){e.preventDefault(),this.selectPage(1)},lastPage:function(e){e.preventDefault(),this.selectPage(this.props.pageCount)},render:function(){var e=classNames({paginate_button:!0,previous:!0,disabled:1===this.props.currentPage}),a=classNames({paginate_button:!0,next:!0,disabled:this.props.currentPage===this.props.pageCount});return React.createElement("div",{className:"dataTables_paginate paging_simple_numbers",id:"dataTables-example_paginate"},React.createElement("ul",{className:"pagination"},React.createElement("li",{className:e,tabIndex:"0",id:"dataTables-example_previous"},React.createElement("a",{href:"#",onClick:this.firstPage,className:"icon-angle-double-left"})),React.createElement("li",{className:e,tabIndex:"0",id:"dataTables-example_previous"},React.createElement("a",{href:"#",onClick:this.previousPage,className:"icon-chevron-left"})),this.buildPageList(),React.createElement("li",{className:a,tabIndex:"0",id:"dataTables-example_next"},React.createElement("a",{href:"#",onClick:this.nextPage,className:"icon-chevron-right"})),React.createElement("li",{className:a,tabIndex:"0",id:"dataTables-example_next"},React.createElement("a",{href:"#",onClick:this.lastPage,className:"icon-angle-double-right"}))))}});module.exports=PageList;