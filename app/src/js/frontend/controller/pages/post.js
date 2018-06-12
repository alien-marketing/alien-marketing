class Post {

	init() {
		this.getData();
	}

	template(data) {
		let container, content;
		this.data = JSON.parse(data);
		container = jQuery('.alm-page');
		content = '<div class="alm-angled-sections"></div>';
		container.html(content);
		this.sections();
	}

	sections() {
		let container, content, data, sections, section;
		container = jQuery('.alm-angled-sections');
		data = this.data;
		sections = [
			{
				'title':'cover',
				'type':'gradient',
				'layout':'normal',
				'style':'background: url('+data.cover+'); background-attachment: fixed; background-size: cover;'
			},
			{
				'title':'content',
				'type':'normal',
				'layout':'inverse',
				'style':'background: #fff;'
			}
		];
	    for (var i = 0; i < sections.length; i++) {
	    	section = sections[i];
	    	content = 	`<div class="alm-section alm-angled-section alm-section-`+section.title+` alm-section-type-`+section.type+` alm-section-layout-`+section.layout+` alm-25" style="`+section.style+`">
	    					<div class="alm-section-top"><svg viewBox="0 0 1440 120" aria-hidden="true"><path style="fill: #fff;" d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path></svg></div>
	    					<div class="alm-section-block"></div>
	    					<div class="alm-section-bottom"><svg viewBox="0 0 1440 120" aria-hidden="true"><path style="fill: #fff;" d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path></svg></div>
	    				</div>`;
	    	container.append(content);
	    }
	    this.content();
	    this.cover();
	}

	cover() {
		let container, content;
		container = jQuery('.alm-section-cover');
		content = 	`<div class="alm-hero-particle-js" id="particles-js" style="background: rgba(20,20,20,0.35);"></div>
					<div class="alm-angled-section-wrapper alm-container" style="margin-top: 50px;">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-50">
								<div class="alm-page-content">
									<div class="alm-page-cover-title"></div>
									<div class="alm-page-cover-subtitle"></div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		setTimeout(function() {
			container.addClass('active');
		}, 1500);
	}

	content() {
		let container, content, data;
		data = this.data;
		container = jQuery('.alm-section-content');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-75">
								<div class="alm-page-content">
									<div class="alm-page-blog-post-titles">
										<div class="alm-page-blog-post-title">
											`+data.title+`
										</div>
										<div class="alm-page-blog-post-created alm-wrapper">
											<div class="alm-page-blog-post-author">
												By: `+data.created.published.author+`
											</div>
										</div>
									</div>
									<div class="alm-page-blog-post-content"></div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		for (var i = 0; i < data.content.length; i++) {
			switch(data.content[i].type) {
				case 'text':
					jQuery('.alm-page-blog-post-content').append('<div class="alm-page-blog-post-text">'+data.content[i].data.text+'</div>');
				break;
				case 'image':
					jQuery('.alm-page-blog-post-content').append(`<div class="alm-page-blog-post-image">
																	<img src="`+data.content[i].data.src+`" width="100%">
																	<div class="alm-page-blog-post-caption">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
																</div>`);
				break;
			}
		}
	}

	getData() {
		let url, name, postData, post = new Post();
		url = window.location.search;
		if(url.includes('?name=')) {
			name = url.replace('?name=');
			jQuery.ajax({
	            type: 'GET',
	            crossDomain: true,
	            dataType: 'json',
	            url: 'https://s3-us-west-2.amazonaws.com/alien-marketing/blog/posts/vkxoq9w7/post.json',
	            complete: function(jsondata) {
	            	postData = jsondata.responseText;
					if(postData) {
						post.template(postData);
						// localforage.ready(function() {
						// 	localforage.setItem('edx-cache-page-obj-'+name,postData);
						// 	page.buildPage(postData);
						// });
					}
					else {
						console.log('failed to load page');
					}
	            }
	        });
		}
		else {

		}
	}

}