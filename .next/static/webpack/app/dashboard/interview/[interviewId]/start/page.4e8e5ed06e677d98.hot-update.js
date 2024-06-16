"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/interview/[interviewId]/start/page",{

/***/ "(app-pages-browser)/./app/dashboard/interview/[interviewId]/start/_components/RecordAnswerSection.jsx":
/*!*****************************************************************************************!*\
  !*** ./app/dashboard/interview/[interviewId]/start/_components/RecordAnswerSection.jsx ***!
  \*****************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-webcam */ \"(app-pages-browser)/./node_modules/react-webcam/dist/react-webcam.js\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_speech_to_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-speech-to-text */ \"(app-pages-browser)/./node_modules/react-hook-speech-to-text/dist/index.js\");\n/* harmony import */ var _barrel_optimize_names_Mic_StopCircle_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Mic,StopCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-stop.js\");\n/* harmony import */ var _barrel_optimize_names_Mic_StopCircle_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Mic,StopCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/mic.js\");\n/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sonner */ \"(app-pages-browser)/./node_modules/sonner/dist/index.mjs\");\n/* harmony import */ var _utils_GeminiAIModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/GeminiAIModal */ \"(app-pages-browser)/./utils/GeminiAIModal.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/db */ \"(app-pages-browser)/./utils/db.js\");\n/* harmony import */ var _utils_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/schema */ \"(app-pages-browser)/./utils/schema.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/index.mjs\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ \"(app-pages-browser)/./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction RecordAnswerSection(param) {\n    let { mockInterviewQuestion, activeQuestionIndex, interviewData } = param;\n    _s();\n    const [userAnswer, setUserAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const { user } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_11__.useUser)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { error, interimResult, isRecording, results, startSpeechToText, stopSpeechToText, setResults } = (0,react_hook_speech_to_text__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        continuous: false,\n        useLegacyResults: false\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        results === null || results === void 0 ? void 0 : results.map((result)=>setUserAnswer((prevAns)=>prevAns + (result === null || result === void 0 ? void 0 : result.transcript)));\n    }, [\n        results\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!isRecording && (userAnswer === null || userAnswer === void 0 ? void 0 : userAnswer.length) > 5) {\n            UpdateUserAnswer();\n        }\n    }, [\n        userAnswer\n    ]);\n    const StartStopRecording = async ()=>{\n        if (isRecording) {\n            stopSpeechToText();\n        } else {\n            startSpeechToText();\n        }\n    };\n    const UpdateUserAnswer = async ()=>{\n        var _mockInterviewQuestion_activeQuestionIndex, _mockInterviewQuestion_activeQuestionIndex1, _mockInterviewQuestion_activeQuestionIndex2, _user_primaryEmailAddress;\n        console.log(userAnswer);\n        setLoading(true);\n        const feedbackPrompt = \"Question:\" + ((_mockInterviewQuestion_activeQuestionIndex = mockInterviewQuestion[activeQuestionIndex]) === null || _mockInterviewQuestion_activeQuestionIndex === void 0 ? void 0 : _mockInterviewQuestion_activeQuestionIndex.question) + \", User Answer:\" + userAnswer + \",Depends on question and user answer for give interview question \" + \" please give us rating for answer and feedback as area of improvmenet if any \" + \"in just 3 to 5 lines to improve it in JSON format with rating field and feedback field\";\n        const result = await _utils_GeminiAIModal__WEBPACK_IMPORTED_MODULE_7__.chatSession.sendMessage(feedbackPrompt);\n        const mockJsonResp = result.response.text().replace(\"```json\", \"\").replace(\"```\", \"\");\n        const JsonFeedbackResp = JSON.parse(mockJsonResp);\n        const resp = await _utils_db__WEBPACK_IMPORTED_MODULE_8__.db.insert(_utils_schema__WEBPACK_IMPORTED_MODULE_9__.UserAnswer).values({\n            mockIdRef: interviewData === null || interviewData === void 0 ? void 0 : interviewData.mockId,\n            question: (_mockInterviewQuestion_activeQuestionIndex1 = mockInterviewQuestion[activeQuestionIndex]) === null || _mockInterviewQuestion_activeQuestionIndex1 === void 0 ? void 0 : _mockInterviewQuestion_activeQuestionIndex1.question,\n            correctAns: (_mockInterviewQuestion_activeQuestionIndex2 = mockInterviewQuestion[activeQuestionIndex]) === null || _mockInterviewQuestion_activeQuestionIndex2 === void 0 ? void 0 : _mockInterviewQuestion_activeQuestionIndex2.answer,\n            userAns: userAnswer,\n            feedback: JsonFeedbackResp === null || JsonFeedbackResp === void 0 ? void 0 : JsonFeedbackResp.feedback,\n            rating: JsonFeedbackResp === null || JsonFeedbackResp === void 0 ? void 0 : JsonFeedbackResp.rating,\n            userEmail: user === null || user === void 0 ? void 0 : (_user_primaryEmailAddress = user.primaryEmailAddress) === null || _user_primaryEmailAddress === void 0 ? void 0 : _user_primaryEmailAddress.emailAddress,\n            createdAt: moment__WEBPACK_IMPORTED_MODULE_10___default()().format(\"DD-MM-yyyy\")\n        });\n        if (resp) {\n            (0,sonner__WEBPACK_IMPORTED_MODULE_6__.toast)(\"User Answer recorded successfully\");\n            setUserAnswer(\"\");\n            setResults([]);\n        }\n        setResults([]);\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: \"/webcam.png\",\n                        width: 200,\n                        height: 200,\n                        className: \"absolute\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SNEHAL TRIPATHI\\\\project_AI-Interview-mocker\\\\mock-ai\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\start\\\\_components\\\\RecordAnswerSection.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        mirrored: true,\n                        style: {\n                            height: 500,\n                            width: 500,\n                            zIndex: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SNEHAL TRIPATHI\\\\project_AI-Interview-mocker\\\\mock-ai\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\start\\\\_components\\\\RecordAnswerSection.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\SNEHAL TRIPATHI\\\\project_AI-Interview-mocker\\\\mock-ai\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\start\\\\_components\\\\RecordAnswerSection.jsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                disabled: loading,\n                variant: \"outline\",\n                className: \"my-10\",\n                onClick: StartStopRecording,\n                children: isRecording ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-red-600 animate-pulse flex gap-2 items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Mic_StopCircle_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\SNEHAL TRIPATHI\\\\project_AI-Interview-mocker\\\\mock-ai\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\start\\\\_components\\\\RecordAnswerSection.jsx\",\n                            lineNumber: 116,\n                            columnNumber: 17\n                        }, this),\n                        \"Stop Recording\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\SNEHAL TRIPATHI\\\\project_AI-Interview-mocker\\\\mock-ai\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\start\\\\_components\\\\RecordAnswerSection.jsx\",\n                    lineNumber: 115,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-primary flex gap-2 items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Mic_StopCircle_lucide_react__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\SNEHAL TRIPATHI\\\\project_AI-Interview-mocker\\\\mock-ai\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\start\\\\_components\\\\RecordAnswerSection.jsx\",\n                            lineNumber: 121,\n                            columnNumber: 15\n                        }, this),\n                        \"  Record Answer\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\SNEHAL TRIPATHI\\\\project_AI-Interview-mocker\\\\mock-ai\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\start\\\\_components\\\\RecordAnswerSection.jsx\",\n                    lineNumber: 120,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SNEHAL TRIPATHI\\\\project_AI-Interview-mocker\\\\mock-ai\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\start\\\\_components\\\\RecordAnswerSection.jsx\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\SNEHAL TRIPATHI\\\\project_AI-Interview-mocker\\\\mock-ai\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\start\\\\_components\\\\RecordAnswerSection.jsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, this);\n}\n_s(RecordAnswerSection, \"wcgkva1AIJuBN4Bpy27bxLevlVk=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_11__.useUser,\n        react_hook_speech_to_text__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = RecordAnswerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecordAnswerSection);\nvar _c;\n$RefreshReg$(_c, \"RecordAnswerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvaW50ZXJ2aWV3L1tpbnRlcnZpZXdJZF0vc3RhcnQvX2NvbXBvbmVudHMvUmVjb3JkQW5zd2VyU2VjdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0M7QUFDakI7QUFDb0I7QUFDakI7QUFDdUI7QUFDVjtBQUNoQjtBQUNxQjtBQUNwQjtBQUNZO0FBQ0o7QUFDWjtBQUUzQixTQUFTZSxvQkFBb0IsS0FBeUQ7UUFBekQsRUFBQ0MscUJBQXFCLEVBQUNDLG1CQUFtQixFQUFDQyxhQUFhLEVBQUMsR0FBekQ7O0lBQ3pCLE1BQU0sQ0FBQ0MsWUFBV0MsY0FBYyxHQUFDaEIsK0NBQVFBLENBQUM7SUFDMUMsTUFBTSxFQUFDaUIsSUFBSSxFQUFDLEdBQUNSLHVEQUFPQTtJQUNwQixNQUFNLENBQUNTLFNBQVFDLFdBQVcsR0FBQ25CLCtDQUFRQSxDQUFDO0lBQ3BDLE1BQU0sRUFDRm9CLEtBQUssRUFDTEMsYUFBYSxFQUNiQyxXQUFXLEVBQ1hDLE9BQU8sRUFDUEMsaUJBQWlCLEVBQ2pCQyxnQkFBZ0IsRUFDaEJDLFVBQVUsRUFFWCxHQUFHeEIscUVBQWVBLENBQUM7UUFDbEJ5QixZQUFXO1FBQ1hDLGtCQUFrQjtJQUNwQjtJQUVBN0IsZ0RBQVNBLENBQUM7UUFFUndCLG9CQUFBQSw4QkFBQUEsUUFBU00sR0FBRyxDQUFDLENBQUNDLFNBQ1ZkLGNBQWNlLENBQUFBLFVBQVNBLFdBQVFELG1CQUFBQSw2QkFBQUEsT0FBUUUsVUFBVTtJQUd2RCxHQUFFO1FBQUNUO0tBQVE7SUFFWHhCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBRyxDQUFDdUIsZUFBYVAsQ0FBQUEsdUJBQUFBLGlDQUFBQSxXQUFZa0IsTUFBTSxJQUFDLEdBQ3BDO1lBQ0VDO1FBQ0Y7SUFDRixHQUFFO1FBQUNuQjtLQUFXO0lBR2QsTUFBTW9CLHFCQUFtQjtRQUN2QixJQUFHYixhQUNIO1lBQ0VHO1FBQ0YsT0FDSTtZQUNGRDtRQUNGO0lBQ0Y7SUFFQSxNQUFNVSxtQkFBaUI7WUFJWXRCLDRDQVd0QkEsNkNBQ0VBLDZDQUlESztRQWxCWm1CLFFBQVFDLEdBQUcsQ0FBQ3RCO1FBQ1pJLFdBQVc7UUFDWCxNQUFNbUIsaUJBQWUsZ0JBQVkxQiw2Q0FBQUEscUJBQXFCLENBQUNDLG9CQUFvQixjQUExQ0QsaUVBQUFBLDJDQUE0QzJCLFFBQVEsSUFDckYsbUJBQWlCeEIsYUFBVyxzRUFDNUIsa0ZBQ0E7UUFFQSxNQUFNZSxTQUFPLE1BQU14Qiw2REFBV0EsQ0FBQ2tDLFdBQVcsQ0FBQ0Y7UUFDM0MsTUFBTUcsZUFBYSxPQUFRQyxRQUFRLENBQUNDLElBQUksR0FBSUMsT0FBTyxDQUFDLFdBQVUsSUFBSUEsT0FBTyxDQUFDLE9BQU07UUFDaEYsTUFBTUMsbUJBQWlCQyxLQUFLQyxLQUFLLENBQUNOO1FBQ2xDLE1BQU1PLE9BQUssTUFBTXpDLHlDQUFFQSxDQUFDMEMsTUFBTSxDQUFDekMscURBQVVBLEVBQ3BDMEMsTUFBTSxDQUFDO1lBQ05DLFNBQVMsRUFBQ3JDLDBCQUFBQSxvQ0FBQUEsY0FBZXNDLE1BQU07WUFDL0JiLFFBQVEsR0FBQzNCLDhDQUFBQSxxQkFBcUIsQ0FBQ0Msb0JBQW9CLGNBQTFDRCxrRUFBQUEsNENBQTRDMkIsUUFBUTtZQUM3RGMsVUFBVSxHQUFDekMsOENBQUFBLHFCQUFxQixDQUFDQyxvQkFBb0IsY0FBMUNELGtFQUFBQSw0Q0FBNEMwQyxNQUFNO1lBQzdEQyxTQUFReEM7WUFDUnlDLFFBQVEsRUFBQ1gsNkJBQUFBLHVDQUFBQSxpQkFBa0JXLFFBQVE7WUFDbkNDLE1BQU0sRUFBQ1osNkJBQUFBLHVDQUFBQSxpQkFBa0JZLE1BQU07WUFDL0JDLFNBQVMsRUFBQ3pDLGlCQUFBQSw0QkFBQUEsNEJBQUFBLEtBQU0wQyxtQkFBbUIsY0FBekIxQyxnREFBQUEsMEJBQTJCMkMsWUFBWTtZQUNqREMsV0FBVW5ELDhDQUFNQSxHQUFHb0QsTUFBTSxDQUFDO1FBQzVCO1FBRUEsSUFBR2QsTUFDSDtZQUNFM0MsNkNBQUtBLENBQUM7WUFDTlcsY0FBYztZQUNkVSxXQUFXLEVBQUU7UUFDZjtRQUNBQSxXQUFXLEVBQUU7UUFFWFAsV0FBVztJQUNmO0lBR0oscUJBQ0UsOERBQUM0QztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDbkUsa0RBQUtBO3dCQUFDb0UsS0FBSzt3QkFBZUMsT0FBTzt3QkFBS0MsUUFBUTt3QkFDL0NILFdBQVU7Ozs7OztrQ0FDViw4REFBQy9ELHFEQUFNQTt3QkFDUG1FLFVBQVU7d0JBQ1ZDLE9BQU87NEJBQ0hGLFFBQU87NEJBQ1BELE9BQU07NEJBQ05JLFFBQU87d0JBQ1g7Ozs7Ozs7Ozs7OzswQkFHSiw4REFBQzFFLHlEQUFNQTtnQkFDUDJFLFVBQVVyRDtnQkFDVnNELFNBQVE7Z0JBQVVSLFdBQVU7Z0JBQzVCUyxTQUFTdEM7MEJBRUpiLDRCQUNELDhEQUFDb0Q7b0JBQUdWLFdBQVU7O3NDQUNWLDhEQUFDNUQsMkZBQVVBOzs7Ozt3QkFBRTs7Ozs7O3lDQUlqQiw4REFBQ3NFO29CQUFHVixXQUFVOztzQ0FDWiw4REFBQzdELDJGQUFHQTs7Ozs7d0JBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQjtHQS9HU1E7O1FBRVFGLG1EQUFPQTtRQVdkUCxpRUFBZUE7OztLQWJoQlM7QUFpSFQsK0RBQWVBLG1CQUFtQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL2ludGVydmlldy9baW50ZXJ2aWV3SWRdL3N0YXJ0L19jb21wb25lbnRzL1JlY29yZEFuc3dlclNlY3Rpb24uanN4PzhjOWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbidcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXZWJjYW0gZnJvbSAncmVhY3Qtd2ViY2FtJ1xyXG5pbXBvcnQgdXNlU3BlZWNoVG9UZXh0IGZyb20gJ3JlYWN0LWhvb2stc3BlZWNoLXRvLXRleHQnO1xyXG5pbXBvcnQgeyBNaWMsIFN0b3BDaXJjbGUgfSBmcm9tICdsdWNpZGUtcmVhY3QnXHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAnc29ubmVyJ1xyXG5pbXBvcnQgeyBjaGF0U2Vzc2lvbiB9IGZyb20gJ0AvdXRpbHMvR2VtaW5pQUlNb2RhbCdcclxuaW1wb3J0IHsgZGIgfSBmcm9tICdAL3V0aWxzL2RiJ1xyXG5pbXBvcnQgeyBVc2VyQW5zd2VyIH0gZnJvbSAnQC91dGlscy9zY2hlbWEnXHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAY2xlcmsvbmV4dGpzJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcbmZ1bmN0aW9uIFJlY29yZEFuc3dlclNlY3Rpb24oe21vY2tJbnRlcnZpZXdRdWVzdGlvbixhY3RpdmVRdWVzdGlvbkluZGV4LGludGVydmlld0RhdGF9KSB7XHJcbiAgICBjb25zdCBbdXNlckFuc3dlcixzZXRVc2VyQW5zd2VyXT11c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCB7dXNlcn09dXNlVXNlcigpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ109dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGVycm9yLFxyXG4gICAgICAgIGludGVyaW1SZXN1bHQsXHJcbiAgICAgICAgaXNSZWNvcmRpbmcsXHJcbiAgICAgICAgcmVzdWx0cyxcclxuICAgICAgICBzdGFydFNwZWVjaFRvVGV4dCxcclxuICAgICAgICBzdG9wU3BlZWNoVG9UZXh0LFxyXG4gICAgICAgIHNldFJlc3VsdHNcclxuICAgXHJcbiAgICAgIH0gPSB1c2VTcGVlY2hUb1RleHQoe1xyXG4gICAgICAgIGNvbnRpbnVvdXM6ZmFsc2UsXHJcbiAgICAgICAgdXNlTGVnYWN5UmVzdWx0czogZmFsc2VcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgIFxyXG4gICAgICAgIHJlc3VsdHM/Lm1hcCgocmVzdWx0KT0+KFxyXG4gICAgICAgICAgICBzZXRVc2VyQW5zd2VyKHByZXZBbnM9PnByZXZBbnMrcmVzdWx0Py50cmFuc2NyaXB0KVxyXG4gICAgICAgICkpXHJcbiAgICAgIFxyXG4gICAgICB9LFtyZXN1bHRzXSlcclxuXHJcbiAgICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKCFpc1JlY29yZGluZyYmdXNlckFuc3dlcj8ubGVuZ3RoPjUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXBkYXRlVXNlckFuc3dlcigpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgIH0sW3VzZXJBbnN3ZXJdKVxyXG4gIFxyXG4gICAgICAgICBcclxuICAgICAgY29uc3QgU3RhcnRTdG9wUmVjb3JkaW5nPWFzeW5jKCk9PntcclxuICAgICAgICBpZihpc1JlY29yZGluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdG9wU3BlZWNoVG9UZXh0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIHN0YXJ0U3BlZWNoVG9UZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBVcGRhdGVVc2VyQW5zd2VyPWFzeW5jKCk9PntcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlckFuc3dlcilcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgY29uc3QgZmVlZGJhY2tQcm9tcHQ9XCJRdWVzdGlvbjpcIittb2NrSW50ZXJ2aWV3UXVlc3Rpb25bYWN0aXZlUXVlc3Rpb25JbmRleF0/LnF1ZXN0aW9uK1xyXG4gICAgICAgIFwiLCBVc2VyIEFuc3dlcjpcIit1c2VyQW5zd2VyK1wiLERlcGVuZHMgb24gcXVlc3Rpb24gYW5kIHVzZXIgYW5zd2VyIGZvciBnaXZlIGludGVydmlldyBxdWVzdGlvbiBcIitcclxuICAgICAgICBcIiBwbGVhc2UgZ2l2ZSB1cyByYXRpbmcgZm9yIGFuc3dlciBhbmQgZmVlZGJhY2sgYXMgYXJlYSBvZiBpbXByb3ZtZW5ldCBpZiBhbnkgXCIrXHJcbiAgICAgICAgXCJpbiBqdXN0IDMgdG8gNSBsaW5lcyB0byBpbXByb3ZlIGl0IGluIEpTT04gZm9ybWF0IHdpdGggcmF0aW5nIGZpZWxkIGFuZCBmZWVkYmFjayBmaWVsZFwiO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQ9YXdhaXQgY2hhdFNlc3Npb24uc2VuZE1lc3NhZ2UoZmVlZGJhY2tQcm9tcHQpO1xyXG4gICAgICAgIGNvbnN0IG1vY2tKc29uUmVzcD0ocmVzdWx0LnJlc3BvbnNlLnRleHQoKSkucmVwbGFjZSgnYGBganNvbicsJycpLnJlcGxhY2UoJ2BgYCcsJycpO1xyXG4gICAgICAgIGNvbnN0IEpzb25GZWVkYmFja1Jlc3A9SlNPTi5wYXJzZShtb2NrSnNvblJlc3ApO1xyXG4gICAgICAgIGNvbnN0IHJlc3A9YXdhaXQgZGIuaW5zZXJ0KFVzZXJBbnN3ZXIpXHJcbiAgICAgICAgLnZhbHVlcyh7XHJcbiAgICAgICAgICBtb2NrSWRSZWY6aW50ZXJ2aWV3RGF0YT8ubW9ja0lkLFxyXG4gICAgICAgICAgcXVlc3Rpb246bW9ja0ludGVydmlld1F1ZXN0aW9uW2FjdGl2ZVF1ZXN0aW9uSW5kZXhdPy5xdWVzdGlvbixcclxuICAgICAgICAgIGNvcnJlY3RBbnM6bW9ja0ludGVydmlld1F1ZXN0aW9uW2FjdGl2ZVF1ZXN0aW9uSW5kZXhdPy5hbnN3ZXIsXHJcbiAgICAgICAgICB1c2VyQW5zOnVzZXJBbnN3ZXIsXHJcbiAgICAgICAgICBmZWVkYmFjazpKc29uRmVlZGJhY2tSZXNwPy5mZWVkYmFjayxcclxuICAgICAgICAgIHJhdGluZzpKc29uRmVlZGJhY2tSZXNwPy5yYXRpbmcsXHJcbiAgICAgICAgICB1c2VyRW1haWw6dXNlcj8ucHJpbWFyeUVtYWlsQWRkcmVzcz8uZW1haWxBZGRyZXNzLFxyXG4gICAgICAgICAgY3JlYXRlZEF0Om1vbWVudCgpLmZvcm1hdCgnREQtTU0teXl5eScpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYocmVzcClcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0b2FzdCgnVXNlciBBbnN3ZXIgcmVjb3JkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICBzZXRVc2VyQW5zd2VyKCcnKTtcclxuICAgICAgICAgIHNldFJlc3VsdHMoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRSZXN1bHRzKFtdKTtcclxuICAgICAgICBcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtY29sJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtdC0yMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctYmxhY2sgcm91bmRlZC1sZyBwLTUnPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXsnL3dlYmNhbS5wbmcnfSB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUnLz5cclxuICAgICAgICAgICAgPFdlYmNhbVxyXG4gICAgICAgICAgICBtaXJyb3JlZD17dHJ1ZX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDo1MDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDo1MDAsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6MTAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cIm15LTEwXCJcclxuICAgICAgICBvbkNsaWNrPXtTdGFydFN0b3BSZWNvcmRpbmd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNSZWNvcmRpbmc/XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtcmVkLTYwMCBhbmltYXRlLXB1bHNlIGZsZXggZ2FwLTIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxTdG9wQ2lyY2xlLz5TdG9wIFJlY29yZGluZ1xyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnkgZmxleCBnYXAtMiBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgIDxNaWMvPiAgUmVjb3JkIEFuc3dlcjwvaDI+IH08L0J1dHRvbj5cclxuICAgICAgXHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29yZEFuc3dlclNlY3Rpb25cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV2ViY2FtIiwidXNlU3BlZWNoVG9UZXh0IiwiTWljIiwiU3RvcENpcmNsZSIsInRvYXN0IiwiY2hhdFNlc3Npb24iLCJkYiIsIlVzZXJBbnN3ZXIiLCJ1c2VVc2VyIiwibW9tZW50IiwiUmVjb3JkQW5zd2VyU2VjdGlvbiIsIm1vY2tJbnRlcnZpZXdRdWVzdGlvbiIsImFjdGl2ZVF1ZXN0aW9uSW5kZXgiLCJpbnRlcnZpZXdEYXRhIiwidXNlckFuc3dlciIsInNldFVzZXJBbnN3ZXIiLCJ1c2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsImludGVyaW1SZXN1bHQiLCJpc1JlY29yZGluZyIsInJlc3VsdHMiLCJzdGFydFNwZWVjaFRvVGV4dCIsInN0b3BTcGVlY2hUb1RleHQiLCJzZXRSZXN1bHRzIiwiY29udGludW91cyIsInVzZUxlZ2FjeVJlc3VsdHMiLCJtYXAiLCJyZXN1bHQiLCJwcmV2QW5zIiwidHJhbnNjcmlwdCIsImxlbmd0aCIsIlVwZGF0ZVVzZXJBbnN3ZXIiLCJTdGFydFN0b3BSZWNvcmRpbmciLCJjb25zb2xlIiwibG9nIiwiZmVlZGJhY2tQcm9tcHQiLCJxdWVzdGlvbiIsInNlbmRNZXNzYWdlIiwibW9ja0pzb25SZXNwIiwicmVzcG9uc2UiLCJ0ZXh0IiwicmVwbGFjZSIsIkpzb25GZWVkYmFja1Jlc3AiLCJKU09OIiwicGFyc2UiLCJyZXNwIiwiaW5zZXJ0IiwidmFsdWVzIiwibW9ja0lkUmVmIiwibW9ja0lkIiwiY29ycmVjdEFucyIsImFuc3dlciIsInVzZXJBbnMiLCJmZWVkYmFjayIsInJhdGluZyIsInVzZXJFbWFpbCIsInByaW1hcnlFbWFpbEFkZHJlc3MiLCJlbWFpbEFkZHJlc3MiLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIm1pcnJvcmVkIiwic3R5bGUiLCJ6SW5kZXgiLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJvbkNsaWNrIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/interview/[interviewId]/start/_components/RecordAnswerSection.jsx\n"));

/***/ })

});