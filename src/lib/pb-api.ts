/**
 * PocketBase API Integration
 * 
 * This file provides higher-level API integrations for common PocketBase operations
 * used throughout the application.
 */

import { pb } from './pocketbaseClient';
import type PocketBase from 'pocketbase';

// Collection names - centralize these to make updates easier
export const COLLECTIONS = {
  USERS: 'users',
  TIME_ENTRIES: 'time_entries',
  PROJECTS: 'projects',
  TAGS: 'tags',
};

// Generic types for collection records
export type CollectionRecord = {
  id: string;
  created: string;
  updated: string;
  collectionId: string;
  collectionName: string;
};

export type TimeEntry = CollectionRecord & {
  title: string;
  description?: string;
  start_time: string;
  end_time?: string;
  user: string;
  project?: string;
  tags?: string[];
  is_running: boolean;
};

export type Project = CollectionRecord & {
  name: string;
  description?: string;
  color?: string;
  owner: string;
};

export type Tag = CollectionRecord & {
  name: string;
  color?: string;
};

export type User = CollectionRecord & {
  email: string;
  name?: string;
  avatar?: string;
};

// API class with type-safe methods for PocketBase interactions
export class TimeTrackerAPI {
  private pb: PocketBase;

  constructor(pocketbaseClient: PocketBase = pb) {
    this.pb = pocketbaseClient;
  }

  // Auth methods
  async login(email: string, password: string) {
    return this.pb.collection(COLLECTIONS.USERS).authWithPassword(email, password);
  }

  async register(email: string, password: string, passwordConfirm: string, name?: string) {
    return this.pb.collection(COLLECTIONS.USERS).create({
      email,
      password,
      passwordConfirm,
      name,
    });
  }

  async logout() {
    return this.pb.authStore.clear();
  }

  get isLoggedIn() {
    return this.pb.authStore.isValid;
  }

  get currentUser() {
    return this.pb.authStore.model;
  }

  // Time Entry methods
  async getTimeEntries(
    filter = '',
    sort = '-created',
    expand = 'project,tags',
  ) {
    return this.pb.collection(COLLECTIONS.TIME_ENTRIES).getList<TimeEntry>(1, 50, {
      filter,
      sort,
      expand,
    });
  }

  async startTimeEntry(title: string, projectId?: string, tags?: string[]) {
    return this.pb.collection(COLLECTIONS.TIME_ENTRIES).create<TimeEntry>({
      title,
      start_time: new Date().toISOString(),
      is_running: true,
      project: projectId,
      tags,
      user: this.pb.authStore.model?.id,
    });
  }

  async stopTimeEntry(id: string) {
    return this.pb.collection(COLLECTIONS.TIME_ENTRIES).update<TimeEntry>(id, {
      end_time: new Date().toISOString(),
      is_running: false,
    });
  }

  async getRunningTimeEntry() {
    const result = await this.pb.collection(COLLECTIONS.TIME_ENTRIES).getList<TimeEntry>(1, 1, {
      filter: 'is_running=true && user="' + this.pb.authStore.model?.id + '"',
    });
    
    return result.items.length > 0 ? result.items[0] : null;
  }

  // Project methods
  async getProjects() {
    return this.pb.collection(COLLECTIONS.PROJECTS).getFullList<Project>();
  }

  async createProject(name: string, description?: string, color?: string) {
    return this.pb.collection(COLLECTIONS.PROJECTS).create<Project>({
      name,
      description,
      color,
      owner: this.pb.authStore.model?.id,
    });
  }

  // Tag methods
  async getTags() {
    return this.pb.collection(COLLECTIONS.TAGS).getFullList<Tag>();
  }

  // Realtime subscriptions
  subscribeToTimeEntries(callback: (data: unknown) => void) {
    return this.pb.collection(COLLECTIONS.TIME_ENTRIES).subscribe('*', callback);
  }
}

// Export a singleton instance for use throughout the app
export const timeTrackerAPI = new TimeTrackerAPI();

// Export the raw client for advanced use cases
export { pb };
