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
		let container, block, content, today, formData, qstn = new Qstn(), api = new API(), config = new Config();
		container = jQuery('.alm-section-hero');
		content = 	`<div class="alm-hero-particle-js" id="particles-js"></div>
					<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-50 alm-angled-section-title">
								<div class="alm-page-content">
									<div class="alm-hero-title">
										We love <br>
										<span id="alm-hero-title"></span>
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
									<div class="alm-hero-contact-form"></div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);

		var app = document.getElementById('alm-hero-title');
		var typewriter = new Typewriter(app, {
		    loop: true
		});

		typewriter.typeString('marketing!')
		    .pauseFor(2500)
		    .deleteAll()
		    .typeString('creating!')
		    .pauseFor(2500)
		    .deleteAll()
		    .typeString('socializing!')
		    .pauseFor(1500)
		    .start();

		formData = {
			"id":"alm-hero-contact-form",
			"name":"signup",
			"sections":[
				{
					"title":"section 1",
					"fields":[
						{
							"title":"name",
							"placeholder":"Barry Alien",
							"params":{
								"type":"text",
								"set":"name",
								"min":"3",
								"max":"36",
								"required":true
							},
							"class":{
								"item":"",
								"parent":""
							}
						},
						{
							"title":"email",
							"placeholder":"barry@example.com",
							"params":{
								"type":"text",
								"set":"email",
								"min":"5",
								"max":"90",
								"required":true
							},
							"class":{
								"item":"",
								"parent":""
							}
						},
						{
							"title":"phone",
							"placeholder":"(949) 999-9999",
							"params":{
								"type":"text",
								"set":"phone",
								"min":"14",
								"max":"14",
								"required":true
							},
							"class":{
								"item":"qstn-form-phone-mask",
								"parent":""
							}
						},
						{
							"title":"website",
							"placeholder":"https://www.alien.marketing",
							"params":{
								"type":"text",
								"set":"website",
								"min":"3",
								"max":"90",
								"required":false
							},
							"class":{
								"item":"",
								"parent":""
							}
						}
					]
				},
				{
					"title":"section 2",
					"fields":[
						{
							"title":"company",
							"placeholder":"Alien Inc.",
							"params":{
								"type":"text",
								"set":"company",
								"min":"3",
								"max":"36",
								"required":true
							},
							"class":{
								"item":"",
								"parent":""
							}
						},
						{
							"title":"industry",
							"placeholder":"",
							"params":{
								"type":"select",
								"set":"industry",
								"options":[{"title":"aerospace","value":"aerospace"},{"title":"agribusiness","value":"agribusiness"},{"title":"arms","value":"arms"},{"title":"automotive","value":"automotive"},{"title":"broadcasting","value":"broadcasting"},{"title":"chemical","value":"chemical"},{"title":"computer","value":"computer"},{"title":"construction","value":"construction"},{"title":"defense","value":"defense"},{"title":"education","value":"education"},{"title":"electrical power","value":"electrical-power"},{"title":"electronics","value":"electronics"},{"title":"energy","value":"energy"},{"title":"entertainment","value":"entertainment"},{"title":"film","value":"film"},{"title":"financial services","value":"financial-services"},{"title":"fishing","value":"fishing"},{"title":"food","value":"food"},{"title":"fruit production","value":"fruit-production"},{"title":"health care","value":"health-care"},{"title":"hospitality","value":"hospitality"},{"title":"information","value":"information"},{"title":"insurance","value":"insurance"},{"title":"internet","value":"internet"},{"title":"manufacturing","value":"manufacturing"},{"title":"mass media","value":"mass-media"},{"title":"mining","value":"mining"},{"title":"music","value":"music"},{"title":"news media","value":"news-media"},{"title":"petroleum","value":"petroleum"},{"title":"pharmaceutical","value":"pharmaceutical"},{"title":"private military company","value":"private-military-company"},{"title":"private security company","value":"private-security-company"},{"title":"public utility","value":"public-utility"},{"title":"publishing","value":"publishing"},{"title":"pulp and paper","value":"pulp-and-paper"},{"title":"real estate","value":"real-estate"},{"title":"shipbuilding","value":"shipbuilding"},{"title":"software","value":"software"},{"title":"steel","value":"steel"},{"title":"technology","value":"technology"},{"title":"telecommunications","value":"telecommunications"},{"title":"timber","value":"timber"},{"title":"tobacco","value":"tobacco"},{"title":"transport","value":"transport"},{"title":"water","value":"water"},{"title":"world wide web","value":"world-wide-web"}],
								"required":true
							},
							"class":{
								"item":"",
								"parent":""
							}
						},
						{
							"title":"budget",
							"placeholder":"",
							"params":{
								"type":"select",
								"set":"budget",
								"options":[{"title":"$0 - $500 /month","value":"0-500"},{"title":"$500 - $1000 /month","value":"500-1000"},{"title":"$1000 - $2500 /month","value":"1000-2500"},{"title":"$2500+ /month","value":"2500+"}],
								"required":true
							},
							"class":{
								"item":"",
								"parent":""
							}
						},
						{
							"title":"desired meeting",
							"placeholder":"",
							"params":{
								"type":"datetime",
								"set":"datetime",
								"min":"10",
								"max":"60",
								"required":true
							},
							"class":{
								"item":"",
								"parent":""
							}
						}
					]
				}
			],
			"submit":{
				"button":{
					"states":{
						"prev":{
							"title":"back"
						},
						"next":{
							"title":"continue"
						},
						"finish":{
							"title":"submit"
						}
					},
					"class":"",
					"style":"background:#8660d9;color: #fff;"
				},
				"message":"thank you for signing up!"
			},
			"ajax":{
				"url":""
			}
		};
		qstn.build(formData);
		// particlesJS("particles-js", {"particles":{"number":{"value":175,"density":{"enable":true,"value_area":2164.606282168456}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#fff"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.49705773886831206,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#fff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
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
		        1200:{ items:3 }
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
												<div class="alm-stories-card-image" style="background: url(https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260); background-size: cover; background-position: center center;"></div>
												<div class="alm-stories-card-overlay">
													<div class="alm-stories-card-title">10 Reasons to hire a marketing agency</div>
												</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-stories-card alm-15">
											<div class="alm-stories-card-image-container">
												<div class="alm-stories-card-image" style="background: url(https://images.pexels.com/photos/7357/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260); background-size: cover; background-position: center center;"></div>
												<div class="alm-stories-card-overlay">
													<div class="alm-stories-card-title">How to create an organic following</div>
												</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-stories-card alm-15">
											<div class="alm-stories-card-image-container">
												<div class="alm-stories-card-image" style="background: url(https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260); background-size: cover; background-position: center center;"></div>
												<div class="alm-stories-card-overlay">
													<div class="alm-stories-card-title">Instagram is the new Facebook</div>
												</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="alm-stories-card alm-15">
											<div class="alm-stories-card-image-container">
												<div class="alm-stories-card-image" style="background: url(https://images.pexels.com/photos/7357/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260); background-size: cover; background-position: center center;"></div>
												<div class="alm-stories-card-overlay">
													<div class="alm-stories-card-title">How to get started with Google Analytics</div>
												</div>
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
		        1500:{ items:2 }
		    }
		});
	}

	contact() {
		let container, block, content, formData, qstn = new Qstn;
		container = jQuery('.alm-section-contact');
		content = 	`<div class="alm-hero-particle-js" id="alm-contact-particles-js"></div>
					<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-75 alm-md-60 alm-lg-50 alm-angled-section-content">
								<div class="alm-hero-contact">
									<div class="alm-hero-contact-text">
										Let's make contact
									</div>
									<div class="alm-contact-form"></div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);

		formData = {
			"id":"alm-contact-form",
			"name":"signup",
			"sections":[
				{
					"title":"section 1",
					"fields":[
						{
							"title":"name",
							"placeholder":"Barry Alien",
							"params":{
								"type":"text",
								"set":"name",
								"min":"3",
								"max":"36",
								"required":true
							},
							"class":{
								"item":"",
								"parent":""
							}
						},
						{
							"title":"email",
							"placeholder":"barry@example.com",
							"params":{
								"type":"text",
								"set":"email",
								"min":"5",
								"max":"90",
								"required":true
							},
							"class":{
								"item":"",
								"parent":""
							}
						},
						{
							"title":"phone",
							"placeholder":"(949) 999-9999",
							"params":{
								"type":"text",
								"set":"phone",
								"min":"14",
								"max":"14",
								"required":true
							},
							"class":{
								"item":"qstn-form-phone-mask",
								"parent":""
							}
						},
						{
							"title":"message",
							"placeholder":"What's on your mind...",
							"params":{
								"type":"textarea",
								"set":"message",
								"min":"15",
								"max":"250",
								"required":false
							},
							"class":{
								"item":"",
								"parent":""
							}
						}
					]
				}
			],
			"submit":{
				"button":{
					"states":{
						"prev":{
							"title":"back"
						},
						"next":{
							"title":"continue"
						},
						"finish":{
							"title":"submit"
						}
					},
					"class":"",
					"style":"background:#18bcaa;color: #fff;"
				},
				"message":"thank you for signing up!"
			},
			"ajax":{
				"url":""
			}
		};
		qstn.build(formData);
		// particlesJS("alm-contact-particles-js", {"particles":{"number":{"value":175,"density":{"enable":true,"value_area":2164.606282168456}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#fff"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.49705773886831206,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#fff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
	}

}