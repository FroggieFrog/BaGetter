"use strict";(self.webpackChunkba_getter=self.webpackChunkba_getter||[]).push([[796],{928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=n(5893),r=n(1151);const o={},a="Run BaGetter on Docker",i={id:"Installation/docker",title:"Run BaGetter on Docker",description:"Configure BaGetter (optional)",source:"@site/docs/Installation/docker.md",sourceDirName:"Installation",slug:"/Installation/docker",permalink:"/docs/Installation/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/bagetter/bagetter.github.io/tree/main/docs/Installation/docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Run BaGetter on Azure",permalink:"/docs/Installation/azure"},next:{title:"Run BaGetter on Google Cloud Platform",permalink:"/docs/Installation/gcp"}},l={},c=[{value:"Configure BaGetter (optional)",id:"configure-bagetter-optional",level:2},{value:"Run BaGetter",id:"run-bagetter",level:2},{value:"Publish packages",id:"publish-packages",level:2},{value:"Browse packages",id:"browse-packages",level:2},{value:"Restore packages",id:"restore-packages",level:2},{value:"Symbol server",id:"symbol-server",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"run-bagetter-on-docker",children:"Run BaGetter on Docker"}),"\n",(0,s.jsx)(t.h2,{id:"configure-bagetter-optional",children:"Configure BaGetter (optional)"}),"\n",(0,s.jsxs)(t.p,{children:["Create a file named ",(0,s.jsx)(t.code,{children:"bagetter.env"})," to store BaGetter's configurations:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"# The following config is the API Key used to publish packages.\n# You should change this to a secret value to secure your server.\nApiKey=NUGET-SERVER-API-KEY\n\nStorage__Type=FileSystem\nStorage__Path=/data\nDatabase__Type=Sqlite\nDatabase__ConnectionString=Data Source=/data/db/bagetter.db\nSearch__Type=Database\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For a full list of configurations, please refer to ",(0,s.jsx)(t.a,{href:"/docs/configuration",children:"BaGetter's configuration"})," guide."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"bagetter.env"})," file stores ",(0,s.jsx)(t.a,{href:"../configuration",children:"BaGetter's configuration"})," as environment variables.\nTo learn how these configurations work, please refer to ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-2.1&tabs=basicconfiguration#configuration-by-environment",children:"ASP.NET Core's configuration documentation"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["If this step is omitted the default mode (unconfigured) will be Sqlite with the sql blobs stored in the path ",(0,s.jsx)(t.code,{children:"/data/db/bagetter.db"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"run-bagetter",children:"Run BaGetter"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Create a folder named ",(0,s.jsx)(t.code,{children:"bagetter-data"})," in the same directory as the ",(0,s.jsx)(t.code,{children:"bagetter.env"})," file. This will be used by BaGetter to persist its state."]}),"\n",(0,s.jsxs)(t.li,{children:["Pull BaGetter's latest ",(0,s.jsx)(t.a,{href:"hhttps://hub.docker.com/r/bagetter/bagetter",children:"docker image"}),":"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"docker pull bagetter/bagetter\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can now run BaGetter..."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["...with optional ",(0,s.jsx)(t.code,{children:".env"})," file:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'docker run --rm --name nuget-server -p 5000:8080 --env-file bagetter.env -v "$(pwd)/bagetter-data:/data" bagetter/bagetter:latest\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"...or without:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'docker run --rm --name nuget-server -p 5000:8080 -v "$(pwd)/bagetter-data:/data" bagetter/bagetter:latest\n'})}),"\n",(0,s.jsx)(t.h2,{id:"publish-packages",children:"Publish packages"}),"\n",(0,s.jsx)(t.p,{children:"Publish your first package with:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"dotnet nuget push -s http://localhost:5000/v3/index.json -k NUGET-SERVER-API-KEY package.1.0.0.nupkg\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Publish your first ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/nuget/create-packages/symbol-packages-snupkg",children:"symbol package"})," with:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"dotnet nuget push -s http://localhost:5000/v3/index.json -k NUGET-SERVER-API-KEY symbol.package.1.0.0.snupkg\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["The default API Key to publish packages is ",(0,s.jsx)(t.code,{children:"NUGET-SERVER-API-KEY"}),".\nYou should change this to a secret value to secure your server. See ",(0,s.jsx)(t.a,{href:"#configure-bagetter-optional",children:"Configure BaGetter"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"browse-packages",children:"Browse packages"}),"\n",(0,s.jsxs)(t.p,{children:["You can browse packages by opening the URL ",(0,s.jsx)(t.a,{href:"http://localhost:5000/",children:(0,s.jsx)(t.code,{children:"http://localhost:5000/"})})," in your browser."]}),"\n",(0,s.jsx)(t.h2,{id:"restore-packages",children:"Restore packages"}),"\n",(0,s.jsx)(t.p,{children:"You can restore packages by using the following package source:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"http://localhost:5000/v3/index.json"})}),"\n",(0,s.jsx)(t.p,{children:"Some helpful guides:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio#package-sources",children:"Visual Studio"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/nuget/reference/nuget-config-file#package-source-sections",children:"NuGet.config"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"symbol-server",children:"Symbol server"}),"\n",(0,s.jsx)(t.p,{children:"You can load symbols by using the following symbol location:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"http://localhost:5000/api/download/symbols"})}),"\n",(0,s.jsxs)(t.p,{children:["For Visual Studio, please refer to the ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/visualstudio/debugger/specify-symbol-dot-pdb-and-source-files-in-the-visual-studio-debugger?view=vs-2017#configure-symbol-locations-and-loading-options",children:"Configure Debugging"})," guide."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var s=n(7294);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);