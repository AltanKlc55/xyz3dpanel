"use strict";
(() => {
var exports = {};
exports.id = 5138;
exports.ids = [5138];
exports.modules = {

/***/ 2764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ query)
});

;// CONCATENATED MODULE: external "mysql2/promise"
const promise_namespaceObject = require("mysql2/promise");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/db.js

async function query({ query , values =[]  }) {
    const dbconnection = await promise_default().createConnection({
        host: "localhost",
        database: "test",
        user: "root",
        password: "",
        charset: "utf8mb4"
    });
    try {
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();
        return results;
    } catch (error) {
        throw Error(error.message);
        return {
            error
        };
    }
}


/***/ }),

/***/ 3571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var src_lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2764);

async function handler(req, res) {
    if (req.method === "GET") {
        const hizmetler = await (0,src_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)({
            query: "SELECT * FROM tbl_hakkimizda where id = 1",
            values: []
        });
        res.status(200).json({
            hakkimizda: hizmetler
        });
    }
    if (req.method === "PUT") {
        let message = "";
        const datas = req.body;
        const baslik = datas.sayfaBasligi;
        const icerik = datas.hakkimizdaContent;
        const nedenbizBaslik = datas.nedenBizBasligi;
        const nedenbizContent = datas.nedenBizContent;
        const banner = datas.banner;
        const nedenbizImg = datas.neden_biz_gorsel;
        const hakkimizdaImg = datas.hakkimizda_gorsel;
        const updateHizmet = await (0,src_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)({
            query: "UPDATE tbl_hakkimizda SET baslik = ?, hakkimizda_gorsel = ?, hakkimizda_icerik = ?, neden_biz_baslik = ?,neden_biz_icerik = ?,neden_biz_gorsel = ?,banner = ? WHERE id = 1",
            values: [
                baslik,
                hakkimizdaImg,
                icerik,
                nedenbizBaslik,
                nedenbizContent,
                nedenbizImg,
                banner
            ]
        });
        const result = updateHizmet.affectedRows;
        if (result) {
            message = "ok";
        } else {
            message = "no";
        }
        res.status(200).json({
            response: {
                message: message,
                hizmetler: result
            }
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3571));
module.exports = __webpack_exports__;

})();