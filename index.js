$(function() {
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

  //var spillover = (img.height() - $(window).height()) / 2;
  img.css("top", 0);
  img.css("bottom", 0);
  img.css("margin", "auto");
  img.css("left", 0);

  container.append(img);
  $("body").prepend(container);
});
