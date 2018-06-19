class allPages {

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
		content = 	`<div class="alm-admin-page-cover-title">all pages</div>`;
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
		this.getPages();
	}

	getPages() {
		let container, content, s3, params, config = new Config();

		container = jQuery('.alm-admin-page-pages');
		s3 = new AWS.S3({accessKeyId: config.route('id'),secretAccessKey: config.route('secret')});
		params = {Bucket: 'alien-marketing',MaxKeys: 100,Marker: 'website/',Prefix: 'website/app/pages/'};

        s3.listObjects(params, function(err, data) {
        	console.log(err);
			if(data) {
				for (var i = 0; i < data.Contents.length; i++) {
					let item, path, lastPath, link, page;
					item = data.Contents[i]
					if(item.Key.includes('.html')) {

						path = item.Key.split('/');
						lastPath = path.length - 1;
						link = path[lastPath];
						page = link.replace('.html','').replace(/-/g, ' ');
						
						content = 	`<div class="alm-admin-page-post alm-admin-page-block alm-wrapper">
										<div class="alm-admin-page-post-thumb alm-wrapper"></div>
										<div class="alm-admin-page-post-info alm-wrapper">
											<div class="alm-xs-100 alm-sm-50">
												<div class="alm-admin-page-post-titles">
													<div class="alm-admin-page-post-title">
														<a href="`+link+`" target="_blank">`+page+`</a>
													</div>
													<div class="alm-admin-page-post-author">
														`+item.Owner.DisplayName+`
													</div>
												</div>
											</div>
											<div class="alm-xs-100 alm-sm-50 alm-admin-page-post-data">
												<div class="alm-wrapper">
													<div class="alm-xs-100 alm-sm-33">
														<div class="alm-admin-page-post-status alm-wrapper">
															enabled
														</div>
													</div>
													<div class="alm-xs-100 alm-sm-33">
														<div class="alm-admin-page-post-category alm-wrapper">
															`+item.Size+`
														</div>
													</div>
													<div class="alm-xs-100 alm-sm-33">
														<div class="alm-admin-page-post-created alm-wrapper">
															`+moment(item.LastModified).format('MMMM Do YYYY, h:mm a')+`
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
			else {
				console.log('no data');
			}
        });

	}

}