"use strict";
(() => {
var exports = {};
exports.id = 3602;
exports.ids = [3602];
exports.modules = {

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 5465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ fileupload)
});

;// CONCATENATED MODULE: external "formidable"
const external_formidable_namespaceObject = require("formidable");
var external_formidable_default = /*#__PURE__*/__webpack_require__.n(external_formidable_namespaceObject);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/fileupload.ts



const config = {
    api: {
        bodyParser: false
    }
};
const reData = [];
const readFile = (req, saveLocally)=>{
    const options = {};
    if (saveLocally) {
        options.uploadDir = external_path_default().join(process.cwd(), "/public/uploads");
        options.filename = (name, ext, path, form)=>{
            reData.push(Date.now().toString() + "_" + path.originalFilename);
            return Date.now().toString() + "_" + path.originalFilename;
        };
    }
    options.maxFileSize = 4000 * 1024 * 1024;
    const form = external_formidable_default()(options);
    return new Promise((resolve, reject)=>{
        form.parse(req, (err, fields, files)=>{
            if (err) reject(err);
            resolve({
                fields,
                files
            });
        });
    });
};
const handler = async (req, res)=>{
    try {
        await promises_default().readdir(external_path_default().join(process.cwd() + "/public", "/uploads"));
    } catch (error) {
        await promises_default().mkdir(external_path_default().join(process.cwd() + "/public", "/uploads"));
    }
    await readFile(req, true);
    res.json({
        done: "ok",
        fileName: reData[0]
    });
};
/* harmony default export */ const fileupload = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5465));
module.exports = __webpack_exports__;

})();