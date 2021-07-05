import { createStore } from './core.js'
import reducer from './reducer.js'
import WithLogger from './logger.js'

const { attach, connect, dispatch } = createStore(WithLogger(reducer))

window.dispatch = dispatch

export {
    attach,
    connect
}