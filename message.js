// 어렵다는것은 익숙하지 않은 것이다.
// 잊지말자 항상 너를 지켜봐주는 사람이 있다.
// 기회도 노력하는 사람에게 주어진다.
const arr = [
  "어렵다는것은 익숙하지 않은 것이다.",
  "잊지말자 항상 너를 지켜봐주는 사람이 있다.",
  "기회도 노력하는 사람에게 주어진다.",
  "배움은 즐겁다.",
  "오늘도 화이팅!",
];

const $h1 = document.querySelector("#read");

const start = () => {
  let random = Math.floor(Math.random() * arr.length);
  console.log(arr[random]);
  $h1.textContent = `${arr[random]}`;
};
start();
