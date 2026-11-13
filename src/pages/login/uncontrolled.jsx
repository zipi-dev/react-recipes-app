import { useState } from 'react';
import { useNavigate } from 'react-router';
import { login } from '../../services/auth';

export default function LoginUncontrolled() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: 'chef@recipes.com',
    password: '',
  });

  const handleLogin = (formData) => {
    const data = Object.fromEntries(formData);
    setValues(data); // שומרים את מה שהוקלד, כדי שלא יימחק

    const newErrors = {};
    if (!data.email) {
      newErrors.email = 'אימייל הוא שדה חובה';
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = 'כתובת האימייל אינה תקינה';
    }
    if (!data.password) {
      newErrors.password = 'סיסמה היא שדה חובה';
    } else if (data.password.length < 6) {
      newErrors.password = 'הסיסמה חייבת להכיל לפחות 6 תווים';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const user = login(data);
    if (!user) {
      setErrors({ general: 'אימייל או סיסמה שגויים' });
      return;
    }

    navigate('/recipes');
  };

  return (
    <form action={handleLogin}>
      <label htmlFor="email">אימייל</label>
      <input
        id="email"
        name="email"
        type="text"
        defaultValue={values.email}
        key={values.email}
      />
      {errors.email && <p>{errors.email}</p>}

      <label htmlFor="password">סיסמה</label>
      <input
        id="password"
        name="password"
        type="password"
        defaultValue={values.password}
        key={values.password}
      />
      {errors.password && <p>{errors.password}</p>}

      {errors.general && <p>{errors.general}</p>}

      <button>התחברות</button>
    </form>
  );
}