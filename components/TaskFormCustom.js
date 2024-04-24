'use client';
// import { createTask } from "@/utils/actions";
import { createTask, createTaskCustom } from "@/utils/actions";
import { useFormStatus, useFormState } from 'react-dom';

const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="btn btn-primary join-item" disabled={pending}>
            {pending ? 'Please wait...' : 'Create Task'}
        </button>
    );
};

const initialState = {
    message: null,
};

const TaskForm = () => {
    const [state, formAction] = useFormState(createTaskCustom, initialState);
    return (
        <form action={formAction}>
            {state.message ? <p className="mb-2">{state.message}</p> : null}
            <div className="join w-full">
                <input
                    type="text"
                    className="input input-bordered join-item w-full"
                    placeholder="Type here"
                    name="content"
                    required
                />
                <SubmitBtn />
            </div>
        </form>
    );
};
export default TaskForm;