class Page {

	init(data) {
		this.checkPage(data.name);
	}

	checkPage(name) {
		let url, path, lastPath, page = new Page();
		url = window.location.href;
		path = url.split('/');
		lastPath = path[path.length - 1];
		if(lastPath.includes('.html')) {
			localforage.ready(function() {
				let key, pathName;
				pathName = lastPath.replace('.html','');
				if(name === pathName) {
					key = 'edx-cache-page-obj-'+name;
			        localforage.getItem(key).then(function(value) {
					    if(value != null) {
					    	// cached
					    	console.log('cached');
							page.buildPage(value);
					    }
					    else {
					    	// not cached
					  		console.log('not cached');
					  		page.getData(name);
					    }
					});
				}
				else {
					console.log('name is incorrect');
				}
		    });
		}
		else {
			console.log('invalid url');
		}
	}

	buildPage(data) {
		this.data = JSON.parse(data);
		this.template();
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
		sections = this.data.sections;
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
		content = this.data.cover.content;
		container.append(content);
		setTimeout(function() {
			container.addClass('active');
		}, 1500);
	}

	content() {
		let container, content;
		container = jQuery('.alm-section-content');
		content = this.data.content;
		container.append(content);
	}

	getData(name) {
		let pageData, config = new Config(), page = new Page();
		console.log(name);
		jQuery.ajax({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: config.route('page')+name+'.json',
            complete: function(jsondata) {
            	pageData = jsondata.responseText;
				if(pageData) {
					localforage.ready(function() {
						localforage.setItem('edx-cache-page-obj-'+name,pageData);
						page.buildPage(pageData);
					});
				}
				else {
					console.log('failed to load page');
				}
            }
        });
	}

}