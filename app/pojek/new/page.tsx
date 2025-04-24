'use client'

import { redirect } from "next/navigation"
import addtask from "../_actions/addtask"
import { useActionState } from "react"

export default function AddNew() {

    const [state, action] = useActionState(addtask, {
        error: '',
        message: '',
        data: {
            title: '',
            duaDate: '',
            priority: false,
            progress: '',
            description:'',
        },
    })

    const { title, duaDate, progress, description } = state.data


    if (state.message) {
        redirect('/pojek')
    }

    return (
        <>
            <form
                className="max-w-md border mx-auto p-6 mt-8 space-y-4"
                action={action}
            >
                <h1 className="text-xl font-bold">Add New Task</h1>
                {(state.error) &&
                    (<div className="text-red-500">Error: {state.error} </div>)}

                <div>
                    <input
                        className="border-2 p-2 rounded w-full"
                        type="text"
                        name="title"
                        placeholder="Title"
                        defaultValue={title}
                    />
                </div>

                <div>
                    <input type="checkbox" name="isActive" defaultChecked={isActive} />
                    <label className="ml-2">Is Active</label>
                </div>
                <div>
                    <label htmlFor="title">dueDate: </label>
                    <input
                        className="border p-2 rounded w-full"
                        type="text"
                        name="title"
                        defaultValue={title}
                        placeholder="Title" />
                </div>
                <div>
                    <label htmlFor="dueDate">dueDate: </label>
                    <input
                        className="border p-2 rounded w-full"
                        type="time"
                        name="dueDate"
                        defaultValue={duaDate}
                        placeholder="Duedate" />
                </div>
                <div>
                    <label htmlFor="phone">Phone: </label>
                    <input
                        className="border p-2 rounded w-full"
                        type="text" name="phone"
                        defaultValue={description}
                        placeholder="Phone" />
                </div>
                <div>
                    <button
                        className="border px-4 py-2 rounded bg-blue-100"
                        type="submit">Add
                    </button>
                    <button
                        className="border px-4 py-2 rounded bg-red-100 ml-2"
                        type="reset">reset</button>
                </div>
            </form>
        </>
    )
}
