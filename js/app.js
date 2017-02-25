// var trans = require('./namespaces.json');

var translationsEn = {
  'HEADING': "I am a heading.",
  'TEXT1': "I am some text.",
  'TEXT2': "I am a bit more text.",
  'BUTTON_LANG_EN': "English",
  'BUTTON_LANG_JP': "日本語"
};

var translationsJp = {
  'HEADING': "私は見出しです！",
  'TEXT1': "私は文章です",
  'TEXT2': "これは何ですか？",
  'BUTTON_LANG_EN': "English",
  'BUTTON_LANG_JP': "日本語"
};

var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {
  // add translation table
  $translateProvider
    .translations('en', translationsEn)
    .translations('jp', translationsJp)
    .preferredLanguage('jp')
    .fallbackLanguage('jp');
}]);

app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);
