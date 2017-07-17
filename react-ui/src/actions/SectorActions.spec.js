import {
  requestSectors,
  receiveSectors,
  newSector,
  saveSector,
  saveSectorPending,
  saveSectorFulfilled,
  saveSectorRejected,
} from './SectorActions.js';

describe('Sector Actions', () => {
  describe('post sector', () => {
    it('should create an action new sector', () => {
      const expectedAction = {
        type: 'NEW_SECTOR',
      };
      expect(newSector()).toEqual(expectedAction);
    });
    it('should create an action to save a sector', () => {
      const sector = {
        _id: 1,
        title: 'test sector actions',
        score: 1,
        desirableScore: 2,
      };
      const expectedAction = {
        type: 'SAVE_SECTOR',
        payload: sector,
      };
      expect(saveSector(sector)).toEqual(expectedAction);
    });
    it('should create an action to save pending a sector', () => {
      const expectedAction = {
        type: 'SAVE_SECTOR_PENDING',
      };
      expect(saveSectorPending()).toEqual(expectedAction);
    });
    it('should create an action to save fulfilled a sector', () => {
      const sector = {
        _id: 1,
        title: 'test sector actions',
        score: 1,
        desirableScore: 2,
      };
      const expectedAction = {
        type: 'SAVE_SECTOR_FULFILLED',
        payload: sector,
      };
      expect(saveSectorFulfilled(sector)).toEqual(expectedAction);
    });
    it('should create an action to save rejected a sector', () => {
      const response = {
        status: 400,
        data: {
          message: 'ValidationError',
          errors: {
            'sectors.0.title': 'Title sector is required',
            'sectors.0.score': 'Score sector is required',
            'sectors.0.desirableScore': 'Desirable score sector is required',
          },
        },
      };
      const expectedAction = {
        type: 'SAVE_SECTOR_REJECTED',
        payload: response,
      };
      expect(saveSectorRejected(response)).toEqual(expectedAction);
    });
  });
  describe('get sectors', () => {
    it('should create an action request sectors', () => {
      const expectedAction = {
        type: 'REQUEST_SECTORS',
      };
      expect(requestSectors()).toEqual(expectedAction);
    });
    it('should create an action receive sectors', () => {
      const sector = {
        _id: 1,
        title: 'test sector actions',
        score: 1,
        desirableScore: 2,
      };
      const expectedAction = {
        type: 'RECEIVE_SECTORS',
        payload: sector,
      };
      expect(receiveSectors(sector)).toEqual(expectedAction);
    });
  });
});