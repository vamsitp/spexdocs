// utilities
var getAll = function (selector, scope) {
    scope = scope ? scope : document;
    return scope.querySelectorAll(selector);
};

//in page scrolling for documentaiton page
var btns = getAll('.js-btn');
var sections = getAll('.js-section');
if (btns.length && sections.length > 0) {
    // for (var i = 0; i<btns.length; i++) {
    //   btns[i].addEventListener('click', function(event) {
    //     smoothScrollTo(sections[i], event);
    //   });
    // }
    btns[0].addEventListener('click', function (event) {
        smoothScrollTo(sections[0], event);
    });

    btns[1].addEventListener('click', function (event) {
        smoothScrollTo(sections[1], event);
    });

    btns[2].addEventListener('click', function (event) {
        smoothScrollTo(sections[2], event);
    });

    btns[3].addEventListener('click', function (event) {
        smoothScrollTo(sections[3], event);
    });

    btns[4].addEventListener('click', function (event) {
        smoothScrollTo(sections[4], event);
    });

    btns[5].addEventListener('click', function (event) {
        smoothScrollTo(sections[5], event);
    });

    btns[6].addEventListener('click', function (event) {
        smoothScrollTo(sections[6], event);
    });
}

// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('demo').length > 0) {
    var i = 0;
    var txt = `

    >> spex
    Enter s to sync SpecFlow Features to AzDevOps TestCases
    Enter d to demo/dry-run the AzDevOps sync
    Enter m to generate AzDevOps TestCase-UserStory association matrix
    Enter r to generate AzDevOps TestCases report
    Enter c to clear the console
    Enter q to quit
    Enter + to upgrade
    Enter ? to print this help
            `;
    var speed = 15;

    function typeItOut() {
        if (i < txt.length) {
            document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
            //// hljs.initHighlighting.called = false;
            //// hljs.initHighlighting();
            // hljs.highlightBlock(document.getElementsByClassName('demo')[0])
            i++;
            setTimeout(typeItOut, speed);
        }
    }

    setTimeout(typeItOut, 1800);
}
