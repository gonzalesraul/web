import * as types from '../constants/actionTypes';

export function requestTasks() {
  return {
    type: types.REQUEST_TASKS,
  };
}

export function receiveTasks(tasks) {
  return {
    type: types.RECEIVE_TASKS,
    payload: tasks,
  };
}

export function newTask() {
  return {
    type: types.NEW_TASK,
  };
}

export function saveTask(task) {
  return {
    type: types.SAVE_TASK,
    payload: task,
  };
}

export function saveTaskPending() {
  return {
    type: types.SAVE_TASK_PENDING,
  };
}

export function saveTaskFulfilled(task) {
  return {
    type: types.SAVE_TASK_FULFILLED,
    payload: task,
  };
}

export function saveTaskRejected(error) {
  return {
    type: types.SAVE_TASK_REJECTED,
    payload: error,
  };
}

export function updateImportantTasksOrder(payload) {
  return {
    type: types.UPDATE_IMPORTANT_TASKS_ORDER,
    payload,
  };
}

export function updateImportantTasksOrderPending() {
  return {
    type: types.UPDATE_IMPORTANT_TASKS_ORDER_PENDING,
  };
}

export function updateImportantTasksOrderFulfilled(tasks) {
  return {
    type: types.UPDATE_IMPORTANT_TASKS_ORDER_FULFILLED,
    payload: tasks,
  };
}

export function updateImportantTasksOrderRejected(error) {
  return {
    type: types.UPDATE_IMPORTANT_TASKS_ORDER_REJECTED,
    payload: error,
  };
}
