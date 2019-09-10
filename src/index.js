export function parse(messages) {
    let html
    const is_last_lvl  = typeof messages.name === 'string'

    const li = obj => Object.values(obj).reduce( (str, el) => `${str}<li>${el}</li>`, '')

    const ul = `<ul>${li(messages)}</ul>`


    if(is_last_lvl) {
        html = ul
    } else {
        html = `<ul><li><ul><li>${messages.name.first}</li><li>${messages.name.last}</li></ul></li><li>${messages.location}</li></ul>`
    }
    return html;
}
