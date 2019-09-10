export function parse(messages) {

    const recursion = obj => Object.values(obj).reduce( (str, el) => {

        const is_last_lvl  = !!(typeof el === 'string')

        const row = is_last_lvl
            ? `${str}<li>${el}</li>`
            : `${str}<li><ul>${recursion(Object.values(el))}</ul></li>`

        return row
    }, '')

    const html = `<ul>${recursion(messages)}</ul>` // 🤯

    return html
}
// I'm trying to avoid recursion. It is slow, twisted and to 'smart'.
// This is one of few cases when recursion is good solution.
// Another place where recursion have a sense can be deep cloning big object,
// and basically it is same pattern as here.
