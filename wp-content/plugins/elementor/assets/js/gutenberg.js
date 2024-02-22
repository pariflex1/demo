/*! elementor - v3.19.0 - 07-02-2024 */
(()=>{"use strict";var __webpack_modules__=({"@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
((module)=>{module.exports=wp.i18n;})});var __webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(cachedModule!==undefined){return cachedModule.exports;}
var module=__webpack_module_cache__[moduleId]={exports:{}};__webpack_modules__[moduleId](module,module.exports,__webpack_require__);return module.exports;}
var __webpack_exports__={};(()=>{
/*!*******************************************!*\
  !*** ../assets/dev/js/admin/gutenberg.js ***!
  \*******************************************/
var __=__webpack_require__(/*! @wordpress/i18n */"@wordpress/i18n")["__"];(function($){'use strict';var ElementorGutenbergApp={cacheElements:function cacheElements(){var self=this;self.isElementorMode=ElementorGutenbergSettings.isElementorMode;self.cache={};self.cache.$gutenberg=$('#editor');self.cache.$switchMode=$($('#elementor-gutenberg-button-switch-mode').html());self.cache.$switchModeButton=self.cache.$switchMode.find('#elementor-switch-mode-button');self.bindEvents();self.toggleStatus();wp.data.subscribe(function(){setTimeout(function(){self.buildPanel();},1);});},buildPanel:function buildPanel(){var self=this;if(!self.cache.$gutenberg.find('#elementor-switch-mode').length){self.cache.$gutenberg.find('.edit-post-header-toolbar').append(self.cache.$switchMode);}
if(this.hasIframe()){this.hideIframeContent();}
if(!$('#elementor-editor').length){self.cache.$editorPanel=$($('#elementor-gutenberg-panel').html());self.cache.$gurenbergBlockList=self.cache.$gutenberg.find('.is-desktop-preview');self.cache.$gurenbergBlockList.append(self.cache.$editorPanel);self.cache.$editorPanelButton=self.cache.$editorPanel.find('#elementor-go-to-edit-page-link');self.cache.$editorPanelButton.on('click',function(event){event.preventDefault();self.animateLoader();var isNewPost='auto-draft'===wp.data.select('core/editor').getCurrentPost().status;if(isNewPost){var documentTitle=wp.data.select('core/editor').getEditedPostAttribute('title');if(!documentTitle){wp.data.dispatch('core/editor').editPost({title:'Elementor #'+$('#post_ID').val()});}
wp.data.dispatch('core/editor').savePost();}
self.redirectWhenSave();});}},hasIframe:function hasIframe(){return!!this.cache.$gutenberg.find('iframe[name="editor-canvas"]').length;},hideIframeContent:function hideIframeContent(){if(!this.isElementorMode){return;}
var style="<style>\n\t\t\t\t.editor-post-text-editor,\n\t\t\t\t.block-editor-block-list__layout {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\tbody {\n\t\t\t\t\tpadding: 0 !important;\n\t\t\t\t}\n\t\t\t</style>";this.cache.$gutenberg.find('iframe[name="editor-canvas"]').contents().find('body').append(style);},bindEvents:function bindEvents(){var self=this;self.cache.$switchModeButton.on('click',function(){if(self.isElementorMode){elementorCommon.dialogsManager.createWidget('confirm',{message:__('Please note that you are switching to WordPress default editor. Your current layout, design and content might break.','elementor'),headerMessage:__('Back to WordPress Editor','elementor'),strings:{confirm:__('Continue','elementor'),cancel:__('Cancel','elementor')},defaultOption:'confirm',onConfirm:function onConfirm(){var wpEditor=wp.data.dispatch('core/editor');wpEditor.editPost({gutenberg_elementor_mode:false});wpEditor.savePost();self.isElementorMode=!self.isElementorMode;self.toggleStatus();}}).show();}else{self.isElementorMode=!self.isElementorMode;self.toggleStatus();self.cache.$editorPanelButton.trigger('click');}});},redirectWhenSave:function redirectWhenSave(){var self=this;setTimeout(function(){if(wp.data.select('core/editor').isSavingPost()){self.redirectWhenSave();}else{location.href=ElementorGutenbergSettings.editLink;}},300);},animateLoader:function animateLoader(){this.cache.$editorPanelButton.addClass('elementor-animate');},toggleStatus:function toggleStatus(){jQuery('body').toggleClass('elementor-editor-active',this.isElementorMode).toggleClass('elementor-editor-inactive',!this.isElementorMode);},init:function init(){this.cacheElements();}};$(function(){ElementorGutenbergApp.init();});})(jQuery);})();})();