class editPage {

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
		content = 	`<div class="alm-admin-page-cover-title">edit page</div>`;
		container.append(content);
	}

	content() {
		let container, content, obj;
		container = jQuery('.alm-admin-page-container');
		content = 	`<div class="alm-xs-100 alm-sm-100">
						<div class="alm-admin-page-block alm-wrapper">messages</div>
					</div>
					<div class="alm-xs-100 alm-sm-75">
						<div class="alm-admin-page-pages"></div>
					</div>
					<div class="alm-xs-100 alm-sm-25">
						<div class="alm-admin-page-block alm-wrapper">
							<div class="alm-admin-page-btn alm-admin-page-add-new alm-wrapper">add new page</div>
						</div>
					</div>`;
		container.append(content);
		this.content();
	}

	content() {
		let container, content, obj, editor = new Editor();
		container = jQuery('.alm-admin-page-container');
		content = 	`<div class="alm-xs-100 alm-sm-100">
						<div class="alm-admin-page-block alm-wrapper">messages</div>
					</div>
					<div class="alm-xs-100 alm-sm-75">
						<div class="alm-admin-page-block alm-wrapper">
							<div class="alm-admin-page-new-post">
								<div class="alm-editor-container">
									<div class="alm-wrapper alm-editor-wrapper">
										<div class="alm-xs-100 alm-sm-100 alm-md-100 alm-lg-100">
											<div class="alm-admin-page-builder-render connected-sortable">

												<style>
													/*

													    Basscss v6.0.1
													    Low-level CSS toolkit
													    http://basscss.com

													*/



													body, button { margin: 0 }

													button, input, select, textarea {
													  font-family: inherit;
													  font-size: 100%;
													}

													img { max-width: 100% }
													svg { max-height: 100% }

													input,
													select,
													textarea,
													fieldset {
													  font-size: 1rem;
													  margin-top: 0;
													  margin-bottom: 0;
													}

													input[type=text],
													input[type=datetime],
													input[type=datetime-local],
													input[type=email],
													input[type=month],
													input[type=number],
													input[type=password],
													input[type=search],
													input[type=tel],
													input[type=time],
													input[type=url],
													input[type=week] {
													  box-sizing: border-box;
													  height: 2.25rem;
													  padding: .5rem .5rem;
													  vertical-align: middle;
													  -webkit-appearance: none;
													}

													select {
													  box-sizing: border-box;
													  line-height: 1.75;
													  padding: .5rem .5rem;
													}

													select:not([multiple]) {
													  height: 2.25rem;
													  vertical-align: middle;
													}

													textarea {
													  box-sizing: border-box;
													  line-height: 1.75;
													  padding: .5rem .5rem;
													}

													.fieldset-reset {
													  padding: 0;
													  margin-left: 0;
													  margin-right: 0;
													  border: 0;
													}
													.fieldset-reset legend {
													  padding: 0;
													}

													:root {

													}

													button,
													.button {
													  font-size: inherit;
													  font-weight: bold;
													  text-decoration: none;
													  cursor: pointer;
													  display: inline-block;
													  box-sizing: border-box;
													  line-height: 1.125rem;
													  padding: .5rem 1rem;
													  margin: 0;
													  height: auto;
													  border: 1px solid transparent;
													  vertical-align: middle;
													  -webkit-appearance: none;
													}

													button::after,
													button::before,
													.button::after,
													.button::before {
													  box-sizing: border-box;
													}

													::-moz-focus-inner {
													  border: 0;
													  padding: 0;
													}

													.button:hover { text-decoration: none }

													table {
													  border-collapse: separate;
													  border-spacing: 0;
													  max-width: 100%;
													  width: 100%;
													}

													th {
													  text-align: left;
													  font-weight: bold;
													}

													th,
													td {
													  padding: .25rem 1rem;
													  line-height: inherit;
													}

													th { vertical-align: bottom }
													td { vertical-align: top }

													body {
													  font-family: 'Helvetica Neue', Helvetica, sans-serif;
													  line-height: 1.5;
													  font-size: 100%;
													}

													h1, h2, h3, h4, h5, h6 {
													  font-family: 'Helvetica Neue', Helvetica, sans-serif;
													  font-weight: bold;
													  line-height: 1.25;
													  margin-top: 1em;
													  margin-bottom: .5em;
													}

													p, dl, ol, ul {
													  font-size: 1rem;
													  margin-top: 0;
													  margin-bottom: 1rem;
													}

													pre, code, samp {
													  font-family: 'Source Code Pro', Consolas, monospace;
													  font-size: inherit;
													}

													pre {
													  margin-top: 0;
													  margin-bottom: 1rem;
													  overflow-x: scroll;
													}

													hr {
													  margin-top: 2rem;
													  margin-bottom: 2rem;
													}

													blockquote {
													  margin-top: 2rem;
													  margin-bottom: 2rem;
													  margin-left: 0;
													  padding-left: 1rem;
													  padding-right: 1rem;
													}
													  blockquote,
													  blockquote p {
													    font-size: 1.25rem;
													    font-style: italic;
													  }

													h1, .h1 { font-size: 2rem }
													h2, .h2 { font-size: 1.5rem }
													h3, .h3 { font-size: 1.25rem }
													h4, .h4 { font-size: 1rem }
													h5, .h5 { font-size: .875rem }
													h6, .h6 { font-size: .75rem }

													.list-reset {
													  list-style: none;
													  padding-left: 0;
													}

													.inline       { display: inline }
													.block        { display: block }
													.inline-block { display: inline-block }

													.overflow-hidden { overflow: hidden }
													.overflow-scroll { overflow: scroll }
													.overflow-auto   { overflow: auto }

													.clearfix:before,
													.clearfix:after {
													  content: " ";
													  display: table
													}
													.clearfix:after { clear: both }

													.left  { float: left }
													.right { float: right }

													.fit { max-width: 100% }

													.half-width { width: 50% }
													.full-width { width: 100% }

													.bold    { font-weight: bold }
													.regular { font-weight: normal }
													.italic  { font-style: italic }
													.caps    { text-transform: uppercase; letter-spacing: .2em; }

													.left-align   { text-align: left }
													.center       { text-align: center }
													.right-align  { text-align: right }
													.justify      { text-align: justify }

													.nowrap { white-space: nowrap }

													.m0  { margin:        0 }
													.mt0 { margin-top:    0 }
													.mr0 { margin-right:  0 }
													.mb0 { margin-bottom: 0 }
													.ml0 { margin-left:   0 }

													.m1  { margin: .5rem }
													.mt1 { margin-top: .5rem }
													.mr1 { margin-right: .5rem }
													.mb1 { margin-bottom: .5rem }
													.ml1 { margin-left: .5rem }

													.m2  { margin: 1rem }
													.mt2 { margin-top: 1rem }
													.mr2 { margin-right: 1rem }
													.mb2 { margin-bottom: 1rem }
													.ml2 { margin-left: 1rem }

													.m3  { margin: 2rem }
													.mt3 { margin-top: 2rem }
													.mr3 { margin-right: 2rem }
													.mb3 { margin-bottom: 2rem }
													.ml3 { margin-left: 2rem }

													.m4  { margin: 4rem }
													.mt4 { margin-top: 4rem }
													.mr4 { margin-right: 4rem }
													.mb4 { margin-bottom: 4rem }
													.ml4 { margin-left: 4rem }

													.mxn1 { margin-left: -.5rem; margin-right: -.5rem; }
													.mxn2 { margin-left: -1rem; margin-right: -1rem; }
													.mxn3 { margin-left: -2rem; margin-right: -2rem; }
													.mxn4 { margin-left: -4rem; margin-right: -4rem; }

													.mx-auto { margin-left: auto; margin-right: auto; }
													.p1  { padding: .5rem }
													.py1 { padding-top: .5rem; padding-bottom: .5rem }
													.px1 { padding-left: .5rem; padding-right: .5rem }

													.p2  { padding: 1rem }
													.py2 { padding-top: 1rem; padding-bottom: 1rem }
													.px2 { padding-left: 1rem; padding-right: 1rem }

													.p3  { padding: 2rem }
													.py3 { padding-top: 2rem; padding-bottom: 2rem }
													.px3 { padding-left: 2rem; padding-right: 2rem }

													.p4  { padding: 4rem }
													.py4 { padding-top: 4rem; padding-bottom: 4rem }
													.px4 { padding-left: 4rem; padding-right: 4rem }

													.sm-show, .md-show, .lg-show {
													  display: none !important
													}

													@media (min-width: 40em) {
													  .sm-show { display: block !important }
													}

													@media (min-width: 52em) {
													  .md-show { display: block !important }
													}

													@media (min-width: 64em) {
													  .lg-show { display: block !important }
													}


													@media (min-width: 40em) {
													  .sm-hide { display: none !important }
													}

													@media (min-width: 52em) {
													  .md-hide { display: none !important }
													}

													@media (min-width: 64em) {
													  .lg-hide { display: none !important }
													}

													.display-none { display: none !important }

													.hide {
													  position: absolute !important;
													  height: 1px;
													  width: 1px;
													  overflow: hidden;
													  clip: rect(1px, 1px, 1px, 1px);
													}

													.relative { position: relative }
													.absolute { position: absolute }
													.fixed    { position: fixed }

													.top-0    { top: 0 }
													.right-0  { right: 0 }
													.bottom-0 { bottom: 0 }
													.left-0   { left: 0 }

													.z1 { z-index: 1 }
													.z2 { z-index: 2 }
													.z3 { z-index: 3 }
													.z4 { z-index: 4 }

													.button-small {
													  padding: .25rem .5rem;
													}

													.button-big {
													  padding: 1rem 1.25rem;
													}

													.button-narrow {
													  padding-left: .5rem;
													  padding-right: .5rem;
													}

													.container {
													  max-width: 64em;
													  margin-left: auto;
													  margin-right: auto;
													}
													.col {
													  float: left;
													  box-sizing: border-box;
													}

													.col-right {
													  float: right;
													  box-sizing: border-box;
													}

													.col-1 {
													  width: 8.33333%;
													}

													.col-2 {
													  width: 16.66667%;
													}

													.col-3 {
													  width: 25%;
													}

													.col-4 {
													  width: 33.33333%;
													}

													.col-5 {
													  width: 41.66667%;
													}

													.col-6 {
													  width: 50%;
													}

													.col-7 {
													  width: 58.33333%;
													}

													.col-8 {
													  width: 66.66667%;
													}

													.col-9 {
													  width: 75%;
													}

													.col-10 {
													  width: 83.33333%;
													}

													.col-11 {
													  width: 91.66667%;
													}

													.col-12 {
													  width: 100%;
													}
													@media (min-width: 40em) {

													  .sm-col {
													    float: left;
													    box-sizing: border-box;
													  }

													  .sm-col-right {
													    float: right;
													    box-sizing: border-box;
													  }

													  .sm-col-1 {
													    width: 8.33333%;
													  }

													  .sm-col-2 {
													    width: 16.66667%;
													  }

													  .sm-col-3 {
													    width: 25%;
													  }

													  .sm-col-4 {
													    width: 33.33333%;
													  }

													  .sm-col-5 {
													    width: 41.66667%;
													  }

													  .sm-col-6 {
													    width: 50%;
													  }

													  .sm-col-7 {
													    width: 58.33333%;
													  }

													  .sm-col-8 {
													    width: 66.66667%;
													  }

													  .sm-col-9 {
													    width: 75%;
													  }

													  .sm-col-10 {
													    width: 83.33333%;
													  }

													  .sm-col-11 {
													    width: 91.66667%;
													  }

													  .sm-col-12 {
													    width: 100%;
													  }

													}
													@media (min-width: 52em) {

													  .md-col {
													    float: left;
													    box-sizing: border-box;
													  }

													  .md-col-right {
													    float: right;
													    box-sizing: border-box;
													  }

													  .md-col-1 {
													    width: 8.33333%;
													  }

													  .md-col-2 {
													    width: 16.66667%;
													  }

													  .md-col-3 {
													    width: 25%;
													  }

													  .md-col-4 {
													    width: 33.33333%;
													  }

													  .md-col-5 {
													    width: 41.66667%;
													  }

													  .md-col-6 {
													    width: 50%;
													  }

													  .md-col-7 {
													    width: 58.33333%;
													  }

													  .md-col-8 {
													    width: 66.66667%;
													  }

													  .md-col-9 {
													    width: 75%;
													  }

													  .md-col-10 {
													    width: 83.33333%;
													  }

													  .md-col-11 {
													    width: 91.66667%;
													  }

													  .md-col-12 {
													    width: 100%;
													  }

													}
													@media (min-width: 64em) {

													  .lg-col {
													    float: left;
													    box-sizing: border-box;
													  }

													  .lg-col-right {
													    float: right;
													    box-sizing: border-box;
													  }

													  .lg-col-1 {
													    width: 8.33333%;
													  }

													  .lg-col-2 {
													    width: 16.66667%;
													  }

													  .lg-col-3 {
													    width: 25%;
													  }

													  .lg-col-4 {
													    width: 33.33333%;
													  }

													  .lg-col-5 {
													    width: 41.66667%;
													  }

													  .lg-col-6 {
													    width: 50%;
													  }

													  .lg-col-7 {
													    width: 58.33333%;
													  }

													  .lg-col-8 {
													    width: 66.66667%;
													  }

													  .lg-col-9 {
													    width: 75%;
													  }

													  .lg-col-10 {
													    width: 83.33333%;
													  }

													  .lg-col-11 {
													    width: 91.66667%;
													  }

													  .lg-col-12 {
													    width: 100%;
													  }

													}

													.flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }

													.flex-column  { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column }
													.flex-wrap    { -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap }

													.flex-center   { -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }
													.flex-baseline { -webkit-box-align: baseline; -webkit-align-items: baseline; -ms-flex-align: baseline; align-items: baseline }
													.flex-stretch  { -webkit-box-align: stretch; -webkit-align-items: stretch; -ms-flex-align: stretch; align-items: stretch }
													.flex-start    { -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start }
													.flex-end      { -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end }

													.flex-justify  { -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between }

													.flex-first { -webkit-box-ordinal-group: 0; -webkit-order: -1; -ms-flex-order: -1; order: -1 }
													.flex-last  { -webkit-box-ordinal-group: 1025; -webkit-order: 1024; -ms-flex-order: 1024; order: 1024 }

													.flex-auto { -webkit-box-flex: 1; -webkit-flex: 1 1 auto; -ms-flex: 1 1 auto; flex: 1 1 auto }
													.flex-grow { -webkit-box-flex: 1; -webkit-flex: 1 0 auto; -ms-flex: 1 0 auto; flex: 1 0 auto }
													.flex-none { -webkit-box-flex: 0; -webkit-flex: none; -ms-flex: none; flex: none }

													.flex > div { box-sizing: border-box }
													@media (min-width: 40em) {
													  .sm-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }
													  .sm-flex > div { box-sizing: border-box }
													}
													@media (min-width: 52em) {
													  .md-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }
													  .md-flex > div { box-sizing: border-box }
													}
													@media (min-width: 64em) {
													  .lg-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }
													  .lg-flex > div { box-sizing: border-box }
													}

													body {
													  color: #111;
													  background-color: white;
													}

													a {
													  color: #0074d9;
													  text-decoration: none;
													}

													a:hover {
													  text-decoration: underline;
													}

													pre, code {
													  background-color: transparent;
													  border-radius: 3px;
													}

													hr {
													  border: 0;
													  border-bottom-style: solid;
													  border-bottom-width: 1px;
													  border-bottom-color: rgba(0,0,0,.125);
													}

													.button {
													  color: white;
													  background-color: #0074d9;
													  border-radius: 3px;
													  -webkit-transition-duration: .05s;
													          transition-duration: .05s;
													  -webkit-transition-timing-function: ease-out;
													          transition-timing-function: ease-out;
													  -webkit-transition-property: box-shadow, background-color;
													          transition-property: box-shadow, background-color;
													}

													.button:hover {
													  box-shadow: inset 0 0 0 20rem rgba(0,0,0,.0625);
													}

													.button:focus {
													  outline: none;
													  border-color: rgba(0,0,0,.125);
													  box-shadow: 0 0 0 3px rgba(0,0,0,.25);
													}

													.button:active,
													.button.is-active {
													  box-shadow: inset 0 0 0 20rem rgba(0,0,0,.125),
													    inset 0 3px 4px 0 rgba(0,0,0,.25),
													    0 0 1px rgba(0,0,0,.125);
													}

													.button:disabled,
													.button.is-disabled {
													  opacity: .5;
													}

													.field-light {
													  background-color: white;
													  -webkit-transition: box-shadow .2s ease;
													          transition: box-shadow .2s ease;
													  border-style: solid;
													  border-width: 1px;
													  border-color: rgba(0,0,0,.125);
													  border-radius: 3px;
													}

													.field-light:focus {
													  outline: none;
													  border-color: #0074d9;
													  box-shadow: 0 0 0 2px rgba(0, 116, 217, 0.5);
													}

													.field-light:disabled {
													  background-color: rgba(0,0,0,.125);
													  opacity: .5;
													}

													.field-light:read-only:not(select) {
													  background-color: rgba(0,0,0,.125);
													}

													.field-light:invalid {
													  border-color: #ff4136;
													}

													.field-light.is-success {
													  border-color: #2ecc40;
													}

													.field-light.is-warning {
													  border-color: #ffdc00;
													}

													.field-light.is-error {
													  border-color: #ff4136;
													}

													.field-dark {
													  color: white;
													  background-color: rgba(0,0,0,.25);
													  border: 1px solid rgba(0,0,0,.0625);
													  border-radius: 3px;
													}

													.field-dark::-webkit-input-placeholder {
													  color: rgba(255,255,255,.75);
													}

													.field-dark::-moz-placeholder {
													  color: rgba(255,255,255,.75);
													}

													.field-dark:-ms-input-placeholder {
													  color: rgba(255,255,255,.75);
													}

													.field-dark::placeholder {
													  color: rgba(255,255,255,.75);
													}

													.field-dark:focus {
													  outline: 0;
													  border: 1px solid rgba(255,255,255,.5);
													  box-shadow: 0 0 0 2px rgba(255,255,255,.25);
													}

													.field-dark:read-only:not(select) {
													  background-color: rgba(255,255,255,.25);
													}

													.field-dark:invalid {
													  border-color: #ff4136;
													}

													.field-dark.is-success {
													  border-color: #2ecc40;
													}

													.field-dark.is-warning {
													  border-color: #ffdc00;
													}

													.field-dark.is-error {
													  border-color: #ff4136;
													}

													input[type=range] {
													  vertical-align: middle;
													  background-color: transparent;
													}

													.range-light {
													  color: inherit;
													  -webkit-appearance: none;
													  padding-top: .5rem;
													  padding-bottom: .5rem;
													}

													.range-light::-webkit-slider-thumb {
													  -webkit-appearance: none;
													  position: relative;
													  width: .5rem;
													  height: 1.25rem;
													  border-radius: 3px;
													  background-color: currentcolor;
													  cursor: pointer;
													  margin-top: -0.5rem;
													}
													.range-light::-webkit-slider-thumb:before {
													  content: '';
													  display: block;
													  position: absolute;
													  top: -0.5rem;
													  left: -0.875rem;
													  width: 2.25rem;
													  height: 2.25rem;
													  opacity: 0;
													}

													.range-light::-moz-range-thumb {
													  width: .5rem;
													  height: 1.25rem;
													  border-radius: 3px;
													  border-color: transparent;
													  border-width: 0;
													  background-color: currentcolor;
													  cursor: pointer;
													}

													.range-light::-webkit-slider-runnable-track {
													  height: 0.25rem;
													  cursor: pointer;
													  border-radius: 3px;
													  background-color: rgba(0,0,0,.25);
													}

													.range-light::-moz-range-track {
													  height: 0.25rem;
													  cursor: pointer;
													  border-radius: 3px;
													  background-color: rgba(0,0,0,.25);
													}

													.range-light:focus {
													  outline: none;
													}

													.range-light:focus::-webkit-slider-thumb {
													  outline: none;
													  border: 0;
													  box-shadow: 0 0 1px 2px currentcolor;
													}

													.range-light:focus::-moz-range-thumb {
													  outline: none;
													  border: 0;
													  box-shadow: 0 0 0 3px rgba(0,0,0,.25);
													}

													.progress {
													  display: block;
													  width: 100%;
													  height: 0.5625rem;
													  margin: .5rem 0;
													  background-color: rgba(0,0,0,.125);
													  border: 0;
													  border-radius: 10000px;
													  overflow: hidden;
													  -webkit-appearance: none;
													}

													.progress::-webkit-progress-bar {
													  -webkit-appearance: none;
													  background-color: rgba(0,0,0,.125)
													}

													.progress::-webkit-progress-value {
													  -webkit-appearance: none;
													  background-color: currentColor;
													}

													.progress::-moz-progress-bar {
													  background-color: currentColor;
													}

													.table-light th,
													.table-light td {
													  border-bottom-width: 1px;
													  border-bottom-style: solid;
													  border-bottom-color: rgba(0,0,0,.125);
													}

													.table-light tr:last-child td {
													  border-bottom: 0;
													}

													.button-outline {
													  position: relative;
													  z-index: 2;
													  color: inherit;
													  background-color: transparent;
													  border-radius: 3px;
													  border: 1px solid currentcolor;
													}

													.button-outline::before {
													  content: '';
													  display: block;
													  position: absolute;
													  z-index: -1;
													  top: -1px;
													  right: -1px;
													  bottom: -1px;
													  left: -1px;
													  border: 1px solid transparent;
													  background-color: currentcolor;
													  border-radius: 3px;
													  opacity: 0;
													}

													.button-outline:hover {
													  box-shadow: none;
													}

													.button-outline:hover::before,
													.button-outline:focus::before {
													  opacity: .125;
													}

													.button-outline:focus {
													  outline: none;
													  border: 1px solid currentcolor;
													  box-shadow: 0 0 0 2px;
													}

													.button-outline:active,
													.button-outline.is-active {
													  box-shadow: inset 0 1px 5px 0, 0 0 1px;
													}

													.button-outline:disabled,
													.button-outline.is-disabled {
													  opacity: .5;
													}

													.button-transparent {
													  position: relative;
													  z-index: 2;
													  color: inherit;
													  background-color: transparent;
													  border-radius: 0;
													  border: 1px solid transparent;
													}

													.button-transparent::before {
													  content: '';
													  display: block;
													  position: absolute;
													  z-index: -1;
													  top: -1px;
													  right: -1px;
													  bottom: -1px;
													  left: -1px;
													  border: 1px solid transparent;
													  background-color: currentcolor;
													  opacity: 0;
													}

													.button-transparent:hover {
													  box-shadow: none;
													}

													.button-transparent:hover::before, 
													.button-transparent:focus::before {
													  opacity: .09375;
													}

													.button-transparent:focus {
													  outline: none;
													  border-color: transparent;
													  box-shadow: 0 0 0 2px; 
													}

													.button-transparent:active,
													.button-transparent.is-active {
													  box-shadow: none;
													}

													.button-transparent:active::before,
													.button-transparent.is-active::before {
													  opacity: .0625;
													}

													.button-transparent:disabled,
													.button-transparent.is-disabled {
													  opacity: .5;
													}

													.bg-cover   { background-size: cover }
													.bg-contain { background-size: contain }

													.bg-center  { background-position: center }
													.bg-top     { background-position: top }
													.bg-right   { background-position: right }
													.bg-bottom  { background-position: bottom }
													.bg-left    { background-position: left }

													.border {
													  border-style: solid;
													  border-width: 1px;
													  border-color: rgba(0,0,0,.125);
													}

													.border-top {
													  border-top-style: solid;
													  border-top-width: 1px;
													  border-top-color: rgba(0,0,0,.125);
													}

													.border-right {
													  border-right-style: solid;
													  border-right-width: 1px;
													  border-right-color: rgba(0,0,0,.125);
													}

													.border-bottom {
													  border-bottom-style: solid;
													  border-bottom-width: 1px;
													  border-bottom-color: rgba(0,0,0,.125);
													}

													.border-left {
													  border-left-style: solid;
													  border-left-width: 1px;
													  border-left-color: rgba(0,0,0,.125);
													}

													.rounded { border-radius: 3px }
													.circle  { border-radius: 50% }

													.rounded-top    { border-radius: 3px 3px 0 0 }
													.rounded-right  { border-radius: 0 3px 3px 0 }
													.rounded-bottom { border-radius: 0 0 3px 3px }
													.rounded-left   { border-radius: 3px 0 0 3px }

													.not-rounded { border-radius: 0 }

													.black, .dark-gray   { color: #111 }
													.gray, .mid-gray     { color: #aaa }
													.silver, .light-gray { color: #ddd }
													.white { color: #fff }

													.aqua  { color: #7fdbff }
													.blue  { color: #0074d9 }
													.navy  { color: #001f3f }
													.teal  { color: #39cccc }
													.green { color: #2ecc40 }
													.olive { color: #3d9970 }
													.lime  { color: #01ff70 }

													.yellow  { color: #ffdc00 }
													.orange  { color: #ff851b }
													.red     { color: #ff4136 }
													.fuchsia { color: #f012be }
													.purple  { color: #b10dc9 }
													.maroon  { color: #85144b }

													.bg-black, .bg-dark-gray   { background-color: #111 }
													.bg-gray, .bg-mid-gray     { background-color: #aaa }
													.bg-silver, .bg-light-gray { background-color: #ddd }
													.bg-white  { background-color: #fff }

													.bg-aqua  { background-color: #7fdbff }
													.bg-blue  { background-color: #0074d9 }
													.bg-navy  { background-color: #001f3f }
													.bg-teal  { background-color: #39cccc }
													.bg-green { background-color: #2ecc40 }
													.bg-olive { background-color: #3d9970 }
													.bg-lime  { background-color: #01ff70 }

													.bg-yellow  { background-color: #ffdc00 }
													.bg-orange  { background-color: #ff851b }
													.bg-red     { background-color: #ff4136 }
													.bg-fuchsia { background-color: #f012be }
													.bg-purple  { background-color: #b10dc9 }
													.bg-maroon  { background-color: #85144b }

													.bg-darken-1 { background-color: rgba(0,0,0,.0625) }
													.bg-darken-2 { background-color: rgba(0,0,0,.125) }
													.bg-darken-3 { background-color: rgba(0,0,0,.25) }
													.bg-darken-4 { background-color: rgba(0,0,0,.5) }

													.border-aqua  { border-color: #7fdbff }
													.border-blue  { border-color: #0074d9 }
													.border-navy  { border-color: #001f3f }
													.border-teal  { border-color: #39cccc }
													.border-green { border-color: #2ecc40 }
													.border-olive { border-color: #3d9970 }
													.border-lime  { border-color: #01ff70 }

													.border-yellow  { border-color: #ffdc00 }
													.border-orange  { border-color: #ff851b }
													.border-red     { border-color: #ff4136 }
													.border-fuchsia { border-color: #f012be }
													.border-purple  { border-color: #b10dc9 }
													.border-maroon  { border-color: #85144b }

													.border-black  { border-color: #111 }
													.border-gray   { border-color: #aaa }
													.border-silver { border-color: #ddd }
													.border-white  { border-color: #fff }

													.border-darken-1 { border-color: rgba(0,0,0,.0625) }
													.border-darken-2 { border-color: rgba(0,0,0,.125) }
													.border-darken-3 { border-color: rgba(0,0,0,.25) }
													.border-darken-4 { border-color: rgba(0,0,0,.5) }
													.muted { opacity: .5 }
												</style>

												<section class="mb3 mx-auto col col-12">
											  		<div class="p3 clearfix bg-yellow maroon">
														<div class="col col-12 mb1">
															<h2 class="h3 m0">Sortable Copy</h2>
														</div>
														<div class="col col-6">
															<div class="p2 bg-yellow border maroon border-maroon mt1">
															<code class="mb0">
																<div>sortable('.o-sortable', {</div>
																<div class="px2 muted">copy:true // default to false</div>
																<div>});</div>
															</code>
														</div>
															<h2 class="h4 mt1">Copy items here</h2>
															<ul class="p2 border maroon border-maroon js-sortable-copy-target sortable list flex flex-column list-reset" aria-dropeffect="move">
															</ul>
														</div>
														<div class="col col-6">
															<ul class="ml4 js-sortable-copy sortable list flex flex-column list-reset" aria-dropeffect="move">
																<li class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10" draggable="true" role="option" aria-grabbed="false">Item 1</li>
																<li class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10" draggable="true" role="option" aria-grabbed="false">Item 2</li>
																<li class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10" draggable="true" role="option" aria-grabbed="false">Item 3</li>
																<li class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10" draggable="true" role="option" aria-grabbed="false">Item 4</li>
																<li class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10" draggable="true" role="option" aria-grabbed="false">Item 5</li>
																<li class="p1 mb1 yellow bg-maroon" style="position: relative; z-index: 10" draggable="true" role="option" aria-grabbed="false">Item 6</li>
															</ul>
														</div>
													</div>
												</section>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="alm-xs-100 alm-sm-25">
						<div class="alm-admin-page-block-sidebar">

							<!-- Page Builder -->
							<div class="alm-admin-page-block">
								<div class="alm-admin-page-block-sidebar-header alm-wrapper">
									<div class="alm-admin-page-block-sidebar-title">
										page builder
									</div>
								</div>
								<div class="alm-admin-page-block-sidebar-content">
									<div class="alm-admin-page-builder">
										<div class="alm-admin-page-builder-section">
											<div class="alm-page-build-title">
												Main Blocks
											</div>
											<div class="alm-page-builder-list connected-sortable">
												<div class="alm-admin-page-builder-item draggable-item">Title</div>
												<div class="alm-admin-page-builder-item draggable-item">Cover</div>
												<div class="alm-admin-page-builder-item draggable-item">Body</div>
											</div>
										</div>
										<div class="alm-admin-page-builder-section">
											<div class="alm-page-build-title">
												Secondary Blocks
											</div>
											<div class="alm-page-builder-list connected-sortable">
												<div class="alm-admin-page-builder-item draggable-item">Section</div>
												<div class="alm-admin-page-builder-item draggable-item">Block</div>
												<div class="alm-admin-page-builder-item draggable-item">Carousel</div>
												<div class="alm-admin-page-builder-item draggable-item">Form</div>
												<div class="alm-admin-page-builder-item draggable-item">Image/Video</div>
												<div class="alm-admin-page-builder-item draggable-item">Text</div>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>`;
		container.append(content);

		sortable('.o-sortable', {
			copy:true // default to false
		});

		sortable('.js-sortable-copy', {
		  forcePlaceholderSize: true,
		  copy: true,
				acceptFrom: false,
		  placeholderClass: 'mb1 bg-navy border border-yellow',
		});
		sortable('.js-sortable-copy-target', {
		forcePlaceholderSize: true,
			acceptFrom: '.js-sortable-copy,.js-sortable-copy-target',
		placeholderClass: 'mb1 border border-maroon',
	  });
		sortable('.js-grid', {
					forcePlaceholderSize: true,
					placeholderClass: 'col col-4 border border-maroon'
				});
		sortable('.js-sortable-connected', {
			forcePlaceholderSize: true,
			connectWith: '.js-connected',
			handle: '.js-handle',
			items: 'li',
			placeholderClass: 'border border-white bg-orange mb1'
		});
		sortable('.js-sortable-inner-connected', {
			forcePlaceholderSize: true,
			connectWith: 'js-inner-connected',
			handle: '.js-inner-handle',
			items: '.item',
	maxItems: 3,
			placeholderClass: 'border border-white bg-orange mb1'
		});
		document.querySelector('.js-sortable-connected').addEventListener('sortupdate', function(e){
			console.log('Sortupdate: ', e.detail);
			console.log('Container: ', e.detail.origin.container, ' -> ', e.detail.destination.container);
			console.log('Index: '+e.detail.origin.index+' -> '+e.detail.destination.index);
			console.log('Element Index: '+e.detail.origin.elementIndex+' -> '+e.detail.destination.elementIndex);
		});

		document.querySelector('.js-sortable-connected').addEventListener('sortstart', function(e){
			console.log('Sortstart: ', e.detail);
		});

		document.querySelector('.js-sortable-connected').addEventListener('sortstop', function(e){
			console.log('Sortstop: ', e.detail);
		});

		sortable('.js-sortable-buttons', {
			forcePlaceholderSize: true,
			items: 'li',
			placeholderClass: 'border border-white mb1',
      hoverClass: 'bg-yellow'
		});
		// buttons to add items and reload the list
		// separately to showcase issue without reload
		document.querySelector('.js-add-item-button').addEventListener('click', function(){
			doc = new DOMParser().parseFromString(`<li class="p1 mb1 blue bg-white">new item</li>`, "text/html").body.firstChild;
			document.querySelector('.js-sortable-buttons').appendChild(doc);
		});

		document.querySelector('.js-reload').addEventListener('click', function(){
			console.log('Options before re-init:');
			console.log(document.querySelector('.js-sortable-buttons').h5s.data.opts);
			sortable('.js-sortable-buttons');
			console.log('Options after re-init:');
			console.log(document.querySelector('.js-sortable-buttons').h5s.data.opts);
		});
		// JS DISABLED
		document.querySelector('.js-disable').addEventListener('click', function(){
			var $list = document.querySelector('[data-disabled]');
			if ( $list.getAttribute('data-disabled') === 'false' ) {
				this.innerHTML = 'Enable';
				sortable($list, 'disable');
				$list.setAttribute('data-disabled', true);
				$list.classList.add('muted');
			} else {
				this.innerHTML = 'Disable';
				sortable($list, 'enable');
				$list.setAttribute('data-disabled', false);
				$list.classList.remove('muted');
			}
		});

		// Destroy & Init
		document.querySelector('.js-destroy').addEventListener('click', function(){
			sortable('.js-sortable-buttons', 'destroy');
		});
		document.querySelector('.js-init').addEventListener('click', function(){
			sortable('.js-sortable-buttons', {
				forcePlaceholderSize: true,
				items: 'li',
				placeholderClass: 'border border-white mb1'
			});
		});

		// initiate editor
		// editor.init({
		// 	'id':'alm-admin-post-editor',
		// 	'theme':'ace/theme/chrome',
		// 	'mode':'ace/mode/html',
		// 	'language':{
		// 		'name':'html',
		// 		'ext':'html'
		// 	},
		// 	'code':'',
		// 	'wrap':true,
		// 	'margin':false,
		// 	'focus':true,
		// 	'readonly':false,
		// 	'template':'',
		// 	'shadow':true,
		// 	'style':{
		// 		'font-size':'11px'
		// 	}
		// });

	}

}