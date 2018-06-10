class Editor {

	init(data) {
		if(data.id) {
			this.data = data;
			this.buildEditor(data);
			switch(data.template) {
				case 'multiple':
					this.multipleEditor();
				break;
				case 'multiple-read-only':
					this.multipleReadEditor();
				break;
				case 'snippet':
					this.snippetEditor();
				break;
				default: 
					// add default stuff
				break;
			}
		}
		else {
			jQuery('.alm-editor').addClass('alm-wrapper').html('<div class="alm-editor-error">ERROR</div>');
		}
	}

	randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }

	buildEditor(data) {
		let editor, defaults, theme, mode, wrap, margin, code, readonly, template, length;
		
		// Editor Defaults
		defaults = {
			'theme':'ace/theme/monokai',
			'mode':'ace/mode/html',
			'code': '',
			'wrap':true,
			'margin':false,
			'focus':true,
			'readonly':false,
			'template':'single'
		};

		theme = data.theme.length > 0 ? data.theme : defaults.theme; // set theme
		mode = data.mode.length > 0 ? data.mode : defaults.mode; // set mode
		wrap = data.wrap ? data.wrap : defaults.wrap; // set wrap
		margin = data.margin ? data.margin : defaults.margin; // set margin
		code = data.code.length > 0 ? data.code : defaults.code; // set code
		readonly = data.readonly ? data.readonly : defaults.readonly; // set readonly
		template = data.template.length > 0 ? data.template : defaults.template; // set template

		editor = ace.edit(data.id);
		editor.setTheme(theme);
		editor.session.setMode(mode);
		editor.session.setUseWrapMode(wrap);
		editor.setShowPrintMargin(margin);
		editor.setValue(code);
		editor.setReadOnly(readonly);

		if(data.focus) { length = editor.session.getLength(); editor.gotoLine(length); editor.focus(); }
		if(data.shadow) { jQuery('.alm-editor-holder').addClass('shadow'); }

	}

	multipleEditor() {
		this.addOptions();
		this.addToolbar();
		this.addEditor();
		this.removeEditor();
		this.switchEditor();
	}

	multipleReadEditor() {
		this.addToolbar();
		this.buildMultiRead();
		this.switchEditor();
	}

	snippetEditor() {

	}

	addToolbar() {
		let container, content, data;
		data = this.data;
		container = jQuery('.alm-editor-app');
		content = 	`<div class="alm-editor-toolbar alm-wrapper">
						<div class="alm-editor-tabs alm-wrapper">
							<div class="alm-editor-tab alm-wrapper active" data-tab="`+data.id+`">
								<svg class="alm-editor-tab-holder" width="110" height="24">
								    <polygon class="alm-editor-tab-svg" points="0 24,110 24,95 0,15 0"></polygon>
								</svg>
								<div class="alm-tab-title">tab.`+data.language.ext+`</div>
								<div class="alm-editor-tab-close alm-25">x</div>
							</div>
						</div>
					</div>`;
		container.prepend(content);
		if(data.template === 'multiple') {
			jQuery('.alm-editor-toolbar').append('<div class="alm-editor-add alm-wrapper"><div>+</div></div>');
		}
	}

	addOptions() {
		let container, content, languages, api = new API();
		container = jQuery('.alm-editor-app');
		languages = api.popularLanguages();
		content = 	`<div class="alm-editor-options">
						<div class="alm-editor-options-close alm-wrapper">close</div>
						<div class="alm-editor-options-container alm-wrapper">
							<div class="alm-xs-100 alm-sm-50 alm-md-50 alm-lg-50">
								<div class="alm-editor-load alm-wrapper">
									<button>load editor</button>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-50 alm-md-50 alm-lg-50">
								<div class="alm-editor-options-content alm-wrapper">
									<div>
										<select class="alm-editor-option-lang"></select>
										<button class="alm-editor-add-options">add</button>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.prepend(content);
		for (var i = 0; i < languages.length; i++) {
			let option, data;
			data = languages[i];
			option = '<option data-value="'+data.value+'" data-ext="'+data.ext+'" value="'+data.path+'">'+data.name+'</option>';
			jQuery('.alm-editor-option-lang').append(option);
		}
	}

	addEditor() {
		jQuery('.alm-editor-add').on('click', function() {
			jQuery('.alm-editor-options').fadeIn();
		});
		jQuery('.alm-editor-options-close').on('click', function() {
			jQuery('.alm-editor-options').fadeOut();
		});
		jQuery('.alm-editor-add-options').on('click', function() {
			let data, container, content, selected, lang, ext, length, id, editor = new Editor();
			length = jQuery('.alm-editor-tab').length;
			selected = jQuery('.alm-editor-option-lang :selected');
			lang = selected.val();
			ext = selected.data('ext');
			if(length < 5) {
				id = editor.randomString(8, '0123456789abcdefghijklmnopqrstuvwxyz');
				container = jQuery('.alm-editor-tabs');
				content = 	`<div class="alm-editor-tab alm-wrapper active" data-tab="alm-editor-`+id+`">
								<svg class="alm-editor-tab-holder" width="110" height="24">
								    <polygon class="alm-editor-tab-svg" points="0 24,110 24,95 0,15 0"></polygon>
								</svg>
								<div class="alm-tab-title">tab.`+ext+`</div>
								<div class="alm-editor-tab-close alm-25">x</div>
							</div>`;
				data = {
					'id':'alm-editor-'+id,
					'theme':'ace/theme/monokai',
					'mode':lang,
					'code':'',
					'wrap':true,
					'margin':false,
					'focus':true,
					'readonly':false,
					'template':'multiple',
					'shadow':false,
					'style':{
						'font-size':'11px'
					}
				};
				jQuery('.alm-editor-holder, .alm-editor-tab').removeClass('active');
				container.append(content);
				jQuery('.alm-editor-app').append('<div class="alm-editor-holder active"><pre class="alm-editor" id="alm-editor-'+id+'"></pre></div>');
				editor.buildEditor(data);
				editor.removeEditor();
				editor.switchEditor();
				jQuery('.alm-editor-options').fadeOut();
			}
		});
	}

	buildMultiRead() {

	}

	removeEditor() {
		jQuery('.alm-editor-tab-close').on('click', function() {
			let item, tab, id, editor, length;
			item = jQuery(this);
			tab = item.closest('.alm-editor-tab');
			id = tab.data('tab');
			editor = jQuery('#'+id);
			length = jQuery('.alm-editor-tab').length;
			jQuery('.alm-editor-tab, .alm-editor-holder').removeClass('active');
			if(length > 1) {
				tab.remove();
				editor.parent().remove();
			}
			else {
				console.log('at least one tab must be available');
			}
			jQuery('.alm-editor-tab').first().addClass('active');
			jQuery('.alm-editor-holder').first().addClass('active');
		});
	}

	loadEditor() {
		console.log('load editor');
	}

	saveEditor() {
		console.log('save editor');
	}

	switchEditor() {
		jQuery('.alm-editor-tab').on('click', function() {
			let item, tab, id;
			item = jQuery(this);
			tab = item.data('tab');
			jQuery('.alm-editor-tab, .alm-editor-holder').removeClass('active');
			jQuery('#'+tab).parent().addClass('active');
			item.addClass('active');
		});
	}

}