"use strict";var React=require("react/addons"),className=require("classnames"),CharacterCount=require("./CharacterCount"),FormStore=require("../../../stores/FormStore"),FormUtility=require("./FormUtilityMixin"),Input=React.createClass({displayName:"Input",propTypes:{fieldKey:React.PropTypes.string.isRequired,limit:React.PropTypes.number,label:React.PropTypes.string,placeholder:React.PropTypes.string,helpText:React.PropTypes.string,type:React.PropTypes.string.isRequired,disabled:React.PropTypes.bool,onFocus:React.PropTypes.func,onBlur:React.PropTypes.func,min:React.PropTypes.number,max:React.PropTypes.number,maxLength:React.PropTypes.number,autoFocus:React.PropTypes.bool,value:React.PropTypes.string,changeCallback:React.PropTypes.func},mixins:[FormUtility],getInitialState:function(){return{isValid:!0,renderCharacterCounter:!1,fieldValue:null}},componentWillReceiveProps:function(e){this.setState({fieldValue:this._findValueByPath(e.bindResource,e.fieldKey)})},handleInput:function(e){this.props.changeCallback(this.props.fieldKey,e.target.value,this),this.setState({fieldValue:e.target.value})},handleFocus:function(e){"undefined"!=typeof this.props.limit&&this.setState({renderCharacterCounter:!0}),"undefined"!=typeof this.props.onFocus&&this.props.onFocus(e)},handleBlur:function(e){this.setState({renderCharacterCounter:!1}),"undefined"!=typeof this.props.onBlur&&this.props.onBlur(e)},render:function(){var e=className({"form-group":!0,"has-error":this._checkFieldIsValid()}),t=className({"editable-input":!this.props.disabled});return React.createElement("div",{className:e},this.props.label&&React.createElement("label",{className:"control-label"},this.props.label),React.createElement("div",{className:t},!this.props.disabled&&React.createElement("div",{className:"form-icon icon-pencil"}),React.createElement("input",{className:"form-control form-input",placeholder:this.props.placeholder||"",type:this.props.type,disabled:this.props.disabled,onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleBlur,value:this.props.value||this.state.fieldValue,min:this.props.min||null,max:this.props.max||null,maxLength:this.props.max||null,limit:this.props.limit||null,autoFocus:this.props.autoFocus||null})),this.state.renderCharacterCounter&&React.createElement(CharacterCount,{input:this.state.fieldValue,limit:this.props.limit}),this._shouldRenderHelpBlock(this.props.helpText))}});module.exports=Input;