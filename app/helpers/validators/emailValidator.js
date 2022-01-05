export default function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return 'Электронная почта не может быть пустой';
  if (!re.test(email)) return 'Пожалуйста, введите действительный адрес.';
  return '';
}
