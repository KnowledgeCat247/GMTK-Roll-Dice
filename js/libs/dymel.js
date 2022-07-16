const head=document.head;
const body=document.body;
const addIn = (parent,child)=>document.querySelector(parent).innerHTML+=child;
const getElement = (element,idx=0)=>[...document.querySelectorAll(element)][idx];
const getElementLocal = (element,parent,idx=0)=>[...document.querySelector(parent).querySelectorAll(element)][idx];
const getElements = (element)=>[...document.querySelectorAll(element)];
const getElementsLocal = (element,parent)=>[...document.querySelector(parent).querySelectorAll(element)];
const removeOneOf = (element,idx=0)=>[...document.querySelectorAll(element)][idx].outerHTML="";
const removeOneOfLocal = (parent,element,idx=0)=>[...document.querySelector(parent).querySelectorAll(element)][idx].outerHTML="";
const removeAll = (element)=>[...document.querySelectorAll(element)].forEach(el => el.outerHTML="");
const removeAllLocal = (element,parent)=>[...document.querySelector(parent).querySelectorAll(element)].forEach(el => el.outerHTML="");
const createTag = tag => (attribs="") => (classes=[],styles="") => (text="",id="",name="") => `<${tag} name="${name}" id="${id}" class="${classes.join(' ')}" ${attribs} style="${styles}">${text}</${tag}>`;
const div = createTag('div');
const img = createTag('img');
const p = createTag('p');
const h = num => createTag(`h${num}`);
const tab = createTag('tab')()([],"margin-left: 5px;")();
const span = createTag('span');
const style = createTag('style');
const audio = createTag('audio');
const linkTag = createTag('link');
const button = createTag('button');
const input = createTag('input');
const form = createTag('form');
const meta = createTag('meta');
const script = createTag('script');
const updateVariablesIn=el=>{
  el.innerHTML=el.innerHTML.replaceAll("#((","<dymelVar>").replaceAll("))","</dymelVar>").replaceAll("@|[","<dymelVarAttrib>").replaceAll("]|[","</dymelVarAttrib><dymelAttrib>").replaceAll("]||","</dymelAttrib>");
  getElementsLocal("dymelVar","#"+el.id).forEach(dv => {
    if (!dv.dataset.var) {
      dv.dataset.var=dv.innerHTML;
    }
    dv.innerHTML=window[dv.dataset.var];
  });
  let varsForAttribs=[];
  getElementsLocal("dymelVarAttrib","#"+el.id).forEach(dva => {
    dva.style.display="none";
    varsForAttribs.push(window[dva.innerHTML]);
  });
  getElementsLocal("dymelAttrib","#"+el.id).forEach((da,i) => {
    da.style.display="none";
    da.parentElement.setAttribute(da.innerHTML,varsForAttribs[i]);
  });
}
/*const html_to_json = el => {
  let htmlToJson = {
  tag:el.tagName.toLowerCase(),
  in:el.innerHTML,
  class:[...el.classList],
  id:getElement("#components").attributes.id.value,
  html:el
  }
  [...getElement("#components").attributes].forEach((attrib,i) => {
    htmlToJson[attrib.name]=[attrib.name,attrib.value];
  });
  return htmlToJson;
}
const json_to_html = json => {
  json.el.outerHTML=`<${tag} ${json}>${json.in}</${tag}>`
}*/
