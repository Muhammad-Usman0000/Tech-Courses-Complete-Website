fetch('newFooter.html')
.then(res => res.text())
.then(text => {
    let myfootold = document.querySelector("script#replace_with_footer");
    let yourfootnew = document.createElement("div");
    yourfootnew.innerHTML = text;
    myfootold.parentNode.replaceChild(yourfootnew,myfootold);
})