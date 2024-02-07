const imgs = document.querySelector(".imgs")
fristImg = imgs.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".product i");

let isDragstart = false, prevPageX, prevScrollLeft ,positionDiff;



const showHideIcons = () => {
          //showing and hiding prev/next icon according to imgs scroll left value 
          let scrollWidth = imgs.scrollWidth - imgs.clientWidth; //getting max scrollable width
          arrowIcons[0].style.display = imgs.scrollLeft == 0 ? "none" : "block";
          arrowIcons[1].style.display = imgs.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
          icon.addEventListener("click", () => {
                   let fristImgWidth = fristImg.clientWidth + 14; //gatting first img width & adding 14 margin value
                    // if clicked icon is left, reduce width value from the imgs scroll left else add to it
                    imgs.scrollLeft += icon.id == "left" ? -fristImgWidth : fristImgWidth;
                    setTimeout(() => showHideIcons(), 30); // calling showHideIcons after 30ms
          });
});

const autoSlide = () => {
      positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
      let fristImgWidth = fristImg.clientWidth + 14;
      let valDifference = fristImgWidth - positionDiff;

      if(imgs.scrollLeft > prevScrollLeft ) {
          return console.log("user is scrolling to the right ");
      }
      console.log("user is scrolling to the left");
}
const dragStart = (e) => {
          // updatating global variables value on mouse down event 
           isDragstart = true;
           prevPageX = e.pageX || e.touches[0].pageX;
           prevScrollLeft = imgs.scrollLeft;
}

const dragging = (e) => {
          // scrolling images/img to left according to mouse pointer
          if(!isDragstart) return;
          e.preventDefault();
          imgs.classList.add("dragging");
          positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
          imgs.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
          isDragstart = false;
          imgs.classList.remove("dragging");
          autoSlide();
}

imgs.addEventListener("mousedown", dragStart);
imgs.addEventListener("touchstart", dragStart);

imgs.addEventListener("mousemove", dragging);
imgs.addEventListener("touchmove", dragging);

imgs.addEventListener("mouseup", dragStop);
imgs.addEventListener("mouseleave", dragStop);
imgs.addEventListener("touchend", dragStop);