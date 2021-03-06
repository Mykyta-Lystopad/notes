const buttonsArray = ['Html', 'CSS', 'JavaScript', 'Python', 'PHP', 'Java', 'Webpack']

export const mainLanguagesBtn = mainLanguages().map(lang=>lang.name)

function mainLanguages() {
    return buttonsArray.map(lang=>Object.create({},{name:{value:lang,enumerable:true}}))
}

export function frameWorks(selector){
    return  mainLanguages().map(lang=>{
        if (lang.name === selector) {
            switch (lang.name) {
                case 'Html':
                    lang.frameWorks = {value: ['Back'], enumerable: true};
                    return lang
                case 'CSS':
                    lang.frameWorks = {value: ['Back'], enumerable: true};
                    return lang
                case 'JavaScript':
                    lang.frameWorks = {
                        value: ['PureJS', 'React', 'Angular', 'Vue', 'Ember', 'Node', 'Back'],
                        enumerable: true
                    };
                    return lang
                case 'Python':
                    lang.frameWorks = {value: ['Back'], enumerable: true};
                    return lang
                case 'PHP':
                    lang.frameWorks = {value: ['PurePHP', 'Laravel', 'Back'], enumerable: true};
                    return lang
                case 'Java':
                    lang.frameWorks = {value: ['Back'], enumerable: true};
                    return lang
                case 'Webpack':
                    lang.frameWorks = {value: ['Back'], enumerable: true};
                    return lang
                default:
                    alert("Нет таких значений")
            }
        }
    }).filter(frame=>frame !== undefined)[0]

}


export function componentsOfLang(frameWork, part) {
    const obj = frameWorks(frameWork)
    const partsOfFrame = frameWorks(frameWork).frameWorks.value.map(frame => {
            if (frame === part) {
                switch (frame) {
                    case 'PureJS':
                        obj.parts = {
                            value: ['Типы данных', 'Операторы', 'Циклы', 'Функции', 'Массивы', 'Объекты', 'Классы', 'Back'],
                            enumerable: true
                        };
                        // console.log(obj)
                        return obj
                    case 'React':
                        obj.parts  = {value: ['Компоненты', 'Директивы','Back'], enumerable: true};
                        // console.log(obj)
                        return obj
                    case 'Angular':
                        obj.parts = {
                            value: ['Компоненты', 'Директивы', 'Пайпы', 'Сервисы', 'Формы, валидация', 'Роутинг', 'Back'],
                            enumerable: true
                        };
                        // console.log(obj)
                        return obj
                    case 'Vue':
                        obj.parts  = {value: ['Back'], enumerable: true};
                        return obj
                    case 'Ember':
                        obj.parts  = {value: ['Back'], enumerable: true};
                        return obj
                    case 'Node':
                        obj.parts  = {value: ['Back'], enumerable: true};
                        return obj
                    case 'PurePHP':
                        obj.parts  = {
                            value: ['Типы данных', 'Операторы', 'Циклы', 'Функции', 'Массивы', 'Объекты', 'Классы', 'Back'],
                            enumerable: true
                        };
                        return obj
                    case 'Laravel':
                        obj.parts  = {value: ['Back'], enumerable: true};
                        return obj
                    case 'Java':
                        obj.parts  = {value: ['Back'], enumerable: true};
                        return obj
                    default:
                        alert("Нет таких значений")
                }
            }
        }).filter(frame=>frame !== undefined)[0]

    // console.log(partsOfFrame.parts.value)
    return partsOfFrame.parts.value
}