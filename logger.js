export default function logger(reducer) {
    return (preState, action, args) => {
        console.group(action)
        console.log('Pre:', preState)
        console.log('action agr:', args)

        const nextState = reducer(preState, action, args)
        console.log('Nex:', nextState)

        console.groupEnd()
        return (nextState)
    }
}