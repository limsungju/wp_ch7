/* 원래 소스
var tabBox = {
   onTabClicked : function(event) {
      var lisSelected = document.getElementsByClassName("selected");
      (lisSelected.length == 1) && (lisSelected[0].className = "");
      this.className = "selected";
   },
   init : function() {
      var div = document.getElementsByClassName("tab-box")[0];
      var ul = div.childNodes[1];
      var lis = ul.getElementsByTagName("li");
      for (var i = 0; i < lis.length; i++) {
         lis[i].addEventListener("click", this.onTabClicked);
      }
   }
}
 */

var tabBox = {
   onTabClicked : function(event) {
      // var lisSelected = document.getElementsByClassName("selected");
      // (lisSelected.length == 1) && (lisSelected[0].className = "");
      $(".selected").removeClass('selected')// 위의 두 코드는 이 코드로 대체
      // this.className = "selected";
      $(this).addClass('selected');// 위의 코드는 이 코드로 대체
   },
   init : function() {
      $(".tab-box ul li").click(this.onTabClicked);
   }
}