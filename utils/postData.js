const postData = async (url, data, authKey) => {
  if (process.env.NODE_ENV === "development") {
    if (url == undefined) throw Error("Can not post Data");
    if (data == undefined) throw Error("Can not post Data");
  }
  try {
    const postData = {
      method: "POST",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    };
    if (authKey !== undefined) {
      postData.headers.Authorization = `${btoa(authKey)}`;
    }

    const response = await fetch(url, postData);
    if (response.ok) return response.json();
    else return null;
  } catch (err) {
    console.log("Network Error", err);
    return null;
  }
};

export default postData;
