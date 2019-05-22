const component = {
	/**
	 * * Sample Usage:
	 * * Mokihi.component.query('button[property = value]');
	 *
	 * @param {string} queryString
	 */
	query: function (queryString = '') {
		if (!queryString) return undefined;
		return Ext.ComponentQuery.query(queryString)[0];
	},
	/**
	 * * Sample Usage:
	 * * Mokihi.component.getByReference('button', 'button-reference-value');
	 *
	 * @param {string} component
	 * @param {string} reference
	 */
	getByReference: function (component = '', reference = '') {
		if (!component || !reference) return undefined;
		return Ext.ComponentQuery.query(`${component}[reference = ${reference}]`)[0];
	}
};

module.exports = component;