document.addEventListener("DOMContentLoaded", function(){

  var index = 0;
  var button = document.querySelectorAll(".btn_more");
  button[0].addEventListener("click", function() {
    console.log("click");
});

//all elements navigation are clickable

  var nav = document.querySelectorAll(".navigation");
  var nav_list_items = nav[0].children;
    for (var i=0; i < nav_list_items.length; i++) {
      nav_list_items[i].addEventListener("click", function() {
        console.log("click");
      });
    };

//developed menu

  var menu = document.getElementById('about_company');
  var AllInMenu = menu.children;
  var listItems = AllInMenu[1].children;
  var listItems = AllInMenu[1].querySelectorAll("a");
  var submenu = document.querySelectorAll(".after");

    menu.addEventListener("mouseover", function() {
      var AllInMenu = menu.children;
      var listItems = AllInMenu[1].children;
  // for (var i=0; i < listItems.length; i++) {
  //   listItems[i].addEventListener("click", function() {
  //     console.log("click");
  //   });
  // };
    AllInMenu[1].style.display = "block";
  });


  menu.addEventListener("mouseleave", function() {
    var AllInMenu = menu.children;
    var listItems = AllInMenu[1].children;
    AllInMenu[1].style.display = "none";
  });


// gallery boxes animation
  var gallery = document.querySelectorAll(".gallery_boxes div");
  var link = gallery[1].querySelector(".model");

  gallery[1].addEventListener("mouseover", function() {

    link.style.display = "none";
  });

  gallery[1].addEventListener("mouseleave", function() {
    link.style.display = "block";
  });

  var link_first = gallery[0].querySelector(".model")

  gallery[0].addEventListener("mouseover", function() {

    link_first.style.display = "none";
  });

  gallery[0].addEventListener("mouseleave", function() {
    link_first.style.display = "block";
  });


//slider

  var prev = document.querySelectorAll(".btn_prev");
  var next = document.querySelectorAll(".btn_next");
  var photo = document.querySelectorAll(".boxes div");

  var index = 0;
  var prev = document.querySelectorAll(".btn_prev");

  var prev = document.querySelectorAll(".btn_prev");

  prev[0].addEventListener("click", function() {
    photo[0].style.backgroundImage = "url('images/red.png')";
  });

    var next = document.querySelectorAll(".btn_next");
  next[0].addEventListener("click", function() {
  // console.log("click");
    photo[0].style.backgroundImage = "url('images/orange.png')";
  });

  });
