var app = angular.module("wordsAndPhrases", []);

app.controller('contentController', function($scope) {

    var words = ['Splendid', 'Remarkable', 'Marvelous', 'Sublime', 'Radiant', 'Charming', 'Tantalizing', 'Glorious', 'Exquisite', 'Dazzling', 'Riveting', 'Grand', 'Majestic', 'Tremendous'];
    var moreWords = ['“It Doesn’t Matter Where You Came From. All That Matters Is Where You Are Going.” - Brian Tracy', '“Think Big And Don’t Listen To People Who Tell You It Can’t Be Done. Life’s Too Short To Think Small.” - Tim Ferriss', '“You Can Develop Any Habit Or Thought Or Behavior That You Consider Desirable Or Necessary.” - Brian Tracy', '“We Become What We Think About.” - Earl Nightingale', '“A Clear Vision, Backed By Definite Plans, Gives You A Tremendous Feeling Of Confidence And Personal Power.” - Brian Tracy', '“Everything You’ve Ever Wanted Is On The Other Side Of Fear.” - George Addair', '“Success Is Getting What You Want, Happiness Is Wanting What You Get.” – W. P. Kinsella', '"Your Life Only Gets Better When You Get Better.” - Brian Tracy', '“Success Does Not Consist In Never Making Mistakes, But In Never Making The Same One A Second Time.” – George Bernard Shaw', '“Happiness Is Not Something Readymade. It Comes From Your Own Actions.” - Dalai Lama', ''];
    var wordsStyle = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    $scope.newContent = [];


    $scope.addWords = function() {
        var added = {};
        added.pushed = words[Math.floor(Math.random() * words.length)];
        $scope.newContent.push(added);
        console.log(added);
    };

    $scope.addWordsStyle = function() {
        var added = {};
        added.pushed = words[Math.floor(Math.random() * wordsStyle.length)];
        added.style = wordsStyle[Math.floor(Math.random() * wordsStyle.length)];
        $scope.newContent.push(added);
        console.log(added);

    };

    $scope.addPhrase = function() {
        var added = {};
        added.pushed = moreWords[Math.floor(Math.random() * moreWords.length)];
        $scope.newContent.push(added);
        console.log(added);

    };

    $scope.addPhraseStyle = function() {
        var added = {};
        added.pushed = moreWords[Math.floor(Math.random() * wordsStyle.length)];
        added.style = wordsStyle[Math.floor(Math.random() * wordsStyle.length)];
        $scope.newContent.push(added);
        console.log(added);

    };









});
