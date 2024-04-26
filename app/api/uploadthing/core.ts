
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
const handleAuth = () => {
  //     const {userId} =auth();
  //     if (!userId) throw new Error('unauthorized');
  //     return {userId: userId}
  // }
  return { userId: '123' }
}
export const ourFileRouter = 
{
   VehicleImage: f({image: {maxFileSize: '4MB', maxFileCount:1}})
  .middleware(()=> handleAuth())
  .onUploadComplete(()=>{}),
  
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;