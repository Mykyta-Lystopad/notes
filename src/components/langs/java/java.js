const appTemp = document.querySelector('#app')

export function java(){
    const java = `<div class="content">
                        <div class="row">
                            <div class="col-sm">
                                <h3>Java</h3>
                                <p>Пиши что хочешь)</p>
                            </div>
                        </div>
                    </div>`

    appTemp.insertAdjacentHTML('beforeend', java)

}