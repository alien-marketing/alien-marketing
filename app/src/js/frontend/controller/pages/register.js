class Register {

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
										Register
									</div>
									<div class="alm-page-cover-subtitle">
										Join us
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		// container.css({'background':'linear-gradient(to right, #4CAF50, #8BC34A)'});
		setTimeout(function() {
			container.addClass('active');
		}, 1500);
	}

	content() {
		let container, content
		container = jQuery('.alm-section-content');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-100 alm-md-50 alm-lg-50">
								<div class="alm-page-content">
									<div class="alm-page-form">
										<!-- first name -->
										<div class="alm-page-form-item">
											<div class="alm-page-form-title">first name</div>
											<div class="alm-page-form-input">
												<input type="text" class="alm-page-form-value" data-min="2" data-max="18" data-type="first_name" placeholder="Barry" autocomplete="off">
											</div>
										</div>
										<!-- last name -->
										<div class="alm-page-form-item">
											<div class="alm-page-form-title">last name</div>
											<div class="alm-page-form-input">
												<input type="text" class="alm-page-form-value" data-min="2" data-max="18" data-type="last_name" placeholder="Allen" autocomplete="off">
											</div>
										</div>
										<!-- email -->
										<div class="alm-page-form-item">
											<div class="alm-page-form-title">email</div>
											<div class="alm-page-form-input">
												<input type="email" class="alm-page-form-value" data-min="5" data-max="60" data-type="email" placeholder="me@example.com" autocomplete="off">
											</div>
										</div>
										<!-- phone -->
										<div class="alm-page-form-item ng-scope" ng-app="almApp">
											<div class="alm-page-form-title">phone</div>
											<div class="alm-page-form-input ng-scope" ng-controller="almCtrl">
												<input type="text" class="alm-page-form-value input-phone ng-pristine ng-untouched ng-valid" data-min="14" data-max="14" data-type="phone" phone-input="" ng-model="phoneVal" placeholder="(808) 955-9821" autocomplete="off" data-value="">
											</div>
										</div>
										<!-- password -->
										<div class="alm-page-form-item">
											<div class="alm-page-form-title">password</div>
											<div class="alm-page-form-input">
												<input type="password" class="alm-page-form-value" data-min="8" data-max="20" data-type="password" placeholder="••••••••" autocomplete="off">
											</div>
										</div>
										<!-- password confirm -->
										<div class="alm-page-form-item">
											<div class="alm-page-form-title">password confirm</div>
											<div class="alm-page-form-input">
												<input type="password" class="alm-page-form-value" data-min="8" data-max="20" data-type="password_confirm" placeholder="••••••••" autocomplete="off">
											</div>
										</div>
										<!-- register button -->
										<div class="alm-page-form-item" align="right">
											<div class="alm-page-form-btn alm-page-form-register alm-wrapper">register</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.css({'background':'#fff'});
		container.append(content);
	}

}