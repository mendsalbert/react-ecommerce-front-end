webpackHotUpdate_N_E("pages/admin/Products",{

/***/ "./pages/admin/Components/ProductContent/ProductContent.js":
/*!*****************************************************************!*\
  !*** ./pages/admin/Components/ProductContent/ProductContent.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_lab_AvatarGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/AvatarGroup */ "./node_modules/@material-ui/lab/esm/AvatarGroup/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");




var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Components\\ProductContent\\ProductContent.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



















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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: images,
    1: setImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: uImage,
    1: setUImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: uImages,
    1: setUImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: spinner,
    1: setSpinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: productInput,
    1: setProductInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: priceInput,
    1: setPriceInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: quantityInput,
    1: setQuantityInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: categoryInput,
    1: setCategoryInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: tagInput,
    1: setTagInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: tag,
    1: setTag
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: categories,
    1: setCategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: imageLimit,
    1: setImageLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    msg: "",
    inputType: ""
  });
  const [progress, setProgress] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(10);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: isSnackBar,
    1: setIsSnackBar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    state: false,
    msg: ""
  }); //fetching all tags for the tag select option

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("http://localhost:1000/api/tag/all-tags", {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI"
      }
    }).then(success => {
      setTag(success.data);
    }).catch(e => {
      console.log(e.response.data.msg);
    });
  }, []); //fetching all categories for the category select option

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("http://localhost:1000/api/category/all-category", {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzUwMzY4OSwiZXhwIjoxNjEzODYzNjg5fQ.s6MBDtyOTXIlP1FefTt2bC0qyjW6etsdcoTyztpNBJg"
      }
    }).then(success => {
      setCategories(success.data); // console.log(success);
    }).catch(e => {
      console.log(e.response.data.msg);
    });
  }, []);

  const handleCapture = e => {
    setSpinner(true);
    const fileReader = new FileReader(); //Displaying image in the UI if it is one

    if (e.target.files.length === 1) {
      setUImage(e.target.files[0]);

      fileReader.onload = e => {
        setImage(e.target.result);
        setSpinner(false);
        setImageLimit(true);
      };

      fileReader.readAsDataURL(e.target.files[0]);
    } else {
      //Display image in the UI if it less than 3
      if (e.target.files.length > 3) {
        setImageLimit(false);
        setSpinner(false);
      } else {
        for (var i = 0; i < e.target.files.length; i++) {
          const fileReaders = new FileReader();

          fileReaders.onload = e => {
            setImages(oldArr => [...oldArr, e.target.result]);
            setSpinner(false);
            setImageLimit(true);
          };

          fileReaders.readAsDataURL(e.target.files[i]);
        }

        var arr = [];

        for (var j = 0; j < e.target.files.length; j++) {
          arr.push(e.target.files[j]);
        }

        setUImages(arr);
      }
    }
  };

  const handleInputs = (e, type) => {
    if (type === "productName") {
      var letters = /^[0-9]+$/;

      if (e.target.value.match(letters)) {
        setError({
          msg: "Product price must be only alphabets",
          inputType: "productName"
        });
      } else if (!e.target.value.match(letters)) {
        setError({});
      }

      setProductInput(e.target.value);
    } else if (type === "priceValue") {
      var numbers = /^[0-9]+$/;

      if (!e.target.value.match(numbers)) {
        setError({
          msg: "Product price must be only numbers",
          inputType: "priceValue"
        });
      } else if (e.target.value.match(numbers)) {
        setError({});
      }

      setPriceInput(e.target.value);
    } else if (type === "quantityValue") {
      var numbers = /^[0-9]+$/;

      if (!e.target.value.match(numbers)) {
        setError({
          msg: "Product quantity must be only numbers",
          inputType: "quantityValue"
        });
      } else if (e.target.value.match(numbers)) {
        setError({});
      }

      setQuantityInput(e.target.value);
    } else if (type === "tagsValue") {
      setTagInput(e.target.value);
    } else if (type === "catValue") {
      setCategoryInput(e.target.value);
    }
  };

  const validateInputs = () => {
    if (productInput && priceInput && quantityInput && categoryInput && tagInput && imageLimit) {
      return true;
    }

    return false;
  };

  function CircularProgressWithLabel(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "relative",
      display: "inline-flex",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__["default"], _objectSpread({
        variant: "determinate"
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__["default"], {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "caption",
          component: "div",
          color: "textSecondary",
          children: `${Math.round(props.value)}%`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }, this);
  }

  const onSubmitHandler = () => {
    setIsLoading(true);
    let data = new form_data__WEBPACK_IMPORTED_MODULE_16___default.a();
    data.append("name", productInput);
    data.append("category", categoryInput);
    data.append("tag", tagInput);
    data.append("price", priceInput);
    data.append("quantity", quantityInput);
    data.append("image", uImage);

    for (var x = 0; x < uImages.length; x++) {
      data.append("image", uImages[x]);
    }

    axios__WEBPACK_IMPORTED_MODULE_15___default.a.post("http://localhost:1000/api/product/add-product", data, {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI",
        accept: "application/json",
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: data => {
        setProgress(prevProgress => prevProgress >= 90 ? 0 : prevProgress + Math.round(100 * data.loaded / data.total));
      }
    }).then(success => {
      setIsSnackBar({
        state: true,
        msg: "Product added successful"
      });
      setIsLoading(false);
      setProductInput("");
      setPriceInput("");
      setQuantityInput("");
      setCategoryInput("");
      setTagInput("");
      setUImages("");
      setUImage("");
      setImage("");
      setImages("");
    }).catch(e => {// console.log(e);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      open: _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_18__["default"].state,
      onClose: () => setIsSnackBar(false),
      message: _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_18__["default"].msg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      className: classes.root,
      noValidate: true,
      autoComplete: "off",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "h5",
        children: "Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "outlined-basic",
        label: "Add product name",
        variant: "outlined",
        value: productInput,
        onChange: e => handleInputs(e, "productName"),
        error: error.msg && error.inputType === "productName" ? true : false,
        helperText: error.msg && error.inputType === "productName" ? error.msg : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "outlined-basic",
        label: "Add a price",
        variant: "outlined",
        type: "number",
        value: priceInput,
        onChange: e => handleInputs(e, "priceValue"),
        error: error.msg && error.inputType === "priceValue" ? true : false,
        helperText: error.msg && error.inputType === "priceValue" ? error.msg : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "outlined-basic",
        label: "Add the quantity of product",
        variant: "outlined",
        type: "number",
        value: quantityInput,
        onChange: e => handleInputs(e, "quantityValue"),
        error: error.msg && error.inputType === "quantityValue" ? true : false,
        helperText: error.msg && error.inputType === "quantityValue" ? error.msg : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "outlined-select-currency-native",
        select: true,
        helperText: "Add a tag",
        SelectProps: {
          native: true
        },
        variant: "outlined",
        onFocus: e => handleInputs(e, "tagsValue"),
        onChange: e => handleInputs(e, "tagsValue"),
        children: tag.map((tags, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: tags.tag,
          children: tags.tag
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "outlined-select-currency-native",
        select: true // label="Add tag"
        ,
        helperText: "Add a category",
        SelectProps: {
          native: true
        },
        variant: "outlined",
        onFocus: e => handleInputs(e, "catValue"),
        onChange: e => handleInputs(e, "catValue"),
        children: categories.map((category, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: category.category,
          children: category.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
        lineNumber: 353,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "icon-button-photo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "body2",
          children: "*Upload a picture(s) of the product. Max: 3 picture*"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "primary",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 367,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 9
      }, this), spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_AvatarGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
        max: 3,
        children: [image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
            alt: image,
            src: image,
            className: classes.large
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__["default"], {
            onClick: () => {
              setImage("");
              setImageLimit(false);
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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 379,
            columnNumber: 17
          }, this)]
        }, void 0, true) : "", images ? images.map((previewImages, i) =>
        /*#__PURE__*/
        // <img width="50" height="200" src={images[i]} />
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
            alt: images[i],
            src: images[i],
            className: classes.large
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 407,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__["default"], {
            onClick: () => {
              const delResult = images.filter(img => img != images[i]);
              setImages(delResult);

              if (images.length === 1) {
                setImageLimit(false);
              }
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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 435,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 21
          }, this)]
        }, void 0, true)) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
      variant: "contained",
      color: "primary",
      className: classes.button,
      onClick: onSubmitHandler,
      disableRipple: true,
      disabled: !validateInputs(),
      children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CircularProgressWithLabel, {
        value: progress
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 11
      }, this) : "Upload Product"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 275,
    columnNumber: 5
  }, this);
}

