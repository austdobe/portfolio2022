import{_ as h,r as f,o as t,c as a,a as e,t as r,b as s,w as _,u as y,R as k,F as d,g as c,h as g,f as b,p as w,e as x,i as S,d as v,j as D,v as $}from"./index.a128a929.js";import{_ as C}from"./Headshot.23358bf2.js";const I={class:"hero"},M={class:"heroDetails"},j={__name:"HeroImage",props:{msg:{type:String,required:!0},image:{type:String,require:!1}},setup(n){return(i,l)=>{const o=f("font-awesome-icon");return t(),a("div",I,[e("div",M,[e("h1",null,r(n.msg),1)]),s(y(k),{to:"/about#me"},{default:_(()=>[s(o,{class:"icon",icon:"fa-solid fa-angle-down",size:"2x",bounce:""})]),_:1})])}}};var T=h(j,[["__scopeId","data-v-b5b77392"]]);const L={class:"skillCard"},z={class:"skillHeader"},V=e("p",{class:"skillMeter"},null,-1),A={__name:"SkillsCard",props:{title:{type:String,required:!0},proficiency:{type:Number,required:!0}},setup(n){return(i,l)=>(t(),a("div",L,[e("h3",z,r(n.title),1),V]))}};const G={class:"skillGrid"},q={class:"skillCardWrapper"},E={class:"skillTitle"},F={key:0},N={key:1},H={key:0},W={data(){return{isShown:!0}},methods:{handleToggle(){this.isShown=!this.isShown}}},B=Object.assign(W,{__name:"SkillCards",props:{skill:{type:Object,required:!0}},setup(n){return(i,l)=>{const o=f("font-awesome-icon");return t(),a("div",G,[(t(!0),a(d,null,c(Object.entries(n.skill),p=>(t(),a("div",q,[e("h3",E,r(p[0]),1),e("div",{onClick:l[0]||(l[0]=u=>i.handleToggle()),class:"icon"},[i.isShown?(t(),a("div",F,[s(o,{icon:"fa-solid fa-toggle-off",size:"2x"})])):g("",!0),i.isShown?g("",!0):(t(),a("div",N,[s(o,{icon:"fa-solid fa-toggle-off",size:"2x"})]))]),i.isShown?(t(),a("div",H,[(t(!0),a(d,null,c(p[1],u=>(t(),b(A,{class:"skillDropDown",title:u.title,proficiency:u.proficiencyLevel},null,8,["title","proficiency"]))),256))])):g("",!0)]))),256))])}}});var P=h(B,[["__scopeId","data-v-3829d9cb"]]);const O=n=>(w("data-v-3be8985c"),n=n(),x(),n),J={class:"profileGrid",id:"me"},R={class:"title"},U=O(()=>e("img",{class:"profileImage",src:C},null,-1)),X={class:"heading"},K={class:"links"},Q=["href"],Y=["href"],Z=["href"],ee={class:"objective"},te={class:"objective_description"},ie={data(){return{profile:this.profileData,subtitle:this.profileData.subtitle,objective:this.profileData.objective,jobs:this.profileData.jobs,skills:this.profileData.skills[0],software:this.profileData.software,isModalVisible:!1,modalData:[]}},methods:{openModal(n){this.modalData=n,console.log(this.modalData),this.isModalVisible=!0,this.$refs.PopupModal.focus()},closeModal(){this.isModalVisible=!1}}},oe=Object.assign(ie,{__name:"ProfileSection",props:{profileData:{type:Object,required:!0}},setup(n){return(i,l)=>{const o=f("font-awesome-icon"),p=f("RouterLink");return t(),a("div",J,[e("div",R,[U,e("div",X,[e("h1",null,r(i.profile.title),1),(t(!0),a(d,null,c(i.subtitle,u=>(t(),a("h3",null,r(u),1))),256)),e("div",K,[e("a",{href:i.profile.linkedIn,target:"_blank"},[s(o,{icon:"fa-brands fa-linkedin",size:"2x"})],8,Q),e("a",{href:i.profile.facebook,target:"_blank"},[s(o,{icon:"fa-brands fa-facebook-f",size:"2x"})],8,Y),s(p,{to:"./resume"},{default:_(()=>[s(o,{icon:"fa-brands fa-readme",size:"2x"})]),_:1}),e("a",{href:i.profile.github,target:"_blank"},[s(o,{icon:"fa-brands fa-github-square",size:"2x"})],8,Z)])])]),e("div",ee,[(t(!0),a(d,null,c(i.objective,u=>(t(),a("div",te,[e("p",null,r(u),1)]))),256))])])}}});var ae=h(oe,[["__scopeId","data-v-3be8985c"]]);const ne={class:"modal-backdrop"},re={class:"modal"},se={class:"modal-header"},le={class:"modal-body"},de={class:"modal-footer"},ce={methods:{close(){this.$emit("close")}}},pe=Object.assign(ce,{__name:"PopupModal",props:{modalData:{type:Object,required:!0}},setup(n){return(i,l)=>(t(),a("div",ne,[e("div",re,[e("header",se,[e("h3",null,r(n.modalData.title),1),e("h3",null,r(n.modalData.company),1),e("button",{type:"button",class:"btn-close",onClick:l[0]||(l[0]=(...o)=>i.close&&i.close(...o))}," x ")]),e("section",le,[(t(!0),a(d,null,c(n.modalData.description,o=>(t(),a("div",null,[e("h3",null,r(o),1)]))),256)),(t(!0),a(d,null,c(n.modalData.roles,o=>(t(),a("div",null,[e("h3",null,r(o.title),1),e("ul",null,[(t(!0),a(d,null,c(o.description,p=>(t(),a("li",null,r(p),1))),256))])]))),256))]),e("footer",de,[S(i.$slots,"footer"),e("button",{type:"button",class:"btn-green",onClick:l[1]||(l[1]=(...o)=>i.close&&i.close(...o))}," Close Modal ")])])]))}});const ue={class:"experienceCard"},fe={class:"cardHeader"},he={class:"cardTitle"},ge={class:"cardSubtitle"},me={class:"cardBody"},_e={class:"cardDescription"},be=v(" Job Description: "),ve={class:"cardItem"},ye={class:"cardDescription"},ke=v(" Key Roles: "),we={class:"cardItem"},xe={data(){return{learnMore:!1}},computed:{handleLabel(){return this.learnMore?"Show Less":"Show More"}},methods:{handleToggle(){this.learnMore=!this.learnMore}}},Se=Object.assign(xe,{__name:"ExperienceCard",props:{title:{type:String,required:!0},company:{type:String,required:!0},roles:{type:Array,required:!0},description:{type:Array,required:!0}},setup(n){return(i,l)=>(t(),a("div",ue,[e("div",fe,[e("h3",he,r(n.title),1),e("h4",ge,r(n.company),1)]),e("div",me,[e("div",_e,[be,e("ul",null,[(t(!0),a(d,null,c(n.description,o=>(t(),a("li",ve,r(o),1))),256))])]),e("div",ye,[ke,e("ul",null,[(t(!0),a(d,null,c(n.roles,o=>(t(),a("li",we,[e("div",null,r(o.title),1)]))),256))])])])]))}});var De=h(Se,[["__scopeId","data-v-e1a0f8f4"]]),m=[{title:"Austin Dober",subtitle:["Full Stack Software Engineer","Frontend Software Developer","UX/UI Developer"],github:"https://github.com/austdobe",linkedIn:"https://linkedIn.com/in/austin-dober",facebook:"https://www.facebook.com/adoberweb",skills:[{Languages:[{title:"TypeScript",proficiencyLevel:4},{title:"JavaScript",proficiencyLevel:4},{title:"HTML",proficiencyLevel:5},{title:"CSS",proficiencyLevel:5}],Frameworks:[{title:"VueJS",proficiencyLevel:4},{title:"ReactJS",proficiencyLevel:4},{title:"NextJS",proficiencyLevel:4}],Libraries:[{title:"Scss",proficiencyLevel:5},{title:"Bootstrap CSS",proficiencyLevel:5},{title:"Tailwind CSS",proficiencyLevel:4},{title:"JQuery",proficiencyLevel:5}],Deployment:[{title:"Vercel",proficiencyLevel:5},{title:"Github Pages",proficiencyLevel:5},{title:"Heroku",proficiencyLevel:4}],Workflow:[{title:"Jira",proficiencyLevel:5},{title:"Github",proficiencyLevel:5}]}],jobs:[{title:"Software Engineer",company:"Internetwork Expert (INE)",roles:[{title:"Frontend Developer for Support Application.",description:["This application managed all user profile information. This provided the support staff the ability to make changes to the users profile information that was stored in the server.","Main Task was to create endpoint calls to pull information from the server. A few tickets that were completed during my time here are: Add ability to change user account type (paid vs free), Add section to create/edit/view user notes, Add section to view billing notes, Improve search results to allow search by name or email, Created section to create new accounts","Technology used: Vue 3, TypeScript/TSX, Scss, Google Tag Manager"]},{title:"Frontend Developer for Checkout Application.",description:["This application handled all business to client purchases and handled majority of the user account creation","Main Tasks were to connect with our purchase software, utilizing Recurly, to transfer payment information in a secure way, capture and send marketing data, utilizing Braze, related to the users activity throughout the application, update and manage content on the app: such as adding/removing promotional plans, adding new purchaseable certifications","Technology used: Vue 2, TypeScript, Scss, Recurly, Braze, Google Tag Manager"]},{title:"Frontend Developer for Marketing Site.",description:["This application was the main marketing site. This application provided information about what INE is and basic information about the various trainings, plans and products they sell.","This application was built by 2 different agencies, this was finally inherited by me to manage and improve the code functionality. My main job was to create the ability for marketing team to adjust the constant changing information using graphCMS","Technology used: Next.js, Typescript/TSX, Tailwind CSS, Braze, Google Tag Manager"]}],description:["INE provides subscription based services that provide educational material and certification courses for Cyber Security."]},{title:"Software Engineer",company:"Freelance",roles:[{title:"Development and Design of local food truck website.",description:["This application managed all marketing information for the food truck, such as: location, menu, hours of operation, contact info and event planning.","Technology used: Wordpress, CSS"]},{title:"Development and Design of photo business website",description:["This application handled all marketing information for the food truck, such as: location, hours of operation, contact info and products.","Technology used: Wordpress, CSS"]}],description:["Direct Client based work. Speaking with current and potential clients to find ways of enhancing their business and creating a stronger digital presence. "]}],objective:["I am a Full Stack JavaScript engineer. I have experience developing in an agile work setting, which consisted of participating in daily standup meeting and bi-weekly sprints. I have experience with team collaboration and code reviews, and I have experience with API utilization. I have built a number of different projects, both personal and business applications, using API/Server calls.","I have built over 30 different applications ranging from Frontend applications to Full Stack applications. I regularly participate in Hackathons. I participated in 3 Mintbean Hackathons receiving full marks for my projects created. My most memorable at this time is my Super Mario application.","When I don't have my head stuck in my IDE, I find myself spending time with my wife and dog. We enjoy going for long hikes through the various national parks that grace our beautiful state of North Carolina. We also enjoy traveling; we make frequent trips back home to Vermont, as well as visiting some of the better attractions of North Carolina such as: Asheville and Wilmington"]}];const $e={class:"aboutGrid"},Ce={data(){return{profile:m[0],jobs:m[0].jobs,skills:m[0].skills[0],isModalVisible:!1,modalData:[]}},methods:{openModal(n){this.modalData=n,console.log(this.modalData),this.isModalVisible=!0,this.$refs.PopupModal.focus()},closeModal(){this.isModalVisible=!1}}},je=Object.assign(Ce,{__name:"AboutView",setup(n){return(i,l)=>(t(),a(d,null,[D(s(pe,{onClose:i.closeModal,modalData:i.modalData},null,8,["onClose","modalData"]),[[$,i.isModalVisible]]),e("section",null,[s(T,{msg:"I BUILD FULL STACK DIGITAL ASSETS"})]),e("section",null,[s(ae,{id:"me",profileData:i.profile},null,8,["profileData"])]),e("section",$e,[(t(!0),a(d,null,c(i.jobs,o=>(t(),b(De,{onClick:p=>i.openModal(o),title:o.title,company:o.company,description:o.description,roles:o.roles},null,8,["onClick","title","company","description","roles"]))),256))]),e("section",null,[s(P,{skill:i.skills},null,8,["skill"])])],64))}});export{je as default};