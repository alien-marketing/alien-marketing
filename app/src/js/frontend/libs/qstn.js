class Qstn {

	build(obj) {

		if(obj.id) {
			this.data = obj;
			this.container = jQuery('.'+obj.id);
			this.buildSections();
			this.buildSubmit();
			this.buildEvents();
			this.checkQstn();
			this.submitQstn();
		}
		else {
			console.log('missing form identification');
		}

	}

	buildSections() {
		let container, content, sections, item, id;
		container = this.container;
		sections = this.data.sections;
		for (var i = 0; i < sections.length; i++) {
			item = sections[i];
			id = (i+1);
			content = `<div class="qstn-form-section qstn-form-section-`+id+`" data-section="`+id+`"></div>`;
			container.append(content);
			this.buildFields(item,id);
		}
	}

	buildFields(data,id) {
		let container, content, field;
		container = jQuery('.qstn-form-section-'+id);
		for (var i = 0; i < data.fields.length; i++) {
			field = data.fields[i];
			content = 	`<div class="qstn-form-field qstn-form-field-`+id+`-`+i+`">
							<div class="qstn-form-field-title">`+field.title+`</div>
							<div class="qstn-form-input">
								<div class="qstn-form-input-status"></div>
							</div>
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

	checkQstn() {
		let sections, section, total, complete, incomplete;
		jQuery('.qstn-form-value').each(function() {
			let item, value, length;
			item = jQuery(this);
			item.on('keyup', function() {
				value = item.val();
				length = value.length;
				if(length > item.data('max') || value.length < item.data('min')) {
					item.parent().addClass('qstn-form-input-error').removeClass('qstn-form-input-complete');
				}
				else {
					item.parent().addClass('qstn-form-input-complete').removeClass('qstn-form-input-error');
				}
				section = jQuery('.qstn-form-section.active').data('section');
				total = jQuery('.qstn-form-section.active .qstn-form-input').length;
				complete = jQuery('.qstn-form-section.active .qstn-form-input-complete').length;
				incomplete = total - complete;
				sections = {'current':section,'complete':complete,'incompete':incomplete,'total':total,};
				console.log(sections);
			});
		});
	}

	submitQstn() {
		jQuery('.qstn-form-btn').on('click', function() {
			let item, form, section, sections, completeSecions, incompleteSections, totalSections, obj = {}, error = [];
			item = jQuery(this);
			form = item.data('id');
			section = jQuery('.qstn-form-section.active').data('section');
			totalSections = jQuery('.qstn-form-section').length;
			completeSecions = jQuery('.qstn-form-section-complete').length;
			incompleteSections = totalSections - completeSecions;
			sections = {'current':section,'complete':completeSecions,'incompete':incompleteSections,'total':totalSections,};
			console.log(sections);
			jQuery('.'+form+' .qstn-form-section.active .qstn-form-value').each(function() {
				let item, value, type;
				item = jQuery(this);
				value = item.val();
				type = item.data('type');
				if(!value) {
					error[type] = 'Error: '+type+' is missing value';
				}
				else {
					if(value.length > item.data('max')) {
						error[type] = 'Error: '+type+' value is too long';
					}
					else if(value.length < item.data('min')) {
						error[type] = 'Error: '+type+' value is too short';	
					}
					else {
						obj[type] = value;
					}
				}
			});
			if(Object.keys(error).length > 0) {
				console.log('missing values');
				console.log(error);
			}
			else {
				jQuery('.qstn-form-section.active').addClass('good');
				jQuery('.qstn-form-section').removeClass('active');
				jQuery('.qstn-form-section:nth-child(2)').addClass('active');
			}
		});
	}

}