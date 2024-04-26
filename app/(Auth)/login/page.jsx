'use client'
import { UploadDropzone } from '@uploadthing/react'
import Error from 'next/error';
import React from 'react'

function page() {
  return (
    <div>
      <h1>Login</h1>
      <form>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadDropzone
        endpoint="VehicleImage"
        onClientUploadComplete={(res) => {
         
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
      </form>
    </div>
  )
}

export default page