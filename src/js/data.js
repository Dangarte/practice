const comments = [
    {
        name: "Иванова Карина",
        date: "21.05.2021",
        rate: 4,
        comment: "Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку! 2 дня с момента заказа и единственный нюанс-все таки сьемные пластины удобнее, наверное. Но по советам более опытных я ставила пергамент, но мыть все равно сложновато."
    },
    {
        name: "Рогозин Тимур",
        date: "17.05.2021",
        rate: 2,
        comment: "Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку!"
    },
    {
        name: "Рогозин Тимур",
        date: "17.05.2021",
        rate: 5,
        comment: "Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку!"
    },
    {
        name: "Рогозин Тимур",
        date: "17.05.2021",
        rate: 5,
        comment: "Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку!"
    },
    {
        name: "Рогозин Тимур",
        date: "17.05.2021",
        rate: 5,
        comment: "Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку!"
    },
    {
        name: "Рогозин Тимур",
        date: "17.05.2021",
        rate: 5,
        comment: "Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку!"
    },
    {
        name: "Рогозин Тимур",
        date: "17.05.2021",
        rate: 5,
        comment: "Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку!"
    },
    {
        name: "Рогозин Тимур",
        date: "17.05.2021",
        rate: 5,
        comment: "Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку!"
    },
    {
        name: "Рогозин Тимур",
        date: "17.05.2021",
        rate: 5,
        comment: "Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку!"
    },
    {
        name: "Рогозин Тимур",
        date: "17.05.2021",
        rate: 5,
        comment: "Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку!"
    },
    {
        name: "Рогозин Тимур",
        date: "17.05.2021",
        rate: 5,
        comment: "Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку!"
    },
    {
        name: "Рогозин Тимур",
        date: "17.05.2021",
        rate: 5,
        comment: "Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку!"
    }];

// Да костыли, но выбора нет, так что вот.



function Write() {
    comment_count = comments.length;
    rate = Math.round(comments.map(i => x=Number(x) + Number(i.rate), x = 0).reverse()[0]/comment_count);
    for(i = 1; i <= 5; i++)
        document.querySelector(".icon-star[number='" + i + "']").classList.remove("active");
    for(i = 1; i <= rate; i++)
        document.querySelector(".icon-star[number='" + i + "']").classList.add("active");

    document.querySelector(".comment-count").textContent=comment_count;
    document.querySelector("#Char-Review .comment-count").textContent=comment_count;
}

function comment(count) {
    document.querySelector('#list').innerHTML="";
    if(count == 0 || count >= comments.length) {
        document.querySelector("#Char-Review .icon-arrow").setAttribute("onclick","comment(2)");
        count = comments.length;
    }
    else {
        document.querySelector("#Char-Review .icon-arrow").setAttribute("onclick","comment(0)");
    }
    for(i=0;i<count;i++) {
        str = '<div comment-id="' + i +
        '" class="comment"><div class="gl"><span class="name">' + comments[i].name +
        '</span><span class="date"> / ' + comments[i].date +
        '</span><icon number="1" class="icon icon-star"></icon><icon number="2" class="icon icon-star"></icon><icon number="3" class="icon icon-star"></icon><icon number="4" class="icon icon-star"></icon><icon number="5" class="icon icon-star"></icon></div><div class="text">' + comments[i].comment +
        '</div></div>';
        document.querySelector('#list').innerHTML+=str;
        for(j = 1; j <= comments[i].rate; j++)
            document.querySelector("#list .comment[comment-id='" + i + "'] .icon-star[number='" + j + "']").classList.add("active");
    }
    document.querySelector('#Load-comment').setAttribute("now", count);
    if(Number(document.querySelector('#Load-comment').getAttribute("now")) == comments.length)
        document.querySelector('#Load-comment').classList.add("empty");
    else
        document.querySelector('#Load-comment').classList.remove("empty");
}

function LoadComment(count) {
    comment(Number(document.querySelector('#Load-comment').getAttribute("now")) + count);
}

comment(2);
Write();