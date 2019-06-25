export const bind = (fn, context) => function(...args) {
    return fn.apply(context, args)
}