!function(Q){var B={};function F(U){if(B[U])return B[U].exports;var i=B[U]={i:U,l:!1,exports:{}};return Q[U].call(i.exports,i,i.exports,F),i.l=!0,i.exports}F.m=Q,F.c=B,F.d=function(Q,B,U){F.o(Q,B)||Object.defineProperty(Q,B,{enumerable:!0,get:U})},F.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},F.t=function(Q,B){if(1&B&&(Q=F(Q)),8&B)return Q;if(4&B&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var U=Object.create(null);if(F.r(U),Object.defineProperty(U,"default",{enumerable:!0,value:Q}),2&B&&"string"!=typeof Q)for(var i in Q)F.d(U,i,function(B){return Q[B]}.bind(null,i));return U},F.n=function(Q){var B=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return F.d(B,"a",B),B},F.o=function(Q,B){return Object.prototype.hasOwnProperty.call(Q,B)},F.p="",F(F.s=12)}({12:function(module,exports){eval('var $prefix = $("#prefix");\nvar $components = $("#components-wrapper");\nvar firstFileLists = $("> div > ul.directory-structure", $components);\nvar $submit = $(".btn.submit");\nvar prefixTimeout = null;\n$(function () {\n  $prefix.on({\n    keyup: function keyup(e) {\n      if (/[\\\\/]/gi.test($prefix.val())) {\n        $prefix.addClass("error");\n        $submit.addClass(\'disabled\').prop(\'disabled\', true).prop(\'readonly\', true);\n      } else {\n        $prefix.removeClass("error");\n        $submit.removeClass(\'disabled\').prop(\'disabled\', false).prop(\'readonly\', false);\n      }\n\n      clearTimeout(prefixTimeout);\n      prefixTimeout = setTimeout(function () {\n        updateFilePrefixes();\n      }, 50);\n    }\n  });\n  updateFilePrefixes();\n});\n\nfunction updateFilePrefixes() {\n  firstFileLists.each(function () {\n    var $fileList = $(this);\n    $("> li > span[data-name]", $fileList).each(function () {\n      $(this).html($prefix.val() + $(this).data("name"));\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29kZS1wYWNrLmpzPzI2NjEiXSwibmFtZXMiOlsiJHByZWZpeCIsIiQiLCIkY29tcG9uZW50cyIsImZpcnN0RmlsZUxpc3RzIiwiJHN1Ym1pdCIsInByZWZpeFRpbWVvdXQiLCJvbiIsImtleXVwIiwiZSIsInRlc3QiLCJ2YWwiLCJhZGRDbGFzcyIsInByb3AiLCJyZW1vdmVDbGFzcyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ1cGRhdGVGaWxlUHJlZml4ZXMiLCJlYWNoIiwiJGZpbGVMaXN0IiwiaHRtbCIsImRhdGEiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE9BQU8sR0FBR0MsQ0FBQyxDQUFDLFNBQUQsQ0FBZjtBQUNBLElBQUlDLFdBQVcsR0FBR0QsQ0FBQyxDQUFDLHFCQUFELENBQW5CO0FBQ0EsSUFBSUUsY0FBYyxHQUFHRixDQUFDLENBQUMsZ0NBQUQsRUFBbUNDLFdBQW5DLENBQXRCO0FBQ0EsSUFBSUUsT0FBTyxHQUFHSCxDQUFDLENBQUMsYUFBRCxDQUFmO0FBRUEsSUFBSUksYUFBYSxHQUFHLElBQXBCO0FBRUFKLENBQUMsQ0FBQyxZQUFZO0FBQ1pELFNBQU8sQ0FBQ00sRUFBUixDQUFXO0FBQ1RDLFNBQUssRUFBRSxlQUFVQyxDQUFWLEVBQWE7QUFDbEIsVUFBSSxVQUFVQyxJQUFWLENBQWVULE9BQU8sQ0FBQ1UsR0FBUixFQUFmLENBQUosRUFBbUM7QUFDakNWLGVBQU8sQ0FBQ1csUUFBUixDQUFpQixPQUFqQjtBQUNBUCxlQUFPLENBQ0pPLFFBREgsQ0FDWSxVQURaLEVBRUdDLElBRkgsQ0FFUSxVQUZSLEVBRW9CLElBRnBCLEVBR0dBLElBSEgsQ0FHUSxVQUhSLEVBR29CLElBSHBCO0FBSUQsT0FORCxNQU1PO0FBQ0xaLGVBQU8sQ0FBQ2EsV0FBUixDQUFvQixPQUFwQjtBQUNBVCxlQUFPLENBQ0pTLFdBREgsQ0FDZSxVQURmLEVBRUdELElBRkgsQ0FFUSxVQUZSLEVBRW9CLEtBRnBCLEVBR0dBLElBSEgsQ0FHUSxVQUhSLEVBR29CLEtBSHBCO0FBSUQ7O0FBRURFLGtCQUFZLENBQUNULGFBQUQsQ0FBWjtBQUNBQSxtQkFBYSxHQUFHVSxVQUFVLENBQUMsWUFBWTtBQUNyQ0MsMEJBQWtCO0FBQ25CLE9BRnlCLEVBRXZCLEVBRnVCLENBQTFCO0FBR0Q7QUFwQlEsR0FBWDtBQXVCQUEsb0JBQWtCO0FBQ25CLENBekJBLENBQUQ7O0FBMkJBLFNBQVNBLGtCQUFULEdBQThCO0FBQzVCYixnQkFBYyxDQUFDYyxJQUFmLENBQW9CLFlBQVk7QUFDOUIsUUFBSUMsU0FBUyxHQUFHakIsQ0FBQyxDQUFDLElBQUQsQ0FBakI7QUFDQUEsS0FBQyxDQUFDLHdCQUFELEVBQTJCaUIsU0FBM0IsQ0FBRCxDQUF1Q0QsSUFBdkMsQ0FBNEMsWUFBWTtBQUN0RGhCLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtCLElBQVIsQ0FBYW5CLE9BQU8sQ0FBQ1UsR0FBUixLQUFnQlQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUIsSUFBUixDQUFhLE1BQWIsQ0FBN0I7QUFDRCxLQUZEO0FBR0QsR0FMRDtBQU1EIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyICRwcmVmaXggPSAkKFwiI3ByZWZpeFwiKTtcbnZhciAkY29tcG9uZW50cyA9ICQoXCIjY29tcG9uZW50cy13cmFwcGVyXCIpO1xudmFyIGZpcnN0RmlsZUxpc3RzID0gJChcIj4gZGl2ID4gdWwuZGlyZWN0b3J5LXN0cnVjdHVyZVwiLCAkY29tcG9uZW50cyk7XG52YXIgJHN1Ym1pdCA9ICQoXCIuYnRuLnN1Ym1pdFwiKTtcblxudmFyIHByZWZpeFRpbWVvdXQgPSBudWxsO1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgJHByZWZpeC5vbih7XG4gICAga2V5dXA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoL1tcXFxcL10vZ2kudGVzdCgkcHJlZml4LnZhbCgpKSkge1xuICAgICAgICAkcHJlZml4LmFkZENsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICRzdWJtaXRcbiAgICAgICAgICAuYWRkQ2xhc3MoJ2Rpc2FibGVkJylcbiAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKVxuICAgICAgICAgIC5wcm9wKCdyZWFkb25seScsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHByZWZpeC5yZW1vdmVDbGFzcyhcImVycm9yXCIpO1xuICAgICAgICAkc3VibWl0XG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpXG4gICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpXG4gICAgICAgICAgLnByb3AoJ3JlYWRvbmx5JywgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQocHJlZml4VGltZW91dCk7XG4gICAgICBwcmVmaXhUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVwZGF0ZUZpbGVQcmVmaXhlcygpO1xuICAgICAgfSwgNTApO1xuICAgIH0sXG4gIH0pO1xuXG4gIHVwZGF0ZUZpbGVQcmVmaXhlcygpO1xufSk7XG5cbmZ1bmN0aW9uIHVwZGF0ZUZpbGVQcmVmaXhlcygpIHtcbiAgZmlyc3RGaWxlTGlzdHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRmaWxlTGlzdCA9ICQodGhpcyk7XG4gICAgJChcIj4gbGkgPiBzcGFuW2RhdGEtbmFtZV1cIiwgJGZpbGVMaXN0KS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykuaHRtbCgkcHJlZml4LnZhbCgpICsgJCh0aGlzKS5kYXRhKFwibmFtZVwiKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n')}});