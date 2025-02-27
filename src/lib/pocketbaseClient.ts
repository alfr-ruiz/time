import PocketBase from 'pocketbase';

// Initialize PocketBase client
// Note: In production, consider using a more secure approach for API credentials
const url = process.env.NEXT_PUBLIC_POCKETBASE_URL!;
export const pb = new PocketBase(url);

// For browser environments, you can use auto-cancellation
export const subscribeToCollection = (collection: string, callback: (data: any) => void) => {
  return pb.collection(collection).subscribe('*', callback);
};
