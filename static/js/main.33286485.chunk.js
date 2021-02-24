(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{36:function(e,a,t){e.exports=t.p+"static/media/home-profile.d5d94dd1.PNG"},37:function(e,a,t){e.exports=t.p+"static/media/resume-profile.ccbb71de.PNG"},38:function(e,a,t){e.exports=t.p+"static/media/SankalpHeranjalResume.8a36f7f1.pdf"},40:function(e,a,t){e.exports=t(52)},45:function(e,a,t){},46:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(19),o=t.n(i),c=(t(45),t(46),t(69)),l=t(18),s=t(67),m=Object(s.a)({navBar:{backgroundColor:"#18252c",height:"7vh"},navLink:{textDecoration:"none",color:"white","&:hover":{color:"darkcyan"}}}),u=function(){var e=m();return r.a.createElement(c.a,{className:e.navBar,container:!0,direction:"row",justify:"space-around",alignItems:"center"},r.a.createElement(c.a,{item:!0},r.a.createElement(l.b,{to:"/",className:e.navLink},"HOME")),r.a.createElement(c.a,{item:!0},r.a.createElement(l.b,{to:"/about",className:e.navLink},"ABOUT")),r.a.createElement(c.a,{item:!0},r.a.createElement(l.b,{to:"/projects",className:e.navLink},"PROJECTS")))},p=t(17),d=t(74),h=t(36),f=t.n(h),g=t(70),E=t(71),v=t(72),b=t(73),S=Object(s.a)({mail:{color:"white"},linkedIn:{color:"#0073b1"},github:{color:"white"},instagram:{color:"#e91e63"}}),y=function(){var e=S();return r.a.createElement(c.a,{container:!0,item:!0,justify:"center",alignItems:"center",spacing:2},r.a.createElement(c.a,{item:!0},r.a.createElement("a",{href:"https://github.com/hsankalp",rel:"noopener noreferrer",target:"_blank",className:e.github},r.a.createElement(g.a,null))),r.a.createElement(c.a,{item:!0},r.a.createElement("a",{href:"https://linkedin.com/in/hsankalp/",rel:"noopener noreferrer",target:"_blank",className:e.linkedIn},r.a.createElement(E.a,null))),r.a.createElement(c.a,{item:!0},r.a.createElement("a",{href:"mailto:sankalp.heranjal@gmail.com",target:"_top",className:e.mail},r.a.createElement(v.a,null))),r.a.createElement(c.a,{item:!0},r.a.createElement("a",{href:"https://www.instagram.com/sankalpheranjal",rel:"noopener noreferrer",target:"_blank",className:e.instagram},r.a.createElement(b.a,null))))},w=Object(s.a)({home:{textAlign:"center",height:"inherit"},profileImage:{border:"3px solid darkcyan",borderRadius:"50%",width:"200px"},saveResume:{textDecoration:"none"}}),k=function(){var e=w();return r.a.createElement(c.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:e.home,spacing:3},r.a.createElement(c.a,{item:!0},r.a.createElement("img",{className:e.profileImage,src:f.a,alt:"profile"})),r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,{variant:"h3"},"Hi, I'm Sankalp Heranjal")),r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,{variant:"h6"},"Full Stack Software Engineer")),r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,{variant:"subtitle1"},"JavaScript | Reactjs | HTML | CSS | Java | Spring | Microservices | Serverless")),r.a.createElement(c.a,{item:!0},r.a.createElement(y,null)))},j=t(75),I=Object(s.a)({divider:{backgroundColor:"white"}}),P=function(e){var a=e.value,t=I();return r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h4",color:"primary"},a),r.a.createElement(j.a,{className:t.divider,variant:"fullWidth"}))},M=[{name:"Simulation Platform for Autonomous Vehicles",tools:["JavaScript (ES6)","React","Nodejs","Jest","HTML","CSS","Material UI","Java","Serverless","AWS Services (Lambdas, SQS, SNS, DynamoDB, API Gateway, Cloud Formation)"],description:"I am currently working on the AV Simulation Platform that provides the ability for any software engineer that is consuming the AV TaaS (Transport as a Service) platform to rapidly emulate real-world trip scenarios in their own TaaS based applications. The simulation service is being built using serverless architecture with the help of AWS Lambda functions and Java. The user facing web application that allows users to emulate the scenarios is being built using Reactjs and Mapbox. We follow eXtreme Programming (XP) practices including Pair/Mob programming and Test-first/Test Driven Development (TDD) to achieve continuous delivery and better quality of code."},{name:"Subscription Management and Orchestration for Ford Mobility",tools:["Java","Spring Boot","JUnit","Mockito","Microservices","Redis","RabbitMQ","PCF"],description:"I previously worked on Subscription Services Platform (SSP) that orchestrated the events for subscription and enrollment of features in a vehicle. We worked on migrating the existing monolith application to the Microservice architecture using Java, Spring Boot and Pivotal Cloud Foundry. The application was split into smaller loosely coupled independent services (that could be deployed and scaled individually) based on their business capabilities. We followed eXtreme Programming (XP) practices including Pair/Mob programming and Test-first/Test Driven Development (TDD) to achieve continuous delivery and better quality of code. We setup automated workflows for Continuous Integration and Delivery with the help of Pivotal\u2019s Concourse CI"},{name:"Web application for monitoring microservices",tools:["JavaScript (ES6)","React","Jest","HTML","CSS","Bootstrap","PCF"],description:"I created a web application (or dashboard) for the Subscription Services Platform (SSP) with the help of Reactjs and Spring Boot that monitors all the events received by the platform as well as monitors all the SSP microservices. It gives a count of total events,completed events, pending events and failed events for a day, week or a month. It alerts if any internal errors occur due to bad code. It also monitors the health of all the SSP microservices and other services like databases and messaging queues and alerts if any of them are down. It also monitors the messaging queues and alerts if any of the queues start piling up. It helps us scale up the microservices during heavy traffic. This application is being used by production support to prevent any issues from happening."},{name:"Web application to replay Dead-Letter-Queue (DLQ) messages",tools:["JavaScript (ES6)","React","Jest","HTML","CSS","Bootstrap","PCF"],description:"I created another web application for the Subscription Services Platform (SSP) with the help of Reactjs, Spring Boot and RabbitMQ that monitored the messages that went to the dead-letter-queues due to maximum retry attempts after a failure. The application gave user the ability to selectively replay the message back to the original queue once the issue in the code was detected and fixed."}],C=function(e){var a=e.icon,t=e.label,n=e.variant,i=e.justify;return r.a.createElement(c.a,{container:!0,spacing:1,justify:i,alignItems:"center"},r.a.createElement(c.a,{item:!0},a),r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,{variant:n},t)))},x=t(76),T=Object(s.a)({projects:{padding:"30px"}}),J=function(){var e=T();return r.a.createElement(c.a,{className:e.projects,container:!0,direction:"column",spacing:2},r.a.createElement(c.a,{item:!0},r.a.createElement(P,{value:"Work Projects"})),M.map((function(e){return r.a.createElement(n.Fragment,{key:e.name},r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,{variant:"h6",color:"secondary"},e.name)),r.a.createElement(c.a,{item:!0},r.a.createElement(C,{icon:r.a.createElement(x.a,{fontSize:"inherit"}),label:e.tools.join(", "),variant:"subtitle1"})),r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,{variant:"subtitle1",align:"justify"},e.description)))})))},A=t(77),N=t(78),R=t(79),F=[{role:"Frontend Software Engineer",start:"Aug 2020",end:"Present",company:"Vroom",team:"",description:"",tools:["TypeScript","React","NextJS","Jest","React Testing Library","Styled Components","Storybook","MobX"],location:"Detroit, MI - US"},,{role:"Full Stack Software Engineer",start:"Sep 2019",end:"Aug 2020",company:"Ford - AV (Perficient)",team:"Simulation Services",description:"Simulation platform that mimics real world scenarios for autonomous vehicles moving on the road for other teams to test their features in a risk-free environment.",tools:["JavaScript (ES6)","React","Nodejs","Jest","React Testing Library","Java","Serverless","AWS"],location:"Detroit, MI - US"},{role:"Full Stack Software Engineer",start:"Mar 2017",end:"Sep 2019",company:"Ford - Mobility (Perficient)",team:"Subscription Management and Orchestration",description:"Subscription management platform that orchestrates the events for activation of single or multiple features in a vehicle.",tools:["Java","Spring","JUnit","Mockito","Microservices","JavaScript (ES6)","React","Jest","PCF"],location:"Taylor, MI - US"},{role:"System Analyst Intern",start:"Aug 2016",end:"Mar 2017",company:"Stanford University",team:"Procure to Pay",description:"Support and enhancement of the Procure-to-Pay EBS application that manages the Stanford supplies.",tools:["Oracle Application Framework","Java","PL/SQL"],location:"Palo Alto, CA - US"}],L=function(){return r.a.createElement(c.a,{container:!0,direction:"column",spacing:3},r.a.createElement(c.a,{item:!0},r.a.createElement(P,{value:"Experience"})),F.map((function(e){return r.a.createElement(c.a,{item:!0,container:!0,direction:"column",spacing:2,key:e.company},r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,{variant:"h6",color:"secondary"},e.role)),r.a.createElement(c.a,{item:!0},r.a.createElement(C,{icon:r.a.createElement(A.a,{fontSize:"inherit"}),label:e.company,variant:"subtitle1"})),r.a.createElement(c.a,{item:!0},r.a.createElement(C,{icon:r.a.createElement(N.a,{fontSize:"inherit"}),label:"".concat(e.start," - ").concat(e.end),variant:"subtitle1"})),r.a.createElement(c.a,{item:!0},r.a.createElement(C,{icon:r.a.createElement(R.a,{fontSize:"inherit"}),label:e.location,variant:"subtitle1"})),r.a.createElement(c.a,{item:!0},r.a.createElement(C,{icon:r.a.createElement(x.a,{fontSize:"inherit"}),label:e.tools.join(", "),variant:"subtitle1"})))})))},D=t(80),B=[{name:"Illinois Instiitute of Technology",college:"College of Science",start:"Aug 2014",end:"May 2016",degree:"Master of Science \u2013 Computer Science",location:"Chicago, IL - US",gpa:3.3},{name:"Visvesvaraya Technological University",college:"The Oxford College of Engineering",start:"Aug 2009",end:"May 2013",degree:"Bachelor of Engineering \u2013 Information Science and Engineering",location:"Bangalore, Karnataka - India",gpa:3.3}],O=function(){return r.a.createElement(c.a,{container:!0,direction:"column",spacing:3},r.a.createElement(c.a,{item:!0},r.a.createElement(P,{value:"Education"})),B.map((function(e){return r.a.createElement(c.a,{item:!0,container:!0,direction:"column",spacing:2,key:e.name},r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,{variant:"h6",color:"secondary"},e.degree)),r.a.createElement(c.a,{item:!0},r.a.createElement(C,{icon:r.a.createElement(D.a,{fontSize:"inherit"}),label:e.name,variant:"subtitle1"})),r.a.createElement(c.a,{item:!0},r.a.createElement(C,{icon:r.a.createElement(N.a,{fontSize:"inherit"}),label:"".concat(e.start," - ").concat(e.end),variant:"subtitle1"})),r.a.createElement(c.a,{item:!0},r.a.createElement(C,{icon:r.a.createElement(R.a,{fontSize:"inherit"}),label:e.location,variant:"subtitle1"})))})))},W=t(84),z=t(81),H=t(82),U=t(37),_=t.n(U),X=t(38),q=t.n(X),Q=Object(s.a)({bio:{textAlign:"center"},profileImage:{border:"3px solid darkcyan",borderRadius:"50%",width:"200px"},saveResume:{textDecoration:"none"}}),V=function(){var e=Q();return r.a.createElement(c.a,{className:e.bio,container:!0,direction:"column",spacing:2},r.a.createElement(c.a,{item:!0},r.a.createElement("img",{className:e.profileImage,src:_.a,alt:"sankalp-heranjal"})),r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,{variant:"h6",align:"center"},"Hi, I'm Sankalp")),r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,{paragraph:!0,align:"justify"},"I am a Software developer with experience developing User Interactive Web applications as well as Microservice based applications."),r.a.createElement(d.a,{paragraph:!0,align:"justify"},"In addition to my work experience, I hold a Master\u2019s degree in Computer Science from Illinois Institute of Technology, Chicago."),r.a.createElement(d.a,{paragraph:!0,align:"justify"},"I am passionate about coding, and love solving technical problems."),r.a.createElement(d.a,{paragraph:!0,align:"justify"},"Apart from coding, I love traveling, trying new cuisines and making new connections. Check out my travel feed at"," ",r.a.createElement("a",{href:"https://www.instagram.com/sankalpheranjal",rel:"noopener noreferrer",target:"_blank"},"@sankalpheranjal"))),r.a.createElement(c.a,{item:!0},r.a.createElement(C,{icon:r.a.createElement(z.a,{fontSize:"inherit"}),label:"773-240-4870",variant:"body2",justify:"center"})),r.a.createElement(c.a,{item:!0},r.a.createElement("a",{href:"mailto:sankalp.heranjal@gmail.com",target:"_top"},r.a.createElement(C,{icon:r.a.createElement(v.a,{fontSize:"inherit"}),label:"sankalp.heranjal@gmail.com",variant:"body2",justify:"center"}))),r.a.createElement(c.a,{item:!0},r.a.createElement("a",{href:q.a,download:"sankalp-heranjal-resume",className:e.saveResume},r.a.createElement(W.a,{size:"small",variant:"outlined",color:"primary"},r.a.createElement(C,{icon:r.a.createElement(H.a,{fontSize:"inherit"}),label:"See my Resume",variant:"body2"})))))},G=[{name:"Pivotal Cloud Foundry Developer v1.11",description:"Issued by Pivotal Software, Inc.",year:"Feb 2018",link:"http://bcert.me/sgbesxrv"},{name:"Essential Cloud Infrastructure: Foundation",description:"Issued by Coursera",year:"Aug 2017",link:"https://www.coursera.org/account/accomplishments/verify/ML97XK9XNL8Q?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate&utm_term=long"},{name:"Best Business Case Award",description:'Awarded at Ford\'s "Resilience Awakens Hackathon"',year:"Jun 2019"},{name:"Certificate of Appreciation",description:"Awarded at Ford in recognition for developing a Testing Harness for the team",year:"Nov 2017"}],K=function(){return r.a.createElement(c.a,{container:!0,direction:"column",spacing:3},r.a.createElement(c.a,{item:!0},r.a.createElement(P,{value:"Certifications and Awards"})),G.map((function(e){return r.a.createElement(c.a,{item:!0,container:!0,direction:"column",spacing:1,key:e.name},r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,{variant:"h6",color:"secondary"},e.name),r.a.createElement(d.a,{variant:"subtitle1"},e.description)),r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,{variant:"subtitle1"},e.year)),e.link&&r.a.createElement(c.a,{item:!0},r.a.createElement("a",{href:e.link,rel:"noopener noreferrer",target:"_blank"},"See credential")))})))},Y=t(85),$=[{name:"HTML5",score:90},{name:"CSS3",score:80},{name:"JavaScript ES6",score:85},{name:"React.js",score:80},{name:"Node.js",score:70},{name:"Express.js",score:60},{name:"Java",score:75},{name:"Spring Boot",score:75}],Z=function(){return r.a.createElement(c.a,{container:!0,direction:"column",spacing:3},r.a.createElement(c.a,{item:!0},r.a.createElement(P,{value:"Skills"})),r.a.createElement(c.a,{item:!0,container:!0,direction:"column",spacing:3},$.map((function(e){return r.a.createElement(c.a,{item:!0,key:e.name},r.a.createElement(d.a,{variant:"h6",color:"secondary"},e.name),r.a.createElement(Y.a,{variant:"determinate",value:e.score}))}))))},ee=Object(s.a)({column:{padding:"25px",height:"93vh",overflowY:"auto","&::-webkit-scrollbar":{display:"none"}}}),ae=function(){var e=ee();return r.a.createElement(c.a,{container:!0},r.a.createElement(c.a,{className:e.column,item:!0,xs:12,md:4},r.a.createElement(V,null)),r.a.createElement(c.a,{className:e.column,item:!0,xs:12,md:8},r.a.createElement(c.a,{container:!0,direction:"column",spacing:4},r.a.createElement(c.a,{item:!0},r.a.createElement(L,null)),r.a.createElement(c.a,{item:!0},r.a.createElement(O,null)),r.a.createElement(c.a,{item:!0},r.a.createElement(K,null)),r.a.createElement(c.a,{item:!0},r.a.createElement(Z,null)))))},te=Object(s.a)({main:{height:"93vh",overflowX:"hidden"}}),ne=function(){var e=te();return r.a.createElement(c.a,{container:!0,className:e.main},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:k}),r.a.createElement(p.a,{exact:!0,path:"/about",component:ae}),r.a.createElement(p.a,{exact:!0,path:"/projects",component:J})))},re=t(39),ie=t(83),oe=Object(re.a)({palette:{primary:{main:"#008b8b"},secondary:{main:"#8fbc8f"}}});var ce=function(){return r.a.createElement(ie.a,{theme:oe},r.a.createElement(l.a,null,r.a.createElement(u,null),r.a.createElement(ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.33286485.chunk.js.map