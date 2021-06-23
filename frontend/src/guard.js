export const guard = (to, from, next) => {
    if (!localStorage.getItem('token'))
        next('/')
    else
        next()
}