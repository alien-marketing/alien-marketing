class Team {

	init() {
		this.container = jQuery('.alm-page');
		this.template();
	}

	template() {
		let container, content;
		container = this.container;
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
				'style':'background: linear-gradient(-45deg, rgb(156, 236, 251), rgb(101, 199, 247), rgb(0, 82, 212));'
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
										Team
									</div>
									<div class="alm-page-cover-subtitle">
										Take us to your leader
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
		let container, content, obj;
		obj = [
			{
				'name':'sarah',
				'title':'founder',
				'image':'https://s3-us-west-2.amazonaws.com/alien-marketing/media/images/team/sarah.jpg',
				'style':'background-size: cover; background-position: center center;',
				'social':[
					{'type':'instagram','link':''},
					{'type':'facebook','link':''},
					{'type':'twitter','link':''},
					{'type':'linkedin','link':''},
					{'type':'envelope-o','link':''}
				]
			},
			{
				'name':'larry',
				'title':'founder',
				'image':'https://s3-us-west-2.amazonaws.com/alien-marketing/media/images/team/larry.jpg',
				'style':'background-size: cover; background-position: center center;',
				'social':[
					{'type':'instagram','link':''},
					{'type':'facebook','link':''},
					{'type':'twitter','link':''},
					{'type':'linkedin','link':''},
					{'type':'envelope-o','link':''}
				]
			},
			{
				'name':'mathew',
				'title':'developer',
				'image':'https://s3-us-west-2.amazonaws.com/alien-marketing/media/images/team/mathew.jpg',
				'style':'background-size: cover; background-position: top center;',
				'social':[
					{'type':'instagram','link':''},
					{'type':'twitter','link':''},
					{'type':'github','link':''},
					{'type':'linkedin','link':''},
					{'type':'envelope-o','link':''}
				]
			}
		];
		container = jQuery('.alm-section-content');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-100">
								<div class="alm-page-content">
									<div class="alm-team-page-container alm-wrapper"></div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		for (var i = 0; i < obj.length; i++) {
			let member, data;
			data = obj[i];
			member = 	`<div class="alm-xs-100 alm-sm-50 alm-md-33">
							<div class="alm-team-member alm-team-member-`+i+`">
								<div class="alm-team-member-image-container">
									<div class="alm-team-member-image" style="background: url(`+data.image+`); `+data.style+`"></div>
								</div>
								<div class="alm-team-member-info">
									<div class="alm-team-member-name alm-wrapper">`+data.name+`</div>
									<div class="alm-team-member-position alm-wrapper">`+data.title+`</div>
									<div class="alm-team-member-socials alm-wrapper"></div>
								</div>
							</div>
						</div>`;
			jQuery('.alm-team-page-container').append(member);
			for (var ii = 0; ii < data.social.length; ii++) {
				jQuery('.alm-team-member-'+i+' .alm-team-member-socials').append('<div class="alm-team-member-social alm-wrapper"><span class="fa fa-'+data.social[ii].type+'"></span></div>');
			}
		}
	}

}