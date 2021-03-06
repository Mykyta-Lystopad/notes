import {frameWorks, mainLanguagesBtn} from './models'
import {javaScript} from "./langs/javascript/javascript";
import {php} from "./langs/php/php";
import {html} from "./langs/html/html";
import {css} from "./langs/css/css";
import {python} from "./langs/python/phyton";
import {java} from "./langs/java/java";
import {webpack} from "./langs/webpack/webpack";

const appTemp = document.querySelector('#app')

export function mainBtn(selector) {

    console.log(selector)

    const machineLangs = selector.map(btn => {
        console.log(btn)
        return ` <button class="btn btn-primary">${btn}</button>`
    }).join(' ')

    const buttonTemplate = `<div class="row">
                                <div class="btnBlock">
                                    ${machineLangs}
                                </div>
                            </div>`

    appTemp.insertAdjacentHTML('beforeend', buttonTemplate)

    // инициализация кнопок отрисованных на экран
    const langsBtn = document.querySelectorAll('.btn')

    langsBtn.forEach(langBtn => {
        langBtn.addEventListener('click', () => {
            const arr = [
                {name:'Html',get value(){mainBtn(frameWorks(langBtn.innerHTML).frameWorks.value); html()}},
                {name:'CSS',get value(){mainBtn(frameWorks(langBtn.innerHTML).frameWorks.value); css()}},
                {name:'JavaScript',get value(){ mainBtn(frameWorks(langBtn.innerHTML).frameWorks.value); javaScript()}},
                {name:'PHP',get value(){mainBtn(frameWorks(langBtn.innerHTML).frameWorks.value); php()}},
                {name:'Python',get value(){mainBtn(frameWorks(langBtn.innerHTML).frameWorks.value); python()}},
                {name:'Java',get value(){mainBtn(frameWorks(langBtn.innerHTML).frameWorks.value); java()}},
                {name:'Webpack',get value(){mainBtn(frameWorks(langBtn.innerHTML).frameWorks.value); webpack()}},
                {name:'Back',get value(){ mainBtn(mainLanguagesBtn); firstPageTemplate()}},
            ]
            arr.forEach(item => item.name === langBtn.innerHTML
                ? (appTemp.innerHTML = '', item.value)
                : false)
        })
    })

}

