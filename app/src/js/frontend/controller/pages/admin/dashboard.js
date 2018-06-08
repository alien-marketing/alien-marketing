class Admin {

	init() {
		this.page = jQuery('.alm-admin-page');
		this.template();
	}

	template() {
		this.cover();
		this.content();
	}

	cover() {
		let container, content, obj;
		container = jQuery('.alm-admin-page-cover');
		content = 	`<div class="alm-admin-page-cover-title">dashboard</div>`;
		container.append(content);
	}

	content() {
		let container, content, obj;
		container = jQuery('.alm-admin-page-container');
		content = 	`<div class="alm-xs-100 alm-sm-100">
						<div class="alm-admin-page-block alm-wrapper">messages</div>
					</div>
					<div class="alm-xs-100 alm-sm-33">
						<div class="alm-admin-page-block alm-wrapper">clients</div>
					</div>
					<div class="alm-xs-100 alm-sm-33">
						<div class="alm-admin-page-block alm-wrapper">posts</div>
					</div>
					<div class="alm-xs-100 alm-sm-33">
						<div class="alm-admin-page-block alm-wrapper">pages</div>
					</div>
					<div class="alm-xs-100 alm-sm-50">
						<div class="alm-admin-page-block alm-wrapper">overview</div>
					</div>
					<div class="alm-xs-100 alm-sm-50">
						<div class="alm-admin-page-block alm-wrapper">stats</div>
					</div>`;
		container.append(content);
	}

}