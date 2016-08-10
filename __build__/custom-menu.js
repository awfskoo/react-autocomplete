webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
	        'Custom Menu'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'While Autocomplete ships with a decent looking menu, you can control the look as well as the rendering of it. In this case we put headers for each letter of the alphabet.'
	      ),
	      _react2['default'].createElement(
	        'label',
	        { htmlFor: 'states-autocomplete' },
	        'Choose a state from the US'
	      ),
	      _react2['default'].createElement(_libIndex2['default'], {
	        value: this.state.value,
	        inputProps: { name: "US state", id: "states-autocomplete" },
	        items: this.state.unitedStates,
	        getItemValue: function (item) {
	          return item.name;
	        },
	        onSelect: function (value, state) {
	          return _this.setState({ value: value, unitedStates: [state] });
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
	        },
	        renderMenu: function (items, value, style) {
	          return _react2['default'].createElement(
	            'div',
	            { style: _extends({}, _libUtils.styles.menu, style) },
	            value === '' ? _react2['default'].createElement(
	              'div',
	              { style: { padding: 6 } },
	              'Type of the name of a United State'
	            ) : _this.state.loading ? _react2['default'].createElement(
	              'div',
	              { style: { padding: 6 } },
	              'Loading...'
	            ) : items.length === 0 ? _react2['default'].createElement(
	              'div',
	              { style: { padding: 6 } },
	              'No matches for ',
	              value
	            ) : _this.renderItems(items)
	          );
	        }
	      })
	    );
	  },

	  renderItems: function renderItems(items) {
	    console.log(items);
	    return items.map(function (item, index) {
	      var text = item.props.children;
	      if (index === 0 || items[index - 1].props.children.charAt(0) !== text.charAt(0)) {
	        var style = {
	          background: '#eee',
	          color: '#454545',
	          padding: '2px 6px',
	          fontWeight: 'bold'
	        };
	        return [_react2['default'].createElement(
	          'div',
	          { style: style },
	          text.charAt(0)
	        ), item];
	      } else {
	        return item;
	      }
	    });
	  }
	});

	_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('container'));

/***/ }
]);