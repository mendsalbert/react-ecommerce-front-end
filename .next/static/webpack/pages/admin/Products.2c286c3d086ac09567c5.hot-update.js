webpackHotUpdate_N_E("pages/admin/Products",{

/***/ "./pages/admin/Components/ProductContent/ProductContent.js":
/*!*****************************************************************!*\
  !*** ./pages/admin/Components/ProductContent/ProductContent.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_lab_AvatarGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/lab/AvatarGroup */ "./node_modules/@material-ui/lab/esm/AvatarGroup/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);



var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Components\\ProductContent\\ProductContent.js",
    _s = $RefreshSig$();
















const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden"
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },
  searchInput: {
    fontSize: theme.typography.fontSize
  },
  block: {
    display: "block"
  },
  addUser: {
    marginRight: theme.spacing(1)
  },
  contentWrapper: {
    margin: "40px 16px"
  },
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "100%",
      marginBottom: "15px"
    }
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    borderRadius: "30px",
    margin: "10px"
  },
  button: {
    width: "100%",
    padding: "11px"
  }
});

function Content(props) {
  _s();

  const {
    classes
  } = props;
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: images,
    1: setImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: spinner,
    1: setSpinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: productInput,
    1: setProductInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: priceInput,
    1: setPriceInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: quantityInput,
    1: setQuantityInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: categoryInput,
    1: setCategoryInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: tagInput,
    1: setTagInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: tag,
    1: setTag
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: categories,
    1: setCategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: hide,
    1: setHide
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("http://localhost:1000/api/tag/all-tags", {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI"
      }
    }).then(success => {
      setTag(success.data);
    }).catch(e => {
      console.log(e.response.data.msg);
    });
  }, []);

  const handleCapture = e => {
    setSpinner(true);
    const fileReader = new FileReader();

    if (e.target.files.length === 1) {
      fileReader.onload = e => {
        setImage(e.target.result);
        setSpinner(false);
      };

      fileReader.readAsDataURL(e.target.files[0]);
    } else {
      for (var i = 0; i < e.target.files.length; i++) {
        const fileReaders = new FileReader();

        fileReaders.onload = e => {
          setImages(oldArr => [...oldArr, e.target.result]);
          setSpinner(false);
        };

        fileReaders.readAsDataURL(e.target.files[i]);
      }
    }
  };

  const handleInputs = (e, type) => {
    if (type === "productName") {
      setProductInput(e.target.value);
    } else if (type === "priceValue") {
      setPriceInput(e.target.value);
    } else if (type === "quantityValue") {
      setQuantityInput(e.target.value);
    } else if (type === "tagsValue") {
      setTagInput(e.target.value);
    }
  };

  console.log(tagInput);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: classes.root,
      noValidate: true,
      autoComplete: "off",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "h5",
        children: "Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "outlined-basic",
        label: "Add product name",
        variant: "outlined",
        value: productInput,
        onChange: e => handleInputs(e, "productName")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "outlined-basic",
        label: "Add a price",
        variant: "outlined",
        type: "number",
        value: priceInput,
        onChange: e => handleInputs(e, "priceValue")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "outlined-basic",
        label: "Add the quantity of product",
        variant: "outlined",
        type: "number",
        value: quantityInput,
        onChange: e => handleInputs(e, "quantityValue")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "outlined-select-currency-native",
        select: true,
        label: "Add category",
        SelectProps: {
          native: true
        },
        variant: "outlined",
        onFocus: e => handleInputs(e, "tagsValue"),
        onChange: e => handleInputs(e, "tagsValue"),
        children: tag.map((tags, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: tags.tag,
          children: tags.tag
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "outlined-select-currency-native",
        select: true,
        label: "Add tag",
        SelectProps: {
          native: true
        },
        variant: "outlined",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: 10,
          children: "Ten"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: 20,
          children: "Twenty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: 30,
          children: "Thirty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        accept: "image/*",
        style: {
          display: "none"
        },
        id: "icon-button-photo",
        onChange: handleCapture,
        type: "file",
        multiple: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "icon-button-photo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "body2",
          children: "*Upload a picture(s) of the product. Max: 3 picture*"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          color: "primary",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this), spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_AvatarGroup__WEBPACK_IMPORTED_MODULE_10__["default"], {
        max: 3,
        children: [image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
            alt: image,
            src: image,
            className: classes.large
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onClick: () => {
              setImage("");
            },
            style: {
              backgroundColor: "#616161",
              width: "30px",
              height: "30px",
              borderRadius: "100%",
              color: "white",
              textAlign: "center",
              marginLeft: "-40px",
              zIndex: "3",
              paddingTop: "4.8px",
              cursor: "pointer"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 17
          }, this)]
        }, void 0, true) : "", images ? images.map((previewImages, i) =>
        /*#__PURE__*/
        // <img width="50" height="200" src={images[i]} />
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
            alt: images[i],
            src: images[i],
            className: classes.large
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onClick: () => {
              const delResult = images.filter(img => img != images[i]);
              setImages(delResult);
            },
            style: {
              backgroundColor: "#616161",
              width: "34px",
              height: "34px",
              borderRadius: "100%",
              color: "white",
              textAlign: "center",
              marginLeft: "-40px",
              zIndex: "3",
              paddingTop: "4.8px",
              cursor: "pointer"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 21
          }, this)]
        }, void 0, true)) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "contained",
      color: "primary",
      className: classes.button // onClick={isEditable ? onSubmitHandlerEdit : onSubmitHandler}
      ,
      disableRipple: true,
      disabled: true,
      children: "Upload Product"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }, this);
}

