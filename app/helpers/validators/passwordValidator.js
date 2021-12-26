export default function passwordValidator(password) {
  if (!password) return 'Пароль не может быть пустым.';
  if (password.length < 6)
    return 'Пароль должен состоять не менее чем из 6 символов.';
  return '';
}
