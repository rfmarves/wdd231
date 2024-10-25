// Hymn class module

const iframeEmbedString = (code) => {
    return `<iframe src="https://www.youtube.com/embed/${code}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
};

class Hymn {
    constructor(number, name, codeVocal, codeInstrumental, thumbnailImage) {
        this.number = number;
        this.name = name;
        this.codeVocal = codeVocal;
        this.codeInstrumental = codeInstrumental;
        this.thumbnailImage = thumbnailImage;
    }

    get displayName() {
        return `#${this.number}. ${this.name}`;
    }

    get iframeVocal() {
        return iframeEmbedString(this.codeVocal);
    }

    get iframeInstrumental() {
        return iframeEmbedString(this.codeInstrumental);
    }

    get image() {
        return this.image;
    }

    hymnModal(modalId,hymnTypeSelector) {
        const modalContainer = document.getElementById(modalId);
        const hymnType = document.querySelector(hymnTypeSelector).value;
        let code = this.codeInstrumental;
        if(hymnType == 'vocal') {
            code = this.codeVocal;
        }
        modalContainer.innerHTML = '';
        modalContainer.innerHTML = `
            <div class="modal-title-row">
                <h2>${this.displayName}</h2>
                <button id="close-button" class="modal-close-button">❌</button>
            </div>
            <div class="iframe-wrapper">
                <iframe src="https://www.youtube.com/embed/${code}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>`;
        modalContainer.showModal();
        const closeButton = document.querySelector('#close-button');
        closeButton.addEventListener('click', () => {
            modalContainer.close();
            modalContainer.innerHTML = '';
        });
    }

    hymnCard(itemClass,modalId,hymnTypeSelector) {
        let newP = document.createElement('p');
        newP.classList.add(itemClass);
        newP.textContent = this.displayName;
        newP.addEventListener('click', () => {
            this.hymnModal(modalId,hymnTypeSelector);
        });
        return newP;
    }
    // hymnThumbnailCard()
}

export { Hymn };