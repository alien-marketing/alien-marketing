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
												<input class="alm-admin-new-post-value" type="text" placeholder="Title goes here...">
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
						<div class="alm-admin-page-block-sidebar">

							<!-- Publish -->
							<div class="alm-admin-page-block">
								<div class="alm-admin-page-block-sidebar-header alm-wrapper">
									<div class="alm-admin-page-block-sidebar-title">
										publish
									</div>
									<div class="alm-admin-page-block-sidebar-preview alm-wrapper">
										preview
									</div>
								</div>
								<div class="alm-admin-page-block-sidebar-content">
									<div class="alm-admin-page-block-sidebar-item alm-wrapper">
										<div class="alm-admin-page-block-sidebar-name">Status:</div>
										<div class="alm-admin-page-block-sidebar-value">
											<select>
												<option>draft</option>
												<option>pending</option>
												<option>published</option>
											</select>
										</div>
									</div>
									<div class="alm-admin-page-block-sidebar-item alm-wrapper">
										<div class="alm-admin-page-block-sidebar-name">Visibility:</div>
										<div class="alm-admin-page-block-sidebar-value">
											<select>
												<option>public</option>
												<option>private</option>
												<option>unlisted</option>
											</select>
										</div>
									</div>
									<div class="alm-admin-page-block-sidebar-item alm-wrapper">
										<div class="alm-admin-page-block-sidebar-name">Created:</div>
										<div class="alm-admin-page-block-sidebar-value">
											<input type="text" value="`+moment().format('MMMM Do YYYY @ h:mm A')+`" placeholder="date">
										</div>
									</div>
									<div class="alm-admin-page-block-sidebar-item alm-wrapper">
										<div class="alm-admin-page-block-sidebar-name">Author:</div>
										<div class="alm-admin-page-block-sidebar-value">
											Mathew
										</div>
									</div>
								</div>
								<div class="alm-admin-page-block-sidebar-footer">
									<div class="alm-admin-page-block-sidebar-update alm-wrapper">
										<div class="alm-admin-page-block-sidebar-btn alm-wrapper">publish</div>
									</div>
								</div>
							</div>

							<!-- Layout -->
							<div class="alm-admin-page-block">
								<div class="alm-admin-page-block-sidebar-header">
									<div class="alm-admin-page-block-sidebar-title">
										layout
									</div>
								</div>
								<div class="alm-admin-page-block-sidebar-content">
									content
								</div>
								<div class="alm-admin-page-block-sidebar-footer">
									footer
								</div>
							</div>

							<!-- Media -->
							<div class="alm-admin-page-block">
								<div class="alm-admin-page-block-sidebar-header">
									<div class="alm-admin-page-block-sidebar-title">
										media
									</div>
								</div>
								<div class="alm-admin-page-block-sidebar-content">
									content
								</div>
								<div class="alm-admin-page-block-sidebar-footer">
									footer
								</div>
							</div>

							<!-- Categories -->
							<div class="alm-admin-page-block">
								<div class="alm-admin-page-block-sidebar-header">
									<div class="alm-admin-page-block-sidebar-title">
										categories
									</div>
								</div>
								<div class="alm-admin-page-block-sidebar-content">
									content
								</div>
								<div class="alm-admin-page-block-sidebar-footer">
									footer
								</div>
							</div>

							<!-- Tags -->
							<div class="alm-admin-page-block">
								<div class="alm-admin-page-block-sidebar-header">
									<div class="alm-admin-page-block-sidebar-title">
										tags
									</div>
								</div>
								<div class="alm-admin-page-block-sidebar-content">
									content
								</div>
								<div class="alm-admin-page-block-sidebar-footer">
									footer
								</div>
							</div>

						</div>
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