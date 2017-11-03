var addHeaderInterval;
var addWraperInterval;
var dataTemplate = "<span class='dataContainer' style='background-color: @BackgroundColor;'>@Data<div class='dataDesc'>@DataDescription</div></span>";
var pageList = [{
                "pageName": "Splunk Report", 
                "pageUrl": "https://careerbuilder.splunkcloud.com/en-US/app/search/slis",
                "pageDataXpath": [{
                                  "dataTextNode": "#element13-body-14784 .main-label-group", 
                                  "bgNode": "#element13-body-14784 svg rect",
                                  "bgAttr": "fill", 
                                  "descTextNode": "#element13-body-14784 .under-label-group"
                                }, {
                                  "dataTextNode": "#element3-body-10624 .main-label-group", 
                                  "bgNode": "#element3-body-10624 svg rect",
                                  "bgAttr": "fill", 
                                  "descTextNode": "#element3-body-10624 .under-label-group"
                                }]
                }];

var getPageData = function () {
  var dataBlockHtml = "";
  pageList.forEach(function (page) {
    if (window.location.href.indexOf(page.pageUrl) !== -1) {
      if (page.pageDataXpath.length > 0) {
        page.pageDataXpath.forEach(function (node) {
          dataBlockHtml = dataBlockHtml + dataTemplate;
          if (node.dataTextNode !== "") dataBlockHtml = dataBlockHtml.replace("@Data", jQuery(node.dataTextNode).text());
          if (node.descTextNode !== "") dataBlockHtml = dataBlockHtml.replace("@DataDescription", jQuery(node.descTextNode).text());
          if (node.bgNode !== "" && node.bgAttr !== "") dataBlockHtml = dataBlockHtml.replace("@BackgroundColor", jQuery(node.bgNode).attr(node.bgAttr));
        });
      }
    }
    console.log("dataBlockHtml: "+dataBlockHtml);
  });
  return dataBlockHtml;
};

var getHeaderHtml = function () {
  return "<div class='shareHeader'>Monitor" + getPageData() + "</div>";
};

setInterval(function(){
    if (jQuery(".shareHeader").length == 0) {
      addHeaderInterval = jQuery("body").prepend(getHeaderHtml());
    } else {
      // clearInterval(addHeaderInterval);
      jQuery(".shareHeader").html(jQuery(getHeaderHtml()).html());
    }
}, 5000);
