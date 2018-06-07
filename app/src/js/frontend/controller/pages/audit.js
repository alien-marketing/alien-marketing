class Audit {

	init() {
		this.page = jQuery('.alm-admin-page');
		this.template();
	}

	template() {
		let container, content;
		container = this.page;
		content = `<div class="alm-admin-page-container alm-wrapper" style="align-items: flex-start;"></div>`;
		container.append(content);
		this.content();
	}

	content() {
		let container, content, obj;
		container = jQuery('.alm-admin-page-container');
		obj = [{"title":"Overview","id":"overview","list":[{"title":"company info","group":[{"title":"Company","icon":"building","blocks":[{"title":"organization","class":"alm-xs-100 alm-sm-100","type":"text","placeholder":"Alien Marketing, LLC"}]},{"title":"Contact Info","icon":"user","blocks":[{"title":"name","class":"alm-xs-100 alm-sm-33","type":"text","placeholder":"Barry Alien"},{"title":"email","class":"alm-xs-100 alm-sm-33","type":"text","placeholder":"me@example.com"},{"title":"phone","class":"alm-xs-100 alm-sm-33","type":"text","placeholder":"(949) 999-9999"}]}]},{"title":"social platform","group":[{"title":"Facebook","icon":"facebook","blocks":[{"title":"profile name","class":"alm-xs-100 alm-sm-60","type":"text","placeholder":"alien.marketing"},{"title":"followers","class":"alm-xs-100 alm-sm-20","type":"text","placeholder":"1000"},{"title":"post frequency","class":"alm-xs-100 alm-sm-20","type":"select","option":["daily","weekly","monthly","occasionally","never"]}]},{"title":"Instagram","icon":"instagram","blocks":[{"title":"profile name","class":"alm-xs-100 alm-sm-60","type":"text","placeholder":"alien.marketing"},{"title":"followers","class":"alm-xs-100 alm-sm-20","type":"text","placeholder":"1000"},{"title":"post frequency","class":"alm-xs-100 alm-sm-20","type":"select","option":["daily","weekly","monthly","occasionally","never"]}]},{"title":"Twitter","icon":"twitter","blocks":[{"title":"profile name","class":"alm-xs-100 alm-sm-60","type":"text","placeholder":"alien.marketing"},{"title":"followers","class":"alm-xs-100 alm-sm-20","type":"text","placeholder":"1000"},{"title":"post frequency","class":"alm-xs-100 alm-sm-20","type":"select","option":["daily","weekly","monthly","occasionally","never"]}]},{"title":"YouTube","icon":"youtube","blocks":[{"title":"profile name","class":"alm-xs-100 alm-sm-60","type":"text","placeholder":"alien.marketing"},{"title":"followers","class":"alm-xs-100 alm-sm-20","type":"text","placeholder":"1000"},{"title":"post frequency","class":"alm-xs-100 alm-sm-20","type":"select","option":["daily","weekly","monthly","occasionally","never"]}]},{"title":"LinkedIn","icon":"linkedin","blocks":[{"title":"profile name","class":"alm-xs-100 alm-sm-60","type":"text","placeholder":"alien.marketing"},{"title":"followers","class":"alm-xs-100 alm-sm-20","type":"text","placeholder":"1000"},{"title":"post frequency","class":"alm-xs-100 alm-sm-20","type":"select","option":["daily","weekly","monthly","occasionally","never"]}]},{"title":"Google+","icon":"google-plus","blocks":[{"title":"profile name","class":"alm-xs-100 alm-sm-60","type":"text","placeholder":"alien.marketing"},{"title":"followers","class":"alm-xs-100 alm-sm-20","type":"text","placeholder":"1000"},{"title":"post frequency","class":"alm-xs-100 alm-sm-20","type":"select","option":["daily","weekly","monthly","occasionally","never"]}]},{"title":"Pinterest","icon":"pinterest","blocks":[{"title":"profile name","class":"alm-xs-100 alm-sm-60","type":"text","placeholder":"alien.marketing"},{"title":"followers","class":"alm-xs-100 alm-sm-20","type":"text","placeholder":"1000"},{"title":"post frequency","class":"alm-xs-100 alm-sm-20","type":"select","option":["daily","weekly","monthly","occasionally","never"]}]}]},{"title":"observations","group":[{"title":"Observations","icon":"eye","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]},{"title":"recommendations","group":[{"title":"Recommendations","icon":"list","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]}]},{"title":"Website","id":"website","list":[{"title":"observations","group":[{"title":"Observations","icon":"eye","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]},{"title":"recommendations","group":[{"title":"Recommendations","icon":"list","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]}]},{"title":"Facebook","id":"facebook","list":[{"title":"observations","group":[{"title":"Observations","icon":"eye","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]},{"title":"recommendations","group":[{"title":"Recommendations","icon":"list","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]}]},{"title":"Instagram","id":"instagram","list":[{"title":"observations","group":[{"title":"Observations","icon":"eye","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]},{"title":"recommendations","group":[{"title":"Recommendations","icon":"list","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]}]},{"title":"Twitter","id":"twitter","list":[{"title":"observations","group":[{"title":"Observations","icon":"eye","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]},{"title":"recommendations","group":[{"title":"Recommendations","icon":"list","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]}]},{"title":"YouTube","id":"youtube","list":[{"title":"observations","group":[{"title":"Observations","icon":"eye","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]},{"title":"recommendations","group":[{"title":"Recommendations","icon":"list","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]}]},{"title":"LinkedIn","id":"linkedin","list":[{"title":"observations","group":[{"title":"Observations","icon":"eye","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]},{"title":"recommendations","group":[{"title":"Recommendations","icon":"list","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]}]},{"title":"Google+","id":"google-plus","list":[{"title":"observations","group":[{"title":"Observations","icon":"eye","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]},{"title":"recommendations","group":[{"title":"Recommendations","icon":"list","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]}]},{"title":"Pinterest","id":"pinterest","list":[{"title":"observations","group":[{"title":"Observations","icon":"eye","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]},{"title":"recommendations","group":[{"title":"Recommendations","icon":"list","blocks":[{"title":"list","class":"alm-xs-100 alm-sm-100","type":"listing","placeholder":"new item"},{"title":"notes","class":"alm-xs-100 alm-sm-100","type":"textarea","placeholder":"Write something..."}]}]}]}];
		this.data = obj;
		content = 	`<div class="alm-xs-100 alm-sm-50 alm-md-25">
						<div class="alm-admin-page-blocks">
							<div class="alm-admin-audit-menu"></div>
						</div>
					</div>
					<div class="alm-xs-100 alm-sm-50 alm-md-75">
						<div class="alm-admin-page-block">
							<div class="alm-admin-audit-form"></div>
						</div>
					</div>`;
		container.append(content);
		this.buildForm();
		this.buildMenu();
		this.getData();
	}

	buildMenu() {
		let container, content, data, item, menu;
		container = jQuery('.alm-admin-audit-menu');
		data = this.data;
		for (var i = 0; i < data.length; i++) {
			item = data[i];
			content = 	`<div class="alm-admin-page-block" id="`+item.id+`"">
							<div class="alm-admin-audit-menu-title" data-section="`+item.id.replace(/\s+/g, '-')+`">`+item.title+`</div>
							<div class="alm-admin-audit-list"></div>
						</div>`;
			container.append(content);
			for (var ii = 0; ii < item.list.length; ii++) {
				menu = `<div class="alm-admin-audit-list-item" data-section="`+item.id.replace(/\s+/g, '-')+`" data-group="`+item.list[ii].title.replace(/\s+/g, '-')+`">`+item.list[ii].title+`</div>`;
				jQuery('#'+item.id+' .alm-admin-audit-list').append(menu);
			}
		}

		jQuery('.alm-admin-audit-list-item').on('click', function() {
			let item, section, group, spot;
			item = jQuery(this);
			section = item.data('section');
			group = item.data('group');
			spot = jQuery('.alm-admin-audit-section#'+section+' .alm-admin-audit-group#'+group);
			jQuery('.alm-admin-audit-list-item, .alm-admin-audit-group').removeClass('active');
			spot.addClass('active');
			item.addClass('active');
		});
		jQuery('.alm-admin-audit-menu .alm-admin-page-block:first .alm-admin-audit-list-item:first, .alm-admin-audit-section:first .alm-admin-audit-group:first').addClass('active');
	}

	buildForm() {
		let container, content, data, item, group, groups, block;
		container = jQuery('.alm-admin-audit-form');
		data = this.data;
		for (var i = 0; i < data.length; i++) {
			item = data[i];
			content = 	`<div class="alm-admin-audit-section" id="`+item.id+`">
							<div class="alm-admin-audit-title">`+item.title+`</div>
						</div>`;
			container.append(content);
			for (var ii = 0; ii < item.list.length; ii++) {
				group = item.list[ii].title.replace(/\s+/g, '-');
				jQuery('.alm-admin-audit-section#'+item.id).append('<div class="alm-admin-audit-group" id="'+group+'"></div>');
				if(item.list[ii].group) {
					for (var iii = 0; iii < item.list[ii].group.length; iii++) {
						groups = item.list[ii].group[iii];
						block = `<div class="alm-admin-audit-item">
									<div class="alm-admin-audit-item-profile alm-wrapper">
										<div class="alm-admin-audit-item-icon alm-wrapper">
											<span class="fa fa-`+groups.icon+`"></span>
										</div>
										<div class="alm-admin-audit-item-title alm-wrapper">`+groups.title+`</div>
									</div>
									<div class="alm-admin-audit-item-container alm-wrapper" id="`+groups.icon+`"></div>
								</div>`;
						jQuery('.alm-admin-audit-section#'+item.id+' #'+group).append(block);
						if(groups.blocks) {
							for (var iv = 0; iv < groups.blocks.length; iv++) {
								this.buildInputs(item.id,group,groups,iv);
							}
						}
					}
				}
			}
		}
	}

	buildInputs(id,group,block,item) {
		let container, content, data;
		data = block.blocks[item];
		container = jQuery('.alm-admin-audit-section#'+id+' #'+group+' .alm-admin-audit-item-container#'+block.icon);
		switch(data.type) {
			case 'text':
				this.textInput(id,group,data,container);
			break;
			case 'select':
				this.selectInput(id,group,data,container);
			break;
			case 'textarea':
				this.textarea(id,group,data,container);
			break;
			case 'listing':
				this.listing(id,group,data,container);
			break;
		}
	}

	textInput(id,group,data,container) {
		let content;
		content = 	`<div class="alm-admin-audit-item-block `+data.class+`">
						<div class="alm-admin-audit-item-heading">`+data.title+`</div>
						<div class="alm-admin-audit-item-input">
							<input type="text" class="alm-admin-audit-item-value" data-section="`+id+`" data-group="`+group+`" data-value="" placeholder="`+data.placeholder+`">
						</div>
					</div>`;
		container.append(content);
	}

	selectInput(id,group,data,container) {
		let content;
		content = 	`<div class="alm-admin-audit-item-block `+data.class+`">
						<div class="alm-admin-audit-item-heading">`+data.title+`</div>
						<div class="alm-admin-audit-item-input">
							<select class="alm-admin-audit-item-value" data-section="`+id+`" data-group="`+group+`" data-value="">
								<option>daily</option>
								<option>weekly</option>
								<option>monthly</option>
								<option>occasionally</option>
								<option>never</option>
							</select>
						</div>
					</div>`;
		container.append(content);
	}

	textarea(id,group,data,container) {
		let content;
		content = 	`<div class="alm-admin-audit-item-block `+data.class+`">
						<div class="alm-admin-audit-item-heading">`+data.title+`</div>
						<div class="alm-admin-audit-item-input">
							<textarea type="text" class="alm-admin-audit-item-value" data-section="`+id+`" data-group="`+group+`" data-value="" placeholder="`+data.placeholder+`"></textarea>
						</div>
					</div>`;
		container.append(content);
	}

	listing(id,group,data,container) {
		let content;
		content = 	`<div class="alm-admin-audit-item-block `+data.class+`">
						<div class="alm-admin-audit-item-heading">`+data.title+`</div>
						<div class="alm-admin-audit-item-listing" id="`+id+`-`+group+`"></div>
						<div class="alm-admin-audit-item-add alm-wrapper">
							<div class="alm-admin-audit-item-input alm-admin-audit-item-add-input">
								<input type="text" class="alm-admin-audit-item-value" data-section="`+id+`" data-group="`+group+`" data-value="" placeholder="`+data.placeholder+`">
							</div>
							<div class="alm-admin-audit-item-add-btn alm-wrapper">+</div>
						</div>
					</div>`;
		container.append(content);
		jQuery('.alm-admin-audit-item-add-btn').on('click', function() {
			let item, input, value, list;
			item = jQuery(this);
			input = item.siblings('.alm-admin-audit-item-add-input').children('input');
			value = input.val();
			list = jQuery('.alm-admin-audit-item-listing#'+id+'-'+group);
			if(value.length > 5) {
				list.append(`<div class="alm-admin-audit-listing-item alm-wrapper">
								<div class="alm-admin-audit-item-listing-value">`+value+`</div>
								<div class="alm-admin-audit-item-listing-remove alm-wrapper">x</div>
							</div>`);
				input.val('');
			}
		});
	}

	getData() {
		let changeInterval = null;
		jQuery('.alm-admin-audit-item-value').each(function() {
			let item, value, length;
			item = jQuery(this);
			item.on('keyup', function(e) {
				value = item.val();
				length = value.length;
				if(length > 0) {

					// wait untill user type in something
					// Don't let call setInterval - clear it, user is still typing
					console.log('still typing');
					clearInterval(changeInterval);
					changeInterval = setInterval(function() {
						
						// Typing finished, now you can Do whatever after 2 sec
						clearInterval(changeInterval);
						console.log('typing finished - '+value);

					}, 1500);
				}
				else {
					console.log('value is too short...');
				}
			});

		});
	}

}