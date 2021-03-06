import {mainBtn} from "../../../../mainTemp";
import {componentsOfLang, frameWorks} from "../../../../models";
import {php} from "../../php";
import {classesPhp} from "./classesPhp";

const appTemp = document.querySelector('#app')

export function arrayPhp(){
    const array = `<div class="content">
                        <div class="row">
                            <div class="col-sm">
                                <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">
                                    <h3 class="title">Классы</h3>
                                </a>
                            </div>
                        </div>
                    </div>`


    appTemp.insertAdjacentHTML('beforeend', array)

    const compBtn = document.querySelectorAll('.btn')
    compBtn.forEach(comp=> {
        comp.addEventListener('click', () => {
            console.log(comp)
            const arr = [
                {name:'Типы данных',get value(){mainBtn(componentsOfLang('PHP', 'PurePHP')); arrayPhp()}},
                {name:'Операторы',get value(){mainBtn(componentsOfLang('PHP','PurePHP')); classesPhp()}},
                {name:'Циклы',get value(){ mainBtn(componentsOfLang('PHP', 'PurePHP')); arrayPhp()}},
                {name:'Функции',get value(){mainBtn(componentsOfLang('PHP', 'PurePHP')); classesPhp()}},
                {name:'Массивы',get value(){mainBtn(componentsOfLang('PHP', 'PurePHP')); arrayPhp()}},
                {name:'Обьекты',get value(){mainBtn(componentsOfLang('PHP', 'PurePHP')); classesPhp()}},
                {name:'Классы',get value(){mainBtn(componentsOfLang('PHP', 'PurePHP')); arrayPhp()}},
                {name:'Back',get value(){mainBtn(frameWorks('PHP').frameWorks.value); php()}},
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