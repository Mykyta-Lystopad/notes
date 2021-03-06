const appTemp = document.querySelector('#app')

export function html(){
    const html = `<div class="content">
                        <div class="row">
                            <div class="col-sm">
                                <h3>HTML</h3>
                                <p>Пиши что хочешь)</p>
                            </div>
                        </div>
                    </div>`

    appTemp.insertAdjacentHTML('beforeend', html)

}