import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { schema } from '../../utils/schema';
import { login } from '../../services/auth';

export default function LoginRhf() {
  const navigate = useNavigate();
  const [generalError, setGeneralError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: { email: 'chef@recipes.com', password: '' },
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    const user = login(data);
    if (user) {
      navigate('/recipes');
    } else {
      setGeneralError('אימייל או סיסמה שגויים');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">אימייל</label>
      <input id="email" type="text" {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="password">סיסמה</label>
      <input id="password" type="password" {...register('password')} />
      {errors.password && <p>{errors.password.message}</p>}

      {generalError && <p>{generalError}</p>}

      <button type="submit">התחברות</button>
    </form>
  );
}