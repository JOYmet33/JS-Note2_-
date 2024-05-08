// event handler 실습

const inputType = document.querySelector("#typing");
const inputClick = document.querySelector("#push");

const handleTyping = function () {
  console.log("타이핑 중");
};

const handleClick = function () {
  console.log("클릭 중");
};

inputType.onkeydown = handleTyping;
inputClick.onclick = handleClick;
