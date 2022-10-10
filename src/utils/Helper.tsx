// never try this for a prod app, use env
const API_KEY = 'AIzaSyDXdGEI05QKEk4Q1mHilZ8wRCpMcklC-l4';

//this endpoint will tell Google to use the Vision API. We are passing in our key as well.
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

function generateBody(image: any) {
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: 'TEXT_DETECTION', //we will use this API for text detection purposes.
            maxResults: 1,
          },
        ],
      },
    ],
  };
  return body;
}

async function callGoogleVisionAsync(
  image: any,
  setLoading: (val: boolean) => void,
) {
  setLoading(true);
  const body = generateBody(image); //pass in our image for the payload

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (response) {
    const result = await response.json();
    setLoading(false);
    // console.log({
    //   apiCallResult: result,
    // });
  }
}
export default callGoogleVisionAsync;

// 23f@@^^hnAl90"4rt
