import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function AppHeader() {
   const { t } = useTranslation();
  return (
    <header className='app-header' role='banner'>
      <h1>Task Manager</h1>
      <div>
      <LanguageSwitcher />
      <h1>{t('')}</h1>
    </div>
  );
      <ThemeToggle />
    </header>
  );
}
export default AppHeader;
