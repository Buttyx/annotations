/**
 *  Copyright 2012, Entwine GmbH, Switzerland
 *  Licensed under the Educational Community License, Version 2.0
 *  (the "License"); you may not use this file except in compliance
 *  with the License. You may obtain a copy of the License at
 *
 *  http://www.osedu.org/licenses/ECL-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an "AS IS"
 *  BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 *  or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 *
 */

/**
 * A module representing the comment model
 * @module models-comment
 * @requires jQuery
 * @requires ACCESS
 * @requires backbone
 */
define(["jquery",
        "access",
        "backbone"],

    function ($, ACCESS, Backbone) {

        "use strict";

        /**
         * @constructor
         * @see {@link http://www.backbonejs.org/#Model}
         * @augments module:Backbone.Model
         * @memberOf module:models-comment
         * @alias module:models-comment.Comment
         */
        var Comment = Backbone.Model.extend({

            /**
             * Default models value
             * @alias module:models-comment.Comment#defaults
             * @type {map}
             * @static
             */
            defaults: {
                created_at: null,
                created_by: null,
                updated_at: null,
                updated_by: null,
                deleted_at: null,
                deleted_by: null,
                access: ACCESS.PUBLIC
            },

            /**
             * Constructor
             * @alias module:models-comment.Comment#initialize
             * @param {object} attr Object literal containing the model initialion attributes.
             */
            initialize: function (attr) {
                if (!attr || _.isUndefined(attr.text)) {
                    throw "'text' attribute is required";
                }

                // Check if the comment has been initialized
                if (!attr.id) {
                    // If local storage, we set the cid as id
                    if (window.annotationsTool.localStorage) {
                        attr.id = this.cid;
                    }

                    this.toCreate = true;
                }

                if (window.annotationsTool.localStorage) {
                    if (!attr.created_by) {
                        attr.created_by = annotationsTool.user.get("id");
                    }

                    if (!attr.created_by_nickname) {
                        attr.created_by_nickname = annotationsTool.user.get("nickname");
                    }
                }

                if (attr.tags) {
                    attr.tags = this.parseJSONString(attr.tags);
                }

                this.set(attr);
            },

            /**
             * Parse the attribute list passed to the model
             * @alias module:models-comment.Comment#parse
             * @param  {object} data Object literal containing the model attribute to parse.
             * @return {object}  The object literal with the list of parsed model attribute.
             */
            parse: function (data) {
                var attr = data.attributes ? data.attributes : data;

                attr.created_at = attr.created_at !== null ? Date.parse(attr.created_at): null;
                attr.updated_at = attr.updated_at !== null ? Date.parse(attr.updated_at): null;
                attr.deleted_at = attr.deleted_at !== null ? Date.parse(attr.deleted_at): null;

                // Parse tags if present
                if (attr.tags) {
                    attr.tags = this.parseJSONString(attr.tags);
                }

                if (data.attributes) {
                    data.attributes = attr;
                } else {
                    data = attr;
                }

                return data;
            },

            /**
             * Validate the attribute list passed to the model
             * @alias module:models-comment.Comment#validate
             * @param  {object} data Object literal containing the model attribute to validate.
             * @return {string}  If the validation failed, an error message will be returned.
             */
            validate: function (attr) {
                var tmpCreated;

                if (attr.id) {
                    if (this.get("id") !== attr.id) {
                        this.id = attr.id;
                        this.attributes.id = attr.id;
                        this.toCreate = false;
                    }
                }

                if (attr.text &&  !_.isString(attr.text)) {
                    return "\"text\" attribute must be a string!";
                }

                if (attr.tags && _.isUndefined(this.parseJSONString(attr.tags))) {
                    return "\"tags\" attribute must be a string or a JSON object";
                }

                if (attr.access && !_.include(ACCESS, attr.access)) {
                    return "\"access\" attribute is not valid.";
                }

                if (attr.created_at) {
                    if ((tmpCreated = this.get("created_at")) && tmpCreated !== attr.created_at) {
                        return "\"created_at\" attribute can not be modified after initialization!";
                    } else if (!_.isNumber(attr.created_at)) {
                        return "\"created_at\" attribute must be a number!";
                    }
                }

                if (attr.updated_at) {
                    if (!_.isNumber(attr.updated_at)) {
                        return "\"updated_at\" attribute must be a number!";
                    }
                }

                if (attr.deleted_at) {
                    if (!_.isNumber(attr.deleted_at)) {
                        return "\"deleted_at\" attribute must be a number!";
                    }
                }
            },

            /**
             * Parse the given parameter to JSON if given as String
             * @alias module:models-comment.Comment#parseJSONString
             * @param  {string} parameter the parameter as String
             * @return {JSON} parameter as JSON object
             */
            parseJSONString: function (parameter) {
                if (parameter && _.isString(parameter)) {
                    try {
                        parameter = JSON.parse(parameter);
                    } catch (e) {
                        console.warn("Can not parse parameter '" + parameter + "': " + e);
                        return undefined;
                    }
                } else if (!_.isObject(parameter) || _.isFunction(parameter)) {
                    return undefined;
                }

                return parameter;
            },

            /**
             * Override the default toJSON function to ensure complete JSONing.
             * @alias module:models-comment.Comment#toJSON
             * @return {JSON} JSON representation of the instance
             */
            toJSON: function () {
                var json = $.proxy(Backbone.Model.prototype.toJSON, this)();
                if (json.tags) {
                    json.tags = JSON.stringify(json.tags);
                }
                return json;
            }
        });
        return Comment;
    }
);