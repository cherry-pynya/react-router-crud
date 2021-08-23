import DataContext from '../Context/DataContex';
import { useContext, useState } from 'react';

export default function Form() {
  const [text, setText] = useState('')
  const { submitTicket } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length <= 0) return false;
    submitTicket({
      content: text,
    });
    setText('');
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return(
    <form className='mb-3' onSubmit={handleSubmit}>
      <label htmlFor='text' className='form-label'>Введите текст</label>
      <textarea name='text' value={text} className='form-control' onChange={handleChange} rows='5' style={{width: '36rem'}}></textarea>
      <button type='submit' className ='btn btn-primary'>Опубликовать</button>
    </form>
  );
}