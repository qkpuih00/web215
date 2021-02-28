
window.onload = function() {
    loadContent();
};

function loadContent() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let importedContentData = this.responseText;
            document.getElementById('toc-data').innerHTML = importedContentData;
        }

    };
    let contentName = 'toc_content';
    let contentPath = contentName + '.txt';

    xhttp.open('GET', contentPath, true);
    xhttp.send();
}