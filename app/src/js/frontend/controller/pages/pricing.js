class Pricing {

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
				'style':'background: linear-gradient(-15deg, #912ebf, #f44336);}'
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
	    					<div class="alm-section-bottom"><svg viewBox="0 0 1440 120" aria-hidden="true" transform="rotate(180)"><path style="fill: #fff;" d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path></svg></div>
	    				</div>`;
	    	container.append(content);
	    }
	    this.cover();
	    this.content();
	}

	cover() {
		let container, block, content;
		container = jQuery('.alm-section-cover');
		block = container.children('.alm-section-block');
		content = 	`<div class="alm-hero-particle-js" id="particles-js"></div>
					<div class="alm-angled-section-wrapper alm-container" style="margin-top: 50px;">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-50">
								<div class="alm-page-content">
									<div class="alm-page-cover-title">
										Pricing
									</div>
									<div class="alm-page-cover-subtitle">
										What it costs
									</div>
								</div>
							</div>
						</div>
					</div>`;
		block.append(content);
		// particlesJS("particles-js", {"particles":{"number":{"value":175,"density":{"enable":true,"value_area":2164.606282168456}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#fff"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.49705773886831206,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#fff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
		setTimeout(function() {
			container.addClass('active');
		}, 1500);
	}

	content() {
		let container, block, content;
		container = jQuery('.alm-section-content');
		block = container.children('.alm-section-block');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-100 alm-md-100">
								<div style="text-align: center; font-size: 26px; margin-bottom: 40px;">Choose the plan that best fits your requirements.</div>
								<div class="alm-pricing-timeframe">
									<div class="alm-radio-toggle alm-wrapper">
										<div class="alm-radio-option" data-term="monthly">monthly</div>
										<div class="alm-radio-toggle-control-container alm-wrapper">
											<div class="alm-radio-toggle-control alm-wrapper">
												<div class="alm-radio-toggle-switch alm-25"></div>
											</div>
										</div>
										<div class="alm-radio-option" data-term="yearly">yearly</div>
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-50 alm-md-33">
								<div class="alm-pricing-card alm-15">
									<div class="alm-pricing-card-image-container">
										<div class="alm-pricing-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-8-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
									</div>
									<div class="alm-pricing-card-content">
										<div class="alm-pricing-card-title">Jet Pack</div>
										<div class="alm-pricing-card-cost alm-wrapper">
											<div class="alm-pricing-card-amount" data-base="997">$<span>997</span></div>
											<div class="alm-pricing-card-length">/month</div>
										</div>
										<div class="alm-pricing-card-info">
											Best for companies who want to make first contact.
										</div>
										<div class="alm-pricing-card-list">
											<div class="alm-pricing-card-item active">Social Media Publishing & Monitoring</div>
											<div class="alm-pricing-card-item active">Follower Engagement</div>
											<div class="alm-pricing-card-item active">Monthly Social Calendar</div>
											<div class="alm-pricing-card-item active">Basic Social Analytics</div>
											<div class="alm-pricing-card-item">Social media marketing strategy</div>
											<div class="alm-pricing-card-item">Social Prospecting & Retargeting Ads</div>
											<div class="alm-pricing-card-item">Daily Optimizations</div>
											<div class="alm-pricing-card-item">Landing Pages</div>
											<div class="alm-pricing-card-item">SEO</div>
										</div>
										<div class="alm-pricing-card-btn alm-wrapper">get started</div>
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-50 alm-md-33">
								<div class="alm-pricing-card alm-15">
									<div class="alm-pricing-card-image-container">
										<div class="alm-pricing-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-8-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
									</div>
									<div class="alm-pricing-card-content">
										<div class="alm-pricing-card-title">Rocket</div>
										<div class="alm-pricing-card-cost alm-wrapper">
											<div class="alm-pricing-card-amount" data-base="1997">$<span>1997</span></div>
											<div class="alm-pricing-card-length">/month</div>
										</div>
										<div class="alm-pricing-card-info">
											Best for companies who are ready for an out of this world experience.
										</div>
										<div class="alm-pricing-card-list">
											<div class="alm-pricing-card-item active">Social Media Publishing & Monitoring</div>
											<div class="alm-pricing-card-item active">Follower Engagement</div>
											<div class="alm-pricing-card-item active">Monthly Social Calendar</div>
											<div class="alm-pricing-card-item active">Intermediate Social Analytics</div>
											<div class="alm-pricing-card-item active">Social media marketing strategy</div>
											<div class="alm-pricing-card-item active">Social Prospecting & Retargeting Ads</div>
											<div class="alm-pricing-card-item active">Weekly Optimizations</div>
											<div class="alm-pricing-card-item">Landing Pages</div>
											<div class="alm-pricing-card-item">SEO</div>
										</div>
										<div class="alm-pricing-card-btn alm-wrapper">get started</div>
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-50 alm-md-33">
								<div class="alm-pricing-card alm-15">
									<div class="alm-pricing-card-image-container">
										<div class="alm-pricing-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-8-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
									</div>
									<div class="alm-pricing-card-content">
										<div class="alm-pricing-card-title">Mothership</div>
										<div class="alm-pricing-card-cost alm-wrapper">
											<div class="alm-pricing-card-amount" data-base="3997">$<span>3997</span></div>
											<div class="alm-pricing-card-length">/month</div>
										</div>
										<div class="alm-pricing-card-info">
											Best for companies who are ready to be fully abducted and to take us to their leader.
										</div>
										<div class="alm-pricing-card-list">
											<div class="alm-pricing-card-item active">Social Media Publishing & Monitoring</div>
											<div class="alm-pricing-card-item active">Follower Engagement</div>
											<div class="alm-pricing-card-item active">Monthly Social Calendar</div>
											<div class="alm-pricing-card-item active">Advanced Social Analytics</div>
											<div class="alm-pricing-card-item active">Social media marketing strategy</div>
											<div class="alm-pricing-card-item active">Social Prospecting & Retargeting Ads</div>
											<div class="alm-pricing-card-item active">Daily Optimizations</div>
											<div class="alm-pricing-card-item active">Landing Pages</div>
											<div class="alm-pricing-card-item active">SEO</div>
										</div>
										<div class="alm-pricing-card-btn alm-wrapper">get started</div>
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-50 alm-md-33">
								<div class="alm-pricing-card alm-15">
									<div class="alm-pricing-card-image-container">
										<div class="alm-pricing-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-7-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
									</div>
									<div class="alm-pricing-card-content">
										<div class="alm-pricing-card-title">Mission Control</div>
										<div class="alm-pricing-card-cost alm-wrapper">
											<div class="alm-pricing-card-amount" data-base="3997">$<span>3997</span></div>
											<div class="alm-pricing-card-length">/month</div>
										</div>
										<div class="alm-pricing-card-info">
											Best for companies who are ready to be fully abducted and to take us to their leader.
										</div>
										<div class="alm-pricing-card-list">
											<div class="alm-pricing-card-item active">Social Media Publishing & Monitoring</div>
											<div class="alm-pricing-card-item active">Follower Engagement</div>
											<div class="alm-pricing-card-item active">Monthly Social Calendar</div>
											<div class="alm-pricing-card-item active">Advanced Social Analytics</div>
											<div class="alm-pricing-card-item active">Social media marketing strategy</div>
											<div class="alm-pricing-card-item active">Social Prospecting & Retargeting Ads</div>
											<div class="alm-pricing-card-item active">Daily Optimizations</div>
											<div class="alm-pricing-card-item active">Landing Pages</div>
											<div class="alm-pricing-card-item active">SEO</div>
										</div>
										<div class="alm-pricing-card-btn alm-wrapper">get started</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		block.append(content);
		jQuery('.alm-radio-option').on('click', function() {
			let item, term, swtch;
			item = jQuery(this);
			term = item.data('term');
			swtch = jQuery('.alm-radio-toggle-switch');
			switch(term) {
				case 'monthly':
					swtch.css({'left':'5px'});
				break;
				case 'yearly':
					swtch.css({'left':'25px'});
				break;
			}
			jQuery('.alm-pricing-card-amount').each(function() {
				let item, amount;
				item = jQuery(this);
				amount = item.data('base');
				if(term === 'monthly') {
					item.children('span').html(amount);
					item.siblings('.alm-pricing-card-length').html('/month');
				}
				else {
					item.children('span').html((amount*12 - (amount*12)*.20).toFixed());
					item.siblings('.alm-pricing-card-length').html('/year');
				}
			});
		});
	}

}