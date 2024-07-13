$("input[type=range]")
  .on("input", function (e) {
    var min = e.target.min,
      max = e.target.max,
      val = e.target.value;
    if (val < 34) {
      $(e.target).css({
        "background-image":
          "-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #FFA197), color-stop(100%, #FF4A95))",
      });
    }
    if (val > 34 && val < 400) {
      $(e.target).css({
        "background-image":
          "linear-gradient(90deg, #FF4A95, #FFA197 0% 100%); ",
      });
    }
    if (val > 400) {
      $(e.target).css({
        "background-image": "linear-gradient(90deg, #FFA197 0%, #FF4A95 100%)",
      });
    }

    $(e.target).css({
      backgroundSize: ((val - min) * 100) / (max - min) + "% 100%",
    });
  })
  .trigger("input");
