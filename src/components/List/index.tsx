import * as React from 'react';
import { Item } from '../Item';
import './index.css';

export const List = (props: any) => {
const {tasks } = props;

return(
    <ul>
        {tasks.map((task :any) => (
          <Item task={task} />
        ))}
    </ul>
)
}