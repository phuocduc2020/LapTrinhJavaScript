
CKEDITOR.editorConfig = function( config ) {
    config.skin='office2013';
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Source,Save,Undo,Find,SelectAll,Scayt,Form,Copy,Redo,Replace,Paste,PasteText,PasteFromWord,Cut,NewPage,Templates,Preview,Print,Checkbox,Radio,Underline,Bold,Italic,TextField,Textarea,Select,Button,HiddenField,Strike,Subscript,Superscript,Blockquote,CreateDiv,Iframe,Outdent,Indent,Flash,About,Maximize,ShowBlocks';
};