class Contact {

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
										Contact
									</div>
									<div class="alm-page-cover-subtitle">
										Hello earthings
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		// container.css({'background':'linear-gradient(-45deg, rgb(9, 177, 214), rgb(5, 98, 130))'});
		container.css({'background': 'linear-gradient(-45deg, rgb(245, 131, 66), rgb(247, 183, 51))'});
		setTimeout(function() {
			container.addClass('active');
		}, 1500);
	}

	content() {
		let container, content
		container = jQuery('.alm-section-content');
		content = 	`<div class="alm-hero-particle-js" id="alm-contact-particles-js"></div>
					<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-50">
								<div class="alm-hero-contact" style="box-shadow: none; margin: 0px;">
									<div class="alm-hero-contact-form">
										<div class="alm-hero-contact-item">
											<div class="alm-hero-contact-title">Name</div>
											<div class="alm-hero-contact-input">
												<input type="text" class="alm-hero-contact-value" placeholder="Barry Allen">
											</div>
										</div>
										<div class="alm-hero-contact-item">
											<div class="alm-hero-contact-title">Email</div>
											<div class="alm-hero-contact-input">
												<input type="text" class="alm-hero-contact-value" placeholder="barry@example.com">
											</div>
										</div>
										<div class="alm-hero-contact-item">
											<div class="alm-hero-contact-title">Phone</div>
											<div class="alm-hero-contact-input">
												<input type="text" class="alm-hero-contact-value" placeholder="(949) 999-9999">
											</div>
										</div>
										<div class="alm-hero-contact-item">
											<div class="alm-hero-contact-title">Message</div>
											<div class="alm-hero-contact-input">
												<textarea class="alm-hero-contact-value" placeholder="What's on your mind..."></textarea>
											</div>
										</div>
										<div class="alm-homepage-contact-btn alm-wrapper">
											submit
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		container.css({'background':'#fff'});
	}

}