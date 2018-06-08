class App {

	init(data) {
		this.app = jQuery('.alm-app');
		this.meta();
		switch(data.template) {
			case 'admin':
				this.menu = [{"group":"main","header":false,"list":[{"title":"Dashboard","icon":"home","link":"admin","children":[]}]},{"group":"content","header":true,"list":[{"title":"pages","icon":"file","link":"","children":[{"title":"View all","enabled":true,"link":"all-pages"},{"title":"Add new page","enabled":true,"link":"new-page"}]},{"title":"posts","icon":"file-text","link":"","children":[{"title":"View all","enabled":true,"link":"all-posts"},{"title":"Add new post","enabled":true,"link":"new-post"},{"title":"Categories","enabled":true,"link":""},{"title":"Tags","enabled":true,"link":""}]},{"title":"clients","icon":"address-book","link":"","children":[{"title":"View all","enabled":true,"link":""},{"title":"Add new client","enabled":true,"link":""},{"title":"Categories","enabled":true,"link":""}]},{"title":"users","icon":"users","link":"","children":[{"title":"View all","enabled":true,"link":""},{"title":"Add new user","enabled":true,"link":""},{"title":"Categories","enabled":true,"link":""}]},{"title":"files","icon":"file-image-o","link":"","children":[{"title":"View all","enabled":true,"link":""},{"title":"Add new file","enabled":true,"link":""},{"title":"Categories","enabled":true,"link":""}]}]},{"group":"other","header":true,"list":[{"title":"appearance","icon":"flask","link":"","children":[{"title":"Header","enabled":true,"link":""},{"title":"Menu","enabled":true,"link":""},{"title":"Footer","enabled":true,"link":""}]},{"title":"tools","icon":"wrench","link":"","children":[{"title":"Audit","enabled":true,"link":"audit"},{"title":"Calendar","enabled":true,"link":""},{"title":"Invoice","enabled":true,"link":""}]},{"title":"settings","icon":"cog","link":"","children":[{"title":"Account","enabled":true,"link":""},{"title":"Configuration","enabled":true,"link":""},{"title":"Theme","enabled":true,"link":""}]}]}];
				this.adminHeader();
				this.adminSidebar();
				this.adminPage();
				this.adminFooter();
			break;
			default:
				this.header();
				this.sidebar();
				this.page();
				this.footer();
			break;
		}
		this.events();
		this.disableZoom();
	}

	meta() {
		let container, content;
		container = jQuery('head');
		content = 	`<title>[alien.marketing]</title>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">

					<link rel="apple-touch-icon" sizes="180x180" href="https://s3-us-west-2.amazonaws.com/alien-marketing/media/images/favicon/apple-touch-icon.png">
					<link rel="icon" type="image/png" sizes="32x32" href="https://s3-us-west-2.amazonaws.com/alien-marketing/media/images/favicon/favicon-32x32.png">
					<link rel="icon" type="image/png" sizes="16x16" href="https://s3-us-west-2.amazonaws.com/alien-marketing/media/images/favicon/favicon-16x16.png">
					<link rel="mask-icon" href="https://s3-us-west-2.amazonaws.com/alien-marketing/media/images/favicon/safari-pinned-tab.svg" color="#5bbad5">
					<meta name="msapplication-TileColor" content="#da532c">
					<meta name="theme-color" content="#ffffff">`;
		container.prepend(content);
	}

	adminHeader() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Header -->
					<div class="alm-admin-header alm-wrapper">
						<div class="alm-admin-header-brand alm-wrapper">
							<div class="alm-admin-header-brand-logo alm-wrapper">
								<a class="alm-wrapper" href="home.html">
									<img src="https://s3-us-west-2.amazonaws.com/alien-marketing/media/images/logo3.png" width="80%">
								</a>
							</div>
							<div class="alm-admin-header-brand-name alm-wrapper">
								<div class="alm-admin-header-brand-title">alien.marketing</div>
							</div>
						</div>
						<div class="alm-admin-header-menu alm-wrapper">menu</div>
						<div class="alm-admin-header-profile alm-wrapper">
							<span class="fa fa-circle-o"></span>
						</div>
					</div>
					<!-- End ~ Header -->`;
		container.append(content);
		this.head = jQuery('.alm-admin-header');
	}

	adminSidebar() {
		let container, content, data;
		container = this.app;
		data = this.menu;
		content = 	`<!-- Start ~ Sidebar -->
					<div class="alm-admin-sidebar-container">
						<div class="alm-admin-sidebar alm-25">
							<div class="alm-admin-sidebar-content"></div>
						</div>
						<div class="alm-admin-sidebar-overlay"></div>
					</div>
					<!-- End ~ Sidebar -->`;
		container.append(content);
		this.buildSidebar(data);
		jQuery('.alm-admin-sidebar').on('mouseover', function() {
			let item;
			item = jQuery(this);
			item.addClass('open');
		});
		jQuery('.alm-admin-sidebar').on('mouseleave', function() {
			let item;
			item = jQuery(this);
			item.removeClass('open');
			jQuery('.alm-admin-sidebar-item').removeClass('active');
			jQuery('.alm-admin-sidebar-list').slideUp(250);
		});
		jQuery('.alm-admin-sidebar-tab').on('click', function() {
			let item, title, list;
			item = jQuery(this);
			item.parent().toggleClass('active');
			title = item.children('.alm-admin-sidebar-title');
			list = item.siblings('.alm-admin-sidebar-list');
			list.slideToggle(250);
		});
	}

	buildSidebar(obj) {
		let container, content, data, header;
		container = jQuery('.alm-admin-sidebar-content');
		for (var i = 0; i < obj.length; i++) {
			data = obj[i];
			if(data.header) {header = '<div class="alm-admin-sidebar-group-title alm-25">'+data.group+'</div>';}else{header = '';}
			content = `<div class="alm-admin-sidebar-group" id="`+data.group+`">`+header+`</div>`;
			container.append(content);
			this.sidebarTab(data);
		}
	}

	sidebarTab(obj) {
		let container, content, data, link, dropdown;
		container = jQuery('#'+obj.group);
		for (var i = 0; i < obj.list.length; i++) {
			data = obj.list[i];
			if(data.children.length > 0) {dropdown = '<div class="alm-admin-sidebar-dropdown alm-wrapper alm-15"><span class="fa fa-caret-down"></span></div>'; link = 'javascript:void(0)'; }else{dropdown = ''; link = data.link+'.html';}
			content = `<div class="alm-admin-sidebar-item alm-wrapper">
						<div class="alm-admin-sidebar-tab alm-wrapper">
							<div class="alm-admin-sidebar-icon-container alm-wrapper">
								<div class="alm-admin-sidebar-icon alm-wrapper">
									<span class="fa fa-`+data.icon+`"></span>
								</div>
							</div>
							<div class="alm-admin-sidebar-title alm-wrapper alm-25">
								<a class="alm-wrapper" href="`+link+`">`+data.title+`</a>
							</div>
							`+dropdown+`
						</div>
						<div class="alm-admin-sidebar-list" id="`+data.title+`">
							<div class="alm-admin-sidebar-list-container"></div>
						</div>
					</div>`;
			container.append(content);
			this.sidebarChildren(data);
		}
	}

	sidebarChildren(obj) {
		let container, content, data, link;
		container = jQuery('#'+obj.title+' .alm-admin-sidebar-list-container');
		for (var i = 0; i < obj.children.length; i++) {
			data = obj.children[i];
			if(data.link){link = data.link+'.html';}else{link = 'javascript:void(0)';}
			content = `<a href="`+link+`"><div class="alm-admin-sidebar-list-item alm-wrapper">`+data.title+`</div></a>`;
			container.append(content);
		}
	}

	adminPage() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Page -->
					<div class="alm-admin-page">
						<div class="alm-admin-page-cover alm-wrapper"></div>
						<div class="alm-admin-page-container alm-wrapper"></div>
					</div>
					<!-- End ~ Page -->`;
		container.append(content);
		this.body = jQuery('.alm-admin-page');
	}

	adminFooter() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Footer -->
					<div class="alm-admin-footer">
						<div class="alm-admin-footer-account alm-wrapper">
							<div class="alm-admin-footer-account-image alm-wrapper">
								<img src="https://avatars2.githubusercontent.com/u/17184503">
							</div>
							<div class="alm-admin-footer-account-title">
								<div class="alm-admin-footer-account-name">Mathew Maione</div>
								<div class="alm-admin-footer-account-type">Admin</div>
							</div>
						</div>
						<div class="alm-admin-footer-copyright alm-wrapper">
							<div class="alm-admin-footer-menu alm-wrapper">
								<img src="https://s3-us-west-2.amazonaws.com/alien-marketing/media/images/AM-logo-text-white.png" width="150px">
							</div>
							<div class="alm-admin-footer-version alm-wrapper">
								ver. 0.0.1
							</div>
						</div>
					</div>
					<!-- End ~ Footer -->`;
		container.append(content);
		this.footer = jQuery('.alm-admin-footer');
	}


	header() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Header -->
					<div class="alm-header alm-15"></div>
					<!-- End ~ Header -->`;
		container.append(content);
		this.head = jQuery('.alm-header');
		this.headerTop();
		this.headerMain();
	}

	headerTop() {
		let container, content;
		container = this.head;
		content = 	`<div class="alm-header-top alm-wrapper">
						<div class="alm-header-top-info alm-wrapper">
							<a href="mailto:info@alien.marketing">info@alien.marketing</a>
						</div>
						<div class="alm-header-top-cta alm-wrapper"></div>
						<div class="alm-header-top-social alm-wrapper">
							<div class="alm-header-top-social-list alm-wrapper">
								<div class="alm-header-top-social-item alm-wrapper">
									<span class="fa fa-facebook"></span>
								</div>
								<div class="alm-header-top-social-item alm-wrapper">
									<span class="fa fa-instagram"></span>
								</div>
								<div class="alm-header-top-social-item alm-wrapper">
									<span class="fa fa-youtube"></span>
								</div>
								<div class="alm-header-top-social-item alm-wrapper">
									<span class="fa fa-twitter"></span>
								</div>
								<div class="alm-header-top-social-item alm-wrapper">
									<span class="fa fa-github"></span>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

	headerMain() {
		let container, content;
		container = this.head;
		content = 	`<div class="alm-header-main alm-wrapper">
						<div class="alm-header-logo">
							<a href="home.html">
								<div class="alm-header-logo-container alm-wrapper">
									<div class="alm-logo alm-wrapper">
										<img src="https://s3-us-west-2.amazonaws.com/alien-marketing/media/images/logo3.png">
									</div>
								</div>
								<div class="alm-header-logo-text alm-wrapper alm-25">
									<img src="https://s3-us-west-2.amazonaws.com/alien-marketing/media/images/AM-logo-text-white.png" width="100px">
								</div>
							</a>
						</div>
						<div class="alm-header-menu alm-wrapper"></div>
						<div class="alm-header-sidebar">
							<div class="alm-header-sidebar-container alm-wrapper">
								<div class="alm-header-sidebar-lines alm-wrapper">
								    <div class="alm-header-sidebar-line"></div>
								    <div class="alm-header-sidebar-line"></div>
								    <div class="alm-header-sidebar-line"></div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		this.headerMenu();
	}

	headerMenu() {
		let container, content, list, url, path, last, current;
		list = [
			{'title':'services','path':'services','scroll':true},
			{'title':'about','path':'about','scroll':true},
			{'title':'pricing','path':'pricing','scroll':false},
			{'title':'blog','path':'blog','scroll':true},
			{'title':'contact','path':'contact','scroll':true}
		];
		container = jQuery('.alm-header-menu');
		content = 	`<div class="alm-header-menu-container">
						<div class="alm-header-menu-list alm-wrapper"></div>
					</div>`;
		container.html(content);
		url = window.location.pathname;
		path = url.split('/');
		last = path.length;
		current = path[last - 1];
		for (var i = 0; i < list.length; i++) {
			var data, item, link;
			data = list[i];
			link = data.path+'.html';
			if(current.includes('home') && data.scroll) { link = 'javascript:void(0)'; }
			item = 	`<div class="alm-header-menu-item" data-name="`+data.path+`">
						<a href="`+link+`">`+data.title+`</a>
					</div>`;
			jQuery('.alm-header-menu-list').append(item);
		}
		if(current.includes('home')) {
			jQuery('.alm-header-menu-item').on('click', function() {
				let item, name;
				item = jQuery(this);
				name = item.data('name');
				jQuery('html, body').animate({
			        scrollTop: jQuery('.alm-section-'+name).offset().top - 100
			    }, 500);
			});
		}
	}

	sidebar() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Sidebar -->
					<div class="alm-sidebar-container">
						<div class="alm-sidebar alm-25">
							<div class="alm-sidebar-menu alm-wrapper"></div>
							<div class="alm-sidebar-content"></div>
						</div>
						<div class="alm-sidebar-overlay"></div>
					</div>
					<!-- End ~ Sidebar -->`;
		container.append(content);
		this.sidebarSections();
		this.sidebarControls();
	}

	sidebarSections() {
		let container, content, menu, title, sections;
		container = jQuery('.alm-sidebar-content');
		menu = jQuery('.alm-sidebar-menu');
		sections = ['profile','settings','menu'];
		for (var i = 0; i < sections.length; i++) {
			title = `<div class="alm-sidebar-menu-item" data-name="`+sections[i]+`">`+sections[i]+`</div>`;
			content = 	`<div class="alm-sidebar-section alm-sidebar-section-`+sections[i]+`">
							<div class="alm-sidebar-section-cover alm-wrapper">
								<div class="alm-sidebar-section-title">`+sections[i]+`</div>
							</div>
							<div class="alm-sidebar-section-content alm-sidebar-`+sections[i]+`-content"></div>
						</div>`;
			menu.append(title);
			container.append(content);
		}
		menu.append('<div class="alm-sidebar-menu-item alm-sidebar-close">close</div>');
		jQuery('.alm-sidebar-menu-item').on('click', function() {
			let item, name;
			item = jQuery(this);
			name = item.data('name');
			jQuery('.alm-sidebar-menu-item, .alm-sidebar-section').removeClass('active');
			item.addClass('active');
			jQuery('.alm-sidebar-section-'+name).addClass('active');
		});
		this.sidebarSettings();
		this.sidebarMenu();
	}

	sidebarProfile() {
		let container, content;
		container = jQuery('.alm-sidebar-section-profile');
	}

	sidebarSettings() {
		let container, content;
		container = jQuery('.alm-sidebar-section-settings .alm-sidebar-section-content');
		content = 	`<div class="alm-sidebar-section-settings-list">
						<div class="alm-sidebar-section-settings-item">
							<div class="alm-sidebar-section-settings-title">test</div>
							<div class="alm-sidebar-section-settings-block">on / off</div>
						</div>
						<div class="alm-sidebar-section-settings-item">
							<div class="alm-sidebar-section-settings-title">test</div>
							<div class="alm-sidebar-section-settings-block">on / off</div>
						</div>
						<div class="alm-sidebar-section-settings-item">
							<div class="alm-sidebar-section-settings-title">test</div>
							<div class="alm-sidebar-section-settings-block">on / off</div>
						</div>
					</div>`;
		container.append(content);
	}

	sidebarMenu() {
		let container, content;
		container = jQuery('.alm-sidebar-menu-content');
		content = 	`<div class="alm-sidebar-section-menu-group">
						<div class="alm-sidebar-section-menu-title alm-wrapper">
							<a class="alm-sidebar-section-menu-link alm-wrapper" href="javascript:void(0)">services</a>
							<div class="alm-sidebar-section-menu-expand alm-wrapper">
								<div class="alm-sidebar-section-menu-expand-item alm-25"></div>
								<div class="alm-sidebar-section-menu-expand-item alm-25"></div>
							</div>
						</div>
						<div class="alm-sidebar-section-menu-list">
							<div class="alm-sidebar-section-menu-item alm-wrapper">
								<a class="alm-sidebar-section-menu-link alm-wrapper" href="javascript:void()">web design & development</a>
							</div>
							<div class="alm-sidebar-section-menu-item alm-wrapper">
								<a class="alm-sidebar-section-menu-link alm-wrapper" href="javascript:void()">social media management</a>
							</div>
							<div class="alm-sidebar-section-menu-item alm-wrapper">
								<a class="alm-sidebar-section-menu-link alm-wrapper" href="javascript:void()">email & sms marketing</a>
							</div>
							<div class="alm-sidebar-section-menu-item alm-wrapper">
								<a class="alm-sidebar-section-menu-link alm-wrapper" href="javascript:void()">reporting & analytics</a>
							</div>
							<div class="alm-sidebar-section-menu-item alm-wrapper">
								<a class="alm-sidebar-section-menu-link alm-wrapper" href="javascript:void()">social listening</a>
							</div>
							<div class="alm-sidebar-section-menu-item alm-wrapper">
								<a class="alm-sidebar-section-menu-link alm-wrapper" href="javascript:void()">seo & sem</a>
							</div>
						</div>
					</div>
					<div class="alm-sidebar-section-menu-group">
						<div class="alm-sidebar-section-menu-title alm-wrapper">
							<a class="alm-sidebar-section-menu-link alm-wrapper" href="javascript:void(0)">about</a>
							<div class="alm-sidebar-section-menu-expand alm-wrapper">
								<div class="alm-sidebar-section-menu-expand-item alm-25"></div>
								<div class="alm-sidebar-section-menu-expand-item alm-25"></div>
							</div>
						</div>
						<div class="alm-sidebar-section-menu-list">
							<div class="alm-sidebar-section-menu-item alm-wrapper">
								<a class="alm-sidebar-section-menu-link alm-wrapper" href="about.html">about us</a>
							</div>
							<div class="alm-sidebar-section-menu-item alm-wrapper">
								<a class="alm-sidebar-section-menu-link alm-wrapper" href="team.html">team</a>
							</div>
						</div>
					</div>
					<div class="alm-sidebar-section-menu-group">
						<div class="alm-sidebar-section-menu-title alm-wrapper">
							<a class="alm-sidebar-section-menu-link alm-wrapper" href="pricing.html">pricing</a>
						</div>
					</div>
					<div class="alm-sidebar-section-menu-group">
						<div class="alm-sidebar-section-menu-title alm-wrapper">
							<a class="alm-sidebar-section-menu-link alm-wrapper" href="blog.html">blog</a>
						</div>
					</div>
					<div class="alm-sidebar-section-menu-group">
						<div class="alm-sidebar-section-menu-title alm-wrapper">
							<a class="alm-sidebar-section-menu-link alm-wrapper" href="contact.html">contact</a>
						</div>
					</div>`;
		container.append(content);

		jQuery('.alm-sidebar-section-menu-title').on('click', function() {
			let item, list;
			item = jQuery(this);
			list = item.siblings('.alm-sidebar-section-menu-list');
			jQuery('.alm-sidebar-section-menu-list').slideUp();
			if(item.hasClass('active')) {
				item.removeClass('active');
			}
			else {
				jQuery('.alm-sidebar-section-menu-title').removeClass('active');
				item.addClass('active');
				list.slideDown();
			}
		});

	}

	sidebarControls() {
		let app = new App();
		// open sidebar
		jQuery('.alm-header-sidebar').on('click', function() {
			app.sidebarOpen();
		});
		// close sidebar
		jQuery('.alm-sidebar-overlay, .alm-sidebar-close').on('click', function() {
			app.sidebarClose();
		});
	}

	sidebarOpen() {
		jQuery('.alm-sidebar, .alm-sidebar-menu-item:nth-child(3), .alm-sidebar-section:nth-child(3)').addClass('active');
		jQuery('body').addClass('alm-sidebar-opened');
		jQuery('.alm-sidebar-overlay').fadeIn();
	}

	sidebarClose() {
		jQuery('.alm-sidebar').removeClass('active');
		jQuery('body').removeClass('alm-sidebar-opened');
		jQuery('.alm-sidebar-overlay').fadeOut();
		// deactivates the current sidebar section after the sidebar has closed
		setTimeout(function() {
			jQuery('.alm-sidebar-menu-item, .alm-sidebar-section').removeClass('active');
		}, 250);
	}

	page() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Page -->
					<div class="alm-page"></div>
					<!-- End ~ Page -->`;
		container.append(content);
		this.body = jQuery('.alm-page');
	}

	footer() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Footer -->
					<div class="alm-footer">
						<div class="alm-footer-main">
							<div class="alm-footer-content">
								<div class="alm-container">
									<div class="alm-footer-menu alm-wrapper">
										<div class="alm-xs-100 alm-sm-50 alm-md-25 alm-lg-25">
											<div class="alm-footer-menu-block-wrapper alm-wrapper">
												<div class="alm-footer-menu-block">
													<div class="alm-footer-menu-title">About</div>
													<a href="about.html">
														<div class="alm-footer-menu-item">About Us</div>
													</a>
													<a href="team.html">
														<div class="alm-footer-menu-item">Team</div>
													</a>
													<a href="blog.html">
														<div class="alm-footer-menu-item">Blog</div>
													</a>
												</div>
											</div>
										</div>
										<div class="alm-xs-100 alm-sm-50 alm-md-25 alm-lg-25">
											<div class="alm-footer-menu-block-wrapper alm-wrapper">
												<div class="alm-footer-menu-block">
													<div class="alm-footer-menu-title">Browse</div>
													<a href="services.html">
														<div class="alm-footer-menu-item">Services</div>
													</a>
													<a href="pricing.html">
														<div class="alm-footer-menu-item">Pricing</div>
													</a>
													<a href="javascript:void(0)">
														<div class="alm-footer-menu-item">Portfolio</div>
													</a>
												</div>
											</div>
										</div>
										<div class="alm-xs-100 alm-sm-50 alm-md-25 alm-lg-25">
											<div class="alm-footer-menu-block-wrapper alm-wrapper">
												<div class="alm-footer-menu-block">
													<div class="alm-footer-menu-title">Services</div>
													<a href="javascript:void(0)">
														<div class="alm-footer-menu-item">Web Design & Devlelopment</div>
													</a>
													<a href="javascript:void(0)">
														<div class="alm-footer-menu-item">Social Media Management</div>
													</a>
													<a href="javascript:void(0)">
														<div class="alm-footer-menu-item">Email & SMS Marketing</div>
													</a>
													<a href="javascript:void(0)">
														<div class="alm-footer-menu-item">Reporting & Analytics</div>
													</a>
													<a href="javascript:void(0)">
														<div class="alm-footer-menu-item">Social Listening</div>
													</a>
													<a href="javascript:void(0)">
														<div class="alm-footer-menu-item">SEO & SEM</div>
													</a>
												</div>
											</div>
										</div>
										<div class="alm-xs-100 alm-sm-50 alm-md-25 alm-lg-25">
											<div class="alm-footer-menu-block-wrapper alm-wrapper">
												<div class="alm-footer-menu-block">
													<div class="alm-footer-menu-title">Other</div>
													<a href="javascript:void(0)">
														<div class="alm-footer-menu-item">Account</div>
													</a>
													<a href="register.html">
														<div class="alm-footer-menu-item">Register</div>
													</a>
													<a href="contact.html">
														<div class="alm-footer-menu-item">Contact</div>
													</a>
													<a href="javascript:void(0)">
														<div class="alm-footer-menu-item">Affiliate Program</div>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div class="alm-footer-newsletter"></div>
									<div class="alm-footer-social alm-wrapper">
										<div class="alm-footer-social-item alm-wrapper">
											<span class="fa fa-facebook"></span>
										</div>
										<div class="alm-footer-social-item alm-wrapper">
											<span class="fa fa-instagram"></span>
										</div>
										<div class="alm-footer-social-item alm-wrapper">
											<span class="fa fa-youtube"></span>
										</div>
										<div class="alm-footer-social-item alm-wrapper">
											<span class="fa fa-twitter"></span>
										</div>
										<div class="alm-footer-social-item alm-wrapper">
											<span class="fa fa-github"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="alm-footer-copyright">
							<div class="alm-wrapper">
								<img src="https://s3-us-west-2.amazonaws.com/alien-marketing/media/images/AM-logo-text-white.png" width="150px">
							</div>
						</div>
					</div>
					<!-- End ~ Footer -->`;
		container.append(content);
		this.foot = jQuery('.alm-footer');
	}

	events() {
		jQuery(document).scroll(function() {
			let pos;
			pos = jQuery(document).scrollTop();
			if(pos > 150) {
				jQuery('.alm-header').addClass('active');
			}
			else {
				jQuery('.alm-header').removeClass('active');
			}
		});
	}

	videoResize() {
    	let video, container, videoWidth, containerWidth, videoHeight, containerHeight;
		video = jQuery('.alm-page-video');
		container = jQuery('.alm-page-video-container');
		if(video) {
			// video
			videoWidth = video.width();
			videoHeight = videoWidth * (9/16);
			video.css({'height':videoHeight+'px'});
			// video container
			containerWidth = container.width();
			containerHeight = containerWidth * (9/16);
			container.css({'height':containerHeight+'px'});
		}
    }

    disableZoom() {
    	// Disables zoom on mobile
		document.addEventListener('touchmove', function(event) {
	        event = event.originalEvent || event;
	        if (event.scale !== 1) {
	           event.preventDefault();
	        }
	    }, false);
    }

}