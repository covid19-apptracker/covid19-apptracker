(this["webpackJsonphackathon-2020"]=this["webpackJsonphackathon-2020"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/logo_wht.d8faae7f.svg"},35:function(e,t,a){e.exports=a.p+"static/media/logo.eba55ddb.svg"},44:function(e,t,a){e.exports=a.p+"static/media/loading.69568192.gif"},50:function(e,t,a){e.exports=a(66)},55:function(e,t,a){},57:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(34),s=a.n(l),o=(a(55),a(12)),c=a.n(o),i=a(45),m=a(24),p=a(3),u=a(4),d=a(5),h=a(6),f=(a(57),a(17));function b(){var e=Object(f.e)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var v=a(46),E=a(30),x=a(25),g=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).calculateTotalNumberOfApps=function(){Object.values(n.state.totalApps).forEach((function(e){n.state.totalNumberOfApps+=e})),n.props.shareTotalAppsNumber(n.state.totalNumberOfApps)},n.dataHandler=function(){var e=Object(E.a)(n);function t(){return(t=Object(m.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/apps_data/apps_per_country.json");case 2:return a=t.sent,t.next=5,a.json().then((function(t){return e.setState({totalApps:t})})).catch((function(t){return e.setState({hasError:!0})}));case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),n.state.totalApps},n.state={hasError:!1,totalApps:{},totalNumberOfApps:n.props.totalNumberOfApps},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.dataHandler()}},{key:"componentWillReceiveProps",value:function(e){this.setState({totalNumberOfApps:e.totalNumberOfApps})}},{key:"render",value:function(){var e=this;return 0===this.state.totalNumberOfApps&&this.calculateTotalNumberOfApps(),r.a.createElement("div",{className:"bg-gray-200"},r.a.createElement(x.ComposableMap,{"data-tip":"",height:250,projectionConfig:{scale:150}},r.a.createElement(x.ZoomableGroup,{center:[0,10],maxZoom:2},r.a.createElement(x.Geographies,{geography:"/map_data/geography.json"},(function(t){return t.geographies.map((function(t){return r.a.createElement(x.Geography,{key:t.rsmKey,geography:t,onMouseEnter:function(){var a=t.properties,n=a.NAME,r=a.ISO_A2;e.props.setTooltipContent("".concat(n," \n \u2014 ").concat(void 0!=e.state.totalApps[r]?e.state.totalApps[r]:0," apps"))},onMouseLeave:function(){e.props.setTooltipContent("")},style:(a=e.state.totalApps[t.properties.ISO_A2],void 0!=a&&a<=2?{default:{fill:"#a7c2f2",outline:"none"},hover:{fill:"#0066FF",outline:"none"},pressed:{fill:"#0066FF",outline:"none"}}:a>2?{default:{fill:"#759eeb",outline:"none"},hover:{fill:"#0066FF",outline:"none"},pressed:{fill:"#0066FF",outline:"none"}}:{default:{fill:"#D6D6DA",outline:"none"},hover:{fill:"#0066FF",outline:"none"},pressed:{fill:"#0066FF",outline:"none"}})});var a}))})))))}}]),a}(n.Component),y=Object(n.memo)(g),N=a(35),w=a.n(N),k=a(2),A=a(31),O=a.n(A),j=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).createPermissionsObject=function(e){return void 0!==n.state.permissions?e in n.state.permissions?n.state.permissions[e].map((function(e){return r.a.createElement("li",null,e)})):r.a.createElement("li",null," No permissions needed "):r.a.createElement("div",null)},n.createPermissions=function(){return void 0!==n.state.permissions?Object.keys(n.state.permissions).map((function(e){return r.a.createElement("div",{id:"storage",className:"flex align-top sm:pr-6 pb-12"},r.a.createElement("div",{className:"pr-4"},r.a.createElement("div",{className:"rounded-full h-10 w-10 flex items-center justify-center ",style:{backgroundColor:"#0066FF"}},r.a.createElement("img",{width:"16",height:"16",src:O.a}))),r.a.createElement("div",null,r.a.createElement("p",{className:"pb-1 font-medium"},e),r.a.createElement("ul",{className:"list-disc pl-4 text-gray-700"},n.state.permissions[e].map((function(e){return r.a.createElement("li",null,e)})))))})):r.a.createElement("div",null)},n.state={description:"",permissions:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({description:this.props.description,permissions:this.props.permissions})}},{key:"componentWillReceiveProps",value:function(e){this.setState({description:e.description,permissions:e.permissions})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"container",className:"container w-full content-center items-center justify-center pt-8 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto"},r.a.createElement("div",{className:"text-sm font-medium pb-8"},r.a.createElement(k.a,{className:"hover:underline hover:text-blue-400",to:"/",style:{color:"#0066FF"}},"Home")," ","/ ",r.a.createElement("span",null,this.props.title)),r.a.createElement("div",{id:"developerInfo"},r.a.createElement("div",{className:"flex items-center pb-12"},r.a.createElement("div",{className:"pr-4"},r.a.createElement("img",{alt:this.props.title+" app icon",src:this.props.iconURL,width:"120",height:"120",className:"rounded-lg shadow-lg"})),r.a.createElement("div",null,r.a.createElement("div",{className:"items-baseline flex"},r.a.createElement("h1",{className:"text-3xl pb-2"},this.props.title,r.a.createElement("a",{href:this.props.appStoreURL},r.a.createElement("i",{className:"fa fa-share-square pl-4 fa-sm",style:{color:"#0066FF"}})))),r.a.createElement("div",{className:"flex"},r.a.createElement("p",{className:"font-bold text-sm pr-8"},"Developers"),this.props.developer)))),r.a.createElement("div",{id:"additionalInfo"},r.a.createElement("div",{className:"sm:flex pb-12"},r.a.createElement("div",{className:"flex-1 rounded overflow-hidden shadow-lg mb-4 sm:mb-0"},r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("p",{className:"font-bold text-sm"},"Origin Country"),r.a.createElement("div",{className:"pt-6 pb-8 text-center"},r.a.createElement("p",{className:"text-black text-3xl"},this.props.country)))),r.a.createElement("div",{className:"flex-1 sm:mx-4 rounded overflow-hidden shadow-lg mb-4 sm:mb-0"},r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("p",{className:"font-bold text-sm"},"Device Installs"),r.a.createElement("div",{className:"pt-6 pb-8 text-center"},r.a.createElement("p",{className:"text-black text-3xl"},this.props.downloads)))),r.a.createElement("div",{className:"flex-1 rounded overflow-hidden shadow-lg"},r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("p",{className:"font-bold text-sm"},"Last Updated"),r.a.createElement("div",{className:"pt-6 pb-8 text-center"},r.a.createElement("p",{className:"text-black text-3xl"},this.props.updatedDate)))))),r.a.createElement("div",{id:"appPermissions",className:"pb-12"},r.a.createElement("p",{className:"font-bold text-sm pb-6"},"App Permissions"),r.a.createElement("div",{className:"flex grid grid-cols-1 sm:grid-cols-2 base-text"},this.createPermissions())),r.a.createElement("div",{id:"appDescription",className:"pb-12"},r.a.createElement("div",{className:"bg-gray-100 rounded-md border-gray-400 border"},r.a.createElement("div",{className:"px-6 sm:px-16 py-8"},r.a.createElement("p",{className:"font-bold text-sm pb-2"},"App Description"),r.a.createElement("p",null,void 0!==this.state.description?this.state.description.replace(/\n/g," "):r.a.createElement("div",null)))))))}}]),a}(n.Component),C=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.b,null,r.a.createElement(f.a,{exact:!0,path:"/app/"+this.props.id.toString(),component:j}),r.a.createElement(k.c,{to:"app/"+this.props.id.toString()},r.a.createElement("div",{className:"PlayApp flex sm:items-center mx-auto mb-12 p-4 hover:bg-gray-200 rounded-lg"},r.a.createElement("div",{className:"sm:w-2/12 sm:-mr-6 hidden sm:flex",style:{maxHeight:"60px"}},r.a.createElement("img",{src:this.props.iconURL,width:"60",height:"60",className:"rounded-lg shadow-lg"})),r.a.createElement("div",{className:"w-8/12 sm:w-6/12 mr-3"},r.a.createElement("div",{className:"title text-base font-medium text-gray-900"},this.props.title),r.a.createElement("div",{className:"text-base font-medium text-gray-600"},this.props.developer)),r.a.createElement("div",{className:"installs hidden sm:flex sm:w-2/12"},r.a.createElement("div",{className:"text-base font-medium text-gray-900"},this.props.downloads)),r.a.createElement("div",{className:"date w-4/12 sm:w-2/12 float-right text-left"},r.a.createElement("div",{className:"text-base font-medium text-gray-900"},this.props.updatedDate))))))}}]),a}(n.Component),D=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={showing:"text-sm sm:flex-grow antialiased hidden sm:block"},e.boxClick=function(t){var a="text-sm sm:flex-grow antialiased sm:block"===e.state.showing?"text-sm sm:flex-grow antialiased hidden sm:block":"text-sm sm:flex-grow antialiased sm:block";e.setState({showing:a}),console.log("current state is: "+e.state.showing),console.log("made it into boxClick, stateUpdate is now: "+a)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"top-0 sticky bg-white z-10 shadow-md"},r.a.createElement("nav",{className:"container max-w-screen-md mx-auto flex items-center justify-between flex-wrap bg-white p-6 sm:py-6 lg:px-0"},r.a.createElement("div",{className:"flex items-center flex-shrink-0 text-black mr-6"},r.a.createElement(k.c,{to:"/"},r.a.createElement("img",{className:"fill-current h-8 w-8 mr-2 transition-all duration-300 ease-in-out transform hover:scale-125",width:"54",height:"54",src:w.a,alt:"COVID-19 App Tracker Icon"}))),r.a.createElement("div",{className:"block sm:hidden"},r.a.createElement("button",{onClick:this.boxClick,id:"my-nav-menu",className:"flex items-center px-3 py-2 border rounded text-black border-black hover:bg-black hover:text-white hover:border-black"},r.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),r.a.createElement("div",{className:"w-full float-right sm:flex sm:items-center sm:w-auto sm:block"},r.a.createElement("div",{id:"myLinks",className:this.state.showing},r.a.createElement(k.d,{exact:!0,to:"/",activeStyle:{color:"#000000"},className:"block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-black mr-4 transition-all duration-300 ease-in-out transform font-medium active:text-indigo-500"},"Home"),r.a.createElement(k.d,{exact:!0,to:"/about",activeStyle:{color:"#000000"},className:"block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-black mr-4 transition-all duration-300 ease-in-out transform font-medium active:text-indigo-500"},"About"),r.a.createElement(k.d,{exact:!0,to:"/contact",activeStyle:{color:"#000000"},className:"block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-black transition-all duration-300 ease-in-out transform font-medium active:text-indigo-500"},"Contact")))))}}]),a}(n.Component),F=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"w-full bg-black bottom-0"},r.a.createElement("div",{className:"container max-w-screen-md mx-auto py-8 text-sm font-medium text-white p-6 sm:py-6 lg:px-0"},r.a.createElement("div",{className:"flex flex-col items-center justify-center lg:flex-row lg:justify-between"},r.a.createElement("div",{className:"flex content-center pb-4 sm:pb-0"},r.a.createElement(k.c,{to:"/"},r.a.createElement("img",{className:"fill-current h-8 w-8 mr-2 transition-all duration-300 ease-in-out transform hover:scale-125",width:"54",height:"54",src:O.a}))),r.a.createElement("div",{className:"flex content-center pb-4"},r.a.createElement("div",{className:"text-sm flex-grow antialiased"},r.a.createElement(k.c,{to:"/",className:"dark-bg-link-hover mt-4 sm:inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-indigo-500 mr-4"},"Home"),r.a.createElement(k.c,{to:"/about",className:"dark-bg-link-hover mt-4 sm:inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-indigo-500 mr-4"},"About"),r.a.createElement(k.c,{to:"/contact",className:"dark-bg-link-hover mt-4 sm:inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-indigo-500 mr-4"},"Contact"))))))}}]),a}(n.Component),R=a(44),S=a.n(R),I=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={hasRequestedData:!1,playAppArray:n.props.playAppArray},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({playAppArray:this.props.playAppArray})}},{key:"componentWillReceiveProps",value:function(e){this.setState({playAppArray:e.playAppArray})}},{key:"render",value:function(){return 0!==this.state.playAppArray?r.a.createElement("div",null,this.state.playAppArray):r.a.createElement("div",null,r.a.createElement("img",{src:S.a,className:"mx-auto",alt:"logo"}))}}]),a}(n.Component),T=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).updateMapTooltipContent=function(e){n.setState({content:e})},n.state={hasRequestedData:!1,playAppArray:new Array,content:"",totalNumberOfApps:n.props.totalNumberOfApps},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({playAppArray:this.props.playAppArray})}},{key:"componentWillReceiveProps",value:function(e){this.setState({playAppArray:e.playAppArray,totalNumberOfApps:e.totalNumberOfApps})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"container",className:"container w-full content-center items-center justify-center py-24 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto"},r.a.createElement("h1",{className:"text-center font-bold text-4xl lg:text-5xl"},"Learn more about the ",r.a.createElement("span",{style:{color:"#0066FF"}},this.state.totalNumberOfApps)," COVID-19 apps around the world.")),r.a.createElement("div",null,r.a.createElement(y,{shareTotalAppsNumber:this.props.shareTotalAppsNumber,setTooltipContent:this.updateMapTooltipContent,totalNumberOfApps:this.state.totalNumberOfApps}),r.a.createElement(v.a,null,this.state.content)),r.a.createElement("div",{id:"container",className:"container w-full content-center items-center justify-center pt-16 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto"},r.a.createElement("div",{className:"headers flex items-center mx-auto mb-6 p-4"},r.a.createElement("div",{className:"sm:w-2/12 sm:-mr-6"}),r.a.createElement("div",{className:"font-bold w-8/12 sm:w-6/12 min-w-xs mr-3"},"Application Name"),r.a.createElement("div",{className:"font-bold installs hidden sm:flex sm:w-2/12"},"Downloads"),r.a.createElement("div",{className:"font-bold flex-auto w-4/12 sm:w-2/12 float-right text-left"},"Date Updated")),r.a.createElement(I,{shareRoutesWithApp:this.props.shareRoutesWithApp,playAppArray:this.state.playAppArray})))}}]),a}(n.Component),P=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"container",className:"container w-full content-center items-center justify-center pt-8 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto"},r.a.createElement("div",{className:"text-sm font-medium pb-4"},r.a.createElement(k.c,{className:"hover:underline hover:text-blue-400",to:"/",style:{color:"#0066FF"}},"Home")," "," / ",r.a.createElement("span",null,"About the Project")),r.a.createElement("h1",{className:"text-3xl pb-8"},"About the Project"),r.a.createElement("div",{className:"text-base pb-12"},r.a.createElement("p",{className:"pb-4"},r.a.createElement("strong",null,"This project is currently a proof of concept."),"  Further work is ongoing and we encourage feedback! If you see apps missing or corrections that should be made, please contact us at ",r.a.createElement("a",{className:"hover:underline hover:text-blue-400",to:"/",style:{color:"#0066FF"},href:"mailto:info@covid19apptracker.org"},"info@covid19apptracker.org"),". We hope this encourages greater transparency and leads to further privacy research around the globe."),r.a.createElement("p",{className:"pb-4"},"With the current pandemic has emerged privacy concerns with the large number of applications being published and promoted around the globe. From symptom tracking to contact tracing, the ",r.a.createElement("strong",null,"COVID-19 App Tracker Project")," aims to identify and track applications published on the Google Play Store."),r.a.createElement("p",{className:"pb-4"},"At this time, the ",r.a.createElement("strong",null,"COVID-19 App Tracker Project")," only looks for applications on the Google Play Store that fall within at least one of the following categories:"),r.a.createElement("div",null,r.a.createElement("ul",{className:"list-disc pl-4"},r.a.createElement("li",null,"Contact Tracing"),r.a.createElement("li",null,"Symptom Tracking"),r.a.createElement("li",null,"COVID-19 Information")))),r.a.createElement("hr",{className:"border-black pb-12",width:"32px"}),r.a.createElement("h1",{className:"text-3xl pb-8"},"Our Intended Audience"),r.a.createElement("div",{className:"text-base pb-12"},r.a.createElement("p",{className:"pb-4"},"We hope this project leads to greater transparency for these new applications\u2019 privacy and security implications around the globe. Many apps are being created quickly, resulting in poor security or are not clearly articulating how they are using the data they are collecting. We created this project for the following groups so that they may be better equipped to conduct further research or advocate for specific changes they see fit for their communities."),r.a.createElement("div",null,r.a.createElement("ul",{className:"list-disc pl-4"},r.a.createElement("li",null,"Researchers"),r.a.createElement("li",null,"Privacy Advocates"),r.a.createElement("li",null,"Journalists"),r.a.createElement("li",null,"General Public")))),r.a.createElement("hr",{className:"border-black pb-12",width:"32px"}),r.a.createElement("h1",{className:"text-3xl pb-8"},"Our Roadmap"),r.a.createElement("div",{className:"text-base pb-12"},r.a.createElement("p",{className:"pb-8"},"We are excited to launch our proof of concept of the COVID-19 App Tracker Project, but here are other plans in the works."),r.a.createElement("p",{className:"pb-4"},r.a.createElement("strong",null,"Proof of Concept Launch (May 18, 2020)"),r.a.createElement("br",null),"The following tasks have been completed for the proof of concept launch:"),r.a.createElement("div",{className:"pb-8"},r.a.createElement("ul",{className:"list-disc pl-4"},r.a.createElement("li",null,"COVID-19 App Tracker engine is fully functional"),r.a.createElement("li",null,"Implement automatic updates to the dashboard"),r.a.createElement("li",null,"Update website content"))),r.a.createElement("p",{className:"pb-4"},r.a.createElement("strong",null,"Version 1.0"),r.a.createElement("br",null),"The following tasks we aim to complete under Phase 1 work:"),r.a.createElement("div",null,r.a.createElement("ul",{className:"list-disc pl-4"},r.a.createElement("li",null,"Optimize the dashboard and website for mobile and desktop browsers"),r.a.createElement("li",null,"Automate Twitter updates (New App, Update, or Take Down from Google Play)"),r.a.createElement("li",null,"Allow for users to download database of applications identified under the project"))))))}}]),a}(n.Component),W=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"container",className:"container w-full content-center items-center justify-center pt-8 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto"},r.a.createElement("div",{className:"text-sm font-medium pb-4"},r.a.createElement(k.c,{className:"hover:underline hover:text-blue-400",to:"/",style:{color:"#0066FF"}},"Home")," "," / ",r.a.createElement("span",null,"Contact Us")),r.a.createElement("h1",{className:"text-3xl pb-8"},"Contact Us"),r.a.createElement("div",{className:"text-base pb-12"},r.a.createElement("p",null,"We would love to hear from you! Please direct any press inquiries, corrections, or applications we may have missed to ",r.a.createElement("a",{className:"hover:underline hover:text-blue-400",to:"/",style:{color:"#0066FF"},href:"mailto:info@covid19apptracker.org"},"info@covid19apptracker.org"),". If you are submitting an application please include in your email the link to the Google Play Store so we may verify the application.")),r.a.createElement("hr",{className:"border-black pb-12",width:"32px"}),r.a.createElement("h1",{className:"text-3xl pb-8"},"Want to Collaborate?"),r.a.createElement("div",{className:"text-base"},r.a.createElement("p",{className:"pb-12"},"Working together allows us to make bigger and better things! If you\u2019re working on a project related to COVID-19 applications, we\u2019d also love to hear from you! Please contact our team at ",r.a.createElement("a",{className:"hover:underline hover:text-blue-400",to:"/",style:{color:"#0066FF"},href:"mailto:info@covid19apptracker.org"},"info@covid19apptracker.org")," and include in the subject line \u201cCollaboration Opportunity [ORG / AFFILIATION]\u201d."))))}}]),a}(n.Component),_=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).shareTotalAppsNumber=function(e){n.setState({totalNumberOfApps:e})},n.shareRoutesWithApp=function(e){n.setState({playAppRoutes:e})},n.getAppInfo=function(){var e=[];function t(e,t){return a.apply(this,arguments)}function a(){return(a=Object(m.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.length)){e.next=7;break}return e.next=4,a(t[n],n,t);case 4:n++,e.next=1;break;case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){var a=Object(m.a)(c.a.mark((function a(){var r,l;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.state.hasRequestedData){a.next=10;break}return n.setState({hasRequestedData:!0}),a.next=4,fetch("/apps_data/apps.json");case 4:return r=a.sent,a.next=7,r.json();case 7:return l=a.sent,a.next=10,t(l,function(){var t=Object(m.a)(c.a.mark((function t(a){var r,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/apps_data/apps_details/"+a.id+".json");case 2:return r=t.sent,t.next=5,r.json();case 5:l=t.sent,e.push(l),n.setState({processedData:[].concat(Object(i.a)(n.state.processedData),[l]),hasRequestedData:!0});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 10:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()(),e},n.state={playAppArray:[],hasRequestedData:!1,processedData:[],playAppRoutes:[],totalNumberOfApps:0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.state.hasRequestedData||this.getAppInfo()}},{key:"render",value:function(){var e=this;return r.a.createElement(k.b,{basename:""},r.a.createElement(D,null),r.a.createElement(b,null),r.a.createElement("div",{className:"App container-fullheight"},r.a.createElement("div",null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(T,{shareRoutesWithApp:e.shareRoutesWithApp,playAppArray:e.state.processedData.map((function(e,t){return r.a.createElement(C,{key:e.id,id:e.id,title:e.title,iconURL:e.icon_url,developer:decodeURIComponent(e.developer_id.replace(/\+/g," ")),downloads:e.downloads,updatedDate:e.updated_date})})),shareTotalAppsNumber:e.shareTotalAppsNumber,totalNumberOfApps:e.state.totalNumberOfApps})}}),r.a.createElement(f.a,{exact:!0,path:"/about",component:P}),r.a.createElement(f.a,{exact:!0,path:"/contact",component:W}),this.state.processedData.map((function(e){return r.a.createElement(f.a,{exact:!0,path:"/app/"+e.id,key:e.id,render:function(t){return r.a.createElement(j,Object.assign({},t,{key:"".concat(e.id),id:e.id,title:e.title,iconURL:e.icon_url,developer:decodeURIComponent(e.developer_id.replace(/\+/g," ")),downloads:e.downloads,updatedDate:e.updated_date,country:e.country,permissions:e.permissions,description:e.description,appStoreURL:e.app_store_url}))}})})))),r.a.createElement(F,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(63);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.07e5adc1.chunk.js.map