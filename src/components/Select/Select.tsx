import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}
type SelectType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectType) => {
    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)

    }, [props.value])
    const toggleItems = () => setActive(!active);
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems();
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowUp'
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement);
                        return;
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value)
            }
        }
        if(e.key === "Escape" || e.key === "Enter"){
            setActive(false)
        }
    }

    return (
        <>
            <div
                className={styles.select + ' ' + (active ? styles.active : '')}
                tabIndex={0}
                onKeyUp={onKeyUp}
            >
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                        >{i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    );
};

