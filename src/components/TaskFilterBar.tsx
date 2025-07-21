import { useAppSelector } from '../hooks';
import RemoveCompletedBtn from './RemoveCompletedBtn';
import TaskFilterBtn from './TaskFilterBtn';
import { useTranslation } from 'react-i18next';

function TaskFilterBar() {
  const { filteredTasks } = useAppSelector((state) => state.taskState);
  const { t } = useTranslation();

  return (
    <section className='tasklist-filters'>
      <span>{t('tasks.count', { count: filteredTasks.length })}</span>

      <div className='btn-container'>
        <TaskFilterBtn filterValue='all' label={t('filters.all')} />
        <TaskFilterBtn filterValue='active' label={t('filters.active')} />
        <TaskFilterBtn filterValue='completed' label={t('filters.completed')} />
      </div>

      <RemoveCompletedBtn />
    </section>
  );
}

export default TaskFilterBar;
