// Data import
const hymnsJson = 'data/hymns.json';

// configuration constants
const thumbnailDirectory = 'images/hymn-thumbnails/';
const viewUrlPrefix = 'https://www.youtube.com/watch?v=';
const shortUrlPrefix = 'https://youtu.be/';

const iframeEmbedString = (code) => {
    return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${code}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/-33pav0FGFc?si=hF1sTDKBYT-7oNez" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
}

