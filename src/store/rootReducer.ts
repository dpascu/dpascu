import { combineReducers } from '@reduxjs/toolkit'
import terminal from './terminal'

const rootReducer = combineReducers({ terminal })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
