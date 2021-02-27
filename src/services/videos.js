const getVideos = async () => {
  const response = await fetch("https://api.jsonbin.io/b/60340fc4f1be644b0a63433c", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if(response.ok){
    return response.json();
  }

  return response;
}

export default getVideos;