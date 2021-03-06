import {firstPageTemplate, mainBtn} from "../../mainTemp";
import {mainLanguagesBtn} from "../../models";

const appTemp = document.querySelector('#app')

export function webpack(){

    webpackTemplate()

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

function webpackTemplate() {
    const webpackTemp = `<div class="content">
                            <div class="row">
                                <div class="col-sm">
                                    <a href="https://webpack.js.org/guides/getting-started/" target="_blank">
                                        <h3 class="title">Webpack</h3>
                                    </a>
                                    <pre>
                                        <code>
                                            <span><strong>webpack</strong> // запустить сборку</span>
                                            <span><strong>npm run start</strong> // запуск сборки</span>
                                            <span><strong>npm run build</strong> // собрать проект на выгрузка (Деплой (deploy))</span>
                                            <span>In <strong>package.json:</strong></span>
                                            <span>"scripts": { </span>
                                            <span>"test": "echo \\"Error: no test specified\\" && exit 1",</span>
                                            <span>"start": "cross-env NODE_ENV=development webpack serve --open",</span>
                                            <span>"build": "cross-env NODE_ENV=production webpack --mode production"</span>
                                            <span>},</span>
                                            <span><strong>"browserslist": "> 0.25%, not dead"</strong> // выносим конфигурацию для babel</span>
                                            <span>Режимы сборки</span>
                                            <span><strong>npm i -D cross-env</strong></span>
                                            <span><strong>npm i -D eslint eslint-loader babel-eslint</strong></span>
                                            <span><strong>npm install -D --save-dev  eslint-config-google</strong></span>
                                            <span> </span>
                                        </code>
                                    </pre>
                                </div>
                                <div class="col-sm">
                                    <div class="img">
                                        <img src="./images/webpack/packagJson.png" alt="isProd-json">
                                    </div>
                                </div>    
                                <div class="col-sm">    
                                    <div class="img">
                                        <img src="./images/webpack/packagJson2.png" alt="isProd-json">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <pre>
                                        <code>                
                                            <span>Создаем в корневой папки <strong>.eslintrc & .eslintignore</strong></span>
                                            <span><strong>.eslint:</strong></span>
                                            <span>{</span>
                                            <span>  "parser": "babel-eslint",</span>
                                            <span>  "env": {</span>
                                            <span>  "es6": true,</span>
                                            <span>  "browser": true,</span>
                                            <span>  "node": true</span>
                                            <span>  },</span>
                                            <span>  "rules": {</span>
                                            <span>      "semi": "off",</span>
                                            <span>      "linebreak-style": "off",</span>
                                            <span>      "indent": "off",</span>
                                            <span>      "quotes": "off",</span>
                                            <span>      "comma-dangle": "off",</span>
                                            <span>      "comma-spacing": "off",</span>
                                            <span>      "no-multi-spaces": "off",</span>
                                            <span>      "space-before-blocks": "off",</span>
                                            <span>      "padded-blocks": "off",</span>
                                            <span>      "require-jsdoc": "off",</span>
                                            <span>      "eol-last": "off",</span>
                                            <span>      "no-multiple-empty-lines": "off",</span>
                                            <span>      "no-trailing-spaces": "off"</span>
                                            <span>  },</span>
                                            <span>  "extends": ["eslint:recommended", "google"]</span>
                                            <span>}</span>
                                            <span></span>
                                        </code>
                                    </pre>
                                </div>
                                
                                <div class="col-sm">
                                    <div class="img">
                                        <img src="./images/webpack/eslint.png" alt="isProd-json">
                                    </div>
                                </div>    
<!--                                <div class="col-sm">    -->
<!--                                    <div class="img">-->
<!--                                        <img src="./images/webpack/img_2.png" alt="isProd-json">-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                -->
                            </div>
                    </div>`

    appTemp.insertAdjacentHTML('beforeend', webpackTemp)



}