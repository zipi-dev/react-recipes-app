import { useNavigate } from 'react-router';

export default function LoginUncontrolled() {
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    const data = Object.fromEntries(formData);
    console.log(data); // { email: '...', password: '...' }
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