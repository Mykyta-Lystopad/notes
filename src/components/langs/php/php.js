import {firstPageTemplate, mainBtn} from "../../mainTemp";
import {componentsOfLang, frameWorks, mainLanguagesBtn} from "../../models";
import {purePhp} from "./purePHP/purePHP";

const appTemp = document.querySelector('#app')

export function php(){
    const pureJs = `<div class="content">
                            <div class="row">
                                <div class="col-sm">
                                    <h1>PHP</h1>
                                </div>
                            </div>
                    </div>`

    appTemp.insertAdjacentHTML('beforeend', pureJs)



    const compBtn = document.querySelectorAll('.btn')
    compBtn.forEach(comp=> {
        comp.addEventListener('click', () => {
            console.log(comp)
            const arr = [
                {name:'PurePHP',get value(){mainBtn(componentsOfLang('PHP', comp.innerHTML)); purePhp()}},
                {name:'Laravel',get value(){mainBtn(componentsOfLang('PHP', comp.innerHTML)); purePhp()}},
                {name:'Back',get value(){ mainBtn(mainLanguagesBtn); firstPageTemplate()}},
            ]
            arr.forEach(item => item.name === comp.innerHTML
                ? (appTemp.innerHTML = '', item.value)
                : false)
        })
    })
}