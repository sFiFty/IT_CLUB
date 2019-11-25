import React, { useContext } from 'react';
import { MyContext } from '../../App';

import { Task, TasksContainer} from './ListStyled'

export const List = () => {
  const { list } = useContext(MyContext);
  return (
    <TasksContainer>
      {
        list.map(item => (
          <Task key={item.id}>{item.name}</Task>
        ))
      }
    </TasksContainer>
  )
}
