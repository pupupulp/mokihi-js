/**
 * ! Dependencies:
 * ! Mokihi.component
 */

const button = {
	/**
	 * * Sample Usage:
	 * * Mokihi.button.get('reference');
	 *
	 * @param {string} reference
	 */
	get: function (reference = '') {
		return Mokihi.component.reference('button', reference);
	},
	/**
	 * * Sample Usage:
	 * * Mokihi.button.disable('reference');
	 *
	 * @param {string} reference
	 */
	disable: function (reference = '') {
		Mokihi.component.reference('button', reference).setDisabled(true);
	},
	/**
	 * * Sample Usage:
	 * * Mokihi.button.enable('reference');
	 *
	 * @param {string} reference
	 */
	enable: function (reference = '') {
		Mokihi.component.reference('button', reference).setDisabled(false);
	}
};

module.exports = button;