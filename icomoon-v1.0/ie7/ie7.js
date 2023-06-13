/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'atra-laptop': '&#xe91b;',
		'atra-pc-laptop': '&#xe91c;',
		'atra-icon-24': '&#xe918;',
		'atra-icon-star': '&#xe91a;',
		'atra-icon-arrow-down': '&#xe900;',
		'atra-icon-arrow-left': '&#xe901;',
		'atra-icon-arrow-left-1': '&#xe902;',
		'atra-icon-arrow-right': '&#xe903;',
		'atra-icon-arrow-up': '&#xe904;',
		'atra-icon-call': '&#xe905;',
		'atra-icon-coine': '&#xe906;',
		'atra-icon-comment': '&#xe907;',
		'atra-icon-compersion': '&#xe908;',
		'atra-icon-diamond': '&#xe909;',
		'atra-icon-envelop': '&#xe90a;',
		'atra-icon-flower-pot': '&#xe90b;',
		'atra-icon-hands': '&#xe90c;',
		'atra-icon-hart': '&#xe90d;',
		'atra-icon-instagram': '&#xe90e;',
		'atra-icon-lcall': '&#xe90f;',
		'atra-icon-linkedin': '&#xe910;',
		'atra-icon-phone': '&#xe911;',
		'atra-icon-product': '&#xe912;',
		'atra-icon-search': '&#xe913;',
		'atra-icon-shoping-bag': '&#xe914;',
		'atra-icon-track': '&#xe915;',
		'atra-icon-user': '&#xe916;',
		'atra-icon-watch': '&#xe917;',
		'atra-icon-whatsapp': '&#xe919;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/atra-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
