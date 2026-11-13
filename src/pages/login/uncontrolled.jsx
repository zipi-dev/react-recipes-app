import { useNavigate } from 'react-router';
import { login } from '../../services/auth';


export default function LoginUncontrolled() {
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    const data = Object.fromEntries(formData);
    const user = login(data);

    if (user) {
      navigate('/recipes');
    }
  };

  return (
    <form action={handleLogin}>
      <label htmlFor="email">אימייל</label>
      <input
        id="email"
        name="email"
        type="email"
        defaultValue="chef@recipes.com"
      />

      <label htmlFor="password">סיסמה</label>
      <input id="password" name="password" type="password" />

      <button>התחברות</button>
    </form>
  );
}