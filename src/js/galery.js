function galery_act(data_id) {
    document.querySelector('.mini-pic.active').classList.toggle('active');
    document.querySelector('.mini-pic[data-id="' + data_id + '"]').classList.toggle('active');
    document.querySelector('.big-pic > img').setAttribute('src','./src/img/small ' + data_id + '.jpg').setAttribute('alt','pic' + data_id);
}