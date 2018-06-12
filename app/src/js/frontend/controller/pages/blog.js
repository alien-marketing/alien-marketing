class Blog {

	init() {
		this.checkData();
	}

	template() {
		let container, content;
		container = jQuery('.alm-page');
		content = '<div class="alm-angled-sections"></div>';
		container.html(content);
		this.sections();
	}

	sections() {
		let container, content, sections, section;
		container = jQuery('.alm-angled-sections');
		sections = [
			{
				'title':'cover',
				'type':'gradient',
				'layout':'normal',
				// 'style':'background: linear-gradient(-45deg, rgb(255, 65, 108), rgb(255, 75, 43));'
				// 'style':'background: linear-gradient(15deg, rgb(238, 9, 121), rgb(255, 106, 0));'
				'style':'background: linear-gradient(15deg, rgb(17, 153, 142), rgb(168, 224, 99))'
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
	    this.cover();
	    this.content();
	}

	cover() {
		let container, content;
		container = jQuery('.alm-section-cover');
		content = 	`<div class="alm-hero-particle-js" id="particles-js"></div>
					<div class="alm-angled-section-wrapper alm-container" style="margin-top: 50px;">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-50">
								<div class="alm-page-content">
									<div class="alm-page-cover-title">
										Blog
									</div>
									<div class="alm-page-cover-subtitle">
										Things we write
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		// particlesJS("particles-js", {"particles":{"number":{"value":175,"density":{"enable":true,"value_area":2164.606282168456}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#fff"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.49705773886831206,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#fff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
		setTimeout(function() {
			container.addClass('active');
		}, 1500);
	}

	content() {
		let container, content
		container = jQuery('.alm-section-content');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-100">
								<div class="alm-page-blog-content alm-wrapper"></div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

	buildPosts(obj) {
		let container, content, posts, data, col;
		this.template();
		container = jQuery('.alm-page-blog-content');
		posts = JSON.parse(obj);
		for (var i = 0; i < posts.posts.length; i++) {
			data = posts.posts[i];
			if(i%3){ col = 'alm-sm-40'; }
			else { col = 'alm-sm-60'; }
			content = 	`<div class="alm-xs-100 `+col+`">
							<div class="alm-page-blog-posts">
								<div class="alm-page-blog-posts-image alm-wrapper">
									<div class="alm-page-blog-posts-info">
										<a href="post.html?name=`+data.name+`">
											<div class="alm-page-blog-posts-title">`+data.name.replace(/-/g,' ')+`</div>
										</a>
										<div class="alm-page-blog-posts-description">
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</div>
									</div>
									<div class="alm-page-blog-posts-image-overlay"></div>
								</div>
							</div>
						</div>`;
			container.append(content);
		}
	}

	checkData() {
		let blog = new Blog();
		localforage.ready(function() {
			let key;
			key = 'edx-cache-blog-obj';
	        localforage.getItem(key).then(function(value) {
			    if(value != null) {
			    	// cached
			    	console.log('cached');
					blog.buildPosts(value);
			    }
			    else {
			    	// not cached
			  		console.log('not cached');
			  		blog.getData();
			    }
			});
		});
	}

	getData() {
		let blogData, blog = new Blog();
		jQuery.ajax({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: 'http://s3-us-west-2.amazonaws.com/alien-marketing/blog/list.json',
            complete: function(jsondata) {
            	blogData = jsondata.responseText;
				if(blogData) {
					localforage.ready(function() {
						localforage.setItem('edx-cache-blog-obj',blogData);
						blog.buildPosts(blogData);
					});
				}
				else {
					console.log('failed to load page');
				}
            }
        });
	}

}