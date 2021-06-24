export const guard = (to, from, next) => {
    if (!localStorage.getItem('token'))
        next('/')
    else
        next()
}

export const notFoundAction = (to, from, next) => {
    next('/fil-actu')
}