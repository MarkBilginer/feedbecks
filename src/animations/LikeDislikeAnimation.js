import mojs from 'mo-js';

// taken from mo.js demos
function isIOSSafari() {
    var userAgent;
    userAgent = window.navigator.userAgent;
    return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
};

// taken from mo.js demos
function isTouch() {
    var isIETouch;
    isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    return []
        .indexOf
        .call(window, 'ontouchstart') >= 0 || isIETouch;
};

// taken from mo.js demos
var isIOS = isIOSSafari(),
    clickHandler = isIOS || isTouch()
        ? 'touchstart'
        : 'click';

function extend(a, b) {
    for (var key in b) {
        if (b.hasOwnProperty(key)) {
            a[key] = b[key];
        }
    }
    return a;
}

function Animocon(el, options) {
    this.el = el;
    this.options = extend({}, this.options);
    extend(this.options, options);

    this.checked = false;

    this.timeline = new mojs.Timeline();

    for (var i = 0, len = this.options.tweens.length; i < len; ++i) {
        this
            .timeline
            .add(this.options.tweens[i]);
    }

    var self = this;
    this
        .el
        .addEventListener(clickHandler, function () {
            if (self.checked) {
                self
                    .options
                    .onUnCheck();
            } else {
                self
                    .options
                    .onCheck();
                self
                    .timeline
                    .replay();
            }
            self.checked = !self.checked;
        });
}

Animocon.prototype.options = {
    tweens: [new mojs.Burst({})],
    onCheck: function () {
        return false;
    },
    onUnCheck: function () {
        return false;
    }
};


function init() {
    //Like Dislike Button array
    var items = [].slice.call(document.querySelectorAll('.likeDislikeAnim'));

    /* Like Button */
    var elLike = items[0],
        elLikeSpan = elLike.querySelector('.fa-thumbs-o-up');
    new Animocon(elLike, {
        tweens: [
            // burst animation
            new mojs.Burst({
                parent: elLike,
                top: '14%',
                left: '71%',
                count: 6,
                radius: {
                    40: 90
                },
                children: {
                    fill: [
                        '#988ADE',
                        '#DE8AA0',
                        '#8AAEDE',
                        '#8ADEAD',
                        '#DEC58A',
                        '#8AD1DE'
                    ],
                    opacity: 0.6,
                    scale: 1,
                    radius: {
                        7: 0
                    },
                    duration: 1500,
                    delay: 300,
                    easing: mojs
                        .easing
                        .bezier(0.1, 1, 0.3, 1)
                }
            }),
            // ring animation
            new mojs.Shape({
                parent: elLike,
                top: '14%',
                left: '71%',
                type: 'circle',
                scale: {
                    0: 1
                },
                radius: 50,
                fill: 'transparent',
                stroke: '#988ADE',
                strokeWidth: {
                    35: 0
                },
                opacity: 0.6,
                duration: 750,
                easing: mojs
                    .easing
                    .bezier(0, 1, 0.5, 1)
            }),
            // icon scale animation
            new mojs.Tween({
                duration: 1100,
                onUpdate: function (progress) {
                    if (progress > 0.3) {
                        var elasticOutProgress = mojs
                            .easing
                            .elastic
                            .out(1.43 * progress - 0.43);
                        elLikeSpan.style.WebkitTransform = elLikeSpan.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
                    } else {
                        elLikeSpan.style.WebkitTransform = elLikeSpan.style.transform = 'scale3d(0,0,1)';
                    }
                }
            })
        ],
        onCheck: function () {
            elLike.style.color = '#988ADE';
        },
        onUnCheck: function () {
            elLike.style.color = '#C0C1C3';
        }
    });
    /* Like Button */

    /* Dislike Button */
    var elDislike = items[1],
        elDislikeSpan = elDislike.querySelector('.fa-thumbs-o-down');
    new Animocon(elDislike, {
        tweens: [
            // burst animation
            new mojs.Burst({
                parent: elDislike,
                top: '14%',
                left: '35%',
                count: 6,
                radius: {
                    40: 90
                },
                children: {
                    fill: [
                        '#988ADE',
                        '#DE8AA0',
                        '#8AAEDE',
                        '#8ADEAD',
                        '#DEC58A',
                        '#8AD1DE'
                    ],
                    opacity: 0.6,
                    scale: 1,
                    radius: {
                        7: 0
                    },
                    duration: 1500,
                    delay: 300,
                    easing: mojs
                        .easing
                        .bezier(0.1, 1, 0.3, 1)
                }
            }),
            // ring animation
            new mojs.Shape({
                parent: elDislike,
                top: '14%',
                left: '35%',
                type: 'circle',
                scale: {
                    0: 1
                },
                radius: 50,
                fill: 'transparent',
                stroke: '#988ADE',
                strokeWidth: {
                    35: 0
                },
                opacity: 0.6,
                duration: 750,
                easing: mojs
                    .easing
                    .bezier(0, 1, 0.5, 1)
            }),
            // icon scale animation
            new mojs.Tween({
                duration: 1100,
                onUpdate: function (progress) {
                    if (progress > 0.3) {
                        var elasticOutProgress = mojs
                            .easing
                            .elastic
                            .out(1.43 * progress - 0.43);
                        elDislikeSpan.style.WebkitTransform = elDislikeSpan.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
                    } else {
                        elDislikeSpan.style.WebkitTransform = elDislikeSpan.style.transform = 'scale3d(0,0,1)';
                    }
                }
            })
        ],
        onCheck: function () {
            elDislike.style.color = '#988ADE';
        },
        onUnCheck: function () {
            elDislike.style.color = '#C0C1C3';
        }
    });
    /* Dislike Button */
}

export default init;
