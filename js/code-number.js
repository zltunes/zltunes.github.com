$(function() {
  hljs.initHighlighting();
  $("code").each(function(){
    $(this).html("<ul><li>" + $(this).html().replace(/\n/g,"\n</li><li>") +"\n</li></ul>");
  });
  $("code").each(function(){
    $(this).html($(this).html().replace("<li>\n</li></ul>","</ul>"));
  });
});
