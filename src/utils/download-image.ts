export const downloadImage = async (url: string, filename: string, onSuccess?: () => void, onError?: () => void) => {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
    onSuccess?.();
  } catch (error) {
    console.error(error);
    onError?.();
  }
};
