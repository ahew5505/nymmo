import { createRxDatabase, addRxPlugin, type RxDatabase, type RxCollection, type RxJsonSchema } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';

// Add development mode plugin if in dev environment
if (import.meta.env.DEV) {
  addRxPlugin(RxDBDevModePlugin);
}

export interface CourseDocType {
  id: string;
  title: string;
  code: string;
  updatedAt: number;
  content: Record<string, any>;
  isOfflineSynced: boolean;
}

export const courseSchema: RxJsonSchema<CourseDocType> = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 100
    },
    title: {
      type: 'string'
    },
    code: {
      type: 'string'
    },
    updatedAt: {
      type: 'number'
    },
    content: {
      type: 'object'
    },
    isOfflineSynced: {
      type: 'boolean'
    }
  },
  required: ['id', 'title', 'code', 'updatedAt', 'content', 'isOfflineSynced']
};

export type CourseCollection = RxCollection<CourseDocType>;
export type StudioDatabase = RxDatabase<{ courses: CourseCollection }>;

let dbPromise: Promise<StudioDatabase> | null = null;

export async function getDatabase(): Promise<StudioDatabase> {
  if (!dbPromise) {
    dbPromise = (async () => {
      const db = await createRxDatabase<{ courses: CourseCollection }>({
        name: 'nymmo_academic_studio_db',
        storage: getRxStorageDexie()
      });

      await db.addCollections({
        courses: {
          schema: courseSchema
        }
      });

      return db;
    })();
  }

  return dbPromise;
}
