import { REACT_APP_GOOGLE_API_KEY, REACT_APP_CLOUD_NAME } from '@env';

const API_KEY = REACT_APP_GOOGLE_API_KEY;
export const CLOUDINARY_NAME = REACT_APP_CLOUD_NAME;

//this endpoint will tell Google to use the Vision API. We are passing in our key as well.
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

function generateBody(image: any) {
  const body = {
    requests: [
      {
        image: {
          content: image
        },
        features: [
          {
            type: 'TEXT_DETECTION',
            maxResults: 1
          }
        ]
      }
    ]
  };
  return body;
}

async function callGoogleVisionAsync(
  image: any,
  setLoading: (val: boolean) => void,
  setShowConvertedImage: (val: boolean) => void,
  setConvertedText: (val: string) => void
) {
  setLoading(true);
  const body = generateBody(image); 

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  if (response) {
    const result = await response.json();
    setConvertedText(result.responses[0].fullTextAnnotation.text);
    setLoading(false);

    setShowConvertedImage(true);
  }
}
export default callGoogleVisionAsync;

