"use strict";var React=require("react/addons"),assign=require("react/lib/Object.assign"),PageList=require("./PageList"),PaginationStore=require("../../../stores/PaginationStore"),Paginator=React.createClass({displayName:"Paginator",getInitialState:function(){return this._getPaginationState()},_getPaginationState:function(){return{currentPage:PaginationStore.getCurrentPage(),pageCount:PaginationStore.getTotalPages()}},componentDidMount:function(){PaginationStore.addChangeListener(this.onChange)},componentWillUnmount:function(){PaginationStore.removeChangeListener(this.onChange)},onChange:function(){this.setState(this._getPaginationState())},selectPage:function(e){var t={per_page:PaginationStore.getPerPage(),page:e},a=assign({},PaginationStore.getRequestedModifiers(),t);this.props.actionMethod({pagination:a})},nextPage:function(){this.selectPage(this.state.currentPage+1)},previousPage:function(){this.selectPage(this.state.currentPage-1)},render:function(){return React.createElement("div",{className:"table-pagination"},React.createElement("div",{className:"col-sm-6"},React.createElement(PageList,{currentPage:this.state.currentPage,pageCount:this.state.pageCount,selectPageCallback:this.selectPage,nextPageCallback:this.nextPage,previousPageCallback:this.previousPage})))}});module.exports=Paginator;