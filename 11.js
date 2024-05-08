//querySelector 메소드
// 선택자를 인자로 전달받아, 그와 일치하는 문서 내 첫번째 요소(Element) 반환
// 일치하는 요소가 없으면 '없다'라는 의미로 'null' 반환
// 표기법: id인 경우 요소 앞에 '#'
// 표기법: class인 경우 요소 앞에 '.'
console.log(document.querySelector("h1"));
console.log(document.querySelector("p"));
console.log(document.querySelector("#text")); // id="text"
console.log(document.querySelector(".paragraph")); // class="paragraph"

//getElementById 메소드
// id를 인자로 전달받아, 그와 일치하는 문서 내 요소(Element) 반환
// 일치하는 요소가 없으면 '없다'라는 의미로 'null' 반환
console.log(document.getElementById("text"));
console.log(document.getElementById("p")); //id="p"인 요소는 없음 = null

//textContent 메소드 실습(1)
const h1 = document.querySelector("h1");
const p = document.getElementById("text");
console.log(h1.textContent);
h1.textContent = "헬로우 여러분!!";

//textContent 메소드 실습(2)
p.textContent = "텍스트컨텐츠 실습(2)";
console.log(p.textContent);
