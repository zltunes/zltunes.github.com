$(function() {
  hljs.initHighlighting();
  $("code").each(function(){
    if ($(this).text().split("\n").length > 1) {
      $(this).html("<ol><li>" + $(this).html().replace(/\n/g,"\n</li><li>") +"\n</li></ol>");
    }
  });
  $("code").each(function(){
    $(this).html($(this).html().replace("<li>\n</li></ol>","</ol>"));
  });
});



