(() => {
    /* */
    if (document.querySelector(".smallphoto")) {
      document.querySelectorAll(".smallphoto").forEach(function(obj) {
        obj.addEventListener("click", function(e) {
          document.getElementById("smallphoto").src = e.target.src;
        });
      });
    }
  })();