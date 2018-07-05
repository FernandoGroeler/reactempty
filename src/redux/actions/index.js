import { createActions } from 'reduxsauce'

import click from './click'
import snackbars from './snackbars'

const actions = Object.assign({}, click, snackbars)

export const { Types, Creators } = createActions(actions)