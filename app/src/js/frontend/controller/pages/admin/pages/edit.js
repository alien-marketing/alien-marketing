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
											<div class="alm-page-build-title">
												Blocks
											</div>
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
			},
			{
				'info':{
					'title':'slider',
					'icon':'fa-cog',
					'type':'slider',
					'addList':false,
					'copy':false
				}
			},
			{
				'info':{
					'title':'form',
					'icon':'fa-cog',
					'type':'form',
					'addList':false,
					'copy':false
				}
			},
			{
				'info':{
					'title':'image/video',
					'icon':'fa-cog',
					'type':'media',
					'addList':false,
					'copy':true
				}
			},
			{
				'info':{
					'title':'text',
					'icon':'fa-cog',
					'type':'content',
					'addList':false,
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

		// Section
		sortable('.buildr-sortable-menu-section', {
			forcePlaceholderSize: false,
			copy: true,
			acceptFrom: '.buildr-sortable-menu-block',
			placeholderClass: 'alm-admin-page-builder-placeholder',
		});

		// Block
		sortable('.buildr-sortable-menu-block', {
			forcePlaceholderSize: false,
			copy: true,
			acceptFrom: '.buildr-sortable-menu, .buildr-sortable-list, .buildr-sortable-main-list',
			placeholderClass: 'alm-admin-page-builder-placeholder',
		});

		// This runs during an item selection in the page builder menu
		document.querySelector('.buildr-sortable-menu').addEventListener('sortstart', function(e){

			sortable('.buildr-sortable-main-list', {
				forcePlaceholderSize: true,
				copy: false,
				maxItems: 5,
				acceptFrom: '.buildr-sortable-menu-section',
				placeholderClass: 'alm-admin-page-builder-placeholder',
			});

			// // Section
			// sortable('.buildr-sortable-list-section', {
			// 	forcePlaceholderSize: true,
			// 	copy: false,
			// 	maxItems: 5,
			// 	items: ':not(.buildr-sortable-menu-section)',
			// 	acceptFrom: '.buildr-sortable-menu-block',
			// 	placeholderClass: 'alm-admin-page-builder-placeholder',
			// });

			// // Block
			// sortable('.buildr-sortable-list-block', {
			// 	forcePlaceholderSize: true,
			// 	copy: false,
			// 	maxItems: 2,
			// 	acceptFrom: '.buildr-sortable-menu, .buildr-sortable-list, .buildr-sortable-main-list',
			// 	placeholderClass: 'alm-admin-page-builder-placeholder',
			// });

			document.querySelector('.buildr-sortable-main-list').addEventListener('sortstart', function(e){
				console.log('item added to main container');

				sortable('.buildr-sortable-list-section', {
					forcePlaceholderSize: true,
					copy: false,
					maxItems: 5,
					items: ':not(.buildr-sortable-menu-section)',
					acceptFrom: '.buildr-sortable-menu-block',
					placeholderClass: 'alm-admin-page-builder-placeholder',
				});

				// document.querySelector('.buildr-sortable-item-list').addEventListener('sortupdate', function(e){
				// 	console.log('item added to item container');

				// 	document.querySelector('.buildr-sortable-list-container').addEventListener('sortupdate', function(e){
				// 		console.log('item added to item item container');
				// 	});
				// });
			});

		});

		// let parent;
		// parent = e.detail.item;
		// jQuery('.buildr-sortable-item-options').removeClass('buildr-open-modal');
		// parent.children[2].classList.add('buildr-open-modal');

		// jQuery('.buildr-open-modal').on('click', function() {
		// 	jQuery(this).parent().remove();
		// });

		// document.querySelector('.buildr-sortable-item-list').addEventListener('sortupdate', function(e) {
		// 	let child;
		// 	child = e.detail.item;
		// 	jQuery('.buildr-sortable-item-options').removeClass('buildr-open-modal');
		// 	child.children[2].classList.add('buildr-open-modal');
		// 	jQuery('.buildr-open-modal').on('click', function() {
		// 		jQuery(this).parent().remove();
		// 	});

		// });

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
		let container, content, data, list;
		container = jQuery('.buildr-sortable-menu');
		for (var i = 0; i < obj.length; i++) {
			data = obj[i].info;
			if(data.addList == true) { list = '<div class="buildr-sortable-item-container"><div class="buildr-sortable-list-container buildr-sortable-list-'+data.type+' sortable alm-wrapper"></div></div>'; } else { list = ''; }
			content = 	`<div class="buildr-sortable-menu-container buildr-sortable-menu-`+data.type+`">
							<div class="alm-admin-page-builder-item alm-wrapper" data-copy="`+data.copy+`" data-type="`+data.type+`" data-id="`+i+`">
								<div class="alm-admin-page-builder-item-icon alm-wrapper">
									<span class="fa `+data.icon+`">
								</div>
								<div class="alm-admin-page-builder-item-title alm-wrapper">`+data.title+`</div>
								<div class="buildr-sortable-item-options alm-wrapper" data-id="`+i+`">
									<span class="fa fa-ellipsis-v">
								</div>
								`+list+`
							</div>
						</div>`;
			container.append(content);
		}

	}

}