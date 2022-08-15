(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{301:function(e,r,t){"use strict";t.r(r);var a=t(13),n=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"绝对-url-和相对url"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#绝对-url-和相对url"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#%E7%BB%9D%E5%AF%B9url%E5%92%8C%E7%9B%B8%E5%AF%B9url",target:"_blank",rel:"noopener noreferrer"}},[r("em",[e._v("绝对")]),e._v("**"),r("em",[e._v("URL*"),r("em",[r("strong",[e._v("和相对")])])]),e._v("URL***"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("你可能会在网络上遇到两个术语，"),r("strong",[e._v("绝对URL")]),e._v("和"),r("strong",[e._v("相对URL")]),e._v("*（或者称为，"),r("strong",[e._v("绝对链接")]),e._v("和"),r("strong",[e._v("相对链接")]),e._v("）*：")]),e._v(" "),r("p",[r("strong",[e._v("绝对URL")]),e._v("：指向由其在Web上的绝对位置定义的位置，包括 "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("protocol"),r("OutboundLink")],1),e._v("（协议） 和 "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Domain_name",target:"_blank",rel:"noopener noreferrer"}},[e._v("domain name"),r("OutboundLink")],1),e._v("（域名）。像下面的例子，如果"),r("code",[e._v("index.html")]),e._v("页面上传到"),r("code",[e._v("projects")]),e._v("这一个目录。并且"),r("code",[e._v("projects")]),e._v("目录位于web服务站点的根目录，web站点的域名为"),r("code",[e._v("http://www.example.com")]),e._v("，那么这个页面就可以通过"),r("code",[e._v("http://www.example.com/projects/index.html")]),e._v("访问（或者通过"),r("code",[e._v("http://www.example.com/projects/")]),e._v("来访问，因为在没有指定特定的URL的情况下，大多数web服务会默认访问加载"),r("code",[e._v("index.html")]),e._v("这类页面）")]),e._v(" "),r("p",[e._v("不管绝对URL在哪里使用，它总是指向确定的相同位置。")]),e._v(" "),r("p",[r("strong",[e._v("相对URL")]),e._v("：指向与您链接的文件相关的位置，更像我们在前面一节中所看到的位置。例如，如果我们想从示例文件链接"),r("code",[e._v("http://www.example.com/projects/index.html")]),e._v("转到相同目录下的一个PDF文件，URL就是文件名URL——例如"),r("code",[e._v("project-brief.pdf")]),e._v("——没有其他的信息要求。如果PDF文件能够在"),r("code",[e._v("projects")]),e._v("的子目录"),r("code",[e._v("pdfs")]),e._v("中访问到，相对路径就是"),r("code",[e._v("pdfs/project-brief.pdf")]),e._v("（对应的绝对URL是"),r("code",[e._v("http://www.example.com/projects/pdfs/project-brief.pdf")]),e._v("）")]),e._v(" "),r("p",[e._v("一个相对URL将指向不同的位置，这取决于它所在的文件所在的位置——例如，如果我们把"),r("code",[e._v("index.html")]),e._v("文件从"),r("code",[e._v("projects")]),e._v("目录移动到Web站点的根目录（最高级别，而不是任何目录中），里面的"),r("code",[e._v("pdfs/project-brief.pdf")]),e._v("相对URL将会指向"),r("code",[e._v("http://www.example.com/pdfs/project-brief.pdf")]),e._v("，而不是"),r("code",[e._v("http://www.example.com/projects/pdfs/project-brief.pdf")])]),e._v(" "),r("p",[e._v("当然，"),r("code",[e._v("project-brief.pdf")]),e._v("文件和"),r("code",[e._v("pdfs")]),e._v("文件夹的位置不会因为您移动了"),r("code",[e._v("index.html")]),e._v("文件而突然发生变化——这将使您的链接指向错误的位置，因此如果单击它，它将无法工作。你得小心点!")]),e._v(" "),r("h2",{attrs:{id:"链接最佳实践"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#链接最佳实践"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#%E9%93%BE%E6%8E%A5%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接最佳实践"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("下面是一些在编写链接元素时可以遵循的最佳实践。")]),e._v(" "),r("h3",{attrs:{id:"使用清晰的链接措辞"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用清晰的链接措辞"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#%E4%BD%BF%E7%94%A8%E6%B8%85%E6%99%B0%E7%9A%84%E9%93%BE%E6%8E%A5%E6%8E%AA%E8%BE%9E",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用清晰的链接措辞"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("把链接放在你的页面上很容易。这还不够。我们需要让所有的读者都可以使用链接，不管他们当前的环境和哪些工具。例如：")]),e._v(" "),r("ul",[r("li",[e._v("使用屏幕阅读器的用户喜欢从页面上的一个链接跳到另一个链接，并且脱离上下文来阅读链接。")]),e._v(" "),r("li",[e._v("搜索引擎使用链接文本来索引目标文件，所以在链接文本中包含关键词是一个很好的主意，以有效地描述与之相关的信息。")]),e._v(" "),r("li",[e._v("读者往往会浏览页面而不是阅读每一个字，他们的眼睛会被页面的特征所吸引，比如链接。他们会找到描述性的链接。")])]),e._v(" "),r("p",[e._v("下面是一个具体的例子：")]),e._v(" "),r("p",[r("em",[r("strong",[e._v("好的")]),e._v("链接文本:")]),e._v(" "),r("a",{attrs:{href:"https://firefox.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载Firefox"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('<p><a href="https://firefox.com/">\n  下载Firefox\n</a></p>\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("p",[e._v("Copy to Clipboard")]),e._v(" "),r("p",[r("em",[r("strong",[e._v("不好的")]),e._v("链接文本:")]),e._v(" "),r("a",{attrs:{href:"https://firefox.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击这里"),r("OutboundLink")],1),e._v("下载Firefox")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('<p><a href="https://firefox.com/">\n  点击这里\n</a>\n下载Firefox</p>\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("p",[e._v("Copy to Clipboard")]),e._v(" "),r("p",[e._v("其他提示：")]),e._v(" "),r("ul",[r("li",[e._v("不要重复URL作为链接文本的一部分 ——URL看起来很丑，当屏幕朗读器一个字母一个字母的读出来的时候听起来就更丑了。")]),e._v(" "),r("li",[e._v("不要在链接文本中说“链接”或“链接到”——它只是噪音。屏幕阅读器告诉人们有一个链接。可视化用户也会知道有一个链接，因为链接通常是用不同的颜色设计的，并且存在下划线（这个惯例一般不应该被打破，因为用户习惯了它。）")]),e._v(" "),r("li",[e._v("保持你的链接标签尽可能短——长链接尤其惹恼屏幕阅读器用户，他们必须听到整件事读出来。")])]),e._v(" "),r("h3",{attrs:{id:"尽可能使用相对链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#尽可能使用相对链接"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#%E5%B0%BD%E5%8F%AF%E8%83%BD%E4%BD%BF%E7%94%A8%E7%9B%B8%E5%AF%B9%E9%93%BE%E6%8E%A5",target:"_blank",rel:"noopener noreferrer"}},[e._v("尽可能使用相对链接"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("em",[e._v("从上面的描述中，您可能认为始终使用绝对链接是一个好主意；毕竟，当页面像相对链接那样移动时，它们不会中断。但是，当链接到同一网站的其他位置时，你应该使用相对链接（当链接到另一个网站时，你需要使用绝对链接）：")])]),e._v(" "),r("ul",[r("li",[e._v("首先，检查代码要容易得多——相对URL通常比绝对URL短得多，这使得阅读代码更容易。")]),e._v(" "),r("li",[e._v("其次，在可能的情况下使用相对URL更有效。当使用绝对URL时，浏览器首先通过"),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/DNS",target:"_blank",rel:"noopener noreferrer"}},[e._v("DNS"),r("OutboundLink")],1),e._v("（见"),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/How_the_Web_works",target:"_blank",rel:"noopener noreferrer"}},[e._v("万维网是如何工作的"),r("OutboundLink")],1),e._v("）查找服务器的真实位置，然后再转到该服务器并查找所请求的文件。另一方面，相对URL，浏览器只在同一服务器上查找被请求的文件。因此，如果你使用绝对URL而不是相对URL，你就会不断地让你的浏览器做额外的工作，这意味着它的效率会降低。")])]),e._v(" "),r("h3",{attrs:{id:"链接到非html资源-留下清晰的指示"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#链接到非html资源-留下清晰的指示"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#%E9%93%BE%E6%8E%A5%E5%88%B0%E9%9D%9Ehtml%E8%B5%84%E6%BA%90_%E2%80%94%E2%80%94%E7%95%99%E4%B8%8B%E6%B8%85%E6%99%B0%E7%9A%84%E6%8C%87%E7%A4%BA",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接到非HTML资源 ——留下清晰的指示"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("当链接到一个需要下载的资源（如PDF或Word文档）或流媒体（如视频或音频）或有另一个潜在的意想不到的效果（打开一个弹出窗口，或加载Flash电影），你应该添加明确的措辞，以减少任何混乱。如下的例子会让人反感：")]),e._v(" "),r("ul",[r("li",[e._v("如果你是在低带宽连接，点击一个链接，然后就开始下载大文件。")]),e._v(" "),r("li",[e._v("如果你没有安装Flash播放器，点击一个链接，然后突然被带到一个需要Flash的页面。")])]),e._v(" "),r("p",[e._v("让我们看看一些例子，看看在这里可以使用什么样的文本：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('<p><a href="http://www.example.com/large-report.pdf">\n  下载销售报告（PDF, 10MB）\n</a></p>\n\n<p><a href="http://www.example.com/video-stream/">\n  观看视频（将在新标签页中播放, HD画质）\n</a></p>\n\n<p><a href="http://www.example.com/car-game">\n  进入汽车游戏（需要Flash插件）\n</a></p>\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br")])]),r("p",[e._v("Copy to Clipboard")]),e._v(" "),r("h3",{attrs:{id:"在下载链接时使用-download-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在下载链接时使用-download-属性"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#%E5%9C%A8%E4%B8%8B%E8%BD%BD%E9%93%BE%E6%8E%A5%E6%97%B6%E4%BD%BF%E7%94%A8_download_%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[e._v("在下载链接时使用 download 属性"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("当您链接到要下载的资源而不是在浏览器中打开时，您可以使用 download 属性来提供一个默认的保存文件名（译注：此属性仅适用于"),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[e._v("同源URL"),r("OutboundLink")],1),e._v("）。下面是一个下载链接到Firefox 的 Windows最新版本的示例：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('<a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN"\n   download="firefox-latest-64bit-installer.exe">\n  下载最新的 Firefox 中文版 - Windows（64位）\n</a>\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])])])}),[],!1,null,null,null);r.default=n.exports}}]);