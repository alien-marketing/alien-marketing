class Qstn {

	build(obj) {

		if(obj.id) {
			this.data = obj;
			this.container = jQuery('.'+obj.id);
			this.buildSections();
			this.buildSubmit();
			this.buildEvents();
			this.submitQstn();
		}
		else {
			console.log('missing form identification');
		}

	}

	buildSections() {
		let container, content, sections, item;
		container = this.container;
		sections = this.data.sections;
		for (var i = 0; i < sections.length; i++) {
			item = sections[i];
			content = `<div class="qstn-form-section qstn-form-section-`+i+`"></div>`;
			container.append(content);
			this.buildFields(item,i);
		}
	}

	buildFields(data,id) {
		let container, content, field;
		container = jQuery('.qstn-form-section-'+id);
		for (var i = 0; i < data.fields.length; i++) {
			field = data.fields[i];
			content = 	`<div class="qstn-form-field qstn-form-field-`+id+`-`+i+`">
							<div class="qstn-form-field-title">`+field.title+`</div>
							<div class="qstn-form-input"></div>
						</div>`;
			container.append(content);
			this.buildInput(field,id,i);
		}
	}

	buildInput(data,pid,id) {
		let container, content;
		container = jQuery('.qstn-form-field-'+pid+'-'+id+' .qstn-form-input');
		switch(data.params.type) {
			case 'text':
				content = '<input type="text" class="qstn-form-value '+data.class.item+'" data-min="'+data.params.min+'" data-max="'+data.params.max+'" data-type="'+data.params.set+'" placeholder="'+data.placeholder+'" autocomplete="off">';
			break;
			case 'select':
				content = 	'<select class="qstn-form-value '+data.class.item+'" data-type="'+data.params.set+'"></select>';
			break;
			case 'datetime':
				content = '<div class="input-group date qstn-form-datetimepicker"><div class="input-group-addon"><input type="text" class="form-control qstn-form-value '+data.class.item+'" data-type="'+data.params.set+'" data-format="dd/MM/yyyy hh:mm:ss" placeholder="'+data.placeholder+'"></div></div>';
			break
		}
		container.append(content);

		if(data.params.type === 'select') {
			let select;
			select = jQuery('.qstn-form-field-'+pid+'-'+id+' select');
			data.params.options.forEach(function(element){select.append('<option value="'+element.value+'">'+element.title+'</option>');});
		}
	}

	buildSubmit() {
		let container, content, button;
		container = this.container;
		button = this.data.submit.button;
		content = '<div class="qstn-form-btn alm-wrapper" data-id="'+this.data.id+'" style="'+button.style+'">continue</div>';
		container.append(content);
	}

	buildEvents() {
		jQuery('.qstn-form-section:first-child').addClass('active');
		jQuery('.qstn-form-phone-mask').mask('(000) 000-0000');
		jQuery('.qstn-form-datetimepicker input').attr('placeholder',moment().format('MMMM Do YYYY, h:mm A'));
		jQuery('.qstn-form-datetimepicker').datetimepicker({
            format: 'MMMM Do YYYY, h:mm A',
		});
	}

	submitQstn() {
		jQuery('.qstn-form-btn').on('click', function() {
			let item, form, obj = {}, error = [];
			item = jQuery(this);
			form = item.data('id');
			jQuery('.'+form+' .qstn-form-section.active .qstn-form-value').each(function() {
				let item, value, type;
				item = jQuery(this);
				value = item.val();
				type = item.data('type');
				if(!value) {
					error[type] = 'Error: '+type+' is missing value';
				}
				obj[type] = value;
			});
			console.log(obj);
			console.log(error);

			if(error.name || error.email || error.phone || error.website) {
				console.log('missing values');
			}
			else {
				jQuery('.qstn-form-section').removeClass('active');
				jQuery('.qstn-form-section:nth-child(2)').addClass('active');
			}
		});
	}

}