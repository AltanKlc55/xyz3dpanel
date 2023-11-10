"use strict";
(() => {
var exports = {};
exports.id = 8362;
exports.ids = [8362];
exports.modules = {

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 9796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ newfileupload)
});

;// CONCATENATED MODULE: external "multiparty"
const external_multiparty_namespaceObject = require("multiparty");
var external_multiparty_default = /*#__PURE__*/__webpack_require__.n(external_multiparty_namespaceObject);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: ./src/pages/api/newfileupload.js



const config = {
    api: {
        bodyParser: false
    }
};
/* harmony default export */ const newfileupload = (async (req, res)=>{
    if (req.method === "POST") {
        const form = new (external_multiparty_default()).Form();
        const yuklenenDosyalar = [];
        form.parse(req, async (err, fields, files)=>{
            if (err) {
                res.status(500).json({
                    error: "Dosya y\xfckleme hatası"
                });
                return;
            }
            const uploadDir = external_path_default().join(process.cwd(), "/public/uploads");
            if (!external_fs_default().existsSync(uploadDir)) {
                external_fs_default().mkdirSync(uploadDir, {
                    recursive: true
                });
            }
            for (const dosyaKey of Object.keys(files)){
                const dosya = files[dosyaKey][0];
                const dosyaYolu = external_path_default().join(uploadDir, dosya.originalFilename);
                external_fs_default().renameSync(dosya.path, dosyaYolu);
                yuklenenDosyalar.push({
                    name: dosya.originalFilename,
                    fieldName: dosya.fieldName
                });
            }
            console.log("Y\xfcklenen Dosyalar:", yuklenenDosyalar);
            res.status(200).json({
                message: "Dosyalar başarıyla y\xfcklendi ve kaydedildi",
                files: yuklenenDosyalar
            });
        });
    } else {
        res.status(405).json({
            error: "Yanlış y\xf6ntem"
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9796));
module.exports = __webpack_exports__;

})();