const ajax = {
	/**
	 * * Sample Usage:
	 * * Mokihi.ajax.request('url', 'GET', { key: value }, function (){}, function (){}, false);
	 *
	 * @param {string} url
	 * @param {string} method
	 * @param {object} params
	 * @param {function} sucessCallback
	 * @param {function} failureCallback
	 * @param {boolean} async
	 */
	request: function (url = '', method = '', params = {}, sucessCallback = null, failureCallback = null, async = true) {
		return Ext.Ajax.request({
			async: async,
			url: url,
			method: method,
			params: params,
			success: function (response) {
				sucessCallback(Ext.decode(response.responseText));
			},
			failure: function (response) {
				failureCallback(Ext.decode(response.responseText));
			}
		});
	},
	/**
	 * * Sample Usage:
	 * * Mokihi.ajax.get('url', { key: value }, function (){}, function (){}, false);
	 *
	 * @param {string} url
	 * @param {object} params
	 * @param {function} sucessCallback
	 * @param {function} failureCallback
	 * @param {boolean} async
	 */
	get: function (url = '', params = {}, sucessCallback = null, failureCallback = null, async = true) {
		return Ext.Ajax.request({
			async: async,
			url: url,
			method: 'GET',
			params: params,
			success: function (response) {
				sucessCallback(Ext.decode(response.responseText));
			},
			failure: function (response) {
				failureCallback(Ext.decode(response.responseText));
			}
		});
	},
	/**
	 * * Sample Usage:
	 * * Mokihi.ajax.post('url', { key: value }, function (){}, function (){}, false);
	 *
	 * @param {string} url
	 * @param {object} params
	 * @param {function} sucessCallback
	 * @param {function} failureCallback
	 * @param {boolean} async
	 */
	post: function (url = '', params = {}, sucessCallback = null, failureCallback = null, async = true) {
		return Ext.Ajax.request({
			async: async,
			url: url,
			method: 'POST',
			params: params,
			success: function (response) {
				sucessCallback(Ext.decode(response.responseText));
			},
			failure: function (response) {
				failureCallback(Ext.decode(response.responseText));
			}
		});
	},
	/**
	 * * Sample Usage:
	 * * Mokihi.ajax.put('url', { key: value }, function (){}, function (){}, false);
	 *
	 * @param {string} url
	 * @param {object} params
	 * @param {function} sucessCallback
	 * @param {function} failureCallback
	 * @param {boolean} async
	 */
	put: function (url = '', params = {}, sucessCallback = null, failureCallback = null, async = true) {
		return Ext.Ajax.request({
			async: async,
			url: url,
			method: 'PUT',
			params: params,
			success: function (response) {
				sucessCallback(Ext.decode(response.responseText));
			},
			failure: function (response) {
				failureCallback(Ext.decode(response.responseText));
			}
		});
	},
	/**
	 * * Sample Usage:
	 * * Mokihi.ajax.delete('url', { key: value }, function (){}, function (){}, false);
	 *
	 * @param {string} url
	 * @param {object} params
	 * @param {function} sucessCallback
	 * @param {function} failureCallback
	 * @param {boolean} async
	 */
	delete: function (url = '', params = {}, sucessCallback = null, failureCallback = null, async = true) {
		return Ext.Ajax.request({
			async: async,
			url: url,
			method: 'DELETE',
			params: params,
			success: function (response) {
				sucessCallback(Ext.decode(response.responseText));
			},
			failure: function (response) {
				failureCallback(Ext.decode(response.responseText));
			}
		});
	},
};

module.exports = ajax;