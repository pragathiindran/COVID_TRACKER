/*! For license information please see 5.dcaa0838.chunk.js.LICENSE.txt */
(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[5],{143:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===i)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},149:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return c}));var n,r=a(2),i=a.n(r);function o(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}var l="object"===typeof window&&window.Element||function(){};i.a.oneOfType([i.a.string,i.a.func,function(e,t,a){if(!(e[t]instanceof l))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")},i.a.shape({current:i.a.any})]);var s=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;function c(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},258:function(e,t,a){e.exports=a.p+"static/media/covid.bfe309fd.jpg"},259:function(e,t,a){e.exports=a.p+"static/media/fever.9e2935ca.jpg"},260:function(e,t,a){e.exports=a.p+"static/media/cough.e0f3f9fe.jpg"},261:function(e,t,a){e.exports=a.p+"static/media/cold.1df30558.png"},262:function(e,t,a){e.exports=a.p+"static/media/fatigue.b881ae0b.jpg"},263:function(e,t,a){e.exports=a.p+"static/media/naussea.bb8c6c55.jpg"},264:function(e,t,a){e.exports=a.p+"static/media/breathing.49d3939c.jpg"},265:function(e,t,a){e.exports=a.p+"static/media/diarrhea.1eb81a25.jpg"},266:function(e,t,a){e.exports=a.p+"static/media/headaches.4511918e.png"},267:function(e,t,a){e.exports=a.p+"static/media/stayHome.0825b5b8.jpg"},268:function(e,t,a){e.exports=a.p+"static/media/washHands.7c9fae1b.png"},269:function(e,t,a){e.exports=a.p+"static/media/mask.06e0c339.jpg"},270:function(e,t,a){e.exports=a.p+"static/media/stayInformed.780acfd1.png"},271:function(e,t,a){e.exports=a.p+"static/media/chills.efd74a8d.jpg"},272:function(e,t,a){e.exports=a.p+"static/media/avoidContact.30094233.jpg"},273:function(e,t,a){},274:function(e,t,a){"use strict";var n=a(1),r=a(10),i=a(27),o=a(8),l=a(0),s=a.n(l),c=a(2),m=a.n(c),d=a(143),p=a.n(d),g=a(149),u={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:g.c,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,o=e.className,l=e.close,c=e.cssModule,m=e.color,d=e.outline,u=e.size,f=e.tag,h=e.innerRef,y=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof y.children&&(y.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var b="btn"+(d?"-outline":"")+"-"+m,v=Object(g.b)(p()(o,{close:l},l||"btn",l||b,!!u&&"btn-"+u,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),c);y.href&&"button"===f&&(f="a");var E=l?"Close":null;return s.a.createElement(f,Object(n.a)({type:"button"===f&&y.onClick?"button":void 0},y,{className:v,ref:h,onClick:this.onClick,"aria-label":a||E}))},t}(s.a.Component);f.propTypes=u,f.defaultProps={color:"secondary",tag:"button"},t.a=f},411:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1),o=a(10),l=a(2),s=a.n(l),c=a(143),m=a.n(c),d=a(149),p={tag:d.c,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},g=function(e){var t=e.className,a=e.cssModule,n=e.fluid,l=e.tag,s=Object(o.a)(e,["className","cssModule","fluid","tag"]),c="container";!0===n?c="container-fluid":n&&(c="container-"+n);var p=Object(d.b)(m()(t,c),a);return r.a.createElement(l,Object(i.a)({},s,{className:p}))};g.propTypes=p,g.defaultProps={tag:"div"};var u=g,f=a(274),h=s.a.oneOfType([s.a.number,s.a.string]),y={tag:d.c,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:h,sm:h,md:h,lg:h,xl:h},b={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,l=e.tag,s=e.form,c=e.widths,p=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),g=[];c.forEach((function(t,a){var n=e[t];if(delete p[t],n){var r=!a;g.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var u=Object(d.b)(m()(t,n?"no-gutters":null,s?"form-row":"row",g),a);return r.a.createElement(l,Object(i.a)({},p,{className:u}))};v.propTypes=y,v.defaultProps=b;var E=v,w=s.a.oneOfType([s.a.number,s.a.string]),x=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:w,offset:w})]),O={tag:d.c,xs:x,sm:x,md:x,lg:x,xl:x,className:s.a.string,cssModule:s.a.object,widths:s.a.array},C={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},N=function(e){var t=e.className,a=e.cssModule,n=e.widths,l=e.tag,s=Object(o.a)(e,["className","cssModule","widths","tag"]),c=[];n.forEach((function(t,n){var r=e[t];if(delete s[t],r||""===r){var i=!n;if(Object(d.a)(r)){var o,l=i?"-":"-"+t+"-",p=j(i,t,r.size);c.push(Object(d.b)(m()(((o={})[p]=r.size||""===r.size,o["order"+l+r.order]=r.order||0===r.order,o["offset"+l+r.offset]=r.offset||0===r.offset,o)),a))}else{var g=j(i,t,r);c.push(g)}}})),c.length||c.push("col");var p=Object(d.b)(m()(t,c),a);return r.a.createElement(l,Object(i.a)({},s,{className:p}))};N.propTypes=O,N.defaultProps=C;var T=N,A=a(258),k=a.n(A),I=a(259),M=a.n(I),B=a(260),D=a.n(B),H=a(261),V=a.n(H),S=a(262),W=a.n(S),z=a(263),R=a.n(z),L=a(264),P=a.n(L),F=a(265),$=a.n(F),G=a(266),J=a.n(G),q=a(267),U=a.n(q),K=a(268),Q=a.n(K),X=a(269),Y=a.n(X),Z=a(270),_=a.n(Z),ee=a(271),te=a.n(ee),ae=a(272),ne=a.n(ae);a(273);t.default=function(){return r.a.createElement(u,{className:"flex"},r.a.createElement("div",null,r.a.createElement("div",{className:"ml-5 mr-5"},r.a.createElement("br",null),r.a.createElement("h2",{style:{textAlign:"center",color:"#063146"}},"COVID-19 Outbreak"),r.a.createElement("br",null),r.a.createElement("h4",{style:{textAlign:"left",marginLeft:100,color:"#063146"}},"What is COVID-19?"),r.a.createElement("img",{src:k.a,alt:"COVID-19",style:{height:200,width:300,marginTop:10,marginBottom:20,marginLeft:100}}),r.a.createElement("p",{style:{textAlign:"left",float:"left",marginLeft:100,marginRight:100,lineHeight:2,color:"#063146"}},"Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness. The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads.The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it\u2019s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow)."," "),r.a.createElement("p",{style:{textAlign:"left",float:"left",marginLeft:100,marginRight:100,lineHeight:2,color:"#063146"}},"A novel coronavirus (nCoV) is a new strain that has not been previously identified in humans. Coronaviruses are zoonotic, meaning they are transmitted between animals and people. Detailed investigations found that SARS-CoV was transmitted from civet cats to humans and MERS-CoV from dromedary camels to humans. Several known coronaviruses are circulating in animals that have not yet infected humans. At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments."),r.a.createElement("h4",{style:{marginLeft:100}},"How did it start?"),r.a.createElement("p",{style:{textAlign:"left",float:"right",marginLeft:100,marginRight:100,lineHeight:2,color:"#063146"}},"Coronavirus disease 2019 (COVID-19) was first identified amid an outbreak of respiratory illness cases in Wuhan City, Hubei Province, China. It was initially reported to the WHO on December 31, 2019. On January 30, 2020, the WHO declared the COVID-19 outbreak a global health emergency. On March 11, 2020, the WHO declared COVID-19 a global pandemic, its first such designation since declaring H1N1 influenza a pandemic in 2009."," "),r.a.createElement(f.a,{href:"http://www.emro.who.int/health-topics/corona-virus/index.html",target:"blank",style:{backgroundColor:"#063146",border:0,marginLeft:100}},"Read More")),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("h3",{className:"ml-5 mr-5",style:{textAlign:"center",color:"#063146"}},"Symptoms"),r.a.createElement(E,{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",marginTop:20}},r.a.createElement(T,{md:3},r.a.createElement("img",{className:"image-container",src:M.a,alt:"fever",style:{height:200,width:200,paddingTop:5,marginBottom:10}}),r.a.createElement("p",{style:{textAlign:"center",color:"#063146"}},"Fever")),r.a.createElement(T,{md:3},r.a.createElement("img",{className:"image-container",src:V.a,alt:"cold",style:{height:200,width:200,paddingTop:5,marginBottom:10}}),r.a.createElement("p",{style:{textAlign:"center",color:"#063146"}},"Cold")),r.a.createElement(T,{md:3},r.a.createElement("img",{className:"image-container",src:J.a,alt:"Headache",style:{height:200,width:200,paddingTop:5,marginBottom:10}}),r.a.createElement("p",{style:{textAlign:"center",color:"#063146"}},"Headaches")),r.a.createElement(T,{md:3},r.a.createElement("img",{className:"image-container",src:D.a,alt:"Cough",style:{height:200,width:200,paddingTop:5,marginBottom:10}}),r.a.createElement("p",{style:{textAlign:"center",color:"#063146"}},"Cough"))),r.a.createElement(E,{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",marginTop:20}},r.a.createElement(T,{md:3},r.a.createElement("img",{className:"image-container",src:W.a,alt:"Fatigue",style:{height:200,width:200,paddingTop:5,marginBottom:10}}),r.a.createElement("p",{style:{textAlign:"center",color:"#063146"}},"Fatigue")),r.a.createElement(T,{md:3},r.a.createElement("img",{className:"image-container",src:R.a,alt:"Naussea",style:{height:200,width:200,paddingTop:5,paddingBottom:10}}),r.a.createElement("p",{style:{textAlign:"center",color:"#063146"}},"Naussea")),r.a.createElement(T,{md:3},r.a.createElement("img",{className:"image-container",src:$.a,alt:"Diarrhea",style:{height:200,width:200,paddingTop:5,marginBottom:10}}),r.a.createElement("p",{style:{textAlign:"center",color:"#063146"}},"Diarrhea")),r.a.createElement(T,{md:3},r.a.createElement("img",{className:"image-container",src:P.a,alt:"Breathing",style:{height:200,width:200,paddingTop:5,marginBottom:10}}),r.a.createElement("p",{style:{textAlign:"center",color:"#063146"}},"Difficulty Breathing")))),r.a.createElement("div",{className:"ml-5 mr-5"},r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("h3",{style:{textAlign:"center",color:"#063146"}},"Preventive Measures"),r.a.createElement(E,{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",marginTop:20}},r.a.createElement(T,{md:3},r.a.createElement("img",{className:"image-container",src:U.a,alt:"Stay Home",style:{height:200,width:200,paddingTop:5,marginBottom:20}}),r.a.createElement("p",{style:{textAlign:"center",color:"#063146"}},"Stay Home, Stay Safe. Self isolate from others if you feel unwell.")),r.a.createElement(T,{md:3},r.a.createElement("img",{className:"image-container",src:Q.a,alt:"Wash Hands",style:{height:200,width:200,paddingTop:5,marginBottom:15}}),r.a.createElement("p",{style:{textAlign:"center",color:"#063146"}},"Wash your hands reguraly for 20 seconds with soap and water")),r.a.createElement(T,{md:3},r.a.createElement("img",{className:"image-container",src:Y.a,alt:"Wear Mask",style:{height:200,width:200,paddingTop:5,marginBottom:15}}),r.a.createElement("p",{style:{textAlign:"center",color:"#063146"}},"Cover your mouth and nose with masks when outside."))),r.a.createElement(E,{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",marginTop:20}},r.a.createElement(T,{md:3},r.a.createElement("img",{className:"image-container",src:_.a,alt:"Stay Informed",style:{height:200,width:200,paddingTop:5,marginBottom:20}}),r.a.createElement("p",{style:{textAlign:"center",color:"#063146"}},"Stay informed and follow the recommended practices.")),r.a.createElement(T,{md:3},r.a.createElement("img",{className:"image-container",src:te.a,alt:"Contact doctor if chills",style:{height:200,width:250,paddingTop:5,marginBottom:20}}),r.a.createElement("p",{style:{textAlign:"center",color:"#063146"}},"If you have fever, cough and difficulty breathing, seek medical care immediately.")),r.a.createElement(T,{md:3},r.a.createElement("img",{className:"image-container",src:ne.a,alt:"Avoid contact",style:{height:200,width:250,paddingTop:5,marginBottom:20}}),r.a.createElement("p",{style:{textAlign:"center",color:"#063146"}},"Avoid close contact with people who are unwell. Maintain 1 meter or 4 feet distance.")))),r.a.createElement("div",{className:"ml-5 mr-5"},r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("i",null,r.a.createElement("p",{style:{textAlign:"center",fontSize:25,fontFamily:"Arial, sans-serif",marginBottom:50,color:"#063146"}},'"Ultimately, the greatest lesson that COVID-19 can teach humanity is that we are all in this together."')))))}}}]);
//# sourceMappingURL=5.dcaa0838.chunk.js.map