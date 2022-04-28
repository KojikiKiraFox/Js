import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal"
import scroll from "./modules/scroll"
import assay from "./modules/assay"
import tabs from "./modules/tabs"
import slider from "./modules/slider"
import calc from "./modules/calc"
import sendForm from "./modules/sendForm"

timer('26 april 2022 14:55:00:000')
menu()
modal()
scroll()
assay()
tabs()
slider(['.portfolio-content', '.portfolio-item', '.dot'])
calc()
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({
    formId: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});