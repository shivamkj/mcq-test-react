const postData = async (url, data, authKey) => {
  if (url == undefined) throw Error("Can not post Data");
  if (data == undefined) throw Error("Can not post Data");
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authentication: authKey,
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  if (response.status == 201) return response.json();
  else return null;
};

export default postData;
