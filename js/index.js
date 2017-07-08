$(function() {
  // Set up the background image by creating a new image element inside a div
  // that takes up the entire screen and is centered to accomadate for large
  // images.
  var root = $("#root");
  var imgSrc = root.data("image-src");

  var container = $("<div>");
  container.css("z-index", -100);
  container.css("position", "fixed");
  container.css("top", 0);
  container.css("left", 0);
  container.css("overflow", "hidden");
  container.css("width", $(window).width());
  container.css("height", $(window).height());

  var img = $("<img>");
  img.attr("src", imgSrc);
  img.css("width", $(window).width());
  img.css("height", "auto");
  img.css("position", "absolute");

  img.css("top", 0);
  img.css("bottom", 0);
  img.css("margin", "auto");
  img.css("left", 0);

  container.append(img);
  $("body").prepend(container);

  headers = [$("#projects-header"), $("#papers-header"), $("#work-header")];
  contents = [$("#projects"), $("#papers"), $("#work")];

  for (var i = 0; i < headers.length; i++) {
    (function(i) {
      headers[i].click(function() {
        var el = contents[i];

        var toggle;
        var display = el.css("display");
        if (display === "none") {
          toggle = "block";
          headers[i].addClass("active");

          for (var j = 0; j < headers.length; j++) {
            if (j != i) {
              headers[j].removeClass("active");
            }
          }
        } else if (display === "block") {
          toggle = "none";
          headers[i].removeClass("active");
        }

        var toggled = false;
        for (var j = 0; j < contents.length; j++) {
          if (contents[j].is(":visible")) {
            contents[j].fadeOut("200", function() {
              contents[i].fadeIn("200");
            });
            toggled = true;
            break;
          }
        }

        if (!toggled) {
          contents[i].fadeIn("slow");
        }
      });
    })(i);
  }
});
