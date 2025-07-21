import { useAppSelector, useAppDispatch } from '../hooks';
import { filterTasks } from '../features/task/taskSlice';
import { useTranslation } from 'react-i18next';

type Props = {
  filterValue: 'all' | 'active' | 'completed';
  label: string;
};

const TaskFilterBtn: React.FC<Props> = ({ filterValue, label }) => {
  const { t } = useTranslation();
  const activeFilter = useAppSelector((state) => state.taskState.filterValue);
  const isActive = filterValue === activeFilter;
  const dispatch = useAppDispatch();

  const handleFilter = () => {
    dispatch(filterTasks(filterValue));
  };

  return (
    <button
      type='button'
      className={`filter-btn ${isActive ? 'active-btn' : ''}`}
      onClick={handleFilter}
      aria-pressed={isActive}
      aria-label={t('aria.filterBy', { filter: label })}
    >
      {label}
    </button>
  );
};

export default TaskFilterBtn;

