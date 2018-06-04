class User {

	init() {
		this.checkUser();
	}

	checkUser() {
		let user = new User(), config = new Config();
		// check to see if user has been either loaded or cached
		localforage.ready(function() {
			let key;
	        key = 'alm-cache-user-obj';
	        localforage.getItem(key).then(function(value) {
			    if(value != null) {
			    	// logged in
					// Sets the user data as a global value
					user.userData = value;
					user.userOnline();
			    }
			    else {
			    	// not cached
					jQuery.ajax({
			            type: 'GET',
			            crossDomain: true,
			            dataType: 'json',
			            url: config.route('users'),
			            complete: function(jsondata) {
			                user.userOffline(jsondata.responseText);
			            }
			        });
			    }
			});
	    });
	}

	userOnline() {
		let container, content, data, user = new User();
		data = this.userData;
		container = jQuery('.alm-sidebar-profile-content');
		content = 	`<div class="alm-sidebar-profile-online">
						<div>Hello, `+data.first_name+`!</div>
						<div class="alm-user-logout">logout</div>
						<div class="alm-user-admin">admin</div>
					</div>`;
		container.html(content);

		// logout
		jQuery('.alm-user-logout').on('click', function() {
			user.userLogout();
		});
	}

	userOffline(data) {
		let container, content;
		container = jQuery('.alm-sidebar-profile-content');
		content = 	`<div class="alm-sidebar-profile-offline">
						<div class="alm-sidebar-profile-login">
							<div class="alm-sidebar-profile-login-block">
								<div class="alm-sidebar-profile-login-title">
									email
								</div>
								<div class="alm-sidebar-profile-login-input">
									<input class="alm-sidebar-profile-login-input-value" data-type="email" type="text" placeholder="me@example.com">
								</div>
							</div>
							<div class="alm-sidebar-profile-login-block">
								<div class="alm-sidebar-profile-login-title">
									password
								</div>
								<div class="alm-sidebar-profile-login-input">
									<input class="alm-sidebar-profile-login-input-value" data-type="password" type="password" placeholder="••••••••">
								</div>
							</div>
							<div class="alm-sidebar-profile-login-btn alm-wrapper">login</div>
							<div class="alm-sidebar-break"></div>
							<a href="register.html">
								<div class="alm-sidebar-profile-register-btn alm-wrapper">register</div>
							</a>
						</div>
					</div>`;
		container.html(content);
		this.userLogin(data);
	}

	userLogin(userObj) {
		let data, userData, user = new User();
		data = {'email':'','password':''};
		jQuery('.alm-sidebar-profile-login-btn').on('click', function() {
			jQuery('.alm-sidebar-profile-login-input-value').each(function() {
				let item, type;
				item = jQuery(this);
				type = item.data('type');
				data[type] = item.val();
			});
			userData = user.getUser(data, JSON.parse(userObj));
		});
	}

	userLogout() {		
		localforage.ready(function() {
			localforage.removeItem('alm-cache-user-obj');
		});
		this.checkUser();
	}

	findUser(key, data) {
	    for (var i = 0; i < data.length; i++) {
	        if (data[i].email === key) {
	            return data[i];
	        }
	        else {
	        	return false;
	        }
	    }
	}

	getUser(data, obj) {
		let user, path, uData, password, error, u = new User(), config = new Config(), messenger = new Messenger();
		if(!data.email || !data.password) {
			messenger.run({
				'id':'error1', // This value needs to be unique
				'name':'error-data', // This value needs to be unique
				'title':'ERROR', // title
				'message':'There are missing values', // content
				'duration':4500, // duration of timer | if null, close box will apear
				'theme':'light', // only one theme currently...
				'icon':'exclamation', // font awesome value fa-{value}
				'color':'#f92b30', // used for progressbar color
				'location':'bottom-left', // top-right | bottom-right | bottom-left | top-left
				'button':{ // didn't get to this yet...
					'title':'',
					'link':''
				}
			});
		}
		else {
			user = this.findUser(data.email, obj);
			if(!user) {
				messenger.run({
					'id':'error2', // This value needs to be unique
					'name':'error-email', // This value needs to be unique
					'title':'ERROR', // title
					'message':'Email does not exist', // content
					'duration':4500, // duration of timer | if null, close box will apear
					'theme':'light', // only one theme currently...
					'icon':'exclamation', // font awesome value fa-{value}
					'color':'#f92b30', // used for progressbar color
					'location':'bottom-left', // top-right | bottom-right | bottom-left | top-left
					'button':{ // didn't get to this yet...
						'title':'',
						'link':''
					}
				});
			}
			else {
				path = CryptoJS.AES.decrypt(user.path,config.route('salt')).toString(CryptoJS.enc.Utf8);
				jQuery.ajax({
		            type: 'GET',
		            crossDomain: true,
		            dataType: 'json',
		            url: config.route('user')+path+'.json',
		            complete: function(jsondata) {
		                uData = JSON.parse(jsondata.responseText)[0];
		                password = CryptoJS.AES.decrypt(uData.password,config.route('salt')).toString(CryptoJS.enc.Utf8);
						if(uData) {
							if(data.email == uData.email && data.password == password ) {
								localforage.ready(function() {
									localforage.setItem('alm-cache-user-obj', uData, function() {
										u.checkUser();
									});
								});
							}
							else {
								messenger.run({
									'id':'error3', // This value needs to be unique
									'name':'error-login', // This value needs to be unique
									'title':'ERROR', // title
									'message':'Email or passwrod is incorrect', // content
									'duration':4500, // duration of timer | if null, close box will apear
									'theme':'light', // only one theme currently...
									'icon':'exclamation', // font awesome value fa-{value}
									'color':'#f92b30', // used for progressbar color
									'location':'bottom-left', // top-right | bottom-right | bottom-left | top-left
									'button':{ // didn't get to this yet...
										'title':'',
										'link':''
									}
								});
							}
						}
		            }
		        });
			}
		}
	}

}