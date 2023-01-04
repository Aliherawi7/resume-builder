import React from 'react'
import "./PopularTemplate.css"
import Templates, { templatesName } from '../Templates/Templates.js'
import Example, { templateColor } from '../Templates/Example'
import { useNavigate } from 'react-router-dom'

function PopularTemplate({ navigate }) {
    const nav = useNavigate();

    return (
        <div className='popular-templates'>
            {Templates.map((item) => {
                const temp = { template: item }
                const index = Templates.findIndex((input) => {
                    return input === item
                });
                const color = templateColor[index];
                return (
                    <div className={'temp-item' + (index === 2 || index === 3 ? " xlarg" : " ")} key={item.name} style={{ backgroundColor: color }}>
                        {<temp.template
                            contactInformation={Example.contactInformation}
                            skills={Example.skills}
                            summery={Example.summery}
                            experience={Example.experience}
                            education={Example.education}
                            color={color}
                            font={"Maler"}
                        />}
                        <div className='details'>
                            <h2>{templatesName[index].name}</h2>
                            <button className='browse-btn'
                                onClick={navigate === "" ?
                                    (() => nav("/build/getting-started&&color=" + color.substring(1) + "&&template=" + index))
                                    :()=> navigate(index)
                                }>
                                Browse
                            </button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default PopularTemplate