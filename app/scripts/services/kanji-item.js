/*global $:false */
'use strict';

KanjiItem
-kanji
-keyword
-equals()
-correct()
-incorrect()

angular.module('japaneseHelperApp')
	.factory('kanjiItem', function(){
	
	var kanjiItem = {};
	
	kanjiItem.kanji = 
	
	
	kanjiHelper.KanjiToRadical = function () {
	
		//pass in a kanji and this function will return the radicals for it.
		this.GetRadicals = function (kanji) {
			return rad[kanji];
		};
	};

	kanjiHelper.RtkList = function () {

		//rtk ordering
var rtkArray = rtkList.split(',');
	
		this.GetById = function (rtkId) {
	
			//do this because arrays start from 0
			rtkId = rtkId - 1;
		
			return rtkArray[rtkId];
		};
	
		this.Length = function () {
			return rtkArray.length;
		};
	
	};

	kanjiHelper.KanjiKeywordList = function () {
	var lookuplist = [];
	
		for (var i=0;i<charlistA.length;i++)
		{
			if (lookuplist[charlistA[i]] === undefined)
			{
				lookuplist[charlistA[i]] = charlistB[i];
			}
			if (lookuplist[charlistB[i]] === undefined)
			{
				lookuplist[charlistB[i]] = charlistA[i];
			}
		}
	
		//value can be either a english keyword or a kanji character
		this.Get = function (value) {
			return lookuplist[value];
		};
	};
	
  return kanjiHelper;
});



