import { useState } from 'react';
import '../styles.css';
import { Form } from './Components/Form';
import { GridImage } from './Components/GridImage';

export const ImageBrowserApp = () => {

    const [topics, setTopics] = useState(['gato']);

    const onAddTopic = (newTopic) => {
        if(topics.includes(newTopic)) return;
        setTopics([newTopic,...topics]);
    }

  return (
    <>
        <div className="header text-center">
            <h1>ImageBrowserApp</h1>
        </div>

        <div className='abs-center'>
            <Form onAddTopic={onAddTopic}/>
        </div>

        {
            topics.map( topic => {
                return(
                    <GridImage 
                        key={topic}
                        topic={topic}
                    />
                );
            })
        }

    </>
  )
}
