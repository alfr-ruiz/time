declare module 'pocketbase' {
  export default class PocketBase {
    constructor(url: string, authStore?: any);
    collection(collection: string): PocketBaseCollection;
    authStore: {
      model: any;
      token: string;
      clear: () => void;
      save: (token: string, model?: any) => void;
      isValid: boolean;
    };
    autoCancellation: (cancelKey: boolean) => void;
    authWithPassword: (email: string, password: string, options?: any) => Promise<any>;
    authWithOAuth2: (provider: string, code: string, codeVerifier: string, redirectUrl: string, options?: any) => Promise<any>;
    admins: any;
    collections: any;
    files: any;
    health: any;
    logs: any;
    records: any;
    settings: any;
    users: any;
  }

  // Interface for collection methods
  interface PocketBaseCollection {
    subscribe: (filter: string, callback: (data: any) => void) => void;
    getList: <T = any>(page?: number, perPage?: number, options?: any) => Promise<{
      page: number;
      perPage: number;
      totalItems: number;
      totalPages: number;
      items: T[];
    }>;
    getOne: <T = any>(id: string, options?: any) => Promise<T>;
    getFullList: <T = any>(options?: any) => Promise<T[]>;
    create: <T = any>(data: any, options?: any) => Promise<T>;
    update: <T = any>(id: string, data: any, options?: any) => Promise<T>;
    delete: <T = any>(id: string, options?: any) => Promise<boolean>;
    authWithPassword: (email: string, password: string, options?: any) => Promise<any>;
  }
}
