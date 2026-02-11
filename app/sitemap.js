export default function sitemap() {
  const baseUrl = "https://ayrisglobal.com";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/products/assure-pat`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products/ayris-pay`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products/assure-pos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
