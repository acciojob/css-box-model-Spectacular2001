//your code here
// In this case, JavaScript is not strictly necessary to achieve the required box model.
// The CSS provided above in styles.css will correctly style the box.
// However, if you need to dynamically add styles, you can do so with the following script:

document.addEventListener('DOMContentLoaded', function() {
    const box = document.getElementById('box');
    box.style.width = '300px';
    box.style.backgroundColor = 'lightblue';
    box.style.border = '15px solid blue';
    box.style.padding = '50px';
    box.style.margin = '20px';
});

