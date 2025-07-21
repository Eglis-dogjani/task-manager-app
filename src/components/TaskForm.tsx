import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { addTask } from '../features/task/taskSlice';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

function TaskForm() {
  const [task, setTask] = useState('');
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task) {
      toast.error(t('errors.taskRequired'));
      return;
    }
    dispatch(
      addTask({
        id: new Date().getTime().toString(),
        name: task,
        isCompleted: false,
      })
    );
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className='form task-form'>
      <div className='form-row'>
        <label htmlFor='task' className='form-label'>
          {t('labels.taskInput')}
        </label>
        <input
          type='text'
          id='task'
          className='form-input'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          aria-label={t('aria.taskInput')}
        />
      </div>

      <button
        type='submit'
        className='btn btn-primary submit-btn'
        aria-label={t('aria.submitTask')}
      >
        {t('buttons.addTask')}
      </button>
    </form>
  );
}

export default TaskForm;
