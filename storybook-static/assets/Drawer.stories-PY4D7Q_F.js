import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-BX1bmF3q.js";import{m as v,c as y}from"./cn-Cu1oTNr2.js";import{A as C}from"./index-CDD_YbyL.js";import{B as r}from"./Button-CjDRLm9K.js";import{I as d}from"./Input-Dhx7yJC5.js";import{A as D}from"./Avatar-DBXzDxFp.js";import{B as S}from"./Badge-DUqPitaB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C46wqaXo.js";const A=(l,t)=>{const a="fixed z-50 bg-[#0f0f17] flex flex-col shadow-[0_24px_80px_rgba(0,0,0,0.7)]",s={left:"top-0 left-0 h-full border-r border-white/8",right:"top-0 right-0 h-full border-l border-white/8",top:"top-0 left-0 w-full border-b border-white/8",bottom:"bottom-0 left-0 w-full border-t border-white/8"},n={left:{sm:"w-64",md:"w-80",lg:"w-96",full:"w-full"},right:{sm:"w-64",md:"w-80",lg:"w-96",full:"w-full"},top:{sm:"h-48",md:"h-64",lg:"h-96",full:"h-full"},bottom:{sm:"h-48",md:"h-64",lg:"h-96",full:"h-full"}};return y(a,s[l],n[l][t])},B=l=>({left:{initial:{x:"-100%"},animate:{x:0},exit:{x:"-100%"}},right:{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"}},top:{initial:{y:"-100%"},animate:{y:0},exit:{y:"-100%"}},bottom:{initial:{y:"100%"},animate:{y:0},exit:{y:"100%"}}})[l],i=({open:l,onClose:t,placement:a="right",size:s="md",title:n,description:f,children:x,footer:h,hideClose:b,closeOnOverlay:w=!0,className:N})=>{o.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[l]),o.useEffect(()=>{const g=k=>{k.key==="Escape"&&t()};return l&&window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[l,t]);const u=B(a),j=A(a,s);return e.jsx(C,{children:l&&e.jsxs("div",{className:"fixed inset-0 z-50",children:[e.jsx(v.div,{className:"absolute inset-0 bg-black/70 backdrop-blur-sm",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:w?t:void 0}),e.jsxs(v.div,{className:y(j,N),initial:u.initial,animate:u.animate,exit:u.exit,transition:{duration:.3,ease:[.16,1,.3,1]},children:[(a==="bottom"||a==="top")&&e.jsx("div",{className:"flex justify-center py-3 flex-shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-white/15 rounded-full"})}),(n||!b)&&e.jsxs("div",{className:"flex items-start justify-between px-6 py-5 border-b border-white/5 flex-shrink-0",children:[e.jsxs("div",{children:[n&&e.jsx("h2",{className:"text-white font-black text-lg tracking-tight",children:n}),f&&e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:f})]}),!b&&e.jsx("button",{onClick:t,className:"text-gray-600 hover:text-gray-300 transition-colors ml-4 flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white/5",children:"✕"})]}),x&&e.jsx("div",{className:"flex-1 overflow-y-auto px-6 py-4",children:x}),h&&e.jsx("div",{className:"px-6 pb-6 pt-4 border-t border-white/5 flex-shrink-0",children:h})]})]})})};i.displayName="Drawer";i.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hideClose:{required:!1,tsType:{name:"boolean"},description:""},closeOnOverlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"TheX/Drawer",component:i,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Drawer

A slide-in panel from any direction with smooth spring animations, backdrop blur, and keyboard support.

## AI Prompt
\`\`\`
Build a Drawer component using React, TypeScript, Framer Motion and CVA.
Placements: left, right, top, bottom with matching slide animations.
Sizes: sm, md, lg, full.
Features: backdrop blur, ESC close, scroll lock, drag handle for top/bottom.
Header, scrollable body, sticky footer slots.
Dark theme.
\`\`\`
        `}}},tags:["autodocs"]},c={render:()=>{const[l,t]=o.useState(null);return e.jsxs("div",{className:"flex flex-wrap gap-3 p-6",style:{background:"#0a0a0f"},children:[["left","right","top","bottom"].map(a=>e.jsxs(r,{variant:"secondary",onClick:()=>t(a),children:["Open ",a]},a)),["left","right","top","bottom"].map(a=>e.jsx(i,{open:l===a,onClose:()=>t(null),placement:a,title:`${a.charAt(0).toUpperCase()+a.slice(1)} Drawer`,description:"Slides in from the side.",footer:e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx(r,{variant:"ghost",onClick:()=>t(null),children:"Cancel"}),e.jsx(r,{variant:"primary",onClick:()=>t(null),children:"Confirm"})]}),children:e.jsxs("p",{className:"text-gray-400 text-sm leading-relaxed",children:["This drawer slides in from the ",a,". Press ESC or click outside to close."]})},a))]})}},m={render:()=>{const[l,t]=o.useState(!1),a=[{icon:"📊",label:"Dashboard"},{icon:"📈",label:"Analytics"},{icon:"💼",label:"Portfolio"},{icon:"🔔",label:"Alerts",badge:"3"},{icon:"⚙️",label:"Settings"}];return e.jsxs("div",{className:"p-6",style:{background:"#0a0a0f"},children:[e.jsx(r,{onClick:()=>t(!0),leftIcon:e.jsx("span",{children:"☰"}),children:"Open Nav"}),e.jsx(i,{open:l,onClose:()=>t(!1),placement:"left",hideClose:!0,children:e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[e.jsx(D,{name:"Daniel Elemide",size:"md",status:"online"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white font-bold text-sm",children:"Daniel Elemide"}),e.jsx("p",{className:"text-gray-500 text-xs",children:"Full Stack Developer"})]})]}),e.jsx("nav",{className:"flex flex-col gap-1",children:a.map(s=>e.jsxs("button",{className:"flex items-center justify-between px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium",onClick:()=>t(!1),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{children:s.icon}),s.label]}),s.badge&&e.jsx(S,{variant:"error",size:"sm",children:s.badge})]},s.label))})]})})]})}},p={render:()=>{const[l,t]=o.useState(!1);return e.jsxs("div",{className:"p-6",style:{background:"#0a0a0f"},children:[e.jsx(r,{onClick:()=>t(!0),children:"Add New User"}),e.jsx(i,{open:l,onClose:()=>t(!1),placement:"right",title:"Add New User",description:"Fill in the details below.",footer:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(r,{variant:"ghost",fullWidth:!0,onClick:()=>t(!1),children:"Cancel"}),e.jsx(r,{variant:"primary",fullWidth:!0,children:"Create User"})]}),children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(d,{label:"Full Name",placeholder:"Daniel Elemide"}),e.jsx(d,{label:"Email",type:"email",placeholder:"daniel@thex.dev"}),e.jsx(d,{label:"Role",placeholder:"Developer"}),e.jsx(d,{label:"Password",type:"password",placeholder:"••••••••"})]})})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [placement, setPlacement] = useState<'left' | 'right' | 'top' | 'bottom' | null>(null);
    return <div className="flex flex-wrap gap-3 p-6" style={{
      background: '#0a0a0f'
    }}>
        {(['left', 'right', 'top', 'bottom'] as const).map(p => <Button key={p} variant="secondary" onClick={() => setPlacement(p)}>
            Open {p}
          </Button>)}
        {(['left', 'right', 'top', 'bottom'] as const).map(p => <Drawer key={p} open={placement === p} onClose={() => setPlacement(null)} placement={p} title={\`\${p.charAt(0).toUpperCase() + p.slice(1)} Drawer\`} description="Slides in from the side." footer={<div className="flex gap-3 justify-end">
                <Button variant="ghost" onClick={() => setPlacement(null)}>Cancel</Button>
                <Button variant="primary" onClick={() => setPlacement(null)}>Confirm</Button>
              </div>}>
            <p className="text-gray-400 text-sm leading-relaxed">
              This drawer slides in from the {p}. Press ESC or click outside to close.
            </p>
          </Drawer>)}
      </div>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const navItems = [{
      icon: '📊',
      label: 'Dashboard'
    }, {
      icon: '📈',
      label: 'Analytics'
    }, {
      icon: '💼',
      label: 'Portfolio'
    }, {
      icon: '🔔',
      label: 'Alerts',
      badge: '3'
    }, {
      icon: '⚙️',
      label: 'Settings'
    }];
    return <div className="p-6" style={{
      background: '#0a0a0f'
    }}>
        <Button onClick={() => setOpen(true)} leftIcon={<span>☰</span>}>
          Open Nav
        </Button>
        <Drawer open={open} onClose={() => setOpen(false)} placement="left" hideClose>
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-8">
              <Avatar name="Daniel Elemide" size="md" status="online" />
              <div>
                <p className="text-white font-bold text-sm">Daniel Elemide</p>
                <p className="text-gray-500 text-xs">Full Stack Developer</p>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map(item => <button key={item.label} className="flex items-center justify-between px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-3">
                    <span>{item.icon}</span>
                    {item.label}
                  </div>
                  {item.badge && <Badge variant="error" size="sm">{item.badge}</Badge>}
                </button>)}
            </nav>
          </div>
        </Drawer>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-6" style={{
      background: '#0a0a0f'
    }}>
        <Button onClick={() => setOpen(true)}>Add New User</Button>
        <Drawer open={open} onClose={() => setOpen(false)} placement="right" title="Add New User" description="Fill in the details below." footer={<div className="flex gap-3">
              <Button variant="ghost" fullWidth onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" fullWidth>Create User</Button>
            </div>}>
          <div className="flex flex-col gap-4">
            <Input label="Full Name" placeholder="Daniel Elemide" />
            <Input label="Email" type="email" placeholder="daniel@thex.dev" />
            <Input label="Role" placeholder="Developer" />
            <Input label="Password" type="password" placeholder="••••••••" />
          </div>
        </Drawer>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const V=["AllPlacements","NavigationDrawer","FormDrawer"];export{c as AllPlacements,p as FormDrawer,m as NavigationDrawer,V as __namedExportsOrder,_ as default};
