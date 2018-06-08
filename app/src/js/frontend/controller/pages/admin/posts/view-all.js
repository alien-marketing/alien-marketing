class allPosts {

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
		content = 	`<div class="alm-admin-page-cover-title">all posts</div>`;
		container.append(content);
	}

	content() {
		let container, content, obj;
		container = jQuery('.alm-admin-page-container');
		content = 	`<div class="alm-xs-100 alm-sm-100">
						<div class="alm-admin-page-block alm-wrapper">messages</div>
					</div>
					<div class="alm-xs-100 alm-sm-75">
						<div class="alm-admin-page-posts"></div>
					</div>
					<div class="alm-xs-100 alm-sm-25">
						<div class="alm-admin-page-block alm-wrapper">sidebar</div>
					</div>`;
		container.append(content);
		this.getPosts();
	}

	getPosts() {
		let container, content;
		container = jQuery('.alm-admin-page-posts');
		for (var i = 0; i < 30; i++) {
			let status, stat, views, categories, category;
			status = ['enabled','disabled'];
			categories = ['marketing','design','tutorials','business','programming'];
			views = Math.floor(Math.random() * 1000) + 1;
			stat = status[Math.floor(Math.random() * status.length - 1) + 1];
			category = categories[Math.floor(Math.random() * categories.length -1) + 1];
			content = 	`<div class="alm-admin-page-post alm-admin-page-block alm-wrapper">
							<div class="alm-admin-page-post-thumb alm-wrapper"></div>
							<div class="alm-admin-page-post-info alm-wrapper">
								<div class="alm-xs-100 alm-sm-50">
									<div class="alm-admin-page-post-titles">
										<div class="alm-admin-page-post-title">
											Lorem ipsum dolor
										</div>
										<div class="alm-admin-page-post-author">
											mathew maione
										</div>
									</div>
								</div>
								<div class="alm-xs-100 alm-sm-50 alm-admin-page-post-data">
									<div class="alm-wrapper">
										<div class="alm-xs-100 alm-sm-20">
											<div class="alm-admin-page-post-status alm-wrapper">
												`+stat+`
											</div>
										</div>
										<div class="alm-xs-100 alm-sm-20">
											<div class="alm-admin-page-post-views alm-wrapper">
												`+views+`
											</div>
										</div>
										<div class="alm-xs-100 alm-sm-30">
											<div class="alm-admin-page-post-category alm-wrapper">
												`+category+`
											</div>
										</div>
										<div class="alm-xs-100 alm-sm-30">
											<div class="alm-admin-page-post-created alm-wrapper">
												April 12, 2018
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>`;
			container.append(content);
		}
	}

}