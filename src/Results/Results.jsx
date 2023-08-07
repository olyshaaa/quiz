import React from 'react'
import sad from "./img/sad.png"
import face from './img/face.png'
import win from './img/pngwing.com (2).png'

import "./styles.css"

const Results = ({correct, data}) =>{
    return(
        <div className='results-wrap'>
            <div className='results-title'>Вы отгадали {correct} ответов из {data.length}</div>
            {correct < 2 ? <img src={sad} />: null}
            {correct >=2 && correct <=3 ? <img src={face} />: null}
            {correct ==4 ? <img src={win}/>: null}
            <a href="/">Начать заново</a>

        </div>
    )
}

export default Results