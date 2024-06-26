'use Client';
import { useFormStatus } from 'react-dom';

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