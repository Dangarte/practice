import {comments} from './data.js';

function Show(count) {
    var text = "";
    if(count <= comments.length)
    for(var i = 0; i < count; i++)
        text += elem(comments[i]);
    document.getElementById('Char-Review').textContent = text;   
}

function elem(data) {
    return "<div>" + data.name + "</div>";
}

export{Show};