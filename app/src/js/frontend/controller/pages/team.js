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
		setTimeout(function() {
			container.addClass('active');
		}, 1500);
	}

	content() {
		let container, content
		container = jQuery('.alm-section-content');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-75">
								<div class="alm-page-content">
									<div class="alm-team-page-container alm-wrapper">
										<div class="alm-xs-100 alm-sm-50 alm-md-33">
											<div class="alm-team-member">
												<div class="alm-team-member-image"></div>
												<div class="alm-team-member-info">
													<div class="alm-team-member-name alm-wrapper">sarah wilson</div>
													<div class="alm-team-member-position alm-wrapper">Founder</div>
													<div class="alm-team-member-socials alm-wrapper">
														<div class="alm-team-member-social alm-wrapper">
															<span class="fa fa-instagram"></span>
														</div>
														<div class="alm-team-member-social alm-wrapper">
															<span class="fa fa-facebook"></span>
														</div>
														<div class="alm-team-member-social alm-wrapper">
															<span class="fa fa-twitter"></span>
														</div>
														<div class="alm-team-member-social alm-wrapper">
															<span class="fa fa-linkedin"></span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="alm-xs-100 alm-sm-50 alm-md-33">
											<div class="alm-team-member">
												<div class="alm-team-member-image"></div>
												<div class="alm-team-member-info">
													<div class="alm-team-member-name alm-wrapper">larry nelson</div>
													<div class="alm-team-member-position alm-wrapper">Founder</div>
													<div class="alm-team-member-socials alm-wrapper">
														<div class="alm-team-member-social alm-wrapper">
															<span class="fa fa-instagram"></span>
														</div>
														<div class="alm-team-member-social alm-wrapper">
															<span class="fa fa-facebook"></span>
														</div>
														<div class="alm-team-member-social alm-wrapper">
															<span class="fa fa-twitter"></span>
														</div>
														<div class="alm-team-member-social alm-wrapper">
															<span class="fa fa-linkedin"></span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="alm-xs-100 alm-sm-50 alm-md-33">
											<div class="alm-team-member">
												<div class="alm-team-member-image"></div>
												<div class="alm-team-member-info">
													<div class="alm-team-member-name alm-wrapper">mathew maione</div>
													<div class="alm-team-member-position alm-wrapper">Developer</div>
													<div class="alm-team-member-socials alm-wrapper">
														<div class="alm-team-member-social alm-wrapper">
															<span class="fa fa-instagram"></span>
														</div>
														<div class="alm-team-member-social alm-wrapper">
															<span class="fa fa-twitter"></span>
														</div>
														<div class="alm-team-member-social alm-wrapper">
															<span class="fa fa-github"></span>
														</div>
														<div class="alm-team-member-social alm-wrapper">
															<span class="fa fa-linkedin"></span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

}