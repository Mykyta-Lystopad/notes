import {mainBtn} from "../../../../mainTemp";
import {componentsOfLang, frameWorks} from "../../../../models";
import {array} from "./array";
import {javaScript} from "../../javascript";
import {classes} from "./classes";

const appTemp = document.querySelector('#app')
export function dataTypes(){
    const data = `<div class="content">
                <div class="row">
                    <div class="col-sm">
                        <a href="https://learn.javascript.ru/types" target="_blank">
                            <h3 class="title">Типы данных</h3>
                        </a>
                    
                        <h5>Число (number)</h5>
                        <p>const num = 42 // integer</p>
                        <p>Number.MAX_SAFE_INTEGER = 9007199254740991 // максимальное число integer</p>
                        <p>Number.MIN_SAFE_INTEGER = -9007199254740991 // минимальное число integer</p>
                        <p>const float = 42.42 // float</p>
                        <p>const pow = 10e3 //  Добавление трех нулей (10000) </p>
                        <p>const number = 10**3 // Возвидение в степень (1000)</p>
                    </div>
                    <div class="col-sm">
                        <h5>Методы чисел</h5>
                        <p><strong>typeof</strong> 50 // number ( определяем тип данных )</p>
                        <p><strong>Math.pow(10, 3)</strong> // Возвидение в степень (1000)</p>
                        <p><strong>Math.sqrt(144)</strong> // корень квадратный из 144 ( 12 ) </p>
                        <p><strong>Math.abs(-42)</strong> // извлекаем модуль ( 42 ) </p>
                        <p><strong>Math.max(24, 12, 5, 44, 17)</strong> // вернет макимальное ( 44 ) </p>
                        <p><strong>Math.min(24, 12, 5, 44, 17)</strong> // минимальное ( 5 ) </p>
                        <p><strong>Math.floor(4.9)</strong> // 4 </p>
                        <p><strong>Math.ceil(4.1)</strong> // 5 </p>
                        <p><strong>Math.round(4.1)</strong> // простое округление 4 </p>
                        <p>Math.trunc(4.7)</strong> // вернет целую часть 4 </p>
                        <p><strong>function getRandom(min, max)</strong>{</p>
                        <p>return <strong>+(Math.random()</strong> * (max - min) + min)<strong>.toFixed(2)</strong></p>
                        <p>}</p>
                        <p>console.log(<strong>typeof</strong> getRandom(5, 7));</p>
                    </div>
                    <div class="col-sm">
                    <p><strong>isNaN(9 / undefined)</strong> // true</p>
                        <p>'42' + 42 // 4242</p>
                        <p><strong>+</strong>'42' + 42 // 84</p>
                        <p><strong>parseInt('42')</strong> + 42) // 84</p>
                        <p><strong>parseFloat('42.42')</strong> + 42) // 84.42</p>
                        <p>(0.4 + 0.2).toFixed(1)</strong> // обрезаем 0.6000000000000001 и получаем строку (0.6) </p>
                        <p><strong>BigInt(98878)</strong> // 98878n</p>
                        <p>parseInt(98878n) // 98878</p>
                        <p><strong>Math.E</strong> // 2.718281828459045</p>
                        <p><strong>Math.PI</strong> // 3.141592653589793</p>
                    </div>
                </div>
            </div>`


    appTemp.insertAdjacentHTML('beforeend', data)

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