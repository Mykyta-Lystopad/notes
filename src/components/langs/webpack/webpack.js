import {firstPageTemplate, mainBtn} from "../../mainTemp";
import {componentsOfLang, mainLanguagesBtn} from "../../models";

const appTemp = document.querySelector('#app')

export function webpack(){
    const webpackTemp = `<div class="content">
                            <div class="row">
                                <div class="col-sm">
                                    <a href="https://webpack.js.org/guides/getting-started/" target="_blank">
                                        <h3 class="title">Webpack</h3>
                                    </a>
                                    <p><strong>webpack</strong> // запустить сборку</p>
                                    <p><strong>npm run start</strong> // запуск сборки</p>
                                    <p><strong>npm run build</strong> // собрать проект на выгрузка (Деплой (deploy))</p>
                                     <p>In <strong>package.json:</strong></p>
                                    <p>"scripts": { </p>
                                    <p>"test": "echo \\"Error: no test specified\\" && exit 1",</p>
                                    <p>"start": "cross-env NODE_ENV=development webpack serve --open",</p>
                                    <p>"build": "cross-env NODE_ENV=production webpack --mode production"</p>
                                    <p>},</p>
                                    <p><strong>"browserslist": "> 0.25%, not dead"</strong> // выносим конфигурацию для babel</p>
                                    <p>Режимы сборки</p>
                                    <p><strong>npm i -D cross-env</strong></p>
                                    <p></p>
                                    
                                    <p></p>
                                </div>
                                
                                <div class="col-sm">
                                    <div class="img">
                                        <img src="./images/webpack/img_1.png" alt="isProd-json">
                                    </div>
                                </div>    
                                <div class="col-sm">    
                                    <div class="img">
                                        <img src="./images/webpack/img_2.png" alt="isProd-json">
                                    </div>
                                    
                                </div>
                                
                            </div>
                    </div>`

    appTemp.insertAdjacentHTML('beforeend', webpackTemp)



    const compBtn = document.querySelectorAll('.btn')
    compBtn.forEach(comp=> {
        comp.addEventListener('click', () => {
            console.log(comp)
            const arr = [
                {name:'Back',get value(){ mainBtn(mainLanguagesBtn); firstPageTemplate()}},
            ]
            arr.forEach(item => item.name === comp.innerHTML
                ? (appTemp.innerHTML = '', item.value)
                : false)
        })
    })
}