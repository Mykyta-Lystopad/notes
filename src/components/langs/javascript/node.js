import {array} from "./pureJSTemplates/components/array";
import {mainBtn} from "../../mainTemp";
import {componentsOfLang, frameWorks} from "../../models";
import {classes} from "./pureJSTemplates/components/classes";
import {javaScript} from "./javascript";

const appTemp = document.querySelector('#app')
export function node() {
    const node = `<div class="content">
                        <div class="row">
                            <div class="col-sm">
                                <h3>Node</h3>
                                <p>Пиши что хочешь)</p>
                            </div>
                        </div>
                    </div>`

    appTemp.insertAdjacentHTML('beforeend', node)

    const compBtn = document.querySelectorAll('.btn')
    compBtn.forEach(btn=> {
        btn.addEventListener('click', () => {
            if (btn.innerHTML === 'Типы данных'){
                appTemp.innerHTML = ''
                mainBtn(componentsOfLang)
                array()

            } else if (btn.innerHTML === 'Операторы'){
                appTemp.innerHTML = ''
                mainBtn(componentsOfLang)
                array()

            } else if (btn.innerHTML === 'Циклы'){
                appTemp.innerHTML = ''
                mainBtn(componentsOfLang)
                array()
            } else if (btn.innerHTML === 'Функции') {
                appTemp.innerHTML = ''
                mainBtn(componentsOfLang)
                array()
            } else if (btn.innerHTML === 'Массивы'){
                appTemp.innerHTML = ''
                mainBtn(componentsOfLang)
                array()

            } else if (btn.innerHTML === 'Обьекты'){
                appTemp.innerHTML = ''
                mainBtn(componentsOfLang)
                array()

            } else if (btn.innerHTML === 'Классы'){
                appTemp.innerHTML = ''
                mainBtn(componentsOfLang)
                classes()

            } else if (btn.innerHTML === 'Back'){
                appTemp.innerHTML = ''
                mainBtn(frameWorks('JavaScript').frameWorks.value);
                javaScript(appTemp)
            }

        })
    })

}