//alert('hello?');
window.onload = function() {
    loadMenu();
    loadContent('introduction');//set alpha argument as default page to load
};

function loadMenu() {//funtion to load the menu 
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            let importedMenuContent = this.responseText;
            document.getElementById('load-menu').innerHTML = importedMenuContent;//get the area for loading menu in index.html
        }
    }

    let xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
        if(this.readyState == 4 && this.status ==200) {
            let importedFooterContent = this.responseText;
            document.getElementById('load-footer').innerHTML = importedFooterContent;//get the area for loading footer in index.html
        }
    }
    let menuName = 'menu';
    let fullMenuPath = 'contents/' + menuName + '.txt';//full path to get the menu.txt file
    let footerName = 'footer';
    let fullFooterPath = 'contents/' + footerName + '.txt';//full path to get the footer.txt file
    xhttp.open('GET', fullMenuPath, true);
    xhttp2.open('GET', fullFooterPath, true);
    xhttp.send();
    xhttp2.send();
}




function loadContent(contentToLoad) {//function to load the main contents with which content to load as argument
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let importedContent = this.responseText;
            document.getElementById('load-main-content').innerHTML = importedContent;//get the area for loading main content
        }
    }
    let contentName = contentToLoad;//set to argument so whatever the users click will insert the file name. Ex.click bravo: argument = 'bravo'
    let fullContentPath = 'contents/' + contentName + '.txt';
    xhttp.open('GET', fullContentPath, true);
    xhttp.send();
}

  