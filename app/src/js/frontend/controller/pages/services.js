class Services {

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
				'style':'background: linear-gradient(-45deg, #00ac53, #23c3e0); color: #fff;'
			},
			{
				'title':'manage',
				'type':'normal',
				'layout':'inverse',
				'style':'#f6f6f7;'
			},
			{
				'title':'seo',
				'type':'gradient',
				'layout':'normal',
				'style':'background: linear-gradient(-45deg, #00ac53, #23c3e0); color: #fff;'
			},
			{
				'title':'web',
				'type':'normal',
				'layout':'inverse',
				'style':'#f6f6f7;'
			},
			{
				'title':'report',
				'type':'gradient',
				'layout':'normal',
				'style':'background: linear-gradient(-45deg, #00ac53, #23c3e0); color: #fff;'
			},
			{
				'title':'listen',
				'type':'normal',
				'layout':'inverse',
				'style':'#f6f6f7;'
			},
			{
				'title':'email',
				'type':'gradient',
				'layout':'normal',
				'style':'background: linear-gradient(-45deg, #00ac53, #23c3e0); color: #fff;'
			}
		];
	    for (var i = 0; i < sections.length; i++) {
	    	section = sections[i];
	    	content = 	`<div class="alm-section alm-angled-section alm-section-`+section.title+` alm-section-type-`+section.type+` alm-section-layout-`+section.layout+` alm-25" style="`+section.style+`"></div>`;
	    	container.append(content);
	    }
	    this.cover();
	    this.manage();
	    this.seo();
	    this.web();
	    this.report();
	    this.listen();
	    this.email();
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
										Services
									</div>
									<div class="alm-page-cover-subtitle">
										What we do
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		particlesJS("particles-js", {"particles":{"number":{"value":175,"density":{"enable":true,"value_area":2164.606282168456}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#fff"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.49705773886831206,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#fff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
		setTimeout(function() {
			container.addClass('active');
		}, 1500);
	}

	manage() {
		let container, content
		container = jQuery('.alm-section-manage');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-30 alm-angled-section-title">
								<div class="alm-page-content">
									<div class="alm-page-title">
										Social media management
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-70 alm-angled-section-content">
								<div class="alm-page-content">
									<div class="alm-page-text">
										Did you know that 90% of all marketers say social media marketing has increased their business exposure? Or that 66% of marketers that spend at least 6 hours on social per week have seen more leads? (Source: Content Factory). In this day and age, properly managing multiple social channels is key to driving business. 
									</div>
									<div class="alm-page-text">
										Whether it’s organic or paid, social media is all about grabbing the attention of your target audience, and driving them to your website or landing page. 
									</div>
									<div class="alm-page-text">
										Alien Marketing will put in extraterrestrial hours to establish your brands social presence,   deliver relevant content to your target audiences, and drive the right traffic to your website or landing page.
										<br>
										<br>
										<a href="javascript:void(0)">
											<div class="alm-page-btn alm-wrapper">Learn more</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

	seo() {
		let container, content
		container = jQuery('.alm-section-seo');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-30 alm-angled-section-title">
								<div class="alm-page-content">
									<div class="alm-page-title">
										SEO & SEM
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-70 alm-angled-section-content">
								<div class="alm-page-content">
									<div class="alm-page-text">
										Search engine optimization (SEO) allows your business to be discovered by those searching for what you offer. Sounds easy right? Then why do so many companies fail to properly attain this? It’s because SEO is a moving target. 
									</div>
									<div class="alm-page-text">
										Search engines are constantly changing and evolving, making it difficult for businesses to keep up. Which is why you need Alien Marketing’s help - we’ll ensure your website ranks high in search engines and use our intergalactic knowledge to increase the visibility of your site to lead to a higher ranking in search engine results.
										<br>
										<br>
										<a href="javascript:void(0)">
											<div class="alm-page-btn alm-wrapper">Learn more</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

	web() {
		let container, content
		container = jQuery('.alm-section-web');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-30 alm-angled-section-title">
								<div class="alm-page-content">
									<div class="alm-page-title">
										Web design & development
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-70 alm-angled-section-content">
								<div class="alm-page-content">
									<div class="alm-page-text">
										If marketing were a baseball game, then your website would be the home base. It’s the one thing that all of your online efforts circle back to. Having a strong website not only boosts credibility but helps you stand out from competitors. 
									</div>
									<div class="alm-page-text">
										We will design and develop a comprehensive website that is both beautiful and functional.
										<br>
										<br>
										<a href="javascript:void(0)">
											<div class="alm-page-btn alm-wrapper">Learn more</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

	report() {
		let container, content
		container = jQuery('.alm-section-report');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-30 alm-angled-section-title">
								<div class="alm-page-content">
									<div class="alm-page-title">
										Reporting & analysis
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-70 alm-angled-section-content">
								<div class="alm-page-content">
									<div class="alm-page-text">
										We like to think of reporting & analytics as the mothership. It’s the big thing that holds together all the important stuff. And we get it - graphs and numbers can be confusing. Which is why Alien Marketing makes it easy for you to stay up-to-date with your social media and web performance with our Custom Analytics Dashboard to help determine what's working and what isn't.
									</div>
									<div class="alm-page-text">
										We offer monthly, weekly, and even daily analytic reports that break down your digital performance with tips on how to optimize.
										<br>
										<br>
										<a href="javascript:void(0)">
											<div class="alm-page-btn alm-wrapper">Learn more</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

	listen() {
		let container, content
		container = jQuery('.alm-section-listen');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-30 alm-angled-section-title">
								<div class="alm-page-content">
									<div class="alm-page-title">
										Social listening
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-70 alm-angled-section-content">
								<div class="alm-page-content">
									<div class="alm-page-text">
										Here’s a fun question - who controls your brand’s reputation? The answer: your (current & potential) customers! Now, what if you could have an ear across the entire galaxy and know exactly what your clients and customers are saying about you + have the ability to fix things? Well, now you can. Alien Marketing has the power to monitor digital conversations across the internet to understand what people are saying about your brand so that you can make optimizations to help improve brand reputation.
										<br>
										<br>
										<a href="javascript:void(0)">
											<div class="alm-page-btn alm-wrapper">Learn more</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

	email() {
		let container, content
		container = jQuery('.alm-section-email');
		content = 	`<div class="alm-angled-section-wrapper alm-container">
						<div class="alm-wrapper">
							<div class="alm-xs-100 alm-sm-30 alm-angled-section-title">
								<div class="alm-page-content">
									<div class="alm-page-title">
										Email & SMS marketing
									</div>
								</div>
							</div>
							<div class="alm-xs-100 alm-sm-70 alm-angled-section-content">
								<div class="alm-page-content">
									<div class="alm-page-text">
										According to Radicati Group, more than 3.7 billion people worldwide use email. That’s almost 54% of the world’s population! Proving that email is still one of the best ways to keep in touch with your customer. However, there’s a lot of noise out there. So how can you ensure your business stands out from the myriad of other messages hitting your target audience’s inbox? Having the right content, design and cadence can make the world of difference. So why not leave it to the experts?
									</div>
									<div class="alm-page-text">
										Still not convinced that email marketing is the way to go? Then try SMS marketing. It’s a sure fire way to keep your business top-of-mind by reaching your audience directly on their phones.
										<br>
										<br>
										<a href="javascript:void(0)">
											<div class="alm-page-btn alm-wrapper">Learn more</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

}