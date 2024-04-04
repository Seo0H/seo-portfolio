/**
 *
 * @param blob File data
 * @param name 확장자와 같이 작성 필요 (ex - Untitled.pdf)
 * @param ms createObjectUrl 메무리 유지 시간
 */
export const saveFile = async (
  blob: Blob,
  name: string = 'Untitled.pdf',
  ms: number = 30 * 1000,
) => {
  const a = document.createElement('a');
  a.download = name;
  a.href = URL.createObjectURL(blob);

  a.addEventListener('click', () => {
    setTimeout(() => URL.revokeObjectURL(a.href), ms);
  });
  a.click();
};
