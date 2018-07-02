import { createActions } from 'reduxsauce'

import click from './click'

const actions = Object.assign({}, click)

export const { Types, Creators } = createActions(actions)