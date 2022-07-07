import{_ as f,r as h,o as t,c as a,a as e,t as r,b as s,w as _,u as y,R as k,F as d,f as c,g,e as b,p as w,h as x,i as S,d as v,j as D,v as C}from"./index.494a961f.js";import{_ as $,C as M}from"./contactMeBanner.fa6042cb.js";const I={class:"hero"},j={class:"heroDetails"},T={__name:"HeroNoImage",props:{msg:{type:String,required:!0},image:{type:String,require:!1}},setup(n){return(i,l)=>{const o=h("font-awesome-icon");return t(),a("div",I,[e("div",j,[e("h1",null,r(n.msg),1)]),s(y(k),{to:"/about#contact"},{default:_(()=>[s(o,{class:"icon",icon:"fa-solid fa-angle-down",size:"2x",bounce:""})]),_:1})])}}};var L=f(T,[["__scopeId","data-v-5cfeb32c"]]);const z={class:"skillCard"},V={class:"skillHeader"},A=e("p",{class:"skillMeter"},null,-1),G={__name:"SkillsCard",props:{title:{type:String,required:!0},proficiency:{type:Number,required:!0}},setup(n){return(i,l)=>(t(),a("div",z,[e("h3",V,r(n.title),1),A]))}};const N={class:"skillGrid"},q={class:"skillCardWrapper"},E={class:"skillTitle"},F={key:0},H={key:1},B={key:0},W={data(){return{isShown:!0}},methods:{handleToggle(){this.isShown=!this.isShown}}},O=Object.assign(W,{__name:"SkillCards",props:{skill:{type:Object,required:!0}},setup(n){return(i,l)=>{const o=h("font-awesome-icon");return t(),a("div",N,[(t(!0),a(d,null,c(Object.entries(n.skill),p=>(t(),a("div",q,[e("h3",E,r(p[0]),1),e("div",{onClick:l[0]||(l[0]=u=>i.handleToggle()),class:"icon"},[i.isShown?(t(),a("div",F,[s(o,{icon:"fa-solid fa-toggle-off",size:"2x"})])):g("",!0),i.isShown?g("",!0):(t(),a("div",H,[s(o,{icon:"fa-solid fa-toggle-off",size:"2x"})]))]),i.isShown?(t(),a("div",B,[(t(!0),a(d,null,c(p[1],u=>(t(),b(G,{class:"skillDropDown",title:u.title,proficiency:u.proficiencyLevel},null,8,["title","proficiency"]))),256))])):g("",!0)]))),256))])}}});var P=f(O,[["__scopeId","data-v-5405bf60"]]);const J=n=>(w("data-v-4d197e42"),n=n(),x(),n),R={class:"profileGrid",id:"me"},U={class:"title"},X=J(()=>e("img",{class:"profileImage",src:$},null,-1)),K={class:"heading"},Q={class:"links"},Y=["href"],Z=["href"],ee=["href"],te={class:"objective"},ie={class:"objective_description"},oe={data(){return{profile:this.profileData,subtitle:this.profileData.subtitle,objective:this.profileData.objective,jobs:this.profileData.jobs,skills:this.profileData.skills[0],software:this.profileData.software,isModalVisible:!1,modalData:[]}},methods:{openModal(n){this.modalData=n,console.log(this.modalData),this.isModalVisible=!0,this.$refs.PopupModal.focus()},closeModal(){this.isModalVisible=!1}}},ae=Object.assign(oe,{__name:"ProfileSection",props:{profileData:{type:Object,required:!0}},setup(n){return(i,l)=>{const o=h("font-awesome-icon"),p=h("RouterLink");return t(),a("div",R,[e("div",U,[X,e("div",K,[e("h1",null,r(i.profile.title),1),(t(!0),a(d,null,c(i.subtitle,u=>(t(),a("h3",null,r(u),1))),256)),e("div",Q,[e("a",{href:i.profile.linkedIn,target:"_blank"},[s(o,{icon:"fa-brands fa-linkedin",size:"2x"})],8,Y),e("a",{href:i.profile.facebook,target:"_blank"},[s(o,{icon:"fa-brands fa-facebook-f",size:"2x"})],8,Z),s(p,{to:"./resume"},{default:_(()=>[s(o,{icon:"fa-brands fa-readme",size:"2x"})]),_:1}),e("a",{href:i.profile.github,target:"_blank"},[s(o,{icon:"fa-brands fa-github-square",size:"2x"})],8,ee)])])]),e("div",te,[(t(!0),a(d,null,c(i.objective,u=>(t(),a("div",ie,[e("p",null,r(u),1)]))),256))])])}}});var ne=f(ae,[["__scopeId","data-v-4d197e42"]]);const re={class:"modal-backdrop"},se={class:"modal"},le={class:"modal-header"},de={class:"modal-body"},ce={class:"modal-footer"},pe={methods:{close(){this.$emit("close")}}},ue=Object.assign(pe,{__name:"PopupModal",props:{modalData:{type:Object,required:!0}},setup(n){return(i,l)=>(t(),a("div",re,[e("div",se,[e("header",le,[e("h3",null,r(n.modalData.title),1),e("h3",null,r(n.modalData.company),1),e("button",{type:"button",class:"btn-close",onClick:l[0]||(l[0]=(...o)=>i.close&&i.close(...o))},"x")]),e("section",de,[(t(!0),a(d,null,c(n.modalData.description,o=>(t(),a("div",null,[e("h3",null,r(o),1)]))),256)),(t(!0),a(d,null,c(n.modalData.roles,o=>(t(),a("div",null,[e("h3",null,r(o.title),1),e("ul",null,[(t(!0),a(d,null,c(o.description,p=>(t(),a("li",null,r(p),1))),256))])]))),256))]),e("footer",ce,[S(i.$slots,"footer"),e("button",{type:"button",class:"btn-green",onClick:l[1]||(l[1]=(...o)=>i.close&&i.close(...o))}," Close Modal ")])])]))}});const he={class:"experienceCard"},fe={class:"cardHeader"},ge={class:"cardTitle"},me={class:"cardSubtitle"},_e={class:"cardBody"},be={class:"cardDescription"},ve=v(" Job Description: "),ye={class:"cardItem"},ke={class:"cardDescription"},we=v(" Key Roles: "),xe={class:"cardItem"},Se={data(){return{learnMore:!1}},computed:{handleLabel(){return this.learnMore?"Show Less":"Show More"}},methods:{handleToggle(){this.learnMore=!this.learnMore}}},De=Object.assign(Se,{__name:"ExperienceCard",props:{title:{type:String,required:!0},company:{type:String,required:!0},roles:{type:Array,required:!0},description:{type:Array,required:!0}},setup(n){return(i,l)=>(t(),a("div",he,[e("div",fe,[e("h3",ge,r(n.title),1),e("h4",me,r(n.company),1)]),e("div",_e,[e("div",be,[ve,e("ul",null,[(t(!0),a(d,null,c(n.description,o=>(t(),a("li",ye,r(o),1))),256))])]),e("div",ke,[we,e("ul",null,[(t(!0),a(d,null,c(n.roles,o=>(t(),a("li",xe,[e("div",null,r(o.title),1)]))),256))])])])]))}});var Ce=f(De,[["__scopeId","data-v-23db0ec8"]]),m=[{title:"Austin Dober",subtitle:["Full Stack Software Engineer","Frontend Software Developer","UX/UI Developer"],github:"https://github.com/austdobe",linkedIn:"https://linkedIn.com/in/austin-dober",facebook:"https://www.facebook.com/adoberweb",skills:[{Languages:[{title:"TypeScript",proficiencyLevel:4},{title:"JavaScript",proficiencyLevel:4},{title:"HTML",proficiencyLevel:5},{title:"CSS",proficiencyLevel:5}],Frameworks:[{title:"VueJS",proficiencyLevel:4},{title:"ReactJS",proficiencyLevel:4},{title:"NextJS",proficiencyLevel:4}],Libraries:[{title:"Scss",proficiencyLevel:5},{title:"Bootstrap CSS",proficiencyLevel:5},{title:"Tailwind CSS",proficiencyLevel:4},{title:"JQuery",proficiencyLevel:5}],Deployment:[{title:"Vercel",proficiencyLevel:5},{title:"Github Pages",proficiencyLevel:5},{title:"Heroku",proficiencyLevel:4}],Workflow:[{title:"Jira",proficiencyLevel:5},{title:"Github",proficiencyLevel:5}]}],jobs:[{title:"Software Engineer",company:"Internetwork Expert (INE)",roles:[{title:"Frontend Developer for Support Application.",description:["This application managed all user profile information. This provided the support staff the ability to make changes to the users profile information that was stored in the server.","Main Task was to create endpoint calls to pull information from the server. A few tickets that were completed during my time here are: Add ability to change user account type (paid vs free), Add section to create/edit/view user notes, Add section to view billing notes, Improve search results to allow search by name or email, Created section to create new accounts","Technology used: Vue 3, TypeScript/TSX, Scss, Google Tag Manager"]},{title:"Frontend Developer for Checkout Application.",description:["This application handled all business to client purchases and handled majority of the user account creation","Main Tasks were to connect with our purchase software, utilizing Recurly, to transfer payment information in a secure way, capture and send marketing data, utilizing Braze, related to the users activity throughout the application, update and manage content on the app: such as adding/removing promotional plans, adding new purchaseable certifications","Technology used: Vue 2, TypeScript, Scss, Recurly, Braze, Google Tag Manager"]},{title:"Frontend Developer for Marketing Site.",description:["This application was the main marketing site. This application provided information about what INE is and basic information about the various trainings, plans and products they sell.","This application was built by 2 different agencies, this was finally inherited by me to manage and improve the code functionality. My main job was to create the ability for marketing team to adjust the constant changing information using graphCMS","Technology used: Next.js, Typescript/TSX, Tailwind CSS, Braze, Google Tag Manager"]}],description:["INE provides subscription based services that provide educational material and certification courses for Cyber Security."]},{title:"Software Engineer",company:"Freelance",roles:[{title:"Development and Design of local food truck website.",description:["This application managed all marketing information for the food truck, such as: location, menu, hours of operation, contact info and event planning.","Technology used: Wordpress, CSS"]},{title:"Development and Design of photo business website",description:["This application handled all marketing information for the food truck, such as: location, hours of operation, contact info and products.","Technology used: Wordpress, CSS"]}],description:["Direct Client based work. Speaking with current and potential clients to find ways of enhancing their business and creating a stronger digital presence. "]}],objective:["I am a Full Stack JavaScript engineer. I have experience developing in an agile work setting, which consisted of participating in daily standup meetings and bi-weekly sprints. I have experience with team collaboration, code reviews, and API utilization.","I built over 30 different applications ranging from Frontend to Full Stack. I regularly participate in Hackathons, which enhances my understanding of new libraries. I participated in Mintbean Hackathons receiving full marks for my projects created. My most memorable being the Super Mario application.","When my head isn't stuck in my IDE, I find myself spending time with my wife and dog, Violet. We enjoy going for long hikes through the various national parks that grace our beautiful state of North Carolina. We also enjoy traveling; we make frequent trips back home to Vermont, as well as visiting some of the better attractions of North Carolina such as: Asheville and Wilmington"]}];const $e={id:"contact"},Me={class:"aboutGrid"},Ie={data(){return{profile:m[0],jobs:m[0].jobs,skills:m[0].skills[0],isModalVisible:!1,modalData:[]}},methods:{openModal(n){this.modalData=n,console.log(this.modalData),this.isModalVisible=!0,this.$refs.PopupModal.focus()},closeModal(){this.isModalVisible=!1}}},Le=Object.assign(Ie,{__name:"AboutView",setup(n){return(i,l)=>(t(),a(d,null,[D(s(ue,{onClose:i.closeModal,modalData:i.modalData},null,8,["onClose","modalData"]),[[C,i.isModalVisible]]),e("section",null,[s(L,{msg:"I BUILD FULL STACK DIGITAL ASSETS"})]),e("section",$e,[s(M,{title:"Contact me",description:"Have a great idea or want to work on something together?"})]),e("section",null,[s(ne,{id:"me",profileData:i.profile},null,8,["profileData"])]),e("section",Me,[(t(!0),a(d,null,c(i.jobs,o=>(t(),b(Ce,{onClick:p=>i.openModal(o),title:o.title,company:o.company,description:o.description,roles:o.roles},null,8,["onClick","title","company","description","roles"]))),256))]),e("section",null,[s(P,{skill:i.skills},null,8,["skill"])])],64))}});export{Le as default};
