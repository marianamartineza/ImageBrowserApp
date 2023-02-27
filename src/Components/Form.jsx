import { useState } from "react"

export const Form = ({onAddTopic}) => {

    const [InputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
      setInputValue(target.value);
    }

    const onSubmit = (event) => {
      event.preventDefault();
      if(InputValue.trim().length <= 1) return;
      onAddTopic(InputValue.trim());
      setInputValue('');
    }

  return (
    <div className="container-fluid">
      <form onSubmit={onSubmit} className="text-center p-4">
          <div className='input-group'>
              <input type="text"
              placeholder='Buscar Imagenes'
              id='buscar'
              className='form-control' 
              onChange={onInputChange}
              value={InputValue}
              />
              <button type="submit" className="btn btn-primary" onClick={onSubmit}>Buscar</button>
          </div>
      </form>
    </div>
  )
}
