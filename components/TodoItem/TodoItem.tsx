import React from 'react'
import { TodoTypes } from './types'

export const TodoItem = () => {
  return (
    <div className="wrapper flex w-100 flex-row items-center gap-2 w-100 px-3 py-3 border-2  border-slate-400 rounded-lg">
      <input
        className="checkbox checkbox-success rounded-full"
        type="checkbox"
        name=""
        id=""
      />
      <input
        type="text"
        className="input bg-transparent w-full"
        placeholder="What do you want to do today?"
      />
      <button className="btn btn-accent ml-auto p-2 rounded-lg normal-case">
        Add todo
      </button>
    </div>
  )
}
