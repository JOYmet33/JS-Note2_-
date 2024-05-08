// event handler 실습(2)

const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");

// const handleClick = function () {
//   console.log(`저를 클릭하셨나요?`);
// };

// event handler 이점 활용
// btn1.addEventListener("click", handleClick);
// btn1.addEventListener("click", function () {
//   console.log("또 부르셨습니까?");
// });
// btn1.removeEventListener("click", handleClick);

// event handler 객체 활용
const handleClick = function (event) {
  console.log(event.target);
};
btn1.addEventListener("click", handleClick);
btn2.addEventListener("click", handleClick);
btn3.addEventListener("click", handleClick);
