(() => {
    /* */
    if (document.querySelector(".photosmall")) {
      document.querySelectorAll(".photosmall").forEach(function(obj) {
        obj.addEventListener("click", function(e) {
          document.getElementById("img_target").src = e.target.src;
        });
      });
    }
  })();