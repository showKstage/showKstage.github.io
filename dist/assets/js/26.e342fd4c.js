(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{290:function(v,_,i){"use strict";i.r(_);var l=i(13),t=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[_("img",{attrs:{src:"C:%5CUsers%5Ckuang%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220621223652681.png",alt:"image-20220621223652681"}})]),v._v(" "),_("p",[v._v("优先级就是分配给指定的 CSS 声明的一个权重，它由匹配的选择器中的每一种选择器类型的数值决定。为了记忆，可以把权重分成如下几个等级，"),_("strong",[v._v("数值越大的权重越高")]),v._v("：")]),v._v(" "),_("ul",[_("li",[v._v("10000：!important；")]),v._v(" "),_("li",[v._v("01000：内联样式(行内样式)；")]),v._v(" "),_("li",[v._v("00100：ID 选择器；")]),v._v(" "),_("li",[v._v("00010：类选择器、伪类选择器、属性选择器(a[attr=val])；")]),v._v(" "),_("li",[v._v("00001：元素选择器、伪元素选择器；")]),v._v(" "),_("li",[v._v("00000：通配选择器(*)、后代选择器(A B)、子选择器(A>B)、兄弟选择器(A+B OR A~B)；")])]),v._v(" "),_("p",[v._v("优先级注意点:")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("权重是有4组数字组成,但是不会有进位。")])]),v._v(" "),_("li",[_("p",[v._v("可以理解为类选择器永远大于元素选择器, id选择器永远大于类选择器,以此类推..")])]),v._v(" "),_("li",[_("p",[v._v("等级判断从左向右，如果某一位数值相同，则判断下一位数值。")])]),v._v(" "),_("li",[_("p",[v._v("可以简单记忆法:  通配符和继承权重为0, 标签选择器为1,类(伪类)选择器为 10, id选择器 100, 行内样式表为 1000, !important 无穷大.")])]),v._v(" "),_("li",[_("p",[v._v("继承的权重是0， 如果该元素没有直接选中，不管父元素权重多高，子元素得到的权重都是 0。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("伪元素权重和元素权重一样 都是1")])])])]),v._v(" "),_("p",[v._v("权重叠加：如果是复合选择器，则会有权重叠加，需要计算权重。")]),v._v(" "),_("ul",[_("li",[v._v("div ul  li   ------\x3e      0,0,0,3")]),v._v(" "),_("li",[v._v(".nav ul li   ------\x3e      0,0,1,2")]),v._v(" "),_("li",[v._v("a:hover      -----—>   0,0,1,1")]),v._v(" "),_("li",[v._v(".nav a       ------\x3e      0,0,1,1")])])])}),[],!1,null,null,null);_.default=t.exports}}]);