_s(Content, "/kSY+kW4w3R3FrO8knD5y2G35Lo=");

_c = Content;
Content.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Content));

var _c;

$RefreshReg$(_c, "Content");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9Qcm9kdWN0Q29udGVudC9Qcm9kdWN0Q29udGVudC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJkaXNwbGF5IiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImNvbnRlbnRXcmFwcGVyIiwicm9vdCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwibGFyZ2UiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJidXR0b24iLCJwYWRkaW5nIiwiQ29udGVudCIsInByb3BzIiwiY2xhc3NlcyIsImltYWdlIiwic2V0SW1hZ2UiLCJ1c2VTdGF0ZSIsImltYWdlcyIsInNldEltYWdlcyIsInNwaW5uZXIiLCJzZXRTcGlubmVyIiwicHJvZHVjdElucHV0Iiwic2V0UHJvZHVjdElucHV0IiwicHJpY2VJbnB1dCIsInNldFByaWNlSW5wdXQiLCJxdWFudGl0eUlucHV0Iiwic2V0UXVhbnRpdHlJbnB1dCIsImNhdGVnb3J5SW5wdXQiLCJzZXRDYXRlZ29yeUlucHV0IiwidGFnSW5wdXQiLCJzZXRUYWdJbnB1dCIsInRhZyIsInNldFRhZyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiaGlkZSIsInNldEhpZGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJ0aGVuIiwic3VjY2VzcyIsImRhdGEiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJtc2ciLCJoYW5kbGVDYXB0dXJlIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsIm9ubG9hZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJpIiwiZmlsZVJlYWRlcnMiLCJvbGRBcnIiLCJoYW5kbGVJbnB1dHMiLCJ0eXBlIiwidmFsdWUiLCJuYXRpdmUiLCJtYXAiLCJ0YWdzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5MZWZ0IiwiekluZGV4IiwicGFkZGluZ1RvcCIsImN1cnNvciIsInByZXZpZXdJbWFnZXMiLCJkZWxSZXN1bHQiLCJmaWx0ZXIiLCJpbWciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxLQUFZO0FBQ3pCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFLEdBREw7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEMsWUFBUSxFQUFFO0FBSEwsR0FEa0I7QUFNekJDLFdBQVMsRUFBRTtBQUNUQyxnQkFBWSxFQUFFO0FBREwsR0FOYztBQVN6QkMsYUFBVyxFQUFFO0FBQ1hDLFlBQVEsRUFBRVIsS0FBSyxDQUFDUyxVQUFOLENBQWlCRDtBQURoQixHQVRZO0FBWXpCRSxPQUFLLEVBQUU7QUFDTEMsV0FBTyxFQUFFO0FBREosR0Faa0I7QUFlekJDLFNBQU8sRUFBRTtBQUNQQyxlQUFXLEVBQUViLEtBQUssQ0FBQ2MsT0FBTixDQUFjLENBQWQ7QUFETixHQWZnQjtBQWtCekJDLGdCQUFjLEVBQUU7QUFDZFosVUFBTSxFQUFFO0FBRE0sR0FsQlM7QUFxQnpCYSxNQUFJLEVBQUU7QUFDSixhQUFTO0FBQ1BiLFlBQU0sRUFBRUgsS0FBSyxDQUFDYyxPQUFOLENBQWMsQ0FBZCxDQUREO0FBRVBHLFdBQUssRUFBRSxNQUZBO0FBR1BDLGtCQUFZLEVBQUU7QUFI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QUFBQSxjQTVFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQXVKRSxxRUFBQyxpRUFBRDtBQUNFLGFBQU8sRUFBQyxXQURWO0FBRUUsV0FBSyxFQUFDLFNBRlI7QUFHRSxlQUFTLEVBQUU3RCxPQUFPLENBQUNKLE1BSHJCLENBSUU7QUFKRjtBQUtFLG1CQUFhLEVBQUUsSUFMakI7QUFNRSxjQUFRLEVBQUUsSUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9LRDs7R0FsT1FFLE87O0tBQUFBLE87QUFvT1RBLE9BQU8sQ0FBQ29FLFNBQVIsR0FBb0I7QUFDbEJsRSxTQUFPLEVBQUVtRSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQXBCO0FBSWVDLDBJQUFVLENBQUNqRyxNQUFELENBQVYsQ0FBbUJ5QixPQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL1Byb2R1Y3RzLjJjMjg2YzNkMDg2YWMwOTU2N2M1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvdG9DYW1lcmFcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XHJcbmltcG9ydCBBdmF0YXJHcm91cCBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BdmF0YXJHcm91cFwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIG1heFdpZHRoOiA5MzYsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgfSxcclxuICBzZWFyY2hCYXI6IHtcclxuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKVwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoSW5wdXQ6IHtcclxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplLFxyXG4gIH0sXHJcbiAgYmxvY2s6IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICB9LFxyXG4gIGFkZFVzZXI6IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgY29udGVudFdyYXBwZXI6IHtcclxuICAgIG1hcmdpbjogXCI0MHB4IDE2cHhcIixcclxuICB9LFxyXG4gIHJvb3Q6IHtcclxuICAgIFwiJiA+ICpcIjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCksXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjE1cHhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsYXJnZToge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMjApLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDIwKSxcclxuICAgIGJvcmRlclJhZGl1czogXCIzMHB4XCIsXHJcbiAgICBtYXJnaW46IFwiMTBweFwiLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjExcHhcIixcclxuICB9LFxyXG59KTtcclxuZnVuY3Rpb24gQ29udGVudChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzcGlubmVyLCBzZXRTcGlubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcHJvZHVjdElucHV0LCBzZXRQcm9kdWN0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlSW5wdXQsIHNldFByaWNlSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3F1YW50aXR5SW5wdXQsIHNldFF1YW50aXR5SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NhdGVnb3J5SW5wdXQsIHNldENhdGVnb3J5SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhZ0lucHV0LCBzZXRUYWdJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFnLCBzZXRUYWddID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaGlkZSwgc2V0SGlkZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2FsbC10YWdzXCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE5ESTROakUzTVgwLkxqME1tajVnMnlFQVlxWVZPUXRWb01zemxXcy0xdjdFT19CS05ULVpna0lcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldFRhZyhzdWNjZXNzLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYXB0dXJlID0gKGUpID0+IHtcclxuICAgIHNldFNwaW5uZXIodHJ1ZSk7XHJcbiAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGlmIChlLnRhcmdldC5maWxlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlKGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgc2V0U3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZmlsZVJlYWRlcnMgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIGZpbGVSZWFkZXJzLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICBzZXRJbWFnZXMoKG9sZEFycikgPT4gWy4uLm9sZEFyciwgZS50YXJnZXQucmVzdWx0XSk7XHJcbiAgICAgICAgICBzZXRTcGlubmVyKGZhbHNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZpbGVSZWFkZXJzLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVJbnB1dHMgPSAoZSwgdHlwZSkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwicHJvZHVjdE5hbWVcIikge1xyXG4gICAgICBzZXRQcm9kdWN0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInByaWNlVmFsdWVcIikge1xyXG4gICAgICBzZXRQcmljZUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJxdWFudGl0eVZhbHVlXCIpIHtcclxuICAgICAgc2V0UXVhbnRpdHlJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwidGFnc1ZhbHVlXCIpIHtcclxuICAgICAgc2V0VGFnSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKHRhZ0lucHV0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5BZGQgUHJvZHVjdDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPVwiQWRkIHByb2R1Y3QgbmFtZVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgdmFsdWU9e3Byb2R1Y3RJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwicHJvZHVjdE5hbWVcIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPVwiQWRkIGEgcHJpY2VcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e3ByaWNlSW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcInByaWNlVmFsdWVcIil9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIkFkZCB0aGUgcXVhbnRpdHkgb2YgcHJvZHVjdFwiXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICB2YWx1ZT17cXVhbnRpdHlJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwicXVhbnRpdHlWYWx1ZVwiKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWN1cnJlbmN5LW5hdGl2ZVwiXHJcbiAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgIGxhYmVsPVwiQWRkIGNhdGVnb3J5XCJcclxuICAgICAgICAgIFNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgIG5hdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgb25Gb2N1cz17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcInRhZ3NWYWx1ZVwiKX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwidGFnc1ZhbHVlXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0YWcubWFwKCh0YWdzLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3RhZ3MudGFnfT57dGFncy50YWd9PC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1jdXJyZW5jeS1uYXRpdmVcIlxyXG4gICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICBsYWJlbD1cIkFkZCB0YWdcIlxyXG4gICAgICAgICAgU2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgbmF0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MTB9PlRlbjwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MjB9PlR3ZW50eTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MzB9PlRoaXJ0eTwvb3B0aW9uPlxyXG4gICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgaWQ9XCJpY29uLWJ1dHRvbi1waG90b1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2FwdHVyZX1cclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImljb24tYnV0dG9uLXBob3RvXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgKlVwbG9hZCBhIHBpY3R1cmUocykgb2YgdGhlIHByb2R1Y3QuIE1heDogMyBwaWN0dXJlKlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgY29tcG9uZW50PVwic3BhblwiPlxyXG4gICAgICAgICAgICA8UGhvdG9DYW1lcmEgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7c3Bpbm5lciA/IChcclxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxBdmF0YXJHcm91cCBtYXg9ezN9PlxyXG4gICAgICAgICAgICB7aW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXtpbWFnZX0gc3JjPXtpbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEltYWdlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNjE2MTYxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIi00MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjNcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjQuOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2ltYWdlc1xyXG4gICAgICAgICAgICAgID8gaW1hZ2VzLm1hcCgocHJldmlld0ltYWdlcywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAvLyA8aW1nIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCIyMDBcIiBzcmM9e2ltYWdlc1tpXX0gLz5cclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlc1tpXX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VzW2ldfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsUmVzdWx0ID0gaW1hZ2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1nKSA9PiBpbWcgIT0gaW1hZ2VzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEltYWdlcyhkZWxSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNjE2MTYxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIi00MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiNC44cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxSZXN1bHQgPSBpbWFnZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChpbWcpID0+IGltZyAhPSBpbWFnZXNbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VzKGRlbFJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIGRlbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgIDwvQXZhdGFyR3JvdXA+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgIC8vIG9uQ2xpY2s9e2lzRWRpdGFibGUgPyBvblN1Ym1pdEhhbmRsZXJFZGl0IDogb25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgID5cclxuICAgICAgICBVcGxvYWQgUHJvZHVjdFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuQ29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKENvbnRlbnQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9