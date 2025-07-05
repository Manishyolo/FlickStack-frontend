export const images = Array.from({ length: 30 }, (_, i) => {
  const width = Math.floor(Math.random() * 200) + 400; // 400–600
  const height = Math.floor(Math.random() * 300) + 400; // 400–700

  return {
    id: i + 1,
    src: `https://picsum.photos/${width}/${height}?random=${i + 1}`,
    alt: `Random Image ${i + 1}`,
    width,
    height,
  };
});
