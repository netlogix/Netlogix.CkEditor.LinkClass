/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = readFromConsumerApi;
function readFromConsumerApi(key) {
    return function () {
        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']['@' + key]) {
            var _window$NeosHostPlu;

            return (_window$NeosHostPlu = window['@Neos:HostPluginAPI'])['@' + key].apply(_window$NeosHostPlu, arguments);
        }

        throw new Error('You are trying to read from a consumer api that hasn\'t been initialized yet!');
    };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().plow;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().CkEditor5;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _neosUiExtensibility = __webpack_require__(5);

var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);

var _plowJs = __webpack_require__(1);

var _linkClassPlugin = __webpack_require__(9);

var _linkClassPlugin2 = _interopRequireDefault(_linkClassPlugin);

var _linkClassComponent = __webpack_require__(11);

var _linkClassComponent2 = _interopRequireDefault(_linkClassComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addPlugin = function addPlugin(Plugin, isEnabled) {
	return function (ckEditorConfiguration, options) {
		if (!isEnabled || isEnabled(options.editorOptions, options)) {
			ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
			return (0, _plowJs.$add)('plugins', Plugin, ckEditorConfiguration);
		}
		return ckEditorConfiguration;
	};
};

(0, _neosUiExtensibility2.default)('Netlogix.CkEditor.LinkClass', {}, function (globalRegistry) {
	var config = globalRegistry.get('ckEditor5').get('config');
	config.set('netlogixLinkClass', addPlugin(_linkClassPlugin2.default, (0, _plowJs.$get)('formatting.a')));

	var containerRegistry = globalRegistry.get('containers');
	containerRegistry.set('LinkInput/OptionsPanel/NetlogixLinkClass', _linkClassComponent2.default);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createConsumerApi = undefined;

var _createConsumerApi = __webpack_require__(6);

var _createConsumerApi2 = _interopRequireDefault(_createConsumerApi);

var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _readFromConsumerApi2.default)('manifest');
exports.createConsumerApi = _createConsumerApi2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createConsumerApi;

var _package = __webpack_require__(7);

var _manifest = __webpack_require__(8);

var _manifest2 = _interopRequireDefault(_manifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createReadOnlyValue = function createReadOnlyValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    };
};

function createConsumerApi(manifests, exposureMap) {
    var api = {};

    Object.keys(exposureMap).forEach(function (key) {
        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
    });

    Object.defineProperty(api, '@manifest', createReadOnlyValue((0, _manifest2.default)(manifests)));

    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
    Object.defineProperty(window['@Neos:HostPluginAPI'], 'VERSION', createReadOnlyValue(_package.version));
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"name":"@neos-project/neos-ui-extensibility","version":"1.4.1","description":"Extensibility mechanisms for the Neos CMS UI","main":"./src/index.js","scripts":{"prebuild":"check-dependencies && yarn clean","test":"yarn jest -- -w 2 --coverage","test:watch":"yarn jest -- --watch","build":"exit 0","build:watch":"exit 0","clean":"rimraf ./lib ./dist","lint":"eslint src","jest":"NODE_ENV=test jest"},"devDependencies":{"@neos-project/babel-preset-neos-ui":"1.4.1","@neos-project/jest-preset-neos-ui":"1.4.1"},"dependencies":{"@neos-project/build-essentials":"1.4.1","@neos-project/positional-array-sorter":"1.4.1","babel-core":"^6.13.2","babel-eslint":"^7.1.1","babel-loader":"^7.1.2","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-object-rest-spread":"^6.20.1","babel-plugin-webpack-alias":"^2.1.1","babel-preset-es2015":"^6.13.2","babel-preset-react":"^6.3.13","babel-preset-stage-0":"^6.3.13","chalk":"^1.1.3","css-loader":"^0.28.4","file-loader":"^1.1.5","json-loader":"^0.5.4","postcss-loader":"^2.0.10","react-dev-utils":"^0.5.0","style-loader":"^0.21.0"},"bin":{"neos-react-scripts":"./bin/neos-react-scripts.js"},"jest":{"preset":"@neos-project/jest-preset-neos-ui"}}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (manifests) {
    return function (identifier, options, bootstrap) {
        manifests.push(_defineProperty({}, identifier, {
            options: options,
            bootstrap: bootstrap
        }));
    };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _linkClassCommand = __webpack_require__(10);

var _linkClassCommand2 = _interopRequireDefault(_linkClassCommand);

var _ckeditor5Exports = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkClassPlugin = function (_Plugin) {
	_inherits(LinkClassPlugin, _Plugin);

	function LinkClassPlugin() {
		_classCallCheck(this, LinkClassPlugin);

		return _possibleConstructorReturn(this, (LinkClassPlugin.__proto__ || Object.getPrototypeOf(LinkClassPlugin)).apply(this, arguments));
	}

	_createClass(LinkClassPlugin, [{
		key: 'init',
		value: function init() {
			var editor = this.editor;
			editor.model.schema.extend('$text', { allowAttributes: 'netlogixLinkClass' });

			editor.conversion.for('downcast').attributeToElement({
				model: 'netlogixLinkClass',
				view: function view(value, writer) {
					return writer.createAttributeElement('a', { 'class': value }, { priority: 5 });
				}
			});
			editor.conversion.for('upcast').elementToAttribute({
				view: {
					name: 'a',
					attributes: {
						class: true
					}
				},
				model: {
					key: 'netlogixLinkClass',
					value: function value(viewElement) {
						return viewElement.getAttribute('class');
					}
				}
			});

			this.editor.commands.add('netlogixLinkClass', new _linkClassCommand2.default(editor));
		}
	}], [{
		key: 'pluginName',
		get: function get() {
			return 'NetlogixLinkClass';
		}
	}]);

	return LinkClassPlugin;
}(_ckeditor5Exports.Plugin);

exports.default = LinkClassPlugin;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ckeditor5Exports = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassCommand = function (_Command) {
	_inherits(ClassCommand, _Command);

	function ClassCommand() {
		_classCallCheck(this, ClassCommand);

		return _possibleConstructorReturn(this, (ClassCommand.__proto__ || Object.getPrototypeOf(ClassCommand)).apply(this, arguments));
	}

	_createClass(ClassCommand, [{
		key: 'refresh',
		value: function refresh() {
			var model = this.editor.model;
			var doc = model.document;

			this.isEnabled = model.schema.checkAttributeInSelection(doc.selection, 'netlogixLinkClass');
			if (doc.selection.hasAttribute('netlogixLinkClass')) {
				this.value = doc.selection.getAttribute('netlogixLinkClass');
			} else {
				var parent = doc.selection.getFirstPosition().parent;
				this.value = parent.getAttribute('netlogixLinkClass');
			}
		}
	}, {
		key: 'execute',
		value: function execute(value) {
			var _this2 = this;

			var model = this.editor.model;
			var doc = model.document;
			var selection = doc.selection;
			value = value === undefined || value === '' ? false : value;

			model.change(function (writer) {
				if (selection.isCollapsed) {
					var position = selection.getFirstPosition().parent;

					if (selection.hasAttribute('netlogixLinkClass')) {
						var itempropRange = _this2.findItemprop(selection.getFirstPosition(), selection.getAttribute('netlogixLinkClass'));
						if (value === false) {
							writer.removeAttribute('netlogixLinkClass', itempropRange);
						} else {
							writer.setAttribute('netlogixLinkClass', value, itempropRange);
							writer.setSelection(itempropRange);
						}
					} else {
						if (value === false) {
							writer.removeAttribute('netlogixLinkClass', position);
						} else {
							writer.setAttribute('netlogixLinkClass', value, position);
						}
					}
				} else {
					var ranges = model.schema.getValidRanges(selection.getRanges(), 'netlogixLinkClass');

					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = ranges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var range = _step.value;

							if (value === false) {
								writer.removeAttribute('netlogixLinkClass', range);
							} else {
								writer.setAttribute('netlogixLinkClass', value, range);
							}
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				}
			});
		}
	}, {
		key: 'findItemprop',
		value: function findItemprop(position, value) {
			return new _ckeditor5Exports.ModelRange(this._findBound(position, value, true), this._findBound(position, value, false));
		}
	}, {
		key: '_findBound',
		value: function _findBound(position, value, lookBack) {
			var node = position.textNode || (lookBack ? position.nodeBefore : position.nodeAfter);

			var lastNode = null;

			while (node && node.getAttribute('netlogixLinkClass') === value) {
				lastNode = node;
				node = lookBack ? node.previousSibling : node.nextSibling;
			}

			return lastNode ? _ckeditor5Exports.ModelPosition.createAt(lastNode, lookBack ? 'before' : 'after') : position;
		}
	}]);

	return ClassCommand;
}(_ckeditor5Exports.Command);

exports.default = ClassCommand;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(14);

var _plowJs = __webpack_require__(1);

var _reactUiComponents = __webpack_require__(15);

var _neosUiDecorators = __webpack_require__(16);

var _neosUiCkeditor5Bindings = __webpack_require__(17);

var _neosUiReduxStore = __webpack_require__(18);

var _positionalArraySorter = __webpack_require__(19);

var _positionalArraySorter2 = _interopRequireDefault(_positionalArraySorter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkClassComponent = (_dec = (0, _reactRedux.connect)((0, _plowJs.$transform)({
	formattingUnderCursor: _neosUiReduxStore.selectors.UI.ContentCanvas.formattingUnderCursor
})), _dec2 = (0, _neosUiDecorators.neos)(function (globalRegistry) {
	return {
		i18nRegistry: globalRegistry.get('i18n'),
		frontendConfigurationRegistry: globalRegistry.get('frontendConfiguration')
	};
}), _dec(_class = _dec2(_class = (_temp = _class2 = function (_PureComponent) {
	_inherits(LinkClassComponent, _PureComponent);

	function LinkClassComponent() {
		_classCallCheck(this, LinkClassComponent);

		return _possibleConstructorReturn(this, (LinkClassComponent.__proto__ || Object.getPrototypeOf(LinkClassComponent)).apply(this, arguments));
	}

	_createClass(LinkClassComponent, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    frontendConfigurationRegistry = _props.frontendConfigurationRegistry,
			    i18nRegistry = _props.i18nRegistry,
			    linkingOptions = _props.linkingOptions;


			var linkClassOptions = frontendConfigurationRegistry.get('Netlogix.CkEditor.LinkClass:options') || {};
			var enabledLinkClasses = (0, _plowJs.$get)('netlogixLinkClass', linkingOptions);

			var enabledLinkClassOptions = enabledLinkClasses === true ? linkClassOptions : Object.keys(linkClassOptions).reduce(function (options, name) {
				if (enabledLinkClasses.hasOwnProperty(name)) {
					options[name] = linkClassOptions[name];
				}
				return options;
			}, {});

			var sortedEnabledLinkClassOptions = (0, _positionalArraySorter2.default)(Object.values(enabledLinkClassOptions));

			var transformedAndSortedEnabledLinkClassOptions = sortedEnabledLinkClassOptions.map(function (linkOption) {
				return {
					label: linkOption.label,
					value: linkOption.class,
					icon: 'adjust'
				};
			});

			return transformedAndSortedEnabledLinkClassOptions.length > 0 ? _react2.default.createElement(
				'div',
				{ style: { flexGrow: 1 } },
				_react2.default.createElement(
					'div',
					{ style: { padding: 8 } },
					i18nRegistry.translate('Netlogix.CkEditor.LinkClass:CKEditor.LinkClass:label', 'Link style'),
					_react2.default.createElement(_reactUiComponents.SelectBox, {
						value: this.getItemprop(),
						options: transformedAndSortedEnabledLinkClassOptions,
						placeholder: i18nRegistry.translate('Netlogix.CkEditor.LinkClass:CKEditor.LinkClass:placeholder', 'Choose link style'),
						onValueChange: function onValueChange(value) {
							(0, _neosUiCkeditor5Bindings.executeCommand)('netlogixLinkClass', value);
						},
						allowEmpty: true
					})
				)
			) : null;
		}
	}, {
		key: 'getItemprop',
		value: function getItemprop() {
			return (0, _plowJs.$get)('netlogixLinkClass', this.props.formattingUnderCursor) || '';
		}
	}]);

	return LinkClassComponent;
}(_react.PureComponent), _class2.propTypes = {
	formattingUnderCursor: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool, _propTypes2.default.string, _propTypes2.default.object])),
	linkingOptions: _propTypes2.default.object.isRequired,
	i18nRegistry: _propTypes2.default.object.isRequired,
	frontendConfigurationRegistry: _propTypes2.default.object.isRequired
}, _temp)) || _class) || _class);
exports.default = LinkClassComponent;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().reactRedux;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiDecorators;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().CkEditorApi;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiReduxStore;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var isOriginal = function isOriginal(value) {
    return value && value.indexOf && value.indexOf('_original_') === 0;
};
var getOriginal = function getOriginal(value) {
    return value && value.substring && Number(value.substring(10));
};

