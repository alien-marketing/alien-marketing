class Buildr {

	init() {
		this.modal();
		this.openModal();
		this.closeModal();
	}

	modal() {
		let container, content;
		container = jQuery('.alm-app');
		content = 	`<div class="buildr-modal">
						<div class="buildr-modal-container">
							<div class="buildr-modal-header">header</div>
							<div class="buildr-modal-content">content</div>
							<div class="buildr-modal-footer">footer</div>
						</div>
						<div class="buildr-modal-overlay"></div>
					</div>`;
		container.append(content);
	}

	openModal() {
		jQuery('.buildr-open-modal').on('click', function() {
			console.log('cool');
			jQuery('.buildr-modal').addClass('active');
		});
	}

	closeModal() {
		jQuery('.buildr-modal-overlay').on('click', function() {
			jQuery('.buildr-modal').removeClass('active');
		});
	}

}