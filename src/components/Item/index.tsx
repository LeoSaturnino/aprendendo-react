import * as React from 'react';
import './index.css';

export const Item = (props: any) => {
const {task } = props;

return(
    <li id={task.id}>
        <label className="LabelItem">{task.name}</label><br/>
        <label className="DescItem">{task.description}</label>
    </li>
)
}