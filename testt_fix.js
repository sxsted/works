    var titlee = 'tysh310246',
        pos = [],
        nu1,
        titleChange = document.getElementById('ge');
    titleChange.addEventListener('onclick', mytitle);

    function mytitle(tt) {
        var hi = document.getElementById('ptype');
        script = document.createElement("script");
        hi.innerHTML = " ";
        if(hi.textContent.length == 1) {
            hi.style.height = 'auto';
        }

        script.src = "http://" + tt + ".blogspot.com/feeds/posts/default?alt=json&callback=blog";

        //scriptE1.src = "http://tedshd.lionfree.net/demo/php/api_test.php?callback=test";
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    function blog(data) {
        var blog_title = data.feed.title.$t,
            myArray = data.feed.entry,
            myUpdate = data.feed.entry;
        document.getElementById('blog_title').innerHTML = blog_title;
        
        myFunction(myArray, myUpdate);

        function myFunction(arr, upt) {
            var out = "",
                out1 = "",
                i,
                dTime = [],
                dDate = getCookie("lastTime"),
                nu1,
                line;
            for (i = 0; i < arr.length; i++) {
                line = arr[i].title.$t;
                dTime.push(upt[i].updated.$t.substr(0, 10) + ' ' + upt[i].updated.$t.substr(11, 8));
                if ((Date.parse(dTime[i])).valueOf() > (Date.parse(dDate)).valueOf()) {
                    out += '<li id="to" onclick="touchscroll(' + i + ')">' +
                        '<a href =#  class="hvr-fade">' + line +
                            '<div class ="dateStyle-new"></div>' +
                        '</a>' +
                    '</li>';
                } else {
                    out1 += '<li id="to"onclick="touchscroll(' + i + ')">' + '<a href =# class="hvr-fade">' + line + '</a></li>';
                }
            }
            if (getCookie("lastTime") !== dTime[0]) {
                setCk(dTime[0]);
            }
            document.getElementById('idd').innerHTML = out + out1;
        }


        ff(myArray);

        function ff(ffd) {
            var ier = "",
                out2 = "",
                i2,
                i;
            for (i2 = 0; i2 < ffd.length; i2++) {
                out2 += '<a name=title_' + i2 + '></a>' + '<h2 class="spa">' + ffd[i2].title.$t + '</h2>' + '<p>' + ffd[i2].content.$t + '</p><br>';
            }
            document.getElementById('idd2').innerHTML = out2;
            //測試有沒有抓到值
            // alert(pos[6]);
        }
        /*測試有沒有抓到值
        alert(document.querySelectorAll('h2')[6].textContent);
        alert(pos[6]);
        */
        heightli();
    }

    /*
    tt = JSON.parse(blog());
    document.getElementById("ff").innerHTML = tt.category;
    */

    function ShowTime() {
        var NowDate = new Date(),
            h = NowDate.getHours(),
            m = NowDate.getMinutes(),
            s = NowDate.getSeconds();
        document.getElementById('showtime').innerHTML = NowDate.getFullYear() + '年' + (NowDate.getMonth() + 1) + '月' + NowDate.getDate() + '日' + h + ':' + m + ':' + s;
        setTimeout(function () {
            ShowTime();
        }, 1000);
    }
    /*
    ShowTime();
    */
    $('#toggleMenu').on('click', function() {
        $('.slide-menu, .mmenu').toggleClass('slide-in-left');
    });

    $('#idd').on('click', function() {
        $('.slide-menu.slide-in-left, .mmenu.slide-in-left').removeClass('slide-in-left');
    });


    function heightli() {
        var sDom = document.getElementById('idd'),
            sTag = sDom.getElementsByTagName('li');
        for (var i = 0; i <= sTag.length; i++) {
            var tText = sTag[i].getElementsByTagName('a')[0];
            if (tText.textContent.length > 15) {
                tText.style.color = 'green';
            }
        }
    }
    // if (titleChange.addEventListener("click", mytitle)) {}

    function touchscroll(ee) {
            pos = [];
            for (i = 0; i < 25; i++) {
                pos.push(document.querySelectorAll('.spa')[i].offsetTop);
            }
        document.querySelector('.mmenu').scrollTop = pos[ee];
    }

    /* 這段是在開發者工具console上面測試的語句
    document.getElementById("idd").getElementsByTagName("li")[0].getElementsByTagName("a")[0].textContent.length
    */

    /*這是頁面重新loading 每30秒
    function pgreload(){
    window.location.reload();
    }
    setTimeout('pgreload()',30000);
    */

    function setCk(dTime) {
        var last = dTime;
        document.cookie = "lastTime=" + last;
        //return last;
    }

    function getCookie(cname) {
        var name = cname + '=',
            ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
