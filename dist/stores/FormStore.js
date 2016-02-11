"use strict";var _=require("lodash"),assign=require("react/lib/Object.assign"),AppActionConstants=require("../constants/AppActionConstants"),ActionTypes=AppActionConstants.ActionTypes.cms.form,AppDispatcher=require("../dispatcher/AppDispatcher"),BaseStore=require("./BaseStore"),_formStore={},_currentFormKey="",_typeaheadQueryData={},FormStore=assign({},BaseStore,{getField:function(e,r){return _.get(_formStore[e].resource,r)},hasForm:function(e){return _formStore.hasOwnProperty(e)},getResource:function(e){if(!e||""===e||"undefined"===e)throw new Error("Form key cannot be undefined");return _formStore[e]?_formStore[e].resource:{}},getCurrentFormKey:function(){return _currentFormKey},isFormValid:function(e){return _formStore[e].isValid},isFieldValid:function(e,r){if(!_formStore[e])return!0;var o=_formStore[e].validations[r];return"undefined"==typeof o?!0:o},getTypeaheadQueryData:function(e){return _typeaheadQueryData[e]},_setField:function(e,r,o){return _.set(e,r,o)},_validateForm:function(e){var r=!0,o=_formStore[e].validations;Object.keys(o).forEach(function(e){o[e]||(r=!1)}),_formStore[e].isValid=r}});FormStore.dispatchToken=AppDispatcher.register(function(e){switch(e.type){case ActionTypes.FORM_REGISTER_FORM:_formStore[e.formKey]={},_formStore[e.formKey].validations=_formStore[e.formKey].validations||e.validations||{},_formStore[e.formKey].resource=e.resource,_formStore[e.formKey].isValid="boolean"==typeof e.isValid?e.isValid:!0,_currentFormKey=e.formKey,FormStore.emitChange();break;case ActionTypes.FORM_EDIT_FIELD:_formStore[e.formKey].resource=FormStore._setField(_formStore[e.formKey].resource,e.fieldKey,e.value),_formStore[e.formKey].validations[e.fieldKey]=e.isValid,FormStore._validateForm(e.formKey),FormStore.emitChange();break;case ActionTypes.TYPEAHEAD_QUERY:_typeaheadQueryData[e.eventData.formKey]=e.data,FormStore.emitChange();break;case ActionTypes.FORM_CLEAR_TYPEAHEAD_QUERY:_typeaheadQueryData[e.formKey]=[]}}),module.exports=FormStore;