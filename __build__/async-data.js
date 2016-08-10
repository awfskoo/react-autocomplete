webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _libIndex = __webpack_require__(159);

	var _libIndex2 = _interopRequireDefault(_libIndex);

	var _libUtils = __webpack_require__(164);

	var App = _react2['default'].createClass({
	  displayName: 'App',

	  getInitialState: function getInitialState() {
	    return {
	      value: '',
	      unitedStates: (0, _libUtils.getStates)(),
	      loading: false
	    };
	  },

	  render: function render() {
	    var _this = this;

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        null,
	        'Async Data'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'Autocomplete works great with async data by allowing you to pass in items. The ',
	        _react2['default'].createElement(
	          'code',
	          null,
	          'onChange'
	        ),
	        ' event provides you the value to make a server request with, then change state and pass in new items, it will attempt to autocomplete the first one.'
	      ),
	      _react2['default'].createElement(
	        'label',
	        { htmlFor: 'states-autocomplete' },
	        'Choose a state from the US'
	      ),
	      _react2['default'].createElement(_libIndex2['default'], {
	        inputProps: { name: "US state", id: "states-autocomplete" },
	        ref: 'autocomplete',
	        value: this.state.value,
	        items: this.state.unitedStates,
	        getItemValue: function (item) {
	          return item.name;
	        },
	        onSelect: function (value, item) {
	          // set the menu to only the selected item
	          _this.setState({ value: value, unitedStates: [item] });
	          // or you could reset it to a default list again
	          // this.setState({ unitedStates: getStates() })
	        },
	        onChange: function (event, value) {
	          _this.setState({ value: value, loading: true });
	          (0, _libUtils.fakeRequest)(value, function (items) {
	            _this.setState({ unitedStates: items, loading: false });
	          });
	        },
	        renderItem: function (item, isHighlighted) {
	          return _react2['default'].createElement(
	            'div',
	            {
	              style: isHighlighted ? _libUtils.styles.highlightedItem : _libUtils.styles.item,
	              key: item.abbr,
	              id: item.abbr
	            },
	            item.name
	          );
	        }
	      })
	    );
	  }
	});

	_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('container'));

/***/ }
]);