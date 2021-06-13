const postData = async (url, data, authKey) => {
  if (url == undefined) throw Error("Can not post Data");
  if (data == undefined) throw Error("Can not post Data");
  try {
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${btoa(authKey)}`,
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    if (response.status == 201) return response.json();
    else return null;
  } catch (err) {
    console.log("Network Error", err);
    return null;
  }
};

export default postData;
