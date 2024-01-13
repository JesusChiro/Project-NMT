$(document).ready(function () {
  $("#cerrar").click(function () {
    var status = $("#nav").css("display");

    if (status == "none") {
      $("#nav").css("display", "block");
    } else {
      $("#nav").css("display", "none");
    }
  });
});
// $(document).ready(function () {
//     $("#linknav").click(function () {
//       var status = $("#nav").css("display");

//       if (status == "block") {
//         $("#nav").css("display", "none");
//       } else {
//         $("#nav").css("display", "block");
//       }
//     });

//   });
//   $(document).ready(function () {
//     $("#linknav2").click(function () {
//       var status = $("#nav").css("display");

//       if (status == "block") {
//         $("#nav").css("display", "none");
//       } else {
//         $("#nav").css("display", "block");
//       }
//     });

//   });
//   $(document).ready(function () {
//     $("#linknav3").click(function () {
//       var status = $("#nav").css("display");

//       if (status == "block") {
//         $("#nav").css("display", "none");
//       } else {
//         $("#nav").css("display", "block");
//       }
//     });

//   });
//   $(document).ready(function () {
//     $("#linknav4").click(function () {
//       var status = $("#nav").css("display");

//       if (status == "block") {
//         $("#nav").css("display", "none");
//       } else {
//         $("#nav").css("display", "block");
//       }
//     });

//   });
let previousTitle = document.title;
window.addEventListener("blur", () => {
  previousTitle = document.title;
  document.title = "¡No te Vayas! ¡Vuelve! 😐 ";
});
window.addEventListener("focus", () => {
  document.title = previousTitle;
});