/**
 * Flexible array sorter that sorts an array according to a "position" meta data.
 * The expected format for the subject is:
 *
 * [
 *   [
 *     'key' => 'bar'
 *     'position' => '<position-string>',
 *   ],
 *   [
 *     'key' => 'baz'
 *     'position' => '<position-string>',
 *   ],
 * ]
 *
 * The <position-string> supports one of the following syntax:
 *  start (<weight>)
 *  end (<weight>)
 *  before <key> (<weight>)
 *  after <key> (<weight>)
 *  <numerical-order>
 *
 * where "weight" is the priority that defines which of two conflicting positions overrules the other,
 * "key" is a string that references another key in the subject
 * and "numerical-order" is an integer that defines the order independently from the other keys.
 */
var positionalArraySorter = function positionalArraySorter(subject) {
    var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'position';
    var idKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'key';

    var positionAccessor = typeof position === 'string' ? function (value) {
        return value[position];
    } : position;
    // Extract all position keys from the subject.
    // If the position is not in the value, we encode its original position into a string
    // to preserve original sort order later
    var positionsArray = subject.map(function (value, index) {
        var position = positionAccessor(value);
        return position === undefined ? '_original_' + index : position;
    });
    // Extract valid id keys
    var validKeys = subject.map(function (value) {
        return idKey in value && value[idKey];
    }).filter(function (i) {
        return i;
    }).map(function (i) {
        return String(i);
    });

    var middleKeys = [];
    var startKeys = [];
    var endKeys = [];
    var beforeKeys = [];
    var afterKeys = [];
    var corruptKeys = [];

    // Split all positions into start, end, before, after and middle keys
    positionsArray.forEach(function (value, index) {
        if (isNaN(value) === false || isOriginal(value)) {
            middleKeys.push([index, value]);
        } else if (typeof value === 'string') {
            if (value.includes('start')) {
                var weightMatch = value.match(/start\s+(\d+)/);
                var weight = weightMatch && weightMatch[1] || 0;
                startKeys.push([index, Number(weight)]);
            } else if (value.includes('end')) {
                var _weightMatch = value.match(/end\s+(\d+)/);
                var _weight = _weightMatch && _weightMatch[1] || 0;
                endKeys.push([index, Number(_weight)]);
            } else if (value.includes('before')) {
                var keyMatch = value.match(/before\s+(\S+)/);
                var key = keyMatch && keyMatch[1];
                if (key && validKeys.includes(key)) {
                    beforeKeys.push([index, key]);
                } else {
                    corruptKeys.push(index);
                    console.warn('The following position value is corrupt: %s', value);
                }
            } else if (value.includes('after')) {
                var _keyMatch = value.match(/after\s+(\S+)/);
                var _key = _keyMatch && _keyMatch[1];
                if (_key && validKeys.includes(_key)) {
                    afterKeys.push([index, _key]);
                } else {
                    corruptKeys.push(index);
                    console.warn('The following position value is corrupt: %s', value);
                }
            } else {
                corruptKeys.push(index);
                console.warn('The following position value is corrupt: %s', value);
            }
        } else {
            corruptKeys.push(index);
            console.warn('The following position value is corrupt: %s', value);
        }
    });

    var sortByWeightFunc = function sortByWeightFunc(a, b) {
        return a[1] - b[1];
    };
    var sortWithRetainingOriginalPos = function sortWithRetainingOriginalPos(a, b) {
        a = a[1];
        b = b[1];
        // If both items don't have position, retain original sorting order
        if (isOriginal(a) && isOriginal(b)) {
            return getOriginal(a) - getOriginal(b);
        }
        // If only item `a` doesn't have position, push it down
        if (a && a.includes && a.includes('_original_')) {
            return 1;
        }
        // If only item `b` doesn't have position, push it down
        if (b && b.includes && b.includes('_original_')) {
            return -1;
        }
        // If both items have position, sort them in a standard way
        return Number(a) - Number(b);
    };

    // Merged array of all sorted indexes, except for before and after
    var sortedIndexes = [].concat(startKeys.sort(sortByWeightFunc).map(function (pair) {
        return pair[0];
    }), middleKeys.sort(sortWithRetainingOriginalPos).map(function (pair) {
        return pair[0];
    }), corruptKeys, endKeys.sort(sortByWeightFunc).map(function (pair) {
        return pair[0];
    }));

    // Go through all before and after keys and move them to the right position in sortedIndexes.
    // We may need multiple iterations for this, as before or after keys may point at one another.

    var _loop = function _loop() {
        var alteredNumber = 0;
        beforeKeys.forEach(function (pair, index) {
            // eslint-disable-line no-loop-func
            var targetIndexInSubject = subject.findIndex(function (item) {
                return String(item[idKey]) === pair[1];
            });
            var indexInIndexes = sortedIndexes.findIndex(function (item) {
                return item === targetIndexInSubject;
            });
            if (indexInIndexes !== -1) {
                sortedIndexes.splice(indexInIndexes, 0, pair[0]);
                beforeKeys.splice(index, 1);
                alteredNumber++;
            }
        });
        afterKeys.forEach(function (pair, index) {
            // eslint-disable-line no-loop-func
            var targetIndexInSubject = subject.findIndex(function (item) {
                return String(item[idKey]) === pair[1];
            });
            var indexInIndexes = sortedIndexes.findIndex(function (item) {
                return item === targetIndexInSubject;
            });
            if (indexInIndexes !== -1) {
                sortedIndexes.splice(indexInIndexes + 1, 0, pair[0]);
                afterKeys.splice(index, 1);
                alteredNumber++;
            }
        });

        // If no operations were performed in a loop, it means we got stuck in a circular reference.
        // Break out of it and just append faulty values at the end.
        if (alteredNumber === 0) {
            console.warn('Circular reference detected. Append broken entries at the end.');
            sortedIndexes = sortedIndexes.concat(beforeKeys.map(function (pair) {
                return pair[0];
            }), afterKeys.map(function (pair) {
                return pair[0];
            }));
            return 'break';
        }
    };

    while (beforeKeys.length > 0 || afterKeys.length > 0) {
        var _ret = _loop();

        if (_ret === 'break') break;
    }

    return sortedIndexes.map(function (index) {
        return subject[index];
    });
};
exports.default = positionalArraySorter;

/***/ })
/******/ ]);
//# sourceMappingURL=Plugin.js.map