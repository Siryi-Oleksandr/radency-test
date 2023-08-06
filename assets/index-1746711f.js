var A=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)};var c=(e,t,a)=>(A(e,t,"read from private field"),a?a.call(e):t.get(e)),y=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},v=(e,t,a,n)=>(A(e,t,"write to private field"),n?n.call(e,a):t.set(e,a),a);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const i={mainTable:document.getElementById("main-table"),summaryTable:document.getElementById("summary-table"),btnCreate:document.getElementById("btn-create"),btnEdit:document.getElementById("btn-edit"),btnArchiv:document.getElementById("btn-archiv"),btnDelete:document.getElementById("btn-delete"),btnArchivAll:document.getElementById("btn-archiv-all"),btnDeleteAll:document.getElementById("btn-delete-all"),formCreate:document.getElementById("form-create"),formEditContainer:document.getElementById("form-edit-container"),toggler:document.getElementById("toggler"),modalOverlay:document.querySelector(".js-overlay-modal")},$=[{id:"1",name:"Shopping list",created:"June 28, 2023",category:"Task",content:"Tomatoes, bread",dates:[]},{id:"2",name:"New feature",created:"April 25, 2023",category:"Random Thought",content:"I’m gonna have a dentist appointment on the 3/5/2023, I moved it from 5/5/2023",dates:["3/5/2023","3/5/2023"]},{id:"3",name:"The theory of evolution",created:"May 25, 2023",category:"Idea",content:"It is something increadable",dates:[]},{id:"4",name:"Books",created:"July 25, 2023",category:"Task",content:"Learn new material",dates:[]},{id:"5",name:"Who is God",created:"April 25, 2023",category:"Random Thought",content:"Who did create world?",dates:[]},{id:"6",name:"Pet project",created:"April 25, 2023",category:"Idea",content:"Create portfolio application",dates:[]},{id:"7",name:"Learn English",created:"March 25, 2023",category:"Task",content:"Order new courses in English",dates:[]}];function D(e){e.closest(".modal").classList.add("active"),i.modalOverlay.classList.add("active")}function L(e){e.closest(".modal").classList.remove("active"),i.modalOverlay.classList.remove("active"),e.reset()}function C(e){switch(e){case"Task":return"cart";case"Random Thought":return"bubble";case"Idea":return"lightbulb";default:return"lightbulb"}}function j(e){const t=e.target.className==="js-btn-delete"?e.target:e.target.closest("#btn-delete"),a=e.target.className==="js-btn-delete-all"?e.target:e.target.closest("#btn-delete-all"),n=e.target.className==="js-btn-edit"?e.target:e.target.closest("#btn-edit"),s=e.target.className==="js-btn-archive"?e.target:e.target.closest("#btn-archive"),o=e.target.className==="js-btn-unzip"?e.target:e.target.closest("#btn-unzip"),l=e.target.className==="js-btn-archive-all"?e.target:e.target.closest("#btn-archive-all"),g=e.target.className==="js-btn-unzip-all"?e.target:e.target.closest("#btn-unzip-all");return{btnArchive:s,btnDelete:t,btnEdit:n,btnUnzip:o,btnDeleteAll:a,btnArchiveAll:l,btnUnzipAll:g}}function E(e){return[...e].join(", ")}function f(e){return e.length>20?e.substring(0,20)+"...":e}function T(e){return`<table class="table">
  <thead>
    <tr class="table__head">
      <th></th>
      <th>Name</th>
      <th>Created</th>
      <th>Category</th>
      <th>Content</th>
      <th>Dates</th>
      <th class="options-wrapper">
        <button id="btn-archive-all" class="btn btn--head js-btn-archive-all" type="button">
          <svg class="icon" width="16" height="16">
            <use href="./images/sprite.svg#box-add"></use>
          </svg>
        </button>
        <button id="btn-delete-all" class="btn btn--head js-btn-delete-all" type="button">
          <svg class="icon" width="16" height="16">
            <use href="./images/sprite.svg#bin"></use>
          </svg>
        </button></th>
    </tr>
  </thead>
  <tbody class="table__body">
   ${e.map(t=>{const{id:a,name:n,created:s,category:o,content:l,dates:g}=t;return`<tr>
  <td>
    <span class="icon-wrapper">
      <svg width="16" height="16">
        <use href="./images/sprite.svg#${C(o)}"></use>
      </svg>
    </span>
  </td>
  <td>${f(n)}</td>
  <td>${s}</td>
  <td>${o}</td>
  <td>${f(l)}</td>
  <td>${E(g)}</td>
  <td class="options">
    <button id="btn-edit" class="btn js-btn-edit js-open-modal" type="button" data-task=${a} data-modal="2">
      <svg class="icon" width="16" height="16">
        <use href="./images/sprite.svg#pencil"></use>
      </svg>
    </button>
    <button id="btn-archive" class="btn js-btn-archive" type="button" data-task=${a}>
      <svg class="icon" width="16" height="16">
        <use href="./images/sprite.svg#box-add"></use>
      </svg>
    </button>
    <button id="btn-delete" class="btn js-btn-delete" type="button" data-task=${a}>
      <svg class="icon" width="16" height="16">
        <use href="./images/sprite.svg#bin"></use>
      </svg>
    </button>
  </td>
</tr>`}).join("")}
  </tbody>
</table>`}function k(e){return`<table class="table">
  <thead>
    <tr class="table__head">
      <th></th>
      <th>Name</th>
      <th>Created</th>
      <th>Category</th>
      <th>Content</th>
      <th>Dates</th>
      <th class="options-wrapper">
        <button id="btn-unzip-all" class="btn btn--head js-btn-unzip-all" type="button">
          <svg class="icon" width="16" height="16">
            <use href="./images/sprite.svg#box-remove"></use>
          </svg>
        </button>
       </th>
    </tr>
  </thead>
  <tbody class="table__body">
   ${e.map(t=>{const{id:a,name:n,created:s,category:o,content:l,dates:g}=t;return`<tr>
  <td>
    <span class="icon-wrapper">
      <svg width="16" height="16">
        <use href="./images/sprite.svg#${C(o)}"></use>
      </svg>
    </span>
  </td>
  <td>${f(n)}</td>
  <td>${s}</td>
  <td>${o}</td>
  <td>${f(l)}</td>
  <td>${(g==null?void 0:g.length)>1?E(g):""}</td>
  <td class="options">
    <button id="btn-unzip" class="btn js-btn-unzip" type="button" data-task=${a}>
      <svg class="icon" width="16" height="16">
        <use href="./images/sprite.svg#box-remove"></use>
      </svg>
    </button>
  </td>
</tr>`}).join("")}
  </tbody>
</table>`}let B=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,a)=>(a&=63,a<36?t+=a.toString(36):a<62?t+=(a-26).toString(36).toUpperCase():a>62?t+="-":t+="_",t),"");var d,u;const p=class p{constructor(t){y(this,d,void 0);y(this,u,void 0);v(this,d,t),v(this,u,[])}static _countTasksByCategory(t){const a={Task:0,Idea:0,"Random Thought":0};return t.reduce((n,s)=>{const o=s.category;return o in n&&n[o]++,n},a)}static _createFormatedDate(){const t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=new Date,n=t[a.getMonth()],s=a.getDate(),o=a.getFullYear();return`${n} ${s}, ${o}`}static _parseDates(t){const a=/\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/g;return t.match(a)||[]}createTask(t){const a={id:B(),name:t.name,created:p._createFormatedDate(),category:t.category,content:t.content,dates:p._parseDates(t.content)};return c(this,d).push(a),a}deleteTask(t){return v(this,d,c(this,d).filter(a=>a.id!==t)),!0}deleteAllTasks(){return v(this,d,[]),!0}archiveTask(t){const a=c(this,d).find(n=>n.id===t);return c(this,u).push(a),this.deleteTask(t),!0}archiveAllTasks(){return c(this,u).push(...c(this,d)),this.deleteAllTasks(),!0}editTask(t,a){const n={id:t,name:a.name,created:p._createFormatedDate(),category:a.category,content:a.content,dates:p._parseDates(a.content)},s=c(this,d).findIndex(o=>o.id===t);return s===-1&&console.error("Task not found"),c(this,d).splice(s,1,n),!0}unzipTask(t){const a=c(this,u).find(n=>n.id===t);return c(this,d).push(a),v(this,u,c(this,u).filter(n=>n.id!==t)),!0}unzipAllTasks(){return c(this,d).push(...c(this,u)),v(this,u,[]),!0}getTasks(){return c(this,d)}getTaskById(t){return c(this,d).find(a=>a.id===t)}getArchivedTasks(){return c(this,u)}getCountTasks(){return p._countTasksByCategory(c(this,d))}getCountArchivedTasks(){return p._countTasksByCategory(c(this,u))}};d=new WeakMap,u=new WeakMap;let w=p;function M(e){const t=new FormData(e),a={};return t.forEach((n,s)=>{a[s]=n}),a}function H(e){switch(e){case"Task":return`<option value="Task" selected>Task</option>
        <option value="Random Thought">Random Thought</option>
        <option value="Idea">Idea</option>`;case"Random Thought":return`<option value="Task">Task</option>
        <option value="Random Thought" selected>Random Thought</option>
        <option value="Idea">Idea</option>`;case"Idea":return`<option value="Task">Task</option>
        <option value="Random Thought">Random Thought</option>
        <option value="Idea" selected>Idea</option>`;default:return`<option value="Task" selected>Task</option>
        <option value="Random Thought">Random Thought</option>
        <option value="Idea">Idea</option>`}}function z(e){const{name:t,category:a,content:n}=e;return`
  <form id="form-edit" class="form-edit" action="/submit" method="post">
    <label for="name"
      >Name:
      <input type="text" id="name" name="name" value="${t}" required />
    </label>

    <label for="category"
      >Category:
      <select id="category" name="category">
        ${H(a)}
      </select>
    </label>

    <label for="content"
      >Content:
      <textarea id="content" name="content" required>${n}</textarea>
    </label>

    <input type="submit" value="Submit" />
  </form>`}function b(e,t){return` <table class="table table--summary">
    <thead>
      <tr class="table__head">
        <th></th>
        <th>Note Category</th>
        <th>Active</th>
        <th>Archived</th>
      </tr>
    </thead>
    <tbody class="table__body">
      <tr>
        <td>
          <span class="icon-wrapper">
            <svg width="16" height="16">
              <use href="./images/sprite.svg#cart"></use>
            </svg>
          </span>
        </td>
        <td>Task</td>
        <td>${e.Task}</td>
        <td>${t.Task}</td>
      </tr>
      <tr>
        <td>
          <span class="icon-wrapper">
            <svg width="16" height="16">
              <use href="./images/sprite.svg#lightbulb"></use>
            </svg>
          </span>
        </td>
        <td>Idea</td>
        <td>${e.Idea}</td>
        <td>${t.Idea}</td>
      </tr>
      <tr>
        <td>
          <span class="icon-wrapper">
            <svg width="16" height="16">
              <use href="./images/sprite.svg#bubble"></use>
            </svg>
          </span>
        </td>
        <td>Random Thought</td>
        <td>${e["Random Thought"]}</td>
        <td>${t["Random Thought"]}</td>
      </tr>
    </tbody>
  </table>`}const r=new w($);i.mainTable.innerHTML=T(r.getTasks());i.summaryTable.innerHTML=b(r.getCountTasks(),r.getCountArchivedTasks());i.formCreate.addEventListener("submit",R);i.mainTable.addEventListener("click",N);i.toggler.addEventListener("change",_);function R(e){e.preventDefault();try{const t=M(i.formCreate),{name:a,category:n,content:s}=t;if(!a||!n||!s)throw new Error("All fields are required.");r.createTask(t),i.mainTable.innerHTML=T(r.getTasks()),i.summaryTable.innerHTML=b(r.getCountTasks(),r.getCountArchivedTasks()),L(i.formCreate)}catch(t){console.error("Error:",t.message)}}function S(e,t,a){e.preventDefault();try{const n=M(t),{name:s,category:o,content:l}=n;if(!s||!o||!l)throw new Error("All fields are required.");r.editTask(a,n),i.mainTable.innerHTML=T(r.getTasks()),i.summaryTable.innerHTML=b(r.getCountTasks(),r.getCountArchivedTasks()),L(t)}catch(n){console.error("Error:",n.message)}}function N(e){const{btnArchive:t,btnDelete:a,btnEdit:n,btnUnzip:s,btnDeleteAll:o,btnArchiveAll:l,btnUnzipAll:g}=j(e);if(a){const m=a.dataset.task;try{if(r.deleteTask(m))i.mainTable.innerHTML=T(r.getTasks()),i.summaryTable.innerHTML=b(r.getCountTasks(),r.getCountArchivedTasks());else throw new Error(`Task with ID ${m} was not found.`)}catch(h){console.error("Error:",h.message)}}if(n){const m=n.dataset.task;i.formEditContainer.innerHTML=z(r.getTaskById(m));const h=document.getElementById("form-edit");D(h),h.addEventListener("submit",I=>S(I,h,m))}if(t){const m=t.dataset.task;try{if(r.archiveTask(m))i.mainTable.innerHTML=T(r.getTasks()),i.summaryTable.innerHTML=b(r.getCountTasks(),r.getCountArchivedTasks());else throw new Error(`Task with ID ${m} was not found.`)}catch(h){console.error("Error:",h.message)}}if(l&&(r.archiveAllTasks(),i.mainTable.innerHTML=T(r.getTasks()),i.summaryTable.innerHTML=b(r.getCountTasks(),r.getCountArchivedTasks())),s){const m=s.dataset.task;try{if(r.unzipTask(m))i.mainTable.innerHTML=k(r.getArchivedTasks()),i.summaryTable.innerHTML=b(r.getCountTasks(),r.getCountArchivedTasks());else throw new Error(`Task with ID ${m} was not found.`)}catch(h){console.error("Error:",h.message)}}g&&(r.unzipAllTasks(),i.mainTable.innerHTML=k(r.getArchivedTasks()),i.summaryTable.innerHTML=b(r.getCountTasks(),r.getCountArchivedTasks())),o&&(r.deleteAllTasks(),i.mainTable.innerHTML=T(r.getTasks()),i.summaryTable.innerHTML=b(r.getCountTasks(),r.getCountArchivedTasks()))}function _(){this.checked?i.mainTable.innerHTML=k(r.getArchivedTasks()):i.mainTable.innerHTML=T(r.getTasks())}(function(e){typeof e.matches!="function"&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(t){for(var a=this,n=(a.document||a.ownerDocument).querySelectorAll(t),s=0;n[s]&&n[s]!==a;)++s;return!!n[s]}),typeof e.closest!="function"&&(e.closest=function(t){for(var a=this;a&&a.nodeType===1;){if(a.matches(t))return a;a=a.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),a=document.querySelectorAll(".js-modal-close");e.forEach(function(n){n.addEventListener("click",function(s){s.preventDefault();var o=this.getAttribute("data-modal"),l=document.querySelector('.modal[data-modal="'+o+'"]');l.classList.add("active"),t.classList.add("active")})}),a.forEach(function(n){n.addEventListener("click",function(s){var o=this.closest(".modal");o.classList.remove("active"),t.classList.remove("active")})}),document.body.addEventListener("keyup",function(n){var s=n.keyCode;s==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});
