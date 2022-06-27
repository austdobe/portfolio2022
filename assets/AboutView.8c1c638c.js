import{_ as g,r as _,o,c as a,a as e,t as r,b as l,w as h,u as x,R as w,F as d,g as c,d as y,h as m,i as k,v as S,f as I,p as C,e as $}from"./index.b4c920f1.js";import{_ as j}from"./Headshot.23358bf2.js";const T={class:"hero"},M={class:"heroDetails"},D={__name:"HeroImage",props:{msg:{type:String,required:!0},image:{type:String,require:!1}},setup(i){return(t,f)=>{const s=_("font-awesome-icon");return o(),a("div",T,[e("div",M,[e("h1",null,r(i.msg),1)]),l(x(w),{to:"/about#me"},{default:h(()=>[l(s,{class:"icon",icon:"fa-solid fa-angle-down",size:"2x",bounce:""})]),_:1})])}}};var z=g(D,[["__scopeId","data-v-b5b77392"]]),u=[{title:"Austin Dober",subtitle:["Full Stack Software Engineer","Frontend Software Developer","UX/UI Developer"],github:"https://github.com/austdobe",linkedIn:"https://linkedIn.com/in/austin-dober",facebook:"https://www.facebook.com/adoberweb",jobs:[{title:"Software Engineer",company:"Internetwork Expert (INE)",roles:[{title:"Frontend Developer for Support Application.",description:["This application managed all user profile information. This provided the support staff the ability to make changes to the users profile information that was stored in the server.","Main Task was to create endpoint calls to pull information from the server. A few tickets that were completed during my time here are: Add ability to change user account type (paid vs free), Add section to create/edit/view user notes, Add section to view billing notes, Improve search results to allow search by name or email, Created section to create new accounts","Technology used: Vue 3, TypeScript/TSX, Scss, Google Tag Manager"]},{title:"Frontend Developer for Checkout Application.",description:["This application handled all business to client purchases and handled majority of the user account creation","Main Tasks were to connect with our purchase software, utilizing Recurly, to transfer payment information in a secure way, capture and send marketing data, utilizing Braze, related to the users activity throughout the application, update and manage content on the app: such as adding/removing promotional plans, adding new purchaseable certifications","Technology used: Vue 2, TypeScript, Scss, Recurly, Braze, Google Tag Manager"]},{title:"Frontend Developer for Marketing Site.",description:["This application was the main marketing site. This application provided information about what INE is and basic information about the various trainings, plans and products they sell.","This application was built by 2 different agencies, this was finally inherited by me to manage and improve the code functionality. My main job was to create the ability for marketing team to adjust the constant changing information using graphCMS","Technology used: Next.js, Typescript/TSX, Tailwind CSS, Braze, Google Tag Manager"]}],description:["INE provides subscription based services that provide educational material and certification courses for Cyber Security."]}],objective:" I am a full stack JavaScript engineer. I have experience developing in an agile work setting, which consisted of participating in daily standup meeting and bi-weekly sprints. I have experience with team collaboration and code reviews, and I have experience with API utilization. I have built a number of different projects, both personal and business applications, using API/Server calls."}];const A={class:"experienceCard"},E={class:"cardHeader"},L={class:"cardTitle"},V={class:"cardSubtitle"},B={class:"cardBody"},P={class:"cardDescription"},F=y(" Job Description: "),q={class:"cardItem"},N={class:"cardDescription"},R=y(" Key Roles: "),H={class:"cardItem"},G={data(){return{learnMore:!1}},computed:{handleLabel(){return this.learnMore?"Show Less":"Show More"}},methods:{handleToggle(){this.learnMore=!this.learnMore}}},U=Object.assign(G,{__name:"ExperienceCard",props:{title:{type:String,required:!0},company:{type:String,required:!0},roles:{type:Array,required:!0},description:{type:Array,required:!0}},setup(i){return(t,f)=>(o(),a("div",A,[e("div",E,[e("h3",L,r(i.title),1),e("h4",V,r(i.company),1)]),e("div",B,[e("div",P,[F,e("ul",null,[(o(!0),a(d,null,c(i.description,s=>(o(),a("li",q,r(s),1))),256))])]),e("div",N,[R,e("ul",null,[(o(!0),a(d,null,c(i.roles,s=>(o(),a("li",H,[e("div",null,r(s.title),1)]))),256))])])])]))}});var X=g(U,[["__scopeId","data-v-7a9e1cf0"]]);const J={methods:{close(){this.$emit("close")}}},K={class:"modal-backdrop"},O={class:"modal"},Q={class:"modal-header"},W={class:"modal-body"},Y={class:"modal-footer"};function Z(i,t,f,s,v,n){return o(),a("div",K,[e("div",O,[e("header",Q,[m(i.$slots,"header"),e("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=(...p)=>n.close&&n.close(...p))}," x ")]),e("section",W,[m(i.$slots,"body")]),e("footer",Y,[m(i.$slots,"footer"),e("button",{type:"button",class:"btn-green",onClick:t[1]||(t[1]=(...p)=>n.close&&n.close(...p))}," Close Modal ")])])])}var ee=g(J,[["render",Z]]);const b=i=>(C("data-v-9f3843d8"),i=i(),$(),i),te={class:"wrapper"},oe={class:"grid"},ae={class:"title"},ie=b(()=>e("img",{class:"profileImage",src:j},null,-1)),ne={class:"heading"},re={class:"links"},se=["href"],le=["href"],de=["href"],ce={class:"skills"},pe=b(()=>e("h1",{class:"Label"},"Skills",-1)),ue={class:"experience"},he=b(()=>e("h1",{class:"label"},"Professional Experience",-1)),fe={class:"objective"},ge={class:"objective_description"},me={data(){return{profile:u[0],subtitle:u[0].subtitle,objective:u[0].objective,jobs:u[0].jobs,skills:u[0].skills,isModalVisible:!1,modalData:[]}},methods:{openModal(i){this.modalData=i,console.log(this.modalData),this.isModalVisible=!0,this.$refs.PopupModal.focus()},closeModal(){this.isModalVisible=!1}}},_e=Object.assign(me,{__name:"ProfileSection",setup(i){return(t,f)=>{const s=_("font-awesome-icon"),v=_("RouterLink");return o(),a("div",te,[k(l(ee,{onClose:t.closeModal},{header:h(()=>[e("h3",null,r(t.modalData.title),1),e("h3",null,r(t.modalData.company),1)]),body:h(()=>[(o(!0),a(d,null,c(t.modalData.description,n=>(o(),a("div",null,[e("h3",null,r(n),1)]))),256)),(o(!0),a(d,null,c(t.modalData.roles,n=>(o(),a("div",null,[e("h3",null,r(n.title),1),e("ul",null,[(o(!0),a(d,null,c(n.description,p=>(o(),a("li",null,r(p),1))),256))])]))),256))]),footer:h(()=>[]),_:1},8,["onClose"]),[[S,t.isModalVisible]]),e("div",oe,[e("div",ae,[ie,e("div",ne,[e("h1",null,r(t.profile.title),1),(o(!0),a(d,null,c(t.subtitle,n=>(o(),a("h3",null,r(n),1))),256)),e("div",re,[e("a",{href:t.profile.linkedIn,target:"_blank"},[l(s,{icon:"fa-brands fa-linkedin",size:"2x"})],8,se),e("a",{href:t.profile.facebook,target:"_blank"},[l(s,{icon:"fa-brands fa-facebook-f",size:"2x"})],8,le),l(v,{to:"./resume"},{default:h(()=>[l(s,{icon:"fa-brands fa-readme",size:"2x"})]),_:1}),e("a",{href:t.profile.github,target:"_blank"},[l(s,{icon:"fa-brands fa-github-square",size:"2x"})],8,de)])])]),e("div",ce,[pe,e("ul",null,[(o(!0),a(d,null,c(t.skills,n=>(o(),a("li"))),256))])]),e("div",ue,[he,(o(!0),a(d,null,c(t.jobs,n=>(o(),I(X,{onClick:p=>t.openModal(n),bind:t.key,title:n.title,company:n.company,description:n.description,roles:n.roles},null,8,["onClick","bind","title","company","description","roles"]))),256))]),e("div",fe,[e("div",ge,r(t.objective),1)])])])}}});var be=g(_e,[["__scopeId","data-v-9f3843d8"]]);const xe={__name:"AboutView",setup(i){return(t,f)=>(o(),a(d,null,[l(z,{msg:"I BUILD FULL STACK DIGITAL ASSETS"}),l(be,{id:"me"})],64))}};export{xe as default};
