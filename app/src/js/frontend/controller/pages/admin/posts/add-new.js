class newPost {

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
		content = 	`<div class="alm-admin-page-cover-title">new post</div>`;
		container.append(content);
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
										<div class="alm-xs-100 alm-sm-100 alm-md-75 alm-lg-75">
											<div class="alm-admin-new-post-title">
												<input class="alm-admin-new-post-value" type="text">
											</div>
											<div class="alm-editor-app">
												<div class="alm-editor-holder active">
													<pre class="alm-editor" id="alm-admin-post-editor"></pre>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="alm-xs-100 alm-sm-25">
						<div class="alm-admin-page-block alm-wrapper">
							<div>
								<div>publish</div>
								<button>preview</button>
								<div>Status: Published</div>
								<div>Visibility: Public</div>
								<div>Created: June 12, 2018 at 6:05pm</div>
								<div>Delete</div>
								<div>Update</div>
							</div>
						</div>
						<div class="alm-admin-page-block alm-wrapper">options</div>
						<div class="alm-admin-page-block alm-wrapper">categories</div>
					</div>`;
		container.append(content);

		// initiate editor
		editor.init({
			'id':'alm-admin-post-editor',
			'theme':'ace/theme/chrome',
			'mode':'ace/mode/html',
			'language':{
				'name':'html',
				'ext':'html'
			},
			'code':'',
			'wrap':true,
			'margin':false,
			'focus':true,
			'readonly':false,
			'template':'',
			'shadow':true,
			'style':{
				'font-size':'11px'
			}
		});

	}

}