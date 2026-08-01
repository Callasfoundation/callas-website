const CLOUD_NAME = "wqf2tvjf";
const UPLOAD_PRESET = "callas_uploads";

export async function uploadToCloudinary(file: File, resourceType: "image" | "video" | "raw" = "image"): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${resourceType}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const detail = await res.json().catch(() => null);
    throw new Error(detail?.error?.message || "Upload failed");
  }

  const data = await res.json();
  let url = data.secure_url as string;

  // Force universally-compatible H.264 MP4 output for videos — phone recordings
  // (especially iPhone .mov/HEVC) otherwise fail to decode video in many browsers
  // and silently fall back to an audio-only player.
  if (resourceType === "video") {
    url = url.replace("/upload/", "/upload/f_mp4,vc_h264/");
  }

  return url;
}