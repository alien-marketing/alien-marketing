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
		sections = ['hero','about','services','pricing','contact'];
	    for (var i = 0; i < sections.length; i++) {
	    	content = 	`<div class="alm-section alm-angled-section alm-section-`+sections[i]+`"></div>`;
	    	container.append(content);
	    }
	    this.hero();
	    this.about();
	    this.services();
	    this.pricing();
	    this.contact();
	}

	hero() {
		let container, content;
		container = jQuery('.alm-section-hero');
		content = 	`<div class="alm-hero-particle-js" id="particles-js"></div>
					<div class="alm-angled-section-wrapper alm-container" style="margin-top: 50px;">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-50">
								<div class="alm-page-content">
									<div class="alm-hero-title">
										We love marketing
									</div>
									<div class="alm-hero-text">
										For us, there's nothing greater than helping a <span>local business</span> or <span>entrepreneur</span> grow to see their dreams come true. Reach for the stars! Because in this day and age anything is possible.
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-50">
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
		particlesJS("particles-js", {"particles":{"number":{"value":175,"density":{"enable":true,"value_area":2164.606282168456}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#fff"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.49705773886831206,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#fff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
	}

	about() {
		let container, content;
		container = jQuery('.alm-section-about');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-30">
								<div class="alm-page-content">
									<div class="alm-page-title">
										About us
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-70">
								<div class="alm-page-content">
									<div class="alm-page-text">
										A marketer, a designer and a developer walk into a Starbucks... what walked out what something bigger than any of us could have imagined. Through our common love for <span style="color: #18bbaa">coffee + creativity</span>, we discovered that despite having corporate experience - we were each missing something in our careers and lives: using our powers for good. In other word, <span style="color: #bd4e71">helping businesses truly grow.</span> For us, there's nothing greater than helping a local business or entrepreneur grow to see their dreams come true. You have the idea, we're just here to make sure its as successful as you want it to be.
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
							<div class="alm-xs-100 alm-sm-75">
								<div class="alm-services-carousel owl-carousel owl-theme">
									<div class="item">
										<div class="alm-services-card alm-15">
											<div class="alm-services-card-image-container">
												<div class="alm-services-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-2-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-services-card-content">
												<div class="alm-services-card-title">Social Media Management</div>
												<div class="alm-services-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-services-card-btn alm-wrapper">learn more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-services-card alm-15">
											<div class="alm-services-card-image-container">
												<div class="alm-services-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-5-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-services-card-content">
												<div class="alm-services-card-title">SEO & SEM</div>
												<div class="alm-services-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-services-card-btn alm-wrapper">learn more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-services-card alm-15">
											<div class="alm-services-card-image-container">
												<div class="alm-services-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-8-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-services-card-content">
												<div class="alm-services-card-title">Web Design & Development</div>
												<div class="alm-services-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-services-card-btn alm-wrapper">learn more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-services-card alm-15">
											<div class="alm-services-card-image-container">
												<div class="alm-services-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-19-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-services-card-content">
												<div class="alm-services-card-title">Reporting & Analytics</div>
												<div class="alm-services-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-services-card-btn alm-wrapper">learn more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-services-card alm-15">
											<div class="alm-services-card-image-container">
												<div class="alm-services-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-1-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-services-card-content">
												<div class="alm-services-card-title">Social Listening</div>
												<div class="alm-services-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-services-card-btn alm-wrapper">learn more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-services-card alm-15">
											<div class="alm-services-card-image-container">
												<div class="alm-services-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-9-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-services-card-content">
												<div class="alm-services-card-title">Email & SMS Marketing</div>
												<div class="alm-services-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-services-card-btn alm-wrapper">learn more</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-25">
								<div class="alm-page-content">
									<div class="alm-page-title" style="color: #fff; margin: 0px; margin-left: 80px;">
										Our services
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		jQuery('.alm-services-carousel').owlCarousel({
		    loop: true,
		    margin: 0,
		    nav: false,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
		    responsive:{
		        0:{ items:1 },
		        600:{ items:2 },
		        1000:{ items:3 }
		    }
		});
	}

	pricing() {
		let container, content;
		container = jQuery('.alm-section-pricing');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-25">
								<div class="alm-page-content">
									<div class="alm-page-title">
										Our Stories
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-75">
								<div class="alm-services-carousel owl-carousel owl-theme">
									<div class="item">
										<div class="alm-services-card alm-15">
											<div class="alm-services-card-image-container">
												<div class="alm-services-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-2-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-services-card-content">
												<div class="alm-services-card-title">Social Media Management</div>
												<div class="alm-services-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-services-card-btn alm-wrapper">learn more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-services-card alm-15">
											<div class="alm-services-card-image-container">
												<div class="alm-services-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-5-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-services-card-content">
												<div class="alm-services-card-title">SEO & SEM</div>
												<div class="alm-services-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-services-card-btn alm-wrapper">learn more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-services-card alm-15">
											<div class="alm-services-card-image-container">
												<div class="alm-services-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-8-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-services-card-content">
												<div class="alm-services-card-title">Web Design & Development</div>
												<div class="alm-services-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-services-card-btn alm-wrapper">learn more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-services-card alm-15">
											<div class="alm-services-card-image-container">
												<div class="alm-services-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-19-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-services-card-content">
												<div class="alm-services-card-title">Reporting & Analytics</div>
												<div class="alm-services-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-services-card-btn alm-wrapper">learn more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-services-card alm-15">
											<div class="alm-services-card-image-container">
												<div class="alm-services-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-1-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-services-card-content">
												<div class="alm-services-card-title">Social Listening</div>
												<div class="alm-services-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-services-card-btn alm-wrapper">learn more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-services-card alm-15">
											<div class="alm-services-card-image-container">
												<div class="alm-services-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-9-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-services-card-content">
												<div class="alm-services-card-title">Email & SMS Marketing</div>
												<div class="alm-services-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-services-card-btn alm-wrapper">learn more</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		jQuery('.alm-services-carousel').owlCarousel({
		    loop: true,
		    margin: 0,
		    nav: false,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
		    responsive:{
		        0:{ items:1 },
		        600:{ items:2 },
		        1000:{ items:3 }
		    }
		});
	}

	contact() {
		let container, content;
		container = jQuery('.alm-section-contact');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-75">
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