var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var result = reducers.searchTextReducer(df(''), df(action));

      expect(result).toEqual(action.searchText);
    })
  })
  describe("showCompletedReducer", () => {
    it('should return true from toggleCompleted', () => {
      var action = {
        type: "TOGGLE_SHOW_COMPLETED"
      }

      var result = reducers.showCompletedReducer(df(true), df(action));

      expect(result).toBe(false);
    });
  });
});
