"use strict";var React=require("react/addons"),PerPageOption=require("./PerPageOption"),PaginationStore=require("../../../stores/PaginationStore"),assign=require("react/lib/Object.assign"),PerPageSelector=React.createClass({displayName:"PerPageSelector",getInitialState:function(){return{perPage:10}},_getPaginationState:function(){return{perPage:PaginationStore.getPerPage()}},componentDidMount:function(){PaginationStore.addChangeListener(this.onChange)},componentWillUnmount:function(){PaginationStore.removeChangeListener(this.onChange)},onChange:function(){this.setState(this._getPaginationState())},selectOption:function(e){var t={per_page:e.target.value,page:1},a=assign({},PaginationStore.getRequestedModifiers(),t);this.props.actionMethod({pagination:a})},options:[10,20,30,40,50],buildOptions:function(){return this.options.map(function(e,t){return React.createElement(PerPageOption,{key:t,value:e,onChangeCallback:this.selectOption})}.bind(this))},render:function(){return React.createElement("div",{className:"col-sm-2 pull-right"},React.createElement("div",{className:"dataTables_length",id:"dataTables-example_length"},React.createElement("label",null,"Entries per page:",React.createElement("select",{name:"dataTables-example_length",className:"form-control input-sm",onChange:this.selectOption,value:this.state.perPage},this.buildOptions()))))}});module.exports=PerPageSelector;