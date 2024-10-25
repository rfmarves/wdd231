// HymnList class module
import { Hymn } from './hymn.mjs';

class HymnList {
    constructor(){
        this.hymns = [];
    }

    addHymn(number, name, codeVocal, codeInstrumental, thumbnailImage) {
        let h = new Hymn(number, name, codeVocal, codeInstrumental, thumbnailImage);
        this.hymns.push(h);
    }

    allHymnCards(cardsContainerId,itemClass,modalId,hymnTypeSelector) {
        const container = document.getElementById(cardsContainerId);
        container.innerHTML = '';
        this.hymns.forEach(h => {
            let np = h.hymnCard(itemClass,modalId,hymnTypeSelector);
            container.appendChild(np);
        });
    }
}

export { HymnList };