import { useState } from 'react';
import { FormStyle } from './Form.styled';
import { InputStyle, LabelStyle, ButtonStyle } from 'components/App.styled';
import PropTypes from 'prop-types';

export default function Form({ onSubmit }) {
  //   const [name, setName] = useState('');
  //   const [number, setNumber] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   if (name === 'name') {
  //     setName(value);
  //   } else if (name === 'number') {
  //     setNumber(value);
  //   }
  // };

  const { name, number } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     onSubmit({ name, number });
  //     setName('');
  //     setNumber('');
  //   };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', number: '' });
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <LabelStyle>
        Name:
        <InputStyle
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          required
        />
      </LabelStyle>
      <LabelStyle>
        Number:
        <InputStyle
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          onChange={handleChange}
          required
        />
      </LabelStyle>

      <ButtonStyle type="submit">Add Contact</ButtonStyle>
    </FormStyle>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
