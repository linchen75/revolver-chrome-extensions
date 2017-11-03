// jQuery(document).ready(function () {
var addHeaderInterval;
var addWraperInterval;

// setInterval(function () {
//   if(jQuery(".monitorWrap").length==0){
//     jQuery("body").wrapInner("<div class='monitorWrap'></div>");
//   }else{
//     clearInterval(addWraperInterval);
//   };
// });

var getHeaderHtml = function () {
  return "<div class='shareHeader'>Monitor<span class='dataContainer dataFailed'>253<div class='dataDesc'>data description</div></span><span class='dataContainer dataSuccess'>253<div class='dataDesc'>data description</div></span></div>";
};
setInterval(function(){
  // if(!addWraperInterval) {
    if (jQuery(".shareHeader").length == 0) {
      addHeaderInterval = jQuery("body").prepend(getHeaderHtml());
    } else {
      clearInterval(addHeaderInterval);
    };
  // };
}, 5000);
  // })
