import DataContext from '../Context/DataContex';
import { useContext, useState } from 'react';
import  { Redirect } from 'react-router-dom'

export default function Form({edit = false, card = {content: ''}, func = undefined, ...props}) {
  const [text, setText] = useState(card.content)
  const { submitTicket } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length <= 0) return false;
    if (edit) {
      card.content = text;
      func(card);
    } else {
      submitTicket({
        content: text,
      });
    }
    setText('');
    props.history.push('/');
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleCancel = () => {
    setText('');
    props.history.push('/');
  }

  return(
    <form className='mb-3' onSubmit={handleSubmit}>
      <label htmlFor='text' className='form-label'>Введите текст</label>
      <textarea name='text' value={text} className='form-control' onChange={handleChange} rows='5' style={{width: '36rem'}}></textarea>
      <button type='submit' className ='btn btn-primary'>Опубликовать</button>
      <button type='buton' className ='btn btn-danger' onClick={handleCancel}>Отменить</button>
    </form>
  );
}