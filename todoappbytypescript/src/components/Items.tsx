import * as React from 'react';
import { getAllJSDocTagsOfKind } from 'typescript';
import { ITask } from './Interfaces';

interface IItemsProps {
item:ITask,
handleDel:(id:string)=>void
}

const Items: React.FunctionComponent<IItemsProps> = ({item,handleDel}) => {
  return(
    <>
    <div>
     {item.taskName}
    </div>
    <button onClick={()=>handleDel(item.taskName)}>Del</button>
    </>
  ) ;
};

export default Items;
