export default async (request, context) => {
  // Если запрос пришел методом POST (от Битрикс24), пересоздаем его как GET
  if (request.method === "POST") {
    const url = new URL(request.url);
    url.pathname = "/index.html";
    
    // Делаем внутренее обращение к index.html через GET
    const getRequest = new Request(url.toString(), {
      method: "GET",
      headers: request.headers,
    });
    
    return fetch(getRequest);
  }

  // Для обычных GET-запросов отдаем стандартно
  return context.next();
};
