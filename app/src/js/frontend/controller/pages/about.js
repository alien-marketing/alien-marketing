class About {

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
		let container, content, sections;
		container = jQuery('.alm-angled-sections');
		sections = ['cover','content'];
	    for (var i = 0; i < sections.length; i++) {
	    	content = 	`<div class="alm-section alm-angled-section alm-section-`+sections[i]+` alm-25"></div>`;
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
										About
									</div>
									<div class="alm-page-cover-subtitle">
										Who we are
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		container.css({'background': 'linear-gradient(-45deg, #F44336, #685ec5)'});
		setTimeout(function() {
			container.addClass('active');
		}, 1500);
	}

	content() {
		let container, content
		container = jQuery('.alm-section-content');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-50">
								<div class="alm-page-content">
									<div class="alm-page-text">
										Two marketers and a developer walk into a coffee shop... what walked out was something bigger than any of us could have imagined. Through our common love for <span style="color: #18bbaa">coffee + creativity</span>, we discovered that despite having corporate experience - we were each missing something in our careers and lives: using our powers for good. In other words, <span style="color: #bd4e71">helping businesses truly grow.</span> For us, there's nothing greater than helping a local business or entrepreneur grow to see their dreams come true. You have the idea, we're just here to make sure its as successful as you want it to be.
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

}