_s(Content, "wF74pp5t9II+/Ahb5kAM2rzUFv0=");

_c = Content;
Content.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(Content));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9Qcm9kdWN0Q29udGVudC9Qcm9kdWN0Q29udGVudC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJkaXNwbGF5IiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImNvbnRlbnRXcmFwcGVyIiwicm9vdCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwibGFyZ2UiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJidXR0b24iLCJwYWRkaW5nIiwiQ29udGVudCIsInByb3BzIiwiY2xhc3NlcyIsImltYWdlIiwic2V0SW1hZ2UiLCJ1c2VTdGF0ZSIsImltYWdlcyIsInNldEltYWdlcyIsInVJbWFnZSIsInNldFVJbWFnZSIsInVJbWFnZXMiLCJzZXRVSW1hZ2VzIiwic3Bpbm5lciIsInNldFNwaW5uZXIiLCJwcm9kdWN0SW5wdXQiLCJzZXRQcm9kdWN0SW5wdXQiLCJwcmljZUlucHV0Iiwic2V0UHJpY2VJbnB1dCIsInF1YW50aXR5SW5wdXQiLCJzZXRRdWFudGl0eUlucHV0IiwiY2F0ZWdvcnlJbnB1dCIsInNldENhdGVnb3J5SW5wdXQiLCJ0YWdJbnB1dCIsInNldFRhZ0lucHV0IiwidGFnIiwic2V0VGFnIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJpbWFnZUxpbWl0Iiwic2V0SW1hZ2VMaW1pdCIsImVycm9yIiwic2V0RXJyb3IiLCJtc2ciLCJpbnB1dFR5cGUiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiUmVhY3QiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc1NuYWNrQmFyIiwic2V0SXNTbmFja0JhciIsInN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwidGhlbiIsInN1Y2Nlc3MiLCJkYXRhIiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiaGFuZGxlQ2FwdHVyZSIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJvbmxvYWQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiaSIsImZpbGVSZWFkZXJzIiwib2xkQXJyIiwiYXJyIiwiaiIsInB1c2giLCJoYW5kbGVJbnB1dHMiLCJ0eXBlIiwibGV0dGVycyIsInZhbHVlIiwibWF0Y2giLCJudW1iZXJzIiwidmFsaWRhdGVJbnB1dHMiLCJDaXJjdWxhclByb2dyZXNzV2l0aExhYmVsIiwiTWF0aCIsInJvdW5kIiwib25TdWJtaXRIYW5kbGVyIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ4IiwicG9zdCIsImFjY2VwdCIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJwcmV2UHJvZ3Jlc3MiLCJsb2FkZWQiLCJ0b3RhbCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIlNuYWNrYmFyIiwibmF0aXZlIiwibWFwIiwidGFncyIsImNhdGVnb3J5IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5MZWZ0IiwiekluZGV4IiwicGFkZGluZ1RvcCIsImN1cnNvciIsInByZXZpZXdJbWFnZXMiLCJkZWxSZXN1bHQiLCJmaWx0ZXIiLCJpbWciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsS0FBWTtBQUN6QkMs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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5TEQ7O0dBalpRbEMsTzs7S0FBQUEsTztBQW1aVEEsT0FBTyxDQUFDMkcsU0FBUixHQUFvQjtBQUNsQnpHLFNBQU8sRUFBRTBHLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFIsQ0FBcEI7QUFJZUMsMElBQVUsQ0FBQ3hJLE1BQUQsQ0FBVixDQUFtQnlCLE9BQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vUHJvZHVjdHMuYjQzNDFmZWFjNGVlMmFiMWQ3Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYVwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIjtcclxuaW1wb3J0IEF2YXRhckdyb3VwIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F2YXRhckdyb3VwXCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBGb3JtRGF0YSBmcm9tIFwiZm9ybS1kYXRhXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIG1heFdpZHRoOiA5MzYsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgfSxcclxuICBzZWFyY2hCYXI6IHtcclxuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKVwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoSW5wdXQ6IHtcclxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplLFxyXG4gIH0sXHJcbiAgYmxvY2s6IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICB9LFxyXG4gIGFkZFVzZXI6IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgY29udGVudFdyYXBwZXI6IHtcclxuICAgIG1hcmdpbjogXCI0MHB4IDE2cHhcIixcclxuICB9LFxyXG4gIHJvb3Q6IHtcclxuICAgIFwiJiA+ICpcIjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCksXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjE1cHhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsYXJnZToge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMjApLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDIwKSxcclxuICAgIGJvcmRlclJhZGl1czogXCIzMHB4XCIsXHJcbiAgICBtYXJnaW46IFwiMTBweFwiLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjExcHhcIixcclxuICB9LFxyXG59KTtcclxuZnVuY3Rpb24gQ29udGVudChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt1SW1hZ2UsIHNldFVJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdUltYWdlcywgc2V0VUltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NwaW5uZXIsIHNldFNwaW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwcm9kdWN0SW5wdXQsIHNldFByb2R1Y3RJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2VJbnB1dCwgc2V0UHJpY2VJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcXVhbnRpdHlJbnB1dCwgc2V0UXVhbnRpdHlJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2F0ZWdvcnlJbnB1dCwgc2V0Q2F0ZWdvcnlJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFnSW5wdXQsIHNldFRhZ0lucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbWFnZUxpbWl0LCBzZXRJbWFnZUxpbWl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHsgbXNnOiBcIlwiLCBpbnB1dFR5cGU6IFwiXCIgfSk7XHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSBSZWFjdC51c2VTdGF0ZSgxMCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNTbmFja0Jhciwgc2V0SXNTbmFja0Jhcl0gPSB1c2VTdGF0ZSh7IHN0YXRlOiBmYWxzZSwgbXNnOiBcIlwiIH0pO1xyXG4gIC8vZmV0Y2hpbmcgYWxsIHRhZ3MgZm9yIHRoZSB0YWcgc2VsZWN0IG9wdGlvblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDoxMDAwL2FwaS90YWcvYWxsLXRhZ3NcIiwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTldabE56QmpNalJpTldVeFlqZ3lPR000WW1Ga1lqQTVJbjBzSW1saGRDSTZNVFl4TkRJNE5qRTNNWDAuTGowTW1qNWcyeUVBWXFZVk9RdFZvTXN6bFdzLTF2N0VPX0JLTlQtWmdrSVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0VGFnKHN1Y2Nlc3MuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vZmV0Y2hpbmcgYWxsIGNhdGVnb3JpZXMgZm9yIHRoZSBjYXRlZ29yeSBzZWxlY3Qgb3B0aW9uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL2NhdGVnb3J5L2FsbC1jYXRlZ29yeVwiLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjpcclxuICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelV3TXpZNE9Td2laWGh3SWpveE5qRXpPRFl6TmpnNWZRLnM2TUJEdHlPVFhJbFAxRmVmVHQyYkMwcXlqVzZldHNkY29UeXp0cE5CSmdcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldENhdGVnb3JpZXMoc3VjY2Vzcy5kYXRhKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FwdHVyZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTcGlubmVyKHRydWUpO1xyXG4gICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgLy9EaXNwbGF5aW5nIGltYWdlIGluIHRoZSBVSSBpZiBpdCBpcyBvbmVcclxuICAgIGlmIChlLnRhcmdldC5maWxlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgc2V0VUltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlKGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgc2V0U3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgICAgc2V0SW1hZ2VMaW1pdCh0cnVlKTtcclxuICAgICAgfTtcclxuICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vRGlzcGxheSBpbWFnZSBpbiB0aGUgVUkgaWYgaXQgbGVzcyB0aGFuIDNcclxuICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICBzZXRJbWFnZUxpbWl0KGZhbHNlKTtcclxuICAgICAgICBzZXRTcGlubmVyKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlUmVhZGVycyA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICBmaWxlUmVhZGVycy5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJbWFnZXMoKG9sZEFycikgPT4gWy4uLm9sZEFyciwgZS50YXJnZXQucmVzdWx0XSk7XHJcbiAgICAgICAgICAgIHNldFNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRJbWFnZUxpbWl0KHRydWUpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGZpbGVSZWFkZXJzLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlLnRhcmdldC5maWxlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgYXJyLnB1c2goZS50YXJnZXQuZmlsZXNbal0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRVSW1hZ2VzKGFycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dHMgPSAoZSwgdHlwZSkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwicHJvZHVjdE5hbWVcIikge1xyXG4gICAgICB2YXIgbGV0dGVycyA9IC9eWzAtOV0rJC87XHJcbiAgICAgIGlmIChlLnRhcmdldC52YWx1ZS5tYXRjaChsZXR0ZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHtcclxuICAgICAgICAgIG1zZzogXCJQcm9kdWN0IHByaWNlIG11c3QgYmUgb25seSBhbHBoYWJldHNcIixcclxuICAgICAgICAgIGlucHV0VHlwZTogXCJwcm9kdWN0TmFtZVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKCFlLnRhcmdldC52YWx1ZS5tYXRjaChsZXR0ZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHt9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRQcm9kdWN0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInByaWNlVmFsdWVcIikge1xyXG4gICAgICB2YXIgbnVtYmVycyA9IC9eWzAtOV0rJC87XHJcbiAgICAgIGlmICghZS50YXJnZXQudmFsdWUubWF0Y2gobnVtYmVycykpIHtcclxuICAgICAgICBzZXRFcnJvcih7XHJcbiAgICAgICAgICBtc2c6IFwiUHJvZHVjdCBwcmljZSBtdXN0IGJlIG9ubHkgbnVtYmVyc1wiLFxyXG4gICAgICAgICAgaW5wdXRUeXBlOiBcInByaWNlVmFsdWVcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZS5tYXRjaChudW1iZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHt9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRQcmljZUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJxdWFudGl0eVZhbHVlXCIpIHtcclxuICAgICAgdmFyIG51bWJlcnMgPSAvXlswLTldKyQvO1xyXG4gICAgICBpZiAoIWUudGFyZ2V0LnZhbHVlLm1hdGNoKG51bWJlcnMpKSB7XHJcbiAgICAgICAgc2V0RXJyb3Ioe1xyXG4gICAgICAgICAgbXNnOiBcIlByb2R1Y3QgcXVhbnRpdHkgbXVzdCBiZSBvbmx5IG51bWJlcnNcIixcclxuICAgICAgICAgIGlucHV0VHlwZTogXCJxdWFudGl0eVZhbHVlXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudmFsdWUubWF0Y2gobnVtYmVycykpIHtcclxuICAgICAgICBzZXRFcnJvcih7fSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0UXVhbnRpdHlJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwidGFnc1ZhbHVlXCIpIHtcclxuICAgICAgc2V0VGFnSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImNhdFZhbHVlXCIpIHtcclxuICAgICAgc2V0Q2F0ZWdvcnlJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCB2YWxpZGF0ZUlucHV0cyA9ICgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgcHJvZHVjdElucHV0ICYmXHJcbiAgICAgIHByaWNlSW5wdXQgJiZcclxuICAgICAgcXVhbnRpdHlJbnB1dCAmJlxyXG4gICAgICBjYXRlZ29yeUlucHV0ICYmXHJcbiAgICAgIHRhZ0lucHV0ICYmXHJcbiAgICAgIGltYWdlTGltaXRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBDaXJjdWxhclByb2dyZXNzV2l0aExhYmVsKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIj5cclxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyB2YXJpYW50PVwiZGV0ZXJtaW5hdGVcIiB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgdG9wPXswfVxyXG4gICAgICAgICAgbGVmdD17MH1cclxuICAgICAgICAgIGJvdHRvbT17MH1cclxuICAgICAgICAgIHJpZ2h0PXswfVxyXG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICA+e2Ake01hdGgucm91bmQocHJvcHMudmFsdWUpfSVgfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGRhdGEuYXBwZW5kKFwibmFtZVwiLCBwcm9kdWN0SW5wdXQpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJjYXRlZ29yeVwiLCBjYXRlZ29yeUlucHV0KTtcclxuICAgIGRhdGEuYXBwZW5kKFwidGFnXCIsIHRhZ0lucHV0KTtcclxuICAgIGRhdGEuYXBwZW5kKFwicHJpY2VcIiwgcHJpY2VJbnB1dCk7XHJcbiAgICBkYXRhLmFwcGVuZChcInF1YW50aXR5XCIsIHF1YW50aXR5SW5wdXQpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJpbWFnZVwiLCB1SW1hZ2UpO1xyXG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCB1SW1hZ2VzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgIGRhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgdUltYWdlc1t4XSk7XHJcbiAgICB9XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvcHJvZHVjdC9hZGQtcHJvZHVjdFwiLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjpcclxuICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhOREk0TmpFM01YMC5MajBNbWo1ZzJ5RUFZcVlWT1F0Vm9Nc3psV3MtMXY3RU9fQktOVC1aZ2tJXCIsXHJcbiAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFByb2dyZXNzKChwcmV2UHJvZ3Jlc3MpID0+XHJcbiAgICAgICAgICAgIHByZXZQcm9ncmVzcyA+PSA5MFxyXG4gICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgIDogcHJldlByb2dyZXNzICsgTWF0aC5yb3VuZCgoMTAwICogZGF0YS5sb2FkZWQpIC8gZGF0YS50b3RhbClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBzZXRJc1NuYWNrQmFyKHsgc3RhdGU6IHRydWUsIG1zZzogXCJQcm9kdWN0IGFkZGVkIHN1Y2Nlc3NmdWxcIiB9KTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFByb2R1Y3RJbnB1dChcIlwiKTtcclxuICAgICAgICBzZXRQcmljZUlucHV0KFwiXCIpO1xyXG4gICAgICAgIHNldFF1YW50aXR5SW5wdXQoXCJcIik7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlJbnB1dChcIlwiKTtcclxuICAgICAgICBzZXRUYWdJbnB1dChcIlwiKTtcclxuICAgICAgICBzZXRVSW1hZ2VzKFwiXCIpO1xyXG4gICAgICAgIHNldFVJbWFnZShcIlwiKTtcclxuICAgICAgICBzZXRJbWFnZShcIlwiKTtcclxuICAgICAgICBzZXRJbWFnZXMoXCJcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8U25hY2tiYXJcclxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwiYm90dG9tXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICBvcGVuPXtTbmFja2Jhci5zdGF0ZX1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc1NuYWNrQmFyKGZhbHNlKX1cclxuICAgICAgICBtZXNzYWdlPXtTbmFja2Jhci5tc2d9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPkFkZCBQcm9kdWN0PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJBZGQgcHJvZHVjdCBuYW1lXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICB2YWx1ZT17cHJvZHVjdElucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dHMoZSwgXCJwcm9kdWN0TmFtZVwiKX1cclxuICAgICAgICAgIGVycm9yPXtlcnJvci5tc2cgJiYgZXJyb3IuaW5wdXRUeXBlID09PSBcInByb2R1Y3ROYW1lXCIgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJwcm9kdWN0TmFtZVwiID8gZXJyb3IubXNnIDogXCJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIkFkZCBhIHByaWNlXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHZhbHVlPXtwcmljZUlucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dHMoZSwgXCJwcmljZVZhbHVlXCIpfVxyXG4gICAgICAgICAgZXJyb3I9e2Vycm9yLm1zZyAmJiBlcnJvci5pbnB1dFR5cGUgPT09IFwicHJpY2VWYWx1ZVwiID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgaGVscGVyVGV4dD17XHJcbiAgICAgICAgICAgIGVycm9yLm1zZyAmJiBlcnJvci5pbnB1dFR5cGUgPT09IFwicHJpY2VWYWx1ZVwiID8gZXJyb3IubXNnIDogXCJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJBZGQgdGhlIHF1YW50aXR5IG9mIHByb2R1Y3RcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e3F1YW50aXR5SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcInF1YW50aXR5VmFsdWVcIil9XHJcbiAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgIGVycm9yLm1zZyAmJiBlcnJvci5pbnB1dFR5cGUgPT09IFwicXVhbnRpdHlWYWx1ZVwiID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJxdWFudGl0eVZhbHVlXCIgPyBlcnJvci5tc2cgOiBcIlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1jdXJyZW5jeS1uYXRpdmVcIlxyXG4gICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PVwiQWRkIGEgdGFnXCJcclxuICAgICAgICAgIFNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgIG5hdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgb25Gb2N1cz17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcInRhZ3NWYWx1ZVwiKX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwidGFnc1ZhbHVlXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0YWcubWFwKCh0YWdzLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3RhZ3MudGFnfT57dGFncy50YWd9PC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1jdXJyZW5jeS1uYXRpdmVcIlxyXG4gICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAvLyBsYWJlbD1cIkFkZCB0YWdcIlxyXG4gICAgICAgICAgaGVscGVyVGV4dD1cIkFkZCBhIGNhdGVnb3J5XCJcclxuICAgICAgICAgIFNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgIG5hdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgb25Gb2N1cz17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcImNhdFZhbHVlXCIpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dHMoZSwgXCJjYXRWYWx1ZVwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NhdGVnb3J5LmNhdGVnb3J5fT57Y2F0ZWdvcnkuY2F0ZWdvcnl9PC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgIGlkPVwiaWNvbi1idXR0b24tcGhvdG9cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNhcHR1cmV9XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpY29uLWJ1dHRvbi1waG90b1wiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICpVcGxvYWQgYSBwaWN0dXJlKHMpIG9mIHRoZSBwcm9kdWN0LiBNYXg6IDMgcGljdHVyZSpcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIGNvbXBvbmVudD1cInNwYW5cIj5cclxuICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge3NwaW5uZXIgPyAoXHJcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8QXZhdGFyR3JvdXAgbWF4PXszfT5cclxuICAgICAgICAgICAge2ltYWdlID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD17aW1hZ2V9IHNyYz17aW1hZ2V9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZShcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZUxpbWl0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzYxNjE2MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCItNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCI0LjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtpbWFnZXNcclxuICAgICAgICAgICAgICA/IGltYWdlcy5tYXAoKHByZXZpZXdJbWFnZXMsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgLy8gPGltZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiMjAwXCIgc3JjPXtpbWFnZXNbaV19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZXNbaV19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tpXX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbFJlc3VsdCA9IGltYWdlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGltZykgPT4gaW1nICE9IGltYWdlc1tpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZXMoZGVsUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZUxpbWl0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNjE2MTYxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIi00MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiNC44cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgIDwvQXZhdGFyR3JvdXA+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgIG9uQ2xpY2s9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgIGRpc2FibGVkPXshdmFsaWRhdGVJbnB1dHMoKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc1dpdGhMYWJlbCB2YWx1ZT17cHJvZ3Jlc3N9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFwiVXBsb2FkIFByb2R1Y3RcIlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5Db250ZW50LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQ29udGVudCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=