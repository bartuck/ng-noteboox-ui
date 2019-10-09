import { RouterConfig } from '../interfaces/router-config.interface';

export const routerConfig: RouterConfig = {
  users: {
    base: 'users'
  },
  notebooks: {
    base: 'notebooks',
    notes: 'notes',
    note: 'note',
    params: {
      notebookId: 'notebookId',
      noteId: 'noteId'
    }
  }
};
