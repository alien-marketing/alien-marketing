class Qstn {

	init() {
		this.submitQstn();
	}

	build(obj) {

		if(obj.id) {
			this.data = obj;
			this.container = jQuery('.'+obj.id);
			this.buildTemplate();
			this.buildSections();
			this.buildMessage();
			this.buildEvents();
			this.checkQstn();
		}
		else {
			console.log('missing form identification');
		}

	}

	buildTemplate() {
		let container, content, id, api = new API();
		container = this.container;
		id = api.randomString(8, '0123456789abcdefghijklmnopqrstuvwxyz');
		this.data.uid = id;
		content = 	`<div class="qstn-form qstn-form-`+id+`">
						<div class="qstn-form-content">
							<div class="qstn-form-title"></div>
							<div class="qstn-form-sections"></div>
							<div class="qstn-form-btn alm-wrapper alm-25" data-id="`+this.data.uid+`" style="`+this.data.submit.button.style+`">continue</div>
						</div>
						<div class="qstn-form-message"></div>
					</div>`;
		container.append(content);
	}

	buildSections() {
		let container, content, sections, item, id, uid;
		uid = this.data.uid;
		container = jQuery('.qstn-form-'+uid+' .qstn-form-sections');
		sections = this.data.sections;
		for (var i = 0; i < sections.length; i++) {
			item = sections[i];
			id = (i+1);
			content = `<div class="qstn-form-section qstn-form-section-`+id+`" data-section="`+id+`"></div>`;
			container.append(content);
			this.buildFields(item,id);
		}
	}

	buildMessage() {
		let container, content, uid;
		uid = this.data.uid;
		container = jQuery('.qstn-form-'+uid+' .qstn-form-message');
		content = this.data.submit.message;
		container.append(content);
	}

	buildFields(data,id) {
		let container, content, field, uid;
		uid = this.data.uid;
		container = jQuery('.qstn-form-'+uid+' .qstn-form-section-'+id);
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
		let container, content, uid;
		uid = this.data.uid;
		container = jQuery('.qstn-form-'+uid+' .qstn-form-field-'+pid+'-'+id+' .qstn-form-input');
		switch(data.params.type) {
			case 'text':
				content = '<input type="text" class="qstn-form-value '+data.class.item+'" data-min="'+data.params.min+'" data-max="'+data.params.max+'" data-type="'+data.params.type+'" data-set="'+data.params.set+'" placeholder="'+data.placeholder+'" autocomplete="off">';
			break;
			case 'textarea':
				content = '<textarea class="qstn-form-value '+data.class.item+'" data-min="'+data.params.min+'" data-max="'+data.params.max+'" data-type="'+data.params.type+'" data-set="'+data.params.set+'" placeholder="'+data.placeholder+'"></textarea>';
			break;
			case 'select':
				content = 	'<select class="qstn-form-value '+data.class.item+'" data-type="'+data.params.type+'" data-set="'+data.params.set+'"></select>';
			break;
			case 'datetime':
				content = '<div class="input-group date qstn-form-datetimepicker"><div class="input-group-addon"><input type="text" class="form-control qstn-form-value '+data.class.item+'" data-min="'+data.params.min+'" data-max="'+data.params.max+'" data-type="'+data.params.type+'" data-set="'+data.params.set+'" data-format="dd/MM/yyyy hh:mm:ss" placeholder="'+data.placeholder+'"></div></div>';
			break
		}
		container.append(content);

		if(data.params.type === 'select') {
			let select;
			select = jQuery('.qstn-form-field-'+pid+'-'+id+' select');
			data.params.options.forEach(function(element){select.append('<option value="'+element.value+'">'+element.title+'</option>');});
		}
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
		let uid, qstn = new Qstn();
		uid = this.data.uid;
		jQuery('.qstn-form-'+uid+' .qstn-form-value').each(function() {
			let item, data, value, length, type, typing;
			item = jQuery(this);
			typing = null;
			item.on('keyup', function() {
				value = item.val();
				length = value.length;
				if(length == 0 || !value) {
					item.parent().removeClass('qstn-form-input-complete qstn-form-input-error');
				}
				else {
					// Wait until user types something
					clearInterval(typing);

					typing = setInterval(function() {
						// User has stopped typing
						clearInterval(typing);
						qstn.checkField(item);
						data = qstn.checkSection(uid);
						qstn.validateSubmit(data);
					}, 500);
				}
			});
			item.on('change', function() {
				qstn.checkField(item);
				data = qstn.checkSection(uid);
				qstn.validateSubmit(data);
			});
			item.closest('.qstn-form-datetimepicker').on('dp.change', function(e){
				qstn.checkField(item);
				data = qstn.checkSection(uid);
				qstn.validateSubmit(data);
			});
		});
	}

	checkField(item) {
		let type;
		type = item.data('type');
		switch(type) {
			case 'text':
				this.validateText(item);
			break;
			case 'textarea':
				this.validateTextarea(item);
			break;
			case 'select':
				this.validateSelect(item);
			break;
			case 'datetime':
				this.validateDatetime(item);
			break;
		}
	}

	checkSection(uid) {
		let id = 1, sections = {}, section, input, total, complete, incomplete;
		jQuery('.qstn-form-'+uid+' .qstn-form-section').each(function() {
			let item, fields = [];
			item = jQuery(this);
			if(item.hasClass('active')) { section = item.data('section'); }
			input = item.children('.qstn-form-field').children('.qstn-form-input');
			input.find('.qstn-form-value').each(function() {
				let data;
				data = jQuery(this);
				fields.push({'value':data.val(),'type':data.data('set')});
			});
			total = input.length;
			complete = jQuery('.qstn-form-'+uid+' .qstn-form-section-'+id+' .qstn-form-input-complete').length;
			incomplete = total - complete;
			sections[id] = {'complete':complete,'incomplete':incomplete,'total':total,'fields':fields};
			sections.current = section;
			sections.count = id;
			sections.uid = uid;
			id++;
		});
		return sections;		
	}

	validateText(item) {
		let value, length, min, max, set;
		value = item.val();
		length = value.length;
		min = item.data('min');
		max = item.data('max');
		set = item.data('set');

		if(length > max || value.length < min) {
			item.parent().addClass('qstn-form-input-error').removeClass('qstn-form-input-complete');
		}
		else {
			switch(set) {
				case 'email':
					this.validateEmail(item);
				break;
				case 'website':
					this.validateWebsite(item);
				break;
				default:
					this.validateDefault(item);
				break;
			}
		}

	}

	validateTextarea(item) {
		let value, length, min, max;
		value = item.val();
		length = value.length;
		min = item.data('min');
		max = item.data('max');
		if(length > max || value.length < min) {
			item.parent().addClass('qstn-form-input-error').removeClass('qstn-form-input-complete');
		}
		else {
			this.validateDefault(item);
		}
	}

	validateSelect(item) {
		let value, length;
		value = item.val();
		length = value.length;
		if(length > 0) {
			this.validateDefault(item);
		}
		else {
			item.parent().addClass('qstn-form-input-error').removeClass('qstn-form-input-complete');
		}
	}

	validateEmail(item) {
		let value, validator;
		value = item.val();
		validator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	if(validator.test(String(value).toLowerCase())) {
    		item.parent().addClass('qstn-form-input-complete').removeClass('qstn-form-input-error');
    	}
		else {
			item.parent().addClass('qstn-form-input-error').removeClass('qstn-form-input-complete');
		}
	}

	validateWebsite(item) {
		let value, validator;
		value = item.val();
		validator = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
		if(validator.test(String(value).toLowerCase())) {
    		item.parent().addClass('qstn-form-input-complete').removeClass('qstn-form-input-error');
    	}
		else {
			item.parent().addClass('qstn-form-input-error').removeClass('qstn-form-input-complete');
		}
	}

	validateDatetime(item) {
		let value, length, min, max;
		value = item.val();
		length = value.length;
		min = item.data('min');
		max = item.data('max');
		if(length > max || value.length < min) {
			item.closest('.qstn-form-input').addClass('qstn-form-input-error').removeClass('qstn-form-input-complete');
		}
		else {
			item.closest('.qstn-form-input').addClass('qstn-form-input-complete').removeClass('qstn-form-input-error');
		}
	}

	validateDefault(item) {
		item.parent().addClass('qstn-form-input-complete').removeClass('qstn-form-input-error');
	}

	validateSubmit(obj) {
		let current, complete, incomplete, total, count, uid, qstn = new Qstn();

		current = obj.current;
		complete = obj[current].complete;
		total = obj[current].total;
		count = obj.count;
		uid = obj.uid;

		if(complete == total) {
			jQuery('.qstn-form-'+uid+' .qstn-form-btn').addClass('ready');
		}
		else {
			jQuery('.qstn-form-'+uid+' .qstn-form-btn').removeClass('ready');	
		}

	}

	submitQstn() {
		let item, sections, current, complete, incomplete, total, count, uid, qstn = new Qstn(), api = new API(), messenger = new Messenger();
		jQuery('.qstn-form-btn').on('click', function() {

			item = jQuery(this);
			uid = item.data('id');
			sections = qstn.checkSection(uid);
			current = sections.current;
			complete = sections[current].complete;
			total = sections[current].total;
			count = sections.count;
			
			if(complete == total) {
				if(current == count) {
					let id, name;
					id = api.randomString(8, 'abcdefghijklmnopqrstuvwxyz');
					name = api.randomString(8, 'abcdefghijklmnopqrstuvwxyz');
					jQuery('.qstn-form-'+uid+' .qstn-form-content').slideUp(250);
					jQuery('.qstn-form-'+uid+' .qstn-form-message').slideDown(250);
					messenger.run({
						'id':id,
						'name':name,
						'title':'Success!',
						'message':'Form was successfully sent',
						'duration':4500,
						'theme':'light',
						'icon':'check',
						'color':'#37bfb1',
						'location':'bottom-right',
						'button':{
							'title':'',
							'link':''
						}
					});
				}
				else {
					jQuery('.qstn-form-'+uid+' .qstn-form-section').removeClass('active');
					jQuery('.qstn-form-'+uid+' .qstn-form-section:nth-child('+(current+1)+')').addClass('active');
					jQuery('.qstn-form-'+uid+' .qstn-form-btn').removeClass('ready');
				}
			}
			else {
				let id, name;
				id = api.randomString(8, 'abcdefghijklmnopqrstuvwxyz');
				name = api.randomString(8, 'abcdefghijklmnopqrstuvwxyz');
				messenger.run({
					'id':id,
					'name':name,
					'title':'ERROR!',
					'message':'please finish the current section',
					'duration':4500,
					'theme':'light',
					'icon':'exclamation',
					'color':'#f92b30',
					'location':'bottom-right',
					'button':{
						'title':'',
						'link':''
					}
				});
			}

		});
	}

}