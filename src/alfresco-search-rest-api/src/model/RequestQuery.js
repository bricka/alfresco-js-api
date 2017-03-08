/**
 * Alfresco Content Services REST API
 * **Search API**  Provides access to the search features of Alfresco Content Services. 
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.RequestQuery = factory(root.AlfrescoContentServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RequestQuery model module.
   * @module model/RequestQuery
   * @version 1
   */

  /**
   * Constructs a new <code>RequestQuery</code>.
   * Query.
   * @alias module:model/RequestQuery
   * @class
   * @param query {String} The query which may have been generated in some way from the userQuery
   */
  var exports = function(query) {
    var _this = this;



    _this['query'] = query;
  };

  /**
   * Constructs a <code>RequestQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestQuery} obj Optional instance to populate.
   * @return {module:model/RequestQuery} The populated <code>RequestQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('userQuery')) {
        obj['userQuery'] = ApiClient.convertToType(data['userQuery'], 'String');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
    }
    return obj;
  }

  /**
   * The query language in which the query is written.
   * @member {module:model/RequestQuery.LanguageEnum} language
   * @default 'afts'
   */
  exports.prototype['language'] = 'afts';
  /**
   * The exact search request typed in by the user
   * @member {String} userQuery
   */
  exports.prototype['userQuery'] = undefined;
  /**
   * The query which may have been generated in some way from the userQuery
   * @member {String} query
   */
  exports.prototype['query'] = undefined;


  /**
   * Allowed values for the <code>language</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LanguageEnum = {
    /**
     * value: "afts"
     * @const
     */
    "afts": "afts",
    /**
     * value: "lucene"
     * @const
     */
    "lucene": "lucene",
    /**
     * value: "cmis"
     * @const
     */
    "cmis": "cmis"  };


  return exports;
}));


