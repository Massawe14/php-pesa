(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(91)),o={id:"psr_compliance",title:"PSR Compliance"},c={unversionedId:"guide/psr_compliance",id:"guide/psr_compliance",isDocsHomePage:!1,title:"PSR Compliance",description:"Warning! \ud83d\udea7 WIP!",source:"@site/docs/guide/psr_compliance.md",slug:"/guide/psr_compliance",permalink:"/php-pesa/guide/psr_compliance",editUrl:"https://github.com/openpesa/php-pesa/edit/main/docs/guide/psr_compliance.md",version:"current",sidebar:"someSidebar",previous:{title:"Configuration",permalink:"/php-pesa/guide/configuration"},next:{title:"Quick Guide",permalink:"/php-pesa/guide/quick_guide"}},s=[{value:"PSR-1: Basic Coding Standard",id:"psr-1-basic-coding-standard",children:[]},{value:"PSR-2: Coding Style Guide",id:"psr-2-coding-style-guide",children:[]},{value:"PSR-4: Autoloading Standard",id:"psr-4-autoloading-standard",children:[]}],d={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("h3",{parentName:"div",id:"warning--wip"},"Warning! \ud83d\udea7 WIP!"))),Object(i.b)("p",null,"The PHP-FIG was created in 2009 to help make code more interoperable between frameworks by ratifying Interfaces, style guides, and more that members were free to implement or not. While Pesa PHP SDK is not a member of the FIG, we are compatible with a number of their proposals. This guide is meant to list the status of our compliance with the various accepted, and some draft, proposals."),Object(i.b)("h2",{id:"psr-1-basic-coding-standard"},"PSR-1: Basic Coding Standard"),Object(i.b)("p",null,"This recommendation covers the basic class, method, and file-naming standards. Our style guide meets PSR-1 and adds its own requirements on top of it."),Object(i.b)("h2",{id:"psr-2-coding-style-guide"},"PSR-2: Coding Style Guide"),Object(i.b)("p",null,"This PSR was fairly controversial when it first came out. Pesa PHP SDK meets many of the recommendations within, but does not, and will not, meet all of them."),Object(i.b)("h2",{id:"psr-4-autoloading-standard"},"PSR-4: Autoloading Standard"),Object(i.b)("p",null,"This PSR provides a method for organizing files and namespaces to allow for a standard method of autoloading classes. Our Autoloader meets the PSR-4 recommendations."),Object(i.b)("p",null,"\u2014"),Object(i.b)("p",null,"If you find any places that we claim to meet a PSR but have failed to execute it correctly, please let us know and we will get it fixed, or submit a pull request with the required changes."))}l.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?a.a.createElement(b,c(c({ref:t},d),{},{components:n})):a.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);