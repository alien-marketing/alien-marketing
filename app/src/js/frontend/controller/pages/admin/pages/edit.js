class editPage {

	init() {
		this.page = jQuery('.alm-admin-page');
		this.template();
	}

	template() {
		this.cover();
		this.content();
	}

	cover() {
		let container, content, obj;
		container = jQuery('.alm-admin-page-cover');
		content = 	`<div class="alm-admin-page-cover-title">edit page</div>`;
		container.append(content);
	}

	content() {
		let container, content, obj;
		container = jQuery('.alm-admin-page-container');
		content = 	`<div class="alm-xs-100 alm-sm-100">
						<div class="alm-admin-page-block alm-wrapper">messages</div>
					</div>
					<div class="alm-xs-100 alm-sm-75">
						<div class="alm-admin-page-pages"></div>
					</div>
					<div class="alm-xs-100 alm-sm-25">
						<div class="alm-admin-page-block alm-wrapper">
							<div class="alm-admin-page-btn alm-admin-page-add-new alm-wrapper">add new page</div>
						</div>
					</div>`;
		container.append(content);
		this.content();
	}

	content() {
		let container, content, obj, blockData, block, editor = new Editor();
		container = jQuery('.alm-admin-page-container');
		content = 	`<div class="alm-xs-100 alm-sm-100">
						<div class="alm-admin-page-block alm-wrapper">messages</div>
					</div>
					<div class="alm-xs-100 alm-sm-75">
						<div class="alm-admin-page-block alm-wrapper">
							<div class="alm-admin-page-new-post">
								<div class="buildr-item-input-container">
									<div class="buildr-item-input-title">Page Title</div>
									<div class="buildr-item-input">
										<input type="text" class="buildr-item-input-value" placeholder="Page Title...">
									</div>
								</div>
								<div class="buildr-item-input-container">
									<div class="buildr-item-input-title">Cover</div>
									<div class="buildr-item-input">
										<input type="text" class="buildr-item-input-value" placeholder="rgba(0,0,0,0)">
									</div>
								</div>
								<div class="alm-editor-container">
									<div class="alm-wrapper alm-editor-wrapper">
										<div class="alm-xs-100 alm-sm-100 alm-md-100 alm-lg-100">
											<div class="alm-admin-page-builder-render">
												<div class="alm-admin-page-builder-list buildr-sortable-list buildr-sortable-main-list sortable" aria-dropeffect="move"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="alm-xs-100 alm-sm-25">
						<div class="alm-admin-page-block-sidebar">

							<!-- Page Builder -->
							<div class="alm-admin-page-block">
								<div class="alm-admin-page-block-sidebar-header alm-wrapper">
									<div class="alm-admin-page-block-sidebar-title">
										page builder
									</div>
								</div>
								<div class="alm-admin-page-block-sidebar-content">
									<div class="alm-admin-page-builder">
										<div class="alm-admin-page-builder-section">
											<div class="alm-page-builder-list buildr-sortable-menu sortable"></div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>`;
		container.append(content);

		obj = [
			{
				'info':{
					'title':'section',
					'icon':'fa-cog',
					'type':'section',
					'addList':true,
					'copy':true
				}
			},
			{
				'info':{
					'title':'block',
					'icon':'fa-cog',
					'type':'block',
					'addList':true,
					'copy':true
				}
			}
		];

		this.buildMenu(obj);
		
		// This initiates the page builder menu
		sortable('.buildr-sortable-menu', {
			forcePlaceholderSize: false,
			copy: true,
			acceptFrom: false,
			placeholderClass: 'alm-admin-page-builder-placeholder',
		});

		sortable('.buildr-sortable-main-list', {
			forcePlaceholderSize: true,
			copy: false,
			maxItems: 5,
			acceptFrom: '.buildr-sortable-menu-section',
			placeholderClass: 'alm-admin-page-builder-placeholder',
		});

		sortable('.buildr-sortable-menu-section', {
			forcePlaceholderSize: true,
			copy: true,
			maxItems: 5,
			acceptFrom: false,
			placeholderClass: 'alm-admin-page-builder-placeholder',
		});

		sortable('.buildr-sortable-menu-block', {
			forcePlaceholderSize: false,
			copy: true,
			acceptFrom: false,
			placeholderClass: 'alm-admin-page-builder-placeholder',
		});

		document.querySelector('.buildr-sortable-main-list').addEventListener('sortupdate', function(e){
			// this is where we can add items to the section...
			let parent;
			parent = e.detail.item;
			jQuery('.buildr-sortable-item-edit').removeClass('buildr-edit-item');
			jQuery('.buildr-sortable-item-options').removeClass('buildr-remove-item');
			parent.children[0].classList.add('buildr-edit-item');
			parent.children[2].classList.add('buildr-remove-item');
			jQuery('.buildr-remove-item').on('click', function() {
				jQuery(this).parent().remove();
				console.log('remove item');
			});
			jQuery('.buildr-edit-item').on('click', function() {
				console.log('edit this item');
			});

			sortable('.buildr-sortable-list-section', {
				forcePlaceholderSize: true,
				copy: false,
				maxItems: 5,
				items: ':not(.buildr-sortable-menu-section)',
				acceptFrom: '.buildr-sortable-menu-block, .buildr-sortable-list-section',
				placeholderClass: 'alm-admin-page-builder-placeholder',
			});

			document.querySelector('.buildr-sortable-list-section').addEventListener('sortupdate', function(e){
				// this is where we can add items to the block...
				let child;
				child = e.detail.item;

				jQuery('.buildr-sortable-item-options').off('click').on('click', function() {
					jQuery(this).parent().remove();
					console.log('remove item');
				});

				jQuery('.buildr-sortable-list-block .buildr-option-item').off('click').on('click', function() {
					let item, contents, options, option;
					item = jQuery(this);
					options = item.text();
					item.parent().children('.buildr-option-item').removeClass('active');
					item.addClass('active');
					
				});

			});

		});

		// initiate editor
		// editor.init({
		// 	'id':'alm-admin-post-editor',
		// 	'theme':'ace/theme/chrome',
		// 	'mode':'ace/mode/html',
		// 	'language':{
		// 		'name':'html',
		// 		'ext':'html'
		// 	},
		// 	'code':'',
		// 	'wrap':true,
		// 	'margin':false,
		// 	'focus':true,
		// 	'readonly':false,
		// 	'template':'',
		// 	'shadow':true,
		// 	'style':{
		// 		'font-size':'11px'
		// 	}
		// });

	}

	buildMenu(obj) {
		let container, content, data, list, edit;
		container = jQuery('.buildr-sortable-menu');
		for (var i = 0; i < obj.length; i++) {
			data = obj[i].info;
			edit = '';
			list = '';
			if(data.type == 'block') { 
				edit = 	`<div class="buildr-options alm-wrapper">
							<div class="buildr-option-item alm-wrapper alm-sm-50 alm-md-25">slider</div>
							<div class="buildr-option-item alm-wrapper alm-sm-50 alm-md-25">form</div>
							<div class="buildr-option-item alm-wrapper alm-sm-50 alm-md-25">media</div>
							<div class="buildr-option-item alm-wrapper alm-sm-50 alm-md-25">text</div>
						</div>`; 
			}
			if(data.addList == true) { 
				list = `<div class="buildr-sortable-list-container buildr-sortable-list-`+data.type+` alm-wrapper">`+edit+`</div>`;
			}
			content = 	`<div class="buildr-sortable-menu-container buildr-sortable-menu-`+data.type+`">
							<div class="alm-admin-page-builder-item alm-wrapper" data-copy="`+data.copy+`" data-type="`+data.type+`" data-id="`+i+`">
								<div class="buildr-sortable-item-edit alm-wrapper">
									<span class="fa `+data.icon+`"></span>
								</div>
								<div class="alm-admin-page-builder-item-title alm-wrapper">`+data.title+`</div>
								<div class="buildr-sortable-item-options alm-wrapper" data-id="`+i+`">
									<span class="fa fa-remove">
								</div>
								<div class="buildr-sortable-item-container">`+list+`</div>
							</div>
						</div>`;
			container.append(content);
		}

	}

}