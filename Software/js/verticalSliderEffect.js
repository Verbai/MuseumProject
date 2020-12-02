    $(function () {
        var scroll = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60)
            }
        var $box = $(".box"),
            $container = $(".scroll-container");

        var boxHeight = 190.3 + 21.6 //$box.height() + parseInt($box.css("margin-top"));

        function update() {
            var scrollTop = $container.scrollTop();
            var index = Math.floor(scrollTop / (boxHeight));
            var indexOfLast = index + 5;
            var $currentBox = $container.find(".box[data-index='" + index + "']");
            var indexOfFirst = index - 1;
            var $lastBox = $container.find(".box[data-index='" + indexOfLast + "']");

            indexOfLast++;

            var $nextBox = $container.find(".box[data-index='" + indexOfLast + "']");
            var $firstBox = $container.find(".box[data-index='" + indexOfFirst + "']");

            $(".box").not($currentBox).addClass("inactive");

            $currentBox.removeClass("inactive");
            $lastBox.removeClass("inactive");
            $nextBox.removeClass("inactive");
            $firstBox.removeClass("inactive");

            var sc = scrollTop - index * boxHeight;
            var scale = 1 - (sc / boxHeight);

            $currentBox.css({
                "opacity": scale
            });

            var scale = (sc / boxHeight);
            
            $lastBox.css({
                "opacity": scale
            });
            $nextBox.css({
                "opacity": 0
            });
            $firstBox.css({
                "opacity": 0
            });
            scroll(update);
        }

        window.addEventListener('load', update, false);

    });