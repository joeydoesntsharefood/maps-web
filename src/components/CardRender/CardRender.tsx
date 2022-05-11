import React from 'react'
import './CardRender.css'

interface Props {
    title: string
    children: string
    key: string
}


function CardRender ({ title, children, key } : Props) {
    return (
        <div className='card-render' id={key}>
            <div className='card-render__main'>
                <div className='card-render__title'>
                    { title }
                </div>
                <div className='card-render__children'>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default CardRender