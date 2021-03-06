import {array} from "./components/array";
import {mainBtn} from "../../../mainTemp";
import {componentsOfLang, frameWorks} from "../../../models";
import {classes} from "./components/classes";
import {javaScript} from "../javascript";
import {dataTypes} from "./components/dataTypes";

const appTemp = document.querySelector('#app')

export function pureJS() {

    pureJsTemplate()

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

function pureJsTemplate(){
    const pureJS = `<div class="content">
                        <div class="row">
                            <div class="col-sm">
                                <h3>PureJS</h3>
                                <p>Пиши что хочешь)</p>
                            </div>
                        </div>
                    </div>`

    appTemp.insertAdjacentHTML('beforeend', pureJS)

}