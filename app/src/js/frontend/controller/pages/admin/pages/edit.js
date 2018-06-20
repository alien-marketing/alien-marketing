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
		let container, content, obj, editor = new Editor();
		container = jQuery('.alm-admin-page-container');
		content = 	`<div class="alm-xs-100 alm-sm-100">
						<div class="alm-admin-page-block alm-wrapper">messages</div>
					</div>
					<div class="alm-xs-100 alm-sm-75">
						<div class="alm-admin-page-block alm-wrapper">
							<div class="alm-admin-page-new-post">
								<div class="alm-editor-container">
									<div class="alm-wrapper alm-editor-wrapper">
										<div class="alm-xs-100 alm-sm-100 alm-md-100 alm-lg-100">
											<div class="alm-admin-page-builder-render">
												<div class="alm-admin-page-builder-list p2 border maroon border-maroon js-sortable-copy-target sortable list flex flex-column list-reset" aria-dropeffect="move"></div>
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
												Main Blocks
											</div>
											<div class="alm-page-builder-list connected-sortable">
												<div class="alm-admin-page-builder-item draggable-item">Title</div>
												<div class="alm-admin-page-builder-item draggable-item">Cover</div>
												<div class="alm-admin-page-builder-item draggable-item">Body</div>
											</div>
										</div>
										<div class="alm-admin-page-builder-section">
											<div class="alm-page-build-title">
												Secondary Blocks
											</div>
											<div class="alm-page-builder-list connected-sortable">
												<div class="alm-admin-page-builder-item draggable-item">Section</div>
												<div class="alm-admin-page-builder-item draggable-item">Block</div>
												<div class="alm-admin-page-builder-item draggable-item">Carousel</div>
												<div class="alm-admin-page-builder-item draggable-item">Form</div>
												<div class="alm-admin-page-builder-item draggable-item">Image/Video</div>
												<div class="alm-admin-page-builder-item draggable-item">Text</div>
											</div>
											

											<section class="mb3 mx-auto col col-12">
									  		<div class="p3 clearfix bg-yellow maroon">
												<div class="col col-12 mb1">
												<h2 class="h3 m0">Sortable Copy</h2>
												</div>
												<div class="col col-6">
													<div class="p2 bg-yellow border maroon border-maroon mt1">
													<code class="mb0">
														<div>sortable('.o-sortable', {</div>
														<div class="px2 muted">copy:true // default to false</div>
														<div>});</div>
													</code>
												</div>
													<h2 class="h4 mt1">Copy items here</h2>
											</div>
												<div class="col col-6">
													<div class="ml4 js-sortable-non-copy sortable list flex flex-column list-reset">
														<div class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10">Item 1</div>
														<div class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10">Item 2</div>
														<div class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10">Item 3</div>
														<div class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10">Item 4</div>
														<div class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10">Item 5</div>
														<div class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10">Item 6</div>
													</div>
													<div class="ml4 js-sortable-copy sortable list flex flex-column list-reset">
														<div class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10">Item 1</div>
														<div class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10">Item 2</div>
														<div class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10">Item 3</div>
														<div class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10">Item 4</div>
														<div class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10">Item 5</div>
														<div class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10">Item 6</div>
													</div>
												</div>
											</div>
											</section>

										</div>
									</div>
								</div>
							</div>

						</div>
					</div>`;
		container.append(content);

		sortable('.js-sortable-copy', {
			forcePlaceholderSize: true,
			copy: true,
			acceptFrom: false,
			placeholderClass: 'mb1 bg-navy border border-yellow',
		});
		sortable('.js-sortable-non-copy', {
			forcePlaceholderSize: true,
			copy: false,
			acceptFrom: false,
			placeholderClass: 'mb1 bg-navy border border-yellow',
		});
		sortable('.js-sortable-copy-target', {
			forcePlaceholderSize: true,
			acceptFrom: '.js-sortable-copy,.js-sortable-non-copy,.js-sortable-copy-target',
			placeholderClass: 'mb1 border border-maroon',
		});
		
		document.querySelector('.js-sortable-copy').addEventListener('sortupdate', function(e){
			console.log('Sortupdate: ', e.detail);
			console.log('Container: ', e.detail.origin.container, ' -> ', e.detail.destination.container);
			console.log('Index: '+e.detail.origin.index+' -> '+e.detail.destination.index);
			console.log('Element Index: '+e.detail.origin.elementIndex+' -> '+e.detail.destination.elementIndex);
		});
		document.querySelector('.js-sortable-copy').addEventListener('sortstart', function(e){
			console.log('Sortstart: ', e.detail);
		});
		document.querySelector('.js-sortable-copy').addEventListener('sortstop', function(e){
			console.log('Sortstop: ', e.detail);
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

}