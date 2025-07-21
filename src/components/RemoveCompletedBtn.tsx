import { deleteCompletedTasks } from '../features/task/taskSlice';
import { useAppDispatch } from '../hooks';
import { useTranslation } from 'react-i18next';

function RemoveCompletedBtn() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleRemoveCompleted = () => {
    dispatch(deleteCompletedTasks());
  };

  return (
    <button
      type='button'
      onClick={handleRemoveCompleted}
      className='filter-btn'
      aria-label={t('aria.clearCompleted')}
    >
      {t('buttons.clearCompleted')}
    </button>
  );
}

export default RemoveCompletedBtn;
