/**
 * ! Dependencies:
 * ! Mokihi.component
 * ! Mokihi.store
 */

const combobox = {
	/**
	 * * Sample Usage:
	 * * Mokihi.combobox.get('reference');
	 *
	 * @param {string} reference
	 */
	get: function (reference = '') {
		return Mokihi.component.reference('combobox', reference);
	},
	/**
	 * * Sample Usage:
	 * * Mokihi.combobox.setup('reference', 'url', { key: value });
	 *
	 * @param {string} reference
	 * @param {string} storeUrl
	 * @param {object} filters
	 */
	setup: function (reference = '', storeUrl = '', filters = {}) {
		var combobox = Mokihi.component.reference('combobox', reference),
			store = Mokihi.store.create(storeUrl, filters, combobox);

		combobox.bindStore(store);
	},
	/**
	 * * Sample Usage: Mokihi.combobox.getRecordById('reference', 2);
	 *
	 * @param {string} reference
	 * @param {number} id
	 */
	getRecordById: function (reference = '', id = 0) {
		return Mokihi.component.reference('combobox', reference).findRecord('id', id);
	},
};

module.exports = combobox;