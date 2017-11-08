"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _glamorous = require("glamorous");

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/cody/Code/2017personalsite/pages/_error.js?entry";


var Error = function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);

    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: "renderErrorText",
    value: function renderErrorText() {
      var statusCode = this.props.statusCode;

      if (statusCode && statusCode === 404) {
        return "That page doesn't exist!";
      } else if (statusCode) {
        return "An error " + statusCode + " occurred on server";
      } else {
        return "An error occurred on client";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.props.statusCode), _react2.default.createElement(ErrorText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, this.renderErrorText()), _react2.default.createElement(_link2.default, { href: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(A, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Return to index?")));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;

      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return { statusCode: statusCode };
    }
  }]);

  return Error;
}(_react2.default.Component);

exports.default = Error;


var Container = _glamorous2.default.div({
  width: "50%",
  margin: "15% auto",
  textAlign: "center"
});

var ErrorText = _glamorous2.default.p({
  color: "slategray"
});

var A = _glamorous2.default.a({
  color: "blue",
  textDecoration: "none",
  cursor: "pointer"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJnbGFtb3JvdXMiLCJFcnJvciIsInN0YXR1c0NvZGUiLCJwcm9wcyIsInJlbmRlckVycm9yVGV4dCIsInJlcyIsImVyciIsIkNvbXBvbmVudCIsIkNvbnRhaW5lciIsImRpdiIsIndpZHRoIiwibWFyZ2luIiwidGV4dEFsaWduIiwiRXJyb3JUZXh0IiwicCIsImNvbG9yIiwiQSIsImEiLCJ0ZXh0RGVjb3JhdGlvbiIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJQUVjLEE7Ozs7Ozs7Ozs7O3NDQU1EO1VBQUEsQUFDUixhQUFlLEtBRFAsQUFDWSxNQURaLEFBQ1IsQUFFUjs7VUFBSSxjQUFjLGVBQWxCLEFBQWlDLEtBQUssQUFDcEM7ZUFBQSxBQUFPLEFBQ1I7QUFGRCxpQkFFTyxBQUFJLFlBQVksQUFDckI7NkJBQUEsQUFBbUIsYUFDcEI7QUFGTSxPQUFBLE1BRUEsQUFDTDtlQUFBLEFBQU8sQUFDUjtBQUNGOzs7OzZCQUVRLEFBQ1A7NkJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFEWixBQUNFLEFBQWdCLEFBRWhCLDZCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQVk7QUFBWjtBQUFBLGNBSEYsQUFHRSxBQUFZLEFBQUssQUFFakIsb0NBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVBOLEFBQ0UsQUFLRSxBQUNFLEFBSVA7Ozs7MENBN0JvQztVQUFaLEFBQVksV0FBWixBQUFZO1VBQVAsQUFBTyxXQUFQLEFBQU8sQUFDbkM7O1VBQU0sYUFBYSxNQUFNLElBQU4sQUFBVSxhQUFhLE1BQU0sSUFBTixBQUFVLGFBQXBELEFBQWlFLEFBQ2pFO2FBQU8sRUFBRSxZQUFULEFBQU8sQUFDUjs7Ozs7RUFKZ0MsZ0JBQU0sQTs7a0JBQXBCLEE7OztBQWlDckIsSUFBTSxnQ0FBWSxBQUFVO1NBQUksQUFDdkIsQUFDUDtVQUY4QixBQUV0QixBQUNSO2FBSEYsQUFBa0IsQUFBYyxBQUduQjtBQUhtQixBQUM5QixDQURnQjs7QUFNbEIsSUFBTSxnQ0FBWSxBQUFVO1NBQTVCLEFBQWtCLEFBQVksQUFDckI7QUFEcUIsQUFDNUIsQ0FEZ0I7O0FBSWxCLElBQU0sd0JBQUksQUFBVTtTQUFFLEFBQ2IsQUFDUDtrQkFGb0IsQUFFSixBQUNoQjtVQUhGLEFBQVUsQUFBWSxBQUdaO0FBSFksQUFDcEIsQ0FEUSIsImZpbGUiOiJfZXJyb3IuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NvZHkvQ29kZS8yMDE3cGVyc29uYWxzaXRlIn0=