export function firstPageTemplate() {
    const firstPageTemplate = `<div class="content">
                                    <div class="row">
                                        <div class="col-sm">
                                            <a href="https://parceljs.org/getting_started.html" target="_blank">
                                                <h3 class="title">Parcel</h3>
                                            </a>
                                            <pre>
                                                <code>
                                                    <span>npm init</span>
                                                    <span> </span>
                                                    <span><strong>npm install parcel-bundler --save-dev</strong></span>
                                                    <span> </span>
                                                    <span>'scripts :{ </span>
                                                    <span>  "serve": "parcel src/index.html -p 8100 --open",</span>
                                                    <span>  "build": "build src/index.html --no-source-map"</span>
                                                    <span>},</span>
                                                </code>
                                            </pre>
                                        </div>
                                    </div> 
                                    <div class="row">
                                        <div class="col-sm">
                                            <a href="https://webpack.js.org/guides/getting-started/" target="_blank">
                                                <h3 class="title">Webpack</h3>
                                            </a>
                                             <pre>
                                                <code>
                                                    <span>npm init</span>
                                                    <span> </span>
                                                    <span><strong>npm install webpack webpack-cli --save-dev</strong></span>
                                                    <span> </span>
                                                    <span><strong>npm i -g webpack webpack-cli</strong></span>
                                                    <span> </span>
                                                    <span>Создаем в корне проекта <strong>webpack.config.js</strong></span>
                                                    <span> </span>
                                                    <span>const <strong>isProd = process.env.NODE_ENV = 'production'</strong></span>
                                                    <span>const <strong>isDev = !isProd</strong></span>
                                                    <span> </span>
                                                    <span>const <strong>jsLoaders</strong> = () => { </span>
                                                    <span>  const loaders = [{</span>
                                                    <span>      loader: "babel-loader",</span>
                                                    <span>      options: {</span>
                                                    <span>          presets: ['@babel/preset-env']</span>
                                                    <span>      }</span>
                                                    <span>  }]</span>
                                                    <span>  if (isDev){</span>
                                                    <span>      loaders.push('eslint-loader')</span>
                                                    <span>  }</span>
                                                    <span>  return loaders</span>
                                                    <span>}</span>
                                                    <span> </span>
                                                    <span>const <strong>filename = (ext) => isDev ? bundle.ext : bundle.[hash].ext</strong></span>
                                                    <span> </span>
                                                    <span><strong>module.exports</strong> = { </span>
                                                    <span>          target: 'web', // for reloaded browser page webpack v.5 & up</span>
                                                    <span>          context: path.resolve(__dirname,'src'),</span>
                                                    <span>          mode: "development",</span>
                                                    <span>          entry: ['@babel/polyfill','./index.js',], // точка входа в приложение</span>
                                                    <span>          output: {</span>
                                                    <span>              filename: filename('js')</span>
                                                    <span>              path: path.resolve(__dirname,'dist')</span>
                                                    <span>          },</span>
                                                    <span><strong><a href="https://webpack.js.org/configuration/devtool/">devtool:</a></strong> isProd ? 'source-map' : false,</span>
                                                    <span>        devServer: {</span>
                                                    <span>          port: 3000,</span>
                                                    <span>          hot: isDev,</span>
                                                    <span>        }</span>
                                                    <span><strong>resolve:</strong> {</span>
                                                    <span>          extensions: ['.js'],</span>
                                                    <span>          alias: {</span>
                                                    <span>              '@': path.resolve(__dirname,'src'),</span>
                                                    <span>              '@core': path.resolve(__dirname,'src/core'),</span>
                                                    <span>          }</span>
                                                    <span>        },</span>
                                                    <span><strong>plugins:</strong> [</span>
                                                </code>
                                             </pre>
                                                    
                                        </div>
                                        <div class="col-sm">
                                            <div class="img">
                                                <img src="./images/webpack/webpackConfig.png" alt="isProd-config">
                                            </div>
                                            <div class="img">
                                                <img src="./images/webpack/webpackConfig2.png" alt="isProd-config">
                                            </div>
                                            <div class="img">
                                                <img src="./images/webpack/webpackConfig3.png" alt="isProd-config">
                                            </div>
                                            <div class="img">
                                                <img src="./images/webpack/webpackConfig4.png" alt="isProd-config">
                                            </div>
                                        </div>
<!--                                        <div class="col-sm">-->
<!--                                            <div class="img">-->
<!--                                                <img src="./images/webpack/img_4.png" alt="isProd-config">-->
<!--                                            </div>-->
<!--                                        </div>-->
                                        
                                    </div>
                                    <div class='row'>
                                        <div class="col-sm">
                                            <a href="https://webpack.js.org/plugins/" target="_blank">
                                                <h5 class="title">Webpack Plugins</h4>
                                            </a>
                                             <a href="https://webpack.js.org/plugins/html-webpack-plugin/" target='_blank'>
                                                Html-Webpack-plugin
                                             </a>
                                             <pre>
                                                 <code>
                                                    <span><strong>npm install --save-dev html-webpack-plugin</strong></span>
                                                    <span> </span>
                                                    <span>const path = require('path');</span>
                                                    <span>const HtmlWebpackPlugin = require('html-webpack-plugin');</span>
                                                    <span> </span>
                                                    <span>Plugins: [</span>
                                                    <span>  new HTMLWebpackPlugin({</span>
                                                    <span>      template: 'index.html',</span>
                                                    <span>      minify: {</span>
                                                    <span>          removeComments: isProd, // удаляем коментарии</span>
                                                    <span>          collapseWhitespace: isProd // удаляем пробелы</span>
                                                    <span>      },</span>
                                                    <span>   }),</span>
                                                    <span>]</span>
                                                 </code>
                                             </pre>
                                        </div>
                                        <div class="col-sm">
                                            <a href="https://webpack.js.org/plugins/copy-webpack-plugin/" target='_blank'>
                                                Copy-Webpack-plugin
                                            </a>
                                            <pre>
                                                <code>
                                                    <span><strong>npm install copy-webpack-plugin --save-dev</strong></span>
                                                    <span> </span>
                                                    <span>const CopyPlugin = require("copy-webpack-plugin");</span>
                                                    <span> </span>
                                                    <span>plugins: [</span>
                                                    <span>  new CopyPlugin({</span>
                                                    <span>      patterns: [{</span>
                                                    <span>          from: path.resolve(__dirname,'src/favicon.ico'),</span>
                                                    <span>          to: path.resolve(__dirname,'dist')</span>
                                                    <span>      }]</span>
                                                    <span>  })</span>
                                                    <span>]</span>
                                                </code>
                                            </pre>        
                                        </div>
                                        <div class="col-sm">
                                            <a href="https://www.npmjs.com/package/clean-webpack-plugin" target='_blank'>
                                                Clean-Webpack-plugin
                                            </a>
                                            <pre>
                                                <code>
                                                    <p><strong>npm install --save-dev clean-webpack-plugin</strong></p>
                                                    <span> </span>
                                                    <span>const { CleanWebpackPlugin } = require('clean-webpack-plugin');</span>
                                                    <span> </span>
                                                    <span>plugins: [</span>
                                                    <span>  new CleanWebpackPlugin(),</span>
                                                    <span>]</span>
                                                </code>
                                            </pre>        
                                        </div>
                                       
                                        <div class="col-sm">
                                             <a href="https://webpack.js.org/plugins/mini-css-extract-plugin/" target='_blank'>
                                                Mini-Css-Extract-plugin
                                             </a>
                                            <pre>
                                                <code>
                                                    <span><strong>npm install --save-dev mini-css-extract-plugin</strong></span>
                                                    <span> </span>
                                                    <span>const MiniCssExtractPlugin = require('mini-css-extract-plugin');</span>
                                                    <span> </span>
                                                    <span>Plugins: [</span>
                                                    <span>  new MiniCssExtractPlugin( {</span>
                                                    <span>      filename: filename('css')</span>
                                                    <span>  }]</span>
                                                    <span>]</span>
                                                    <span>module: {</span>
                                                    <span>  rules: [{</span>
                                                    <span>      test: /\\.css$/i,</span>
                                                    <span>      use: [MiniCssExtractPlugin.loader,</span>
                                                    <span>      'css-loader'],}</span>
                                                    <span>},],</span>
                                                </code>
                                            </pre>
                                            <span></span>
                                        </div> 
                                    </div>    
                                    <div class='row'>
                                        <div class="col-sm">
                                            <a href="https://webpack.js.org/loaders/" target="_blank">
                                                <h5 class="title">Webpack Loaders</h4>
                                            </a>
                                            <a href="https://webpack.js.org/loaders/sass-loader/" target='_blank'>
                                                sass-loader
                                            </a>
                                            <pre>
                                                <code>
                                                    <span><strong>npm install sass-loader --save-dev</strong></span> 
                                                    <span> </span>
                                                    <span>module: {</span>
                                                    <span> rules: [{</span>
                                                    <span>     test: /\\.s[ac]ss$/i,</span>
                                                    <span>     use: [</span>
                                                    <span>  MiniCssExtractPlugin.loader,</span>
                                                    <span>     'css-loader',</span>
                                                    <span>     'sass-loader',</span>
                                                    <span>  ]</span>
                                                    <span>},],</span>
                                                    <span>}</span>
                                                </code> 
                                            </pre>
                                        </div>
                                        <div class="col-sm">
                                            <a href="https://webpack.js.org/loaders/css-loader/" target='_blank'>
                                                css-loader & node-sass
                                            </a>
                                            <pre>
                                                <code>
                                                    <span><strong>npm install --save-dev css-loader</strong></span>
                                                    <span> </span>
                                                    <span><strong>npm install --save-dev node-sass</strong></span>
                                                    <span> </span>
                                                    <span>module: {</span>
                                                    <span>  rules: [{</span>
                                                    <span>      test: /\\.css$/i,</span>
                                                    <span>      use: [</span>
                                                    <span>          MiniCssExtractPlugin.loader,</span>
                                                    <span>          'css-loader',</span>
                                                    <span>      ],</span>
                                                    <span>  },],</span>
                                                    <span>},</span>
                                                </code>
                                            </pre>    
                                        </div>   
                                         <div class="col-sm">
                                            <a href="https://babeljs.io/setup#installation" target='_blank'>
                                                babel-loader, @babel/core, @babel/preset-env
                                            </a>
                                            <pre>
                                                <code>
                                                    <span><strong>npm install --save-dev babel-loader @babel/core</strong></span>
                                                    <span> </span>
                                                    <span><strong>npm install @babel/preset-env --save-dev</strong></span>
                                                    <span> </span>
                                                    <span>module: {</span>
                                                    <span>  rules: [{</span>
                                                    <span>      test: /\\.m?js$/,</span>
                                                    <span>      exclude: /node_modules/,</span>
                                                    <span>      use: <strong>jsLoaders(),</strong></span>
                                                    <span>  }],</span>
                                                    <span>}</span>
                                                </code>
                                            </pre>        
                                        </div>
                                    </div>
                                    <div class='row'>
                                        <div class="col-sm">
                                            <a href="https://webpack.js.org/configuration/dev-server/#root" target="_blank">
                                                <h5 class="title">DevServer</h4>
                                            </a>
                                            <pre>
                                                <code>
                                                    <span><strong>npm install webpack-dev-server --save-dev</strong></span> 
                                                    <span> </span>
                                                    <span>module: {</span>
                                                    <span> rules: [{</span>
                                                    <span>     test: /\\.s[ac]ss$/i,</span>
                                                    <span>     use: [</span>
                                                    <span>          MiniCssExtractPlugin.loader,</span>
                                                    <span>          'css-loader',</span>
                                                    <span>          'sass-loader',</span>
                                                    <span>  ]</span>
                                                    <span>},],</span>
                                                    <span>}</span>
                                                </code> 
                                            </pre>
                                        </div>
                                    </div>
                                        
                                     <div class="row">
                                         <div class="col-sm">
                                            <a href="https://nodejs.org/uk/" target="_blank">
                                                <h3 class="title">Node.JS</h3>
                                            </a>
                                         </div>
                                    </div>
                                </div>`

    appTemp.insertAdjacentHTML('beforeend', firstPageTemplate)
}