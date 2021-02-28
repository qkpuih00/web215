//alert('hello?');
window.onload = function() {
    loadMenu();
    loadContent('alpha');//set alpha argument as default page to load
};

function loadMenu() {//funtion to load the menu 
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            let importedMenuContent = this.responseText;
            document.getElementById('load-menu').innerHTML = importedMenuContent;//get the area for loading menu in indexx.html
        }
    }
    let menuName = 'menu';
    let fullMenuPath = 'contents/' + menuName + '.txt';//full path to get the menu.txt file
    xhttp.open('GET', fullMenuPath, true);
    xhttp.send();
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
