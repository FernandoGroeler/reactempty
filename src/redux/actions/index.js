import { createActions } from 'reduxsauce'

import click from './click'
import snackbar from './snackbar'
import dialog from './dialog'

const actions = Object.assign({}, click, snackbar, dialog)

export const { Types, Creators } = createActions(actions)