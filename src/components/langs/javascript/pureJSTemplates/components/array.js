import {mainBtn} from "../../../../mainTemp";
import {componentsOfLang, frameWorks, mainLanguages} from "../../../../models";
import {classes} from "./classes";
import {dataTypes} from "./dataTypes";
import {pureJS} from "../pureJS";

const appTemp = document.querySelector('#app')

export function array(){

    arrayJsTemplate()

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
                {name:'Back',get value(){mainBtn(frameWorks('JavaScript').frameWorks.value); pureJS()}},
            ]
            arr.forEach(item => item.name === comp.innerHTML
                ? (appTemp.innerHTML = '', item.value)
                : false)
        })
    })
}

function arrayJsTemplate(){
    const arr = `<div class="content">
                <div class="row">
                    <div class="col-sm">
                        <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">
                            <h3 class="title">Методы массивов</h3>
                        </a>
                        <p>let arr = [1, 2, 3, 4, 5];</p>
                        <br>
                        <p>arr.<strong>pop()</strong>------- удалить последний элемент (5)</p>
                        <p>arr.<strong>shift()</strong>------ удалить первый элемент (1)</p>
                        <p>arr.<strong>push(7)</strong>-----добавить элемент в конец (7)</p>
                        <p>arr.<strong>unshift(9)</strong>-- добавить первый элемент (9)</p>
                        <p>arr.<strong>shift(n)</strong>---- удалить n элемент считая спереди</p>
                        <br>
                        <p><strong>arr[arr.length -1]</strong> - получить последний элемент</p>
                        <br>
                        <p>let a = [ 'a', 'b' ]</p>
                        <p>let b = a ---- массив b есть ссылкой на массив а</p>
                        <p>let b = a.<strong>concat</strong>()  - сделать копию массива а</p>
                        <p>b.push('c')</p>
                        <p>a = [ 'a', 'b' ]</p>
                        <p>b = [ 'a', 'b', 'c' ]</p>
                        
                    </div>
                    <div class="col-sm">
                        <h4>Перебор массива</h4>
                        <p>let arr = [1, 2, 3, 4, 5];</p>
                        <h5>--- for</h5>
                        <p><strong>for</strong> (let i = 1; i < arr.length+1; i++) {</p>
                        <p>console.log(i) // 1 2 3 4 5</p>
                        <p>}</p>
                        <h5>--- forEach</h5>
                        <p>arr.<strong>forEach</strong>(function(item, i, mass) {</p>
                        <p>item-элемент, i-номер элем, mass-сам массив</p>
                        <p>}</p>
                        <h5>--- for (ES6+)</h5>
                        <p><strong>for</strong> (let key of arr) {</p>
                        <p>console.log(key) // выдаст все элементы в массиве (items)</p>
                        <p>}</p>
                        <p></p>
                    </div>
                     <div class="col-sm">
                        <br>
                        <p>let arr = ['Car', 'moto', 'bicycle', 'bus', 'airplane']</p>
                        <p>arr.<strong>reverse()</strong> // [ 'airplane', 'bus', 'bicycle', 'moto', 'Car' ]</p>
                        <p>arr.<strong>includes</strong>('bus') // true</p>
                        <p>let index = arr.<strong>indexOf</strong>('bus'); // 3</p>
                        <p>arr[index] // bus</p>
                        <p>let machine = arr.<strong>findIndex</strong>(item=>{</p>
                        <p>return item.horses === 500 // 3</p>
                        <p>})</p>
                        <p>let machine = arr.<strong>find</strong>(item=>{</p>
                        <p>return item.horses === 500 // { name: 'Car', horses: 500 }</p>
                        <p>})</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <br>
                        <p><strong>let arr</strong> = [ </p>
                        <p>{name: 'Car', horses: 500},</p>
                        <p>{name: 'moto', horses: 100},</p>
                        <p>{name: 'bicycle', horses: 0.2,},</p>
                        <p>{name: 'bus', horses: 600},</p>
                        <p>{name: 'airplane', horses: 1500}</p>
                        <p>]</p>
                        <p><strong>let newArr</strong> = []</p>
                        <p><strong>let mapping</strong> = arr.<strong>map</strong>(item=>{</p>
                        <p> return item.horses // [ 500, 100, 0.2, 600, 1500 ]</p>
                        <p> return item.horses > 500?<strong>newArr.push</strong>(item.horses):false // [ false, false, false, 1, 2 ]</p>
                        <p>})</p>
                        <p>console.log(<strong>newArr</strong>); // [ 600, 1500 ]</p>
                        <br>
                        <p><strong>let mapping</strong> = arr.<strong>filter</strong>(item=>{</p>
                        <p> return item.horses > 500</p>
                        <p>})</p>
                        <p>console.log(<strong>mapping</strong>); // [ { name: 'bus', horses: 600 }, { name: 'airplane', horses: 1500 } ]</p>
                        <br>
                        <p>let allHorses = arr</p>
                        <p>.<strong>filter</strong>(item=>item.horses>500) // [{ name: 'bus', horses: 600 }, { name: 'airplane', horses: 1500 }]</p>
                        <p>.<strong>reduce((sum, item)</strong>=>{ </p>
                        <p>return sum+=item.horses  // 2100</p>
                        <p>}, 0) // с нуля считать</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>`

    appTemp.insertAdjacentHTML('beforeend', arr)

}