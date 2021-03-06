const appTemp = document.querySelector('#app')

export function css(){
    const css = `<div class="content">
                        <div class="row">
                            <div class="col-sm">
                                <h3>CSS</h3>
                                <p>Пиши что хочешь)</p>
                            </div>
                        </div>
                    </div>`

    appTemp.insertAdjacentHTML('beforeend', css)

}