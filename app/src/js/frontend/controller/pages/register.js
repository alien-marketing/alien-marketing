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
		let container, content, sections, section;
		container = jQuery('.alm-angled-sections');
		sections = [
			{
				'title':'cover',
				'type':'gradient',
				'layout':'normal',
				'style':'background: linear-gradient(-45deg, #00ac53, #23c3e0);'
			},
			{
				'title':'content',
				'type':'normal',
				'layout':'inverse',
				'style':'background: #fff;'
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
										<div class="alm-page-form-item">
											<div class="alm-page-form-title">phone</div>
											<div class="alm-page-form-input">
												<input type="text" class="alm-page-form-value alm-phone-mask" data-min="14" data-max="14" data-type="phone" placeholder="(808) 955-9821" autocomplete="off">
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
		jQuery('.alm-phone-mask').mask('(000) 000-0000');
		this.validateRegistration();
	}

	validateRegistration() {
		let obj, error, s3, register = new Register(), messenger = new Messenger(), config = new Config();
		s3 = new AWS.S3({
        	accessKeyId: config.route('id'),
        	secretAccessKey: config.route('secret')
        });
		jQuery('.alm-page-form-register').on('click', function() {
			obj = {};
			error = [];
			jQuery('.alm-page-form-value').each(function() {
				let item, data, value, key, min, max;
				item = jQuery(this);
				value = item.val();
				key = item.data('type');
				min = item.data('min');
				max = item.data('max');
				data = {'value':value,'key':key,'min':min,'max':max};
				register.validateData(data,obj,error);
			});			
			if(error.length > 0) {
				register.errors(error);
			}
			else {
				s3.putObject({
	            	Bucket: 'alien-marketing',
	            	Key: 'data/users/test/user.json',
	            	Body: JSON.stringify(obj),
	            	ContentType: "application/json"
	            	}, function(err,data){
	            		messenger.run({
							'id':'success', // This value needs to be unique
							'name':'new-user', // This value needs to be unique
							'title':'Success!', // title
							'message':'You have successfully registered a new account.', // content
							'duration':4500, // duration of timer | if null, close box will apear
							'redirect':'home.html',
							'theme':'light', // only one theme currently...
							'icon':'check', // font awesome value fa-{value}
							'color':'#37bfb1', // used for progressbar color
							'location':'bottom-right', // top-right | bottom-right | bottom-left | top-left
							'button':{ // didn't get to this yet...
								'title':'',
								'link':''
							}
						});
	            	}
	            );
			}
		});
	}

	validateData(data,obj,error) {
		let register = new Register();
		obj[data.key] = data.value;
		switch(data.key) {
			case 'first_name':
			case 'last_name':
				register.validateLength(data,obj,error);
			break;
			case 'email':
				register.validateLength(data,obj,error);
				register.validateEmail(data,obj,error);
			break;
			case 'phone':
				register.validateLength(data,obj,error);
			break;
			case 'password':
			case 'password_confirm':
				register.validateLength(data,obj,error);
				register.validatePassword(data,obj,error);
			break;
		}
	}

	validateLength(data,obj,error) {
		if(!data.value) {
			error.push({'key':data.key,'item':data.key.replace(/_/g, " "),'error':'missing values'});
		}
		else {
			if(data.value.length < data.min) {
				error.push({'key':data.key,'item':data.key.replace(/_/g, " "),'error':'value needs to be at least '+data.min+' letters'});
			}
			else if(data.value.length > data.max) {
				error.push({'key':data.key,'item':data.key.replace(/_/g, " "),'error':'value needs to be less than '+data.max+' letters'});
			}
		}
	}

	validateEmail(data,obj,error) {

	}

	validatePassword(data,obj,error) {
		if(obj['password'] && obj['password_confirm']) {
			if(obj['password'] == obj['password_confirm']) {
				
			}
			else {
				error.push({'key':'password','item':'password','error':'passwords do not match'});
			}
		}
	}

	errors(error) {
		for (var i = 0; i < error.length; i++) {
			let message, key, id, name, messenger = new Messenger(), api = new API();
			message = error[i].error;
			key = error[i].item;
			id = api.randomString(8, 'abcdefghijklmnopqrstuvwxyz');
			name = api.randomString(8, 'abcdefghijklmnopqrstuvwxyz');
			setTimeout(function() {
				messenger.run({
					'id':id, // This value needs to be unique
					'name':name, // This value needs to be unique
					'title':'ERROR: '+key, // title
					'message':message, // content
					'duration':4500, // duration of timer | if null, close box will apear
					'theme':'light', // only one theme currently...
					'icon':'exclamation', // font awesome value fa-{value}
					'color':'#f92b30', // used for progressbar color
					'location':'bottom-right', // top-right | bottom-right | bottom-left | top-left
					'button':{ // didn't get to this yet...
						'title':'',
						'link':''
					}
				});
			}, (250*i));
		}
	}

}