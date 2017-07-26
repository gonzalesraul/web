import { takeLatest } from 'redux-saga/effects';
import * as SectorSagas from './SectorSagas';
import * as TaskSagas from './TaskSagas';
import * as types from '../constants/actionTypes';

export function* watchSaveSector() {
  yield takeLatest(types.SAVE_SECTOR, SectorSagas.saveSector);
}

export function* watchRequestSectors() {
  yield takeLatest(types.REQUEST_SECTORS, SectorSagas.fetchSectors);
}

export function* watchRequestSector() {
  yield takeLatest(types.REQUEST_SECTOR, SectorSagas.fetchSector);
}

export function* watchUpdateSector() {
  yield takeLatest(types.UPDATE_SECTOR, SectorSagas.updateSector);
}

export function* watchUpdateSectorOrder() {
  yield takeLatest(types.UPDATE_SECTOR_ORDER, SectorSagas.updateSectorOrder);
}

export function* watchSaveTask() {
  yield takeLatest(types.SAVE_TASK, TaskSagas.saveTask);
}

export function* watchRequestTasks() {
  yield takeLatest(types.REQUEST_TASKS, TaskSagas.fetchTasks);
}

export function* watchUpdateImportantTasksOrder() {
  yield takeLatest(types.UPDATE_IMPORTANT_TASKS_ORDER, TaskSagas.updateImportantTasksOrder);
}
