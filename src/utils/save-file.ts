/**
 *
 * @param blob File data
 * @param name 확장자와 같이 작성 필요 (ex - 무제.pdf)
 */
export const saveFile = async (blob: Blob, name: string = '무제.pdf') => {
  const a = document.createElement('a');
  a.download = name;
  a.href = URL.createObjectURL(blob);

  a.addEventListener('click', () => {
    setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
  });
  a.click();
};
