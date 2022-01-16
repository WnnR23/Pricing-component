const elMonthly = document.querySelector(".monthly");
const elAnnually = document.querySelector(".annually");
const elCycle = document.querySelector(".cycle");
const elHeadMonthly1 = document.querySelector(".box-head-monthly-1");
const elHeadAnnually1 = document.querySelector(".box-head-annually-1");
const elHeadMonthly2 = document.querySelector(".box-head-monthly-2");
const elHeadAnnually2 = document.querySelector(".box-head-annually-2");
const elHeadMonthly3 = document.querySelector(".box-head-monthly-3");
const elHeadAnnually3 = document.querySelector(".box-head-annually-3");
elAnnually.addEventListener("click", function () {
  elCycle.classList.toggle("cycle-monthly")
  elHeadMonthly1.classList.toggle("box-head-none")
  elHeadMonthly2.classList.toggle("box-head-none")
  elHeadMonthly3.classList.toggle("box-head-none")
  elHeadAnnually1.classList.remove("box-head-none")
  elHeadAnnually2.classList.remove("box-head-none")
  elHeadAnnually3.classList.remove("box-head-none")
});
elMonthly.addEventListener("click", function () {
  elCycle.classList.toggle("cycle-monthly")
  elHeadAnnually1.classList.toggle("box-head-none")
  elHeadAnnually2.classList.toggle("box-head-none")
  elHeadAnnually3.classList.toggle("box-head-none")
  elHeadMonthly1.classList.remove("box-head-none")
  elHeadMonthly2.classList.remove("box-head-none")
  elHeadMonthly3.classList.remove("box-head-none")
});

const elBox1 = document.querySelector(".box-1");
const elBoxBtn1 = document.querySelector(".btn-1");
const elBox2 = document.querySelector(".box-2");
const elBoxBtn2 = document.querySelector(".btn-2");
const elBox3 = document.querySelector(".box-3");
const elBoxBtn3 = document.querySelector(".btn-3");
elBox1.addEventListener("click", function () {
  elBox1.classList.toggle("box-active"), elBoxBtn1.classList.toggle("plan-choose-btn-active"),
    elBox2.classList.remove("box-active"), elBoxBtn2.classList.remove("plan-choose-btn-active"),
    elBox3.classList.remove("box-active"), elBoxBtn3.classList.remove("plan-choose-btn-active")
});
elBox2.addEventListener("click", function () {
  elBox2.classList.toggle("box-active"), elBoxBtn2.classList.toggle("plan-choose-btn-active"),
    elBox1.classList.remove("box-active"), elBoxBtn1.classList.remove("plan-choose-btn-active"),
    elBox3.classList.remove("box-active"), elBoxBtn3.classList.remove("plan-choose-btn-active")
});
elBox3.addEventListener("click", function () {
  elBox3.classList.toggle("box-active"), elBoxBtn3.classList.toggle("plan-choose-btn-active"),
    elBox2.classList.remove("box-active"), elBoxBtn2.classList.remove("plan-choose-btn-active"),
    elBox1.classList.remove("box-active"), elBoxBtn1.classList.remove("plan-choose-btn-active")
});