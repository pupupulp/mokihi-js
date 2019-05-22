/**
 * ! Dependencies:
 * ! Mokihi.component
 */

const button = {
	/**
	 * * Sample Usage:
	 * * Mokihi.button.getByReference('reference');
	 *
	 * @param {string} reference
	 */
	getByReference: function (reference = '') {
		return Mokihi.component.getByReference('button', reference);
	},
	/**
	 * * Sample Usage:
	 * * Mokihi.button.disable('reference');
	 *
	 * @param {string} reference
	 */
	disable: function (reference = '') {
		Mokihi.component.getByReference('button', reference).setDisabled(true);
	},
	/**
	 * * Sample Usage:
	 * * Mokihi.button.enable('reference');
	 *
	 * @param {string} reference
	 */
	enable: function (reference = '') {
		Mokihi.component.getByReference('button', reference).setDisabled(false);
	}
};

module.exports = button;