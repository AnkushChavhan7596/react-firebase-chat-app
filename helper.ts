// helper.ts
import { ref, uploadBytesResumable, getDownloadURL, UploadTaskSnapshot } from "firebase/storage";
import { storage } from "./firebase";

interface UploadResult {
  progress: number;
  downloadURL: string | null;
}

export const uploadFile = async (
  file: File,
  destinationFolder: string,
  onProgress: (progress: number) => void
): Promise<UploadResult> => {
  const uniqueFilename = Date.now() + '_' + file.name;
  const storageRef = ref(storage, `${destinationFolder}/${uniqueFilename}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise<UploadResult>((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot: UploadTaskSnapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        onProgress(progress);
      },
      (error) => {
        console.error('Error during upload:', error);
        reject(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('File available at', downloadURL);
          resolve({ progress: 100, downloadURL });
        } catch (error) {
          console.error('Error getting download URL:', error);
          reject(error);
        }
      }
    );
  });
};
