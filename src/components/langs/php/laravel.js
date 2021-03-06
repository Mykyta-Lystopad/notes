
import {mainBtn} from "../../mainTemp";
import {componentsOfLang, frameWorks} from "../../models";

const appTemp = document.querySelector('#app')
export function laravel() {

    const laravel = `<div class="content">
                        <div class="row">
                            <div class="col-sm">
                                <h3>Laravel</h3>
                                <p>Пиши что хочешь)</p>
                            </div>
                        </div>
                    </div>`

    appTemp.insertAdjacentHTML('beforeend', laravel)

    const compBtn = document.querySelectorAll('.btn')
    compBtn.forEach(comp=> {
        comp.addEventListener('click', () => {
            console.log(comp)
            const arr = [
                {name:'Типы данных',get value(){mainBtn(componentsOfLang('JavaScript', comp.innerHTML).parts.value); type()}},
                {name:'Операторы',get value(){mainBtn(componentsOfLang('JavaScript', comp.innerHTML).parts.value); react()}},
                {name:'Циклы',get value(){ mainBtn(componentsOfLang('JavaScript', comp.innerHTML).parts.value); angular()}},
                {name:'Функции',get value(){mainBtn(componentsOfLang('JavaScript', comp.innerHTML).parts.value); vue()}},
                {name:'Массивы',get value(){mainBtn(componentsOfLang('JavaScript', comp.innerHTML).parts.value); array()}},
                {name:'Обьекты',get value(){mainBtn(componentsOfLang('JavaScript', comp.innerHTML).parts.value); node()}},
                {name:'Классы',get value(){mainBtn(componentsOfLang('JavaScript', comp.innerHTML).parts.value); classes()}},
                {name:'Back',get value(){mainBtn(frameWorks('JavaScript').frameWorks.value); javaScript()}},
            ]
            arr.forEach(item=>{
                if(item.name === comp.innerHTML){
                    appTemp.innerHTML = ''
                    item.value
                }
            })
        })
    })

}