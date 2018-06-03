class Home {

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
				'title':'hero',
				'type':'gradient',
				'layout':'normal',
				'style':'background: linear-gradient(-45deg, #00ac53, #23c3e0);'
			},
			{
				'title':'services',
				'type':'normal',
				'layout':'inverse',
				'style':'background: #fff'
			},
			{
				'title':'about',
				'type':'gradient',
				'layout':'normal',
				'style':'background: linear-gradient(-45deg, #F44336, #685ec5);'
			},
			{
				'title':'blog',
				'type':'normal',
				'layout':'inverse',
				'style':'background: #fff'
			},
			{
				'title':'contact',
				'type':'gradient',
				'layout':'normal',
				'style':'background: linear-gradient(-45deg, rgb(245, 131, 66), rgb(247, 183, 51));'
				// background: linear-gradient(-45deg, rgb(189, 78, 14), rgb(255, 205, 102));
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
	    this.hero();
	    this.services();
	    this.about();
	    this.blog();
	    this.contact();
	}

	hero() {
		let container, block, content, today, api = new API();
		container = jQuery('.alm-section-hero');
		content = 	`<div class="alm-hero-particle-js" id="particles-js"></div>
					<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-50 alm-angled-section-title">
								<div class="alm-page-content">
									<div class="alm-hero-title">
										We love marketing
									</div>
									<div class="alm-hero-text">
										For us, there's nothing greater than helping a <span>local business</span> or <span>entrepreneur</span> grow to see their dreams come true. You have the idea, we're just here to help make it as successful as you want it to be.
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-50 alm-angled-section-content">
								<div class="alm-hero-contact">
									<div class="alm-hero-contact-text">
										Sign up to receive a <span>free</span> website + social media analysis
									</div>
									<div class="alm-hero-contact-form">
										<div class="alm-hero-contact-form-section active">
											<div class="alm-hero-contact-item">
												<div class="alm-hero-contact-title">Name*</div>
												<div class="alm-hero-contact-input">
													<input type="text" class="alm-hero-contact-value" data-min="" data-max="" data-type="name" placeholder="Barry Alien">
												</div>
											</div>
											<div class="alm-hero-contact-item">
												<div class="alm-hero-contact-title">Email*</div>
												<div class="alm-hero-contact-input">
													<input type="text" class="alm-hero-contact-value" data-min="" data-max="" data-type="email" placeholder="barry@example.com">
												</div>
											</div>
											<div class="alm-hero-contact-item">
												<div class="alm-hero-contact-title">Phone*</div>
												<div class="alm-hero-contact-input">
													<input type="text" class="alm-hero-contact-value alm-phone-mask" data-min="14" data-max="14" data-type="phone" placeholder="(949) 999-9999" autocomplete="off" />
												</div>
											</div>
											<div class="alm-hero-contact-item">
												<div class="alm-hero-contact-title">Website</div>
												<div class="alm-hero-contact-input">
													<input type="text" class="alm-hero-contact-value" data-min="" data-max="" data-type="website" placeholder="http://www.alien.marketing">
												</div>
											</div>
										</div>
										<div class="alm-hero-contact-form-section">
											<div class="alm-hero-contact-item">
												<div class="alm-hero-contact-title">Company*</div>
												<div class="alm-hero-contact-input">
													<input type="text" class="alm-hero-contact-value" data-min="" data-max="" data-type="company" placeholder="Alien Inc.">
												</div>
											</div>
											<div class="alm-hero-contact-item">
												<div class="alm-hero-contact-title">Industry*</div>
												<div class="alm-hero-contact-input">
													<input type="text" class="alm-hero-contact-value" data-min="" data-max="" data-type="industry" placeholder="Software">
												</div>
											</div>
											<div class="alm-hero-contact-item">
												<div class="alm-hero-contact-title">Budget*</div>
												<div class="alm-hero-contact-input">
													<input type="text" class="alm-hero-contact-value" data-min="" data-max="" data-type="budget" placeholder="$2,000 /month">
												</div>
											</div>
											<div class="alm-hero-contact-item">
												<div class="alm-hero-contact-title">Desired Meeting*</div>
												<div class="input-group date" id="alm-hero-contact-datetimepicker">
													<div class="input-group-addon">
									                	<input type="text" class="form-control alm-hero-contact-value" data-min="" data-max="" data-type="date" data-format="dd/MM/yyyy hh:mm:ss" placeholder="June 1st, 2018" />
									                </div>
									            </div>
											</div>
										</div>
										<div class="alm-hero-contact-btn alm-wrapper">
											continue
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		jQuery('.alm-phone-mask').mask('(000) 000-0000');
		// particlesJS("particles-js", {"particles":{"number":{"value":175,"density":{"enable":true,"value_area":2164.606282168456}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#fff"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.49705773886831206,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#fff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
		today = moment().format('MMMM Do YYYY, h:mm A');
		jQuery('#alm-hero-contact-datetimepicker input').attr('placeholder',today);
		jQuery('#alm-hero-contact-datetimepicker').datetimepicker({
            format: 'MMMM Do YYYY, h:mm A',
		});

		jQuery('.alm-hero-contact-btn').on('click', function() {
			let obj = {}, error = [];
			jQuery('.alm-section-hero .alm-hero-contact-value').each(function() {
				let item, value, type;
				item = jQuery(this);
				value = item.val();
				type = item.data('type');
				if(!value) {
					error[type] = 'Error: '+type+' is missing value';
				}
				obj[type] = value;
			});
			console.log(obj);
			console.log(error);
			if(error.name || error.email || error.phone || error.website) {
				console.log('missing values');
			}
			else {
				jQuery('.alm-hero-contact-form-section').removeClass('active');
				jQuery('.alm-hero-contact-form-section:nth-child(2)').addClass('active');
			}
		});

	}

	about() {
		let container, block, content;
		container = jQuery('.alm-section-about');
		content = 	`<div class="alm-hero-particle-js" id="alm-about-particles-js"></div>
					<div class="alm-angled-section-wrapper alm-container" style="color: #fff;">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-30 alm-angled-section-title">
								<div class="alm-page-content">
									<div class="alm-page-title">
										Who <br> we are
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-70 alm-angled-section-content">
								<div class="alm-page-content">
									<div class="alm-page-text">
										Two marketers and a developer walk into a coffee shop... what walked out was something bigger than any of us could have imagined. Through our common love for <span>coffee + creativity</span>, we discovered that despite having corporate experience - we were each missing something in our careers and lives: using our powers for good. In other words, <span>helping businesses truly grow.</span> For us, there's nothing greater than helping a local business or entrepreneur grow to see their dreams come true. Reach for the stars! Because in this day and age anything is possible.
										<br>
										<br>
										<a href="team.html">
											<div class="alm-page-btn alm-wrapper">Meet the team!</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		// particlesJS("alm-about-particles-js", {"particles":{"number":{"value":175,"density":{"enable":true,"value_area":2164.606282168456}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#fff"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.49705773886831206,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#fff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
	}

	services() {
		let container, block, content, obj, string, api = new API();
		obj = [
			{
				'title':'Social Media Management',
				'icon':'https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-2-512.png',
				'content':'Did you know that 90% of all marketers say social media marketing has increased their business exposure? Or that 66% of marketers that spend at least 6 hours on social per week have seen more leads? (Source: Content Factory). In this day and age, properly managing multiple social channels is key to driving business. Whether it’s organic or paid, social media is all about grabbing the attention of your target audience, and driving them to your website or landing page. Alien Marketing will put in extra terrestrial hours to establish your brands social presence,   deliver relevant content to your target audiences, and drive the right traffic to your website or landing page.',
				'link':'',
			},
			{
				'title':'SEO & SEM',
				'icon':'https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-5-512.png',
				'content':'Search engine optimization (SEO) allows your business to be discovered by those searching for what you offer. Sounds easy right? Then why do so many companies fail to properly attain this? It’s because SEO is a moving target. Search engines are constantly changing and evolving, making it difficult for businesses to keep up. Which is why you need Alien Marketing’s help - we’ll ensure your website ranks high in search engines and use our intergalactic knowledge to increase the visibility of your site to lead to a higher ranking in search engine results.',
				'link':'',
			},
			{
				'title':'Web Design & Development',
				'icon':'https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-8-512.png',
				'content':'If marketing were a baseball game, then your website would be the home base. It’s the one thing that all of your online efforts circle back to. Having a strong website not only boosts credibility but helps you stand out from competitors. We will design and develop a comprehensive website that is both beautiful and functional.',
				'link':'',
			},
			{
				'title':'Reporting & Analytics',
				'icon':'https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-19-512.png',
				'content':'We like to think of reporting & analytics as the mothership. It’s the big thing that holds together all the important stuff. And we get it - graphs and numbers can be confusing. Which is why Alien Marketing makes it easy for you to stay up-to-date with your social media and web performance with our Custom Analytics Dashboard to help determine what\'s working and what isn\'t. We offer monthly, weekly, and even daily analytic reports that break down your digital performance with tips on how to optimize.',
				'link':'',
			},
			{
				'title':'Social Listening',
				'icon':'https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-1-512.png',
				'content':'Here’s a fun question - who controls your brand’s reputation? The answer: your (current & potential) customers! Now, what if you could have an ear across the entire galaxy and know exactly what your clients and customers are saying about you + have the ability to fix things? Well, now you can. Alien Marketing has the power to monitor digital conversations across the internet to understand what people are saying about your brand so that you can make optimizations to help improve brand reputation.',
				'link':'',
			},
			{
				'title':'Email & SMS Marketing',
				'icon':'https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-9-512.png',
				'content':'According to Radicati Group, more than 3.7 billion people worldwide use email. That’s almost 54% of the world’s population! Proving that email is still one of the best ways to keep in touch with your customer. However, there’s a lot of noise out there. So how can you ensure your business stands out from the myriad of other messages hitting your target audience’s inbox? Having the right content, design and cadence can make the world of difference. So why not leave it to the experts? Still not convinced that email marketing is the way to go? Then try SMS marketing. It’s a sure fire way to keep your business top-of-mind by reaching your audience directly on their phones.',
				'link':'',
			}
		];
		string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
		container = jQuery('.alm-section-services');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-75 alm-angled-section-content">
								<div class="alm-services-carousel owl-carousel owl-theme"></div>
							</div>
							<div class="alm-xs-100 alm-sm-25 alm-angled-section-title">
								<div class="alm-page-content">
									<div class="alm-page-title">
										Our services
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		for (var i = 0; i < obj.length; i++) {
			let data, slide;
			data = obj[i];
			slide = `<div class="item">
						<div class="alm-services-card alm-15">
							<div class="alm-services-card-image-container">
								<div class="alm-services-card-image" style="background: url(`+data.icon+`); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
							</div>
							<div class="alm-services-card-content">
								<div class="alm-services-card-title">`+data.title+`</div>
								<div class="alm-services-card-text">`+api.trimContent(data.content, 90)+`</div>
								<div class="alm-services-card-btn alm-wrapper">learn more</div>
							</div>
						</div>
					</div>`;
			jQuery('.alm-services-carousel').append(slide);
		}
		jQuery('.alm-services-carousel').owlCarousel({
		    loop: true,
		    margin: 0,
		    nav: true,
		    dots: false,
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

	blog() {
		let container, block, content;
		container = jQuery('.alm-section-blog');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-75 alm-angled-section-content">
								<div class="alm-stories-carousel owl-carousel owl-theme">
									<div class="item">
										<div class="alm-stories-card alm-15">
											<div class="alm-stories-card-image-container">
												<div class="alm-stories-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-2-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-stories-card-content">
												<div class="alm-stories-card-title">Social Media Management</div>
												<div class="alm-stories-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-stories-card-btn alm-wrapper">read more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-stories-card alm-15">
											<div class="alm-stories-card-image-container">
												<div class="alm-stories-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-5-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-stories-card-content">
												<div class="alm-stories-card-title">SEO & SEM</div>
												<div class="alm-stories-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-stories-card-btn alm-wrapper">read more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-stories-card alm-15">
											<div class="alm-stories-card-image-container">
												<div class="alm-stories-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-8-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-stories-card-content">
												<div class="alm-stories-card-title">Web Design & Development</div>
												<div class="alm-stories-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-stories-card-btn alm-wrapper">read more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-stories-card alm-15">
											<div class="alm-stories-card-image-container">
												<div class="alm-stories-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-19-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-stories-card-content">
												<div class="alm-stories-card-title">Reporting & Analytics</div>
												<div class="alm-stories-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-stories-card-btn alm-wrapper">read more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-stories-card alm-15">
											<div class="alm-stories-card-image-container">
												<div class="alm-stories-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-1-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-stories-card-content">
												<div class="alm-stories-card-title">Social Listening</div>
												<div class="alm-stories-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-stories-card-btn alm-wrapper">read more</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-stories-card alm-15">
											<div class="alm-stories-card-image-container">
												<div class="alm-stories-card-image" style="background: url(https://cdn4.iconfinder.com/data/icons/space-exploration-set/128/iStar_Design_Space_LineIcons_Live-9-512.png); background-size: contain; background-position: center center; background-repeat: no-repeat;"></div>
											</div>
											<div class="alm-stories-card-content">
												<div class="alm-stories-card-title">Email & SMS Marketing</div>
												<div class="alm-stories-card-text">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
												</div>
												<div class="alm-stories-card-btn alm-wrapper">read more</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-25 alm-angled-section-title">
								<div class="alm-page-content">
									<div class="alm-page-title">
										Our Stories
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		jQuery('.alm-stories-carousel').owlCarousel({
		    loop: true,
		    margin: 0,
		    nav: true,
		    dots: false,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
		    responsive:{
		        0:{ items:1 },
		        1000:{ items:2 }
		    }
		});
	}

	contact() {
		let container, block, content;
		container = jQuery('.alm-section-contact');
		content = 	`<div class="alm-hero-particle-js" id="alm-contact-particles-js"></div>
					<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-50 alm-angled-section-content">
								<div class="alm-hero-contact">
									<div class="alm-hero-contact-text">
										Let's make contact
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
		// particlesJS("alm-contact-particles-js", {"particles":{"number":{"value":175,"density":{"enable":true,"value_area":2164.606282168456}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#fff"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.49705773886831206,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#fff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
	}

}