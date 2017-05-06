"use strict";

// // создание элемента 
// const title = React.createElement(
//     'h1',   		// элемент, который мы создаем
//     {id: 'title'},  // свойства, которые будет иметь создаваемый элемент
//     'Hello React'   // внутреннее содержимое
// )

// // рендеринг элемента
// ReactDOM.render(
//    title,  // элемент, который мы хотим создать
//    document.getElementById('container')    // где мы этот элемент хотим создать
// )

ReactDOM.render(React.createElement(
    "h1",
    { id: "title" },
    "Hello React"
), // элемент, который мы хотим создать
document.getElementById("container") // где мы этот элемент хотим создать
);
