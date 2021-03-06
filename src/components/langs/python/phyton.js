const appTemp = document.querySelector('#app')

export function python(){
    const python = `<div class="content">
                        <div class="row">
                            <div class="col-sm">
                                <h3>Python</h3>
                                <p>Пиши что хочешь)</p>
                            </div>
                        </div>
                    </div>`

    appTemp.insertAdjacentHTML('beforeend', python)

}