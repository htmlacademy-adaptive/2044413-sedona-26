let navPage=document.querySelector(".page-navigation"),navToggle=document.querySelector(".page-navigation__toggle");navPage.classList.remove("page-navigation--nojs"),navToggle.addEventListener("click",(function(){navPage.classList.contains("page-navigation--closed")?(navPage.classList.remove("page-navigation--closed"),navPage.classList.add("page-navigation--opened")):(navPage.classList.add("page-navigation--closed"),navPage.classList.remove("page-navigation--opened"))}));