import hymnsDataJson from './getHymns.mjs';
const hymnsData = hymnsDataJson.hymns;
import { HymnList } from './hymnList.mjs';

// DOM objects
const modalId = "hymn-details-modal";
const containerId = "hymn-block";
const cardClass = "card";
const hymnTypeSelector = 'input[name="hymn-type"]:checked';
const hymnModal = document.getElementById("hymn-details-modal");
const typeSelection = document.querySelector('input[name="hymn-type"]:checked').value;

// Create HymnList object
const hymns = new HymnList();
hymnsData.forEach(hymn => {
    hymns.addHymn(hymn.number, hymn.name, hymn.codeVocal, hymn.codeInstrumental, hymn.thumbnailImage);
});

// populate hymn cards
hymns.allHymnCards(containerId,cardClass,modalId,hymnTypeSelector);