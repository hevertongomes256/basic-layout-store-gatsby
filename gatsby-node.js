const path = require('path')

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    const contadorTemlate = path.resolve('src/templates/Contador.js')
    const pages = [1,2,3,4]
    pages.forEach(page => {
        createPage({
            path: '/contador-'+page,
            component: contadorTemlate,
            context: {
                page: page
            }
        })
    })
}
