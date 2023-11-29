import './App.css';
import {Rating} from './components/Rating';
import {UncontrolledAccordion1} from './components/UncontrolledAccordion1';
import {UncontrolledOnOff} from './components/UncontrolledOnOff';
import {Accordion} from './components/Accordion';
import {UncontrolledRating} from './components/UncontrolledRating';
import {useState} from 'react';
import {OnOff} from './components/OnOff';


function App() {
    let [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn,setSwitchOn] = useState<boolean>(false);
    return (
        <div>
            {/*<UncontrolledOnOff/>*/}
            {/*<Rating onClick={setRatingValue} value={ratingValue}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<Accordion onClick={()=>setAccordionCollapsed(!accordionCollapsed)} titleValue={'MENU1'} collapsed={accordionCollapsed}/>*/}
            {/*<UncontrolledAccordion1 titleValue={'Menu'}/>*/}
            <OnOff on={switchOn} onChange={setSwitchOn}/>


        </div>

    )
}

export default App;