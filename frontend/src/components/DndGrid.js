import React, {useState, useEffect} from 'react'
import { ListManager } from "react-beautiful-dnd-grid";
import Card from './Card';
import { initData } from '../staticData';


const DndGrid = () => {
    const [items, setItems] = useState([]);
    const [reload, setReload] = useState(false)
    useEffect(()=>{
        setItems(initData)
    },[])
    function sortList(list) {
        return list.slice().sort((first, second) => first.position - second.position);
    }
    const reorderList = (sourceIndex, destinationIndex) => {
        const list = items;
        const [moveItem] = list.splice(sourceIndex,1);
        list.splice(destinationIndex,0,moveItem);
        setItems(list)
        setReload(!reload)
    }
    return (
        <div className="galleries">
            <ListManager 
                items = {initData}
                direction="horizontal"
                maxItems={3}
                render={item=><Card item={item} />}
                onDragEnd={reorderList}
            />
        </div>
    )
}

export default DndGrid
