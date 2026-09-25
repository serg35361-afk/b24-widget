export default async (request, context) => {
  // Перехватываем POST от Битрикс24 и отдаем index.html как GET
  const url = new URL(request.url);
  url.pathname = "/index.html";
  
  return context.rewrite(url.toString());
};
