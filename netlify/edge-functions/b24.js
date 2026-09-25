export default async (request, context) => {
  const url = new URL(request.url);
  url.pathname = "/index.html";

  // Принудительно запрашиваем index.html методом GET
  const response = await context.rewrite(url.toString(), {
    method: "GET"
  });

  return response;
};
