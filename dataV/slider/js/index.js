! function() {
    var nav = document.querySelectorAll(".nav")[0];
    var liarr = nav.children[0].children;
    var spanArr = [];
    var bgcolors = ["#EF7A7A", "#F26DE1", "#676EF6", "#61F36D", "#F5FA51"];
    // slider
    var slider = document.querySelector(".slider");

    var imgWidth = slider.children[0].children[0].offsetWidth;
    var ul = slider.children[0];
    var boxLeftRight = slider.children[1];
    var btnArr = boxLeftRight.children;
    //导航栏
    for (var i = 0; i < liarr.length; i++) {
        spanArr[i] = liarr[i].children[1];
    }
    for (var i = 0; i < liarr.length; i++) {
        liarr[i].index = i;
        spanArr[i].style.backgroundColor = bgcolors[i];
        liarr[i].onmouseenter = function() {
            spanArr[this.index].style.backgroundColor = bgcolors[Math.floor(Math.random() * bgcolors.length)];
            getPrevNode(spanArr[this.index]).style.color = "#fff"
            animate(spanArr[this.index], { "height": "55" });
        }
        liarr[i].onmouseleave = function() {
            spanArr[this.index].style.backgroundColor = bgcolors[this.index];
            getPrevNode(spanArr[this.index]).style.color = '#000';
            animate(spanArr[this.index], { "height": "5" });
        }
    }
    //slider 
    slider.onmouseover = function() {
        console.log(1)
        boxLeftRight.style.display = "block";
    }
    slider.onmouseout = function() {
        boxLeftRight.style.display = "none";
    }
    var index = 0;
    btnArr[1].onclick = function() {
        index++;
        console.log(index);

        if (index > ul.children.length - 1) {
            index = 0;
        }
        animate(ul, { "left": -index * imgWidth });
    }
    btnArr[0].onclick = function() {
        index--;
        console.log(index);
        if (index < 0) {
            index = ul.children.length - 1;
        }
        animate(ul, { "left": -index * imgWidth });
    }
}()