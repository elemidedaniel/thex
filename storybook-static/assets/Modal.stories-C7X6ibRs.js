import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-BX1bmF3q.js";import{c as C}from"./index-C46wqaXo.js";import{m as h,c as w}from"./cn-Cu1oTNr2.js";import{A as N}from"./index-CDD_YbyL.js";import{B as r}from"./Button-CjDRLm9K.js";import{I as m}from"./Input-Dhx7yJC5.js";import"./preload-helper-PPVm8Dsz.js";const S=C(["relative w-full bg-[#0f0f17]","border border-white/8","shadow-[0_24px_80px_rgba(0,0,0,0.7)]","flex flex-col","max-h-[90vh]"],{variants:{size:{sm:"max-w-sm rounded-2xl",md:"max-w-md rounded-2xl",lg:"max-w-lg rounded-2xl",xl:"max-w-xl rounded-2xl",full:"max-w-4xl rounded-2xl"},variant:{flat:"bg-[#0f0f17]",glass:"bg-white/5 backdrop-blur-xl"}},defaultVariants:{size:"md",variant:"flat"}}),o=({open:s,onClose:a,title:l,description:t,children:u,footer:f,hideClose:x,closeOnOverlay:g=!0,size:v,variant:b,className:k})=>(n.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[s]),n.useEffect(()=>{const y=j=>{j.key==="Escape"&&a()};return s&&window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[s,a]),e.jsx(N,{children:s&&e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[e.jsx(h.div,{className:"absolute inset-0 bg-black/70 backdrop-blur-sm",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:g?a:void 0}),e.jsxs(h.div,{className:w(S({size:v,variant:b}),k),initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{duration:.25,ease:[.16,1,.3,1]},children:[(l||!x)&&e.jsxs("div",{className:"flex items-start justify-between px-6 pt-6 pb-4 border-b border-white/5",children:[e.jsxs("div",{children:[l&&e.jsx("h2",{className:"text-white font-black text-lg tracking-tight",children:l}),t&&e.jsx("p",{className:"text-gray-500 text-sm mt-1",children:t})]}),!x&&e.jsx("button",{onClick:a,className:"text-gray-600 hover:text-gray-300 transition-colors ml-4 flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white/5",children:"✕"})]}),u&&e.jsx("div",{className:"flex-1 overflow-y-auto px-6 py-4",children:u}),f&&e.jsx("div",{className:"px-6 pb-6 pt-4 border-t border-white/5",children:f})]})]})}));o.displayName="Modal";o.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hideClose:{required:!1,tsType:{name:"boolean"},description:""},closeOnOverlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const A={title:"TheX/Modal",component:o,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Modal

A fully accessible modal dialog with spring animations, backdrop blur, keyboard support and scroll lock.

## AI Prompt
\`\`\`
Build a Modal component using React, TypeScript, Framer Motion and CVA.
Features: backdrop blur overlay, spring entrance animation, ESC key close,
scroll lock, close on overlay click.
Sizes: sm, md, lg, xl, full.
Variants: flat, glass.
Header with title and description, scrollable body, sticky footer.
Dark theme.
\`\`\`
        `}}},tags:["autodocs"]},i={render:()=>{const[s,a]=n.useState(!1);return e.jsxs("div",{className:"p-6",style:{background:"#0a0a0f"},children:[e.jsx(r,{onClick:()=>a(!0),children:"Open Modal"}),e.jsx(o,{open:s,onClose:()=>a(!1),title:"Welcome to TheX",description:"A next-generation React component library.",footer:e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx(r,{variant:"ghost",onClick:()=>a(!1),children:"Cancel"}),e.jsx(r,{variant:"primary",onClick:()=>a(!1),children:"Confirm"})]}),children:e.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:"TheX is a production-grade component library built with React, TypeScript, Tailwind CSS, and Framer Motion. Every component is fully accessible, animated, and documented."})})]})}},d={render:()=>{const[s,a]=n.useState(!1);return e.jsxs("div",{className:"p-6",style:{background:"#0a0a0f"},children:[e.jsx(r,{onClick:()=>a(!0),children:"Open Form Modal"}),e.jsx(o,{open:s,onClose:()=>a(!1),title:"Create Account",description:"Fill in your details to get started.",footer:e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx(r,{variant:"ghost",onClick:()=>a(!1),children:"Cancel"}),e.jsx(r,{variant:"primary",children:"Create Account"})]}),children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(m,{label:"Full Name",placeholder:"Daniel Elemide"}),e.jsx(m,{label:"Email",type:"email",placeholder:"daniel@example.com"}),e.jsx(m,{label:"Password",type:"password",placeholder:"••••••••"})]})})]})}},c={render:()=>{const[s,a]=n.useState(null),l=["sm","md","lg","xl","full"];return e.jsxs("div",{className:"flex flex-wrap gap-3 p-6",style:{background:"#0a0a0f"},children:[l.map(t=>e.jsx(r,{variant:"secondary",onClick:()=>a(t),children:t.toUpperCase()},t)),l.map(t=>e.jsx(o,{open:s===t,onClose:()=>a(null),size:t,title:`${t.toUpperCase()} Modal`,description:"This is a modal size demo.",footer:e.jsx("div",{className:"flex justify-end",children:e.jsx(r,{onClick:()=>a(null),children:"Close"})}),children:e.jsxs("p",{className:"text-gray-400 text-sm",children:["This is the ",t," size modal. It adapts its width based on the size prop."]})},t))]})}},p={render:()=>{const[s,a]=n.useState(!1);return e.jsxs("div",{className:"p-6",style:{background:"#0a0a0f"},children:[e.jsx(r,{onClick:()=>a(!0),children:"Glass Modal"}),e.jsx(o,{open:s,onClose:()=>a(!1),variant:"glass",title:"Glass Effect Modal",description:"Frosted glass backdrop blur effect.",footer:e.jsx("div",{className:"flex justify-end",children:e.jsx(r,{onClick:()=>a(!1),children:"Close"})}),children:e.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:"This modal uses the glass variant with backdrop blur for a frosted glass effect."})})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-6" style={{
      background: '#0a0a0f'
    }}>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Welcome to TheX" description="A next-generation React component library." footer={<div className="flex gap-3 justify-end">
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
            </div>}>
          <p className="text-gray-400 text-sm leading-relaxed">
            TheX is a production-grade component library built with React,
            TypeScript, Tailwind CSS, and Framer Motion. Every component is
            fully accessible, animated, and documented.
          </p>
        </Modal>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-6" style={{
      background: '#0a0a0f'
    }}>
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Create Account" description="Fill in your details to get started." footer={<div className="flex gap-3 justify-end">
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary">Create Account</Button>
            </div>}>
          <div className="flex flex-col gap-4">
            <Input label="Full Name" placeholder="Daniel Elemide" />
            <Input label="Email" type="email" placeholder="daniel@example.com" />
            <Input label="Password" type="password" placeholder="••••••••" />
          </div>
        </Modal>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);
    const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const;
    return <div className="flex flex-wrap gap-3 p-6" style={{
      background: '#0a0a0f'
    }}>
        {sizes.map(size => <Button key={size} variant="secondary" onClick={() => setOpenSize(size)}>
            {size.toUpperCase()}
          </Button>)}
        {sizes.map(size => <Modal key={size} open={openSize === size} onClose={() => setOpenSize(null)} size={size} title={\`\${size.toUpperCase()} Modal\`} description="This is a modal size demo." footer={<div className="flex justify-end">
                <Button onClick={() => setOpenSize(null)}>Close</Button>
              </div>}>
            <p className="text-gray-400 text-sm">
              This is the {size} size modal. It adapts its width based on the size prop.
            </p>
          </Modal>)}
      </div>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-6" style={{
      background: '#0a0a0f'
    }}>
        <Button onClick={() => setOpen(true)}>Glass Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} variant="glass" title="Glass Effect Modal" description="Frosted glass backdrop blur effect." footer={<div className="flex justify-end">
              <Button onClick={() => setOpen(false)}>Close</Button>
            </div>}>
          <p className="text-gray-400 text-sm leading-relaxed">
            This modal uses the glass variant with backdrop blur for a frosted glass effect.
          </p>
        </Modal>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const q=["Default","WithForm","Sizes","GlassVariant"];export{i as Default,p as GlassVariant,c as Sizes,d as WithForm,q as __namedExportsOrder,A as default};
