'use client';
// import { createTask } from "@/utils/actions";
import { createTask, createTaskCustom } from "@/utils/actions";
import { useFormStatus } from 'react-dom';

const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="btn btn-primary join-item" disabled={pending}>
            {pending ? 'Please wait...' : 'Create Task'}
        </button>
    );
};


const TaskForm = () => {
    return (
        <form action={createTaskCustom}>
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