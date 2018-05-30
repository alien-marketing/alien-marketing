class Home {

	init() {
		this.container = jQuery('.alm-page');
		this.template();
	}

	template() {
		let container, content;
		container = this.container;
		content = '<div class="alm-angled-sections"></div>'
		container.html(content);
		this.sections();
	}

	sections() {
		let container, content, sections;
		container = jQuery('.alm-angled-sections');
		sections = ['hero','about','services','portfolio','contact'];
	    for (var i = 0; i < sections.length; i++) {
	    	content = 	`<div class="alm-section alm-angled-section alm-section-`+sections[i]+`"></div>`;
	    	container.append(content);
	    	eval('this.'+sections[i]+'();');
	    }
	}

	hero() {
		let container, content;
		container = jQuery('.alm-section-hero');
		content = 	`<div class="alm-angled-section-wrapper alm-container" style="margin-top: 50px;">
						<div class="alm-wrapper">
							<div class="alm-sm-50">
								<div class="alm-page-content">
									<div class="alm-hero-title">
										We love marketing
									</div>
									<div class="alm-hero-text">
										For us, there's nothing greater than helping a <span>local business</span> or <span>entrepreneur</span> grow to see their dreams come true. Reach for the stars! Because in this day and age anything is possible.
									</div>
								</div>
							</div>
							<div class="alm-sm-50">
								<div class="alm-hero-contact">
									<div class="alm-hero-contact-text">
										Sign up for a free marketing consultation
									</div>
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
											<div class="alm-hero-contact-title">Website <span>(optional)</span></div>
											<div class="alm-hero-contact-input">
												<input type="text" class="alm-hero-contact-value" placeholder="http://www.alien.marketing">
											</div>
										</div>
										<div class="alm-hero-contact-btn alm-wrapper">
											submit
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

	about() {
		let container, content;
		container = jQuery('.alm-section-about');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-sm-30">
								<div class="alm-page-content">
									<div class="alm-page-title">
										About us
									</div>
								</div>
							</div>
							<div class="alm-sm-70">
								<div class="alm-page-content">
									<div class="alm-page-text">
										A marketer, a designer and a developer walk into a Starbucks... what walked out what something bigger than any of us could have imagined. Through our common love for coffee and creativity, we discovered that despite having corporate experience - we were each missing something in our careers and lives: using our powers for good. In other word, helping businesses truly grow. For us, there's nothing greater than helping a local business or entrepreneur grow to see their dreams come true. Reach for the stars! Because in this day and age anything is possible. You have the idea, we're just here to make sure its as successful as you want it to be.
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

	services() {
		let container, content;
		container = jQuery('.alm-section-services');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-sm-25">
								<div class="alm-services-card">
									<div class="alm-services-card-image"></div>
									<div class="alm-services-card-content">
										text
									</div>
								</div>
							</div>
							<div class="alm-sm-25">
								<div class="alm-services-card">
									<div class="alm-services-card-image"></div>
									<div class="alm-services-card-content">
										text
									</div>
								</div>
							</div>
							<div class="alm-sm-25">
								<div class="alm-services-card">
									<div class="alm-services-card-image"></div>
									<div class="alm-services-card-content">
										text
									</div>
								</div>
							</div>
							<div class="alm-sm-25">
								<div class="alm-services-card">
									<div class="alm-services-card-image"></div>
									<div class="alm-services-card-content">
										text
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

	portfolio() {
		let container, content;
		container = jQuery('.alm-section-portfolio');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-sm-75">
								<div class="alm-page-content">
									<div class="alm-page-text">
										text
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

	contact() {
		let container, content;
		container = jQuery('.alm-section-contact');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-sm-75">
								<div class="alm-page-content">
									<div class="alm-page-text">
										text
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

}