import React from 'react'
import Results from '../Results/Results'

import './styles.css'

const data = [
    {
        title: 'Какой хук React используется для добавления состояния в функциональный компонент?',
        variants: ['useState', 'useEffect', 'useContext', 'useReducer'],
        index: 0
    },
    {
        title: 'Какой метод жизненного цикла React вызывается после рендеринга компонента?',
        variants: ['componentDidMount', 'componentDidUpdate', 'componentWillUnmount', 'componentDidRender'],
        index: 0
    },
    {
        title: 'Какой атрибут используется для передачи данных из родительского компонента в дочерний?',
        variants: ['data', 'value', 'props', 'state'],
        index: 2
    },
    {
        title: ' Какой метод следует использовать для обработки событий в React?',
        variants: ['handleEvent', 'onEvent', 'eventHandler', ' Нет правильного ответа'],
        index: 3
    },
]

const Questions = () => {
    const [step, setStep] = React.useState(0);
    const current = Math.round(step / data.length *100)
    const [correct, setCorrect] = React.useState(0);
    const questions = data[step];
    console.log(questions)
    const handleClick = (index) =>{
        console.log(step, index)
        setStep(step + 1)
        if (index == questions.index){
          setCorrect(correct + 1);
        }
    }
    return (
        step !== data.length ? (
          <div className='quiz'>
            <div className='statusbar'>
              <div className='current-progress' style={{ width: `${current}%` }}></div>
            </div>
            <div className='title'>{data[step].title}</div>
            <ul className='answers'>
              {data[step].variants.map((text, index) => (
                <li key={index} onClick={()=>handleClick(index)} className={`variant ${index}`}>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <Results correct={correct} data={data}/>
        )
      );

}

export default Questions;