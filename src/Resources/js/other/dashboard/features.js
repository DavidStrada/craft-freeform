"use strict";function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){tippy(".info-popup",{theme:"light-border",allowHTML:!0,placement:"right",maxWidth:600,animation:"scale"}),$(".banner .action-buttons .mark-as-read").on("click",function(){var e=$(this).parents("tr[data-id]:first"),t=e.data("id");$.ajax({type:"post",url:Craft.getCpUrl("freeform/feeds/dismiss-message"),dataType:"json",data:_defineProperty({id:t},Craft.csrfTokenName,Craft.csrfTokenValue),success:function(t){t.success===!0&&(e.parents("table").find("tr").length<=1&&e.parents("div.banner:first").remove(),e.remove())}})}),$(".banner .button.dismiss-type").on("click",function(){var e=$(this).parents("div[data-type]:first"),t=e.data("type");$.ajax({type:"post",url:Craft.getCpUrl("freeform/feeds/dismiss-type"),dataType:"json",data:_defineProperty({type:t},Craft.csrfTokenName,Craft.csrfTokenValue),success:function(t){t.success===!0&&e.remove()}})})}();