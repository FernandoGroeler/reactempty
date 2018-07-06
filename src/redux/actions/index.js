import { createActions } from 'reduxsauce'

import click from './click'
import snackbar from './snackbar'

const actions = Object.assign({}, click, snackbar)

export const { Types, Creators } = createActions(actions)