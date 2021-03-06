import {mainBtn} from "../../../../mainTemp";
import {componentsOfLang, frameWorks} from "../../../../models";
import {array} from "./array";
import {javaScript} from "../../javascript";
import {dataTypes} from "./dataTypes";

const appTemp = document.querySelector('#app')
export function classes(){
    const classesJs = `<div class="content">
                <div class="row">
                    <div class="col-sm">
                        <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">
                            <h3 class="title">Классы</h3>
                        </a>
                    </div>
                </div>
            </div>`


    appTemp.insertAdjacentHTML('beforeend', classesJs)

    const compBtn = document.querySelectorAll('.btn')

    compBtn.forEach(comp=> {
        comp.addEventListener('click', () => {
            console.log(comp)
            const arr = [
                {name:'Типы данных',get value(){mainBtn(componentsOfLang('JavaScript', 'PureJS')); dataTypes()}},
                {name:'Операторы',get value(){mainBtn(componentsOfLang('JavaScript', 'PureJS')); classes()}},
                {name:'Циклы',get value(){ mainBtn(componentsOfLang('JavaScript', 'PureJS')); array()}},
                {name:'Функции',get value(){mainBtn(componentsOfLang('JavaScript', 'PureJS')); classes()}},
                {name:'Массивы',get value(){mainBtn(componentsOfLang('JavaScript', 'PureJS')); array()}},
                {name:'Обьекты',get value(){mainBtn(componentsOfLang('JavaScript', 'PureJS')); array()}},
                {name:'Классы',get value(){mainBtn(componentsOfLang('JavaScript', 'PureJS')); classes()}},
                {name:'Back',get value(){mainBtn(frameWorks('JavaScript').frameWorks.value); javaScript()}},
            ]
            arr.forEach(item => item.name === comp.innerHTML
                ? (appTemp.innerHTML = '', item.value)
                : false)
        })
    })
}