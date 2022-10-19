export interface IRoutingPath {
  path: string;
  fullpath: string;
}

export const AUTH_PATH: IRoutingPath = {
  path: 'auth',
  fullpath: '/auth',
};

export const CALLS_PATH: IRoutingPath = {
  path: 'calls',
  fullpath: '/calls',
};

export const RECENT_CALLS_PATH: IRoutingPath = {
  path: 'recent-calls',
  fullpath: '/recent-calls',
};
