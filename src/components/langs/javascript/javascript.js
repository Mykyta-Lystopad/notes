import {firstPageTemplate, mainBtn} from "../../mainTemp";
import {componentsOfLang, mainLanguagesBtn} from "../../models";
import {pureJS} from "./pureJSTemplates/pureJS";
import {react} from "./react";
import {angular} from "./angular";
import {vue} from "./vue";
import {ember} from "./ember";
import {node} from "./node";

const appTemp = document.querySelector('#app')
export function javaScript() {

    console.log('hi from javaScript')
    const javaScript = `<div class="content">
                            <div class="row">
                                <div class="col-sm">
                                    <a href="https://learn.javascript.ru/" target="_blank">
                                        <h3 class="title">Learn JavaScript</h3>
                                    </a>
                                    <a href="https://developer.mozilla.org/ru/" target="_blank">
                                        <h3 class="title">MDN Web Docs - Mozilla</h3>
                                    </a>
                               
                                </div>
                            </div>
                        </div>`

    appTemp.insertAdjacentHTML('beforeend', javaScript)

    const langsComponentBtn = document.querySelectorAll('.btn')

    langsComponentBtn.forEach(comp => {
        console.log(comp.innerHTML)
        comp.addEventListener('click', () => {
            console.log(comp)
            const arr = [
                {name:'PureJS',get value(){mainBtn(componentsOfLang('JavaScript', comp.innerHTML)); pureJS()}},
                {name:'React',get value(){mainBtn(componentsOfLang('JavaScript', comp.innerHTML)); react()}},
                {name:'Angular',get value(){ mainBtn(componentsOfLang('JavaScript', comp.innerHTML)); angular()}},
                {name:'Vue',get value(){mainBtn(componentsOfLang('JavaScript', comp.innerHTML)); vue()}},
                {name:'Ember',get value(){mainBtn(componentsOfLang('JavaScript', comp.innerHTML)); ember()}},
                {name:'Node',get value(){mainBtn(componentsOfLang('JavaScript', comp.innerHTML)); node()}},
                {name:'Back',get value(){ mainBtn(mainLanguagesBtn); firstPageTemplate()}},
            ]
            arr.forEach(item => item.name === comp.innerHTML
                ? (appTemp.innerHTML = '', item.value)
                : false)
        })

    })
}