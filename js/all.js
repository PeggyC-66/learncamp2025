function showAllcontent(plistno) {
  // console.log(plistno);
  const pId = "article-content" + plistno;
  const btnId = "showBtn" + plistno;
  // console.log(pId + btnId);
  const pEle = document.getElementById(pId);
  const btnEle = document.getElementById(btnId);
  // console.log(pEle.className);
  // console.log(btnEle.className);
  const btnText = btnEle.textContent;

  if (btnText == "收合內文") {
    pEle.classList.remove("article-content-show");
    btnEle.textContent = "閱讀全文";
  } else {
    pEle.classList.add("article-content-show");
    btnEle.textContent = "收合內文";
  }
}

let currentIndex = 0;
const artiiclePerPage = 2;
const articleWidth = 409;

function slide(direction) {
  const articleSlide = document.getElementById("articleSlide");
  // console.log(articleSlide);
  const totalArticles = articleSlide.children.length;
  // console.log(articleSlide.offsetWidth);
  // console.log(totalArticles);
  // console.log(artiiclePerPage);
  maxIndex = Math.ceil(totalArticles / artiiclePerPage) - 1;
  // console.log(maxIndex);

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;
  // console.log(currentIndex);

  // const articlelist = document.getElementById('article-list');
  const allArticlelist = articleSlide.querySelectorAll("li.article-list");
  allArticlelist.forEach((el, index) => {
    el.style.transform = `translateX(-${
      currentIndex * artiiclePerPage * articleWidth
    }px)`;
  });
  // console.log(allArticlelist);
  // console.log(currentIndex * artiiclePerPage * articleWidth);
  // allArticlelist.style.transform = `translateX(-${currentIndex * artiiclePerPage * articleWidth}px)`;

  const controlLeft = document.getElementById("controlLeft");
  const controlRight = document.getElementById("controlRight");
  controlRight.classList.remove("color-btn");
  controlRight.classList.remove("color-btn-gray");
  controlLeft.classList.remove("color-btn");
  controlLeft.classList.remove("color-btn-gray");
  controlLeft.style.pointerEvents = "auto";
  controlRight.style.pointerEvents = "auto";

  if (currentIndex == 0) {
    controlRight.classList.add("color-btn");
    controlLeft.classList.add("color-btn-gray");
    controlLeft.style.pointerEvents = "none";
  } else if (currentIndex == maxIndex) {
    controlRight.classList.add("color-btn-gray");
    controlLeft.classList.add("color-btn");
    controlRight.style.pointerEvents = "none";
  } else {
    controlRight.classList.add("color-btn");
    controlLeft.classList.add("color-btn");
  }
}
