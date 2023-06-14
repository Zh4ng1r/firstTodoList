/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://to-do/./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\nconst inputBox = document.getElementById(\"input-box\");\r\nconst listContainer = document.getElementById(\"listContainer\");\r\nconst buttonAdd = document.getElementById(\"addBtn\")\r\nlet todoList = [];\r\n\r\nbuttonAdd.addEventListener('click', createCustomElement);\r\n\r\nfunction createTodoElement(id, text, status) {\r\n  let liElement = document.createElement('li');\r\n  let labelElement = document.createElement('label');\r\n  let inputElement = document.createElement('input');\r\n  let spanElement = document.createElement('span');\r\n  let buttonElement = document.createElement('button');\r\n\r\n  spanElement.innerText = text;\r\n\r\n  labelElement.appendChild(inputElement);\r\n  liElement.appendChild(labelElement);\r\n  liElement.appendChild(spanElement);\r\n  liElement.appendChild(buttonElement);\r\n\r\n  inputElement.setAttribute('type', 'checkbox');\r\n  inputElement.addEventListener('change', updateCheckedStatus);\r\n  liElement.classList.add('custom-checkbox');\r\n  spanElement.classList.add('content');\r\n  buttonElement.addEventListener('click', deleteLi);\r\n  buttonElement.classList.add('closeBtn');\r\n\r\n  liElement.setAttribute('data-id', id);\r\n  inputElement.checked = status;\r\n\r\n  if (status) {\r\n    spanElement.style.color = '#555';\r\n    spanElement.style.textDecoration = 'line-through';\r\n  }\r\n\r\n  return liElement;\r\n}\r\n\r\nfunction createCustomElement() {\r\n  if (inputBox.value === '') {\r\n    alert('404');\r\n  } else {\r\n    let createID = Date.now();\r\n    let liElement = createTodoElement(createID, inputBox.value, false);\r\n\r\n    listContainer.appendChild(liElement);\r\n\r\n    todoList.push({ id: createID, text: inputBox.value, status: false });\r\n    saveInformation();\r\n  }\r\n}\r\n\r\nfunction saveInformation() {\r\n    let todoListStringify = JSON.stringify(todoList);\r\n    localStorage.setItem('toDoList', todoListStringify);\r\n}\r\n\r\nfunction updateCheckedStatus(event) {\r\n    let checkbox = event.target;\r\n    let liElement = checkbox.parentNode.parentNode;\r\n    let spanElement = liElement.querySelector('.content');\r\n    let itemID = Number(liElement.getAttribute('data-id'));\r\n  \r\n    let index = todoList.findIndex(item => item.id === itemID);\r\n    todoList[index].status = checkbox.checked;\r\n  \r\n    if (checkbox.checked) {\r\n      liElement.classList.add('checked')\r\n    } else {\r\n      liElement.classList.remove('checked')\r\n    }\r\n  \r\n  saveInformation();\r\n}\r\n\r\nfunction deleteLi(event) {\r\n    let closeButton = event.target;\r\n    let liElement = closeButton.parentNode;\r\n\r\n    liElement.remove();\r\n\r\n    let index = todoList.findIndex(item => item.id == liElement.dataset.id);\r\n    \r\n    if (index !== -1) {\r\n      todoList.splice(index, 1);\r\n\r\n      saveInformation();\r\n    }\r\n}\r\n\r\n\r\nfunction loadInformation() {\r\n    todoList = localStorage.getItem('toDoList') || '[]';\r\n  \r\n    if (todoList) {\r\n        todoList = JSON.parse(todoList);\r\n  \r\n      listContainer.innerHTML = '';\r\n  \r\n      for (let i = 0; i < todoList.length; i++) {\r\n        let { id, text, status } = todoList[i];\r\n\r\n        let liElement = createTodoElement(id, text, status);\r\n        listContainer.appendChild(liElement);\r\n      }\r\n    }\r\n}\r\n  \r\nloadInformation();\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;