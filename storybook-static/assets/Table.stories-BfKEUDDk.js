import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BX1bmF3q.js";import{c as u,m as $}from"./cn-Cu1oTNr2.js";import{A as B}from"./index-CDD_YbyL.js";import{B as W}from"./Badge-DUqPitaB.js";import{A as K}from"./Avatar-DBXzDxFp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C46wqaXo.js";const F=({columns:t})=>e.jsx("tr",{className:"border-b border-white/3",children:Array.from({length:t}).map((l,d)=>e.jsx("td",{className:"px-4 py-3",children:e.jsx("div",{className:"h-4 bg-white/5 rounded animate-pulse",style:{width:`${60+Math.random()*40}%`}})},d))});function m({columns:t,data:l,loading:d,selectable:b,onRowClick:S,keyExtractor:N,emptyMessage:M="No data available",className:z,pagination:r}){const[g,T]=p.useState(null),[c,C]=p.useState(null),[w,j]=p.useState(new Set),[D,R]=p.useState(null),P=(a,n)=>N?N(a):String(n),_=a=>{g===a?(C(c==="asc"?"desc":c==="desc"?null:"asc"),c==="desc"&&T(null)):(T(a),C("asc"))},A=[...l].sort((a,n)=>{if(!g||!c)return 0;const s=a[g],o=n[g];return s===void 0||o===void 0?0:typeof s=="number"&&typeof o=="number"?c==="asc"?s-o:o-s:c==="asc"?String(s).localeCompare(String(o)):String(o).localeCompare(String(s))}),E=a=>{j(n=>{const s=new Set(n);return s.has(a)?s.delete(a):s.add(a),s})},J=()=>{w.size===l.length?j(new Set):j(new Set(l.map((a,n)=>P(a,n))))},q=r?Math.ceil(r.total/r.pageSize):1;return e.jsxs("div",{className:u("flex flex-col gap-0 w-full",z),children:[e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-white/8",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-white/8 bg-white/2",children:[b&&e.jsx("th",{className:"w-10 px-4 py-3",children:e.jsx("input",{type:"checkbox",checked:w.size===l.length&&l.length>0,onChange:J,className:"w-4 h-4 rounded accent-cyan-400 cursor-pointer"})}),t.map(a=>e.jsx("th",{className:u("px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500",a.sortable&&"cursor-pointer select-none hover:text-white transition-colors",a.align==="center"&&"text-center",a.align==="right"&&"text-right"),style:{width:a.width},onClick:()=>a.sortable&&_(String(a.key)),children:e.jsxs("div",{className:u("flex items-center gap-1",a.align==="center"&&"justify-center",a.align==="right"&&"justify-end"),children:[a.label,a.sortable&&e.jsx("span",{className:u("text-xs transition-colors",g===String(a.key)?"text-cyan-400":"text-gray-700"),children:g===String(a.key)&&c==="asc"?"▲":"▼"})]})},String(a.key)))]})}),e.jsx("tbody",{children:d?Array.from({length:5}).map((a,n)=>e.jsx(F,{columns:t.length+(b?1:0)},n)):A.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:t.length+(b?1:0),className:"px-4 py-12 text-center text-gray-600 text-sm",children:M})}):e.jsx(B,{children:A.map((a,n)=>{const s=P(a,n),o=w.has(s),L=D===s;return e.jsxs($.tr,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:n*.03,duration:.2},className:u("border-b border-white/3 transition-colors duration-150",S&&"cursor-pointer",o&&"bg-cyan-500/5",L&&!o&&"bg-white/3"),onMouseEnter:()=>R(s),onMouseLeave:()=>R(null),onClick:()=>S?.(a),children:[b&&e.jsx("td",{className:"w-10 px-4 py-3",onClick:i=>{i.stopPropagation(),E(s)},children:e.jsx("input",{type:"checkbox",checked:o,onChange:()=>E(s),className:"w-4 h-4 rounded accent-cyan-400 cursor-pointer"})}),t.map(i=>e.jsx("td",{className:u("px-4 py-3 text-sm text-gray-300",i.align==="center"&&"text-center",i.align==="right"&&"text-right"),children:i.render?i.render(a[i.key],a,n):String(a[i.key]??"")},String(i.key)))]},s)})})})]})}),r&&e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-t border-white/5",children:[e.jsxs("p",{className:"text-gray-600 text-xs",children:["Showing ",(r.page-1)*r.pageSize+1," to"," ",Math.min(r.page*r.pageSize,r.total)," of"," ",r.total," results"]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>r.onPageChange(r.page-1),disabled:r.page===1,className:"px-3 py-1.5 text-xs text-gray-400 hover:text-white bg-white/3 hover:bg-white/8 border border-white/8 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed",children:"← Prev"}),Array.from({length:Math.min(q,5)}).map((a,n)=>e.jsx("button",{onClick:()=>r.onPageChange(n+1),className:u("w-7 h-7 text-xs rounded-lg transition-all",r.page===n+1?"bg-cyan-500/20 text-cyan-400 border border-cyan-500/20":"text-gray-500 hover:text-white hover:bg-white/5"),children:n+1},n)),e.jsx("button",{onClick:()=>r.onPageChange(r.page+1),disabled:r.page===q,className:"px-3 py-1.5 text-xs text-gray-400 hover:text-white bg-white/3 hover:bg-white/8 border border-white/8 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed",children:"Next →"})]})]})]})}m.displayName="Table";m.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column",elements:[{name:"T"}],raw:"Column<T>"}],raw:"Column<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T) => void",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"void"}}},description:""},keyExtractor:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T) => string",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"string"}}},description:""},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No data available'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
}`,signature:{properties:[{key:"page",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}},{key:"total",value:{name:"number",required:!0}},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0}}]}},description:""}}};const Y={title:"TheX/Table",parameters:{layout:"padded",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Table

A fully featured data table with sorting, selection, pagination, custom renderers, and skeleton loading.

## AI Prompt
\`\`\`
Build a Table component using React, TypeScript, Tailwind CSS and Framer Motion.
Features: sortable columns, row selection with checkboxes, pagination,
custom cell renderers, skeleton loading state, hover highlight, empty state.
Animated row entrance. Dark theme with cyan accent.
\`\`\`
        `}}},tags:["autodocs"]},f=[{id:"1",name:"Daniel Elemide",email:"daniel@thex.dev",role:"Admin",status:"online",joined:"Jan 2024",revenue:12400},{id:"2",name:"Sarah Khan",email:"sarah@thex.dev",role:"Developer",status:"away",joined:"Mar 2024",revenue:8200},{id:"3",name:"John Doe",email:"john@thex.dev",role:"Designer",status:"offline",joined:"Feb 2024",revenue:6100},{id:"4",name:"Emma Wilson",email:"emma@thex.dev",role:"Developer",status:"online",joined:"Apr 2024",revenue:9800},{id:"5",name:"Mike Brown",email:"mike@thex.dev",role:"Manager",status:"online",joined:"Jan 2024",revenue:15200}],y={render:()=>e.jsx("div",{style:{background:"#0a0a0f",padding:"24px"},children:e.jsx(m,{data:f,keyExtractor:t=>t.id,columns:[{key:"name",label:"User",sortable:!0,render:(t,l)=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(K,{name:l.name,size:"sm",status:l.status}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white text-sm font-semibold",children:l.name}),e.jsx("p",{className:"text-gray-600 text-xs",children:l.email})]})]})},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status",render:t=>e.jsx(W,{variant:t==="online"?"success":t==="away"?"warning":"default",dot:!0,pulse:t==="online",children:String(t)})},{key:"joined",label:"Joined",sortable:!0},{key:"revenue",label:"Revenue",sortable:!0,align:"right",render:t=>e.jsxs("span",{className:"text-green-400 font-semibold",children:["$",t.toLocaleString()]})}]})})},h={render:()=>e.jsx("div",{style:{background:"#0a0a0f",padding:"24px"},children:e.jsx(m,{data:f,keyExtractor:t=>t.id,selectable:!0,onRowClick:t=>alert(`Clicked: ${t.name}`),columns:[{key:"name",label:"Name",sortable:!0},{key:"role",label:"Role"},{key:"joined",label:"Joined"}]})})},x={render:()=>{const[t,l]=p.useState(1);return e.jsx("div",{style:{background:"#0a0a0f",padding:"24px"},children:e.jsx(m,{data:f.slice((t-1)*2,t*2),keyExtractor:d=>d.id,columns:[{key:"name",label:"Name",sortable:!0},{key:"role",label:"Role"},{key:"revenue",label:"Revenue",sortable:!0,align:"right",render:d=>e.jsxs("span",{className:"text-green-400",children:["$",d.toLocaleString()]})}],pagination:{page:t,pageSize:2,total:f.length,onPageChange:l}})})}},v={render:()=>e.jsx("div",{style:{background:"#0a0a0f",padding:"24px"},children:e.jsx(m,{data:[],loading:!0,columns:[{key:"name",label:"Name"},{key:"role",label:"Role"},{key:"status",label:"Status"},{key:"revenue",label:"Revenue"}]})})},k={render:()=>e.jsx("div",{style:{background:"#0a0a0f",padding:"24px"},children:e.jsx(m,{data:[],emptyMessage:"No users found. Try adjusting your filters.",columns:[{key:"name",label:"Name"},{key:"role",label:"Role"},{key:"status",label:"Status"}]})})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#0a0a0f',
    padding: '24px'
  }}>
      <Table data={users} keyExtractor={row => row.id} columns={[{
      key: 'name',
      label: 'User',
      sortable: true,
      render: (_, row) => <div className="flex items-center gap-3">
                <Avatar name={row.name as string} size="sm" status={row.status} />
                <div>
                  <p className="text-white text-sm font-semibold">{row.name as string}</p>
                  <p className="text-gray-600 text-xs">{row.email as string}</p>
                </div>
              </div>
    }, {
      key: 'role',
      label: 'Role',
      sortable: true
    }, {
      key: 'status',
      label: 'Status',
      render: val => <Badge variant={val === 'online' ? 'success' : val === 'away' ? 'warning' : 'default'} dot pulse={val === 'online'}>
                {String(val)}
              </Badge>
    }, {
      key: 'joined',
      label: 'Joined',
      sortable: true
    }, {
      key: 'revenue',
      label: 'Revenue',
      sortable: true,
      align: 'right',
      render: val => <span className="text-green-400 font-semibold">
                \${(val as number).toLocaleString()}
              </span>
    }]} />
    </div>
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#0a0a0f',
    padding: '24px'
  }}>
      <Table data={users} keyExtractor={row => row.id} selectable onRowClick={row => alert(\`Clicked: \${row.name}\`)} columns={[{
      key: 'name',
      label: 'Name',
      sortable: true
    }, {
      key: 'role',
      label: 'Role'
    }, {
      key: 'joined',
      label: 'Joined'
    }]} />
    </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <div style={{
      background: '#0a0a0f',
      padding: '24px'
    }}>
        <Table data={users.slice((page - 1) * 2, page * 2)} keyExtractor={row => row.id} columns={[{
        key: 'name',
        label: 'Name',
        sortable: true
      }, {
        key: 'role',
        label: 'Role'
      }, {
        key: 'revenue',
        label: 'Revenue',
        sortable: true,
        align: 'right',
        render: val => <span className="text-green-400">\${(val as number).toLocaleString()}</span>
      }]} pagination={{
        page,
        pageSize: 2,
        total: users.length,
        onPageChange: setPage
      }} />
      </div>;
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#0a0a0f',
    padding: '24px'
  }}>
      <Table data={[]} loading columns={[{
      key: 'name',
      label: 'Name'
    }, {
      key: 'role',
      label: 'Role'
    }, {
      key: 'status',
      label: 'Status'
    }, {
      key: 'revenue',
      label: 'Revenue'
    }]} />
    </div>
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#0a0a0f',
    padding: '24px'
  }}>
      <Table data={[]} emptyMessage="No users found. Try adjusting your filters." columns={[{
      key: 'name',
      label: 'Name'
    }, {
      key: 'role',
      label: 'Role'
    }, {
      key: 'status',
      label: 'Status'
    }]} />
    </div>
}`,...k.parameters?.docs?.source}}};const Z=["Default","WithSelection","WithPagination","Loading","Empty"];export{y as Default,k as Empty,v as Loading,x as WithPagination,h as WithSelection,Z as __namedExportsOrder,Y as default};
